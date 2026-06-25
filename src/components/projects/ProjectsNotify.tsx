"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS_NOTIFY } from "@/lib/site-data";

export function ProjectsNotify() {
  const [sent, setSent] = useState(false);

  // Static for now, wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="notify"
      className="relative scroll-mt-24 overflow-hidden bg-teal-deep py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {PROJECTS_NOTIFY.title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="mt-5 text-base font-light text-foreground/70 md:text-lg">{PROJECTS_NOTIFY.body}</p>
        </Reveal>

        <Reveal direction="up" delay={0.18}>
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-sm font-light text-gold"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold text-xs">✓</span>
                  You&apos;re on the list, we&apos;ll be in touch about new projects.
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
                    placeholder={PROJECTS_NOTIFY.placeholder}
                    className="flex-1 rounded-md border border-foreground/20 bg-teal-panel/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="rounded-md bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-teal-deep"
                  >
                    {PROJECTS_NOTIFY.cta}
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
