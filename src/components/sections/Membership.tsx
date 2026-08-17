"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { FINANCIAL } from "@/lib/home-data";

export function Membership() {
  return (
    <section id="ownership" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={FINANCIAL.eyebrow}
          title={FINANCIAL.title}
          intro={FINANCIAL.intro}
          align="left"
          dark
        />

        <Stagger className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {FINANCIAL.shares.map((share) => (
            <StaggerItem key={share.title} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl border border-teal-deep/12 bg-white p-8 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(9,44,44,0.12)]"
              >
                <span className="text-ink">
                  <HomeIcon name={share.icon as HomeIconName} className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-light text-ink">{share.title}</h3>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-ink/80">{share.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Guarantee banner */}
        <Reveal direction="up" className="mt-14">
          <div className="mx-auto max-w-4xl rounded-xl bg-teal-deep px-6 py-5 text-center ring-1 ring-gold/15">
            <p className="text-sm font-medium tracking-wide text-foreground md:text-base">{FINANCIAL.guarantee}</p>
          </div>
        </Reveal>

        {/* Link to full Ownership & Income page */}
        <Reveal direction="up" delay={0.08} className="mt-8 text-center">
          <Link
            href={FINANCIAL.href}
            className="inline-flex items-center gap-2 border-b border-ink/40 pb-1 text-sm font-normal text-ink transition-all hover:gap-3 hover:border-ink"
          >
            {FINANCIAL.cta} <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
