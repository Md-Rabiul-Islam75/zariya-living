"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { EASE } from "@/lib/easing";
import { Wordmark } from "@/components/ui/Wordmark";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  NAV_LINKS,
  PROJECTS,
  CONTACT,
  SOCIAL_LINKS,
  LEGAL_LINKS,
} from "@/lib/site-data";

const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsapp}`;

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-deep">
      {/* Top hairline gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:col-span-4"
          >
            <Link href="/" aria-label="Zariya Living — home" className="inline-block">
              <Wordmark size="lg" />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-lg font-light italic leading-relaxed text-foreground/70">
              Zariya. Belonging today, legacy tomorrow.
            </p>

            <div className="mt-7 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-teal-deep"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:col-span-2"
          >
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-3">
              <FooterLink href="/">Home</FooterLink>
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:col-span-3"
          >
            <FooterHeading>Projects</FooterHeading>
            <ul className="mt-5 space-y-3">
              <FooterLink href="/projects/sylhet">Sylhet Resort &amp; Villas</FooterLink>
              {PROJECTS.map((p) => (
                <li key={p.name}>
                  <span className="group flex items-center gap-2 text-sm font-light text-foreground/45">
                    {p.name}
                    <span className="rounded-full border border-gold/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-gold/70">
                      Soon
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div
            custom={3}
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:col-span-3"
          >
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm font-light text-foreground/70">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                  WhatsApp
                </a>
              </li>
              <li className="pt-1 leading-relaxed text-foreground/55">{CONTACT.address}</li>
            </ul>

            <FooterContactForm />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-gold/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs font-light text-foreground/50 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <p className="text-xs font-light text-foreground/50">
                © {new Date().getFullYear()} Zariya Living Ltd.
              </p>
              <BackToTop />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-xs font-light leading-relaxed text-foreground/35">
            All visuals, renderings, and images are conceptual representations only and are subject to change.
            Final design, materials, landscaping, and finishes may vary from those depicted.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{children}</h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center text-sm font-light text-foreground/70 transition-colors hover:text-gold"
      >
        <span className="mr-0 h-px w-0 bg-gold transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
        {children}
      </Link>
    </li>
  );
}

function FooterContactForm() {
  const [sent, setSent] = useState(false);

  // Static for now — wire to an API route / CRM when going dynamic.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mt-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-light text-gold"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold text-xs">✓</span>
            Message sent — we&apos;ll be in touch.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full border-b border-foreground/20 bg-transparent py-2 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="w-full border-b border-foreground/20 bg-transparent py-2 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="rounded-md bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-teal-deep"
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="group flex items-center gap-1.5 text-xs font-light text-foreground/50 transition-colors hover:text-gold"
    >
      Top
      <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
    </button>
  );
}
