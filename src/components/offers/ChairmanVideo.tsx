"use client";

import Image from "next/image";
import { useState } from "react";
import { OFFERS } from "@/lib/offers-data";

/**
 * Lightweight YouTube "facade": shows the chairman poster until clicked, then
 * loads the real iframe (keeps the page fast and avoids YouTube on first paint).
 */
export function ChairmanVideo() {
  const [playing, setPlaying] = useState(false);
  const { chairmanYouTubeId, chairmanPoster, hero } = OFFERS;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 bg-black shadow-2xl lg:max-w-lg">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${chairmanYouTubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`}
          title={hero.videoCaption}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play the chairman's message"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={chairmanPoster}
            alt="Mirza Tanzir Ahmed, Chairman"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
          />
          <span className="absolute inset-0 bg-teal-deep/25" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-[76px] sm:w-[76px]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#092C2C" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-teal-deep/70 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-left text-[11px] font-semibold leading-tight text-white sm:text-xs">
              {hero.videoCaption}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
