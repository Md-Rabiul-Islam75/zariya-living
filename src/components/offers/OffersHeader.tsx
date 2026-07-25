"use client";

import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { OFFERS } from "@/lib/offers-data";

/**
 * Sticky private header for the offers page: transparent over the hero,
 * turning into a solid teal bar once scrolled. Kept visible at all sizes so
 * the branding + "Private Invitation" stays present on small devices.
 */
export function OffersHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-teal-deep/90 backdrop-blur-md shadow-[0_1px_0_rgba(223,193,165,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 lg:px-10">
        <Link href="/" aria-label="Zariya Living, home">
          <Image
            src="/images/logo/zariya-living-white.png"
            alt="Zariya Living"
            width={1945}
            height={505}
            priority
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 sm:gap-2.5 sm:px-4 sm:py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-[11px]">
            {OFFERS.hero.badge}
          </span>
        </div>
      </div>
    </header>
  );
}
