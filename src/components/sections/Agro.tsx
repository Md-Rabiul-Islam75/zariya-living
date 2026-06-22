"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AGRO_FEATURES } from "@/lib/site-data";

export function Agro() {
  return (
    <section id="agro" className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Zariya Agro"
          title="Food grown beside where you live."
          intro="Vegetables and fruit grown without synthetic chemicals, harvested at peak ripeness and on your table within hours — a working farm at the centre of everyday life."
        />

        <div className="mt-20 flex flex-col gap-20 md:gap-28">
          {AGRO_FEATURES.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal
                  direction={reversed ? "left" : "right"}
                  className={reversed ? "md:order-2" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Parallax distance={45} className="absolute inset-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="scale-110 object-cover"
                      />
                    </Parallax>
                  </div>
                </Reveal>

                <div className={reversed ? "md:order-1" : ""}>
                  <Reveal direction="up">
                    <span className="text-xs font-light uppercase tracking-[0.3em] text-gold">
                      0{i + 1}
                    </span>
                  </Reveal>
                  <Reveal direction="up" delay={0.05}>
                    <h3 className="mt-3 font-serif text-2xl font-light text-foreground md:text-3xl">
                      {feature.title}
                    </h3>
                  </Reveal>
                  <Reveal direction="up" delay={0.1}>
                    <p className="mt-4 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                      {feature.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
