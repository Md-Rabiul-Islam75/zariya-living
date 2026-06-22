"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-teal-deep/90 backdrop-blur-md shadow-[0_1px_0_rgba(223,193,165,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Zariya Living"
            width={120}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-light tracking-wide text-foreground/85 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#book"
            className="rounded-full border border-gold/70 px-6 py-2.5 text-sm font-light tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-teal-deep"
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-gold/10 bg-teal-deep/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-base font-light tracking-wide text-foreground/85 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block rounded-full border border-gold/70 px-6 py-2.5 text-sm tracking-wide text-gold"
                >
                  Book a Visit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
