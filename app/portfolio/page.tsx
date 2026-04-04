import type { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { getPortfolioProjects } from "@/lib/portfolio";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Real Estate Photography & Video Portfolio",
  description:
    "Browse our real estate drone photography, video, and editing portfolio. Residential, commercial, and promotional projects across Kentucky.",
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    title: "Portfolio | CS Media",
    description:
      "Browse our real estate drone photography, video, and editing portfolio. Residential, commercial, and promotional projects.",
    type: "website",
    url: `${BASE_URL}/portfolio`,
    siteName: "CS Media",
    images: [{ url: "/images/real-estate-aerial-drone-leitchfield-ky.webp", width: 1200, height: 630, alt: "Aerial drone photo of a real estate property in Kentucky" }],
  },
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  const photoProjects = projects.filter((p) => !p.videoSrc);
  const videoProjects = projects.filter((p) => !!p.videoSrc);

  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              My Work
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Portfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Every property tells a story. I capture it from angles that make
              buyers take notice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Photo Projects */}
      <section className="py-16 sm:py-24 bg-dark-800">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Photography &amp; Drone
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.05}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video Projects */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Video Production
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.05}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
