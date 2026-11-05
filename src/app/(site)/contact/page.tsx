import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/site/LeadForm";
import { Container, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Zariya — Let's Talk.",
  description:
    "Talk to Zariya Living. Office: 32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230. Phone +880 1907 070640–43, info@zariyaliving.com, or WhatsApp.",
};

const INK = "rgba(9,44,44,.88)";

const LABEL = "text-[14px] font-semibold tracking-[.12em] text-z-deep uppercase";
const DETAIL_LINK = "mt-2 block text-[18px] text-[rgba(9,44,44,.88)] hover:text-z-deep";
const FIELD_LABEL = "text-[14px] font-semibold tracking-[.08em] text-z-green uppercase";
const TEXTAREA =
  "resize-y rounded-[4px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-4 py-[13px] text-[17.5px] text-z-deep outline-none focus:border-z-deep";
const FIELD = `${TEXTAREA} leading-[21px]`;

function GetInTouch() {
  return (
    <div data-reveal="">
      <h2 className="text-[38px] font-normal text-z-deep">Get in Touch</h2>
      <div className="mt-[30px] flex flex-col gap-[26px]">
        <div>
          <p className={LABEL}>Office</p>
          <p className="mt-2 text-[18px] leading-[1.7]" style={{ color: INK }}>
            32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230, Bangladesh
          </p>
        </div>
        <div>
          <p className={LABEL}>Phone</p>
          <a href="tel:+8801907070640" className={DETAIL_LINK}>
            +880 1907 070640–43
          </a>
        </div>
        <div>
          <p className={LABEL}>Email</p>
          <a href="mailto:info@zariyaliving.com" className={DETAIL_LINK}>
            info@zariyaliving.com
          </a>
        </div>
        <div>
          <p className={LABEL}>WhatsApp</p>
          <a href="https://wa.me/8801907070640" target="_blank" rel="noopener" className={DETAIL_LINK}>
            Message us directly
          </a>
        </div>
      </div>
      <div className="mt-[34px] flex flex-col gap-3">
        <div className="h-[260px] overflow-hidden rounded-[10px] border border-solid border-[rgba(9,44,44,.12)] bg-z-green">
          <iframe
            title="Map: Zariya Living office, Sector 12, Uttara, Dhaka"
            src="https://www.google.com/maps?q=32+Sonargaon+Janapath+Road,+Sector+12,+Uttara,+Dhaka+1230&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full border-0"
          />
        </div>
        <a
          href="https://maps.app.goo.gl/mtw2SC8xSgiMw6xJ9"
          target="_blank"
          rel="noopener"
          className="self-start border-b-[1.5px] border-solid border-z-deep py-1 text-[15px] font-semibold tracking-[.06em] text-z-deep uppercase hover:border-z-gold hover:text-z-green"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}

function SendMessage() {
  return (
    <div
      data-reveal=""
      data-delay="120"
      className="rounded-[16px] border border-solid border-[rgba(9,44,44,.1)] bg-white px-[46px] py-12"
    >
      <h2 className="text-[38px] font-normal text-z-deep">Send a Message</h2>
      <LeadForm kind="contact" className="relative mt-7 flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>Full Name</span>
          <input name="name" aria-required="true" type="text" placeholder="Your name" className={FIELD} />
        </label>
        <div data-2col="" className="grid grid-cols-[1fr_1fr] gap-5">
          <label className="flex flex-col gap-2">
            <span className={FIELD_LABEL}>Email</span>
            <input
              name="email"
              aria-required="true"
              type="email"
              placeholder="you@email.com"
              className={FIELD}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className={FIELD_LABEL}>Phone</span>
            <input name="phone" aria-required="true" type="text" placeholder="+880 …" className={FIELD} />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>Message</span>
          <textarea name="message" rows={5} placeholder="How can we help?" className={TEXTAREA} />
        </label>
        <button
          type="submit"
          className="z-btn z-btn-gold self-start px-8 py-[15px] text-[15.5px] tracking-[.05em]"
        >
          Send Message
        </button>
      </LeadForm>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        height="h-[54vh] min-h-[400px]"
        background="radial-gradient(120% 100% at 50% 30%,#13524a 0%,#0d3a38 50%,#092C2C 100%)"
        overlay="linear-gradient(180deg,rgba(9,44,44,.7) 0%,rgba(9,44,44,.22) 20%,rgba(9,44,44,0) 38%),linear-gradient(90deg,rgba(9,44,44,.85) 0%,rgba(9,44,44,.55) 42%,rgba(9,44,44,.15) 75%,rgba(9,44,44,.08) 100%),linear-gradient(180deg,rgba(9,44,44,0) 45%,rgba(9,44,44,.88) 100%)"
        media={
          <>
            <Image
              src="/images/project-noakhali.jpeg"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_85%,rgba(223,193,165,.18),transparent_60%)]" />
          </>
        }
      >
        <h1 data-reveal="" data-h1="" className="text-[68px] leading-[1.04] font-normal text-white">
          Let&apos;s Talk.
        </h1>
        <p data-reveal="" data-delay="120" className="mt-4 text-[24.5px] font-normal text-z-gold italic">
          A conversation, whenever you&apos;re ready.
        </p>
      </PageHero>
      <section data-sec="" className="bg-white py-[110px]">
        <Container>
          <div data-2col="" className="grid grid-cols-[.9fr_1.1fr] gap-[60px]">
            <GetInTouch />
            <SendMessage />
          </div>
        </Container>
      </section>
    </>
  );
}
