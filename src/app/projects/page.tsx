import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsExpanding } from "@/components/projects/ProjectsExpanding";
import { ProjectsNotify } from "@/components/projects/ProjectsNotify";

export const metadata: Metadata = {
  title: "Our Projects — Zariya Living",
  description:
    "One philosophy. Four landscapes. Explore Zariya's flagship Sylhet Resort & Villas and upcoming projects in Niladri, Noakhali, and Cox's Bazar.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsExpanding />
        <ProjectsNotify />
      </main>
      <Footer />
    </>
  );
}
