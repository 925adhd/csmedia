import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/portfolio";
import { locations } from "@/lib/locations";
import { blogPosts } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${BASE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        abs("/images/brick-home-aerial-drone-kentucky.webp"),
        abs("/images/rustic-kitchen-wood-beams-island.webp"),
        abs("/images/twilight-ranch-home-evening-kentucky.webp"),
        abs("/images/white-farmhouse-aerial-drone-kentucky.webp"),
      ],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        abs("/images/brick-home-aerial-drone-kentucky.webp"),
        abs("/images/kentucky-event-catering-photography.webp"),
        abs("/images/leitchfield-downtown-holiday-event-aerial.webp"),
      ],
    },
    {
      url: `${BASE_URL}/services/real-estate`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "monthly",
      priority: 0.95,
      images: [
        abs("/images/rustic-kitchen-wood-beams-island.webp"),
        abs("/images/brick-home-aerial-drone-kentucky.webp"),
        abs("/images/virtual-staging-before-empty-room.webp"),
        abs("/images/virtual-staging-after-furnished.webp"),
      ],
    },
    {
      url: `${BASE_URL}/services/events`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "monthly",
      priority: 0.6,
      images: [abs("/images/kentucky-baby-shower-event-photography.webp")],
    },
    {
      url: `${BASE_URL}/services/video-production`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "monthly",
      priority: 0.6,
      images: [
        abs("/images/cs-media-video-production-studio-kentucky.webp"),
        abs("/images/real-estate-media-process-background-kentucky.webp"),
        abs("/images/gmc-truck-promo-video-kentucky.webp"),
        abs("/images/leitchfield-downtown-holiday-event-aerial.webp"),
      ],
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-04-04"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: `${BASE_URL}/portfolio/${project.slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [abs(project.heroImage), ...project.images.map(abs)],
    })
  );

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}-real-estate-photography`,
    lastModified: new Date("2026-04-20"),
    changeFrequency: "monthly" as const,
    priority: 0.85,
    images: [
      abs("/images/real-estate-aerial-drone-leitchfield-ky.webp"),
      ...loc.galleryImages.map((img) => abs(img.src)),
    ],
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...portfolioPages, ...blogPages];
}
