"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MEMBERSHIP, MEMBERSHIP_BENEFITS } from "@/lib/site-data";

export function Membership() {
  return (
    <section id="membership" className="bg-teal-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Financial Clarity"
          title="Three ways to own a piece of Zariya."
          intro="From a working share of the land to a residence in the community — choose the entry that fits the life you are building."
        />

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {MEMBERSHIP.map((tier) => (
            <StaggerItem key={tier.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl border border-gold/20 bg-teal-deep/40 p-8 backdrop-blur-sm"
              >
                <div className="h-px w-12 bg-gold" />
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">{tier.title}</h3>
                <p className="mt-4 flex-1 text-base font-light leading-relaxed text-foreground/70">
                  {tier.description}
                </p>
                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-light text-gold transition-all hover:gap-3"
                >
                  Request Investment Pack <span>→</span>
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Benefits row */}
        <Reveal direction="up" className="mt-16">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {MEMBERSHIP_BENEFITS.map((benefit) => (
              <span
                key={benefit}
                className="flex items-center gap-2 text-sm font-light text-foreground/80"
              >
                <span className="text-gold">◆</span>
                {benefit}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
