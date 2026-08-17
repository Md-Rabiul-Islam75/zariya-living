"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { GLOBAL_LIFESTYLE } from "@/lib/home-data";

export function GlobalLifestyle() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal direction="up">
            <div className="mb-5">
              <span className="text-sm font-light uppercase tracking-[0.35em] text-gold">{GLOBAL_LIFESTYLE.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.06}>
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
              {GLOBAL_LIFESTYLE.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-foreground/90 md:text-lg">
              {GLOBAL_LIFESTYLE.body}
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <div className="mt-8 rounded-2xl border border-gold/20 bg-teal-panel/50 p-7 backdrop-blur-sm">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                {GLOBAL_LIFESTYLE.gateway.label}
              </span>
              <p className="mt-3 text-base font-light leading-relaxed text-white">
                {GLOBAL_LIFESTYLE.gateway.text}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={GLOBAL_LIFESTYLE.image}
              alt="A global lagoon lifestyle in Sylhet"
              width={1200}
              height={1400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-72 w-full object-cover sm:h-96 lg:h-[560px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
