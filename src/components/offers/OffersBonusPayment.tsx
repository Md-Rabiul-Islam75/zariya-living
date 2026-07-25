"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { OFFERS } from "@/lib/offers-data";

export function SpecialBonus() {
  const { bonus } = OFFERS;
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Parallax distance={40} className="absolute inset-0">
        <Image src={bonus.image} alt="" fill sizes="100vw" className="scale-110 object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/85 to-teal-deep/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{bonus.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{bonus.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">{bonus.desc}</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <div className="mt-8 flex flex-col gap-2.5 text-[15px] text-white/65">
            {bonus.points.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-sm border-[1.5px] border-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.05em] text-gold transition-colors hover:bg-gold hover:text-teal-deep"
          >
            {bonus.cta} →
          </a>
          <p className="mt-8 text-[15px] italic text-white/50">{bonus.quote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PaymentPlan() {
  const { payment } = OFFERS;
  return (
    <section className="bg-[#0e332e] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{payment.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{payment.title}</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-white/65">
            {payment.summary.map((s) => (
              <span key={s.label}>
                {s.label} <strong className="font-semibold text-gold">{s.value}</strong>
              </span>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {payment.steps.map((step) => (
            <StaggerItem key={step.step} className="h-full">
              <div className="h-full rounded-xl bg-white/5 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">{step.step}</p>
                <h3 className="mt-3.5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.desc}</p>
                <p className="mt-4 text-[13px] text-white/50">{step.pct}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{step.amount}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[13px] text-white/50">{payment.footnote}</p>
      </div>
    </section>
  );
}
