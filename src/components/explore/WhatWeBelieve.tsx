"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { EXPLORE_BELIEFS } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  faith: (
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM12 9v6M9 12h6" />
  ),
  nature: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  legacy: (
    <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />
  ),
};

export function WhatWeBelieve() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">What We Believe</span>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            The Philosophy Behind Everything We Build.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {EXPLORE_BELIEFS.map((belief) => (
            <StaggerItem key={belief.title}>
              <div className="border-t border-teal-deep/15 pt-8">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-deep/70"
                  aria-hidden="true"
                >
                  {ICONS[belief.icon]}
                </svg>
                <h3 className="mt-6 font-serif text-2xl font-light text-teal-deep">{belief.title}</h3>
                <p className="mt-4 text-[15px] font-normal leading-relaxed text-teal-deep/80">{belief.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
