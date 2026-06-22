"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { INTEREST_OPTIONS } from "@/lib/site-data";

export function BookVisit() {
  const [submitted, setSubmitted] = useState(false);

  // Static build: no backend yet. We just show a confirmation.
  // Wire this to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border-b border-foreground/25 bg-transparent py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none";

  return (
    <section id="book" className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal direction="up">
            <span className="mb-4 block text-xs font-light uppercase tracking-[0.35em] text-gold">
              Book a Visit
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
              Let Zariya speak for itself.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-foreground/75">
              No decision should be made without standing on the land. Book a guided visit, schedule a private
              call, or request the investment pack — and we&apos;ll take it from there.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <div className="mt-10 space-y-4">
              {["Schedule a Private Call", "Book a Site Visit", "Request Investment Pack"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-foreground/80">
                  <span className="text-gold">◆</span>
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <div className="rounded-2xl border border-gold/15 bg-teal-panel/50 p-8 backdrop-blur-sm md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-2xl text-gold"
                  >
                    ✓
                  </motion.div>
                  <h3 className="mt-6 font-serif text-2xl font-light text-foreground">Thank you.</h3>
                  <p className="mt-3 max-w-sm font-light text-foreground/70">
                    Your interest has been received. A member of the Zariya team will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input className={inputClass} type="text" name="name" placeholder="Full Name" required />
                  <input className={inputClass} type="email" name="email" placeholder="Email Address" required />
                  <input className={inputClass} type="text" name="country" placeholder="Country of Residence" />
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none text-foreground/80`}
                      name="interest"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled className="bg-teal-deep">
                        I&apos;m interested in…
                      </option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-teal-deep">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-0 top-3 text-gold">▾</span>
                  </div>
                  <input className={inputClass} type="text" name="time" placeholder="Best time to reach me" />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-4 w-full rounded-full bg-gold py-3.5 text-sm font-medium tracking-wide text-teal-deep"
                  >
                    Request a Visit
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
