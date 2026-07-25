"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NAV_LINKS, PROJECTS, CONTACT, SOCIAL_LINKS, LEGAL_LINKS } from "@/lib/site-data";

const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsapp}`;

const SOCIAL_BRAND: Record<string, string> = {
  facebook: "bg-[#1877F2]",
  youtube: "bg-[#FF0000]",
  instagram: "bg-[linear-gradient(45deg,#F58529,#DD2A7B_50%,#8134AF)]",
  linkedin: "bg-[#0A66C2]",
};

export function OffersFooter() {
  return (
    <footer className="bg-teal-deep pb-9 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo/zariya-sylhet-logo.png"
              alt="Zariya Sylhet Resort & Villas"
              width={1939}
              height={513}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-xs text-lg italic leading-relaxed text-gold">
              Zariya. Belonging Today. Legacy Tomorrow.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 hover:-translate-y-1 ${SOCIAL_BRAND[s.icon]}`}
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-3">
              <FooterLink href="/">Home</FooterLink>
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="lg:col-span-3">
            <FooterHeading>Projects</FooterHeading>
            <ul className="mt-5 space-y-3">
              <FooterLink href="/projects/sylhet">Sylhet Resort &amp; Villas</FooterLink>
              {PROJECTS.map((p) => (
                <li key={p.name}>
                  <span className="flex items-center gap-2 text-sm font-light text-white/45">
                    {p.name}
                    <span className="text-[10px] uppercase tracking-[0.1em] text-gold">· Soon</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
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
              <li className="pt-1 leading-relaxed text-white/55">{CONTACT.address}</li>
            </ul>
            <FooterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-gold/20 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-xs text-white/55 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-white/55">© {new Date().getFullYear()} Zariya Living Ltd.</p>
          </div>
          <p className="mt-5 max-w-3xl text-[12px] italic leading-relaxed text-gold/50">
            All visuals, renderings, and images are conceptual representations only and are subject to change. Final
            design, materials, landscaping, and finishes may vary from those depicted. This page is shared privately
            and not indexed.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{children}</p>;
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/75 transition-colors hover:text-gold">
        {children}
      </Link>
    </li>
  );
}

function FooterForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  const input =
    "w-full border-b border-gold/30 bg-transparent py-2 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold";
  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-gold">
            ✓ Message sent — we&apos;ll be in touch.
          </motion.p>
        ) : (
          <motion.form key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="email" required placeholder="Email" className={input} />
            <input type="text" placeholder="Message" className={input} />
            <button type="submit" className="mt-1 w-fit rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-teal-deep">
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
