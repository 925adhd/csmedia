export interface PortfolioProject {
  slug: string;
  title: string;
  propertyType: "residential" | "commercial" | "land" | "video";
  location: string;
  description: string;
  heroImage: string;
  images: string[];
  videoSrc?: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "stone-estate-aerial",
    title: "Stone Estate Aerial",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A stunning stone estate captured from above, showcasing the full scope of the property's driveway approach, landscaping, and architectural details that ground-level photos simply can't convey.",
    heroImage: "/images/aerialhome1.jpg",
    images: [
      "/images/aerialhome1.jpg",
    ],
    featured: true,
  },
  {
    slug: "modern-farmhouse",
    title: "Modern Farmhouse",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A beautiful modern farmhouse on sprawling acreage, photographed from both ground and aerial perspectives. The combination of drone and traditional photography captured the property's connection to the surrounding landscape.",
    heroImage: "/images/home2.jpg",
    images: [
      "/images/home2.jpg",
      "/images/home3.jpg",
      "/images/interior2.jpg",
      "/images/interior1.jpg",
    ],
    featured: true,
  },
  {
    slug: "farmhouse-aerial-view",
    title: "Farmhouse Aerial View",
    propertyType: "land",
    location: "Kentucky",
    description:
      "Aerial drone photography revealing the full layout of this farmhouse property with outbuildings and surrounding acreage. The elevated perspective gives buyers a complete understanding of the land and structures.",
    heroImage: "/images/home3.jpg",
    images: [
      "/images/home3.jpg",
      "/images/home2.jpg",
    ],
    featured: true,
  },
  {
    slug: "twilight-showcase",
    title: "Twilight Showcase",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A dramatic twilight photography session capturing warm interior lighting against the dusk sky. Twilight shots create an emotional connection with buyers and make listings stand out on every platform.",
    heroImage: "/images/nighthome.jpg",
    images: [
      "/images/nighthome.jpg",
    ],
    featured: false,
  },
  {
    slug: "drone-property-tour",
    title: "Drone Property Tour",
    propertyType: "video",
    location: "Kentucky",
    description:
      "A cinematic aerial property tour showcasing a home and its surrounding landscape from above. Smooth drone footage captures the full scope of the property, giving potential buyers an immersive experience before ever stepping foot on site.",
    heroImage: "/images/drone.jpg",
    images: ["/images/drone.jpg"],
    videoSrc: "/videos/dronehousevid.mp4",
    featured: false,
  },
  {
    slug: "car-dealership-promo",
    title: "Local Car Dealership Promo",
    propertyType: "video",
    location: "Kentucky",
    description:
      "A high-energy promotional video for a local car dealership, capturing the brand's personality and inventory. Fast cuts, vibrant color grading, and a custom soundtrack bring the business to life in under 60 seconds.",
    heroImage: "/images/truck.png",
    images: ["/images/truck.png"],
    videoSrc: "/videos/truckpromo.mp4",
    featured: false,
  },
  {
    slug: "town-events-coverage",
    title: "Town Events Highlights",
    propertyType: "video",
    location: "Kentucky",
    description:
      "Dynamic event coverage capturing the energy and atmosphere of local community events. Edited with cinematic transitions, music, and color grading to deliver a polished recap that event organizers can use for marketing and social media.",
    heroImage: "/images/town.png",
    images: ["/images/town.png"],
    videoSrc: "/videos/towneventsexample.mp4",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}
