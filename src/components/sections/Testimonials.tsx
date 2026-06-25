"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-24 md:py-32">
      {/* Soft ambient glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading with flanking gold lines */}
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-light uppercase tracking-[0.35em] text-gold">In Their Words</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            Stories from Zariyans.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            Not investors. Families, telling, in their own words, why they chose to belong.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-b from-teal-panel/70 to-teal-deep/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                {/* Decorative serif quote glyph */}
                <span className="pointer-events-none absolute right-6 top-2 select-none font-serif text-7xl leading-none text-gold/15 transition-colors duration-500 group-hover:text-gold/25">
                  &rdquo;
                </span>

                <span className="font-serif text-5xl leading-none text-gold">&ldquo;</span>

                <blockquote className="mt-4 flex-1">
                  <p className="font-serif text-lg font-light italic leading-relaxed text-foreground/90 md:text-xl">
                    {t.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-8 border-t border-gold/15 pt-5">
                  <div className="font-serif text-lg font-light text-foreground">{t.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold/80">
                    {t.role} · {t.location}
                  </div>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
