import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/site/HeroVideo";
import { LeadForm } from "@/components/site/LeadForm";
import { Container, Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Where Do I Truly Belong?",
  openGraph: {
    title: "Zariya Living — Belonging Today. Legacy Tomorrow.",
    description:
      "Own an Agro Share in Zariya's farm-to-family model, and explore the Sylhet Resort & Villas.",
  },
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

function Hero() {
  return (
    <section data-hero="" className="relative flex min-h-[max(100vh,760px)] items-center overflow-hidden">
      <div
        data-parallax=""
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#13524a_0%,#0d3a38_45%,#092C2C_100%)] will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_78%_78%,rgba(223,193,165,.22),transparent_60%)]" />
        <div className="absolute right-0 bottom-0 left-0 h-[46%] bg-[linear-gradient(180deg,transparent,rgba(9,44,44,.6))]" />
        <HeroVideo name="home-hero" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.25) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.58) 42%,rgba(9,44,44,.2) 75%,rgba(9,44,44,.1) 100%),linear-gradient(180deg,rgba(9,44,44,0) 55%,rgba(9,44,44,.75) 100%)",
        }}
      />
      <div
        data-revrap=""
        data-container=""
        className="relative z-[2] mx-auto w-full max-w-[1320px] px-12 pt-[110px] pb-[60px]"
      >
        <Link
          data-reveal=""
          href="/agro"
          className="mb-[30px] inline-flex cursor-pointer items-center gap-3 rounded-[40px] border border-solid border-[rgba(223,193,165,.5)] bg-[rgba(9,44,44,.55)] px-5 py-[10px] backdrop-blur-[6px] hover:border-z-gold hover:bg-[rgba(9,44,44,.8)]"
        >
          <span className="text-[16.5px] font-medium tracking-[.02em] text-white">
            Zariya Agro Share — first release
          </span>
          <span className="text-[17.5px] text-z-gold">→</span>
        </Link>
        <Eyebrow data-reveal="" rule={46} track=".26em" className="mb-[26px]">
          Sylhet, Bangladesh
        </Eyebrow>
        <h1
          data-reveal=""
          data-h1=""
          className="m-0 max-w-[14ch] text-[84px] leading-[1.02] font-normal tracking-[.01em] text-white"
        >
          Where Do I Truly Belong?
        </h1>
        <p
          data-reveal=""
          data-delay="120"
          className="mt-[18px] max-w-[30ch] text-[27px] font-normal text-z-gold italic"
        >
          A Peaceful Return to Nature, Belonging &amp; Yourself
        </p>
        <p
          data-reveal=""
          data-delay="200"
          className="mt-[26px] max-w-[52ch] text-[19.5px] leading-[1.75]"
          style={{ color: WHITE }}
        >
          Zariya is a faith-aligned, nature-rooted community in the heart of Sylhet — built for
          people who have worked hard and are ready to come home.
        </p>
        <div data-reveal="" data-delay="300" className="mt-[38px] flex flex-wrap gap-4">
          <Link href="/agro" className="z-btn z-btn-gold px-[34px] py-[17px] text-[15.5px] tracking-[.06em]">
            Own an Agro Share
          </Link>
          <Link
            href="/visit"
            className="z-btn z-btn-gold-line px-8 py-4 text-[15.5px] tracking-[.06em]"
          >
            Book a Farm Visit
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[34px] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-[9px] max-[920px]:hidden">
        <span className="text-[14px] tracking-[.24em] text-z-gold uppercase">Scroll</span>
        <svg
          width="16"
          height="26"
          viewBox="0 0 16 26"
          fill="none"
          aria-hidden="true"
          style={{ animation: "zbob 1.8s ease-in-out infinite" }}
        >
          <path d="M8 1v20M2 15l6 6 6-6" stroke="#DFC1A5" strokeWidth="1.3" />
        </svg>
      </div>
    </section>
  );
}

const AGRO_STATS = [
  {
    title: "1 Decimal",
    text: "Freehold farmland, registered in your name",
    cell: "py-[26px] pr-[22px] pl-0 border-r border-solid border-[rgba(9,44,44,.14)]",
  },
  {
    title: "Flexible Payment",
    text: "Easy instalment plans to suit your family",
    cell: "p-[26px_22px] border-r border-solid border-[rgba(9,44,44,.14)]",
  },
  {
    title: "2N / 3D",
    text: "Annual family stay at Zariya Resort",
    cell: "py-[26px] pr-0 pl-[22px]",
  },
];

function AgroShare() {
  return (
    <section data-sec="" className="bg-z-ivory py-[128px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[.95fr_1.05fr] items-center gap-20">
          <div
            data-reveal=""
            className="relative min-h-[600px] overflow-hidden rounded-[8px] bg-[linear-gradient(150deg,#114747,#092C2C)] shadow-[0_30px_70px_rgba(9,44,44,.25)]"
          >
            <Image
              src="/assets/agro/hero-3.jpg"
              alt="Zariya Agro farmland with fresh crops ready for harvest"
              fill
              sizes="(max-width: 920px) 100vw, 620px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[45%] bg-[linear-gradient(180deg,transparent,rgba(9,44,44,.85))]" />
            <div className="pointer-events-none absolute right-8 bottom-[30px] left-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="m-0 text-[46px] leading-none font-normal text-white">5,000</p>
                <p className="mt-2 text-[14px] font-semibold tracking-[.16em] text-z-gold uppercase">
                  Decimals of farmland
                </p>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow data-reveal="" color="#114747">
              First Release · Zariya Agro Share
            </Eyebrow>
            <h2
              data-reveal=""
              data-h2=""
              className="mt-5 text-[56px] leading-[1.06] font-normal text-z-deep"
            >
              <b>Own Nature. Eat Fresh.</b>
              <br />
              Create Income. Build Legacy.
            </h2>
            <p
              data-reveal=""
              className="mt-6 max-w-[56ch] text-[19px] leading-[1.9]"
              style={{ color: INK }}
            >
              Own 1 decimal of freehold organic farmland inside a professionally managed agro
              ecosystem — a trusted source of safe food for your family, a share of production
              income, and an annual stay at Zariya Resort.
            </p>
            <div
              data-reveal=""
              data-grid=""
              className="mt-10 grid grid-cols-[repeat(3,1fr)] border-y border-solid border-[rgba(9,44,44,.14)]"
            >
              {AGRO_STATS.map((stat) => (
                <div key={stat.title} className={stat.cell}>
                  <p className="m-0 text-[30px] leading-[1.1] font-normal text-z-green">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-[16px] leading-[1.6]" style={{ color: INK }}>
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
            <div data-reveal="" className="mt-[38px] flex flex-wrap gap-4">
              <Link
                href="/agro"
                className="z-btn z-btn-green px-[34px] py-[17px] text-[15.5px] tracking-[.06em]"
              >
                Explore Zariya Agro →
              </Link>
              <Link
                href="/visit"
                className="z-btn z-btn-dark-line px-8 py-4 text-[15.5px] tracking-[.06em]"
              >
                Book a Farm Visit
              </Link>
            </div>
            <p data-reveal="" className="mt-[22px] text-[15px] leading-[1.7]" style={{ color: INK }}>
              *Illustrative projection. Actual benefit depends on farm performance, market demand
              and network growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const TRIPLE_IMPACT = [
  {
    number: "01",
    src: "/assets/media/family-harvest-lotus.jpg",
    alt: "A family harvesting vegetables beside the lagoon, with the lotus Tea Tower behind",
    title: "Family Health: Safe Food Assurance",
    text: "A trusted, organised source of safe food — because safe food means a healthy life.",
  },
  {
    number: "02",
    src: "/assets/media/harvesting-hope.jpg",
    alt: "Farmers harvesting crops together in the field",
    title: "Farmer Livelihoods: Raising Lives",
    text: "Training, fair prices, health cover and scholarships for the farming families who grow our food.",
  },
  {
    number: "03",
    src: "/assets/agro/cold-storage.jpg",
    alt: "Fresh produce stored in the Zariya Agro cold-storage facility",
    title: "National Economy: Cutting Waste, Sustainable Growth",
    text: "Bangladesh loses ~19.4% of its harvest every year. Our cold chain, processing and export model keeps that value in the country.",
  },
];

function TripleImpact() {
  return (
    <section data-sec="" className="bg-z-deep py-[110px]">
      <Container>
        <div data-reveal="" className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Why Zariya Agro Exists</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[52px] leading-[1.08] font-normal text-white">
              The Triple Impact Model.
            </h2>
          </div>
          <Link
            href="/agro"
            className="cursor-pointer border-b-[1.5px] border-solid border-z-gold px-[2px] py-[6px] text-[15.5px] font-semibold tracking-[.06em] text-z-gold uppercase hover:border-white hover:text-white"
          >
            See the full model →
          </Link>
        </div>
        <div data-grid="" className="mt-14 grid grid-cols-[repeat(3,1fr)] gap-[34px]">
          {TRIPLE_IMPACT.map((item, i) => (
            <div
              key={item.number}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className={`py-2 pr-[34px] pl-0 ${i < 2 ? "border-r border-solid border-[rgba(223,193,165,.18)]" : ""}`}
            >
              <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[8px] bg-z-green">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <span className="text-[64px] leading-none font-normal text-z-gold">{item.number}</span>
              <h3 className="mt-[18px] text-[26px] leading-[1.2] font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[17.5px] leading-[1.8]" style={{ color: WHITE }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BrandStory() {
  const body = "text-[19px] leading-[1.9]";
  return (
    <section data-sec="" data-container="" className="bg-white px-12 py-[128px]">
      <div
        data-2col=""
        className="mx-auto grid max-w-[1320px] grid-cols-[1.05fr_.95fr] items-center gap-[84px]"
      >
        <div>
          <Eyebrow data-reveal="" color="#092C2C">
            Why Zariya Exists
          </Eyebrow>
          <h2
            data-reveal=""
            data-h2=""
            className="mt-5 text-[54px] leading-[1.08] font-normal text-z-deep"
          >
            <b>Zariya Means The Path.</b>
          </h2>
          <p data-reveal="" className={`mt-[26px] ${body}`} style={{ color: INK }}>
            For centuries, Sylhet has been known as the land of the 360 Auliyas — saints who
            carried the light of peace, faith, and healing into Bengal. This sacred place was never
            just a destination. It was always a path.
          </p>
          <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: INK }}>
            There comes a point in life when success alone stops feeling like enough. The career
            milestones are behind you. The responsibilities are met. Life looks complete from the
            outside. But deep inside, the heart begins searching for something quieter. A place.
            Roots. People who know you without explanation.
          </p>
          <p data-reveal="" className={`mt-[18px] ${body}`} style={{ color: INK }}>
            Zariya came out of that longing. The name means &apos;The Path&apos; — a path that
            reconnects you with faith, nature, belonging, and the version of yourself you set aside
            somewhere along the way.
          </p>
          <blockquote
            data-reveal=""
            className="mt-[38px] border-l-[3px] border-solid border-z-deep py-2 pl-[30px] text-[30px] leading-[1.3] font-normal text-z-green italic"
          >
            &quot;Sylhet was never just a destination. It was always a path.&quot;
          </blockquote>
        </div>
        <div
          data-reveal=""
          data-delay="120"
          className="relative min-h-[560px] overflow-hidden rounded-[6px] bg-[linear-gradient(150deg,#092C2C,#114747)] shadow-[0_30px_70px_rgba(9,44,44,.3)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(223,193,165,.16),transparent_60%)]" />
          <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(9,44,44,.5))]" />
          <Image
            src="/assets/media/lagoon-villa-sunset.jpg"
            alt="A Zariya lagoon villa at sunset with a couple rowing past on the water"
            fill
            sizes="(max-width: 920px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    href: "/agro",
    label: "Explore Zariya Agro",
    title: "Zariya Agro",
    tag: "Nature & Simplicity",
    text: "Across 2,900 decimals of open land, a living, breathing organic farm ecosystem — for slower, healthier, more meaningful living.",
    cta: "Explore Agro",
    border: "border border-solid border-z-gold border-t-2",
    icon: (
      <>
        <path d="M12 21c5-4 8-8 8-12a8 8 0 0 0-16 0c0 4 3 8 8 12Z" stroke="#DFC1A5" strokeWidth="1.2" />
        <path d="M12 5c-2 3-2 6 0 9 2-3 2-6 0-9Z" stroke="#DFC1A5" strokeWidth="1.2" />
      </>
    ),
  },
  {
    href: "/projects/sylhet#part-resort",
    label: "Explore Zariya Resort",
    title: "Zariya Resort",
    tag: "Experience & Emotional Connection",
    text: "A world-class resort designed not for spectacle, but for peace. Where culture, nature, wellness, and hospitality meet in harmony.",
    cta: "Explore Resort",
    border: "border-t-2 border-solid border-z-gold",
    icon: (
      <>
        <path d="M12 3 4 8v6c0 4 3 6 8 7 5-1 8-3 8-7V8l-8-5Z" stroke="#DFC1A5" strokeWidth="1.2" />
        <path d="M9 12l2 2 4-4" stroke="#DFC1A5" strokeWidth="1.2" />
      </>
    ),
  },
  {
    href: "/projects/sylhet#part-lagoon",
    label: "Explore Lagoon Villa Community",
    title: "Lagoon Villa Community",
    tag: "Belonging & Legacy",
    text: "A limited lagoon-front villa collection for NRB families and retirees, bound into a value-based global membership community.",
    cta: "Explore Villas",
    border: "border-t-2 border-solid border-z-gold",
    icon: (
      <>
        <path d="M2 8c2 0 2-1.6 4-1.6S8 8 10 8s2-1.6 4-1.6S16 8 18 8s2-1.6 4-1.6" stroke="#DFC1A5" strokeWidth="1.2" />
        <path d="M2 13c2 0 2-1.6 4-1.6S8 13 10 13s2-1.6 4-1.6S16 13 18 13s2-1.6 4-1.6" stroke="#DFC1A5" strokeWidth="1.2" />
        <path d="M2 18c2 0 2-1.6 4-1.6S8 18 10 18s2-1.6 4-1.6S16 18 18 18s2-1.6 4-1.6" stroke="#DFC1A5" strokeWidth="1.2" />
      </>
    ),
  },
];

function Pillars() {
  return (
    <section data-sec="" className="bg-z-deep py-[128px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            The Flagship · Zariya Sylhet Resort &amp; Villas
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[54px] leading-[1.1] font-normal text-white">
            One Vision. One Philosophy.
          </h2>
          <p className="mt-[18px] max-w-[60ch] text-[19px] leading-[1.85]" style={{ color: WHITE }}>
            Our flagship project unites three experiences on one masterplan in Sylhet — a resort,
            an organic farm, and a lagoon-villa community. Other Zariya destinations are coming
            soon.
          </p>
        </div>
        <div data-grid="" className="mt-16 grid grid-cols-[repeat(3,1fr)] gap-7">
          {PILLARS.map((pillar, i) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              data-clickable=""
              aria-label={pillar.label}
              className={`relative block cursor-pointer rounded-[12px] bg-z-green px-[38px] py-11 transition-[transform,box-shadow] duration-[.35s] ease-[ease] hover:[box-shadow:0_30px_60px_rgba(0,0,0,.32)] hover:[transform:translateY(-6px)] ${pillar.border}`}
            >
              <div className="mb-[26px] flex h-[54px] w-[54px] items-center justify-center rounded-full border border-solid border-[rgba(223,193,165,.5)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="text-[30px] font-medium text-white">{pillar.title}</h3>
              <p className="mt-[10px] text-[15.5px] font-semibold tracking-[.04em] text-z-gold uppercase">
                {pillar.tag}
              </p>
              <p className="mt-5 text-[18px] leading-[1.85]" style={{ color: WHITE }}>
                {pillar.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15.5px] font-semibold tracking-[.06em] text-z-gold uppercase">
                {pillar.cta} <span className="text-[17.5px]">→</span>
              </span>
            </Link>
          ))}
        </div>
        <p
          data-reveal=""
          className="mx-auto mt-[58px] max-w-[30ch] text-center text-[28px] font-normal text-z-gold italic"
        >
          A Peaceful Return to Nature, Belonging &amp; Yourself.
        </p>
        <div data-reveal="" className="mt-10 text-center">
          <Link
            href="/projects/sylhet"
            className="z-btn z-btn-gold px-9 py-[17px] text-[15.5px] tracking-[.05em]"
          >
            Discover Zariya Sylhet Resort &amp; Villas →
          </Link>
        </div>
      </Container>
    </section>
  );
}

const PRIVILEGES = [
  {
    tag: "Resort & Lifestyle",
    title: "Full Facility Access",
    text: "Complimentary access to the Observation Deck, Sky Lounge, Theatre, Gym, and resort swimming pools.",
  },
  {
    tag: "Food & Beverage",
    title: "15% Dining Discount",
    text: "A standing 15% discount on food & beverage across Zariya's resort dining.",
  },
  {
    tag: "Events & Hospitality",
    title: "Up to 80% Off",
    text: "Priority event access, plus up to 80% off Convention Hall and Business Centre usage.",
  },
  {
    tag: "Sports & Recreation",
    title: "Active Family Living",
    text: "Up to 80% off sports facilities — wellness and recreation for the whole family.",
  },
  {
    tag: "Future Ownership",
    title: "Priority Access",
    text: "First access and special privileges on future Zariya projects, including Lagoon Villa Shares.",
  },
  {
    tag: "Global Community",
    title: "Founding Member Status",
    text: "A global network of NRBs, professionals, and families — with founding-member recognition.",
  },
];

function LagoonVilla() {
  return (
    <section data-sec="" className="relative overflow-hidden bg-z-deep">
      <div className="relative flex h-[78vh] min-h-[560px] items-end overflow-hidden">
        <Image
          src="/assets/media/lagoon-villa-day.jpg"
          alt="A Zariya lagoon villa by the water in daylight"
          fill
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(9,44,44,.25) 0%,rgba(9,44,44,.1) 35%,rgba(9,44,44,.88) 100%),linear-gradient(90deg,rgba(9,44,44,.72) 0%,rgba(9,44,44,.35) 45%,rgba(9,44,44,0) 75%)",
          }}
        />
        <div
          data-container=""
          className="relative z-[2] mx-auto w-full max-w-[1320px] px-12 pb-[76px]"
        >
          <Eyebrow data-reveal="" rule={46} track=".24em" className="mb-[18px]">
            Zariya Lagoon Villa
          </Eyebrow>
          <h2
            data-reveal=""
            data-h2=""
            className="max-w-[18ch] text-[58px] leading-[1.06] font-normal text-white"
          >
            Lagoon Living for the Privileged Few.
          </h2>
          <p
            data-reveal=""
            data-delay="120"
            className="mt-[22px] max-w-[60ch] text-[19.5px] leading-[1.8] text-[rgba(255,255,255,.85)]"
          >
            A limited lagoon-front collection — 2,200 sq ft duplexes with four bedrooms, a private
            infinity pool, and a lagoon-facing balcony. Privacy, scarcity, and legacy, set in the
            natural beauty of Sylhet.
          </p>
        </div>
      </div>

      <div data-container="" className="mx-auto max-w-[1320px] px-12 pt-24 pb-[110px]">
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
          <div data-reveal="">
            <Eyebrow>A Global Lifestyle</Eyebrow>
            <h3 className="mt-[18px] text-[42px] leading-[1.12] font-normal text-white">
              A Global Lagoon Lifestyle,
              <br />
              Rooted in Sylhet.
            </h3>
            <p className="mt-[22px] text-[18.5px] leading-[1.9]" style={{ color: WHITE }}>
              Lagoon-front living — admired in destinations like the Maldives, Dubai, Bali, and
              Fiji — comes to the tea gardens and waters of Sylhet. Where greenery, resort comfort,
              and a value-based global community meet.
            </p>
            <div className="mt-[26px] rounded-[8px] border-l-2 border-solid border-z-gold bg-z-green px-[26px] py-[22px]">
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-gold uppercase">
                The Gateway
              </p>
              <p className="mt-2 text-[18px] leading-[1.8] text-white">
                Only Global Lagoon Villa Members are eligible to purchase a Lagoon Villa Share —
                membership is the first step of the ownership journey.
              </p>
            </div>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="relative min-h-[440px] overflow-hidden rounded-[10px] shadow-[0_30px_70px_rgba(9,44,44,.45)]"
          >
            <Image
              src="/assets/media/lagoon-villa-aerial.jpg"
              alt="Aerial view of Zariya lagoon villa rooftops beside the water at dusk"
              fill
              sizes="(max-width: 920px) 100vw, 610px"
              className="object-cover"
            />
          </div>
        </div>

        <p
          data-reveal=""
          className="mt-[78px] text-center text-[14px] font-semibold tracking-[.18em] text-z-gold uppercase"
        >
          Global Lagoon Villa Membership — Privileges
        </p>
        <div data-grid="" className="mt-9 grid grid-cols-[repeat(3,1fr)] gap-[22px]">
          {PRIVILEGES.map((item, i) => (
            <div
              key={item.tag}
              data-reveal=""
              data-delay={i % 3 ? String((i % 3) * 80) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-[30px] py-[34px]"
            >
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-gold uppercase">
                {item.tag}
              </p>
              <h4 className="mt-3 text-[24.5px] font-medium text-white">{item.title}</h4>
              <p className="mt-[10px] text-[17px] leading-[1.8]" style={{ color: WHITE }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div data-reveal="" className="mt-12 text-center">
          <Link
            href="/community"
            className="z-btn z-btn-gold px-[34px] py-4 text-[15.5px] tracking-[.05em]"
          >
            Explore the Lagoon Community →
          </Link>
        </div>
      </div>
    </section>
  );
}

function OwnershipSnapshot() {
  const card =
    "rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-8 py-[38px] transition-[transform,box-shadow] duration-[.35s] ease-[ease] hover:[box-shadow:0_24px_50px_rgba(9,44,44,.12)] hover:[transform:translateY(-5px)]";
  const cardText = "mt-3 text-[17.5px] leading-[1.8]";
  return (
    <section data-sec="" className="bg-white py-[128px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow color="#092C2C">Financial Clarity</Eyebrow>
          <h2 data-h2="" className="mt-5 text-[54px] leading-[1.08] font-normal text-z-deep">
            <b>Own Something That Works for You.</b>
          </h2>
          <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: INK }}>
            Zariya is not just a place to visit. It is a multi-asset ownership ecosystem — where
            your investment earns passive income, appreciates over time, and passes to your
            children as a freehold asset.
          </p>
        </div>
        <div data-grid="" className="mt-[60px] grid grid-cols-[repeat(3,1fr)] gap-6">
          <Link
            href="/agro"
            data-greenhover=""
            data-reveal=""
            data-clickable=""
            className={`relative block cursor-pointer ${card}`}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 20c5-3 8-7 8-11a8 8 0 0 0-16 0c0 4 3 8 8 11Z" stroke="#114747" strokeWidth="1.3" />
              <path d="M12 6c-2 3-2 6 0 8 2-2 2-5 0-8Z" stroke="#114747" strokeWidth="1.3" />
            </svg>
            <h3 className="mt-5 text-[25px] font-medium text-z-deep">Agro Share</h3>
            <p className={cardText} style={{ color: INK }}>
              1 decimal of freehold organic farmland. Production income, farm-fresh food access,
              and an annual 5-star resort stay included.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[15.5px] font-semibold tracking-[.06em] text-z-green uppercase">
              Explore Agro Share →
            </span>
          </Link>
          <div data-greenhover="" data-reveal="" data-delay="120" className={card}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2 8c2 0 2-1.6 4-1.6S8 8 10 8s2-1.6 4-1.6S16 8 18 8s2-1.6 4-1.6" stroke="#114747" strokeWidth="1.3" />
              <path d="M2 13c2 0 2-1.6 4-1.6S8 13 10 13s2-1.6 4-1.6S16 13 18 13s2-1.6 4-1.6" stroke="#092C2C" strokeWidth="1.3" />
              <path d="M2 18c2 0 2-1.6 4-1.6S8 18 10 18s2-1.6 4-1.6S16 18 18 18s2-1.6 4-1.6" stroke="#114747" strokeWidth="1.3" />
            </svg>
            <h3 className="mt-5 text-[25px] font-medium text-z-green">Lagoon Villa Share</h3>
            <p className={cardText} style={{ color: INK }}>
              A 2,200 sq ft lagoon-front duplex — 4 bedrooms, a private infinity pool, and a
              waterfront balcony. Defined freehold ownership inside Zariya&apos;s limited
              lagoon-villa collection, with resort rental income and an annual family stay.
            </p>
          </div>
          <div data-greenhover="" data-reveal="" data-delay="240" className={card}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" stroke="#114747" strokeWidth="1.3" />
              <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4" stroke="#092C2C" strokeWidth="1.3" />
            </svg>
            <h3 className="mt-5 text-[25px] font-medium text-z-green">Resort Share</h3>
            <p className={cardText} style={{ color: INK }}>
              Earn 50% of net profits from Zariya Resort&apos;s operations. Seasonal demand,
              corporate bookings, and community retreats keep the income flowing year-round.
            </p>
          </div>
        </div>
        <div
          data-reveal=""
          className="mx-auto mt-11 max-w-[780px] rounded-[8px] bg-z-green px-8 py-[22px] text-center"
        >
          <p className="text-[18px] font-semibold tracking-[.01em] text-white">
            100% Money-Back Guarantee. Founder Protection Programme. Your trust is protected.
          </p>
        </div>
        <div data-reveal="" className="mt-[34px] text-center">
          <Link
            href="/ownership"
            className="inline-block cursor-pointer border-b-[1.5px] border-solid border-z-deep px-[2px] py-[6px] text-[16.5px] font-semibold tracking-[.04em] text-z-green hover:text-z-deep"
          >
            View Full Ownership &amp; Income Details →
          </Link>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section data-sec="" className="relative overflow-hidden bg-z-green py-[128px]">
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-5%] h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(223,193,165,.14),transparent_65%)]"
      />
      <Container className="relative">
        <div data-2col="" className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[72px]">
          <div
            data-reveal=""
            className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-z-deep shadow-[0_30px_70px_rgba(0,0,0,.28)]"
          >
            <Image
              src="/images/community-hands.png"
              alt="Many hands joined in a circle against a clear sky"
              fill
              sizes="(max-width: 920px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div data-reveal="" data-delay="120" className="min-w-0">
            <Eyebrow rule={30}>About Zariya Living</Eyebrow>
            <h2
              data-h2=""
              className="mt-[18px] text-[50px] leading-[1.1] font-normal text-balance text-white"
            >
              Building Places Where Families Belong.
            </h2>
            <p className="mt-[26px] text-[19px] leading-[1.85] text-pretty" style={{ color: WHITE }}>
              Zariya Living Ltd. is a Bangladeshi community developer rooted in faith, nature and
              legacy. We create shared places where families can own land, grow safe food and come
              together, beginning with Zariya Agro and the Zariya Sylhet Resort &amp; Villas.
            </p>
            <p className="mt-[18px] text-[19px] leading-[1.85] text-pretty" style={{ color: WHITE }}>
              Every project follows one model: value for the family, strength for the national
              economy and fair livelihoods for the farmers who grow our food.
            </p>
            <Link
              href="/explore"
              className="z-btn z-btn-gold-line mt-[34px] px-[30px] py-4 text-[15.5px] tracking-[.06em] [border-width:1px] hover:[box-shadow:none]"
            >
              Discover Our Story →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

const STORIES = [
  {
    quote:
      "\"My children grew up speaking another language, in another country. Zariya is the first place that feels like ours — somewhere they can finally call home.\"",
    by: "— Entrepreneur, London",
  },
  {
    quote:
      "\"I came expecting a brochure and a hard sell. Instead I spent a morning walking the land in silence. That moment told me everything I needed to know.\"",
    by: "— Retired Surgeon, New York",
  },
  {
    quote:
      "\"What sold me wasn't the returns — it was sitting at Fajr and realising my grandchildren could one day pray on the same ground. That kind of belonging is rare.\"",
    by: "— Founding Member, Sydney",
  },
];

function Stories() {
  return (
    <section data-sec="" className="relative overflow-hidden bg-z-green py-[120px]">
      <div className="absolute bottom-[-12%] left-[-6%] h-[480px] w-[480px] bg-[radial-gradient(circle,rgba(223,193,165,.12),transparent_65%)]" />
      <Container className="relative">
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            In Their Words
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[54px] font-normal text-white">
            Stories from Zariyans.
          </h2>
        </div>
        <div data-grid="" className="mt-16 grid grid-cols-[repeat(3,1fr)] gap-[30px]">
          {STORIES.map((story, i) => (
            <figure
              key={story.by}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="flex flex-col rounded-[8px] bg-white px-[38px] py-[42px] shadow-[0_22px_50px_rgba(0,0,0,.22)]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#092C2C" aria-hidden="true" className="opacity-55">
                <path d="M9.5 5C6 6 4 9 4 13v6h6v-6H7c0-2.5 1-4.3 3.4-5L9.5 5Zm10 0c-3.5 1-5.5 4-5.5 8v6h6v-6h-3c0-2.5 1-4.3 3.4-5L19.5 5Z" />
              </svg>
              <blockquote className="mt-[18px] flex-1 text-[22px] leading-[1.55] font-normal text-[rgba(9,44,44,.85)] italic">
                {story.quote}
              </blockquote>
              <figcaption className="mt-[26px] text-[14px] font-semibold tracking-[.08em] text-z-green uppercase">
                {story.by}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

const FORM_LABEL = "text-[14px] font-semibold tracking-[.1em] text-z-gold uppercase";
const FORM_FIELD =
  "border-b border-solid border-[rgba(223,193,165,.35)] bg-transparent px-[2px] py-[11px] text-[18px] leading-[21px] text-white outline-none focus:border-z-gold";

const FORM_INPUTS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { name: "phone", label: "Phone / WhatsApp Number", type: "text", placeholder: "+880 …" },
  { name: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
  { name: "country", label: "Country of Residence", type: "text", placeholder: "e.g. United Kingdom" },
];

function BeginYourPath() {
  return (
    <section data-sec="" className="bg-z-deep py-[128px]">
      <div data-container="" className="mx-auto max-w-[1040px] px-12">
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[54px] font-normal text-white">
            Begin Your Path Home.
          </h2>
          <p className="mt-5 max-w-[54ch] text-[19px] leading-[1.8]" style={{ color: WHITE }}>
            Speak with our team. No pressure, no sales pitch — just a conversation about what
            matters to you.
          </p>
        </div>
        <LeadForm kind="home" data-reveal="" data-delay="120" className="relative mt-[54px]">
          <div data-2col="" className="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-[30px]">
            {FORM_INPUTS.map((field) => (
              <label key={field.name} className="flex flex-col gap-[9px]">
                <span className={FORM_LABEL}>{field.label}</span>
                <input
                  name={field.name}
                  aria-required="true"
                  type={field.type}
                  placeholder={field.placeholder}
                  className={FORM_FIELD}
                />
              </label>
            ))}
            <label className="flex flex-col gap-[9px]">
              <span className={FORM_LABEL}>I am interested in</span>
              <select name="interest" aria-required="true" className={`${FORM_FIELD} h-[45px]`}>
                <option>Agro Share</option>
                <option>Lagoon Villa Share</option>
                <option>Resort Share</option>
                <option>Lagoon Membership</option>
                <option>Just Exploring</option>
              </select>
            </label>
            <label className="flex flex-col gap-[9px]">
              <span className={FORM_LABEL}>Best time to reach me</span>
              <input
                name="best_time"
                aria-required="true"
                type="text"
                placeholder="e.g. Weekday evenings"
                className={FORM_FIELD}
              />
            </label>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="submit"
              className="z-btn z-btn-gold-line px-7 py-[15px] text-[15.5px] tracking-[.05em]"
            >
              Schedule a Private Call
            </button>
            <button
              type="submit"
              className="z-btn z-btn-gold px-[30px] py-4 text-[15.5px] tracking-[.05em]"
            >
              Book a Site Visit
            </button>
            <button
              type="submit"
              className="z-btn z-btn-gold-line px-7 py-[15px] text-[15.5px] tracking-[.05em]"
            >
              Request Investment Pack
            </button>
          </div>
          <p className="mx-auto mt-[30px] max-w-[62ch] text-center text-[16.5px] leading-[1.7] text-z-gold italic">
            Confirmed bookings include a complimentary By-Air Sylhet Experience Tour — your first
            look at the land, the lagoon, and the life waiting for you.
          </p>
        </LeadForm>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AgroShare />
      <TripleImpact />
      <BrandStory />
      <Pillars />
      <LagoonVilla />
      <OwnershipSnapshot />
      <About />
      <Stories />
      <BeginYourPath />
    </>
  );
}
