"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { RESORT_GALLERY } from "@/lib/site-data";

export function Resort() {
  return (
    <section id="resort" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro split */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Parallax distance={50} className="absolute inset-0">
                <Image
                  src="/images/lotus-tower.png"
                  alt="The Lotus Tower at Zariya Resort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="scale-110 object-cover"
                />
              </Parallax>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up">
              <span className="mb-4 block text-xs font-light uppercase tracking-[0.35em] text-gold">
                Zariya Resort
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
                The Lotus Tower, the heart of everything Zariya offers.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.12}>
              <p className="mt-6 text-lg font-light leading-relaxed text-foreground/75">
                At the centre of it all stands an iconic landmark visible for miles. Observation decks, a sky
                lounge, theatres, museums, and dining that draws from the farm next door, full facility access
                for an active family life.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Gallery */}
        <Reveal direction="up" className="mt-20">
          <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">Where you gather</h3>
        </Reveal>

        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESORT_GALLERY.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative h-72 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-teal-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="font-serif text-xl font-light text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm font-light text-foreground/70">{item.caption}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
