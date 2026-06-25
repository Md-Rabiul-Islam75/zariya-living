"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { TOWNSHIP_TOWER } from "@/lib/site-data";

export function LotusTower() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={TOWNSHIP_TOWER.image}
              alt="The Lotus Tower"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal direction="up">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-deep" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                {TOWNSHIP_TOWER.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
              {TOWNSHIP_TOWER.title}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {TOWNSHIP_TOWER.paragraphs.map((p, i) => (
              <Reveal key={i} direction="up" delay={0.1 + i * 0.06}>
                <p className="text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
