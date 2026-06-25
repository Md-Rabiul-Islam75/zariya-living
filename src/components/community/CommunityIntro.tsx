"use client";

import { Reveal } from "@/components/motion/Reveal";
import { COMMUNITY_INTRO } from "@/lib/site-data";

export function CommunityIntro() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {COMMUNITY_INTRO.title}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {COMMUNITY_INTRO.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={0.08 * (i + 1)}>
              <p className="text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
