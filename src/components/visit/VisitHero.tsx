"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { VISIT_HERO } from "@/lib/site-data";

export function VisitHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative flex h-[80vh] min-h-[520px] w-full items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={VISIT_HERO.image}
          alt="A Zariya lagoon villa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/45 to-teal-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-transparent to-teal-deep/40" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="font-serif text-4xl font-light leading-tight text-foreground [text-shadow:0_2px_30px_rgba(6,31,31,0.6)] sm:text-5xl md:text-7xl"
          >
            {VISIT_HERO.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="mt-5 max-w-md font-serif text-lg font-light italic text-foreground/90 [text-shadow:0_2px_20px_rgba(6,31,31,0.6)] md:text-2xl"
          >
            {VISIT_HERO.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
