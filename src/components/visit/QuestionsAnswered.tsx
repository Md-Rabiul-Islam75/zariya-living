"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { VISIT_FAQ } from "@/lib/site-data";

export function QuestionsAnswered() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {VISIT_FAQ.title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-12 space-y-4">
          {VISIT_FAQ.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-teal-deep/10 bg-white shadow-sm transition-colors duration-300 hover:border-teal-deep/20"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg font-light text-teal-deep md:text-xl">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-2xl font-light text-gold-deep"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-base font-normal leading-relaxed text-teal-deep/75">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
