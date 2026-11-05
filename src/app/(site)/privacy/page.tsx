import type { Metadata } from "next";
import { TextPage } from "@/components/site/TextPage";

export const metadata: Metadata = {
  title: "Zariya — Your Privacy Matters.",
  description:
    "How Zariya Living collects and uses your information, your choices, and our terms of use.",
};

const SECTIONS: [string, string][] = [
  [
    "Information We Collect",
    "When you submit an enquiry, booking, or registration form, we collect the details you provide — such as your name, contact information, country of residence, and stated interests. We use this solely to respond to you, arrange visits, and share relevant updates about Zariya.",
  ],
  [
    "How We Use Your Information",
    "Your information is used to communicate with you about your enquiry, coordinate site visits and consultations, and — where you have opted in — keep you informed about projects, events, and announcements. We do not sell your personal data to third parties.",
  ],
  [
    "Data Security",
    "We take reasonable measures to protect the information you share with us. Access is limited to authorised members of the Zariya team who need it to assist you.",
  ],
  [
    "Your Choices",
    "You may request access to, correction of, or deletion of your personal information, and you may opt out of marketing communications at any time, by contacting info@zariyaliving.com.",
  ],
  [
    "Terms of Use",
    "By using this website you agree that its content is provided for informational purposes, that conceptual visuals are subject to change, and that no information here constitutes a binding offer. Please see our Legal & Disclosures for full details.",
  ],
];

export default function PrivacyPage() {
  return <TextPage label="Privacy & Terms" title="Your Privacy Matters." sections={SECTIONS} />;
}
