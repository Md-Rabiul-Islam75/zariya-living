"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function Community() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section id="community" ref={ref} className="relative overflow-hidden py-32 md:py-44">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/community-hands.png"
          alt="A circle of hands, the Zariya community"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/80" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <span className="mb-5 block text-xs font-light uppercase tracking-[0.35em] text-gold">
            The Community
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            You are not alone.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.12}>
          <p className="mt-6 text-lg font-light leading-relaxed text-foreground/80">
            Zariya is not a list of properties. It is a circle of families who chose to build a life close to
            nature, and to each other, a global community with founding members at its heart.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <a
            href="#book"
            className="mt-10 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-teal-deep transition-transform duration-300 hover:scale-105"
          >
            Join the Community
          </a>
        </Reveal>
      </div>
    </section>
  );
}
