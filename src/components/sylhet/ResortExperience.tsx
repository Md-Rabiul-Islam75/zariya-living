"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

const ICONS: Record<string, React.ReactNode> = {
  deck: <path d="M12 3v3M4 12a8 8 0 0 1 16 0H4zM12 12v8M9 20h6" />,
  lounge: <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />,
  theatre: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3z" />
    </>
  ),
  tea: (
    <>
      <path d="M5 8h12v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8z" />
      <path d="M17 9h2a2 2 0 0 1 0 4h-2M7 4v1M10 4v1M13 4v1" />
    </>
  ),
  heritage: <path d="M4 10l8-5 8 5M5 10v9h14v-9M9 19v-5h6v5" />,
  lobby: <path d="M4 11l8-6 8 6M6 10v9h12v-9M12 14a1.5 1.5 0 0 0-1.5 1.5V19h3v-3.5A1.5 1.5 0 0 0 12 14z" />,
};

export function ResortExperience() {
  const { resort } = SYLHET;
  return (
    <section id="resort" className="scroll-mt-20 bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{resort.eyebrow}</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {resort.title}
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resort.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex h-full flex-col rounded-2xl border border-gold/15 bg-teal-panel/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                <svg
                  width="30"
                  height="30"
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
                <h3 className="mt-5 font-serif text-xl font-light text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">{card.desc}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
