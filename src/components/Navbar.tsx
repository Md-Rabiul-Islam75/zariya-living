"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useState } from "react";
import { NAV_LINKS, CONTACT, type NavLink } from "@/lib/site-data";
import { Wordmark } from "@/components/ui/Wordmark";

const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsapp}`;

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2.5C6.84 2.5 2.6 6.74 2.6 11.94c0 1.66.43 3.28 1.26 4.71L2.5 21.5l4.97-1.3a9.42 9.42 0 0 0 4.56 1.16h.01c5.2 0 9.43-4.24 9.43-9.43 0-2.52-.98-4.89-2.76-6.67a9.36 9.36 0 0 0-6.67-2.76zm0 17.27h-.01a7.83 7.83 0 0 1-3.99-1.09l-.29-.17-2.95.77.79-2.88-.19-.3a7.82 7.82 0 0 1-1.2-4.16c0-4.32 3.52-7.84 7.85-7.84 2.1 0 4.07.82 5.55 2.3a7.8 7.8 0 0 1 2.3 5.55c0 4.32-3.52 7.84-7.85 7.84z" />
    </svg>
  );
}

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

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          {/* Desktop: WhatsApp + Book a Visit */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-300 hover:bg-gold hover:text-teal-deep"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <Link
              href={CONTACT.bookHref}
              className="rounded-md bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-teal-deep transition-transform duration-300 hover:scale-105"
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
            <span className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-gold transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
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

              {/* Mobile actions */}
              <li className="mt-3 flex items-center gap-3 border-t border-gold/10 pt-4">
                <Link
                  href={CONTACT.bookHref}
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-teal-deep"
                >
                  Book a Visit
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </li>
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
          // pt-3 is a transparent "bridge" so moving the cursor from the
          // trigger into the menu never crosses a dead gap (no flicker).
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
          >
            <ul className="overflow-hidden rounded-xl border border-gold/15 bg-teal-deep/95 py-2 shadow-2xl backdrop-blur-md">
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
