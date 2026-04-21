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
  /** ISO 8601 date the project (primarily video) was captured/published. Required for VideoObject schema. */
  uploadDate?: string;
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
    uploadDate: row.created_at || undefined,
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
      "A charming country home on open acreage featuring a covered pavilion, wraparound porch, and beautifully finished interiors. Aerial drone photography captures the full property layout, outbuildings, and road frontage — the details that drive buyer decisions on rural Kentucky listings where land is as much the product as the house. Interior shots showcase the living spaces, upper-level loft, and the finish quality that a ground-level MLS photo set can't communicate. The aerial-plus-interior combination is what pushes listings like this from sitting to sold.",
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
      "A dramatic twilight photography session capturing warm interior lighting against the dusk sky. Twilight shots — taken in the 20-minute window after sunset — create an emotional connection with buyers and make listings stand out on Zillow, Realtor.com, and MLS thumbnails where daytime photos blur together. Aerial twilight drone work extends the treatment to the lot, showing landscape lighting, driveway approach, and silhouette against the sky. For higher-end Kentucky listings above $400K, twilight coverage is the single biggest visual differentiator against competing properties at the same price point.",
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
    uploadDate: "2025-08-12",
  },
  {
    slug: "local-business-promo",
    title: "Local Business Promo",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A high-energy promotional video for a local Kentucky business, capturing the brand's personality and energy in under 60 seconds. Fast cuts, vibrant color grading, a custom soundtrack, and branded graphics turn raw product and location footage into content ready for Facebook, Instagram Reels, YouTube Shorts, and TikTok. Beyond real estate, CS Media produces promo content for trades, retail, food, and service businesses across Grayson County and Kentucky — the same cinematic treatment used on our luxury listing work, tuned for commercial storytelling instead of property showcasing.",
    heroImage: "/images/gmc-truck-promo-video-kentucky.webp",
    images: ["/images/gmc-truck-promo-video-kentucky.webp"],
    videoSrc: "/videos/truckpromo.mp4",
    featured: false,
    uploadDate: "2025-09-04",
  },
  {
    slug: "town-events-coverage",
    title: "Town Events Highlights",
    propertyType: "event",
    location: "Kentucky",
    description:
      "Dynamic event coverage from a local Kentucky community event, capturing the energy, attendance, and atmosphere in a highlight reel that organizers, sponsors, and local officials can reuse for years. Combines aerial drone footage of the venue, ground-level crowd and performer shots, and cinematic transitions with music and color grading tuned for social media. CS Media offers event coverage for small-town festivals, holiday events, grand openings, and nonprofit fundraisers across Grayson County and neighboring Kentucky markets — delivered within 48 hours so organizers can post recaps while the event is still top-of-mind.",
    heroImage: "/images/leitchfield-downtown-holiday-event-aerial.webp",
    images: ["/images/leitchfield-downtown-holiday-event-aerial.webp"],
    videoSrc: "/videos/towneventsexample.mp4",
    featured: false,
    uploadDate: "2025-12-18",
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
