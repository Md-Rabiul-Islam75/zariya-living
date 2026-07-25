"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { OFFERS } from "@/lib/offers-data";

export function OffersApply() {
  const { apply } = OFFERS;
  const [sent, setSent] = useState(false);

  // Static for now — wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const input =
    "w-full border-b border-gold/30 bg-transparent py-3 text-[15px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold";

  return (
    <section id="apply" className="scroll-mt-8 bg-teal-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{apply.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{apply.title}</h2>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-white/70">{apply.desc}</p>
          <div className="mt-8 flex flex-col gap-4">
            {apply.points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <span className="text-[13px] text-gold">◆</span>
                <span className="text-[15px] text-white/85">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="rounded-2xl border border-gold/25 bg-white/[0.03] p-8 sm:p-11">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[340px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-2xl text-gold"
                  >
                    ✓
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">Request received.</h3>
                  <p className="mt-3 max-w-sm text-white/70">
                    Thank you. Our team will contact you shortly about your Founding Member application.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Full Name" autoComplete="name" required className={`${input} mb-6`} />
                  <input type="email" name="email" placeholder="Email Address" autoComplete="email" required className={`${input} mb-6`} />
                  <input type="text" name="country" placeholder="Country of Residence" autoComplete="country-name" required className={`${input} mb-6`} />
                  <select name="interest" defaultValue="" required className={`${input} mb-6 appearance-none`}>
                    <option value="" disabled className="bg-teal-deep">I&apos;m interested in...</option>
                    {apply.interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-teal-deep">{opt}</option>
                    ))}
                  </select>
                  <input type="text" name="time" placeholder="Best time to reach me" className={`${input} mb-9`} />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full bg-gold py-4 text-sm font-semibold text-teal-deep"
                  >
                    {apply.cta}
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

export function OffersClosing() {
  const { closing } = OFFERS;
  return (
    <section className="bg-[#efe2ce] py-20 text-center md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6642]">{closing.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-semibold leading-snug text-teal-deep sm:text-4xl">{closing.title}</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-teal-deep/65 md:flex-nowrap md:gap-x-7 md:text-sm">
            {closing.points.map((p, i) => (
              <span key={p} className="flex items-center gap-x-5 whitespace-nowrap md:gap-x-7">
                {p}
                {i < closing.points.length - 1 && <span className="text-teal-deep/40">·</span>}
              </span>
            ))}
          </div>
        </Reveal>
        {/* Blinking attention CTA — always animating so it draws the eye at the bottom */}
        <motion.a
          href="#apply"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-9 inline-block rounded-sm bg-teal-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-white"
        >
          <motion.span
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            {closing.cta}
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
