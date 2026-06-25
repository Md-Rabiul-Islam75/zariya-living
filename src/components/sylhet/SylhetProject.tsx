"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

export function SylhetProject() {
  const { project } = SYLHET;
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">{project.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {project.title}
          </h2>
        </Reveal>
        <div className="mt-6 max-w-3xl space-y-5">
          {project.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={0.1 + i * 0.06}>
              <p className="text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {project.cards.map((card) => (
            <StaggerItem key={card.label} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="h-full rounded-2xl bg-teal-deep p-8"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{card.label}</span>
                <p className="mt-3 font-serif text-xl font-light leading-snug text-foreground">{card.value}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
