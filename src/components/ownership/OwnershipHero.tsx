"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { OWNERSHIP_HERO } from "@/lib/site-data";

export function OwnershipHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative flex h-[70vh] min-h-[460px] w-full items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={OWNERSHIP_HERO.image}
          alt="A Zariya lagoon villa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-transparent to-teal-deep/50" />
      </motion.div>

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="font-serif text-5xl font-light leading-tight text-foreground [text-shadow:0_2px_30px_rgba(6,31,31,0.6)] sm:text-6xl md:text-7xl"
        >
          {OWNERSHIP_HERO.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="mt-5 font-serif text-lg font-light italic text-foreground/90 [text-shadow:0_2px_20px_rgba(6,31,31,0.6)] md:text-2xl"
        >
          {OWNERSHIP_HERO.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
