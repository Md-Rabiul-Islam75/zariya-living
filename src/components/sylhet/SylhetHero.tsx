"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { SYLHET } from "@/lib/sylhet-data";

export function SylhetHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const { hero } = SYLHET;

  return (
    <section ref={ref} className="relative flex h-[88vh] min-h-[560px] w-full items-end overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={hero.image} alt={hero.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/40 to-teal-deep/30" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{hero.eyebrow}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="font-serif text-4xl font-light leading-[1.05] text-foreground [text-shadow:0_2px_30px_rgba(6,31,31,0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="mt-5 max-w-xl font-serif text-lg font-light italic text-foreground/90 [text-shadow:0_2px_20px_rgba(6,31,31,0.6)] md:text-xl"
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
