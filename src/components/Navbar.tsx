"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useState } from "react";
import { NAV_LINKS, type NavLink } from "@/lib/site-data";
import { Wordmark } from "@/components/ui/Wordmark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
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
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Zariya Living — home">
          <Wordmark size="md" />
        </Link>

        {/* Desktop links — absolutely centered in the bar */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <DesktopLink key={link.href} link={link} />
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
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
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileSub((s) => (s === link.href ? null : link.href))}
                        className="flex w-full items-center justify-between py-2.5 text-base font-light tracking-wide text-foreground/85"
                      >
                        {link.label}
                        <span className={`text-gold transition-transform duration-300 ${mobileSub === link.href ? "rotate-180" : ""}`}>
                          ▾
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSub === link.href && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-2 text-sm font-light text-foreground/70 hover:text-gold"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-base font-light tracking-wide text-foreground/85 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function DesktopLink({ link }: { link: NavLink }) {
  const [hover, setHover] = useState(false);

  if (!link.children) {
    return (
      <li>
        <Link
          href={link.href}
          className="group relative text-sm font-light tracking-wide text-foreground/85 transition-colors hover:text-gold"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={link.href}
        className="group flex items-center gap-1 text-sm font-light tracking-wide text-foreground/85 transition-colors hover:text-gold"
      >
        {link.label}
        <span className={`text-[0.65em] text-gold transition-transform duration-300 ${hover ? "rotate-180" : ""}`}>
          ▾
        </span>
      </Link>

      <AnimatePresence>
        {hover && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-gold/15 bg-teal-deep/95 py-2 shadow-xl backdrop-blur-md"
          >
            {link.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-5 py-2.5 text-sm font-light text-foreground/80 transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
