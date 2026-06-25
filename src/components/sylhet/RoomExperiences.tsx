"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SYLHET } from "@/lib/sylhet-data";

export function RoomExperiences() {
  const { rooms } = SYLHET;
  const [active, setActive] = useState(0);
  const room = rooms.items[active];

  return (
    <section className="bg-teal-panel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{rooms.eyebrow}</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.05} className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {rooms.title}
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal direction="up" delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {rooms.items.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-md px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                i === active
                  ? "bg-gold text-teal-deep"
                  : "border border-gold/40 text-foreground/80 hover:border-gold hover:text-gold"
              }`}
            >
              {r.name}
            </button>
          ))}
        </Reveal>

        {/* Active room */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${active}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image src={room.image} alt={room.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`txt-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="font-serif text-3xl font-light text-foreground">{room.name}</h3>
              <p className="mt-4 text-base font-light leading-relaxed text-foreground/75">{room.intro}</p>
              <dl className="mt-8 divide-y divide-gold/15 border-t border-gold/15">
                {room.features.map((f) => (
                  <div key={f.label} className="py-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{f.label}</dt>
                    <dd className="mt-1.5 text-sm font-light leading-relaxed text-foreground/75">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
