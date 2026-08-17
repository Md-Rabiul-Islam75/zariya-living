"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { LAGOON_VILLA } from "@/lib/home-data";

export function LagoonVilla() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-[70vh] w-full overflow-hidden bg-teal-deep py-28 md:py-36">
      {/* Parallax full-bleed image */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
        <Image src={LAGOON_VILLA.image} alt="Zariya lagoon villas" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-xl">
          <Reveal direction="up">
            <div className="mb-5">
              <span className="text-sm font-light uppercase tracking-[0.35em] text-gold">{LAGOON_VILLA.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.08}>
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground [text-shadow:0_2px_20px_rgba(6,31,31,0.6)] sm:text-4xl md:text-5xl">
              {LAGOON_VILLA.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.16}>
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-foreground/85 [text-shadow:0_1px_12px_rgba(6,31,31,0.6)] md:text-lg">
              {LAGOON_VILLA.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
