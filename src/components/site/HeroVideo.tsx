"use client";

import { useEffect, useRef } from "react";
import { getVideosPaused, subscribeVideosPaused } from "@/lib/video-store";

const FADE_SECONDS = 1.2;

/**
 * Full-bleed hero video with a seamless loop: a second copy crossfades in just
 * before the first one ends, so the loop point is never visible.
 *
 * The second copy only starts downloading once the first is playing, so it never
 * competes with the first paint.
 */
export function HeroVideo({ name }: { name: string }) {
  const first = useRef<HTMLVideoElement>(null);
  const second = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = first.current;
    const b = second.current;
    if (!a || !b) return;

    let current = a;
    let next = b;
    let fading = false;
    let onScreen = true;
    let raf = 0;
    let swapTimer: ReturnType<typeof setTimeout> | undefined;
    let wantPlay = !getVideosPaused();

    const play = (v: HTMLVideoElement) => {
      v.muted = true;
      v.play().catch(() => {});
    };

    const swap = () => {
      fading = true;
      next.currentTime = 0;
      play(next);
      next.style.opacity = "1";
      current.style.opacity = "0";
      swapTimer = setTimeout(() => {
        current.pause();
        [current, next] = [next, current];
        fading = false;
      }, FADE_SECONDS * 1000 + 60);
    };

    const tick = () => {
      if (wantPlay && onScreen && !fading && current.duration) {
        const nearEnd = current.currentTime >= current.duration - FADE_SECONDS - 0.1;
        if ((!current.paused && nearEnd) || current.ended) swap();
      }
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      wantPlay = !getVideosPaused();
      if (wantPlay && onScreen) play(current);
      else {
        a.pause();
        b.pause();
      }
    };

    const loadSecond = () => {
      b.preload = "auto";
      b.load();
    };
    a.addEventListener("playing", loadSecond, { once: true });

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(a);

    const unsubscribe = subscribeVideosPaused(sync);
    sync();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(swapTimer);
      observer.disconnect();
      unsubscribe();
      a.removeEventListener("playing", loadSecond);
    };
  }, []);

  const poster = `/assets/video-posters/${name}.jpg`;
  const sources = (
    <>
      <source src={`/assets/video/${name}.webm`} type="video/webm" />
      <source src={`/assets/video/${name}.mp4`} type="video/mp4" />
    </>
  );
  const shared = {
    muted: true,
    playsInline: true,
    disablePictureInPicture: true,
    poster,
    "aria-hidden": true,
    className: "absolute inset-0 h-full w-full object-cover",
  };

  return (
    <>
      <video
        ref={first}
        {...shared}
        autoPlay
        preload="auto"
        style={{ transition: `opacity ${FADE_SECONDS}s linear` }}
      >
        {sources}
      </video>
      <video
        ref={second}
        {...shared}
        preload="none"
        style={{ opacity: 0, transition: `opacity ${FADE_SECONDS}s linear` }}
      >
        {sources}
      </video>
    </>
  );
}
