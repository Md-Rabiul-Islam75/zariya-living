"use client";

import { Reveal } from "@/components/motion/Reveal";
import { EXPLORE_PATH } from "@/lib/site-data";

export function MeansThePath() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {EXPLORE_PATH.title}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {EXPLORE_PATH.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={0.06 * (i + 1)}>
              <p className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
