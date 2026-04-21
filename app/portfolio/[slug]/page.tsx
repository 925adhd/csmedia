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
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";
  const desc = project.description.length > 155
    ? project.description.slice(0, 155).replace(/\s+\S*$/, "") + "..."
    : project.description;
  return {
    title: project.title,
    description: desc,
    alternates: { canonical: `${BASE_URL}/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} | CS Media`,
      description: desc,
      type: "website",
      url: `${BASE_URL}/portfolio/${slug}`,
      siteName: "CS Media",
      images: [{ url: project.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const isVideo = !!project.videoSrc;
  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

  const videoSchema = isVideo
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: project.title,
        description: project.description,
        thumbnailUrl: project.heroImage.startsWith("http")
          ? project.heroImage
          : `${BASE_URL}${project.heroImage}`,
        contentUrl: `${BASE_URL}${project.videoSrc}`,
        uploadDate: project.uploadDate ?? "2025-01-01",
      }
    : null;

  return (
    <>
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative bg-dark-900 py-10 sm:py-20 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover object-top opacity-20"
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
            <div className="mt-4 sm:mt-8">
              <span className="inline-block rounded-full bg-gold/20 border border-gold/30 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-gold mb-3 sm:mb-5">
                {project.propertyType}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="mt-2 sm:mt-3 text-lg text-dark-200 font-mono">{project.location}</p>
              <p className="mt-4 text-dark-200 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Video */}
      {isVideo && (
        <section className="pt-8 pb-4 bg-dark-800">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <FadeIn>
              {/* Mobile video */}
              {project.mobileVideoSrc && (
                <div className="md:hidden relative rounded-2xl overflow-hidden border border-dark-500/30 bg-dark-900 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.heroImage}
                    className="w-full aspect-[9/16] max-h-[70vh] mx-auto bg-black"
                  >
                    <source src={project.mobileVideoSrc} type="video/mp4" />
                  </video>
                </div>
              )}
              {/* Desktop video (also fallback if no mobile version) */}
              <div className={project.mobileVideoSrc ? "hidden md:block" : ""}>
                <div className="relative rounded-2xl overflow-hidden border border-dark-500/30 bg-dark-900 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.heroImage}
                    className="w-full aspect-[9/16] max-h-[70vh] mx-auto bg-black"
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Image Gallery — hide for video projects with only 1 image */}
      {!(isVideo && project.images.length <= 1) && (
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`grid gap-4 ${isVideo ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
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
      )}

      {/* More Projects */}
      {(() => {
        const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);
        const others = currentIndex >= 0
          ? Array.from({ length: Math.min(3, portfolioProjects.length - 1) }, (_, i) => {
              const offset = ((currentIndex + i + 1) % portfolioProjects.length);
              return portfolioProjects[offset];
            })
          : portfolioProjects.filter((p) => p.slug !== slug).slice(0, 3);
        if (others.length === 0) return null;
        return (
          <section className="py-16 bg-dark-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white tracking-tight mb-8">More Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {others.map((p) => (
                  <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-dark-500/30">
                    <Image src={p.heroImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-sm font-bold text-white">{p.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <CTASection
        heading={isVideo ? "Need a Video Like This?" : "Want Similar Results?"}
        subheading={isVideo ? "Get a walkthrough video that makes buyers book showings before they visit." : "Let's capture your property with the same cinematic quality."}
        buttonText={isVideo ? "Book a Video Shoot" : "Book Similar Shoot"}
      />
    </>
  );
}
