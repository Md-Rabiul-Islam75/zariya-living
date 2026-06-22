import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-teal-deep py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Zariya Living"
              width={140}
              height={56}
              className="mx-auto h-14 w-auto object-contain md:mx-0"
            />
            <p className="mt-5 text-sm font-light leading-relaxed text-foreground/60">
              One philosophy. Four landscapes. A lifetime of belonging. A community-living development in Sylhet,
              Bangladesh.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-foreground/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#book" className="text-sm font-light text-gold transition-colors hover:text-gold-soft">
              Book a Visit
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-xs font-light text-foreground/40 md:flex-row">
          <p>© {new Date().getFullYear()} Zariya Living. All rights reserved.</p>
          <p>Conceptual representations only — subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
