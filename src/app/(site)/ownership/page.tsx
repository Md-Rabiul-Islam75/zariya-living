import type { Metadata } from "next";
import Link from "next/link";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Eyebrow, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Ownership & Income",
  description:
    "A multi-asset ownership ecosystem: Agro, Lagoon and Resort ownership, a staged payment plan, and a 100% Money-Back Guarantee.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";
const NARROW = "mx-auto max-w-[1100px] px-12";

const OPTIONS = [
  {
    option: "Option One",
    title: "AGRO Ownership",
    titleSize: "text-[28px]",
    facts: [
      ["Holding", "1 decimal freehold organic farmland"],
      ["Benefits", "Production income + farm-fresh access + annual resort stay"],
    ],
    note: "The most accessible entry into Zariya ownership, with real working land.",
    featured: true,
  },
  {
    option: "Option Two",
    title: "Lagoon Ownership",
    titleSize: "text-[28px]",
    facts: [
      ["Holding", "20 sq ft construction + 140 sq ft common land — freehold share"],
      ["The Villa", "2,200 sq ft lagoon-front duplex · 4 beds · private infinity pool"],
    ],
    note: "Lagoon-front living with resort rental income and a complimentary 2 nights / 3 days annual family stay.",
  },
  {
    option: "Option Three",
    title: "Resort Ownership",
    titleSize: "text-[30px]",
    facts: [
      ["Holding", "20 sq ft freehold construction + 100 sq ft common access"],
      ["Income Model", "50% of net resort profit shared among shareholders"],
    ],
    note: "Earn from year-round resort operations — seasonal demand, corporate bookings, retreats.",
  },
];

function Options() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <div data-container="" className={NARROW}>
        <div data-reveal="" className="mx-auto max-w-[760px] text-center">
          <h2 data-h2="" className="text-[48px] leading-[1.1] font-normal text-z-deep">
            A Multi-Asset Ownership Ecosystem.
          </h2>
          <p className="mt-[22px] text-[19px] leading-[1.9]" style={{ color: INK }}>
            Zariya is structured so your ownership is real, your income is recurring, and your asset
            grows in value over time. Here is exactly how each option works.
          </p>
        </div>
        <div data-reveal="" data-grid="" className="mt-[60px] grid grid-cols-[repeat(3,1fr)] gap-6">
          {OPTIONS.map((item) => (
            <div
              key={item.title}
              className={
                item.featured
                  ? "relative rounded-[14px] border border-solid border-z-gold bg-z-deep px-9 py-[42px]"
                  : "rounded-[14px] bg-z-green px-9 py-[42px]"
              }
            >
              {item.featured && (
                <span className="absolute top-[-12px] left-9 rounded-[20px] bg-z-gold px-[14px] py-[5px] text-[14px] font-semibold tracking-[.1em] text-z-deep uppercase">
                  First Release
                </span>
              )}
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-gold uppercase">
                {item.option}
              </p>
              <h3 className={`mt-[10px] font-medium text-white ${item.titleSize}`}>{item.title}</h3>
              <div className="my-[22px] h-px bg-[rgba(223,193,165,.3)]" />
              <div className="flex flex-col gap-[14px]">
                {item.facts.map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[14px] font-semibold tracking-[.06em] text-z-gold uppercase">
                      {label}
                    </p>
                    <p className="mt-[5px] text-[17px] leading-[1.6]" style={{ color: WHITE }}>
                      {value}
                    </p>
                  </div>
                ))}
                <p className="mt-2 text-[16.5px] leading-[1.7]" style={{ color: WHITE }}>
                  {item.note}
                </p>
                {item.featured && (
                  <Link
                    href="/agro"
                    className="z-btn z-btn-gold mt-[10px] self-start px-[22px] py-[13px] text-[15px] tracking-[.06em]"
                  >
                    Explore Agro Share →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["Reservation", "Secure your villa or share with a refundable reservation deposit."],
  ["Down Payment", "Confirm your ownership with a structured down payment."],
  ["Instalments", "Spread the balance across comfortable monthly or quarterly instalments."],
  ["Handover & Registration", "Freehold title registered in your name on completion."],
];

function PaymentPlan() {
  return (
    <section data-sec="" className="bg-z-deep py-[110px]">
      <div data-container="" className={NARROW}>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[48px] font-normal text-white">
            A Payment Plan That Respects You.
          </h2>
          <p
            className="mx-auto mt-[18px] max-w-[56ch] text-[18.5px] leading-[1.8]"
            style={{ color: WHITE }}
          >
            No hidden charges. No pressure. A clear, staged plan designed for families planning
            across borders and currencies.
          </p>
        </div>
        <div
          data-reveal=""
          className="mt-[50px] overflow-hidden rounded-[14px] border border-solid border-[rgba(223,193,165,.2)] bg-z-green"
        >
          <div data-grid="" className="grid grid-cols-[repeat(4,1fr)]">
            {STEPS.map(([title, text], i) => (
              <div
                key={title}
                className={`border-b border-solid border-[rgba(223,193,165,.18)] px-[30px] py-[34px] ${i < 3 ? "border-r" : ""}`}
              >
                <div className="text-[40px] leading-none text-z-gold">0{i + 1}</div>
                <p className="mt-[14px] text-[15.5px] font-semibold tracking-[.08em] text-white uppercase">
                  {title}
                </p>
                <p className="mt-2 text-[16.5px] leading-[1.7]" style={{ color: WHITE }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p data-reveal="" className="mt-6 text-center text-[15.5px] text-z-gold italic">
          Indicative payment structure only. Specific pricing and terms are shared during a private
          consultation.
        </p>
      </div>
    </section>
  );
}

const TH =
  "px-7 py-[22px] text-left text-[14px] font-semibold tracking-[.08em] text-z-gold uppercase";
const TD = "px-7 py-5 text-[17px]";
const ROW = "border-b border-solid border-white";

const COMPARE: { feature: string; values: string[]; style: "strong" | "ink" | "tick" }[] = [
  {
    feature: "Freehold ownership",
    values: ["✓ Construction + land", "✓ Construction holding", "✓ Farmland"],
    style: "strong",
  },
  {
    feature: "Passive income",
    values: ["Resort rental income", "50% profit share", "Production share"],
    style: "ink",
  },
  {
    feature: "Resort stay benefit",
    values: ["Annual 2N / 3D stay", "Member rates", "Annual stay included"],
    style: "ink",
  },
  { feature: "Heritable & resaleable", values: ["✓", "✓", "✓"], style: "tick" },
  { feature: "Community membership", values: ["✓", "✓", "✓"], style: "tick" },
];

function CompareTable() {
  const cellStyle = {
    strong: "font-semibold text-z-green",
    ink: "text-[rgba(9,44,44,.88)]",
    tick: "text-z-deep",
  };
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <div data-container="" className={NARROW}>
        <div data-reveal="" className="text-center">
          <h2 data-h2="" className="text-[48px] font-normal text-z-deep">
            Compare Your Options
          </h2>
        </div>
        <div
          data-reveal=""
          className="mt-[46px] overflow-x-auto rounded-[14px] border border-solid border-[rgba(9,44,44,.1)] bg-white"
        >
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr className="bg-z-green">
                <th className={TH}>Feature</th>
                <th className={TH}>Lagoon Villa</th>
                <th className={TH}>Resort Share</th>
                <th className={TH}>Agro Share</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.feature} className={i < COMPARE.length - 1 ? ROW : ""}>
                  <td className={`${TD} font-semibold text-z-green`}>{row.feature}</td>
                  {row.values.map((value, k) => (
                    <td key={k} className={`${TD} ${cellStyle[row.style]}`}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Protection() {
  const card = "rounded-[14px] border-t-2 border-solid border-z-gold bg-z-green px-10 py-11";
  return (
    <section data-sec="" className="bg-z-deep py-[110px]">
      <div data-container="" className={NARROW}>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            Your Trust, Protected
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[48px] font-normal text-white">
            We Put It in Writing.
          </h2>
        </div>
        <div data-reveal="" data-2col="" className="mt-[50px] grid grid-cols-[1fr_1fr] gap-[26px]">
          <div className={card}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3 4 8v6c0 4 3 6 8 7 5-1 8-3 8-7V8l-8-5Z" stroke="#DFC1A5" strokeWidth="1.3" />
              <path d="M9 12l2 2 4-4" stroke="#DFC1A5" strokeWidth="1.3" />
            </svg>
            <h3 className="mt-[18px] text-[28px] font-medium text-white">
              100% Money-Back Guarantee
            </h3>
            <p className="mt-[14px] text-[17.5px] leading-[1.85]" style={{ color: WHITE }}>
              If Zariya cannot deliver on its commitments to you, your investment is returned. We
              would rather protect your trust than keep your money.
            </p>
          </div>
          <div className={card}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z" stroke="#DFC1A5" strokeWidth="1.3" />
              <circle cx="12" cy="11" r="2.4" stroke="#DFC1A5" strokeWidth="1.3" />
              <path d="M12 13.4V16" stroke="#DFC1A5" strokeWidth="1.3" />
            </svg>
            <h3 className="mt-[18px] text-[28px] font-medium text-white">
              Founder Protection Programme
            </h3>
            <p className="mt-[14px] text-[17.5px] leading-[1.85]" style={{ color: WHITE }}>
              Early founding members receive additional safeguards and priority protections — our
              commitment to those who believed first.
            </p>
          </div>
        </div>
        <div data-reveal="" className="mt-[46px] text-center">
          <Link
            href="/visit"
            className="z-btn z-btn-gold px-9 py-[17px] text-[15.5px] tracking-[.05em]"
          >
            Request the Full Investment Pack
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function OwnershipPage() {
  return (
    <>
      <PageHero
        height="h-[64vh] min-h-[460px]"
        background="radial-gradient(120% 100% at 50% 30%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <HeroVideo name="ownership-hero" position="center 45%" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_85%,rgba(223,193,165,.2),transparent_60%)]" />
          </>
        }
      >
        <h1 data-reveal="" data-h1="" className="text-[72px] leading-[1.04] font-normal text-white">
          Ownership &amp; Income
        </h1>
        <p data-reveal="" data-delay="120" className="mt-[18px] text-[25px] font-normal text-z-gold italic">
          Transparent. Protected. Built to grow.
        </p>
      </PageHero>
      <Options />
      <PaymentPlan />
      <CompareTable />
      <Protection />
    </>
  );
}
