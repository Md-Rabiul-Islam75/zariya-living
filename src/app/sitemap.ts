import type { MetadataRoute } from "next";

const BASE = "https://zariyaliving.com";

const ROUTES = [
  "",
  "/agro",
  "/explore",
  "/projects",
  "/projects/sylhet",
  "/ownership",
  "/township",
  "/community",
  "/visit",
  "/events",
  "/contact",
  "/legal",
  "/privacy",
];

// /offers is private (QR only), so it is left out on purpose.
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${BASE}${route}` }));
}
