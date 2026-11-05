"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore, type FocusEvent, type KeyboardEvent } from "react";
import { WhatsAppIcon } from "@/components/site/ui";

const LOGO = "/images/logo/zariya-living-white.png";
const WHATSAPP = "https://wa.me/8801907070640";

const DESKTOP_NAV_ITEM =
  "cursor-pointer py-[6px] text-[16px] tracking-[.03em] transition-[color,box-shadow] duration-[.25s] ease-[ease] hover:text-z-gold";
const SOON_ITEMS = ["Niladri", "Noakhali", "Cox's Bazar"];

const MOBILE_ITEM =
  "cursor-pointer border-b border-solid border-[rgba(223,193,165,.14)] py-[17px] text-left text-[27px] font-normal text-white transition-[color,padding] duration-300 ease-[ease] hover:pl-2 hover:text-z-gold";

function subscribeScroll(listener: () => void) {
  window.addEventListener("scroll", listener, { passive: true });
  return () => window.removeEventListener("scroll", listener);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 60,
    () => false,
  );
}

function DesktopLink({
  href,
  label,
  active,
  optional,
}: {
  href: string;
  label: string;
  active: boolean;
  optional?: boolean;
}) {
  return (
    <Link
      href={href}
      data-navopt={optional ? "" : undefined}
      aria-current={active ? "page" : undefined}
      className={`${DESKTOP_NAV_ITEM} ${active ? "font-semibold text-z-gold shadow-[inset_0_-2px_0_#DFC1A5]" : "font-medium text-white"}`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeAll = () => {
    setMobileOpen(false);
    setProjOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const onProjBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setProjOpen(false);
  };
  const onProjKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setProjOpen(false);
      e.currentTarget.querySelector("a")?.focus();
    }
  };

  return (
    <>
      <nav
        aria-label="Main"
        className="fixed top-0 right-0 left-0 z-[1000] border-b border-solid transition-[background,box-shadow,border-color] duration-[.45s] ease-[ease]"
        style={{
          background: scrolled ? "#092C2C" : "transparent",
          boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,.32)" : "none",
          borderBottomColor: scrolled ? "rgba(223,193,165,.18)" : "transparent",
        }}
      >
        <div
          data-container=""
          className="mx-auto flex h-[84px] max-w-[1320px] items-center justify-between gap-6 px-12"
        >
          <Link
            href="/"
            onClick={closeAll}
            aria-label="Zariya Living — home"
            className="flex cursor-pointer items-center transition-[opacity,transform] duration-300 ease-[ease] hover:[transform:translateY(-1px)] hover:opacity-[.82]"
          >
            <Image
              src={LOGO}
              alt="Zariya Living"
              width={1945}
              height={505}
              preload
              className="block h-10 w-auto"
            />
          </Link>

          <div data-desk="" data-navlinks="" className="flex items-center gap-[26px]">
            <DesktopLink href="/explore" label="Explore" active={isActive("/explore")} />
            <DesktopLink href="/agro" label="Zariya Agro" active={isActive("/agro")} />

            <div
              className="relative"
              onMouseEnter={() => setProjOpen(true)}
              onMouseLeave={() => setProjOpen(false)}
              onFocus={() => setProjOpen(true)}
              onBlur={onProjBlur}
              onKeyDown={onProjKey}
            >
              <Link
                href="/projects"
                onClick={closeAll}
                aria-haspopup="true"
                aria-expanded={projOpen}
                aria-current={isActive("/projects") ? "page" : undefined}
                className={`${DESKTOP_NAV_ITEM} flex items-center gap-[7px] ${isActive("/projects") ? "font-semibold text-z-gold shadow-[inset_0_-2px_0_#DFC1A5]" : "font-medium text-white"}`}
              >
                Projects<span className="text-[11px] opacity-70">▾</span>
              </Link>
              <div
                className="absolute top-[38px] left-[-18px] min-w-[268px] rounded-[4px] border border-solid border-[rgba(223,193,165,.22)] bg-z-deep p-[10px] shadow-[0_24px_60px_rgba(0,0,0,.45)] transition-all duration-300 ease-[ease]"
                style={{
                  opacity: projOpen ? 1 : 0,
                  visibility: projOpen ? "visible" : "hidden",
                  transform: `translateY(${projOpen ? "0px" : "8px"})`,
                }}
              >
                <Link
                  href="/projects/sylhet"
                  onClick={closeAll}
                  className="block w-full cursor-pointer rounded-[3px] px-4 py-[13px] text-left text-[16px] font-medium text-white hover:bg-[rgba(223,193,165,.12)] hover:text-z-gold"
                >
                  Sylhet Resort &amp; Villas
                </Link>
                {SOON_ITEMS.map((name) => (
                  <Link
                    key={name}
                    href="/projects"
                    onClick={closeAll}
                    className="flex w-full cursor-pointer items-center justify-between rounded-[3px] px-4 py-[13px] text-left text-[16px] font-medium text-[rgba(255,255,255,.88)] hover:bg-[rgba(223,193,165,.08)]"
                  >
                    {name}
                    <span className="rounded-[20px] border border-solid border-[rgba(223,193,165,.4)] px-[7px] py-[2px] text-[14px] tracking-[.12em] text-z-gold">
                      Coming Soon
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <DesktopLink href="/ownership" label="Ownership & Income" active={isActive("/ownership")} />
            <DesktopLink
              href="/township"
              label="Township & Amenities"
              active={isActive("/township")}
              optional
            />
            <DesktopLink href="/community" label="Community" active={isActive("/community")} />
            <DesktopLink href="/visit" label="Visit" active={isActive("/visit")} />
          </div>

          <div data-desk="" className="flex items-center gap-4">
            <a
              data-navwa=""
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              aria-label="Chat with Zariya on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[rgba(223,193,165,.35)] text-z-gold hover:border-z-gold"
            >
              <WhatsAppIcon size={18} />
            </a>
            <Link
              data-navcta=""
              href="/contact"
              className="z-btn z-btn-gold px-[26px] py-[14px] text-[15.5px] tracking-[.05em] whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </div>

          <button
            data-mob=""
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="hidden h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px]"
          >
            <span className="block h-[1.5px] w-6 bg-z-gold" />
            <span className="block h-[1.5px] w-6 bg-z-gold" />
            <span className="block h-[1.5px] w-6 bg-z-gold" />
          </button>
        </div>
      </nav>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!mobileOpen}
        className="fixed inset-0 z-[1001] flex flex-col overflow-y-auto bg-z-deep px-7 pt-7 pb-10 transition-transform duration-[.4s] ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          visibility: mobileOpen ? "visible" : "hidden",
          transform: `translateX(${mobileOpen ? "0%" : "100%"})`,
        }}
      >
        <div className="mb-10 flex items-center justify-between">
          <Image src={LOGO} alt="Zariya Living" width={1945} height={505} className="block h-[42px] w-auto" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[30px] leading-none text-z-gold transition-[background,color,transform] duration-300 ease-[ease] hover:rotate-90 hover:bg-[rgba(223,193,165,.14)] hover:text-white"
          >
            ×
          </button>
        </div>
        <Link href="/" onClick={closeAll} className={MOBILE_ITEM}>
          Home
        </Link>
        <Link
          href="/agro"
          onClick={closeAll}
          className={`${MOBILE_ITEM} ${isActive("/agro") ? "text-z-gold" : ""}`}
        >
          Zariya Agro
        </Link>
        <Link href="/explore" onClick={closeAll} className={MOBILE_ITEM}>
          Explore
        </Link>
        <Link href="/projects" onClick={closeAll} className={MOBILE_ITEM}>
          Projects
        </Link>
        <Link
          href="/projects/sylhet"
          onClick={closeAll}
          className="cursor-pointer border-b border-solid border-[rgba(223,193,165,.14)] py-[13px] pl-[18px] text-left text-[22px] font-normal text-[rgba(255,255,255,.88)] transition-[color,padding] duration-300 ease-[ease] hover:pl-[26px] hover:text-z-gold"
        >
          Sylhet Resort &amp; Villas
        </Link>
        <Link href="/ownership" onClick={closeAll} className={MOBILE_ITEM}>
          Ownership &amp; Income
        </Link>
        <Link href="/township" onClick={closeAll} className={MOBILE_ITEM}>
          Township &amp; Amenities
        </Link>
        <Link href="/community" onClick={closeAll} className={MOBILE_ITEM}>
          Community
        </Link>
        <Link href="/visit" onClick={closeAll} className={MOBILE_ITEM}>
          Visit
        </Link>
        <Link
          href="/visit"
          onClick={closeAll}
          className="z-btn z-btn-gold mt-[30px] p-[17px] text-[16.5px] tracking-[.05em]"
        >
          Book a Visit
        </Link>
      </div>
    </>
  );
}
