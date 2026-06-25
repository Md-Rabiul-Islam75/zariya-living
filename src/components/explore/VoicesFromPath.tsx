"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { EXPLORE_VOICES } from "@/lib/site-data";

export function VoicesFromPath() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            Voices from the Path
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-2">
          {EXPLORE_VOICES.map((voice) => (
            <StaggerItem key={voice.author} className="h-full">
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl bg-white p-9 shadow-xl"
              >
                <blockquote className="flex-1">
                  <p className="font-serif text-lg font-light italic leading-relaxed text-teal-deep/85 md:text-xl">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  — {voice.author}
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
