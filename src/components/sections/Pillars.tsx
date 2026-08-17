"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { FLAGSHIP, DISCOVER_BAND } from "@/lib/home-data";

export function Pillars() {
  return (
    <section id="flagship" className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow={FLAGSHIP.eyebrow} title={FLAGSHIP.title} intro={FLAGSHIP.intro} />

        <Stagger className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex h-full flex-col rounded-2xl border border-gold/15 bg-teal-panel/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-teal-deep">
                  <HomeIcon name={card.icon as HomeIconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-serif text-2xl font-light text-foreground">{card.title}</h3>
                <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-gold/80">
                  {card.subtitle}
                </span>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-foreground/90">{card.desc}</p>
                <Link
                  href={card.href}
                  className="group/cta mt-7 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
                >
                  {card.cta}
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Discover band — part of the Flagship section so the spacing stays tight */}
        <div className="mx-auto mt-20 max-w-2xl text-center md:mt-24">
          <Reveal direction="up">
            <p className="font-serif text-3xl font-light italic leading-snug text-foreground md:text-4xl">
              {DISCOVER_BAND.text}
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <Link
              href={DISCOVER_BAND.href}
              className="group/btn mt-9 inline-flex items-center gap-2.5 rounded-md bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-teal-deep transition-transform duration-300 hover:scale-105"
            >
              {DISCOVER_BAND.cta}
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
