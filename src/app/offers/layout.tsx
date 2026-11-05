import { ScrollToTop } from "@/components/ui/ScrollToTop";

// The floating scroll-to-top button belongs to /offers only. The rest of the site
// does not have it in the V2 design.
export default function OffersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
