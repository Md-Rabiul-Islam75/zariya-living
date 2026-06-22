"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal direction="up">
            <span className="mb-4 block text-xs font-light uppercase tracking-[0.35em] text-gold">
              Why Zariya Exists
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
              We are not building for today&apos;s market.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/75">
              Most property developments think in decades. Zariya thinks in generations. We are building a place
              your grandchildren will be glad exists — one philosophy expressed across four landscapes, woven
              into a single way of living.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <p className="mt-4 text-lg font-light leading-relaxed text-foreground/75">
              Resort, farm, and home are not separate ventures here. They are one ecosystem — where what you eat
              is grown beside where you rest, and the people around you become a community for life.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.24}>
            <div className="mt-10 flex gap-10">
              {[
                { value: "4", label: "Landscapes" },
                { value: "1", label: "Philosophy" },
                { value: "∞", label: "Belonging" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-4xl font-light text-gold md:text-5xl">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/masterplan.png"
              alt="Zariya masterplan aerial view"
              width={1535}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
