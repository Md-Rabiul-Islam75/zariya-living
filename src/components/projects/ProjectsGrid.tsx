"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ALL_PROJECTS } from "@/lib/site-data";

export function ProjectsGrid() {
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Stagger className="grid gap-8 md:grid-cols-2">
          {ALL_PROJECTS.map((project) => {
            const active = project.status === "Active";
            return (
              <StaggerItem key={project.name} className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-teal-panel/60 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm ${
                        active
                          ? "bg-gold text-teal-deep"
                          : "border border-gold/40 bg-teal-deep/70 text-gold"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-serif text-2xl font-light text-foreground">{project.name}</h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                      {project.location}
                    </p>
                    <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-foreground/70">
                      {project.description}
                    </p>

                    <Link
                      href={project.href}
                      className={`mt-7 inline-flex w-fit items-center gap-2 rounded-md px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                        active
                          ? "bg-gold text-teal-deep hover:scale-105"
                          : "border border-gold/50 text-gold hover:bg-gold hover:text-teal-deep"
                      }`}
                    >
                      {project.cta}
                      {active && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
                    </Link>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
