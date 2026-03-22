export interface PortfolioProject {
  slug: string;
  title: string;
  propertyType: "residential" | "commercial" | "land";
  location: string;
  description: string;
  heroImage: string;
  images: string[];
  videoUrl?: string;
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
      "/images/interior1.jpg",
      "/images/interior2.jpg",
      "/images/nighthome.jpg",
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
      "/images/aerialhome1.jpg",
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
      "/images/home2.jpg",
      "/images/home3.jpg",
      "/images/aerialhome1.jpg",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}
