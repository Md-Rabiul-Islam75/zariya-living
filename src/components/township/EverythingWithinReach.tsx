"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal } from "@/components/motion/Reveal";
import { TOWNSHIP_AMENITIES } from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export function EverythingWithinReach() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {TOWNSHIP_AMENITIES.title}
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-gold/15 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TOWNSHIP_AMENITIES.items.map((name) => (
            <motion.div
              key={name}
              variants={item}
              className="group relative flex min-h-[110px] items-center justify-center border-b border-r border-gold/10 p-6 text-center transition-colors duration-500 hover:bg-gold/[0.06]"
            >
              <span className="font-light tracking-wide text-foreground/85 transition-colors duration-300 group-hover:text-gold md:text-lg">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
