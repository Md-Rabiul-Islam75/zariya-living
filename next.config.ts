import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle (.next/standalone) for small Docker images.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1080, 1600, 1920],
    // Site images rarely change, so keep the optimised copies for 31 days.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        // Files in public/ get max-age=0 by default. Give a replaced video or
        // image a new file name, because browsers will keep this copy for a year.
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
