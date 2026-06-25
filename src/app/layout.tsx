import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zariya Living — One Philosophy. Four Landscapes. A Lifetime of Belonging.",
  description:
    "Zariya is a community-living development in Sylhet, Bangladesh — an integrated Resort, organic Agro farm, and Lagoon Villa community. Built for generations, not today's market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
