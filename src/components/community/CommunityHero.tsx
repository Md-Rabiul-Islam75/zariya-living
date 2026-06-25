"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { COMMUNITY_HERO } from "@/lib/site-data";

export function CommunityHero() {
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
          src={COMMUNITY_HERO.image}
          alt="The Zariya community"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-transparent to-teal-deep/50" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-gold/70" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            {COMMUNITY_HERO.eyebrow}
          </span>
          <span className="h-px w-10 bg-gold/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="font-serif text-4xl font-light leading-tight text-foreground [text-shadow:0_2px_30px_rgba(6,31,31,0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {COMMUNITY_HERO.title}
        </motion.h1>
      </div>
    </section>
  );
}
