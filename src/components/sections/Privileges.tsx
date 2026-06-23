"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MEMBERSHIP_PRIVILEGES } from "@/lib/site-data";

export function Privileges() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Global Lagoon Villa Membership — Privileges
          </span>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIP_PRIVILEGES.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-teal-panel/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                {/* Top accent line that grows on hover */}
                <span className="absolute left-0 top-0 h-0.5 w-12 bg-gold transition-all duration-500 group-hover:w-full" />

                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold/80">
                  {item.category}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-light text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal direction="up" className="mt-14 text-center">
          <Link
            href="#villas"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-deep transition-transform duration-300 hover:scale-105"
          >
            Explore the Lagoon Community
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
