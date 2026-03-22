import type { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our real estate drone photography and video portfolio. Residential, commercial, and land properties captured from above.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight">
              Portfolio
            </h1>
            <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
              Every property tells a story. We capture it from angles that make
              buyers take notice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-dark-800">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, i) => (
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
