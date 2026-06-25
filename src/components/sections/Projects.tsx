"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Projects"
          title="One philosophy. Four landscapes."
          intro="The flagship rises in Sylhet. Next, the same way of living comes to three more of Bangladesh's most beautiful places."
        />

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.name}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group overflow-hidden rounded-2xl bg-teal-panel"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-teal-deep/80 px-3 py-1 text-xs font-light uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-light text-foreground">{project.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/50">{project.location}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <a
                    href="#book"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-light text-gold transition-all hover:gap-3"
                  >
                    Get Notified <span>→</span>
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-12 text-center text-xs font-light text-foreground/40">
          All visuals and project descriptions are conceptual representations only and are subject to change.
        </p>
      </div>
    </section>
  );
}
