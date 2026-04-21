import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import VideoPlayer from "@/components/VideoPlayer";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Video Production in Kentucky | CS Media",
  description:
    "Promo videos, business content, and social media reels for Kentucky brands. From single-take phone reels to multi-camera promotional shoots.",
  alternates: { canonical: `${BASE_URL}/services/video-production` },
  openGraph: {
    title: "Video Production in Kentucky | CS Media",
    description:
      "Promo videos and social media content for Kentucky brands.",
    type: "website",
    url: `${BASE_URL}/services/video-production`,
    siteName: "CS Media",
    images: [{ url: "/images/cs-media-video-production-studio-kentucky.webp", width: 1200, height: 630, alt: "CS Media video production studio with ring light, gimbal slider, and cinema cameras" }],
  },
};

export default function VideoProductionPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Video Production", item: `${BASE_URL}/services/video-production` },
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS MEDIA, LLC — Video Production",
    description:
      "Video production across Kentucky — promo videos, social media reels, business content, and event highlight videos.",
    url: `${BASE_URL}/services/video-production`,
    telephone: "+1-270-307-0173",
    email: "cscreatesmediallc@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leitchfield",
      addressRegion: "KY",
      postalCode: "42754",
      addressCountry: "US",
    },
    areaServed: { "@type": "State", name: "Kentucky" },
    serviceType: [
      "Promotional Video Production",
      "Social Media Reel Production",
      "Business Video Content",
      "Event Highlight Videos",
      "Drone Aerial Videography",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Video Production" },
        ]}
      />

      <section className="relative bg-dark-900 py-20 sm:py-32 overflow-hidden">
        <Image
          src="/images/cs-media-video-production-studio-kentucky.webp"
          alt="CS Media video production studio with ring light, gimbal slider, and cinema cameras"
          fill
          sizes="100vw"
          className="object-cover object-[center_45%] opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/65 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Video Production
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Kentucky Video Production
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-100 max-w-2xl mx-auto leading-relaxed">
              Promo videos, business content, and social media reels for Kentucky brands. From single-take phone reels to multi-camera promotional shoots.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Featured Work
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                Recent Video Production
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Snow Dogs — New Flavors",
                blurb: "Food truck promo — Instagram Reel",
                src: "/videos/AQMTGLJELhNI8g-x60_-LwJaWh4YUL-BqzR-lX97vm1KPwK0wkYjh-54nC3Fesq5fwmZcQl5n2dHxe3ZNf3rifaCTsadd-YeIkjtvSgkw5z7QQ.mp4",
                poster: "/images/cs-media-video-production-poster-kentucky.webp",
                posterAlt: "Snow Dogs new flavors promo thumbnail",
              },
              {
                title: "Local Business Promo",
                blurb: "High-energy business promo — cinematic cuts",
                src: "/videos/truckpromo.mp4",
                poster: "/images/gmc-truck-promo-video-kentucky.webp",
                posterAlt: "GMC truck promo video thumbnail",
              },
              {
                title: "Town Events Highlights",
                blurb: "Community event coverage — drone + ground",
                src: "/videos/towneventsexample.mp4",
                poster: "/images/leitchfield-downtown-holiday-event-aerial.webp",
                posterAlt: "Leitchfield downtown holiday event aerial thumbnail",
              },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="flex flex-col">
                  <div className="relative rounded-2xl overflow-hidden border border-dark-500/30 bg-dark-900">
                    <VideoPlayer
                      src={v.src}
                      poster={v.poster}
                      posterAlt={v.posterAlt}
                      aspectRatio="aspect-[9/16]"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-xs text-dark-300 font-mono uppercase tracking-wider">
                      {v.blurb}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-dark-900 overflow-hidden">
        <Image
          src="/images/real-estate-media-process-background-kentucky.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/75 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What We Shoot
            </h2>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {[
                "Business promotional videos",
                "Restaurant & food truck promos",
                "Social media reels (TikTok / IG / FB)",
                "Event coverage & highlights",
                "Brand storytelling content",
                "Drone aerial b-roll",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                  <svg className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 mx-auto max-w-xl rounded-2xl bg-dark-700 border border-dark-500/30 p-8">
              <p className="text-dark-100 leading-relaxed italic">
                &ldquo;We couldn&apos;t be happier with a promo video she shot for us! She made it so much fun, can&apos;t wait to do another!!!!&rdquo;
              </p>
              <footer className="mt-4 text-sm font-mono uppercase tracking-wider text-gold/70">
                — Snow Dogs Food Truck
              </footer>
            </blockquote>
            <p className="mt-12 text-sm text-dark-200">
              Video projects are custom-quoted based on scope, length, and locations.{" "}
              <Link href="/book" className="text-gold hover:underline">
                Request a quote
              </Link>{" "}
              with what you have in mind.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Have a Video Project in Mind?"
        subheading="Tell us about the project — we'll respond with a quote and timeline."
        desktopSubheading="Tell us about the project — we'll respond with a quote and timeline."
        buttonText="Request a Quote"
        useTextLink
      />
    </>
  );
}
