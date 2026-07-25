"use client";

import { OFFERS } from "@/lib/offers-data";

/**
 * Chairman's message. Autoplays muted (browsers only allow autoplay when
 * muted); the YouTube controls let the viewer unmute and pause/play.
 */
export function ChairmanVideo() {
  const { chairmanYouTubeId, hero } = OFFERS;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 bg-black shadow-2xl lg:max-w-lg">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${chairmanYouTubeId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1`}
        title={hero.videoCaption}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
