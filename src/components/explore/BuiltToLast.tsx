"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { EXPLORE_LONGTERM } from "@/lib/site-data";

export function BuiltToLast() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {EXPLORE_LONGTERM.title}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {EXPLORE_LONGTERM.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={0.06 * (i + 1)}>
              <p className="text-base font-light leading-relaxed text-teal-deep/65 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Stagger className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 sm:gap-0">
        {EXPLORE_LONGTERM.stats.map((stat, i) => (
          <StaggerItem
            key={stat.label}
            className={`text-center ${i > 0 ? "sm:border-l sm:border-teal-deep/15" : ""}`}
          >
            <div className="font-serif text-4xl font-light text-teal-deep md:text-5xl">{stat.value}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">{stat.label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
