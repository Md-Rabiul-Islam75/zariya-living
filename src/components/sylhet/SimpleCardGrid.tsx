"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

type Card = { title: string; desc: string };

/**
 * Reusable eyebrow + left-aligned title + bordered card grid.
 * Used for Wellness (white), Business & Events (white), Recreation (dark).
 */
export function SimpleCardGrid({
  id,
  eyebrow,
  title,
  cards,
  columns = 3,
  dark = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  cards: readonly Card[];
  columns?: 3 | 4;
  dark?: boolean;
}) {
  const colClass = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section id={id} className={`${id ? "scroll-mt-20 " : ""}py-24 md:py-32 ${dark ? "bg-teal-deep" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up">
          <div className="mb-4 flex items-center gap-4">
            <span className={`h-px w-10 ${dark ? "bg-gold/60" : "bg-gold-deep"}`} />
            <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-gold" : "text-gold-deep"}`}>
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2
            className={`max-w-2xl font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl ${
              dark ? "text-foreground" : "text-teal-deep"
            }`}
          >
            {title}
          </h2>
        </Reveal>

        <Stagger className={`mt-14 grid gap-6 sm:grid-cols-2 ${colClass}`}>
          {cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`h-full rounded-2xl p-8 transition-colors duration-500 ${
                  dark
                    ? "border border-gold/15 bg-teal-panel/30 hover:border-gold/40"
                    : "bg-white shadow-sm ring-1 ring-teal-deep/10 hover:ring-teal-deep/20"
                }`}
              >
                <h3 className={`font-serif text-xl font-light ${dark ? "text-foreground" : "text-teal-deep"}`}>
                  {card.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    dark ? "font-light text-foreground/70" : "font-normal text-teal-deep/70"
                  }`}
                >
                  {card.desc}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
