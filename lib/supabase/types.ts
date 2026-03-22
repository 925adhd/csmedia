export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  property_type: string;
  location: string;
  description: string;
  hero_image: string;
  images: string[];
  video_src: string | null;
  mobile_video_src: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  badge: string;
  service: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface PageContent {
  id: string;
  page: string;
  section: string;
  content: Record<string, unknown>;
  updated_at: string;
}
