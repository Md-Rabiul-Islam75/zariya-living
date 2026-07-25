"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { OFFERS } from "@/lib/offers-data";

export function TheOffer() {
  const { offer } = OFFERS;
  return (
    <section id="offer" className="scroll-mt-8 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep/55">{offer.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-teal-deep sm:text-4xl">{offer.title}</h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep/50">{offer.tag}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-2">
          {offer.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <article
                className={`flex h-full flex-col overflow-hidden rounded-xl ${
                  card.featured ? "border border-gold" : "border border-teal-deep/12"
                }`}
              >
                <div className="relative h-48 sm:h-52">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/10 to-teal-deep/75" />
                  {card.featured && "badge" in card && (
                    <span className="absolute right-4 top-4 rounded-full bg-teal-deep px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                      {card.badge}
                    </span>
                  )}
                  <p className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {card.overline}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-medium text-teal-deep">{card.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-teal-deep/70">{card.desc}</p>
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3 border-t border-teal-deep/10 pt-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-deep/50">{card.priceLabel}</p>
                      <p className={`mt-1.5 text-2xl font-semibold text-teal-deep ${"yourCost" in card ? "line-through decoration-teal-deep/35" : ""}`}>
                        {card.price}
                      </p>
                    </div>
                    {"yourCost" in card && card.yourCost && (
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-deep/50">Your Cost</p>
                        <p className="mt-1.5 text-2xl font-semibold text-teal-deep">{card.yourCost}</p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Value summary */}
        <Reveal direction="up" className="mt-7">
          <div className="rounded-xl bg-teal-deep p-8 md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{offer.summary.eyebrow}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {offer.summary.rows.map((r) => (
                <div key={r.label} className="border-t border-gold/25 pt-4">
                  <p className="text-sm text-white/60">{r.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{r.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-gold/25 pt-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{offer.summary.finalLabel}</p>
                <p className="mt-2 text-3xl font-semibold text-gold md:text-4xl">{offer.summary.finalPrice}</p>
              </div>
              <p className="rounded-md bg-gold/15 px-5 py-3 text-sm text-white">{offer.summary.saveNote}</p>
            </div>
            <p className="mt-5 text-[13px] text-white/50">{offer.summary.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
