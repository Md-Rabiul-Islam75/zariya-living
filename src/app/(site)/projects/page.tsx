import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/site/HeroVideo";
import { LeadForm } from "@/components/site/LeadForm";
import { Container, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Our Projects",
  description:
    "One philosophy. Four landscapes. A lifetime of belonging. The flagship Zariya Sylhet Resort & Villas, with Niladri, Noakhali and Cox's Bazar coming soon.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

const PROJECTS = [
  {
    title: "Zariya Sylhet Resort & Villas",
    place: "NANDIRGAON, GOWAINGHAT",
    text: "The flagship. A 5-star resort, organic farm, and private villa community — set against the tea gardens and lagoons of Sylhet. This is where the path begins.",
    image: "/images/villa-sunset.png",
    alt: "Zariya lagoon villas along the water at sunset",
    backdrop: "radial-gradient(120% 100% at 60% 30%,#13524a,#092C2C)",
    active: true,
  },
  {
    title: "Niladri",
    place: "Tahirpur, Sunamganj",
    text: "Where the hills meet the water. Niladri is Zariya's next chapter — a sanctuary nestled into one of Bangladesh's most dramatic natural landscapes.",
    image: "/images/project-niladri.jpg",
    alt: "A green lake among the hills of Tahirpur, Sunamganj",
    backdrop: "linear-gradient(150deg,#114747,#0d3a38)",
  },
  {
    title: "Noakhali",
    place: "Coconut Groves",
    text: "Sun, soil, and the quiet life. Zariya Noakhali will bring the community model to the green calm of the coconut belt.",
    image: "/images/project-noakhali.jpeg",
    alt: "Tall coconut palms above green groves in Noakhali",
    backdrop: "linear-gradient(150deg,#13524a,#114747)",
  },
  {
    title: "Cox's Bazar",
    place: "Coastal Belt",
    text: "Where the world's longest beach meets a community built on values. Cox's Bazar, reimagined for the family that wants more than a holiday.",
    image: "/images/project-coxsbazar.jpg",
    alt: "A wooden boat on the sand beside the sea at Cox's Bazar",
    backdrop: "linear-gradient(150deg,#0d3a38,#13524a)",
  },
];

function ProjectCards() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] gap-[30px]">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              data-reveal=""
              data-delay={i % 2 ? "120" : undefined}
              className="overflow-hidden rounded-[12px] border border-solid border-[rgba(9,44,44,.1)] bg-white transition-[transform,box-shadow] duration-[.35s] ease-[ease] hover:[box-shadow:0_28px_56px_rgba(9,44,44,.14)] hover:[transform:translateY(-5px)]"
            >
              <div className="relative h-[300px] overflow-hidden" style={{ background: project.backdrop }}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, 600px"
                  className="object-cover"
                />
                <span
                  className={
                    project.active
                      ? "absolute top-[18px] left-5 z-[1] rounded-[20px] bg-z-gold px-[14px] py-[6px] text-[14px] font-semibold tracking-[.1em] text-z-deep uppercase"
                      : "absolute top-[18px] left-5 z-[1] rounded-[20px] border border-solid border-z-gold bg-[rgba(9,44,44,.7)] px-[14px] py-[6px] text-[14px] font-semibold tracking-[.1em] text-z-gold uppercase"
                  }
                >
                  {project.active ? "Active" : "Coming Soon"}
                </span>
              </div>
              <div className="px-9 py-[38px]">
                <h3 className="text-[30px] font-medium text-z-green">{project.title}</h3>
                <p className="mt-[6px] text-[15px] font-semibold tracking-[.08em] text-z-deep uppercase">
                  {project.place}
                </p>
                <p className="mt-4 text-[18px] leading-[1.85]" style={{ color: INK }}>
                  {project.text}
                </p>
                {project.active ? (
                  <Link
                    href="/projects/sylhet"
                    className="z-btn mt-6 bg-z-green px-7 py-[14px] text-[15px] tracking-[.05em] text-white hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.22)]"
                  >
                    View Project
                  </Link>
                ) : (
                  <a
                    href="#notify"
                    className="z-btn z-btn-dark-line mt-6 px-[26px] py-[13px] text-[15px] tracking-[.05em] text-z-green hover:text-white"
                  >
                    Get Notified
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Expanding() {
  return (
    <section data-sec="" className="bg-z-deep py-[110px]">
      <div data-reveal="" data-container="" className="mx-auto max-w-[860px] px-12 text-center">
        <h2 data-h2="" className="text-[50px] font-normal text-white">
          Zariya Is Expanding.
        </h2>
        <p className="mt-[26px] text-[19px] leading-[1.9]" style={{ color: WHITE }}>
          Every new Zariya project is thoughtfully integrated into its landscape. We do not build
          everywhere. We build where the land and the community deserve each other.
        </p>
        <p className="mt-6 text-[15.5px] text-z-gold italic">
          All visuals and project descriptions are conceptual representations only and are subject
          to change.
        </p>
      </div>
    </section>
  );
}

function Notify() {
  return (
    <section id="notify" data-sec="" className="scroll-mt-[84px] bg-white py-24">
      <div data-reveal="" data-container="" className="mx-auto max-w-[720px] px-12 text-center">
        <h2 data-h2="" className="text-[44px] font-normal text-z-deep">
          Be First to Know.
        </h2>
        <p className="mt-[14px] text-[18.5px] leading-[1.8]" style={{ color: INK }}>
          Register your interest for upcoming Zariya projects.
        </p>
        <LeadForm kind="projects-notify" className="relative mt-[30px] flex flex-wrap justify-center gap-[14px]">
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
            className="z-btn z-btn-green px-7 py-[15px] text-[15.5px] tracking-[.05em] whitespace-nowrap hover:[box-shadow:inset_0_0_0_200px_rgba(255,255,255,.22)]"
          >
            Notify Me About New Projects
          </button>
        </LeadForm>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        height="h-[70vh] min-h-[500px]"
        background="radial-gradient(120% 100% at 60% 30%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_25%_80%,rgba(223,193,165,.2),transparent_60%)]" />
            <HeroVideo name="projects-hero" />
          </>
        }
      >
        <h1
          data-reveal=""
          data-h1=""
          className="text-[78px] leading-[1.04] font-normal text-white [text-shadow:0_2px_24px_rgba(9,44,44,.55)]"
        >
          Our Projects
        </h1>
        <p data-reveal="" data-delay="120" className="mt-[18px] text-[25px] font-normal text-z-gold italic">
          One philosophy. Four landscapes. A lifetime of belonging.
        </p>
      </PageHero>
      <ProjectCards />
      <Expanding />
      <Notify />
    </>
  );
}
