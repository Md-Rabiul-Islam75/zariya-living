import type { Metadata } from "next";
import { TextPage } from "@/components/site/TextPage";

export const metadata: Metadata = {
  title: "Zariya — Transparency, in Full.",
  description:
    "Legal and disclosure information for Zariya Living Ltd.: conceptual representations, ownership and title, and guarantees.",
};

const SECTIONS: [string, string][] = [
  [
    "Conceptual Representations",
    "All visuals, renderings, images, and illustrations presented across this website are conceptual representations only and are subject to change. Final design, materials, landscaping, dimensions, and finishes may vary from those depicted. Nothing shown should be relied upon as a precise depiction of the completed development.",
  ],
  [
    "No Offer or Solicitation",
    "The information on this website is provided for general informational purposes and does not constitute an offer, solicitation, or financial advice. Any ownership, income, or return references are indicative and depend on factors including market conditions, occupancy, and operational performance. Specific terms are set out in the formal agreements provided during a private consultation.",
  ],
  [
    "Ownership & Title",
    "Freehold ownership, registration, heritability, and resale rights are governed by the applicable laws of Bangladesh and the terms of each individual agreement. Prospective owners are encouraged to seek independent legal advice before entering into any commitment.",
  ],
  [
    "Guarantees & Protections",
    "The 100% Money-Back Guarantee and Founder Protection Programme are subject to the specific conditions, timelines, and definitions detailed in the relevant agreements. Please review these documents carefully and ask our team any questions before proceeding.",
  ],
  [
    "Company",
    "Zariya Living Ltd. — 32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230, Bangladesh. For any legal queries, contact info@zariyaliving.com.",
  ],
];

export default function LegalPage() {
  return <TextPage label="Legal & Disclosures" title="Transparency, in Full." sections={SECTIONS} />;
}
