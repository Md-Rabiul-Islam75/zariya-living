"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal direction="up">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.35em] text-gold-deep">
              Why Zariya Exists
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl md:text-5xl">
              Zariya Means The Path.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p className="mt-6 text-lg font-normal leading-relaxed text-ink/80">
              For centuries, Sylhet has been known as the land of the 360 Auliyas, saints who carried the
              light of peace, faith, and healing into Bengal. This sacred place was never just a destination.
              It was always a path.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <p className="mt-4 text-lg font-normal leading-relaxed text-ink/80">
              There comes a point in life when success alone stops feeling like enough. The career milestones
              are behind you. The responsibilities are met. Life looks complete from the outside. But deep
              inside, the heart begins searching for something quieter. A place. Roots. People who know you
              without explanation.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.22}>
            <p className="mt-4 text-lg font-normal leading-relaxed text-ink/80">
              Zariya came out of that longing. The name means &lsquo;The Path&rsquo;, a path that reconnects
              you with faith, nature, belonging, and the version of yourself you set aside somewhere along the
              way.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.28}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-serif text-2xl font-light italic leading-relaxed text-ink md:text-3xl">
                &ldquo;Sylhet was never just a destination. It was always a path.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/villa-community.png"
              alt="Zariya lagoon villa community"
              width={1447}
              height={1087}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-72 w-full object-cover object-center sm:h-96 lg:h-[560px]"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
