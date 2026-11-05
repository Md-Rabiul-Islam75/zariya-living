"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

const NEWS = [
  {
    image: "/images/agro-facility.png",
    alt: "Aerial view of the Zariya Agro site at golden hour",
    backdrop: "linear-gradient(150deg,#092C2C,#114747)",
    tag: "Development Milestones",
    title: "Land Development & Site Preparation Underway",
    teaser: "Progress continues across the masterplan as the site takes shape ahead of the first phase.",
    href: "/explore",
    cta: "Explore the Masterplan",
    body: [
      "Groundwork is moving steadily across the Zariya masterplan in Sylhet. Survey, land levelling and access-road preparation are progressing ahead of the first phase.",
      "Alongside the resort land, the Zariya Agro fields are being prepared for the first planting season — with irrigation layout, soil preparation and the agro-processing zone planned in step.",
      "We share progress photos and site updates with members regularly. The best way to see it for yourself is a guided visit to the land.",
    ],
  },
  {
    image: "/images/sky-lounge.jpg",
    alt: "The rooftop Sky Lounge among the tree canopy at night",
    backdrop: "linear-gradient(150deg,#114747,#13524a)",
    tag: "Announcements",
    title: "Founding Member Registration Now Open",
    teaser: "A limited number of founding memberships are available to early believers in the Zariya vision.",
    href: "/community",
    cta: "Join the Community",
    body: [
      "A limited number of founding memberships are now available to early believers in the Zariya vision.",
      "Founding members receive priority allocation, founding-member pricing, and a seat at the table as the community takes shape — starting with the first release of Zariya Agro Shares.",
      "Places are limited and allocated in order of registration. Register your interest and our team will contact you with the full details.",
    ],
  },
  {
    image: "/assets/media/tower-aerial.jpg",
    alt: "Aerial view of the Zariya lotus Tea Tower above the forest",
    backdrop: "linear-gradient(150deg,#0d3a38,#114747)",
    tag: "Upcoming Events",
    title: "By-Air Sylhet Experience Tour Dates",
    teaser: "Join an upcoming guided tour of the land, the lagoon, and Sylhet's most iconic landmarks.",
    href: "/visit",
    cta: "Book a Visit",
    body: [
      "Join a guided experience tour of Zariya: walk the land, see the lagoon and the agro fields, and explore some of Sylhet’s most iconic landmarks.",
      "Tours run in small groups so every guest gets time with our team to ask questions about ownership, the Agro model and the resort.",
      "Tour dates are announced to registered guests first. Book a visit and we will share the next available dates with you.",
    ],
  },
];

/** "What's Happening at Zariya": three news cards that open an article popup. */
export function ExploreNews() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const close = useCallback((restoreFocus = true) => {
    setOpenIndex(null);
    if (restoreFocus) opener.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close]);

  const open = (index: number, e: MouseEvent<HTMLButtonElement>) => {
    opener.current = e.currentTarget;
    setOpenIndex(index);
  };

  const article = openIndex === null ? null : NEWS[openIndex];

  return (
    <>
      <div data-grid="" className="grid grid-cols-[repeat(3,1fr)] gap-7">
        {NEWS.map((item, i) => (
          <div
            key={item.title}
            data-reveal=""
            data-delay={i ? String(i * 120) : undefined}
            className="overflow-hidden rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white transition-[transform,box-shadow] duration-[.35s] ease-[ease] hover:[box-shadow:0_24px_50px_rgba(9,44,44,.12)] hover:[transform:translateY(-5px)]"
          >
            <div className="relative h-[200px] overflow-hidden" style={{ background: item.backdrop }}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 920px) 100vw, 410px"
                className="object-cover"
              />
            </div>
            <div className="px-7 py-[30px]">
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-deep uppercase">
                {item.tag}
              </p>
              <h3 className="mt-3 text-[24.5px] leading-[1.25] font-medium text-z-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.75] text-[rgba(9,44,44,.88)]">{item.teaser}</p>
              <button
                type="button"
                onClick={(e) => open(i, e)}
                aria-haspopup="dialog"
                className="mt-[18px] cursor-pointer border-b-[1.5px] border-solid border-z-deep px-[2px] py-[5px] text-[15.5px] font-semibold text-z-green hover:text-z-deep"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {article &&
        createPortal(
          <div
            onClick={() => close()}
            className="fixed inset-0 z-[1500] flex items-center justify-center bg-[rgba(9,44,44,.72)] p-6 backdrop-blur-[4px]"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="news-title"
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[calc(100vh-48px)] w-full max-w-[760px] overflow-auto rounded-[12px] bg-white shadow-[0_40px_90px_rgba(0,0,0,.4)]"
            >
              <button
                ref={closeButton}
                type="button"
                onClick={() => close()}
                aria-label="Close article"
                className="absolute top-4 right-4 z-[2] h-11 w-11 cursor-pointer rounded-full bg-[rgba(9,44,44,.85)] text-[22px] leading-none text-white hover:bg-z-deep"
              >
                ×
              </button>
              <div className="relative aspect-[16/8] bg-z-green">
                <Image src={article.image} alt="" fill sizes="760px" className="object-cover" />
              </div>
              <div className="px-11 pt-10 pb-11">
                <p className="text-[14px] font-semibold tracking-[.14em] text-z-green uppercase">
                  {article.tag}
                </p>
                <h2 id="news-title" className="mt-3 text-[36px] leading-[1.15] font-medium text-z-deep">
                  {article.title}
                </h2>
                {article.body.map((paragraph) => (
                  <p key={paragraph} className="mt-[18px] text-[18px] leading-[1.8] text-[rgba(9,44,44,.88)]">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8 flex flex-wrap gap-[14px]">
                  <button
                    type="button"
                    onClick={() => {
                      close(false);
                      router.push(article.href);
                    }}
                    className="z-btn z-btn-green px-7 py-4 text-[15px] tracking-[.06em]"
                  >
                    {article.cta}
                  </button>
                  <button
                    type="button"
                    onClick={() => close()}
                    className="z-btn z-btn-dark-line px-[26px] py-[15px] text-[15px] tracking-[.06em]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.querySelector(".z2") ?? document.body,
        )}
    </>
  );
}
