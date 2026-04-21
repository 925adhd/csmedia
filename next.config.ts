import type { NextConfig } from "next";
import { locations } from "./lib/locations";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = supabaseUrl
  ? new URL(supabaseUrl).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    remotePatterns: supabaseHostname
      ? [{ protocol: "https", hostname: supabaseHostname, pathname: "/storage/v1/object/public/**" }]
      : [],
  },
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
