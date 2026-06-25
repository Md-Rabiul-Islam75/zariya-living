"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OWNERSHIP_PAYMENT } from "@/lib/site-data";

export function PaymentPlan() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {OWNERSHIP_PAYMENT.title}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            {OWNERSHIP_PAYMENT.intro}
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {OWNERSHIP_PAYMENT.steps.map((step) => (
            <StaggerItem key={step.num} className="h-full">
              <div className="flex h-full flex-col bg-teal-panel/60 p-7 backdrop-blur-sm">
                <span className="font-serif text-4xl font-light text-gold/60">{step.num}</span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/65">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal direction="up" delay={0.1}>
          <p className="mt-8 text-center text-xs font-light italic text-foreground/40">
            {OWNERSHIP_PAYMENT.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
