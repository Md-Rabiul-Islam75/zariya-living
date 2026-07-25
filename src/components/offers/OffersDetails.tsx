"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OFFERS } from "@/lib/offers-data";

type Include = { icon: string; label: string };

function IncludeList({ items, dark }: { items: readonly Include[]; dark: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((it) => (
        <div
          key={it.label}
          className={`flex items-start gap-3.5 rounded-lg px-4 py-4 ${dark ? "bg-white/5" : "bg-teal-deep/[0.04]"}`}
        >
          <span className="text-xl leading-none">{it.icon}</span>
          <p className={`text-[15px] leading-snug ${dark ? "text-white" : "text-teal-deep"}`}>{it.label}</p>
        </div>
      ))}
    </div>
  );
}

export function AgroIncludes() {
  const { agro } = OFFERS;
  return (
    <section className="bg-teal-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{agro.eyebrow}</p>
        </Reveal>
        <div className="mt-5 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal direction="up" delay={0.05}>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{agro.title}</h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-white/70">{agro.desc}</p>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <IncludeList items={agro.items} dark />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ResortIncludes() {
  const { resort } = OFFERS;
  return (
    <section className="bg-[#f7f1e6] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-deep/55">{resort.eyebrow}</p>
        </Reveal>
        <div className="mt-5 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal direction="up" delay={0.05} className="lg:order-2">
            <h2 className="text-3xl font-semibold leading-tight text-teal-deep sm:text-4xl">{resort.title}</h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-teal-deep/70">{resort.desc}</p>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="lg:order-1">
            <IncludeList items={resort.items} dark={false} />
            <div className="mt-4 flex flex-wrap items-center gap-3.5 rounded-lg bg-teal-deep px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">{resort.guarantee.label}</span>
              <span className="hidden h-4 w-px bg-gold/40 sm:block" />
              <span className="text-sm text-white">{resort.guarantee.value}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Returns() {
  const { returns } = OFFERS;
  return (
    <section className="bg-teal-deep py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{returns.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{returns.title}</h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[15px] leading-relaxed text-white/60">{returns.desc}</p>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-11">
          <div className="overflow-hidden rounded-xl border border-gold/20">
            {returns.rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between gap-5 border-b border-gold/15 px-6 py-4 ${
                  i % 2 ? "bg-white/[0.06]" : "bg-white/[0.03]"
                }`}
              >
                <p className="text-[15px] text-white">{row.label}</p>
                <p className="whitespace-nowrap text-[15px] font-semibold text-gold">{row.value}</p>
              </div>
            ))}
            <div className="flex items-center justify-between gap-5 bg-gold px-6 py-5">
              <p className="text-base font-semibold text-teal-deep">{returns.totalLabel}</p>
              <p className="whitespace-nowrap text-xl font-bold text-teal-deep">{returns.totalValue}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] text-white/45">{returns.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SecurityTimeline() {
  const { security } = OFFERS;
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-deep/55">{security.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-teal-deep sm:text-4xl">{security.title}</h2>
          <p className="mx-auto mt-4 max-w-[66ch] text-base leading-relaxed text-teal-deep/70">{security.desc}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {security.steps.map((s) => (
            <StaggerItem key={s.num}>
              <div
                className={`h-full rounded-xl p-7 ${
                  "featured" in s && s.featured
                    ? "border-[1.5px] border-gold bg-gold/[0.08]"
                    : "border border-teal-deep/12"
                }`}
              >
                <p className="text-3xl font-bold text-teal-deep/30">{s.num}</p>
                <h3 className="mt-3 text-xl font-semibold text-teal-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-deep/65">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[13px] text-teal-deep/50">{security.footnote}</p>
      </div>
    </section>
  );
}
