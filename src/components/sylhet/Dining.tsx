"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

export function Dining() {
  const { dining } = SYLHET;
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{dining.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {dining.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-3">
          {dining.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-teal-panel/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-xl font-light text-foreground">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-foreground/70">{card.desc}</p>
                  {"cta" in card && card.cta && (
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 border-b border-gold/40 pb-1 text-sm font-light text-gold transition-colors hover:border-gold"
                    >
                      {card.cta} <span>→</span>
                    </Link>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
