"use client";

import Image from "next/image";
import { useEffect, useReducer, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const SLIDE_MS = 4500;

export type Slide = { src: string; alt: string; caption: string };

const OVERLAY =
  "linear-gradient(180deg,rgba(9,44,44,.72) 0%,rgba(9,44,44,.3) 18%,rgba(9,44,44,0) 34%),linear-gradient(90deg,rgba(9,44,44,.88) 0%,rgba(9,44,44,.62) 40%,rgba(9,44,44,.18) 72%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.9) 100%)";

function subscribeReducedMotion(listener: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

type SlideState = { index: number; loaded: number[] };

/** Moves to a slide, and marks it and the one after it for loading. */
function slideReducer(count: number) {
  return (state: SlideState, target: number | "next"): SlideState => {
    const index = ((target === "next" ? state.index + 1 : target) + count) % count;
    const following = (index + 1) % count;
    return { index, loaded: Array.from(new Set([...state.loaded, index, following])) };
  };
}

/**
 * The photo hero used by Agro and Sylhet: crossfading slides with a slow zoom and
 * a glass control pill (counter, progress bars, previous / next, play / pause).
 * It pauses on hover and focus, and starts paused for reduced motion.
 *
 * `children` is the hero copy above the control row.
 */
export function HeroSlideshow({
  slides,
  label,
  background,
  glow,
  children,
}: {
  slides: Slide[];
  label: string;
  background: string;
  glow?: boolean;
  children: ReactNode;
}) {
  const count = slides.length;
  const [{ index, loaded }, dispatch] = useReducer(slideReducer(count), {
    index: 0,
    loaded: [0, 1],
  });
  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [fillKey, setFillKey] = useState(0);
  const elapsed = useRef(0);

  const paused = userPaused ?? reducedMotion;
  const running = !paused && !hovered;

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      elapsed.current += 100;
      if (elapsed.current < SLIDE_MS) return;
      elapsed.current = 0;
      dispatch("next");
    }, 100);
    return () => clearInterval(timer);
  }, [running]);

  const go = (target: number) => {
    elapsed.current = 0;
    dispatch(target);
  };
  const togglePause = () => {
    elapsed.current = 0;
    setFillKey((k) => k + 1);
    setUserPaused(!paused);
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const arrowClass =
    "flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full text-white transition-[background,color] duration-300 ease-[ease] hover:bg-[rgba(255,255,255,.14)] hover:text-z-gold";

  return (
    <section
      data-hero=""
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative flex h-[92vh] min-h-[680px] items-end overflow-hidden"
    >
      <div data-parallax="" className="absolute inset-0 will-change-transform" style={{ background }}>
        {glow && (
          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_90%,rgba(223,193,165,.24),transparent_60%)]" />
        )}
        {slides.map((slide, k) => (
          <div
            key={slide.src}
            role="img"
            aria-label={slide.alt}
            aria-hidden={k !== index}
            className="absolute inset-0"
            style={{
              opacity: k === index ? 1 : 0,
              transform: `scale(${k === index ? 1.08 : 1})`,
              transition: "opacity 1.4s cubic-bezier(.22,.61,.36,1), transform 7.5s linear",
            }}
          >
            {loaded.includes(k) && (
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="100vw"
                preload={k === 0}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: OVERLAY }}
      />

      <div
        data-revrap=""
        data-container=""
        className="relative z-[2] mx-auto w-full max-w-[1320px] px-12 pb-20"
      >
        {children}

        <div
          data-reveal=""
          data-delay="320"
          className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-solid border-[rgba(223,193,165,.3)] pt-6"
        >
          <div aria-live="polite" className="flex min-w-0 items-baseline gap-4">
            <span className="text-[22px] font-medium tracking-[.04em] text-z-gold">
              {pad(index + 1)} / {pad(count)}
            </span>
            <span className="text-[16px] font-semibold tracking-[.02em] text-white">
              {slides[index].caption}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-[18px]">
            <div
              data-heroctl=""
              className="flex items-center gap-[2px] rounded-full border border-solid border-[rgba(255,255,255,.16)] bg-[rgba(9,44,44,.45)] py-[3px] pr-[3px] pl-[14px] shadow-[0_12px_40px_rgba(0,0,0,.28)] backdrop-blur-[16px] backdrop-saturate-[140%]"
            >
              <span aria-hidden="true" className="flex min-w-[46px] items-baseline gap-1">
                <span className="text-[17px] leading-none font-semibold text-white">
                  {pad(index + 1)}
                </span>
                <span className="text-[14px] font-medium text-[rgba(255,255,255,.75)]">
                  / {pad(count)}
                </span>
              </span>
              <span
                aria-hidden="true"
                data-herodiv=""
                className="mr-2 ml-1 h-4 w-px bg-[rgba(255,255,255,.2)]"
              />
              <div
                role="group"
                aria-label="Choose slide"
                data-herodots=""
                className="mr-[6px] flex items-center gap-[2px]"
              >
                {slides.map((slide, k) => {
                  const current = k === index;
                  return (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => go(k)}
                      aria-label={`Slide ${k + 1}: ${slide.caption}`}
                      aria-current={current}
                      className="flex h-6 cursor-pointer items-center px-[2px] transition-[width] duration-[.6s] ease-[cubic-bezier(.16,1,.3,1)]"
                      style={{ width: current ? 34 : count > 8 ? 10 : 14 }}
                    >
                      <span
                        className="relative block h-[2px] w-full overflow-hidden rounded-[2px] transition-[background] duration-300 ease-[ease]"
                        style={{
                          background: current ? "rgba(255,255,255,.28)" : "rgba(255,255,255,.5)",
                        }}
                      >
                        {current && (
                          <span
                            key={`${index}-${fillKey}`}
                            className="absolute inset-0 origin-left bg-z-gold"
                            style={{
                              transform: paused ? "scaleX(1)" : undefined,
                              animation: paused ? "none" : `zfill ${SLIDE_MS}ms linear forwards`,
                              animationPlayState: running ? "running" : "paused",
                            }}
                          />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className={arrowClass}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className={arrowClass}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={togglePause}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-z-gold text-z-deep transition-[transform,background] duration-300 ease-[ease] hover:bg-white hover:[transform:scale(1.06)]"
              >
                {paused ? (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15l13-7.5z" />
                  </svg>
                ) : (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4.5" width="4" height="15" rx="1" />
                    <rect x="14" y="4.5" width="4" height="15" rx="1" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
