"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/site-data";

export function WalkThePath() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
            Ready to Walk The Path?
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/community"
              className="rounded-md bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-deep transition-transform duration-300 hover:scale-105"
            >
              Join the Community
            </Link>
            <Link
              href={CONTACT.bookHref}
              className="rounded-md border border-gold/60 px-8 py-3.5 text-xs font-light uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Book a Visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
