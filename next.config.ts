import type { NextConfig } from "next";
import { locations } from "./lib/locations";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 90],
    remotePatterns: [],
  },
  ...(process.env.RECORDING ? { devIndicators: false as const } : {}),
  async redirects() {
    const cityRedirects = locations.map((loc) => ({
      source: `/services/${loc.slug}`,
      destination: `/${loc.slug}-real-estate-photography`,
      permanent: true,
    }));

    return [
      { source: "/contact", destination: "/book", permanent: true },
      ...cityRedirects,
    ];
  },
};

export default nextConfig;
