import type { Metadata } from "next";
import "./site.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MotionEngine } from "@/components/site/MotionEngine";
import { Toast } from "@/components/site/Toast";

const OG_IMAGE = "/assets/agro/hero-3.jpg";

export const metadata: Metadata = {
  description:
    "Zariya Living — Agro Share ownership, the Sylhet Resort & Villas, and a faith-centred community township in Bangladesh. Belonging Today. Legacy Tomorrow.",
  openGraph: {
    title: "Zariya Living — Belonging Today. Legacy Tomorrow.",
    description:
      "Own an Agro Share in Zariya's farm-to-family model, and explore the Sylhet Resort & Villas.",
    images: [OG_IMAGE],
    type: "website",
    siteName: "Zariya Living",
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

// Structured data so search engines can identify the company.
const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Zariya Living Ltd.",
  url: "https://zariyaliving.com",
  logo: "https://zariyaliving.com/images/logo/zariya-living-white.png",
  image: `https://zariyaliving.com${OG_IMAGE}`,
  email: "info@zariyaliving.com",
  telephone: "+8801907070640",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Sonargaon Janapath Road, Sector 12, Uttara",
    addressLocality: "Dhaka",
    postalCode: "1230",
    addressCountry: "BD",
  },
  sameAs: [
    "https://www.facebook.com/zariya.living",
    "https://www.youtube.com/@ZariyaLiving",
    "https://www.instagram.com/zariya_livingltd/",
  ],
};

// Marks that JavaScript is running, so reveal blocks can start hidden without a
// flash. Without JavaScript the content simply stays visible. If the page scripts
// fail to load, the timer lifts the hiding so visitors never see an empty page.
const JS_FLAG = `(function(){var h=document.documentElement;h.setAttribute('data-zjs','');setTimeout(function(){if(!h.hasAttribute('data-zready'))h.removeAttribute('data-zjs')},4000)})()`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="z2">
      <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <a href="#main-content" className="z-skip">
        Skip to main content
      </a>
      <div id="zprog" aria-hidden="true" />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      <Toast />
      <MotionEngine />
    </div>
  );
}
