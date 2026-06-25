"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

export function ThreeExperiences() {
  const { experiences } = SYLHET;
  return (
    <section className="bg-[#f2ede4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-deep/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">{experiences.eyebrow}</span>
            <span className="h-px w-10 bg-gold-deep/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {experiences.title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-base font-normal leading-relaxed text-teal-deep/75 md:text-lg">{experiences.intro}</p>
        </Reveal>

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {experiences.cards.map((card) => (
            <StaggerItem key={card.num} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-teal-deep/5"
              >
                <span className="font-serif text-3xl font-light text-gold-deep/50">{card.num}</span>
                <h3 className="mt-4 font-serif text-2xl font-light text-teal-deep">{card.title}</h3>
                <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {card.tag}
                </span>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-teal-deep/70">{card.desc}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-teal-deep transition-colors hover:text-gold-deep"
                >
                  {card.cta} <span>↓</span>
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
