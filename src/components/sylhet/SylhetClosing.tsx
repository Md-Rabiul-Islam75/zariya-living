"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

export function SylhetClosing() {
  const { closing } = SYLHET;
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Banner */}
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-2xl bg-teal-deep px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute right-0 top-0 h-60 w-80 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
                {closing.banner.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                {closing.banner.body}
              </p>
              <Link
                href={closing.banner.href}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-deep transition-transform duration-300 hover:scale-105"
              >
                {closing.banner.cta} <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Two cards */}
        <Stagger className="mt-8 grid gap-7 md:grid-cols-2">
          {closing.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl bg-white p-9 shadow-sm ring-1 ring-teal-deep/10"
              >
                <h3 className="font-serif text-2xl font-light text-teal-deep">{card.title}</h3>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-teal-deep/70 md:text-base">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className={`mt-7 inline-flex w-fit items-center gap-2 rounded-md px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                    card.primary
                      ? "bg-teal-deep text-foreground hover:scale-105"
                      : "border border-teal-deep/30 text-teal-deep hover:border-teal-deep"
                  }`}
                >
                  {card.cta} {!card.primary && <span>→</span>}
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
