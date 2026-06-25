import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VisitHero } from "@/components/visit/VisitHero";
import { ByAirTour } from "@/components/visit/ByAirTour";
import { ReserveVisit } from "@/components/visit/ReserveVisit";
import { QuestionsAnswered } from "@/components/visit/QuestionsAnswered";

export const metadata: Metadata = {
  title: "Book a Visit — Zariya Living | Stand on the Land",
  description:
    "No brochure can do this place justice. Reserve your visit — confirmed bookings include a complimentary By-Air Sylhet Experience Tour.",
};

export default function VisitPage() {
  return (
    <>
      <Navbar />
      <main>
        <VisitHero />
        <ByAirTour />
        <ReserveVisit />
        <QuestionsAnswered />
      </main>
      <Footer />
    </>
  );
}
