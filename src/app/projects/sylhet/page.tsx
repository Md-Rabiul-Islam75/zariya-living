import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SylhetHero } from "@/components/sylhet/SylhetHero";
import { SylhetProject } from "@/components/sylhet/SylhetProject";
import { ThreeExperiences } from "@/components/sylhet/ThreeExperiences";
import { ResortExperience } from "@/components/sylhet/ResortExperience";
import { RoomExperiences } from "@/components/sylhet/RoomExperiences";
import { Dining } from "@/components/sylhet/Dining";
import { SimpleCardGrid } from "@/components/sylhet/SimpleCardGrid";
import { SplitFeature } from "@/components/sylhet/SplitFeature";
import { SylhetClosing } from "@/components/sylhet/SylhetClosing";
import { SYLHET } from "@/lib/sylhet-data";

export const metadata: Metadata = {
  title: "Zariya Sylhet Resort & Villas — The Flagship Project",
  description:
    "Where the lotus tower meets the lagoon. The flagship Zariya Sylhet Resort & Villas — a five-star resort, organic farm, and lagoon-villa community on one masterplan.",
};

export default function SylhetProjectPage() {
  return (
    <>
      <Navbar />
      <main>
        <SylhetHero />
        <SylhetProject />
        <ThreeExperiences />
        <ResortExperience />
        <RoomExperiences />
        <SimpleCardGrid eyebrow={SYLHET.wellness.eyebrow} title={SYLHET.wellness.title} cards={SYLHET.wellness.cards} columns={4} />
        <Dining />
        <SimpleCardGrid eyebrow={SYLHET.business.eyebrow} title={SYLHET.business.title} cards={SYLHET.business.cards} columns={3} />
        <SimpleCardGrid eyebrow={SYLHET.recreation.eyebrow} title={SYLHET.recreation.title} cards={SYLHET.recreation.cards} columns={3} dark />
        <SplitFeature
          id="agro"
          eyebrow={SYLHET.agro.eyebrow}
          title={SYLHET.agro.title}
          body={SYLHET.agro.body}
          image={SYLHET.agro.image}
          tags={SYLHET.agro.tags}
          cta={SYLHET.agro.cta}
          href={SYLHET.agro.href}
        />
        <SplitFeature
          id="lagoon"
          eyebrow={SYLHET.lagoon.eyebrow}
          title={SYLHET.lagoon.title}
          body={SYLHET.lagoon.body}
          image={SYLHET.lagoon.image}
          tags={SYLHET.lagoon.tags}
          cta={SYLHET.lagoon.cta}
          href={SYLHET.lagoon.href}
          dark
          imageLeft
        />
        <SylhetClosing />
      </main>
      <Footer />
    </>
  );
}
