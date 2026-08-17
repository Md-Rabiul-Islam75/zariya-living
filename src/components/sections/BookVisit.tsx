"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Select } from "@/components/ui/Select";
import { INTEREST_OPTIONS } from "@/lib/site-data";
import { BEGIN_PATH } from "@/lib/home-data";

export function BookVisit() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  // Static build: no backend yet. Wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border-b border-foreground/25 bg-transparent py-2.5 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none";

  return (
    <section id="book" className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <span className="mb-4 block text-sm font-light uppercase tracking-[0.35em] text-gold">
            {BEGIN_PATH.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {BEGIN_PATH.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-foreground/90 md:text-lg">
            {BEGIN_PATH.intro}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-14">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
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
              >
                <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input className={inputClass} type="text" name="name" placeholder="Your name" required />
                  </Field>
                  <Field label="Phone / WhatsApp Number">
                    <input className={inputClass} type="tel" name="phone" placeholder="+880 …" />
                  </Field>
                  <Field label="Email Address">
                    <input className={inputClass} type="email" name="email" placeholder="you@email.com" required />
                  </Field>
                  <Field label="Country of Residence">
                    <input className={inputClass} type="text" name="country" placeholder="e.g. United Kingdom" />
                  </Field>
                  <Field label="I am interested in">
                    <Select
                      options={INTEREST_OPTIONS}
                      value={interest}
                      onChange={setInterest}
                      placeholder="Select one…"
                    />
                    <input type="hidden" name="interest" value={interest} />
                  </Field>
                  <Field label="Best time to reach me">
                    <input className={inputClass} type="text" name="time" placeholder="e.g. Weekday evenings" />
                  </Field>
                </div>

                <div className="mt-12 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="rounded-md bg-gold px-10 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-deep"
                  >
                    {BEGIN_PATH.cta}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <Reveal direction="up" delay={0.16} className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm font-light italic leading-relaxed text-foreground/55">
            {BEGIN_PATH.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-gold">{label}</span>
      {children}
    </label>
  );
}
