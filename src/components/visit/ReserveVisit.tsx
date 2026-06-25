"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { VISIT_FORM } from "@/lib/site-data";

export function ReserveVisit() {
  const [submitted, setSubmitted] = useState(false);

  // Static for now — wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const labelClass = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold";
  const inputClass =
    "w-full border-b border-foreground/25 bg-transparent py-2.5 text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold focus:outline-none";

  return (
    <section id="reserve" className="scroll-mt-24 bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {VISIT_FORM.title}
          </h2>
          <p className="mt-5 text-base font-light text-foreground/70 md:text-lg">{VISIT_FORM.body}</p>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-14">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-gold/15 bg-teal-panel/40 p-10 text-center backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-2xl text-gold"
                >
                  ✓
                </motion.div>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">Your visit request is in.</h3>
                <p className="mt-3 max-w-md font-light text-foreground/70">
                  Our team will reach out shortly to arrange your By-Air Experience Tour. We can&apos;t wait to
                  host you.
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
                  {VISIT_FORM.fields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className={labelClass}>
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={inputClass}
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className={labelClass}>
                      Anything you&apos;d like us to know?
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="Tell us what matters to you"
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="rounded-md bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep"
                  >
                    {VISIT_FORM.cta}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
