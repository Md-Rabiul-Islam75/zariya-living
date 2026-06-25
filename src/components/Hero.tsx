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
        {/* Left-weighted darkening for legible left-aligned text, plus a bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/55 to-teal-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-transparent to-teal-deep/40" />
      </motion.div>

      {/* Content, left aligned */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="text-xs font-light uppercase tracking-[0.4em] text-gold">
              {SITE.hero.eyebrow}
            </span>
          </motion.div>

          <h1 className="font-serif text-4xl font-light leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
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
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="mt-5 font-serif text-xl font-light italic leading-snug text-gold sm:mt-7 sm:text-2xl md:text-3xl"
          >
            {SITE.hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/80 md:text-lg"
          >
            {SITE.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: EASE }}
            className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="#book"
              className="rounded-md bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-deep transition-transform duration-300 hover:scale-105"
            >
              {SITE.hero.primaryCta}
            </Link>
            <Link
              href="#philosophy"
              className="rounded-md border border-gold/60 px-8 py-3.5 text-xs font-light uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {SITE.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator, centered, larger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
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
