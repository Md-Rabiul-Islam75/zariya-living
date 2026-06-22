"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VILLA_GALLERY } from "@/lib/site-data";

export function Villas() {
  return (
    <section id="villas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Lagoon Villa Community"
          title="Where you rest."
          intro="Architect-designed villas wrapped around a private lagoon. No decision should be made without standing on the land — but this is the life that waits."
        />

        <Stagger className="mt-16 grid auto-rows-[280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[320px]">
          {VILLA_GALLERY.map((villa, i) => (
            <StaggerItem
              key={villa.title}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={villa.image}
                  alt={villa.title}
                  fill
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl font-light text-foreground md:text-2xl">{villa.title}</h3>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal direction="up" className="mt-12 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-8 py-3.5 text-sm font-light tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-teal-deep"
          >
            Book a Site Visit
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
