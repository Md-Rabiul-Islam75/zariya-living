import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow, type Slide } from "@/components/site/HeroSlideshow";
import { RoomTabs } from "@/components/site/RoomTabs";
import { SectionVideo, VideosToggle } from "@/components/site/SectionVideo";
import { Container, Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Zariya Sylhet Resort & Villas",
  description:
    "The Zariya flagship: a five-star resort, a living organic farm and a limited lagoon-villa community on one masterplan in Sylhet, Bangladesh.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

const SLIDES: Slide[] = [
  {
    src: "/assets/resort/hero-1.jpg",
    alt: "Aerial view of the Zariya masterplan with the lotus Tea Tower rising from the forest",
    caption: "The Masterplan from Above",
  },
  {
    src: "/assets/resort/hero-2.jpg",
    alt: "The entrance plaza and fountain of the Zariya Tea Tower",
    caption: "Arrival at the Tea Tower",
  },
  {
    src: "/assets/resort/hero-3.jpg",
    alt: "The marble and timber lobby of the Zariya Tea Tower with leaf chandeliers",
    caption: "The Grand Lobby",
  },
  {
    src: "/assets/resort/hero-4.jpg",
    alt: "Guests on the Sky Deck terrace beneath the lotus petals, overlooking the valley",
    caption: "The Sky Deck",
  },
  {
    src: "/assets/resort/hero-5.jpg",
    alt: "A panoramic tower restaurant with palm planters and valley views",
    caption: "Panoramic Dining",
  },
  {
    src: "/assets/resort/hero-6.jpg",
    alt: "Registration desk of the Zariya Tower Convention Hall",
    caption: "Convention Hall",
  },
  {
    src: "/assets/resort/hero-8.jpg",
    alt: "A guest looking through binoculars at the villas and lagoons from the observation deck",
    caption: "The Observation Deck",
  },
  {
    src: "/assets/resort/hero-9.jpg",
    alt: "Zariya Farm Fresh Dining pavilion in the garden with the Tea Tower behind",
    caption: "Farm Fresh Dining",
  },
  {
    src: "/assets/resort/hero-10.jpg",
    alt: "The resort pool with a sunken fire-pit lounge and the Tea Tower beyond",
    caption: "The Lagoon Pool",
  },
  {
    src: "/assets/resort/hero-11.jpg",
    alt: "A father and son fishing from a wooden jetty on the villa lagoon",
    caption: "Life on the Lagoon",
  },
  {
    src: "/assets/resort/hero-12.jpg",
    alt: "A Zariya lagoon villa with glass walls and a timber deck over the water",
    caption: "Your Lagoon Villa",
  },
];

function Hero() {
  return (
    <HeroSlideshow
      slides={SLIDES}
      label="Zariya Sylhet Resort highlights"
      background="radial-gradient(130% 100% at 55% 20%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
      paddingBottom="pb-[90px]"
    >
      <div data-reveal="" className="mb-5 flex items-center gap-[14px]">
        <span data-rule="" className="h-px w-[46px] bg-white" />
        <span className="text-[14px] font-semibold tracking-[.24em] text-[#f6f6f6] uppercase">
          The Flagship Project
        </span>
      </div>
      <h1
        data-reveal=""
        data-h1=""
        className="max-w-[18ch] text-[74px] leading-[1.04] font-normal text-white"
      >
        Zariya Sylhet Resort &amp; Villas
      </h1>
      <p
        data-reveal=""
        data-delay="120"
        className="mt-[18px] max-w-[44ch] text-[25px] font-normal text-z-gold italic [text-shadow:0_2px_14px_rgba(9,44,44,.7)]"
      >
        Where the Tea Tower meets the lagoon. Where peace is not an amenity — it is the
        architecture.
      </p>
      <div data-reveal="" data-delay="220" className="mt-[34px] flex flex-wrap gap-4">
        <Link
          href="/visit"
          className="z-btn z-btn-gold px-[34px] py-[17px] text-[15.5px] tracking-[.06em]"
        >
          Book a Visit
        </Link>
        <Link
          href="/ownership"
          className="z-btn z-btn-gold-line bg-[rgba(9,44,44,.55)] px-8 py-4 text-[15.5px] tracking-[.06em] backdrop-blur-[4px] hover:bg-z-gold"
        >
          View Ownership Options
        </Link>
      </div>
    </HeroSlideshow>
  );
}

const OVERVIEW = [
  ["Location", "Sylhet, Bangladesh — 10 minutes from the airport"],
  ["Scale", "145 exclusive villas across approximately 2,100 decimals"],
  ["Design Concept", "Faith-aligned, nature-rooted, legacy-focused"],
];

function Overview() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[760px]">
          <Eyebrow color="#092C2C">The Project</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[52px] leading-[1.1] font-normal text-z-deep">
            Not Just a Resort. A Place to Belong.
          </h2>
          <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: INK }}>
            Zariya Sylhet Resort &amp; Villas is designed for people seeking more than luxury —
            peace, emotional connection, wellness, and meaningful living. Set across a thoughtfully
            planned masterplan in Sylhet, it brings together culture, nature, recreation, and
            hospitality in a way that has never been done before in Bangladesh.
          </p>
          <p className="mt-[18px] text-[19px] leading-[1.9]" style={{ color: INK }}>
            At the centre of it all stands the Tea Tower, an iconic landmark visible for miles, and
            the heart of everything Zariya offers.
          </p>
        </div>
        <div data-reveal="" data-grid="" className="mt-14 grid grid-cols-[repeat(3,1fr)] gap-6">
          {OVERVIEW.map(([title, text]) => (
            <div key={title} className="rounded-[10px] bg-z-green px-[30px] py-[34px]">
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-gold uppercase">
                {title}
              </p>
              <p className="mt-3 text-[22px] leading-[1.4] text-white">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const PARTS = [
  {
    href: "#part-resort",
    label: "Explore Zariya Resort",
    number: "01",
    title: "Zariya Resort",
    tag: "Experience & Emotional Connection",
    text: "A five-star resort built for peace — Tea Tower, lagoon pools, wellness, dining, and culture.",
    cta: "Explore the Resort",
  },
  {
    href: "/agro",
    label: "Explore Zariya Agro",
    number: "02",
    title: "Zariya Agro",
    tag: "Nature & Simplicity",
    text: "A living organic farm ecosystem — safe food, farmer network, and a real production income share.",
    cta: "Explore the Farm",
  },
  {
    href: "#part-lagoon",
    label: "Explore Lagoon Villa Community",
    number: "03",
    title: "Lagoon Villa Community",
    tag: "Belonging & Legacy",
    text: "A limited lagoon-front villa collection and a value-based global membership community.",
    cta: "Explore the Villas",
  },
];

function ThreeExperiences() {
  return (
    <section data-sec="" className="bg-z-ivory py-[104px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow color="#092C2C" rule={30} center>
            The Flagship · Three Parts
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[52px] leading-[1.1] font-normal text-z-deep">
            One Destination. Three Experiences.
          </h2>
          <p className="mt-5 max-w-[64ch] text-[19px] leading-[1.85]" style={{ color: INK }}>
            Zariya Sylhet Resort &amp; Villas brings three worlds together on one masterplan — a
            world-class resort, a living organic farm, and a limited lagoon-villa community. One
            vision, three ways to belong.
          </p>
        </div>
        <div data-grid="" className="mt-[58px] grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {PARTS.map((part, i) => (
            <Link
              key={part.title}
              href={part.href}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              data-clickable=""
              aria-label={part.label}
              className="block cursor-pointer rounded-[14px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-9 py-[42px] transition-[transform,box-shadow] duration-[.35s] ease-[ease] hover:[box-shadow:0_26px_54px_rgba(9,44,44,.14)] hover:[transform:translateY(-6px)]"
            >
              <span className="text-[30px] text-z-gold">{part.number}</span>
              <h3 className="mt-[10px] text-[28px] font-medium text-z-green">{part.title}</h3>
              <p className="mt-2 text-[15.5px] font-semibold tracking-[.04em] text-z-gold uppercase">
                {part.tag}
              </p>
              <p className="mt-4 text-[17.5px] leading-[1.8]" style={{ color: INK }}>
                {part.text}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[15.5px] font-semibold tracking-[.06em] text-z-green uppercase">
                {part.cta} <span className="text-[17.5px]">↓</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

const SIGNATURES = [
  {
    title: "Observation Deck",
    icon: "M3 13h18M5 13a7 7 0 0 1 14 0M12 4v2M12 13v7",
    text: "Rise above the lagoon and the treetops. The Observation Deck offers a 360-degree view of the masterplan, the tea gardens, and the open Sylhet sky — a moment of perspective that stays with you.",
  },
  {
    title: "Sky Lounge",
    icon: "M4 18h16M6 18v-5M18 18v-5M5 13l7-5 7 5M9 18v-3h6v3",
    text: "An elevated space for evenings that deserve to linger. The Sky Lounge is where guests and members gather under open skies, over good food and better conversations.",
  },
  {
    title: "Theatre",
    icon: "M4 5h16v11H4zM4 16l4 3M20 16l-4 3M9 9l5 2.5L9 14z",
    text: "Culture and creativity, designed with elegance. The Zariya Theatre hosts live performances, cinematic events, cultural programmes, and private functions — every seat a good seat.",
  },
  {
    title: "Tea Museum",
    icon: "M5 8h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5zM16 9h2a2 2 0 0 1 0 4h-2M7 5v-.5M11 5v-.5M14 5v-.5",
    text: "Sylhet is tea country. The Tea Museum celebrates this heritage through rare collections, traditional preparation rituals, and the warm culture that has grown up around the leaf.",
  },
  {
    title: "Heritage Museum",
    icon: "M4 20V9l8-5 8 5v11M4 20h16M9 20v-6h6v6M12 4v5",
    text: "A living record of the communities and traditions of this land. Cultural artefacts, traditional attire, instruments, and handcrafted pieces — each corner tells a story.",
  },
  {
    title: "Reception & Grand Lobby",
    icon: "M3 21V11l9-6 9 6v10M3 21h18M8 21v-7h8v7M10 11h4",
    text: "Your first moment at Zariya sets the tone for everything that follows. The Grand Lobby welcomes with warm light, calming interiors, and hospitality that makes every guest feel they have arrived somewhere that was expecting them.",
  },
];

function SignatureExperiences() {
  return (
    <section id="part-resort" data-sec="" className="scroll-mt-[84px] bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            Part One · Zariya Resort
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] font-normal text-white">
            There Is No Ordinary Day at Zariya.
          </h2>
        </div>
        <div data-grid="" className="mt-[60px] grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {SIGNATURES.map((item, i) => (
            <div
              key={item.title}
              data-reveal=""
              data-delay={i % 3 ? String((i % 3) * 100) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-[34px] py-[38px] transition-transform duration-[.35s] ease-[ease] hover:[transform:translateY(-5px)]"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={item.icon} stroke="#DFC1A5" strokeWidth="1.2" />
              </svg>
              <h3 className="mt-[18px] text-[25px] font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-[17px] leading-[1.8]" style={{ color: WHITE }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Accommodation() {
  return (
    <section data-sec="" className="bg-z-green py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            Where You Rest
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] font-normal text-white">
            Three Room Experiences. All Designed for Rest.
          </h2>
        </div>
        <RoomTabs />
      </Container>
    </section>
  );
}

const WELLNESS = [
  ["Yoga & Meditation", "Spacious, sun-filled studios designed for stillness. Whether you are a daily practitioner or a curious beginner, the Zariya Yoga and Meditation Centre gives you the space to return to yourself."],
  ["Spa", "A serene environment designed to refresh the body and quiet the mind. Zariya's spa offers a full menu of rejuvenating treatments — a true escape from everyday stress."],
  ["Sauna", "Warmth, comfort, and detoxification. The premium sauna at Zariya Sylhet Resort & Villas is a peaceful retreat where you can unwind and recharge completely."],
  ["Gymnasium", "Fully equipped with modern fitness facilities in a comfortable environment. Staying active at Zariya is never a compromise."],
];

function Wellness() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow color="#092C2C">Wellness</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
            Your Body and Mind Belong Here Too.
          </h2>
        </div>
        <div data-grid="" className="mt-[54px] grid grid-cols-[repeat(4,1fr)] gap-6">
          {WELLNESS.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              data-delay={i ? String(i * 80) : undefined}
              className="rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-7 py-8"
            >
              <h3 className="text-[24.5px] font-medium text-z-green">{title}</h3>
              <p className="mt-3 text-[16.5px] leading-[1.8]" style={{ color: INK }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const DINING = [
  {
    title: "Fine Dining",
    image: "/images/dining-fine.png",
    alt: "The Fine Dining restaurant, with chandeliers and tall windows",
    backdrop: "linear-gradient(150deg,#13524a,#0d3a38)",
    text: "An elevated dining experience overlooking the resort grounds. Inspired by the finest traditions of hospitality, Zariya's Fine Dining restaurant brings together flavour, elegance, and occasion.",
  },
  {
    title: "Casual Dining",
    image: "/images/dining-nature.png",
    alt: "The Casual Dining restaurant, open to tropical greenery",
    backdrop: "linear-gradient(150deg,#114747,#13524a)",
    text: "Open, light-filled, and surrounded by greenery. A space where families gather, conversations flow, and meals feel like the best part of the day.",
  },
  {
    title: "Farm-Fresh Dining",
    image: "/images/offers/agro.jpg",
    alt: "Fresh farm produce laid out at golden hour",
    backdrop: "linear-gradient(150deg,#0d3a38,#114747)",
    text: "The freshest produce from Zariya Agro, served at your table. Farm-to-fork, with nothing in between — food the way nature intended.",
  },
];

function Dining() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow>Dining</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
            Food That Feeds More Than Hunger.
          </h2>
        </div>
        <div data-grid="" className="mt-[54px] grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {DINING.map((item, i) => (
            <div
              key={item.title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="overflow-hidden rounded-[12px] bg-z-green"
            >
              <div className="relative h-[190px] overflow-hidden" style={{ background: item.backdrop }}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, 410px"
                  className="object-cover"
                />
              </div>
              <div className="px-7 py-[30px]">
                <h3 className="text-[25px] font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.8]" style={{ color: WHITE }}>
                  {item.text}
                </p>
                {item.title === "Farm-Fresh Dining" && (
                  <Link
                    href="/agro"
                    className="mt-[14px] inline-block cursor-pointer border-b-[1.5px] border-solid border-z-gold px-[2px] py-[5px] text-[15.5px] font-semibold text-z-gold"
                  >
                    Learn about Zariya Agro →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const RESORT_CLIPS = [
  { name: "resort-lobby", caption: "The Grand Lobby", pad: "px-6 pt-[60px] pb-[22px]" },
  { name: "resort-dining", caption: "Signature Dining", rate: 0.5, pad: "px-[22px] pt-[60px] pb-5" },
  { name: "resort-view", caption: "Valley Views at Dusk", pad: "px-[22px] pt-[60px] pb-5" },
];

const RESORT_PHOTOS = [
  { src: "/assets/media/lagoon-villas.jpg", alt: "Lagoon villas at golden hour" },
  { src: "/assets/media/tea-hike.jpg", alt: "Friends hiking through a Sylhet tea garden" },
  {
    src: "/assets/media/lake-morning.jpg",
    alt: "A morning view across the lagoon to the Tea Tower, with boats at the jetty",
  },
];

function ResortInMotion() {
  return (
    <section data-sec="" className="w-full bg-z-ivory py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow color="#114747">Zariya Resort in Motion</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
              A Glimpse of Your Stay.
            </h2>
          </div>
          <VideosToggle className="z-btn z-btn-dark-line inline-flex items-center gap-[10px] rounded-[40px] px-5 py-[11px] text-[14px] tracking-[.06em]" />
        </div>
        <div data-grid="" className="mt-[50px] grid grid-cols-[2fr_1fr_1fr] gap-4">
          {RESORT_CLIPS.map((clip) => (
            <figure
              key={clip.name}
              data-reveal=""
              className="relative m-0 min-h-[520px] overflow-hidden rounded-[10px] bg-[#0d3a38]"
            >
              <SectionVideo name={clip.name} rate={clip.rate} />
              <figcaption
                className={`absolute right-0 bottom-0 left-0 bg-[linear-gradient(180deg,transparent,rgba(9,44,44,.9))] text-[17px] font-semibold text-white ${clip.pad}`}
              >
                {clip.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div data-grid="" className="mt-4 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-4">
          {RESORT_PHOTOS.map((photo, i) => (
            <figure
              key={photo.src}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="relative m-0 aspect-[16/10] overflow-hidden rounded-[10px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 920px) 100vw, 410px"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

const BUSINESS = [
  ["Business Centre", "A professionally appointed meeting and co-working environment with a view that inspires clarity. The Zariya Business Centre is where members and guests host high-level conversations in a setting unlike any boardroom."],
  ["Convention Hall", "For conferences, corporate retreats, investor gatherings, and community events. Modern AV, professional staging, and a team experienced in making every event run without a hitch."],
  ["Banquet Hall", "For the moments that deserve grandeur. Weddings, receptions, celebrations — the Zariya Banquet Hall transforms any occasion into a memory."],
];

function BusinessEvents() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow color="#092C2C">Business &amp; Events</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
            Where Work Meets Inspiration.
          </h2>
        </div>
        <div data-grid="" className="mt-[54px] grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {BUSINESS.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-8 py-9"
            >
              <h3 className="text-[25px] font-medium text-z-green">{title}</h3>
              <p className="mt-3 text-[17px] leading-[1.8]" style={{ color: INK }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const RECREATION = [
  ["Kids Zone", "A world of discovery for the youngest Zariyans. The Kids Zone is safe, imaginative, and designed to let children be fully, joyfully children."],
  ["Swimming Pools & Water Features", "Lagoon-style pools winding through tropical gardens. Whether you swim lengths or simply float in the sun, the water features at Zariya are a destination in themselves."],
  ["Sports Complex", "Football pitch, tennis courts, basketball, badminton, and a table tennis hall — all within the resort grounds. For members who bring their competitive side on holiday."],
];

function Recreation() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="max-w-[680px]">
          <Eyebrow>Recreation</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
            There Is Always Something to Do. Or Not Do.
          </h2>
        </div>
        <div data-grid="" className="mt-[54px] grid grid-cols-[repeat(3,1fr)] gap-[26px]">
          {RECREATION.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-8 py-9"
            >
              <h3 className="text-[25px] font-medium text-white">{title}</h3>
              <p className="mt-3 text-[17px] leading-[1.8]" style={{ color: WHITE }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const CTA = "z-btn z-btn-gold mt-[30px] px-8 py-4 text-[15.5px] tracking-[.05em]";
const CHIP =
  "rounded-[6px] border-l-2 border-solid border-z-gold px-[18px] py-4 text-[16.5px] font-medium";

function PartAgro() {
  return (
    <section id="part-agro" data-sec="" className="scroll-mt-[84px] bg-white py-[120px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
          <div data-reveal="">
            <Eyebrow color="#092C2C">Part Two · Zariya Agro</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
              A Farm That Feeds a Community.
            </h2>
            <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: INK }}>
              Across 2,900 decimals of open land, Zariya Agro is a working organic ecosystem —
              fields, orchards, dairy, and aquaculture — designed to supply the resort, nourish the
              community, and generate a real production income for shareholders.
            </p>
            <div data-grid="" className="mt-[26px] grid grid-cols-[1fr_1fr] gap-[14px]">
              {["Safe organic food", "Selected farmer network", "Production income share", "Annual resort stay"].map(
                (item) => (
                  <div key={item} className={`${CHIP} bg-z-ivory text-z-green`}>
                    {item}
                  </div>
                ),
              )}
            </div>
            <Link href="/agro" className={CTA}>
              Explore Zariya Agro in Full →
            </Link>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="relative min-h-[480px] overflow-hidden rounded-[10px] shadow-[0_30px_70px_rgba(9,44,44,.28)]"
          >
            <Image
              src="/images/offers/agro.jpg"
              alt="Fresh farm produce laid out at golden hour"
              fill
              sizes="(max-width: 920px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PartLagoon() {
  return (
    <section id="part-lagoon" data-sec="" className="scroll-mt-[84px] bg-z-deep py-[120px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
          <div
            data-reveal=""
            data-delay="120"
            className="relative order-none min-h-[480px] overflow-hidden rounded-[10px] shadow-[0_30px_70px_rgba(0,0,0,.4)]"
          >
            <Image
              src="/assets/resort/hero-12.jpg"
              alt="A Zariya lagoon villa with glass walls and a timber deck over the water"
              fill
              sizes="(max-width: 920px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div data-reveal="">
            <Eyebrow>Part Three · Lagoon Villa Community</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
              Lagoon Living for the Privileged Few.
            </h2>
            <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: WHITE }}>
              A limited lagoon-front collection — 2,200 sq ft duplexes with four bedrooms, a private
              infinity pool, and a lagoon-facing balcony. Owned through a defined freehold share,
              earning resort rental income, and gathered into a value-based global membership
              community.
            </p>
            <div data-grid="" className="mt-[26px] grid grid-cols-[1fr_1fr] gap-[14px]">
              {["2,200 sq ft duplex · 4 beds", "Private infinity pool", "Resort rental income", "Global membership gateway"].map(
                (item) => (
                  <div key={item} className={`${CHIP} bg-z-green text-white`}>
                    {item}
                  </div>
                ),
              )}
            </div>
            <Link href="/community" className={CTA}>
              Explore the Lagoon Community →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClosingCards() {
  const card = "rounded-[16px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-11 py-12";
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <div data-container="" className="mx-auto max-w-[1100px] px-12">
        <div
          data-reveal=""
          className="relative overflow-hidden rounded-[16px] bg-z-green px-14 py-[60px] text-center"
        >
          <div className="absolute top-[-20%] right-[-10%] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(223,193,165,.16),transparent_65%)]" />
          <div className="relative">
            <h2 className="text-[44px] font-normal text-white">Own a Part of Zariya Resort.</h2>
            <p
              className="mx-auto mt-5 max-w-[62ch] text-[19px] leading-[1.9]"
              style={{ color: WHITE }}
            >
              Every Resort Share is a 20 sq ft freehold construction holding, with access to 100 sq
              ft of common space and participation in the 50/50 profit-sharing model. Your share
              earns while you live.
            </p>
            <Link
              href="/ownership"
              className="z-btn z-btn-gold mt-7 px-8 py-4 text-[15.5px] tracking-[.05em]"
            >
              View Full Ownership &amp; Income Details →
            </Link>
          </div>
        </div>
        <div data-reveal="" data-2col="" className="mt-[30px] grid grid-cols-[1fr_1fr] gap-[30px]">
          <div className={card}>
            <h2 className="text-[34px] font-normal text-z-deep">Come and See It for Yourself.</h2>
            <p className="mt-4 text-[18px] leading-[1.85]" style={{ color: INK }}>
              No decision should be made without standing on the land. Book a guided visit and let
              Zariya speak for itself.
            </p>
            <Link
              href="/visit"
              className="z-btn mt-[22px] bg-[#114646] px-[30px] py-[15px] text-[15.5px] tracking-[.05em] text-white hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.22)]"
            >
              Book My Visit
            </Link>
          </div>
          <div className={card}>
            <h2 className="text-[34px] font-normal text-z-deep">Become a Zariyan.</h2>
            <p className="mt-4 text-[18px] leading-[1.85]" style={{ color: INK }}>
              Every Zariya owner becomes part of the Zariyans&apos; Global Community — a network of
              NRB families, professionals, and retirees bound by shared values and a shared vision
              for what home can mean.
            </p>
            <Link
              href="/community"
              className="z-btn z-btn-dark-line mt-[22px] px-7 py-[14px] text-[15.5px] tracking-[.05em] text-z-green hover:text-white"
            >
              Learn About the Community →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SylhetPage() {
  return (
    <>
      <Hero />
      <Overview />
      <ThreeExperiences />
      <SignatureExperiences />
      <Accommodation />
      <Wellness />
      <Dining />
      <ResortInMotion />
      <BusinessEvents />
      <Recreation />
      <PartAgro />
      <PartLagoon />
      <ClosingCards />
    </>
  );
}
