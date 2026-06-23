"use client";

import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS_EXPANDING } from "@/lib/site-data";

export function ProjectsExpanding() {
  return (
    <section className="bg-teal-panel py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {PROJECTS_EXPANDING.title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="mt-6 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
            {PROJECTS_EXPANDING.body}
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.18}>
          <p className="mt-8 text-xs font-light italic text-foreground/40">
            {PROJECTS_EXPANDING.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
