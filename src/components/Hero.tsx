"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useEffect, useRef, useState } from "react";
import { SITE, HERO_SLIDES } from "@/lib/site-data";

const SLIDE_MS = 5000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  // Auto-advance the carousel continuously (never stops).
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[84vh] min-h-[540px] w-full overflow-hidden"
    >
      {/* Background carousel — crossfade + slow Ken Burns zoom */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] bg-teal-deep">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.16 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: SLIDE_MS / 1000 + 1.2, ease: "linear" } }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Legibility overlays (lighter on the right so the image shows) */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/80 via-teal-deep/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 via-transparent to-teal-deep/25" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10"
      >
        <div className="max-w-2xl">
          {/* Persistent locator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="text-xs font-light uppercase tracking-[0.4em] text-gold">{SITE.hero.eyebrow}</span>
          </motion.div>

          {/* Rotating slide caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-gold"
              >
                {slide.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
                className="mt-3 font-serif text-4xl font-light leading-[1.05] text-foreground [text-shadow:0_2px_24px_rgba(6,31,31,0.55)] sm:text-6xl md:text-7xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6, ease: EASE }}
                className="mt-5 max-w-xl text-base font-light leading-relaxed text-foreground/90 [text-shadow:0_1px_12px_rgba(6,31,31,0.6)] md:text-lg"
              >
                {slide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Persistent CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
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

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-3">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Show ${s.title}`}
                onClick={() => setIndex(i)}
                className="group relative h-1.5 overflow-hidden rounded-full bg-foreground/25 transition-all duration-300"
                style={{ width: i === index ? 40 : 16 }}
              >
                {i === index && (
                  <motion.span
                    key={`fill-${index}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
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
