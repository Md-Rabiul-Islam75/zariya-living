"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { TOWNSHIP_HERO } from "@/lib/site-data";

export function TownshipHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative flex h-[80vh] min-h-[520px] w-full items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={TOWNSHIP_HERO.image}
          alt="Zariya masterplan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-transparent to-teal-deep/50" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="font-serif text-4xl font-light leading-tight text-foreground [text-shadow:0_2px_30px_rgba(6,31,31,0.6)] sm:text-5xl md:text-7xl"
        >
          {TOWNSHIP_HERO.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="mx-auto mt-5 max-w-xl font-serif text-lg font-light italic text-foreground/90 [text-shadow:0_2px_20px_rgba(6,31,31,0.6)] md:text-2xl"
        >
          {TOWNSHIP_HERO.subtitle}
        </motion.p>

        {/* Lotus motif */}
        <motion.svg
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          viewBox="0 0 120 60"
          className="mx-auto mt-10 h-12 w-24 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M60 52 C60 30 60 20 60 14 C66 24 68 38 60 52 C52 38 54 24 60 14" />
          <path d="M60 52 C44 44 36 30 34 20 C48 26 58 38 60 52 C72 38 82 26 86 20 C84 30 76 44 60 52" />
          <path d="M60 52 C30 48 16 38 10 30 C30 32 50 42 60 52 C70 42 90 32 110 30 C104 38 90 48 60 52" />
        </motion.svg>
      </div>
    </section>
  );
}
