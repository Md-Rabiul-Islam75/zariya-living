"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OWNERSHIP_OPTIONS } from "@/lib/site-data";

export function OwnershipOptions() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            A Multi-Asset Ownership Ecosystem.
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">
            Zariya is structured so your ownership is real, your income is recurring, and your asset grows in
            value over time. Here is exactly how each option works.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid items-start gap-7 md:grid-cols-3">
          {OWNERSHIP_OPTIONS.map((opt) => (
            <StaggerItem key={opt.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  opt.popular
                    ? "bg-teal-deep ring-2 ring-gold md:-mt-4 md:pb-12"
                    : "bg-teal-panel ring-1 ring-gold/15"
                }`}
              >
                {opt.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-deep">
                    Most Popular
                  </span>
                )}

                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {opt.eyebrow}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{opt.title}</h3>
                <div className="mt-5 h-px w-full bg-gold/20" />

                <dl className="mt-5 space-y-5">
                  {opt.rows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-normal leading-relaxed text-foreground/85">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 flex-1 text-sm font-light italic leading-relaxed text-foreground/60">
                  {opt.note}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
