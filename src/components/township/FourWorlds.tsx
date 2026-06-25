"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TOWNSHIP_ZONES } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  villa: <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />,
  resort: <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />,
  agro: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  buffer: <path d="M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4" />,
};

export function FourWorlds() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            One Township. Four Worlds.
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            The masterplan is organised into distinct zones, each with its own character, woven together by green
            corridors and walking paths.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOWNSHIP_ZONES.map((zone) => (
            <StaggerItem key={zone.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex h-full flex-col rounded-2xl border border-gold/15 bg-teal-panel/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:border-gold">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[zone.icon]}
                  </svg>
                </span>
                <h3 className="mt-6 font-serif text-xl font-light text-foreground">{zone.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">{zone.desc}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
