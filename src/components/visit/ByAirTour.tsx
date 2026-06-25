"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { VISIT_TOUR } from "@/lib/site-data";

export function ByAirTour() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal direction="up">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-deep" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                {VISIT_TOUR.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
              {VISIT_TOUR.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">
              {VISIT_TOUR.body}
            </p>
          </Reveal>

          <Stagger className="mt-8 space-y-4">
            {VISIT_TOUR.points.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-deep/40 text-gold-deep">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span className="text-sm font-normal text-teal-deep/80 md:text-base">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal direction="left" delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={VISIT_TOUR.image}
              alt="Zariya hospitality"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
