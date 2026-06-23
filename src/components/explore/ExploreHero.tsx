"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { EXPLORE_HERO } from "@/lib/site-data";

export function ExploreHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={EXPLORE_HERO.image}
          alt="Sylhet landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-transparent to-teal-deep/60" />
      </motion.div>

      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-xs font-light uppercase tracking-[0.4em] text-gold">{EXPLORE_HERO.eyebrow}</span>
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="font-serif text-5xl font-light leading-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {EXPLORE_HERO.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-5 font-serif text-xl font-light italic text-foreground/80 md:text-2xl"
        >
          {EXPLORE_HERO.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
