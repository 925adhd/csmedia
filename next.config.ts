import type { NextConfig } from "next";
import { locations } from "./lib/locations";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 90],
    remotePatterns: [],
  },
  // The on-screen dev route indicator (Next.js 16's devtools overlay) throws a repeating
  // "removeChild" NotFoundError from its own internal rendering when it processes back-to-back
  // HMR compile events — confirmed via the browser console stack traces, which resolve entirely
  // to next-devtools' own minified functions, not to app code. Disabling it (docs confirm this
  // doesn't hide real build/runtime errors) removes the crash loop.
  devIndicators: false,
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
