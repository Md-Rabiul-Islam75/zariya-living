"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useRef } from "react";
import { SITE } from "@/lib/site-data";

const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4 + i * 0.18, ease: EASE },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax + fade as the user scrolls past the hero.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleLines = SITE.hero.title.split("\n");

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background video */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/masterplan.png"
        >
          <source src="/images/coastal.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/70 via-teal-deep/40 to-teal-deep/95" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-6 text-xs font-light uppercase tracking-[0.45em] text-gold"
        >
          {SITE.hero.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {titleLines.map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate="show"
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
          className="mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/80 md:text-lg"
        >
          {SITE.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.35, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#book"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-teal-deep transition-transform duration-300 hover:scale-105"
          >
            {SITE.hero.primaryCta}
          </Link>
          <Link
            href="#philosophy"
            className="rounded-full border border-foreground/40 px-8 py-3.5 text-sm font-light tracking-wide text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            {SITE.hero.secondaryCta}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
