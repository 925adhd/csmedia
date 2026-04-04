import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Real Estate Photography Blog & Tips",
  description:
    "Tips, guides, and insights on real estate photography, drone media, virtual staging, and listing marketing in Kentucky.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog | CS Media",
    description:
      "Tips, guides, and insights on real estate photography, drone media, virtual staging, and listing marketing in Kentucky.",
    type: "website",
    url: `${BASE_URL}/blog`,
    siteName: "CS Media",
    images: [{ url: "/images/real-estate-aerial-drone-leitchfield-ky.webp", width: 1200, height: 630, alt: "Aerial drone photo of a real estate property in Kentucky" }],
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-dark-900 pt-12 pb-2 sm:pt-16 sm:pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Blog
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Real Estate Photography Tips & Guides
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Insights on listing photography, drone media, virtual staging, and selling properties faster in Kentucky.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-10">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl bg-dark-800/80 border border-dark-500/30 hover:border-gold/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative aspect-[21/9]">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 800px"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs text-dark-300 font-mono tracking-wider mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-dark-400" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-dark-200 leading-relaxed">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold font-medium">
                      Read More
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
