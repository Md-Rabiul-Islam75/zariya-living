"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { COMMUNITY_MEMBERSHIP } from "@/lib/site-data";

export function MembershipMeans() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {COMMUNITY_MEMBERSHIP.title}
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {COMMUNITY_MEMBERSHIP.cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-teal-panel/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                <span className="absolute left-0 top-0 h-0.5 w-12 bg-gold transition-all duration-500 group-hover:w-full" />
                <h3 className="font-serif text-2xl font-light text-foreground">{card.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">{card.desc}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
