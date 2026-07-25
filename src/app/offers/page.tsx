import type { Metadata } from "next";
import { OffersHeader } from "@/components/offers/OffersHeader";
import { OffersHero } from "@/components/offers/OffersHero";
import { TheOffer } from "@/components/offers/TheOffer";
import { AgroIncludes, ResortIncludes, Returns, SecurityTimeline } from "@/components/offers/OffersDetails";
import { SpecialBonus, PaymentPlan } from "@/components/offers/OffersBonusPayment";
import { OffersApply, OffersClosing } from "@/components/offers/OffersApply";
import { OffersFooter } from "@/components/offers/OffersFooter";

export const metadata: Metadata = {
  title: "The Founding 10 Program — Zariya Living",
  description:
    "A private invitation for the Amra-Amra community: one investment, two ownerships, a protected exit. Only 10 founding slots.",
  // Private, QR-only page — keep it out of search engines.
  robots: { index: false, follow: false },
};

export default function OffersPage() {
  return (
    <main className="bg-teal-deep">
      <OffersHeader />
      <OffersHero />
      <TheOffer />
      <AgroIncludes />
      <ResortIncludes />
      <Returns />
      <SecurityTimeline />
      <SpecialBonus />
      <PaymentPlan />
      <OffersApply />
      <OffersClosing />
      <OffersFooter />
    </main>
  );
}
