import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TownshipHero } from "@/components/township/TownshipHero";
import { LotusTower } from "@/components/township/LotusTower";
import { FourWorlds } from "@/components/township/FourWorlds";
import { OwnershipInventory } from "@/components/township/OwnershipInventory";
import { EverythingWithinReach } from "@/components/township/EverythingWithinReach";

export const metadata: Metadata = {
  title: "Township & Amenities — Zariya Living",
  description:
    "Every road, every garden, every sightline — designed for peace that lasts a hundred years. Explore the Lotus Tower, the four masterplan zones, ownership inventory, and amenities.",
};

export default function TownshipPage() {
  return (
    <>
      <Navbar />
      <main>
        <TownshipHero />
        <LotusTower />
        <FourWorlds />
        <OwnershipInventory />
        <EverythingWithinReach />
      </main>
      <Footer />
    </>
  );
}
