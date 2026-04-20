import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import BookingButton from "@/components/BookingButton";
import { getPageContent } from "@/lib/supabase/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Real Estate Photography Packages & Pricing in Kentucky",
  description:
    "Hire a listing photographer in Kentucky. Packages from $85 — drone aerials, interior + exterior photos, listing video, virtual staging. 24-48hr delivery. Book today.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Real Estate Photography Packages & Pricing | CS Media",
    description:
      "Hire a listing photographer in Kentucky. Packages from $85 — drone aerials, interior + exterior photos, listing video, virtual staging. 24-48hr delivery. Book today.",
    type: "website",
    url: `${BASE_URL}/services`,
    siteName: "CS Media",
    images: [{ url: "/images/brick-home-aerial-drone-kentucky.webp", width: 1200, height: 630, alt: "Aerial drone photo of a real estate property in Kentucky" }],
  },
};

interface PricingPackage {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
}

export default async function ServicesPage() {
  const [_headerContent, _pricingContent, _stagingContent, _ctaContent] =
    await Promise.all([
      getPageContent("services", "header"),
      getPageContent("services", "pricing"),
      getPageContent("services", "staging"),
      getPageContent("services", "cta"),
    ]);

  // Header
  const headerTagline = "Services & Pricing";
  const headerHeading = "Pick a Package. Book a Shoot.";
  const headerSubtext = "High-quality media that helps your listings stand out — without breaking the bank.";

  // Pricing
  const pricingTagline = "Pricing";
  const pricingHeading = "Real Estate Media Packages";
  const packages: PricingPackage[] = [
    {
      name: "Photo Package",
      price: "$200",
      popular: false,
      features: [
        "25–40 professionally edited photos",
        "Interior + exterior coverage",
        "Drone photos (FAA Part 107 compliant)",
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
      popular: false,
      features: [
        "Everything in Photo Package",
        "60–90 second cinematic video",
        "Advanced editing + smooth motion shots",
        "Cinematic color grading",
        "Agent branding + higher-end feel",
        "2 free revisions included",
      ],
    },
  ];
  const smallerPackages: PricingPackage[] = [
    {
      name: "Interior + Exterior (No Drone)",
      price: "$140",
      popular: false,
      features: [
        "25–40 professionally edited photos",
        "Interior + exterior coverage",
        "MLS-ready",
        "1 free revision included",
      ],
    },
    {
      name: "Aerial Only",
      price: "$85",
      popular: false,
      features: [
        "5 high-quality drone photos",
        "Property + surrounding area highlights",
        "FAA Part 107 compliant",
        "1 free revision included",
      ],
    },
  ];
  const addOns = [
    { name: "Twilight Edit", price: "+$25 per photo" },
    { name: "Rush Delivery (24hr)", price: "+$40" },
    { name: "Virtual Staging", price: "+$25 per photo / +$50 per video scene" },
    { name: "Additional Photos", price: "+$5 per image" },
  ];
  const revisionPolicy = [
    "Additional revisions beyond included: $15 per request",
    "Major edits (object removal, sky swaps, virtual staging changes, etc.) quoted separately",
    "Revision requests must be submitted within 3 days of delivery",
  ];
  const finePrint = [
    "6% sales tax and 2-way mileage applied to final pricing.",
    "Mileage is determined by Google Maps distance for round trip from Leitchfield.",
  ];

  // Staging
  const stagingHeading = "Virtual Staging";
  const stagingDescription =
    "Empty rooms sit on the market longer. Virtual staging helps buyers picture themselves living there — so they book showings faster. Realistic furniture and decor, digitally placed at a fraction of the cost of physical staging.";
  const stagingPriceText = "+$25 per photo · +$50 per video scene";
  const stagingIncluded = [
    "Realistic furniture placement",
    "Modern, farmhouse, luxury — any style",
    "High-res MLS-ready files",
    "Ready in 24–48 hours",
    "Revision rounds included",
  ];
  const stagingIdealFor = [
    "Vacant listings that aren't getting showings",
    "New construction",
    "Flips & renovations",
    "Rental properties",
  ];

  // CTA
  const ctaHeading = "Not Sure Which Package You Need?";
  const ctaSubheading = "Text or call and we'll recommend the right option for your listing.";
  const ctaButtonText = "Request a Quote";

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS MEDIA, LLC",
    description: "Professional real estate drone photography, listing video, and virtual staging services in Kentucky.",
    url: `${BASE_URL}/services`,
    telephone: "+1-270-307-0173",
    email: "cscreatesmediallc@gmail.com",
    priceRange: "$85-$380",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leitchfield",
      addressRegion: "KY",
      postalCode: "42754",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Leitchfield" },
      { "@type": "City", name: "Elizabethtown" },
      { "@type": "City", name: "Bowling Green" },
      { "@type": "City", name: "Owensboro" },
      { "@type": "City", name: "Bardstown" },
      { "@type": "State", name: "Kentucky" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does real estate drone photography cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CS Media offers real estate media packages from $85. Aerial-only is $85, Interior + Exterior (no drone) is $140, the Photo Package with drone is $200, and the Full Package with cinematic listing video runs $280–$380. 6% sales tax and 2-way mileage are applied to the final price.",
        },
      },
      {
        "@type": "Question",
        name: "Do you need a license to fly drones for real estate photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Commercial drone pilots must hold an FAA Part 107 Remote Pilot Certificate. CS Media is fully FAA Part 107 certified for all aerial photography and videography work.",
        },
      },
      {
        "@type": "Question",
        name: "What is virtual staging and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor. It helps buyers visualize a property's potential at a fraction of the cost of physical staging. CS Media offers virtual staging as an add-on at $25 per photo or $50 per video scene, with 24-48 hour turnaround.",
        },
      },
      {
        "@type": "Question",
        name: "How fast will I get my real estate photos back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CS Media provides a 24-48 hour turnaround on all real estate photography, drone media, and virtual staging deliverables.",
        },
      },
      {
        "@type": "Question",
        name: "Do you travel outside of Kentucky?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. While CS Media is based in Leitchfield, KY and primarily serves Kentucky, we are available for projects in neighboring states and beyond. Travel fees apply for out-of-state shoots. Contact us with your location and project details for a quote.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section className="relative bg-dark-900 py-20 sm:py-36 min-h-[45vh] overflow-hidden">
        <Image
          src="/images/rustic-kitchen-wood-beams-island.webp"
          alt="Professional real estate photography of a rustic kitchen with wood beams in Kentucky"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-dark-900/55 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              {headerTagline}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              {headerHeading}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              {headerSubtext}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 sm:py-28 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {pricingTagline}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                {pricingHeading}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
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
                  <div
                    className={`absolute inset-0 ${
                      pkg.popular
                        ? "bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.08),transparent_70%)]"
                        : "opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]"
                    }`}
                  />
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
                    <BookingButton
                      className={`mt-6 w-full rounded-full py-3 text-xs font-semibold uppercase tracking-widest text-center transition-all cursor-pointer ${
                        pkg.popular
                          ? "bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25"
                          : "bg-dark-600 border border-dark-500/50 text-dark-100 hover:border-gold/30 hover:text-gold"
                      }`}
                    >
                      Book Now
                    </BookingButton>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Smaller packages */}
          <FadeIn>
            <div className="mt-12 mb-6 text-center">
              <span className="text-gold/70 text-[10px] font-mono uppercase tracking-[0.3em]">
                Smaller Packages
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {smallerPackages.map((pkg, index) => (
              <FadeIn key={pkg.name} delay={index * 0.1}>
                <div className="relative rounded-2xl bg-dark-700/60 border border-dark-500/30 p-6 h-full flex flex-col hover:border-gold/20 transition-colors">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                      {pkg.name}
                    </h3>
                    <span className="text-2xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <div className="mt-4 space-y-2 flex-1">
                    {pkg.features.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                        <svg className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <BookingButton
                    className="mt-5 w-full rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-widest text-center transition-all cursor-pointer bg-dark-600 border border-dark-500/50 text-dark-100 hover:border-gold/30 hover:text-gold"
                  >
                    Book Now
                  </BookingButton>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fine print */}
          <FadeIn>
            <div className="mt-10 text-center space-y-1">
              {finePrint.map((line) => (
                <p key={line} className="text-xs text-dark-300">
                  {line}
                </p>
              ))}
              <p className="text-xs text-dark-300 pt-2">
                <Link
                  href="/blog/real-estate-photography-cost-kentucky"
                  className="text-gold hover:underline"
                >
                  Full Kentucky pricing breakdown →
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Add-Ons & Revision Policy */}
      <section className="py-16 sm:py-24 bg-dark-900 relative">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <FadeIn>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Add-Ons
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Build Out Your Shoot
                </h2>
                <ul className="mt-6 divide-y divide-dark-500/30">
                  {addOns.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <span className="text-sm text-dark-100">{item.name}</span>
                      <span className="text-sm font-mono text-gold whitespace-nowrap text-right">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Revision Policy
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Edits & Reworks
                </h2>
                <ul className="mt-6 space-y-3">
                  {revisionPolicy.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-dark-100"
                    >
                      <span className="text-gold/50 mt-1.5 flex-shrink-0 text-[8px]">&#9670;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Virtual Staging Section */}
      <section className="py-16 sm:py-28 bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-5xl font-bold text-gold/20 font-mono">+</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {stagingHeading}
                </h2>
                <p className="mt-4 text-dark-200 leading-relaxed">
                  {stagingDescription}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                  <span className="h-px w-4 bg-gold/40" />
                  {stagingPriceText}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {stagingIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                          <svg className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      Ideal For
                    </h3>
                    <ul className="space-y-2.5">
                      {stagingIdealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                          <span className="text-gold/50 mt-0.5 flex-shrink-0 text-xs">&#9670;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <BeforeAfter
                  beforeSrc="/images/virtual-staging-before-empty-room.webp"
                  afterSrc="/images/virtual-staging-after-furnished.webp"
                  beforeAlt="Empty room before virtual staging"
                  afterAlt="Virtually staged room with furniture and decor"
                />
                <p className="mt-3 text-center text-xs text-dark-300 font-mono tracking-wider">
                  DRAG TO COMPARE &mdash; BEFORE &amp; AFTER
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Service Areas
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                Real Estate Photography Across Kentucky
              </h2>
              <p className="mt-4 text-dark-200 max-w-2xl mx-auto">
                Based in Leitchfield and serving listings across Grayson County and the rest of Kentucky. Pick your market below for local details, airspace notes, and what we shoot in your area.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                slug: "leitchfield",
                city: "Leitchfield",
                county: "Grayson County",
                blurb:
                  "Our home market. No mileage fees anywhere in Grayson County. Farms, acreage, residential, and Rough River rental listings.",
              },
              {
                slug: "elizabethtown",
                city: "Elizabethtown",
                county: "Hardin County",
                blurb:
                  "Residential listings, new construction, and Fort Knox-area properties with drone aerials and HDR interior photos.",
              },
              {
                slug: "bowling-green",
                city: "Bowling Green",
                county: "Warren County",
                blurb:
                  "One of the fastest-growing markets in the region — new builds, subdivisions, and mid-market homes shot for MLS and agent portfolios.",
              },
              {
                slug: "owensboro",
                city: "Owensboro",
                county: "Daviess County",
                blurb:
                  "Urban and suburban listings along the Ohio River. Interior, exterior, and aerial coverage for downtown and neighborhood properties.",
              },
              {
                slug: "bardstown",
                city: "Bardstown",
                county: "Nelson County",
                blurb:
                  "Historic homes, bourbon country estates, and rural acreage. Drone and cinematic video that captures the land and the architecture.",
              },
            ].map((area, i) => (
              <FadeIn key={area.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${area.slug}`}
                  className="group block h-full rounded-xl border border-dark-500/30 bg-dark-900/40 p-6 transition-all hover:border-gold/40 hover:bg-dark-900/60"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70">
                    {area.county}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    Real Estate Photography in {area.city}, KY
                  </h3>
                  <p className="mt-3 text-sm text-dark-200 leading-relaxed">
                    {area.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-gold/70 group-hover:text-gold transition-colors">
                    View {area.city} packages
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-dark-300">
            Serving all of Kentucky. Out-of-state projects available on request —{" "}
            <Link href="/contact" className="text-gold hover:underline">
              get a quote
            </Link>
            .
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-28 bg-dark-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                FAQ
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                Common Questions
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {[
              {
                q: "How much does real estate drone photography cost?",
                a: "CS Media offers real estate media packages from $85. Aerial-only is $85, Interior + Exterior (no drone) is $140, the Photo Package with drone is $200, and the Full Package with cinematic listing video runs $280\u2013$380. 6% sales tax and 2-way mileage are applied to the final price.",
              },
              {
                q: "Do you need a license to fly drones for real estate photos?",
                a: "Yes. Commercial drone pilots must hold an FAA Part 107 Remote Pilot Certificate. CS Media is fully FAA Part 107 certified for all aerial photography and videography work.",
              },
              {
                q: "What is virtual staging and how does it work?",
                a: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor. It helps buyers visualize a property\u2019s potential at a fraction of the cost of physical staging. CS Media offers virtual staging as an add-on at $25 per photo or $50 per video scene, with 24\u201348 hour turnaround.",
              },
              {
                q: "How fast will I get my real estate photos back?",
                a: "CS Media provides a 24\u201348 hour turnaround on all real estate photography, drone media, and virtual staging deliverables.",
              },
              {
                q: "Do you travel outside of Kentucky?",
                a: "Yes. While CS Media is based in Leitchfield, KY and primarily serves Kentucky, we\u2019re available for projects in neighboring states and beyond. Travel fees apply for out-of-state shoots. Contact us with your location and project details for a quote.",
              },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-b border-dark-500/30 pb-8">
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="mt-3 text-dark-200 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      <CTASection
        heading={ctaHeading}
        subheading={ctaSubheading}
        desktopSubheading="Reach out and we'll recommend the perfect option for your project."
        buttonText={ctaButtonText}
        useTextLink
      />
    </>
  );
}
