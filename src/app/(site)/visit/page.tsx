import type { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { HeroVideo } from "@/components/site/HeroVideo";
import { LeadForm } from "@/components/site/LeadForm";
import {
  Container,
  Eyebrow,
  FORM_FIELD,
  FORM_LABEL,
  FORM_TEXTAREA,
  PageHero,
} from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Stand on the Land.",
  description:
    "Book a visit to Zariya. Confirmed bookings include a complimentary By-Air Sylhet Experience Tour: walk the masterplan, taste the farm, and meet the team.",
};

const INK = "rgba(9,44,44,.88)";
const WHITE = "rgba(255,255,255,.88)";

const TOUR_INCLUDES = [
  "Guided walk of the masterplan and the Tea Tower site",
  "A taste of Zariya Agro's farm-fresh hospitality",
  "A private consultation — no pressure, just clarity",
];

function ExperienceTour() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <Container>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] items-center gap-[60px]">
          <div data-reveal="">
            <Eyebrow color="#092C2C">The By-Air Experience Tour</Eyebrow>
            <h2 data-h2="" className="mt-[18px] text-[48px] leading-[1.1] font-normal text-z-deep">
              A Complimentary Journey, on Us.
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.9]" style={{ color: INK }}>
              Confirmed bookings include a complimentary By-Air Sylhet Experience Tour. We fly you
              in, host you at the land, walk you through the masterplan, and show you the Sylhet
              that inspired Zariya — its shrines, its tea gardens, its quiet beauty.
            </p>
            <div className="mt-[26px] flex flex-col gap-4">
              {TOUR_INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-[14px]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-[2px] flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" stroke="#092C2C" strokeWidth="1.3" />
                    <path d="M8 12l3 3 5-6" stroke="#092C2C" strokeWidth="1.3" />
                  </svg>
                  <p className="text-[17.5px] leading-[1.7]" style={{ color: INK }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="relative min-h-[440px] overflow-hidden rounded-[8px] bg-[linear-gradient(150deg,#114747,#092C2C)] shadow-[0_30px_70px_rgba(9,44,44,.3)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_35%,rgba(223,193,165,.16),transparent_65%)]" />
            <Image
              src="/images/sky-lounge.jpg"
              alt="The rooftop Sky Lounge among the tree canopy at night"
              fill
              sizes="(max-width: 920px) 100vw, 610px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { name: "phone", label: "Phone / WhatsApp", type: "text", placeholder: "+880 …" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "country", label: "Country of Residence", type: "text", placeholder: "e.g. United Kingdom" },
  { name: "visit_window", label: "Preferred Visit Window", type: "text", placeholder: "e.g. December 2026" },
  { name: "guests", label: "Number of Guests", type: "text", placeholder: "e.g. 2 adults" },
];

function ReserveVisit() {
  return (
    <section data-sec="" className="bg-z-deep py-[110px]">
      <div data-container="" className="mx-auto max-w-[1040px] px-12">
        <div data-reveal="" className="flex flex-col items-center text-center">
          <h2 data-h2="" className="text-[48px] font-normal text-white">
            Reserve Your Visit
          </h2>
          <p
            className="mx-auto mt-4 max-w-[50ch] text-[18.5px] leading-[1.8]"
            style={{ color: WHITE }}
          >
            Tell us a little about yourself and our team will arrange everything.
          </p>
        </div>
        <LeadForm kind="visit" data-reveal="" data-delay="120" className="relative mt-12">
          <div data-2col="" className="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-[30px]">
            {FIELDS.map((field) => (
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
          </div>
          <label className="mt-[30px] flex flex-col gap-[9px]">
            <span className={FORM_LABEL}>Anything you&apos;d like us to know?</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us what matters to you"
              className={FORM_TEXTAREA}
            />
          </label>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <button
              type="submit"
              className="z-btn z-btn-gold px-8 py-4 text-[15.5px] tracking-[.05em]"
            >
              Book a Site Visit
            </button>
            <button
              type="submit"
              className="z-btn z-btn-gold-line px-[30px] py-[15px] text-[15.5px] tracking-[.05em]"
            >
              Schedule a Private Call
            </button>
          </div>
        </LeadForm>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section data-sec="" className="bg-white py-[110px]">
      <div data-container="" className="mx-auto max-w-[880px] px-12">
        <div data-reveal="" className="text-center">
          <h2 data-h2="" className="text-[46px] font-normal text-z-deep">
            Questions, Answered
          </h2>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}

export default function VisitPage() {
  return (
    <>
      <PageHero
        height="h-[66vh] min-h-[480px]"
        background="radial-gradient(130% 100% at 50% 25%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.2) 22%,rgba(9,44,44,0) 40%),linear-gradient(90deg,rgba(9,44,44,.8) 0%,rgba(9,44,44,.5) 42%,rgba(9,44,44,.1) 75%),linear-gradient(180deg,rgba(9,44,44,0) 50%,rgba(9,44,44,.85) 100%)"
        paddingBottom="pb-[70px]"
        media={
          <>
            <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_50%_90%,rgba(223,193,165,.24),transparent_60%)]" />
            <HeroVideo name="visit-hero" />
          </>
        }
      >
        <Eyebrow data-reveal="" rule={46} track=".24em" className="mb-5">
          Book a Visit
        </Eyebrow>
        <h1 data-reveal="" data-h1="" className="text-[72px] leading-[1.04] font-normal text-white">
          Stand on the Land.
        </h1>
        <p
          data-reveal=""
          data-delay="120"
          className="mt-[18px] max-w-[46ch] text-[25px] font-normal text-z-gold italic"
        >
          No brochure can do this place justice. Come see it with your own eyes.
        </p>
      </PageHero>
      <ExperienceTour />
      <ReserveVisit />
      <Questions />
    </>
  );
}
