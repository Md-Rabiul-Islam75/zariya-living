"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Reusable split image/text feature with tag pills + CTA.
 * Used for Part Two (Agro, white, image right) and Part Three (Lagoon, dark,
 * image left).
 */
export function SplitFeature({
  id,
  eyebrow,
  title,
  body,
  image,
  tags,
  cta,
  href,
  dark = false,
  imageLeft = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  tags: readonly string[];
  cta: string;
  href: string;
  dark?: boolean;
  imageLeft?: boolean;
}) {
  const ImageBlock = (
    <Reveal direction={imageLeft ? "right" : "left"} className={imageLeft ? "lg:order-1" : "lg:order-2"}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
        <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
    </Reveal>
  );

  const TextBlock = (
    <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
      <Reveal direction="up">
        <div className="mb-4 flex items-center gap-4">
          <span className={`h-px w-10 ${dark ? "bg-gold/60" : "bg-gold-deep"}`} />
          <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? "text-gold" : "text-gold-deep"}`}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.05}>
        <h2 className={`font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl ${dark ? "text-foreground" : "text-teal-deep"}`}>
          {title}
        </h2>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className={`mt-6 text-base leading-relaxed md:text-lg ${dark ? "font-light text-foreground/75" : "font-normal text-teal-deep/80"}`}>
          {body}
        </p>
      </Reveal>

      <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tags.map((tag) => (
          <StaggerItem key={tag}>
            <div
              className={`rounded-md px-4 py-3 text-sm ${
                dark
                  ? "border border-gold/20 bg-teal-panel/40 font-light text-foreground/85"
                  : "bg-[#f2ede4] font-normal text-teal-deep/85"
              }`}
            >
              {tag}
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal direction="up" delay={0.15}>
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-deep transition-transform duration-300 hover:scale-105"
        >
          {cta} <span>→</span>
        </Link>
      </Reveal>
    </div>
  );

  return (
    <section id={id} className={`${id ? "scroll-mt-20 " : ""}py-24 md:py-32 ${dark ? "bg-teal-deep" : "bg-white"}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {imageLeft ? (
          <>
            {ImageBlock}
            {TextBlock}
          </>
        ) : (
          <>
            {TextBlock}
            {ImageBlock}
          </>
        )}
      </div>
    </section>
  );
}
