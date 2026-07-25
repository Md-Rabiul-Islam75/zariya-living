"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { OFFERS } from "@/lib/offers-data";
import { ChairmanVideo } from "@/components/offers/ChairmanVideo";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function OffersHero() {
  const { hero } = OFFERS;
  return (
    <section className="relative overflow-hidden bg-teal-deep">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_20%_0%,rgba(223,193,165,0.14),transparent_65%)]" />

      {/* Hero body */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-28 lg:pt-16">
        <div>
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            {hero.eyebrow}
          </motion.p>
          <motion.div {...fade(0.08)} className="mt-6 flex items-center gap-3.5">
            <span className="h-px w-9 bg-gold" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">{hero.program}</span>
          </motion.div>
          <motion.h1 {...fade(0.16)} className="mt-6 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl md:text-6xl">
            {hero.title}
          </motion.h1>
          <motion.p {...fade(0.24)} className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/70 md:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.p {...fade(0.3)} className="mt-6 text-sm tracking-wide text-white/55">
            {hero.note}
          </motion.p>
          <motion.div {...fade(0.36)} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#apply"
              className="rounded-sm bg-gold px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.05em] text-teal-deep transition-transform duration-300 hover:scale-105"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#offer"
              className="inline-flex items-center justify-center gap-2 px-2 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white/75 transition-colors hover:text-gold"
            >
              {hero.secondaryCta} ↓
            </a>
          </motion.div>
        </div>

        <motion.div {...fade(0.28)}>
          <ChairmanVideo />
        </motion.div>
      </div>
    </section>
  );
}
