"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OWNERSHIP_TRUST, CONTACT } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  guarantee: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <circle cx="12" cy="11" r="1.6" />
      <path d="M12 12.6V15" />
    </>
  ),
};

export function TrustProtected() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              {OWNERSHIP_TRUST.eyebrow}
            </span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {OWNERSHIP_TRUST.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-2">
          {OWNERSHIP_TRUST.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl border border-gold/20 bg-teal-panel/50 p-9 backdrop-blur-sm transition-colors duration-500 hover:border-gold/45"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                  aria-hidden="true"
                >
                  {ICONS[card.icon]}
                </svg>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">{card.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">{card.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal direction="up" delay={0.1} className="mt-14 text-center">
          <Link
            href={CONTACT.bookHref}
            className="inline-block rounded-md bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep transition-transform duration-300 hover:scale-105"
          >
            {OWNERSHIP_TRUST.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
