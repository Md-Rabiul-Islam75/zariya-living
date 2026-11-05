import type { Metadata } from "next";
import "./site.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MotionEngine } from "@/components/site/MotionEngine";
import { Toast } from "@/components/site/Toast";

export const metadata: Metadata = {
  description:
    "Zariya Living — Agro Share ownership, the Sylhet Resort & Villas, and a faith-centred community township in Bangladesh. Belonging Today. Legacy Tomorrow.",
};

// Marks that JavaScript is running, so reveal blocks can start hidden without a
// flash. Without JavaScript the content simply stays visible. If the page scripts
// fail to load, the timer lifts the hiding so visitors never see an empty page.
const JS_FLAG = `(function(){var h=document.documentElement;h.setAttribute('data-zjs','');setTimeout(function(){if(!h.hasAttribute('data-zready'))h.removeAttribute('data-zjs')},4000)})()`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="z2">
      <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
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
