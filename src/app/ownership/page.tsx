import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OwnershipHero } from "@/components/ownership/OwnershipHero";
import { OwnershipOptions } from "@/components/ownership/OwnershipOptions";
import { PaymentPlan } from "@/components/ownership/PaymentPlan";
import { CompareOptions } from "@/components/ownership/CompareOptions";
import { TrustProtected } from "@/components/ownership/TrustProtected";

export const metadata: Metadata = {
  title: "Ownership & Income — Zariya Living",
  description:
    "Transparent, protected, built to grow. Explore Zariya's multi-asset ownership — Lagoon Villa, Resort, and Agro shares — with a staged payment plan and money-back guarantee.",
};

export default function OwnershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <OwnershipHero />
        <OwnershipOptions />
        <PaymentPlan />
        <CompareOptions />
        <TrustProtected />
      </main>
      <Footer />
    </>
  );
}
