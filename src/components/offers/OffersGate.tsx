import Image from "next/image";
import Link from "next/link";
import { OFFERS } from "@/lib/offers-data";

/**
 * Shown when /offers is opened without the correct key (i.e. not via the
 * ticket QR). Keeps the offer content private.
 */
export function OffersGate() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-teal-deep px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(223,193,165,0.12),transparent_65%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/logo/zariya-sylhet-logo.png"
          alt="Zariya Sylhet Resort & Villas"
          width={1939}
          height={513}
          priority
          className="h-10 w-auto object-contain brightness-0 invert"
        />

        <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
            <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
          </svg>
        </div>

        <span className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {OFFERS.hero.badge}
        </span>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">This is a Private Invitation.</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          This page is reserved for the Founding 10. Please open it using the QR code on your invitation ticket.
        </p>

        <Link
          href="/"
          className="mt-9 inline-block rounded-sm border border-gold/60 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:bg-gold hover:text-teal-deep"
        >
          Return to Zariya Living
        </Link>
      </div>
    </main>
  );
}
