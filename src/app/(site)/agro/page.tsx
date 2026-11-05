import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow, type Slide } from "@/components/site/HeroSlideshow";
import { SectionVideo, VideosToggle } from "@/components/site/SectionVideo";
import { Container, Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Zariya Agro",
  description:
    "Own 1 decimal of freehold organic farmland inside a professionally managed agro ecosystem: safe food for your family, a share of production income, and an annual stay at Zariya Resort.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

const SLIDES: Slide[] = [
  {
    src: "/assets/agro/hero-1.jpg",
    alt: "Zariya Agro Industrial Processing Zone at golden hour",
    caption: "The Agro Industrial Processing Zone",
  },
  {
    src: "/assets/agro/hero-2.jpg",
    alt: "A Zariya trainer demonstrating vegetable farming to local farmers",
    caption: "Farmer Training Demonstrations",
  },
  {
    src: "/assets/agro/hero-3.jpg",
    alt: "Farmers harvesting brinjal and tomatoes beside the processing campus at sunrise",
    caption: "Farm to Factory, Every Sunrise",
  },
  {
    src: "/assets/agro/hero-4.jpg",
    alt: "A Zariya agronomist guiding a farmer in the brinjal field",
    caption: "Hands-on Guidance in the Field",
  },
  {
    src: "/assets/agro/hero-5.jpg",
    alt: "A family harvesting vegetables in the Zariya garden beside the lagoon",
    caption: "A Family Harvest at Zariya",
  },
  {
    src: "/assets/agro/hero-6.jpg",
    alt: "A Zariya team member handing a basket of fresh produce to a family",
    caption: "Fresh from Zariya to Your Table",
  },
  {
    src: "/assets/agro/hero-7.jpg",
    alt: "A farmer harvesting tomatoes, then sharing his income with his family at home",
    caption: "Raising Farmer Livelihoods",
  },
];

function Hero() {
  return (
    <HeroSlideshow
      slides={SLIDES}
      label="Zariya Agro highlights"
      background="radial-gradient(130% 100% at 50% 25%,#DFC1A5 0%,#114747 50%,#092C2C 100%)"
      glow
    >
      <div data-reveal="" className="mb-5 flex flex-wrap items-center gap-[14px]">
        <span className="rounded-[30px] bg-z-gold px-3 py-[5px] text-[14px] font-semibold tracking-[.14em] text-z-deep">
          FIRST RELEASE
        </span>
        <span data-rule="" className="h-px w-9 bg-z-gold" />
        <span className="text-[14px] font-semibold tracking-[.24em] text-z-gold uppercase [text-shadow:0_1px_10px_rgba(9,44,44,.8)]">
          Nature &amp; Simplicity
        </span>
      </div>
      <h1 data-reveal="" data-h1="" className="text-[74px] leading-[1.04] font-normal text-white">
        Zariya Agro
      </h1>
      <p
        data-reveal=""
        data-delay="120"
        className="mt-[18px] max-w-[44ch] text-[25px] font-medium text-z-gold italic [text-shadow:0_2px_14px_rgba(9,44,44,.7)]"
      >
        5,000 decimals of living, breathing land. Food you can trust. A life you can feel.
      </p>
      <div data-reveal="" data-delay="220" className="mt-[34px] flex flex-wrap gap-4">
        <Link
          href="/visit"
          className="z-btn z-btn-gold px-[34px] py-[17px] text-[15.5px] tracking-[.06em]"
        >
          Reserve Your Agro Share
        </Link>
        <Link
          href="/visit"
          className="z-btn z-btn-gold-line bg-[rgba(9,44,44,.55)] px-8 py-4 text-[15.5px] tracking-[.06em] backdrop-blur-[4px] hover:bg-z-gold"
        >
          Book a Farm Visit
        </Link>
      </div>
    </HeroSlideshow>
  );
}

const SUPPORTS = [
  ["Training & Technical Support", "Professional training and on-field guidance in organic farming and safe-food production."],
  ["Seed & Input Support", "Essential inputs from the start of every season, inside one organised framework."],
  ["Pre-Purchase & Fair Price", "Pre-purchase agreements that break middleman syndicates and guarantee a market and fair price."],
  ["Waste Reduction & Value Addition", "Cold storage, processing and branding to stop crop loss and secure the highest market value."],
  ["Farmer Healthcare", "Health services and life cover for farmers and their families."],
  ["Children’s Education Scholarships", "Educational scholarships so farmers’ talented children can keep studying."],
  ["Social Support", "Standing beside farming families at major family events and in times of crisis."],
];

const NATION_CARDS = [
  ["Reduce Waste", "A modern cold chain takes field-to-market loss towards zero."],
  ["Value Addition", "Professional processing and premium packaging secure the highest price."],
  ["Market Expansion", "Direct access to premium local buyers and strong export channels."],
];

const WORKFLOW = [
  { phase: "Phase 1", name: "Source", steps: ["Farmer Network", "Collection", "Quality Check"] },
  { phase: "Phase 2", name: "Process", steps: ["Processing", "Packaging", "Cold Storage"] },
  { phase: "Phase 3", name: "Market", steps: ["Branding", "Marketing", "Export"] },
];

const BODY = "mb-[18px] text-[19px] leading-[1.9]";

/** One numbered row: the left column stays pinned while the right column scrolls. */
function ImpactRow({
  number,
  audience,
  title,
  strapline,
  image,
  alt,
  children,
}: {
  number: string;
  audience: string;
  title: string;
  strapline: string;
  image: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div data-reveal="" className="border-t border-solid border-[rgba(9,44,44,.14)] py-[72px]">
      <div data-2col="" className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-14">
        <div data-tistick="" className="sticky top-24 min-w-0">
          <span data-tinum="" className="text-[110px] leading-[.9] font-normal text-z-green">
            {number}
          </span>
          <p className="mt-[22px] text-[14px] font-semibold tracking-[.2em] text-z-green uppercase">
            {audience}
          </p>
          <h3 className="mt-[10px] text-[34px] leading-[1.15] font-medium text-z-deep">{title}</h3>
          <p className="mt-[14px] text-[16.5px] font-semibold tracking-[.04em]" style={{ color: INK }}>
            {strapline}
          </p>
          <div
            data-tiimg=""
            className="relative mt-8 aspect-[16/10] flex-none overflow-hidden rounded-[10px] bg-[#E8E1D6] shadow-[0_24px_50px_rgba(9,44,44,.16)]"
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 920px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}

function TripleImpact() {
  return (
    <section data-sec="" className="bg-z-ivory pt-[120px] pb-20">
      <Container>
        <div data-reveal="" className="max-w-[760px]">
          <Eyebrow color="#114747">The Core Purpose of Zariya Agro</Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[58px] leading-[1.05] font-normal text-z-deep">
            <b>The Triple Impact Model.</b>
          </h2>
          <p className="mt-[22px] text-[19.5px] leading-[1.85]" style={{ color: INK }}>
            By building a sustainable, safe-food system, Zariya Agro is committed to three clear
            and lasting changes — for your family, for the nation, and for the farmers who feed us.
          </p>
        </div>

        <div className="mt-14">
          <ImpactRow
            number="01"
            audience="For Your Family"
            title="Family Health: Safe Food Assurance"
            strapline="Safe Food · Healthy Family · Healthy Society"
            image="/assets/media/family-basket.jpg"
            alt="A family holding a basket of freshly harvested vegetables"
          >
            <p className={BODY} style={{ color: INK }}>
              Look around today: diabetes, kidney disease and cancer are rising in families
              everywhere because of adulterated, unsafe food. City life makes it almost impossible
              to find a reliable source of safe food — so every day, without choosing to, we put
              this slow poison on our children’s plates.
            </p>
            <p className={BODY} style={{ color: INK }}>
              Unsafe food doesn’t only cost health. Every year it quietly drains lakhs from
              families through medical bills and lost productivity. Zariya Agro brings professional
              management to secure a lasting, 100% safe and nutritious food supply.
            </p>
            <p className="mt-2 text-[26px] font-normal text-z-green italic">
              Safe Food Means Healthy Life.
            </p>
          </ImpactRow>

          <ImpactRow
            number="02"
            audience="For Our Farmers"
            title="Farmer Livelihoods: Raising the Lives of Those Who Grow"
            strapline="When farmers thrive, farming thrives — and so does our economy."
            image="/assets/agro/farmer.jpg"
            alt="A local partner farmer in his field"
          >
            <p className={BODY} style={{ color: INK }}>
              Despite back-breaking work, our farmers rarely get a fair price. Middlemen
              exploitation and lack of modern support are pushing them away from farming. Through
              this model, you play a direct role in improving a farmer’s life — with seven concrete
              supports:
            </p>
            <div className="border-b border-solid border-[rgba(9,44,44,.1)]">
              {SUPPORTS.map(([title, text], i) => (
                <div
                  key={title}
                  className="grid grid-cols-[34px_1fr] gap-[14px] border-t border-solid border-[rgba(9,44,44,.1)] py-[18px]"
                >
                  <span className="text-[22px] text-z-green">{i + 1}.</span>
                  <div>
                    <p className="text-[18.5px] font-semibold text-z-deep">{title}</p>
                    <p className="mt-1 text-[17px] leading-[1.7]" style={{ color: INK }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ImpactRow>

          <ImpactRow
            number="03"
            audience="For the Nation"
            title="National Economy: Cutting Waste, Driving Sustainable Growth"
            strapline="Reduce Waste · Add Value · Expand Markets · Strengthen the Economy"
            image="/assets/agro/sorting.jpg"
            alt="Workers sorting produce at the Zariya Agro processing centre"
          >
            <p className={BODY} style={{ color: INK }}>
              Nearly 19.4% of the crops our farmers grow — more than 2.1 crore tonnes a year — is
              lost on the way to market for lack of proper storage, processing and marketing.
              According to the FAO, that costs the country about USD 2.4 billion every year.
            </p>
            <div data-grid="" className="mt-2 mb-[26px] grid grid-cols-[repeat(3,1fr)] gap-[14px]">
              {NATION_CARDS.map(([title, text]) => (
                <div key={title} className="rounded-[10px] bg-white px-5 py-[22px]">
                  <p className="text-[18px] font-semibold text-z-deep">{title}</p>
                  <p className="mt-[6px] text-[16.5px] leading-[1.65]" style={{ color: INK }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mb-4 text-[14px] font-semibold tracking-[.18em] text-z-green uppercase">
              Our Workflow · Field to Export in 9 Steps
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[14px]">
              {WORKFLOW.map((group, g) => (
                <div
                  key={group.phase}
                  className="rounded-[10px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-[22px] pt-6 pb-[10px]"
                >
                  <div className="flex items-center justify-between gap-[10px]">
                    <span className="text-[14px] font-semibold tracking-[.18em] text-z-green uppercase">
                      {group.phase}
                    </span>
                    <span className="text-[22px] font-medium text-z-deep">{group.name}</span>
                  </div>
                  <div className="mt-[14px] mb-[6px] h-[2px] rounded-[2px] bg-[linear-gradient(90deg,#DFC1A5,rgba(223,193,165,.2))]" />
                  {group.steps.map((step, s) => {
                    const number = g * 3 + s + 1;
                    const last = s === group.steps.length - 1;
                    return (
                      <div
                        key={step}
                        className={`grid grid-cols-[40px_1fr] items-center gap-3 py-3 ${last ? "" : "border-b border-dashed border-[rgba(9,44,44,.14)]"}`}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-[16px] font-semibold ${number === 9 ? "bg-z-deep text-z-gold" : "bg-z-ivory text-z-green"}`}
                        >
                          {String(number).padStart(2, "0")}
                        </span>
                        <span className="text-[17px] font-semibold text-z-deep">{step}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </ImpactRow>
        </div>
      </Container>
    </section>
  );
}

function Vision() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
          <div data-reveal="">
            <Eyebrow color="#092C2C">The Vision</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
              A Farm That Feeds a Community.
            </h2>
            <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: INK }}>
              Zariya Agro is not a decorative garden. It is a working organic ecosystem — fields,
              orchards, livestock, and aquaculture — designed to supply the resort, nourish the
              community, and generate income for shareholders.
            </p>
            <p className="mt-[18px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              For families who have spent decades in cities, Zariya Agro offers something they may
              have forgotten was possible: food with a source they can see, soil they can walk, and
              a slower rhythm of life they can actually live.
            </p>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="relative min-h-[460px] overflow-hidden rounded-[8px] bg-[linear-gradient(150deg,#DFC1A5,#114747)] shadow-[0_30px_70px_rgba(9,44,44,.3)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_35%,rgba(223,193,165,.16),transparent_65%)]" />
            <Image
              src="/assets/agro/farm-campus.jpg"
              alt="Aerial view of the Zariya Agro industrial campus and surrounding farmland"
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

const CROPS = [
  ["Seasonal Produce", "Vegetables and fruits grown without synthetic chemicals, harvested at peak ripeness and on your table within hours."],
  ["Orchards", "Mango, jackfruit, citrus, and native fruit trees, grown the way Sylhet's soil intended."],
  ["Dairy & Livestock", "Ethically raised livestock and fresh dairy, managed to the highest standards of animal welfare and food safety."],
  ["Aquaculture", "Freshwater ponds producing fish for the resort kitchens and the wider community, integrated into the farm's natural water cycle."],
];

function WhatGrows() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[50px] font-normal text-white">
            What Grows at Zariya
          </h2>
        </div>
        <div data-grid="" className="mt-14 grid grid-cols-[repeat(4,1fr)] gap-6">
          {CROPS.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              data-delay={i ? String(i * 80) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-7 py-[34px]"
            >
              <h3 className="text-[24.5px] font-medium text-white">{title}</h3>
              <p className="mt-3 text-[16.5px] leading-[1.8]" style={{ color: WHITE }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const ECOSYSTEM = [
  "Responsible cultivation",
  "Selected farmers network",
  "Quality control",
  "Safe production guideline",
  "Cold storage support",
  "Packing & processing",
  "Community fresh supply",
  "Farm-to-family source",
];

function SafeFood() {
  return (
    <section
      data-sec=""
      className="border-t border-solid border-[rgba(9,44,44,.08)] bg-white py-[120px]"
    >
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-start gap-[70px]">
          <div data-reveal="">
            <Eyebrow color="#092C2C">Why We Are Building It</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
              Safe Food Is the
              <br />
              Foundation of Everything.
            </h2>
            <p className="mt-6 text-[19px] leading-[1.9]" style={{ color: INK }}>
              In almost every family today, someone is touched by diabetes, kidney disease, heart
              disease, or worse — and behind so much of it sits the food we are no longer sure we
              can trust. Chemical residue, adulteration, unsafe handling, an unknown source.
            </p>
            <p className="mt-[18px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              Most of us own a little land somewhere. But between city pressure, work, and family,
              cultivating safe food ourselves is simply not realistic. So we are not doing it alone
              — we are doing it together, organised and professionally managed. Zariya Agro is,
              first, for our own families, our parents, and our children.
            </p>
          </div>
          <div data-reveal="" data-delay="120">
            <p className="mb-[22px] text-[15.5px] font-semibold tracking-[.16em] text-z-green uppercase">
              A Trusted Food Ecosystem
            </p>
            <div className="grid grid-cols-[1fr_1fr] gap-[14px]">
              {ECOSYSTEM.map((item) => (
                <div
                  key={item}
                  className="rounded-[6px] border-l-2 border-solid border-z-gold bg-z-ivory px-5 py-[18px] text-[17px] font-medium text-z-green"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const MODEL_STEPS = [
  {
    src: "/assets/media/brinjal-training.jpg",
    alt: "A Zariya agronomist training a farmer on brinjal crop care",
    title: "Farmer Network & Training",
    text: "Selected farmers join the ecosystem with organic, ISO-oriented safe-production training.",
  },
  {
    src: "/assets/agro/loading.jpg",
    alt: "Crates of produce being loaded for transport",
    title: "Collection",
    text: "Produce is collected against market-demand-based crop planning.",
  },
  {
    src: "/assets/agro/cold-storage.jpg",
    alt: "Produce kept fresh inside the cold-storage facility",
    title: "Quality & Cold Storage",
    text: "Every batch is quality-checked and held in cold-storage support.",
  },
  {
    src: "/assets/agro/packaging.jpg",
    alt: "Vegetables being weighed and packed for market",
    title: "Packing & Processing",
    text: "Food is packed and processed to premium and export standards.",
  },
  {
    src: "/assets/agro/export.jpg",
    alt: "Packed produce prepared for export",
    title: "Markets",
    text: "Delivered to community, resort, premium buyers and export channels.",
  },
];

const HARVEST_REACH = [
  "Zariyan Community Members",
  "Zariya Resort Guests",
  "Farm-Fresh Dining",
  "Premium Local Buyers",
  "Export-Oriented Market",
];

function TheModel() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            The Model
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
            From Farm to Community to Export.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[19px] leading-[1.85]" style={{ color: WHITE }}>
            Zariya Agro is an integrated ecosystem — our own farm plus a structured network of
            selected local farmers, moving produce through one organised, quality-controlled chain.
          </p>
        </div>
        <div data-grid="" className="mt-[60px] grid grid-cols-[repeat(5,1fr)] gap-4">
          {MODEL_STEPS.map((step, i) => (
            <div
              key={step.title}
              data-reveal=""
              data-delay={i ? String(i * 80) : undefined}
              className="overflow-hidden rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-[22px] py-[30px]"
            >
              <div className="relative mx-[-22px] mt-[-30px] mb-[22px] aspect-[4/3] overflow-hidden bg-[#0d3a38]">
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, 250px"
                  className="object-cover"
                />
              </div>
              <span className="text-[28px] text-z-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-[10px] text-[22px] font-medium text-white">{step.title}</h3>
              <p className="mt-[10px] text-[16px] leading-[1.7]" style={{ color: WHITE }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <div data-reveal="" className="mt-[54px] text-center">
          <p className="mb-[22px] text-[14px] font-semibold tracking-[.18em] text-z-gold uppercase">
            Where the Harvest Reaches
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {HARVEST_REACH.map((item) => (
              <span
                key={item}
                className="rounded-[40px] border border-solid border-[rgba(223,193,165,.4)] px-6 py-3 text-[16.5px] text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MarketFit() {
  const stat = "text-[40px] font-normal text-white";
  const statLabel = "text-[17.5px]";
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
          <div data-reveal="">
            <Eyebrow color="#092C2C">Fit-Market Matching</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[46px] leading-[1.12] font-normal text-z-deep">
              We Grow What the Market Truly Wants.
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              Zariya Agro doesn&apos;t farm at random. We prioritise crops with real market demand,
              strong price value, and export potential — guided by the international buyer insight
              of the Zariya Global Community.
            </p>
            <p className="mt-[18px] text-[17.5px] leading-[1.85]" style={{ color: INK }}>
              With proper compliance, documentation and approvals, export-category produce may also
              qualify for Bangladesh Government export incentives, subject to policy eligibility.
            </p>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="rounded-[14px] border-t-[3px] border-solid border-z-gold bg-z-deep px-[46px] py-[52px]"
          >
            <p className="text-[14px] font-semibold tracking-[.18em] text-z-gold uppercase">
              Network Growth — Illustrative
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <span className={stat}>2,000</span>
              <span className={statLabel} style={{ color: WHITE }}>
                selected farmers
              </span>
            </div>
            <div className="my-5 h-px bg-[rgba(223,193,165,.2)]" />
            <div className="mb-5 flex flex-wrap items-baseline gap-4">
              <span className={stat}>TK 5 Lac</span>
              <span className={statLabel} style={{ color: WHITE }}>
                avg. product value / farmer / year
              </span>
            </div>
            <div className="mt-[10px] rounded-[10px] bg-z-green px-7 py-[26px]">
              <p className="text-[15.5px] tracking-[.04em] text-z-gold uppercase">
                Yearly Collection Potential
              </p>
              <p className="mt-2 text-[48px] font-normal text-white">TK 100 Crore</p>
            </div>
            <p className="mt-[18px] text-[15px] leading-[1.7]" style={{ color: WHITE }}>
              Illustrative scenario only. Actual figures depend on network growth, crop selection,
              market demand and operational performance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const SHARE_CARDS = [
  {
    title: "1 Decimal Freehold",
    text: "Genuine, heritable farmland registered in your name — not a lease, not a token.",
    icon: (
      <>
        <path d="M4 20V9l8-5 8 5v11" stroke="#114747" strokeWidth="1.3" />
        <path d="M9 20v-6h6v6" stroke="#092C2C" strokeWidth="1.3" />
      </>
    ),
  },
  {
    title: "Production Income",
    text: "A share of the farm's harvest income, distributed to Agro shareholders.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="#114747" strokeWidth="1.3" />
        <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4" stroke="#092C2C" strokeWidth="1.3" />
      </>
    ),
  },
  {
    title: "Resort Stay Included",
    text: "An annual complimentary 5-star stay at Zariya Resort, plus farm-fresh food access year-round.",
    icon: (
      <>
        <path d="M12 3 4 8v6c0 4 3 6 8 7 5-1 8-3 8-7V8l-8-5Z" stroke="#114747" strokeWidth="1.3" />
        <path d="M9 12l2 2 4-4" stroke="#092C2C" strokeWidth="1.3" />
      </>
    ),
  },
];

function AgroShareCards() {
  return (
    <section data-sec="" className="bg-white py-[120px]">
      <div data-container="" className="mx-auto max-w-[1100px] px-12">
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow color="#092C2C" rule={30} center>
            The Agro Share
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[48px] font-normal text-z-deep">
            Own a Decimal. Reap for Generations.
          </h2>
        </div>
        <div data-grid="" className="mt-[50px] grid grid-cols-[repeat(3,1fr)] gap-6">
          {SHARE_CARDS.map((card, i) => (
            <div
              key={card.title}
              data-reveal=""
              data-delay={i ? String(i * 120) : undefined}
              className="rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-8 py-[38px] text-center transition-[transform,box-shadow,border-color] duration-[.35s] ease-[ease] hover:border-z-gold hover:[box-shadow:0_24px_50px_rgba(9,44,44,.12)] hover:[transform:translateY(-6px)]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {card.icon}
              </svg>
              <h3 className="mt-[18px] text-[24px] font-medium text-z-green">{card.title}</h3>
              <p className="mt-[10px] text-[17px] leading-[1.8]" style={{ color: INK }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div data-reveal="" className="mt-10 text-center">
          <Link
            href="/ownership"
            className="z-btn z-btn-green-lift px-9 py-[17px] text-[15.5px] tracking-[.06em]"
          >
            View Agro Share Pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  ["Production Benefit", "TK 50k – TK 1 Lac", "Projected yearly farm-production benefit per share owner, based on performance and market demand."],
  ["Food Saving", "up to TK 1.2 Lac", "Farm-direct supply removes middleman cost — potential yearly saving on a family's food budget."],
  ["Health Protection", "TK 50k – TK 1 Lac", "Safe-food habit as long-term protection against the medical expenses a household carries each year."],
  ["Productivity Gain", "TK 1 Lac+", "Fewer sick days for earning members — protecting income, focus and professional performance."],
  ["Educational Benefit", "Healthier Kids", "Better attendance, focus and confidence — children who fall sick less learn and grow more."],
  ["Emotional Benefit", "2N / 3D Stay", "An annual family stay (~TK 30,000 value) in Zariya's 5-star resort — nature, fresh food, real time together."],
];

function LifeAdvantage() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-col items-center text-center">
          <Eyebrow rule={30} center>
            More Than Income
          </Eyebrow>
          <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
            A Life Advantage for the Whole Family.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[19px] leading-[1.85]" style={{ color: WHITE }}>
            Ownership returns far more than a harvest cheque. The figures below are illustrative
            estimates of the everyday value a Zariya Agro Share can create for a household.
          </p>
        </div>
        <div data-grid="" className="mt-[60px] grid grid-cols-[repeat(3,1fr)] gap-6">
          {BENEFITS.map(([tag, figure, text], i) => (
            <div
              key={tag}
              data-reveal=""
              data-delay={i % 3 ? String((i % 3) * 80) : undefined}
              className="rounded-[12px] border-t-2 border-solid border-z-gold bg-z-green px-[34px] py-[38px]"
            >
              <p className="text-[14px] font-semibold tracking-[.14em] text-z-gold uppercase">{tag}</p>
              <p className="mt-[14px] text-[38px] font-normal text-white">{figure}</p>
              <p className="mt-[14px] text-[17px] leading-[1.8]" style={{ color: WHITE }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const CLIPS = [
  ["agro-aerial", "The Agro Campus"],
  ["agro-training", "Farmer Training"],
  ["agro-packing", "Quality & Packing"],
  ["agro-market", "The Farm Market"],
];

function AgroInMotion() {
  return (
    <section data-sec="" className="bg-z-deep py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>Zariya Agro in Motion</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-white">
              From Field to Family, Every Day.
            </h2>
          </div>
          <VideosToggle className="z-btn z-btn-gold-line inline-flex items-center gap-[10px] rounded-[40px] px-5 py-[11px] text-[14px] tracking-[.06em]" />
        </div>
        <div data-grid="" className="mt-[50px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-4">
          {CLIPS.map(([name, caption]) => (
            <figure
              key={name}
              data-reveal=""
              className="relative m-0 aspect-[9/14] overflow-hidden rounded-[10px] bg-[#0d3a38]"
            >
              <SectionVideo name={name} />
              <figcaption className="absolute right-0 bottom-0 left-0 bg-[linear-gradient(180deg,transparent,rgba(9,44,44,.9))] px-[22px] pt-[60px] pb-5 text-[17px] font-semibold text-white">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

const GALLERY = [
  {
    src: "/assets/agro/hero-2.jpg",
    alt: "A Zariya trainer demonstrating vegetable farming to local farmers",
    span: "col-span-2 row-span-2",
    sizes: "(max-width: 920px) 100vw, 620px",
  },
  { src: "/assets/agro/seedling.jpg", alt: "Young seedlings growing in the nursery" },
  { src: "/assets/agro/market.jpg", alt: "The Zariya farm market stocked with fresh produce" },
  {
    src: "/assets/media/brinjal-training.jpg",
    alt: "A Zariya trainer explaining brinjal crop care to a group of farmers",
    span: "col-span-2",
    sizes: "(max-width: 920px) 100vw, 620px",
  },
  {
    src: "/assets/media/tea-harvest-aerial.jpg",
    alt: "Aerial view of tea pickers harvesting on the hillside estate",
    span: "col-span-2",
    sizes: "(max-width: 920px) 100vw, 620px",
  },
  { src: "/assets/media/drip-irrigation.jpg", alt: "Drip irrigation lines watering crop rows" },
  { src: "/assets/media/tomato-inspection.jpg", alt: "A farmer inspecting ripe tomatoes on the vine" },
];

function Gallery() {
  return (
    <section data-sec="" className="bg-z-ivory py-[120px]">
      <Container>
        <div data-reveal="" className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow color="#114747">Life at Zariya Agro</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[50px] leading-[1.1] font-normal text-z-deep">
              See Where Your Food Begins.
            </h2>
          </div>
          <Link
            href="/visit"
            className="cursor-pointer border-b-[1.5px] border-solid border-z-deep px-[2px] py-[6px] text-[15.5px] font-semibold tracking-[.06em] text-z-deep uppercase transition-[color,padding,background,border-color] duration-300 ease-[ease] hover:border-b-z-gold hover:text-z-green"
          >
            Book a Farm Visit →
          </Link>
        </div>
        <div
          data-grid=""
          className="mt-[50px] grid auto-rows-[240px] grid-cols-[repeat(4,minmax(0,1fr))] gap-4"
        >
          {GALLERY.map((photo) => (
            <div
              key={photo.src}
              data-reveal=""
              className={`relative overflow-hidden rounded-[8px] bg-[#E8E1D6] ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes ?? "(max-width: 920px) 100vw, 310px"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Closing() {
  return (
    <section data-sec="" className="bg-z-gold py-[104px]">
      <div data-container="" className="mx-auto max-w-[980px] px-12 text-center">
        <h2 data-reveal="" data-h2="" className="text-[54px] leading-[1.18] font-normal text-z-deep">
          Own Nature. Eat Fresh.
          <br />
          Create Income. Build Legacy.
        </h2>
        <div data-reveal="" data-delay="120" className="mt-[42px] flex flex-wrap justify-center gap-4">
          <Link
            href="/visit"
            className="z-btn z-btn-green px-9 py-[17px] text-[15.5px] tracking-[.06em] hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.12)]"
          >
            Book a Visit
          </Link>
          <Link
            href="/ownership"
            className="z-btn z-btn-dark-line px-9 py-[17px] text-[15.5px] tracking-[.06em]"
          >
            View Ownership &amp; Income
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AgroPage() {
  return (
    <>
      <Hero />
      <TripleImpact />
      <Vision />
      <WhatGrows />
      <SafeFood />
      <TheModel />
      <MarketFit />
      <AgroShareCards />
      <LifeAdvantage />
      <AgroInMotion />
      <Gallery />
      <Closing />
    </>
  );
}
