import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingButton from "@/components/BookingButton";
import { StampIcon, DroneIcon, PolaroidIcon } from "@/components/StepIcons";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Services | CS Media: Real Estate, Events & Video Production",
  description:
    "CS Media offers professional real estate photography, event photography, and video production services across Central Kentucky. Pick a service line to learn more.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Services | CS Media",
    description:
      "Real estate photography, weddings, and video production across Central Kentucky.",
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
      "Real estate photography, drone video, and virtual staging that get listings clicked, toured, and sold. Packages from $185 with 24–48 hour turnaround.",
    image: "/images/brick-home-aerial-drone-kentucky.webp",
    imageAlt: "Aerial drone real estate photography of a Kentucky home",
    primary: true,
    ctaText: "View Packages & Pricing",
  },
  {
    slug: "video-production",
    title: "Video Production",
    blurb:
      "Promo videos, business content, and social media reels for Kentucky brands. From single-take phone reels to multi-camera promotional shoots.",
    image: "/images/cs-media-video-production-studio-kentucky.webp",
    imageAlt: "CS Media video production studio with ring light, gimbal slider, and cinema cameras",
    ctaText: "Learn More",
  },
  {
    slug: "events",
    title: "Events",
    blurb:
      "Weddings, baby showers, birthdays, and special occasions across Central Kentucky. Captured candidly so the day feels like the day, not staged, not over-edited.",
    image: "/images/kentucky-wedding-photography.webp",
    imageAlt: "Bride and groom holding hands over a Bible at their Kentucky wedding, photographed by CS Media",
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
        <video
          src="/videos/cs-media-downtown-kentucky-photography-session.mp4"
          poster="/images/cs-media-downtown-kentucky-photography-session-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/65 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <FadeIn disableOnMobile>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Our Services
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Photo &amp; Video Services in Kentucky
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-100 max-w-2xl mx-auto leading-relaxed">
              Real estate listings, promo videos, and events. Pick the service line that fits your project.
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

      {/* How It Works */}
      <section id="process" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                How Our Photo &amp; Video{" "}
                <span className="relative inline-block">
                  Process Works
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto relative">
            {/* Connector line between steps on desktop */}
            <div aria-hidden className="hidden md:block absolute top-[11px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

            {[
              { step: "01", title: "Book Your Shoot", desc: "Send a quick request by text, call, or the form. We’ll confirm the date and arrive on time, ready to go.", Icon: StampIcon },
              { step: "02", title: "We Capture It", desc: "Professional drone, photo, and video coverage, tailored to your project.", Icon: DroneIcon },
              { step: "03", title: "Get Your Media", desc: "Edited photos and video delivered fast—plus virtual staging for real estate listings.", Icon: PolaroidIcon },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative text-left md:text-center px-2">
                  <div className="inline-flex items-center gap-3 mb-4 bg-dark-800 md:bg-dark-800 relative z-10 md:px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70">Step {item.step}</span>
                  </div>
                  <div className="text-gold/80 mb-4 md:mx-auto md:w-fit">
                    <item.Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-100 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.45}>
            <div className="mt-14 text-center">
              <BookingButton
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold hover:border-gold hover:bg-gold/15 transition-all cursor-pointer"
              >
                Book a Shoot
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </BookingButton>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
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
