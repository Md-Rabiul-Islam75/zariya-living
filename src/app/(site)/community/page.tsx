import type { Metadata } from "next";
import { HeroVideo } from "@/components/site/HeroVideo";
import { LeadForm } from "@/components/site/LeadForm";
import { Container, Eyebrow, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — You Don't Just Own Here. You Belong Here.",
  description:
    "The Zariyans' Global Community: a network of non-resident Bangladeshi families, professionals and retirees who share a vision of what home should feel like.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

function Intro() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <div data-container="" className="mx-auto max-w-[920px] px-12 text-center">
        <h2 data-reveal="" data-h2="" className="text-[50px] leading-[1.1] font-normal text-z-deep">
          A Community Bound by Values, Not Just Geography.
        </h2>
        <p data-reveal="" className="mt-[26px] text-[19px] leading-[1.9]" style={{ color: INK }}>
          The Zariyans&apos; Global Community is a network of non-resident Bangladeshi families,
          professionals, and retirees who share a vision of what home should feel like. Spread
          across continents, united by the same longing — to belong somewhere real.
        </p>
        <p data-reveal="" className="mt-[18px] text-[19px] leading-[1.9]" style={{ color: INK }}>
          When you own at Zariya, you join this community automatically. It is not a loyalty
          programme. It is a circle of people who understand the journey you have been on, because
          they have been on it too.
        </p>
      </div>
    </section>
  );
}

const MEMBERSHIP = [
  ["A Place to Gather", "Community villas, shared spaces, and a calendar of gatherings — from Eid celebrations to family retreats — where Zariyans connect across generations."],
  ["A Network That Cares", "A trusted circle for advice, partnership, and friendship — people who understand the realities of building a life across two countries."],
  ["A Legacy to Share", "A community your children inherit — not just property, but belonging. Roots that hold even as the family grows and scatters across the world."],
];

function Membership() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[50px] font-normal text-white">
            What Membership Means
          </h2>
        </div>
        <div data-grid="" className="mt-14 grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {MEMBERSHIP.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-[34px] py-10"
            >
              <h3 className="text-[26px] font-medium text-white">{title}</h3>
              <p className="mt-[14px] text-[17.5px] leading-[1.85]" style={{ color: WHITE }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const FACILITIES: [string, string[]][] = [
  ["Faith & Wellness", ["Mosque", "Spa & Sauna", "Yoga Centre", "Gymnasium"]],
  ["Leisure & Family", ["Swimming Pools", "Sports Complex", "Kids Zone", "Theatre", "Museums"]],
  ["Resort & Dining", ["The Tea Tower", "Observation Deck", "Sky Lounge", "Resort Dining"]],
  ["Events & Business", ["Convention Hall", "Banquet Hall", "Business Centre"]],
  ["Nature & Land", ["Organic Agro Farm", "Orchards & Aquaculture", "Lagoon Waterfront", "Protected Green Buffer"]],
];

function Facilities() {
  return (
    <section data-sec="" aria-labelledby="comm-facilities" className="bg-z-ivory py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[760px]">
          <Eyebrow color="#114747" rule={30}>
            Facilities
          </Eyebrow>
          <h2
            id="comm-facilities"
            data-h2=""
            className="mt-[18px] text-[50px] leading-[1.1] font-normal text-balance text-z-deep"
          >
            Everything Your Family Needs, Within the Path.
          </h2>
          <p className="mt-5 text-[19px] leading-[1.85] text-pretty" style={{ color: INK }}>
            Every Zariyan family shares access to the full township: faith, wellness, leisure,
            dining, events and open nature, all on one masterplan in Sylhet.
          </p>
        </div>
        <div
          data-grid=""
          className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5"
        >
          {FACILITIES.map(([title, items], i) => (
            <div
              key={title}
              data-reveal=""
              className="rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-7 py-8 transition-[transform,box-shadow,border-color] duration-[.35s] ease-[ease] hover:border-z-gold hover:[box-shadow:0_24px_50px_rgba(9,44,44,.12)] hover:[transform:translateY(-5px)]"
            >
              <span className="text-[16px] font-semibold tracking-[.1em] text-z-gold">0{i + 1}</span>
              <h3 className="mt-2 text-[26px] leading-[1.2] font-medium text-z-deep">{title}</h3>
              <ul className="mt-5 flex list-none flex-col">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t border-solid border-[rgba(9,44,44,.1)] py-[11px] text-[17.5px]"
                    style={{ color: INK }}
                  >
                    <span aria-hidden="true" className="h-[6px] w-[6px] flex-none rounded-full bg-z-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const STORIES = [
  ['"After 30 years abroad, I wanted my grandchildren to know where they come from. Zariya gave us a reason to come back together."', "— Retiree, Toronto"],
  ['"It is the only investment I have made that my whole family is excited about. That tells you something."', "— Professional, Dubai"],
  ['"I came to see land. I left having found a community. That was unexpected, and it was everything."', "— Founding Member, Manchester"],
];

function Stories() {
  return (
    <section data-sec="" className="bg-z-green py-[120px]">
      <Container>
        <h2
          data-reveal=""
          data-h2=""
          className="mb-14 text-center text-[48px] font-normal text-white"
        >
          Stories from Zariyans
        </h2>
        <div data-grid="" className="grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {STORIES.map(([quote, by], i) => (
            <div
              key={by}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="rounded-[12px] bg-white px-[34px] py-[38px]"
            >
              <p className="text-[22px] leading-[1.55] font-normal text-z-deep italic">{quote}</p>
              <p className="mt-[22px] text-[15px] font-semibold tracking-[.06em] text-z-green uppercase">
                {by}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Join() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <div data-reveal="" data-container="" className="mx-auto max-w-[760px] px-12 text-center">
        <h2 data-h2="" className="text-[46px] font-normal text-z-deep">
          Join the Zariyans.
        </h2>
        <p className="mt-4 text-[18.5px] leading-[1.8]" style={{ color: INK }}>
          Register your interest and our team will share how to become part of the community.
        </p>
        <LeadForm kind="community-join" className="relative mt-[30px] flex flex-wrap justify-center gap-[14px]">
          <input
            name="email"
            aria-required="true"
            type="email"
            required
            autoComplete="email"
            aria-label="Your email address"
            placeholder="Your email address"
            className="min-w-[240px] flex-1 rounded-[3px] border border-solid border-[rgba(9,44,44,.2)] bg-white px-[18px] py-[15px] text-[17.5px] leading-[21px] text-z-deep outline-none focus:border-z-deep"
          />
          <button
            type="submit"
            className="z-btn z-btn-green px-[30px] py-[15px] text-[15.5px] tracking-[.05em] whitespace-nowrap hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.22)]"
          >
            Request to Join
          </button>
        </LeadForm>
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <>
      <PageHero
        height="h-[70vh] min-h-[500px]"
        background="radial-gradient(120% 100% at 50% 30%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_85%,rgba(223,193,165,.2),transparent_60%)]" />
            <HeroVideo name="community-hero" />
          </>
        }
      >
        <Eyebrow data-reveal="" rule={30} track=".24em" center className="mb-5">
          Zariyans&apos; Global Community
        </Eyebrow>
        <h1 data-reveal="" data-h1="" className="text-[74px] leading-[1.04] font-normal text-white">
          You Don&apos;t Just Own Here. You Belong Here.
        </h1>
      </PageHero>
      <Intro />
      <Membership />
      <Facilities />
      <Stories />
      <Join />
    </>
  );
}
