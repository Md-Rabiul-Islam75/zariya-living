import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/site/LeadForm";
import { Eyebrow, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Events & Gatherings",
  description:
    "Where the community comes together: site visits, Zariyans' meets and development briefings.",
};

const INK = "rgba(9,44,44,.88)";

const EVENTS = [
  {
    day: "12",
    month: "Dec",
    tag: "By-Air Experience Tour",
    title: "Winter Site Visit — Sylhet",
    text: "A guided weekend at the land for confirmed members and their families. Flights and hospitality included.",
    href: "/visit",
  },
  {
    day: "24",
    month: "Jan",
    tag: "Community Gathering",
    title: "Zariyans' Meet — London",
    text: "An evening for NRB families to meet the founders, hear the latest, and connect with fellow Zariyans.",
    href: "/community",
  },
  {
    day: "08",
    month: "Mar",
    tag: "Project Update",
    title: "Development Milestone Webinar",
    text: "A live online briefing on construction progress, the masterplan, and what comes next.",
    href: "/contact",
  },
];

function Upcoming() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <div data-container="" className="mx-auto max-w-[1100px] px-12">
        <Eyebrow data-reveal="" color="#092C2C">
          Upcoming
        </Eyebrow>
        <div className="mt-9 flex flex-col gap-5">
          {EVENTS.map((event, i) => (
            <div
              key={event.title}
              data-reveal=""
              data-delay={i ? String(i * 80) : undefined}
              data-2col=""
              className="flex items-center gap-[34px] rounded-[14px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-[38px] py-[34px]"
            >
              <div className="flex-shrink-0 border-r border-solid border-white pr-[34px] text-center">
                <div className="text-[46px] leading-none text-z-green">{event.day}</div>
                <div className="mt-[6px] text-[15.5px] font-semibold tracking-[.1em] text-z-deep uppercase">
                  {event.month}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold tracking-[.12em] text-z-deep uppercase">
                  {event.tag}
                </p>
                <h3 className="mt-[6px] text-[27px] font-medium text-z-deep">{event.title}</h3>
                <p className="mt-2 text-[17px] leading-[1.7]" style={{ color: INK }}>
                  {event.text}
                </p>
              </div>
              <Link
                href={event.href}
                className="z-btn z-btn-gold flex-shrink-0 px-[26px] py-[14px] text-[15px] tracking-[.05em]"
              >
                Register
              </Link>
            </div>
          ))}
        </div>

        <div data-reveal="" className="mt-[50px] rounded-[14px] bg-z-green px-10 py-11 text-center">
          <h3 className="text-[32px] font-normal text-white">Never Miss a Gathering.</h3>
          <LeadForm kind="events-notify" className="relative mt-6 flex flex-wrap justify-center gap-[14px]">
            <input
              name="email"
              aria-required="true"
              type="email"
              required
              autoComplete="email"
              aria-label="Your email address"
              placeholder="Your email address"
              className="max-w-[360px] min-w-[240px] flex-1 rounded-[3px] border border-solid border-[rgba(223,193,165,.3)] bg-[rgba(255,255,255,.06)] px-[18px] py-[14px] text-[17.5px] leading-[21px] text-white outline-none focus:border-z-gold"
            />
            <button
              type="submit"
              className="z-btn z-btn-gold px-7 py-[14px] text-[15.5px] tracking-[.05em] whitespace-nowrap"
            >
              Notify Me
            </button>
          </LeadForm>
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        height="h-[60vh] min-h-[440px]"
        background="radial-gradient(120% 100% at 50% 30%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_85%,rgba(223,193,165,.2),transparent_60%)]" />
            <Image
              src="/assets/zariya-38.jpg"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
          </>
        }
      >
        <h1 data-reveal="" data-h1="" className="text-[70px] leading-[1.04] font-normal text-white">
          Events &amp; Gatherings
        </h1>
        <p data-reveal="" data-delay="120" className="mt-4 text-[24px] font-normal text-z-gold italic">
          Where the community comes together.
        </p>
      </PageHero>
      <Upcoming />
    </>
  );
}
