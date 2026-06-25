import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pillars } from "@/components/sections/Pillars";
import { Resort } from "@/components/sections/Resort";
import { Agro } from "@/components/sections/Agro";
import { Villas } from "@/components/sections/Villas";
import { Privileges } from "@/components/sections/Privileges";
import { Membership } from "@/components/sections/Membership";
import { Community } from "@/components/sections/Community";
import { FounderLetter } from "@/components/sections/FounderLetter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Projects } from "@/components/sections/Projects";
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
        <Resort />
        <Agro />
        <Villas />
        <Privileges />
        <Membership />
        <Community />
        <FounderLetter />
        <Testimonials />
        <Projects />
        <BookVisit />
      </main>
      <Footer />
    </>
  );
}
