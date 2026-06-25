"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { EXPLORE_NEWS } from "@/lib/site-data";

export function WhatsHappening() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            What&apos;s Happening at Zariya
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-3">
          {EXPLORE_NEWS.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-teal-deep/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-light leading-snug text-teal-deep">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-normal leading-relaxed text-teal-deep/80">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-fit items-center gap-2 border-b border-teal-deep/30 pb-1 text-sm font-light text-teal-deep transition-colors hover:border-gold hover:text-gold"
                  >
                    Read More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
