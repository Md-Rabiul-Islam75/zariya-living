"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { HOME_HERO } from "@/lib/home-data";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      {/* Background with slow Ken Burns zoom + parallax */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] bg-teal-deep">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 16, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* Nearly-square render: focus lower-centre so the villa is the hero, not the sky */}
          <Image
            src={HOME_HERO.image}
            alt="Zariya Sylhet lagoon villas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_68%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/45 to-teal-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/75 via-transparent to-teal-deep/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10"
      >
        <div className="max-w-2xl">
          <motion.div {...fade(0.15)} className="mb-6">
            <span className="text-sm font-light uppercase tracking-[0.4em] text-gold">{HOME_HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            {...fade(0.28)}
            className="font-serif text-4xl font-light leading-[1.05] text-foreground [text-shadow:0_2px_24px_rgba(6,31,31,0.55)] sm:text-6xl md:text-7xl"
          >
            {HOME_HERO.title}
          </motion.h1>

          <motion.p
            {...fade(0.42)}
            className="mt-5 font-serif text-xl font-light italic leading-snug text-gold/90 [text-shadow:0_1px_12px_rgba(6,31,31,0.6)] md:text-2xl"
          >
            {HOME_HERO.tagline}
          </motion.p>

          <motion.p
            {...fade(0.52)}
            className="mt-5 max-w-xl text-base font-light leading-relaxed text-foreground/90 [text-shadow:0_1px_12px_rgba(6,31,31,0.6)] md:text-lg"
          >
            {HOME_HERO.subtitle}
          </motion.p>

          <motion.div
            {...fade(0.66)}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="#book"
              className="rounded-md bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-deep transition-transform duration-300 hover:scale-105"
            >
              {HOME_HERO.primaryCta}
            </Link>
            <Link
              href="#philosophy"
              className="rounded-md border border-gold/60 px-8 py-3.5 text-xs font-light uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {HOME_HERO.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/70">Scroll</span>
          <div className="relative h-16 w-px overflow-hidden bg-foreground/20">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent to-gold"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
