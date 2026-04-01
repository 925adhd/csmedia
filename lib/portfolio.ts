import type { PortfolioProject as SupabaseProject } from "./supabase/types";

export interface PortfolioProject {
  slug: string;
  title: string;
  propertyType: string;
  location: string;
  description: string;
  heroImage: string;
  images: string[];
  videoSrc?: string;
  mobileVideoSrc?: string;
  featured: boolean;
}

// Convert Supabase row to frontend shape
function fromSupabase(row: SupabaseProject): PortfolioProject {
  return {
    slug: row.slug,
    title: row.title,
    propertyType: row.property_type,
    location: row.location,
    description: row.description,
    heroImage: row.hero_image,
    images: row.images,
    videoSrc: row.video_src || undefined,
    mobileVideoSrc: row.mobile_video_src || undefined,
    featured: row.featured,
  };
}

// Static fallback data (used when Supabase is not configured)
const staticProjects: PortfolioProject[] = [
  {
    slug: "stone-estate-aerial",
    title: "Stone Estate Aerial",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A stunning stone estate captured from above, showcasing the full scope of the property's driveway approach, landscaping, and architectural details that ground-level photos simply can't convey.",
    heroImage: "/images/real-estate-aerial-drone-leitchfield-ky.webp",
    images: ["/images/real-estate-aerial-drone-leitchfield-ky.webp", "/images/stone-estate-front-exterior-walkway.webp", "/images/stone-estate-aerial-overhead-drone.webp", "/images/stone-estate-living-room-fireplace.webp"],
    featured: true,
  },
  {
    slug: "modern-farmhouse",
    title: "Modern Farmhouse",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A beautiful modern farmhouse on sprawling acreage, photographed from both ground and aerial perspectives. The combination of drone and traditional photography captured the property's connection to the surrounding landscape.",
    heroImage: "/images/white-farmhouse-front-exterior-kentucky.webp",
    images: ["/images/white-farmhouse-front-exterior-kentucky.webp", "/images/white-farmhouse-aerial-drone-kentucky.webp", "/images/rustic-kitchen-wood-beams-island.webp", "/images/rustic-bathroom-brick-double-vanity.webp"],
    featured: true,
  },
  {
    slug: "country-home-acreage",
    title: "Country Home on Acreage",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A charming country home on open acreage featuring a covered pavilion, wraparound porch, and beautifully finished interiors. Aerial drone photography captures the full property layout while interior shots showcase the living spaces and loft.",
    heroImage: "/images/country-home-aerial-acreage-kentucky.webp",
    images: ["/images/country-home-aerial-acreage-kentucky.webp", "/images/covered-front-porch-kentucky-hocheris-chanthavong-cs-media-owner.webp", "/images/living-room-sectional-dark-floors.webp", "/images/upper-level-loft-staircase-landing.webp"],
    featured: false,
  },
  {
    slug: "twilight-showcase",
    title: "Twilight Showcase",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A dramatic twilight photography session capturing warm interior lighting against the dusk sky. Twilight shots create an emotional connection with buyers and make listings stand out on every platform.",
    heroImage: "/images/twilight-ranch-home-evening-kentucky.webp",
    images: ["/images/twilight-ranch-home-evening-kentucky.webp", "/images/twilight-ranch-aerial-drone-dusk.webp"],
    featured: true,
  },
  {
    slug: "drone-property-tour",
    title: "Drone Property Tour",
    propertyType: "aerial",
    location: "Kentucky",
    description:
      "A cinematic aerial property tour showcasing a home and its surrounding landscape from above. Smooth drone footage captures the full scope of the property, giving potential buyers an immersive experience before ever stepping foot on site.",
    heroImage: "/images/cs-media-fpv-drone-pilot-real-estate.webp",
    images: ["/images/cs-media-fpv-drone-pilot-real-estate.webp"],
    videoSrc: "/videos/desktop.mp4",
    mobileVideoSrc: "/videos/mobilevid.mp4",
    featured: true,
  },
  {
    slug: "local-business-promo",
    title: "Local Business Promo",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A high-energy promotional video for a local business, capturing the brand's personality and energy. Fast cuts, vibrant color grading, and a custom soundtrack bring the business to life in under 60 seconds.",
    heroImage: "/images/gmc-truck-promo-video-kentucky.webp",
    images: ["/images/gmc-truck-promo-video-kentucky.webp"],
    videoSrc: "/videos/truckpromo.mp4",
    featured: false,
  },
  {
    slug: "town-events-coverage",
    title: "Town Events Highlights",
    propertyType: "event",
    location: "Kentucky",
    description:
      "Dynamic event coverage capturing the energy and atmosphere of local community events. Edited with cinematic transitions, music, and color grading to deliver a polished recap that event organizers can use for marketing and social media.",
    heroImage: "/images/leitchfield-downtown-holiday-event-aerial.webp",
    images: ["/images/leitchfield-downtown-holiday-event-aerial.webp"],
    videoSrc: "/videos/towneventsexample.mp4",
    featured: false,
  },
];

const isSupabaseConfigured =
  typeof process !== "undefined" &&
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchFromSupabase() {
  if (!isSupabaseConfigured) return null;
  try {
    const { createClient } = await import("./supabase/server");
    const supabase = await createClient();
    const { data } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("sort_order", { ascending: true });
    return data ? data.map(fromSupabase) : null;
  } catch {
    return null;
  }
}

// These are the public API functions used by pages
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const data = await fetchFromSupabase();
  return data || staticProjects;
}

export async function getProjectBySlug(slug: string): Promise<PortfolioProject | undefined> {
  const projects = await getPortfolioProjects();
  return projects.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<PortfolioProject[]> {
  const projects = await getPortfolioProjects();
  return projects.filter((p) => p.featured);
}

// Keep sync access for static params generation
export const portfolioProjects = staticProjects;
