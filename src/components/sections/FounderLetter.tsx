"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { FOUNDER_LETTER } from "@/lib/site-data";

export function FounderLetter() {
  const f = FOUNDER_LETTER;
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{f.eyebrow}</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {f.title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.12} className="mt-12">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[minmax(240px,340px)_1fr]">
            {/* Portrait */}
            <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full">
              <Image
                src={f.image}
                alt={f.name}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-top"
              />
            </div>

            {/* Letter */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="space-y-5">
                {f.paragraphs.map((p, i) => (
                  <p key={i} className="text-base font-normal leading-relaxed text-teal-deep/80">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <p className="font-serif text-lg font-light italic text-teal-deep/70">{f.closing}</p>
                <p className="mt-2 font-serif text-xl font-medium text-teal-deep">{f.name}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">{f.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
