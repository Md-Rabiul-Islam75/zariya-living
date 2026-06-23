import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { WhatWeBelieve } from "@/components/explore/WhatWeBelieve";
import { MeansThePath } from "@/components/explore/MeansThePath";
import { BuiltToLast } from "@/components/explore/BuiltToLast";
import { VoicesFromPath } from "@/components/explore/VoicesFromPath";
import { WhatsHappening } from "@/components/explore/WhatsHappening";
import { WalkThePath } from "@/components/explore/WalkThePath";

export const metadata: Metadata = {
  title: "Explore — Zariya Living | Faith. Nature. Legacy.",
  description:
    "The philosophy behind everything we build. Zariya means 'The Path' — a faith-aligned, nature-rooted community in Sylhet, built to last 100 years.",
};

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main>
        <ExploreHero />
        <WhatWeBelieve />
        <MeansThePath />
        <BuiltToLast />
        <VoicesFromPath />
        <WhatsHappening />
        <WalkThePath />
      </main>
      <Footer />
    </>
  );
}
