import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { portfolioProjects, getProjectBySlug } from "@/lib/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | CS Media`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-900 py-36 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/70 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-dark-200 hover:text-gold transition-colors group"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              Back to Portfolio
            </Link>
            <div className="mt-8">
              <span className="inline-block rounded-full bg-gold/20 border border-gold/30 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-gold mb-5">
                {project.propertyType}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-dark-200 font-mono">{project.location}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-dark-800">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                About This Project
              </h2>
              <p className="text-dark-200 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((src, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-dark-500/30">
                  <Image
                    src={src}
                    alt={`${project.title} — Image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video Embed */}
      {project.videoUrl && (
        <section className="pb-24 bg-dark-800">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl font-bold text-white mb-6">
                Video Walkthrough
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-dark-700 border border-dark-500/30">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} video walkthrough`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <CTASection
        heading="Want Similar Results?"
        subheading="Let's capture your property with the same cinematic quality."
        buttonText="Book Similar Shoot"
      />
    </>
  );
}
