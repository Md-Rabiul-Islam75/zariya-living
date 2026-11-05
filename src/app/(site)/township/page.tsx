import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Container, Eyebrow, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Township & Amenities",
  description:
    "Every road, every garden, every sightline, designed for peace that lasts a hundred years. Explore the Tea Tower, the four masterplan zones, the ownership inventory and the amenities.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

function TeaTower() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[.85fr_1.15fr] items-center gap-[70px]">
          <div
            data-reveal=""
            className="relative min-h-[560px] overflow-hidden rounded-[8px] bg-[linear-gradient(180deg,#0d3a38,#092C2C)] shadow-[0_30px_70px_rgba(9,44,44,.3)]"
          >
            <Image
              src="/images/lotus-tower.png"
              alt="The Tea Tower, shaped like a lotus, rising above the forest at sunset"
              fill
              sizes="(max-width: 920px) 100vw, 520px"
              className="object-cover"
            />
          </div>
          <div data-reveal="" data-delay="120">
            <Eyebrow color="#092C2C">The Heart of Zariya</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[52px] leading-[1.08] font-normal text-z-deep">
              The Tea Tower
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              Rising from the centre of the masterplan, the Tea Tower is more than a landmark.
              Inspired by the lotus — a flower that grows in still water and opens toward the light
              — it is a symbol of everything Zariya stands for: rootedness, renewal, and quiet
              strength.
            </p>
            <p className="mt-[18px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              Inside, it houses the Observation Deck, the Sky Lounge, and the resort&apos;s most
              elevated experiences. Visible for miles across the Sylhet landscape, it is the first
              thing you see as you arrive — and the place you will return to again and again.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const ZONES = [
  {
    title: "Residential Villas",
    icon: "M4 20V9l8-5 8 5v11M9 20v-6h6v6",
    text: "145 private lagoon-front villas, set along tree-lined avenues and calm water.",
  },
  {
    title: "Resort Core",
    icon: "M3 21V11l9-6 9 6v10M8 21v-7h8v7",
    text: "The Tea Tower, lobby, dining, wellness, and event venues at the centre.",
  },
  {
    title: "Agro Belt",
    icon: "M12 21c5-4 8-8 8-12a8 8 0 0 0-16 0c0 4 3 8 8 12Z",
    text: "Working organic farmland, orchards, and aquaculture across 2,900 decimals.",
  },
  {
    title: "Peace Buffer",
    icon: "M12 3v18M5 8c3 0 5-2 7-5M19 8c-3 0-5-2-7-5M5 14c3 0 5 2 7 5M19 14c-3 0-5 2-7 5",
    text: "Permanently green protected land surrounding the community, kept untouched.",
  },
];

function FourWorlds() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[50px] font-normal text-white">
            One Township. Four Worlds.
          </h2>
          <p
            className="mx-auto mt-[18px] max-w-[54ch] text-[18.5px] leading-[1.8]"
            style={{ color: WHITE }}
          >
            The masterplan is organised into distinct zones, each with its own character, woven
            together by green corridors and walking paths.
          </p>
        </div>
        <div data-grid="" className="mt-14 grid grid-cols-[repeat(4,1fr)] gap-6">
          {ZONES.map((zone, i) => (
            <div
              key={zone.title}
              data-reveal=""
              data-delay={i ? String(i * 80) : undefined}
              className="rounded-[12px] bg-z-green px-[30px] py-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-solid border-[rgba(223,193,165,.5)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={zone.icon} stroke="#DFC1A5" strokeWidth="1.2" />
                </svg>
              </div>
              <h3 className="mt-4 text-[24.5px] font-medium text-white">{zone.title}</h3>
              <p className="mt-[10px] text-[16.5px] leading-[1.8]" style={{ color: WHITE }}>
                {zone.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const TH =
  "px-7 py-[22px] text-left text-[14px] font-semibold tracking-[.08em] text-z-gold uppercase";
const TD = "px-7 py-[22px] text-[17px]";

const INVENTORY = [
  { type: "Lagoon Villa Share", size: "2,200 sq ft duplex", units: "Limited", status: "Limited", tint: ".45" },
  { type: "Resort Share", size: "20 sq ft + common", units: "Limited release", status: "Available", tint: ".3" },
  { type: "Agro Share", size: "1 decimal", units: "Limited release", status: "Available", tint: ".3" },
];

function Inventory() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <div data-container="" className="mx-auto max-w-[1100px] px-12">
        <div data-reveal="" className="text-center">
          <h2 data-h2="" className="text-[48px] font-normal text-z-deep">
            Ownership Inventory
          </h2>
          <p
            className="mx-auto mt-4 max-w-[50ch] text-[18.5px] leading-[1.8]"
            style={{ color: INK }}
          >
            A limited, deliberately small community. Once they are gone, they are gone.
          </p>
        </div>
        <div
          data-reveal=""
          className="mt-[46px] overflow-x-auto rounded-[14px] border border-solid border-[rgba(9,44,44,.1)] bg-white"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-z-green">
                <th className={TH}>Type</th>
                <th className={TH}>Size</th>
                <th className={TH}>Units</th>
                <th className={TH}>Tenure</th>
                <th className={TH}>Status</th>
              </tr>
            </thead>
            <tbody>
              {INVENTORY.map((row, i) => (
                <tr
                  key={row.type}
                  className={i < INVENTORY.length - 1 ? "border-b border-solid border-white" : ""}
                >
                  <td className="px-7 py-[22px] text-[22px] text-z-green">{row.type}</td>
                  <td className={TD} style={{ color: INK }}>
                    {row.size}
                  </td>
                  <td className={TD} style={{ color: INK }}>
                    {row.units}
                  </td>
                  <td className={TD} style={{ color: INK }}>
                    Freehold
                  </td>
                  <td className="px-7 py-[22px]">
                    <span
                      className="rounded-[20px] px-3 py-[5px] text-[14px] font-semibold tracking-[.05em] text-z-green uppercase"
                      style={{ background: `rgba(223,193,165,${row.tint})` }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div data-reveal="" className="mt-10 text-center">
          <Link
            href="/visit"
            className="z-btn bg-z-green px-[34px] py-4 text-[15.5px] tracking-[.05em] text-white hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.22)]"
          >
            Enquire About Availability
          </Link>
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  "Mosque",
  "Swimming Pools",
  "Sports Complex",
  "Spa & Sauna",
  "Yoga Centre",
  "Kids Zone",
  "Theatre",
  "Museums",
  "Convention Hall",
  "Banquet Hall",
  "Business Centre",
  "Gymnasium",
];

function Amenities() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[50px] font-normal text-white">
            Everything Within Reach
          </h2>
        </div>
        <div
          data-reveal=""
          data-grid=""
          className="mt-[54px] grid grid-cols-[repeat(4,1fr)] gap-px overflow-hidden rounded-[12px] border border-solid border-[rgba(223,193,165,.18)] bg-[rgba(223,193,165,.18)]"
        >
          {AMENITIES.map((item) => (
            <div key={item} className="bg-z-green px-[26px] py-8 text-center">
              <p className="text-[22px] text-white">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function TownshipPage() {
  return (
    <>
      <PageHero
        height="h-[78vh] min-h-[560px]"
        background="radial-gradient(130% 100% at 50% 25%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.55) 0%,rgba(9,44,44,.15) 30%,rgba(9,44,44,.2) 55%,rgba(9,44,44,.85) 100%),linear-gradient(90deg,rgba(9,44,44,.55) 0%,rgba(9,44,44,0) 60%)"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_50%_88%,rgba(223,193,165,.26),transparent_60%)]" />
            <HeroVideo name="township-hero" />
          </>
        }
      >
        <div data-reveal="" className="mb-5 flex items-center gap-[14px]">
          <span data-rule="" className="h-px w-[46px] bg-[#C9C9C9]" />
          <span className="text-[14px] font-semibold tracking-[.24em] text-[#EBEBEB] uppercase">
            The Masterplan
          </span>
        </div>
        <h1 data-reveal="" data-h1="" className="text-[74px] leading-[1.04] font-normal text-white">
          Township &amp; Amenities
        </h1>
        <p
          data-reveal=""
          data-delay="120"
          className="mt-[18px] max-w-[48ch] text-[25px] font-normal text-z-gold italic"
        >
          Every road, every garden, every sightline — designed around one idea: peace that lasts a
          hundred years.
        </p>
      </PageHero>
      <TeaTower />
      <FourWorlds />
      <Inventory />
      <Amenities />
    </>
  );
}
