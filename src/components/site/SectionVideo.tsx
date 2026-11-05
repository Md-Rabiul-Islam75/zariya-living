"use client";

import { useEffect, useRef } from "react";
import { toggleVideosPaused, useVideosPaused } from "@/lib/video-store";

/**
 * A muted looping clip inside a page section. It downloads nothing until it is
 * near the viewport, and pauses again when it scrolls away.
 */
export function SectionVideo({ name, rate }: { name: string; rate?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const near = useRef(false);
  const paused = useVideosPaused();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const sync = () => {
      if (rate) {
        v.defaultPlaybackRate = rate;
        v.playbackRate = rate;
      }
      if (near.current && !paused) {
        v.muted = true;
        v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        near.current = entry.isIntersecting;
        sync();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(v);
    sync();
    return () => observer.disconnect();
  }, [paused, rate]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={`/assets/video-posters/${name}.jpg`}
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={`/assets/video/${name}.webm`} type="video/webm" />
      <source src={`/assets/video/${name}.mp4`} type="video/mp4" />
    </video>
  );
}

/** The Pause / Play videos button shown beside each video grid. */
export function VideosToggle({ className }: { className?: string }) {
  const paused = useVideosPaused();
  return (
    <button type="button" onClick={toggleVideosPaused} aria-pressed={paused} className={className}>
      {paused ? "▶ Play videos" : "❚❚ Pause videos"}
    </button>
  );
}
