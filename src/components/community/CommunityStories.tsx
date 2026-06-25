"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { COMMUNITY_STORIES } from "@/lib/site-data";

export function CommunityStories() {
  return (
    <section className="bg-teal-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
            {COMMUNITY_STORIES.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-3">
          {COMMUNITY_STORIES.items.map((story) => (
            <StaggerItem key={story.author} className="h-full">
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-xl"
              >
                <blockquote className="flex-1">
                  <p className="font-serif text-lg font-light italic leading-relaxed text-teal-deep/85">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  — {story.author}
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
