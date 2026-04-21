import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Services | CS Media — Real Estate, Events & Video Production",
  description:
    "CS Media offers professional real estate photography, event photography, and video production services across Kentucky. Pick a service line to learn more.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Services | CS Media",
    description:
      "Real estate photography, weddings, and video production across Kentucky.",
    type: "website",
    url: `${BASE_URL}/services`,
    siteName: "CS Media",
    images: [{ url: "/images/brick-home-aerial-drone-kentucky.webp", width: 1200, height: 630, alt: "CS Media services" }],
  },
};

interface ServiceCategory {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  imageAlt: string;
  primary?: boolean;
  ctaText: string;
}

const categories: ServiceCategory[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    blurb:
      "Real estate photography, drone video, and virtual staging that get listings clicked, toured, and sold. Packages from $85 with 24–48 hour turnaround.",
    image: "/images/brick-home-aerial-drone-kentucky.webp",
    imageAlt: "Aerial drone real estate photography of a Kentucky home",
    primary: true,
    ctaText: "View Packages & Pricing",
  },
  {
    slug: "events",
    title: "Events",
    blurb:
      "Weddings, baby showers, birthdays, and special occasions across Kentucky. Captured candidly so the day feels like the day — not staged, not over-edited.",
    image: "/images/kentucky-event-catering-photography.webp",
    imageAlt: "Catered event spread photographed by CS Media",
    ctaText: "Learn More",
  },
  {
    slug: "video-production",
    title: "Video Production",
    blurb:
      "Promo videos, business content, and social media reels for Kentucky brands. From single-take phone reels to multi-camera promotional shoots.",
    image: "/images/leitchfield-downtown-holiday-event-aerial.webp",
    imageAlt: "Aerial drone footage of a Kentucky downtown event — CS Media video production work",
    ctaText: "Learn More",
  },
];

export default function ServicesHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-dark-900 py-20 sm:py-32 overflow-hidden">
        <Image
          src="/images/brick-home-aerial-drone-kentucky.webp"
          alt="CS Media — Kentucky photography and video services"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/65 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Our Services
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Photo &amp; Video Services in Kentucky
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-100 max-w-2xl mx-auto leading-relaxed">
              Real estate listings, weddings, and promo videos — pick the service line that fits your project.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4-Card Hub */}
      <section className="py-16 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <FadeIn key={cat.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${cat.slug}`}
                  className={`group relative block h-full overflow-hidden rounded-2xl border transition-all ${
                    cat.primary
                      ? "border-gold/30 bg-dark-700 hover:border-gold/60"
                      : "border-dark-500/30 bg-dark-700/60 hover:border-gold/30"
                  }`}
                >
                  {cat.primary && (
                    <span className="absolute top-4 right-4 z-20 text-[10px] font-bold uppercase tracking-wider text-dark-900 bg-gold rounded-full px-2.5 py-0.5">
                      Featured
                    </span>
                  )}
                  <div className="relative aspect-[16/9] overflow-hidden bg-dark-900">
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform-gpu duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/30 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 text-center flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors">
                      {cat.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-dark-100 leading-relaxed">
                      {cat.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold group-hover:border-gold group-hover:bg-gold/15 transition-all">
                      {cat.ctaText}
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* About Strip */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-base sm:text-lg text-dark-100 leading-relaxed">
              CS Media is a one-photographer studio based in Leitchfield, Kentucky. Bookings go straight to me — not a queue, not a salesperson — and your photos come back edited within 24–48 hours. That's the whole pitch.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        subheading="Tell us about your project and we'll recommend the right service for the job."
        desktopSubheading="Tell us about your project and we'll recommend the right service for the job."
        buttonText="Request a Quote"
        useTextLink
      />
    </>
  );
}
