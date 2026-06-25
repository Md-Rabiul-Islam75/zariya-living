"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { COMMUNITY_JOIN } from "@/lib/site-data";

export function JoinZariyans() {
  const [sent, setSent] = useState(false);

  // Static for now, wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {COMMUNITY_JOIN.title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.08}>
          <p className="mt-5 text-base font-normal text-teal-deep/75 md:text-lg">{COMMUNITY_JOIN.body}</p>
        </Reveal>

        <Reveal direction="up" delay={0.16}>
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-teal-deep"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-deep text-xs text-gold-deep">
                    ✓
                  </span>
                  Request received, welcome to the journey. We&apos;ll be in touch.
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder={COMMUNITY_JOIN.placeholder}
                    className="flex-1 rounded-md border border-teal-deep/20 bg-white px-5 py-3.5 text-sm text-teal-deep placeholder:text-teal-deep/40 transition-colors focus:border-gold-deep focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="rounded-md bg-teal-deep px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground"
                  >
                    {COMMUNITY_JOIN.cta}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
