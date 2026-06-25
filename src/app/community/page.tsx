import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityIntro } from "@/components/community/CommunityIntro";
import { MembershipMeans } from "@/components/community/MembershipMeans";
import { CommunityStories } from "@/components/community/CommunityStories";
import { JoinZariyans } from "@/components/community/JoinZariyans";

export const metadata: Metadata = {
  title: "Community — Zariya Living | You Don't Just Own Here. You Belong Here.",
  description:
    "The Zariyans' Global Community — a network of non-resident Bangladeshi families, professionals, and retirees bound by values, not just geography.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <CommunityHero />
        <CommunityIntro />
        <MembershipMeans />
        <CommunityStories />
        <JoinZariyans />
      </main>
      <Footer />
    </>
  );
}
