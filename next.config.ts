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

    // Discontinued service-area pages — CS Media no longer serves these counties.
    const discontinuedCitySlugs = [
      "bowling-green",
      "owensboro",
      "bardstown",
      "hodgenville",
      "shepherdsville",
      "munfordville",
    ];
    const discontinuedCityRedirects = discontinuedCitySlugs.map((slug) => ({
      source: `/${slug}-real-estate-photography`,
      destination: "/services/real-estate",
      permanent: true,
    }));

    return [
      { source: "/contact", destination: "/book", permanent: true },
      ...cityRedirects,
      ...discontinuedCityRedirects,
    ];
  },
};

export default nextConfig;
