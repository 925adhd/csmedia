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
  /** Overrides the generic "your property" CTA copy on the project's detail page —
      for one-off pieces (e.g. automotive) where the default real-estate framing doesn't fit. */
  ctaOverride?: { heading: string; subheading: string; buttonText: string };
}

// Order here is deliberate, not chronological — it's the display order on /portfolio
// (photos and videos are filtered into their own sections, but each section preserves
// this relative order). Within photos: lead with the strongest single image, vary the
// look (daylight vs. twilight) before the next residential piece, and close on
// Automotive since it's the one clearly-not-real-estate piece — a "we shoot more than
// listings" capper, not an opener. Within videos: open with Alice Theater and the two
// Precision Partners pieces to establish range beyond real estate immediately, then
// move into real estate video, then events/business, closing on the older drone tour.
const staticProjects: PortfolioProject[] = [
  {
    slug: "stone-estate-aerial",
    title: "Stone Estate Aerial Drone Photography",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A stunning stone estate captured from above, showcasing the full scope of the property's driveway approach, landscaping, and architectural details that ground-level photos simply can't convey.",
    heroImage: "/images/kentucky-real-estate-drone-aerial.webp",
    images: ["/images/kentucky-real-estate-drone-aerial.webp", "/images/stone-estate-front-exterior-walkway.webp", "/images/stone-estate-aerial-overhead-drone.webp", "/images/stone-estate-living-room-fireplace.webp"],
    featured: true,
  },
  {
    slug: "twilight-showcase",
    title: "Twilight Showcase",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A dramatic twilight session capturing warm interior lighting against the dusk sky, extended to the lot and driveway approach with aerial drone work — the biggest visual differentiator for higher-end Kentucky listings.",
    heroImage: "/images/twilight-ranch-home-evening-kentucky.webp",
    images: ["/images/twilight-ranch-home-evening-kentucky.webp", "/images/twilight-ranch-aerial-drone-dusk.webp"],
    featured: true,
  },
  {
    slug: "modern-farmhouse",
    title: "Modern Farmhouse Drone & Real Estate Photography",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A beautiful modern farmhouse on sprawling acreage, photographed from both ground and aerial perspectives. The combination of drone and traditional photography captured the property's connection to the surrounding landscape.",
    heroImage: "/images/white-farmhouse-front-exterior-kentucky.webp",
    images: ["/images/white-farmhouse-front-exterior-kentucky.webp", "/images/white-farmhouse-aerial-drone-kentucky.webp", "/images/rustic-kitchen-wood-beams-island.webp", "/images/rustic-bathroom-brick-double-vanity.webp"],
    featured: true,
  },
  {
    slug: "kentucky-listing-recent-coverage",
    title: "Recent Kentucky Listing Coverage",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A recent round of Kentucky real estate coverage: aerial photography of the home, pool, and grounds alongside bright, MLS-ready interior shots. Full aerial-plus-interior coverage like this is what's included in the Full Media Package on every listing.",
    heroImage: "/images/kentucky-real-estate-aerial-pool-home.webp",
    images: ["/images/kentucky-real-estate-aerial-pool-home.webp", "/images/kentucky-real-estate-living-room-stone-fireplace.webp", "/images/kentucky-farmhouse-exterior-red-roof.webp"],
    featured: false,
  },
  {
    slug: "automotive-photography-session",
    title: "Automotive Photography Session",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A dramatic golden-hour automotive photography session, shot low and wide to make the most of the light. Photography isn't limited to real estate and business promos: CS Media takes on personal and product photography sessions like this one too.",
    heroImage: "/images/dodge-charger-automotive-photography-kentucky.webp",
    images: ["/images/dodge-charger-automotive-photography-kentucky.webp"],
    featured: false,
    ctaOverride: {
      heading: "Want Photos Like This?",
      subheading: "Let's give your car, product, or personal shoot the same cinematic treatment.",
      buttonText: "Book a Shoot",
    },
  },
  {
    slug: "alice-theater-brand-video",
    title: "Alice Theater Brand Video",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A branded story video for the Alice Theater, walking through the historic building and its history on camera. CS Media produces this kind of on-camera brand storytelling for local venues and small businesses that want more than a straight promo reel: a piece that gives their space and their story a real introduction.",
    heroImage: "/images/alice-theater-brand-poster.webp",
    images: ["/images/alice-theater-brand-poster.webp"],
    videoSrc: "/videos/alice-theater-brand-video-full.mp4",
    featured: true,
    uploadDate: "2026-08-06",
    ctaOverride: {
      heading: "Want a Brand Story Like This?",
      subheading: "Let's give your venue or business the same on-camera introduction.",
      buttonText: "Book Branding Content",
    },
  },
  {
    slug: "precision-partners-groundbreaking",
    title: "Precision Partners: Groundbreaking Aerial Coverage",
    propertyType: "construction",
    location: "Kentucky",
    description:
      "Aerial drone coverage of a Precision Partners groundbreaking, from the crew staking out the foundation lines to the first cuts of dirt on day one. Beyond real estate listings, CS Media documents commercial and residential construction projects for contractors and builders: site surveys, groundbreakings, progress updates, and finished-project reveals, with the same cinematic drone treatment used on luxury home listings.",
    heroImage: "/images/precision-partners-groundbreaking-drone.webp",
    images: ["/images/precision-partners-groundbreaking-drone.webp", "/images/precision-partners-construction-site-aerial.webp"],
    videoSrc: "/videos/precision-partners-groundbreaking-video.mp4",
    featured: true,
    uploadDate: "2026-08-06",
    ctaOverride: {
      heading: "Need Coverage for Your Job Site?",
      subheading: "From groundbreaking to move-in ready, let's document your build the same way.",
      buttonText: "Book a Shoot",
    },
  },
  {
    slug: "precision-partners-home-interior-reveal",
    title: "Precision Partners: Home Interior Reveal",
    propertyType: "construction",
    location: "Kentucky",
    description:
      "A cinematic reveal video for the finished interior of a Precision Partners build, built around a slow doorway entrance and a full walkthrough of the completed space. Paired with our aerial groundbreaking coverage of the same builder, it shows the project start to finish: breaking ground to move-in ready, not just static before/after photos.",
    heroImage: "/images/precision-partners-home-interior-reveal-poster.webp",
    images: ["/images/precision-partners-home-interior-reveal-poster.webp"],
    videoSrc: "/videos/precision-partners-home-interior-reveal-video.mp4",
    featured: false,
    uploadDate: "2026-08-06",
    ctaOverride: {
      heading: "Want a Reveal Video Like This?",
      subheading: "Show off your finished build with the same cinematic walkthrough treatment.",
      buttonText: "Book a Shoot",
    },
  },
  {
    slug: "personal-brand-video",
    title: "Personal Brand Video",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A personal branding video shot along the riverfront, the kind of on-camera content real estate agents and small business owners use to introduce themselves on social media. CS Media produces this style of face-forward personal brand video alongside business promo work for clients building a following on Instagram and TikTok.",
    heroImage: "/images/personal-brand-video-poster.webp",
    images: ["/images/personal-brand-video-poster.webp"],
    videoSrc: "/videos/personal-brand-video-kentucky.mp4",
    featured: false,
    uploadDate: "2026-08-06",
    ctaOverride: {
      heading: "Need a Personal Brand Video?",
      subheading: "Introduce yourself on camera the same way, ready for Instagram and TikTok.",
      buttonText: "Book Branding Content",
    },
  },
  {
    slug: "kentucky-real-estate-walkthrough",
    title: "Kentucky Real Estate Walkthrough Video",
    propertyType: "residential",
    location: "Kentucky",
    description:
      "A full interior walkthrough video for a Kentucky listing, moving room to room through the kitchen and living spaces so buyers can tour the home before ever stepping inside. Walkthrough video bundled into the Full Media Package gives listings a scroll-stopping edge on top of standard MLS photos.",
    heroImage: "/images/kentucky-real-estate-walkthrough-poster.webp",
    images: ["/images/kentucky-real-estate-walkthrough-poster.webp"],
    videoSrc: "/videos/kentucky-real-estate-walkthrough-video.mp4",
    featured: false,
    uploadDate: "2026-08-06",
  },
  {
    slug: "kentucky-real-estate-aerial-video",
    title: "Aerial Real Estate Video",
    propertyType: "aerial",
    location: "Kentucky",
    description:
      "Aerial drone video of a Kentucky home and pool, showing the full lot, landscaping, and layout from above before the camera settles on the property itself. Aerial video like this rounds out a listing's coverage alongside stills and interior photos.",
    heroImage: "/images/kentucky-real-estate-aerial-pool-poster.webp",
    images: ["/images/kentucky-real-estate-aerial-pool-poster.webp"],
    videoSrc: "/videos/kentucky-real-estate-aerial-pool-video.mp4",
    featured: false,
    uploadDate: "2026-08-06",
    ctaOverride: {
      heading: "Need a Video Like This?",
      subheading: "Get aerial video that shows the full lot before buyers ever step outside.",
      buttonText: "Book a Video Shoot",
    },
  },
  {
    slug: "town-events-coverage",
    title: "Town Events Highlights",
    propertyType: "event",
    location: "Kentucky",
    description:
      "Dynamic event coverage from a local Kentucky community event, capturing the energy, attendance, and atmosphere in a highlight reel that organizers, sponsors, and local officials can reuse for years. Combines aerial drone footage of the venue, ground-level crowd and performer shots, and cinematic transitions with music and color grading tuned for social media. CS Media offers event coverage for small-town festivals, holiday events, grand openings, and nonprofit fundraisers across Grayson County and neighboring Kentucky markets, delivered within 48 hours so organizers can post recaps while the event is still top-of-mind.",
    heroImage: "/images/leitchfield-downtown-holiday-event-aerial.webp",
    images: ["/images/leitchfield-downtown-holiday-event-aerial.webp"],
    videoSrc: "/videos/towneventsexample.mp4",
    featured: false,
    uploadDate: "2025-12-18",
    ctaOverride: {
      heading: "Need Coverage for Your Event?",
      subheading: "Get a highlight reel your attendees and sponsors will want to share.",
      buttonText: "Request a Quote",
    },
  },
  {
    slug: "local-business-promo",
    title: "Local Business Promo",
    propertyType: "promo",
    location: "Kentucky",
    description:
      "A high-energy promotional video for a local Kentucky business, capturing the brand's personality and energy in under 60 seconds. Fast cuts, vibrant color grading, a custom soundtrack, and branded graphics turn raw product and location footage into content ready for Facebook, Instagram Reels, YouTube Shorts, and TikTok. Beyond real estate, CS Media produces promo content for trades, retail, food, and service businesses across Grayson County and Kentucky, with the same cinematic treatment used on our luxury listing work, tuned for commercial storytelling instead of property showcasing.",
    heroImage: "/images/gmc-truck-promo-video-kentucky.webp",
    images: ["/images/gmc-truck-promo-video-kentucky.webp", "/images/layo-tacos-food-truck-aerial-kentucky.webp"],
    videoSrc: "/videos/truckpromo.mp4",
    featured: false,
    uploadDate: "2025-09-04",
    ctaOverride: {
      heading: "Want a Promo Video Like This?",
      subheading: "Get fast-cut, social-ready video for your business, tuned for Reels and TikTok.",
      buttonText: "Book Branding Content",
    },
  },
  {
    slug: "drone-property-tour",
    title: "Cinematic Drone Property Tour (Kentucky)",
    propertyType: "aerial",
    location: "Kentucky",
    description:
      "A cinematic aerial property tour showcasing a home and its surrounding landscape from above. Smooth drone footage captures the full scope of the property, giving potential buyers an immersive experience before ever stepping foot on site.",
    heroImage: "/images/cs-media-fpv-drone-pilot-real-estate.webp",
    images: ["/images/cs-media-fpv-drone-pilot-real-estate.webp", "/images/kentucky-river-aerial-drone-photography.webp"],
    videoSrc: "/videos/desktop.mp4",
    mobileVideoSrc: "/videos/mobilevid.mp4",
    featured: true,
    uploadDate: "2025-08-12",
    ctaOverride: {
      heading: "Need a Video Like This?",
      subheading: "Get a cinematic drone tour that gives buyers the full property before they visit.",
      buttonText: "Book a Video Shoot",
    },
  },
];

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  return staticProjects;
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
