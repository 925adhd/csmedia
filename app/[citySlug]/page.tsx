import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations, getLocationBySlug } from "@/lib/locations";
import { getTestimonials } from "@/lib/supabase/queries";

const URL_SUFFIX = "-real-estate-photography";

function citySlugToLocSlug(citySlug: string): string | null {
  if (!citySlug.endsWith(URL_SUFFIX)) return null;
  return citySlug.slice(0, -URL_SUFFIX.length);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return locations.map((loc) => ({ citySlug: `${loc.slug}${URL_SUFFIX}` }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  const { citySlug } = await params;
  const slug = citySlugToLocSlug(citySlug);
  const loc = slug ? getLocationBySlug(slug) : undefined;
  if (!loc) return {};

  const title = `${loc.city} Real Estate Photography & Drone Video | ${loc.county} KY`;
  const description = `Professional real estate photography, drone video & virtual staging in ${loc.city}, ${loc.county}, Kentucky. FAA Part 107 certified. From $85.`;

  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${citySlug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/${citySlug}`,
      siteName: "CS Media",
      images: [
        {
          url: "/images/real-estate-aerial-drone-leitchfield-ky.webp",
          width: 1200,
          height: 630,
          alt: `Real estate drone photography in ${loc.city}, Kentucky`,
        },
      ],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const slug = citySlugToLocSlug(citySlug);
  const loc = slug ? getLocationBySlug(slug) : undefined;
  if (!loc) notFound();

  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CS MEDIA, LLC",
    telephone: "+1-270-307-0173",
    url: BASE_URL,
    image: `${BASE_URL}/images/real-estate-aerial-drone-leitchfield-ky.webp`,
    priceRange: "$85-$380",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leitchfield",
      addressRegion: "KY",
      postalCode: "42754",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4801,
      longitude: -86.2938,
    },
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${loc.county}, Kentucky`,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate Photography",
        item: `${BASE_URL}/services/real-estate`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${loc.city} Real Estate Photography`,
        item: `${BASE_URL}/${citySlug}`,
      },
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS MEDIA, LLC",
    description: `Professional real estate drone photography, videography, and virtual staging services in ${loc.city}, ${loc.state}.`,
    telephone: "+1-270-307-0173",
    email: "cscreatesmediallc@gmail.com",
    url: `${BASE_URL}/${citySlug}`,
    image: `${BASE_URL}/images/real-estate-aerial-drone-leitchfield-ky.webp`,
    priceRange: "$85-$380",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leitchfield",
      addressRegion: "KY",
      postalCode: "42754",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4801,
      longitude: -86.2938,
    },
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${loc.county}, ${loc.state}`,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Media Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Photography" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone Photography & Video" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Listing Video" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virtual Staging" } },
      ],
    },
  };

  const isHomeBase = loc.slug === "leitchfield";

  const testimonials = await getTestimonials();
  const displayTestimonials =
    testimonials.length > 0
      ? testimonials.slice(0, 2)
      : [
          {
            quote:
              "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!",
            name: "Snow Dogs Food Truck",
            badge: "Recommends CS MEDIA, LLC",
            service: "Video Production",
          },
          {
            quote:
              "I would recommend CS MEDIA to anyone! Simply the best person to work with and has PHENOMENAL turn around time. The photos taken of my wedding I'll cherish for a lifetime.",
            name: "Bethany Brim",
            badge: "Recommends CS MEDIA, LLC",
            service: "Event Photography",
          },
        ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            faqSchema,
            breadcrumbSchema,
            professionalServiceSchema,
          ]),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Real Estate Photography", href: "/services/real-estate" },
          { label: `${loc.city} Real Estate Photography` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-dark-900 py-12 sm:py-28 overflow-hidden">
        <Image
          src="/images/real-estate-aerial-drone-leitchfield-ky.webp"
          alt={`${loc.city}, KY real estate drone photography`}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-dark-900/55 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              {loc.tagline}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {loc.city} Real Estate Photography
            </h1>
            <p className="mt-2 text-base sm:text-xl text-gold/80 font-medium">
              Drone, photo &amp; listing video for {loc.city}, {loc.state} listings
            </p>
            <p className="mt-4 text-sm sm:text-lg text-dark-200 max-w-2xl mx-auto leading-relaxed">
              {loc.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-dark-800 py-6 border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className="w-4 h-4 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              5.0 Stars
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-dark-400">·</span>
            <span className="text-sm text-dark-100">
              Trusted by Kentucky Realtors
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-dark-400">·</span>
            <span className="text-sm text-dark-100">
              FAA Part 107 Certified
            </span>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-12 sm:py-24 bg-dark-800 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  The {loc.city} Market
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {loc.city} Real Estate Photography &amp; the {loc.county} Market
                </h2>
                <p className="mt-5 text-dark-100 leading-relaxed">
                  {loc.marketContext}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Why CS Media
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  How We Shoot {loc.city} Listings
                </h2>
                <p className="mt-5 text-dark-100 leading-relaxed">
                  {loc.whyUs}
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  label: "FAA Part 107",
                  desc: "Certified & insured for every flight",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
                {
                  label: "24-48hr Turnaround",
                  desc: "Edited files delivered fast",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: loc.distanceFromBase,
                  desc: `Serving ${loc.city} & ${loc.county}`,
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-dark-700 border border-dark-500/30 p-6 text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-dark-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Drone Photography Details */}
      <section className="py-12 sm:py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Aerial Photography
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {loc.city} Drone Photography &amp; Aerial Real Estate Video
                </h2>
                <p className="mt-5 text-dark-100 leading-relaxed">
                  {loc.droneDetails}
                </p>
                <div className="mt-8">
                  <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                    Our {loc.city} Real Estate Services
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Interior & exterior real estate photography",
                      "FAA-certified drone photos & video",
                      "Cinematic property walkthrough videos",
                      "Virtual staging (+$25 per photo)",
                      "Twilight edits (+$25 per photo)",
                      "Social media highlight reels",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                        <svg className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-dark-500/30">
                <Image
                  src="/images/real-estate-aerial-drone-leitchfield-ky.webp"
                  alt={`Drone photography example for ${loc.city}, KY real estate`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Blocks (BCP-style stacked) */}
      <section className="py-12 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                What&apos;s Included
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                Real Estate Media Services in {loc.city}, {loc.state}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8 sm:space-y-10">
            {[
              {
                title: "Photography",
                body: `Bright, clean MLS-ready interior and exterior real estate photos for ${loc.city} and ${loc.county} listings. Every shoot includes professional HDR editing and color correction. Delivered in 24-48 hours.`,
              },
              {
                title: "Drone Photography",
                body: `FAA Part 107 certified aerial real estate photography in ${loc.city}, KY. Drone shots are included on every applicable shoot — not billed as a separate add-on. Aerial coverage shows lot context, acreage, and surroundings.`,
              },
              {
                title: "Listing Video",
                body: `30-90 second cinematic walkthrough videos for ${loc.city} real estate listings. Optimized for MLS, agent websites, and social media. Buyers tour the property before they ever schedule a showing.`,
              },
              {
                title: "Virtual Staging",
                body: `Empty rooms digitally furnished with realistic furniture and decor. A fraction of the cost of physical staging, available as a $25/photo add-on for any ${loc.city} or ${loc.county} listing.`,
              },
              {
                title: "Twilight Edits",
                body: `Premium twilight-edit treatment of exterior and aerial shots — turning daytime photos into golden-hour dramatics that stop the scroll. Available as a $25/photo add-on for any package.`,
              },
            ].map((s) => (
              <FadeIn key={s.title}>
                <div className="border-b border-dark-500/30 pb-8 sm:pb-10 last:border-b-0">
                  <h3 className="text-sm font-bold text-gold uppercase tracking-[0.2em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-dark-100 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/services/real-estate"
                className="text-sm text-gold hover:text-gold/80 transition-colors font-medium"
              >
                View all packages, add-ons &amp; pricing &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Property Types We Photograph */}
      <section className="py-12 sm:py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                What We Shoot
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                {loc.city} Property Types We Photograph
              </h2>
            </div>
          </FadeIn>
          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
            {loc.propertyTypes.map((pt, i) => (
              <FadeIn key={pt.name} delay={i * 0.1}>
                <div className="min-w-[280px] md:min-w-0 snap-start rounded-2xl bg-dark-700 border border-dark-500/30 p-6 sm:p-8 h-full hover:border-gold/20 transition-colors">
                  <h3 className="text-sm font-semibold text-gold uppercase tracking-[0.15em]">
                    {pt.name}
                  </h3>
                  <p className="mt-3 text-dark-100 leading-relaxed text-sm">
                    {pt.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-3 text-center text-[10px] text-dark-300 font-mono uppercase tracking-widest md:hidden">
            Swipe for more &rarr;
          </p>
        </div>
      </section>

      {/* Local Insight */}
      <section className="py-12 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Local Insight
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                What {loc.city} Sellers &amp; Agents Should Know
              </h2>
              <p className="mt-4 sm:mt-5 text-dark-100 leading-relaxed text-sm sm:text-base">
                {loc.localInsight}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Pricing
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                {loc.city} Real Estate Photography Packages
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Photo Package",
                price: "$200",
                features: [
                  "25–40 edited photos",
                  "Interior + exterior coverage",
                  "Drone photos (FAA Part 107)",
                  "MLS-ready delivery",
                  "1 free revision included",
                ],
              },
              {
                name: "Full Package — Standard",
                price: "$280",
                popular: true,
                features: [
                  "Everything in Photo Package",
                  "30–45 second listing video",
                  "Basic transitions + music",
                  "Optimized for social + MLS",
                  "1 free revision included",
                ],
              },
              {
                name: "Full Package — Pro",
                price: "$380",
                features: [
                  "Everything in Photo Package",
                  "60–90 second cinematic video",
                  "Advanced editing + motion shots",
                  "Cinematic color grading",
                  "Agent branding + premium feel",
                  "2 free revisions included",
                ],
              },
            ].map((pkg, index) => (
              <FadeIn key={pkg.name} delay={index * 0.1}>
                <div
                  className={`relative rounded-2xl bg-dark-700 border ${
                    pkg.popular ? "border-gold/30" : "border-dark-500/30"
                  } p-8 h-full flex flex-col overflow-hidden group ${
                    !pkg.popular ? "hover:border-gold/20 transition-colors" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                  )}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={pkg.popular ? "flex items-center justify-between" : ""}>
                      <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                        {pkg.name}
                      </h3>
                      {pkg.popular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-dark-900 bg-gold rounded-full px-2.5 py-0.5">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
                      {!isHomeBase && (
                        <span className="text-xs text-dark-300">{loc.mileageNote}</span>
                      )}
                    </div>
                    <div className="mt-6 space-y-3 flex-1">
                      {pkg.features.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                          <svg className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center space-y-1">
              <p className="text-xs text-dark-300">
                6% sales tax{!isHomeBase ? " and 2-way mileage" : ""} applied to final pricing.
              </p>
              {!isHomeBase && (
                <p className="text-xs text-dark-300">
                  Mileage is determined by Google Maps distance for round trip from Leitchfield.
                </p>
              )}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="mt-8 text-center">
              <Link
                href="/services/real-estate"
                className="text-sm text-gold hover:text-gold/80 transition-colors font-medium"
              >
                View all packages &amp; add-ons &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                FAQ
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                {loc.city} Real Estate Photography FAQs
              </h2>
            </div>
          </FadeIn>
          <FAQAccordion faqs={loc.faqs} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-24 bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Reviews
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                What Our Clients Say
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} aria-hidden="true" className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-dark-100 font-mono">5.0</span>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {displayTestimonials.map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <article className="relative rounded-2xl bg-dark-700 p-8 border border-dark-500/30 hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                  <span className="text-gold/10 text-[100px] font-serif leading-none absolute -top-4 -left-2 select-none" aria-hidden="true">
                    &ldquo;
                  </span>
                  <span className="inline-block self-start rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold mb-4 relative z-10">
                    {testimonial.service}
                  </span>
                  <p className="text-dark-100 leading-relaxed relative z-10 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-dark-500/30 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-gold font-bold text-xs">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-gold/60 font-mono tracking-wider">{testimonial.badge}</p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <a
                href="https://www.facebook.com/profile.php?id=100090509656389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-dark-300 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                See our reviews on Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Our Work
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                {loc.city} Real Estate Photography Portfolio
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {loc.galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-dark-500/30">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 text-center">
              <Link
                href="/portfolio"
                className="text-sm text-gold hover:text-gold/80 transition-colors font-medium"
              >
                View full portfolio &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Geographic Coverage — BCP-style */}
      <section className="py-12 sm:py-16 bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Serving Real Estate Agents Across {loc.county}
              </h2>
              <p className="mt-5 text-dark-100 leading-relaxed">
                Headquartered in Leitchfield and on the road most weeks, CS Media
                works with real estate agents, Airbnb hosts, property managers,
                and private sellers throughout {loc.city} and surrounding{" "}
                {loc.county}. Our regular shoot routes cover Hardin, Grayson,
                Warren, Daviess, Nelson, LaRue, Hart, Breckinridge, Meade, and
                Bullitt counties — central and western Kentucky's main real
                estate corridors.
              </p>
              <p className="mt-6 text-sm text-dark-200 leading-loose">
                We serve {loc.county}, including:{" "}
                {loc.nearbyTowns.map((town, i) => {
                  const isLast = i === loc.nearbyTowns.length - 1;
                  const matchingLoc = locations.find(
                    (l) => l.city.toLowerCase() === town.toLowerCase(),
                  );
                  return (
                    <span key={town}>
                      {matchingLoc && matchingLoc.slug !== loc.slug ? (
                        <Link
                          href={`/${matchingLoc.slug}${URL_SUFFIX}`}
                          className="text-gold hover:underline"
                        >
                          {town}
                        </Link>
                      ) : (
                        <span className="text-white">{town}</span>
                      )}
                      {isLast ? "." : ", "}
                    </span>
                  );
                })}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other Cities We Serve */}
      <section className="py-10 sm:py-14 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Other Markets We Serve
              </span>
              <h2 className="mt-3 text-lg sm:text-xl font-bold text-white tracking-tight">
                Real Estate Photography Across Kentucky
              </h2>
              <p className="mt-5 text-sm text-dark-100 leading-loose">
                {locations
                  .filter((l) => l.slug !== loc.slug)
                  .map((l, i, arr) => (
                    <span key={l.slug}>
                      <Link
                        href={`/${l.slug}${URL_SUFFIX}`}
                        className="text-gold hover:underline"
                      >
                        {l.city} Real Estate Photography
                      </Link>
                      {i < arr.length - 1 ? "  ·  " : ""}
                    </span>
                  ))}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading={`Ready to Book Your ${loc.city} Shoot?`}
        subheading={loc.closingPitch}
        desktopSubheading={loc.closingPitch}
        buttonText="Request a Quote"
        useTextLink
      />
    </>
  );
}
