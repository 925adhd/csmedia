import { createClient } from "./server";
import type { PortfolioProject, Testimonial, Service, PageContent } from "./types";

// Portfolio
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("sort_order", { ascending: true });
  return data || [];
}

export async function getProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function getFeaturedProjects(): Promise<PortfolioProject[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("featured", true)
    .order("sort_order", { ascending: true });
  return data || [];
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order", { ascending: true });
  return data || [];
}

// Services
export async function getServices(): Promise<Service[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });
  return data || [];
}

// Page Content
export async function getPageContent(page: string, section: string): Promise<Record<string, unknown> | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("page_content")
    .select("content")
    .eq("page", page)
    .eq("section", section)
    .single();
  return data?.content || null;
}
