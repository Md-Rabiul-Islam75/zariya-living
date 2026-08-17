import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pillars } from "@/components/sections/Pillars";
import { LagoonVilla } from "@/components/sections/LagoonVilla";
import { GlobalLifestyle } from "@/components/sections/GlobalLifestyle";
import { Privileges } from "@/components/sections/Privileges";
import { Membership } from "@/components/sections/Membership";
import { FounderLetter } from "@/components/sections/FounderLetter";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookVisit } from "@/components/sections/BookVisit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Pillars />
        <LagoonVilla />
        <GlobalLifestyle />
        <Privileges />
        <Membership />
        <FounderLetter />
        <Testimonials />
        <BookVisit />
      </main>
      <Footer />
    </>
  );
}
