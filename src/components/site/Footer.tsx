import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/site/LeadForm";
import { WhatsAppIcon } from "@/components/site/ui";

const WHATSAPP = "https://wa.me/8801907070640";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Zariya Agro", href: "/agro" },
  { label: "Projects", href: "/projects" },
  { label: "Ownership & Income", href: "/ownership" },
  { label: "Township & Amenities", href: "/township" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
];

const SOON = ["Niladri", "Noakhali", "Cox's Bazar"];

const SOCIAL_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full border border-solid border-[rgba(223,193,165,.3)] text-z-gold transition-[background,color,border-color,transform] duration-300 ease-[ease] hover:border-z-gold hover:bg-z-gold hover:text-z-deep hover:[transform:translateY(-2px)]";

const COLUMN_TITLE =
  "mb-[18px] text-[14px] font-semibold tracking-[.16em] text-z-gold uppercase";
const FOOTER_LINK =
  "cursor-pointer text-left text-[17px] font-normal text-[rgba(255,255,255,.88)] hover:text-z-gold";
const FOOTER_INPUT =
  "border-b border-solid border-[rgba(223,193,165,.3)] bg-transparent px-[2px] py-[9px] text-[16.5px] text-white outline-none focus:border-z-gold";
const LEGAL_LINK =
  "cursor-pointer text-[15.5px] font-normal text-[rgba(255,255,255,.88)] hover:text-z-gold";

export function Footer() {
  return (
    <>
      <footer className="bg-z-deep pt-[88px] pb-[36px] text-white max-[920px]:pb-[108px]">
        <div data-container="" className="mx-auto mb-14 max-w-[1320px] px-12">
          <p className="rounded-[6px] border border-solid border-[rgba(223,193,165,.3)] px-6 py-[18px] text-[17px] leading-[1.7] text-[rgba(255,255,255,.88)]">
            <strong className="font-semibold text-z-gold">Accessibility.</strong> We want everyone
            to be able to use this site. If anything is hard to see, read or operate, tell us at{" "}
            <a
              href="mailto:info@zariyaliving.com?subject=Accessibility%20feedback"
              className="text-z-gold underline"
            >
              info@zariyaliving.com
            </a>{" "}
            or{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener" className="text-z-gold underline">
              WhatsApp
            </a>{" "}
            and we will fix it.
          </p>
        </div>

        <div data-container="" className="mx-auto max-w-[1320px] px-12">
          <div data-grid="" className="grid grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-[50px]">
            <div>
              <Image
                src="/images/logo/zariya-living-white.png"
                alt="Zariya Living"
                width={1945}
                height={505}
                className="block h-[62px] w-auto"
              />
              <p className="mt-[22px] max-w-[24ch] text-[22px] leading-[1.45] text-z-gold italic">
                Zariya. Belonging Today. Legacy Tomorrow.
              </p>
              <div className="mt-7 flex gap-[13px]">
                <a
                  href="https://www.facebook.com/zariya.living"
                  target="_blank"
                  rel="noopener"
                  aria-label="Zariya on Facebook (opens in new tab)"
                  className={SOCIAL_CLASS}
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ZariyaLiving"
                  target="_blank"
                  rel="noopener"
                  aria-label="Zariya on YouTube (opens in new tab)"
                  className={SOCIAL_CLASS}
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7.5a3 3 0 0 0-2-2C18 5 12 5 12 5s-6 0-8 .5a3 3 0 0 0-2 2C2 9.3 2 12 2 12s0 2.7.5 4.5a3 3 0 0 0 2 2C6.3 19 12 19 12 19s6 0 8-.5a3 3 0 0 0 2-2c.5-1.8.5-4.5.5-4.5s0-2.7-.5-4.5ZM10 15V9l5 3-5 3Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/zariya_livingltd/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Zariya on Instagram (opens in new tab)"
                  className={SOCIAL_CLASS}
                >
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className={COLUMN_TITLE}>Explore</p>
              <div className="flex flex-col gap-[13px]">
                {EXPLORE_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className={FOOTER_LINK}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={COLUMN_TITLE}>Projects</p>
              <div className="flex flex-col gap-[13px]">
                <Link href="/projects/sylhet" className={FOOTER_LINK}>
                  Sylhet Resort &amp; Villas
                </Link>
                {SOON.map((name) => (
                  <span key={name} className="text-[17px] text-[rgba(255,255,255,.88)]">
                    {name}{" "}
                    <span className="text-[14px] tracking-[.1em] text-z-gold">· Coming Soon</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className={COLUMN_TITLE}>Get in Touch</p>
              <div className="flex flex-col gap-[11px] text-[16.5px] leading-[1.6] text-[rgba(255,255,255,.88)]">
                <a href="tel:+8801907070640" className="hover:text-z-gold">
                  +880 1907 070640–43
                </a>
                <a href="mailto:info@zariyaliving.com" className="hover:text-z-gold">
                  info@zariyaliving.com
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-z-gold">
                  WhatsApp
                </a>
                <span>32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230, Bangladesh</span>
              </div>
              <LeadForm kind="footer" className="relative mt-[22px] flex flex-col gap-3">
                <input
                  name="email"
                  aria-required="true"
                  type="email"
                  aria-label="Your email"
                  placeholder="Email"
                  className={FOOTER_INPUT}
                />
                <input
                  name="message"
                  aria-required="true"
                  type="text"
                  aria-label="Your message"
                  placeholder="Message"
                  className={FOOTER_INPUT}
                />
                <button
                  type="submit"
                  className="z-btn z-btn-gold mt-1 self-start px-[22px] py-[11px] text-[14px] tracking-[.05em]"
                >
                  Send Message
                </button>
              </LeadForm>
            </div>
          </div>

          <div className="mt-[50px] mb-[26px] h-px bg-[rgba(223,193,165,.25)]" />

          <div data-2col="" className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap gap-[26px]">
              <Link href="/privacy" className={LEGAL_LINK}>
                Privacy &amp; Terms
              </Link>
              <Link href="/legal" className={LEGAL_LINK}>
                Legal &amp; Disclosures
              </Link>
            </div>
            <p className="text-[15.5px] text-[rgba(255,255,255,.88)]">© 2026 Zariya Living Ltd.</p>
          </div>

          <p className="mt-[26px] max-w-[90ch] text-[15.5px] leading-[1.7] text-z-gold italic">
            All visuals, renderings, and images are conceptual representations only and are subject
            to change. Final design, materials, landscaping, and finishes may vary from those
            depicted.
          </p>
        </div>
      </footer>

      <div
        data-mobcta=""
        className="fixed right-0 bottom-0 left-0 z-[999] hidden gap-3 border-t border-solid border-[rgba(223,193,165,.25)] bg-z-deep px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,.3)]"
      >
        <Link href="/visit" className="z-btn z-btn-gold flex-1 p-[14px] text-[15.5px] tracking-[.04em]">
          Book a Visit
        </Link>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          aria-label="Chat with Zariya on WhatsApp"
          className="flex w-12 items-center justify-center rounded-[3px] border border-solid border-[rgba(223,193,165,.3)] bg-z-green text-z-gold"
        >
          <WhatsAppIcon size={20} />
        </a>
      </div>
    </>
  );
}
