import type { Metadata } from "next";
import Link from "next/link";
import { ExploreNews } from "@/components/site/ExploreNews";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Container, Eyebrow, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Faith. Nature. Legacy.",
  description:
    "Three words. One life philosophy. The thinking behind Zariya: faith, nature and legacy, and a community built to last 100 years.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

const BELIEFS = [
  {
    title: "Faith",
    text: "We believe a life rooted in faith is a life with direction. Zariya is designed for families who want their environment to reflect their values: peaceful, purposeful, and free from distraction.",
    icon: (
      <>
        <path d="M12 3 4 8v6c0 4 3 6 8 7 5-1 8-3 8-7V8l-8-5Z" stroke="#114747" strokeWidth="1.2" />
        <path d="M12 8v8M8 12h8" stroke="#092C2C" strokeWidth="1.2" />
      </>
    ),
  },
  {
    title: "Nature",
    text: "We believe humans belong in nature. The overcrowded city, the noise, the screen — these were never meant to be permanent. Zariya returns you to open skies, green land, and mornings that begin with birdsong, not traffic.",
    icon: (
      <>
        <path d="M12 21c5-4 8-8 8-12a8 8 0 0 0-16 0c0 4 3 8 8 12Z" stroke="#114747" strokeWidth="1.2" />
        <path d="M12 5c-2 3-2 6 0 9 2-3 2-6 0-9Z" stroke="#092C2C" strokeWidth="1.2" />
      </>
    ),
  },
  {
    title: "Legacy",
    text: "We believe the truest measure of success is what you leave behind. A freehold villa. A family home. A community your children will grow up in. Zariya is built to be passed on.",
    icon: (
      <>
        <path d="M4 20V9l8-5 8 5v11" stroke="#114747" strokeWidth="1.2" />
        <path d="M9 20v-6h6v6" stroke="#092C2C" strokeWidth="1.2" />
      </>
    ),
  },
];

function Philosophy() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow color="#092C2C">What We Believe</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[52px] leading-[1.1] font-semibold text-z-deep">
            The Philosophy Behind Everything We Build.
          </h2>
        </div>
        <div data-grid="" className="mt-[60px] grid grid-cols-[repeat(3,1fr)] gap-[30px]">
          {BELIEFS.map((item, i) => (
            <div
              key={item.title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="border-t-2 border-solid border-z-deep pt-[30px]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {item.icon}
              </svg>
              <h3 className="mt-[18px] text-[30px] font-semibold text-z-green">{item.title}</h3>
              <p className="mt-[14px] text-[18px] leading-[1.85]" style={{ color: INK }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ThePath() {
  const body = "text-[19px] leading-[1.9]";
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <div data-container="" className="mx-auto w-full max-w-[1320px] px-12 text-center">
        <h2 data-reveal="" data-h2="" className="text-[52px] font-semibold text-white">
          &apos;Zariya&apos; Means The Path.
        </h2>
        <p data-reveal="" className={`mt-[30px] ${body}`} style={{ color: WHITE }}>
          Sylhet has always been a place of spiritual significance. The 360 Auliyas who walked this
          land centuries ago left behind more than mosques and shrines — they left a culture of
          faith, community, and inner peace that this soil still carries.
        </p>
        <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: WHITE }}>
          When we chose the name Zariya, we were not looking for something poetic. We were looking
          for something true. The Path is not just where you walk. It is how you live.
        </p>
        <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: WHITE }}>
          Zariya is our attempt to build a community worthy of that name — where the environment
          itself encourages you to slow down, reflect, and reconnect with what matters.
        </p>
      </div>
    </section>
  );
}

const STATS = [
  { value: "2,100", count: "2100", label: "Decimals of Land" },
  { value: "100-Year", count: "100", suffix: "-Year", label: "Vision", divided: true },
  { value: "145", count: "145", label: "Exclusive Villas" },
];

function BuiltToLast() {
  const body = "text-[19px] leading-[1.9]";
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <div data-container="" className="mx-auto max-w-[920px] px-12 text-center">
        <h2 data-reveal="" data-h2="" className="text-[52px] font-normal text-z-deep">
          Built to Last 100 Years.
        </h2>
        <p data-reveal="" className={`mt-7 ${body}`} style={{ color: INK }}>
          Most property developments think in decades. Zariya thinks in generations.
        </p>
        <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: INK }}>
          The masterplan is designed with a peace buffer — land kept permanently green to protect
          the community from future encroachment. The agro ecosystem is designed for long-term
          sustainability. The Lagoon Villas are freehold, heritable, and resaleable.
        </p>
        <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: INK }}>
          We are not building for today&apos;s market. We are building a place your grandchildren
          will be glad exists.
        </p>
      </div>
      <div
        data-reveal=""
        data-grid=""
        className="mx-auto mt-16 grid max-w-[1000px] grid-cols-[repeat(3,1fr)] gap-[30px] px-12"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`text-center ${stat.divided ? "border-x border-solid border-[rgba(9,44,44,.1)]" : ""}`}
          >
            <div
              data-count={stat.count}
              data-suffix={stat.suffix}
              className="text-[64px] leading-none font-normal text-z-green"
            >
              {stat.value}
            </div>
            <p className="mt-3 text-[14px] font-semibold tracking-[.16em] text-z-deep uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const VOICES = [
  [
    "\"I spent 22 years in the UK building a career. What I didn't realise was that I was also spending 22 years quietly missing home. Zariya gave me somewhere to actually return to.\"",
    "— NRB Member, London",
  ],
  [
    "\"My children are grown. My responsibilities are lighter. I wanted somewhere peaceful, somewhere with community, somewhere my grandchildren would love to visit. I found all three.\"",
    "— Founding Member, Dhaka",
  ],
];

function Voices() {
  return (
    <section data-sec="" className="bg-z-green py-[120px]">
      <Container>
        <h2
          data-reveal=""
          data-h2=""
          className="mb-14 text-center text-[48px] font-normal text-white"
        >
          Voices from the Path
        </h2>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] gap-[30px]">
          {VOICES.map(([quote, by], i) => (
            <div
              key={by}
              data-reveal=""
              data-delay={i ? "120" : undefined}
              className="rounded-[6px] border-l-[3px] border-solid border-z-deep bg-white px-11 py-[42px]"
            >
              <p className="text-[24px] leading-[1.5] font-normal text-z-deep italic">{quote}</p>
              <p className="mt-6 text-[15.5px] font-semibold tracking-[.06em] text-z-green uppercase">
                {by}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Updates() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <h2
          data-reveal=""
          data-h2=""
          className="mb-14 text-center text-[48px] font-normal text-z-deep"
        >
          What&apos;s Happening at Zariya
        </h2>
        <ExploreNews />
      </Container>
    </section>
  );
}

function Closing() {
  return (
    <section data-sec="" className="relative overflow-hidden bg-z-deep py-[110px]">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(223,193,165,.12),transparent_65%)]" />
      <div data-reveal="" data-container="" className="relative mx-auto max-w-[920px] px-12 text-center">
        <h2 data-h2="" className="text-[52px] font-normal text-white">
          Ready to Walk The Path?
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/community"
            className="z-btn z-btn-gold px-[34px] py-[17px] text-[15.5px] tracking-[.06em]"
          >
            Join the Community
          </Link>
          <Link
            href="/visit"
            className="z-btn z-btn-gold-line px-8 py-4 text-[15.5px] tracking-[.06em]"
          >
            Book a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ExplorePage() {
  return (
    <>
      <PageHero
        height="h-[74vh] min-h-[520px]"
        background="radial-gradient(120% 100% at 30% 25%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_80%,rgba(223,193,165,.2),transparent_60%)]" />
            <HeroVideo name="explore-hero" />
          </>
        }
      >
        <div data-reveal="" className="mb-[22px] flex items-center gap-[14px]">
          <span data-rule="" className="h-px w-[30px] bg-white" />
          <span className="text-[14px] font-semibold tracking-[.24em] text-[#F3F3F3] uppercase">
            Explore
          </span>
          <span data-rule="" className="h-px w-[30px] bg-white" />
        </div>
        <h1 data-reveal="" data-h1="" className="text-[78px] leading-[1.04] font-semibold text-white">
          Faith. Nature. Legacy.
        </h1>
        <p data-reveal="" data-delay="120" className="mt-[18px] text-[26px] font-normal text-z-gold italic">
          Three words. One life philosophy.
        </p>
      </PageHero>
      <Philosophy />
      <ThePath />
      <BuiltToLast />
      <Voices />
      <Updates />
      <Closing />
    </>
  );
}
