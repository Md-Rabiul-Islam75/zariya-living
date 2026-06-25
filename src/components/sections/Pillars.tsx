"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PILLARS } from "@/lib/site-data";

export function Pillars() {
  return (
    <section className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="One philosophy. Three ways to belong."
          intro="Resort, farm, and home, each complete on its own, each richer because of the others."
        />

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Link href={`#${pillar.id}`}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group relative h-[460px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="text-xs font-light uppercase tracking-[0.3em] text-gold">{pillar.eyebrow}</span>
                    <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{pillar.title}</h3>
                    <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-foreground/75">
                      {pillar.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-light text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {pillar.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
