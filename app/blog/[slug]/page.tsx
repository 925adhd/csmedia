import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: `${post.title} | CS Media`,
      description: post.description,
      type: "article",
      url: `${BASE_URL}/blog/${slug}`,
      siteName: "CS Media",
      publishedTime: post.date,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.heroImage.startsWith("http")
      ? post.heroImage
      : `${BASE_URL}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "CS MEDIA, LLC",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CS MEDIA, LLC",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/cs-media-logo.webp`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  // Simple markdown-to-HTML conversion for headings, bold, links, lists, hrs, and paragraphs
  const contentHtml = post.content
    .trim()
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed === "---") return '<hr class="border-dark-500/30 my-8" />';
      if (trimmed.startsWith("## "))
        return `<h2 class="text-2xl font-bold text-dark-100 mt-12 mb-4">${trimmed.slice(3)}</h2>`;
      if (trimmed.startsWith("### "))
        return `<h3 class="text-xl font-semibold text-dark-100 mt-8 mb-3">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("- [ ] ") || trimmed.includes("\n- [ ] ")) {
        const items = trimmed
          .split("\n")
          .filter((l) => l.trim().startsWith("- [ ] "))
          .map((l) => `<li class="flex items-center gap-2"><span class="w-4 h-4 rounded border border-dark-400 flex-shrink-0"></span>${l.trim().slice(6)}</li>`)
          .join("");
        return `<ul class="space-y-2 text-dark-200">${items}</ul>`;
      }
      if (trimmed.startsWith("- ") || trimmed.includes("\n- ")) {
        const items = trimmed
          .split("\n")
          .filter((l) => l.trim().startsWith("- "))
          .map((l) => `<li>${l.trim().slice(2)}</li>`)
          .join("");
        return `<ul class="list-disc list-inside space-y-1 text-dark-200">${items}</ul>`;
      }
      // Inline formatting
      let html = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-dark-100 font-semibold">$1</strong>')
        .replace(
          /\[(.+?)\]\((.+?)\)/g,
          '<a href="$2" class="text-gold hover:text-gold-light underline transition-colors">$1</a>'
        );
      return `<p class="text-dark-200 leading-relaxed">${html}</p>`;
    })
    .join("\n");

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative bg-dark-900 py-10 sm:py-20 overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-dark-900/55 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-dark-200 hover:text-gold transition-colors group"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              Back to Blog
            </Link>
            <div className="mt-4 sm:mt-8">
              <div className="flex items-center gap-3 text-xs text-dark-300 font-mono tracking-wider mb-4">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-dark-200">
                {post.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-dark-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <article
              className="prose-custom space-y-4"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-16 bg-dark-900 border-t border-dark-500/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <FadeIn>
              <div className="mb-10">
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  FAQ
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Common Questions
                </h2>
              </div>
            </FadeIn>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="border-b border-dark-500/30 pb-6">
                    <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-dark-200 leading-relaxed">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-dark-900">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
              More Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-dark-500/30 hover:border-gold/20 transition-all"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                      {p.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
