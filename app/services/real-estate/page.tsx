import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import BookingButton from "@/components/BookingButton";
import MobileStickyBookBar from "@/components/MobileStickyBookBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations } from "@/lib/locations";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Kentucky Real Estate Photography & Drone Video | Packages from $85",
  description:
    "Professional real estate photography, drone video, and virtual staging across Kentucky. FAA Part 107 certified. Packages from $85, delivered in 24–48 hours. Serving Leitchfield, Elizabethtown, Bowling Green, Owensboro, Bardstown & more.",
  alternates: { canonical: `${BASE_URL}/services/real-estate` },
  openGraph: {
    title: "Kentucky Real Estate Photography & Drone Video | CS Media",
    description:
      "Professional real estate photography, drone video, and virtual staging across Kentucky. FAA Part 107 certified. Packages from $85, delivered in 24–48 hours.",
    type: "website",
    url: `${BASE_URL}/services/real-estate`,
    siteName: "CS Media",
    images: [{ url: "/images/brick-home-aerial-drone-kentucky.webp", width: 1200, height: 630, alt: "Kentucky real estate drone photography" }],
  },
};

interface PricingPackage {
  name: string;
  price: string;
  popular: boolean;
  badge?: string;
  features: string[];
}

export default function RealEstatePage() {
  const packages: PricingPackage[] = [
    {
      name: "Photo Package",
      price: "$200",
      popular: false,
      features: [
        "Delivered in 24–48 hours",
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
        "Delivered in 24–48 hours",
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
      badge: "Premium",
      features: [
        "Delivered in 24–48 hours",
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
        "Delivered in 24–48 hours",
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
        "Delivered in 24–48 hours",
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
    "Mileage is determined by Google Maps distance for round trip from Leitchfield.",
  ];

  // Aggregated unique town list across all served counties for the master SEO list.
  const masterTownList = Array.from(
    new Set(locations.flatMap((l) => l.nearbyTowns)),
  ).sort();

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS MEDIA, LLC",
    description:
      "Professional real estate drone photography, listing video, and virtual staging services across Kentucky.",
    url: `${BASE_URL}/services/real-estate`,
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
      ...locations.map((l) => ({ "@type": "City", name: l.city })),
      { "@type": "State", name: "Kentucky" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Real Estate Photography", item: `${BASE_URL}/services/real-estate` },
    ],
  };

  const faqItems = [
    {
      q: "How much does real estate drone photography cost in Kentucky?",
      a: "CS Media offers real estate media packages from $85. Aerial-only is $85, Interior + Exterior (no drone) is $140, the Photo Package with drone is $200, and the Full Package with cinematic listing video runs $280–$380. 6% sales tax and 2-way mileage are applied to the final price.",
    },
    {
      q: "Do you need a license to fly drones for real estate photos?",
      a: "Yes. Commercial drone pilots must hold an FAA Part 107 Remote Pilot Certificate. CS Media is fully FAA Part 107 certified for all aerial photography and videography work.",
    },
    {
      q: "What is virtual staging and how does it work?",
      a: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor. It helps buyers visualize a property's potential at a fraction of the cost of physical staging. CS Media offers virtual staging as an add-on at $25 per photo or $50 per video scene, with 24-48 hour turnaround.",
    },
    {
      q: "How fast will I get my real estate photos back?",
      a: "CS Media provides a 24-48 hour turnaround on all real estate photography, drone media, and virtual staging deliverables. Rush delivery in 24 hours is available for an additional $40.",
    },
    {
      q: "What areas of Kentucky do you serve?",
      a: `CS Media is based in Leitchfield, KY and serves agents and property owners across central and western Kentucky — including ${locations
        .filter((l) => l.slug !== "leitchfield")
        .map((l) => l.city)
        .join(", ")}, and surrounding counties. Out-of-state projects are available on request.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
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

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Photography" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-dark-900 py-20 sm:py-36 min-h-[45vh] overflow-hidden">
        <Image
          src="/images/rustic-kitchen-wood-beams-island.webp"
          alt="Professional real estate photography of a rustic kitchen with wood beams in Kentucky"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Packages
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Pick a Package. Book a Shoot.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-100 max-w-2xl mx-auto leading-relaxed">
              High-quality media that helps your listings stand out — without breaking the bank.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 sm:py-28 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div data-pricing-grid className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => {
              const hasBadge = pkg.popular || !!pkg.badge;
              return (
                <FadeIn key={pkg.name} delay={index * 0.1}>
                  <div
                    className={`relative rounded-2xl bg-dark-700 border ${
                      pkg.popular
                        ? "border-gold/30"
                        : pkg.badge
                          ? "border-gold/15"
                          : "border-dark-500/30"
                    } p-8 h-full flex flex-col overflow-hidden group ${
                      !pkg.popular ? "hover:border-gold/30 transition-colors" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                    )}
                    <div
                      className={`absolute inset-0 ${
                        pkg.popular
                          ? "bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.08),transparent_70%)]"
                          : pkg.badge
                            ? "bg-[radial-gradient(circle_at_50%_100%,rgba(201,169,110,0.05),transparent_70%)]"
                            : "opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]"
                      }`}
                    />
                    {pkg.popular && (
                      <span className="absolute top-4 right-4 z-20 text-[10px] font-bold uppercase tracking-wider text-dark-900 bg-gold rounded-full px-2.5 py-0.5">
                        Popular
                      </span>
                    )}
                    {pkg.badge && !pkg.popular && (
                      <span className="absolute top-4 right-4 z-20 text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/30 rounded-full px-2.5 py-0.5">
                        {pkg.badge}
                      </span>
                    )}
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className={`text-xs font-semibold text-gold uppercase tracking-[0.2em] ${hasBadge ? "pr-24" : ""}`}>
                        {pkg.name}
                      </h3>
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
                        className={`mt-6 w-full rounded-full py-3 text-sm sm:text-xs font-semibold uppercase tracking-widest text-center transition-all cursor-pointer ${
                          pkg.popular
                            ? "bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25"
                            : pkg.badge
                              ? "bg-dark-600 border border-gold/20 text-dark-100 hover:border-gold/40 hover:text-gold"
                              : "bg-dark-600 border border-dark-500/50 text-dark-100 hover:border-gold/30 hover:text-gold"
                        }`}
                      >
                        Book Now
                      </BookingButton>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <div className="mt-12 mb-6 text-center">
              <span className="text-gold/70 text-[10px] font-mono uppercase tracking-[0.3em]">
                Smaller Packages
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {smallerPackages.map((pkg, index) => (
              <FadeIn key={pkg.name} delay={index * 0.1}>
                <div className="relative rounded-2xl bg-dark-700/60 border border-dark-500/30 p-6 h-full flex flex-col hover:border-gold/20 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
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
                    className="mt-5 w-full rounded-full py-2.5 text-sm sm:text-xs font-semibold uppercase tracking-widest text-center transition-all cursor-pointer bg-dark-600 border border-dark-500/50 text-dark-100 hover:border-gold/30 hover:text-gold"
                  >
                    Book Now
                  </BookingButton>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 mx-auto max-w-xl rounded-xl border border-gold/15 bg-dark-900/40 px-5 py-3 text-center">
              <p className="text-xs sm:text-sm text-dark-100">
                <span className="text-gold/80 font-mono mr-1">+</span>
                6% Kentucky sales tax &amp; round-trip mileage from Leitchfield added at booking.
              </p>
            </div>
            <div className="mt-6 text-center space-y-1">
              {finePrint.map((line) => (
                <p key={line} className="text-xs text-dark-300">{line}</p>
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
                      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-3"
                    >
                      <span className="text-sm text-dark-100">{item.name}</span>
                      <span className="text-sm font-mono text-gold sm:whitespace-nowrap sm:text-right">
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
                  Edits &amp; Reworks
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

      {/* Virtual Staging */}
      <section className="py-16 sm:py-28 bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-5xl font-bold text-gold/20 font-mono">+</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Virtual Staging
                </h2>
                <p className="mt-4 text-dark-100 leading-relaxed">
                  Empty rooms sit on the market longer. Virtual staging helps buyers picture themselves living there — so they book showings faster. Realistic furniture and decor, digitally placed at a fraction of the cost of physical staging.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                  <span className="h-px w-4 bg-gold/40" />
                  +$25 per photo · +$50 per video scene
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Realistic furniture placement",
                        "Modern, farmhouse, luxury — any style",
                        "High-res MLS-ready files",
                        "Ready in 24–48 hours",
                        "Revision rounds included",
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
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      Ideal For
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Vacant listings that aren't getting showings",
                        "New construction",
                        "Flips & renovations",
                        "Rental properties",
                      ].map((item) => (
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

      {/* Service Area Cards (linked) */}
      <section className="py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
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
              <p className="mt-4 text-dark-100 max-w-2xl mx-auto">
                Pick your market for local details, airspace notes, and what we shoot in your area.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <FadeIn key={loc.slug} delay={i * 0.05}>
                <Link
                  href={`/${loc.slug}-real-estate-photography`}
                  className="group block h-full rounded-xl border border-dark-500/30 bg-dark-800/40 p-6 transition-all hover:border-gold/40 hover:bg-dark-800/60"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70">
                    {loc.county}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    {loc.city} Real Estate Photography
                  </h3>
                  <p className="mt-3 text-sm text-dark-100 leading-relaxed line-clamp-3">
                    {loc.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-gold/70 group-hover:text-gold transition-colors">
                    View {loc.city}
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Master Geographic Coverage — BCP-style city wall */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <Image
          src="/images/rustic-kitchen-wood-beams-island.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/85 via-dark-900/80 to-dark-900/90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Coverage
              </span>
              <h2 className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Serving Real Estate Agents &amp; Property Owners Across Kentucky
              </h2>
              <p className="mt-5 text-dark-100 leading-relaxed">
                Headquartered in Leitchfield and on the road most weeks, CS Media works with real estate agents, Airbnb hosts, property managers, and private sellers across central and western Kentucky. Our regular shoot routes cover Hardin, Grayson, Warren, Daviess, Nelson, LaRue, Hart, Breckinridge, Meade, and Bullitt counties.
              </p>
              {(() => {
                const cityListNodes = masterTownList.map((town, i) => {
                  const isLast = i === masterTownList.length - 1;
                  const matchingLoc = locations.find(
                    (l) => l.city.toLowerCase() === town.toLowerCase(),
                  );
                  return (
                    <span key={town}>
                      {matchingLoc ? (
                        <Link
                          href={`/${matchingLoc.slug}-real-estate-photography`}
                          className="text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                        >
                          {town}
                        </Link>
                      ) : (
                        <span className="text-dark-100">{town}</span>
                      )}
                      {isLast ? "." : ", "}
                    </span>
                  );
                });
                return (
                  <>
                    {/* Desktop: always visible */}
                    <p className="hidden md:block mt-5 text-[13px] text-dark-200 leading-relaxed">
                      We serve clients across these communities:{" "}
                      {cityListNodes}
                    </p>

                    {/* Mobile: collapsed by default, expandable */}
                    <details className="md:hidden mt-6 group">
                      <summary className="cursor-pointer list-none text-sm font-mono uppercase tracking-[0.2em] text-gold/80 hover:text-gold flex items-center justify-center gap-2">
                        <span>Show all areas served ({masterTownList.length}+)</span>
                        <svg
                          className="h-3 w-3 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </summary>
                      <p className="mt-5 text-[13px] text-dark-200 leading-relaxed">
                        We serve clients across these communities:{" "}
                        {cityListNodes}
                      </p>
                    </details>
                  </>
                );
              })()}
              <p className="mt-6 text-xs text-dark-300">
                Out-of-state projects available on request —{" "}
                <Link href="/book" className="text-gold hover:underline">get a quote</Link>.
              </p>
            </div>
          </FadeIn>
        </div>
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
                Real Estate Photography FAQs
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-b border-dark-500/30 pb-8">
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="mt-3 text-dark-100 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Other Services — 2-card cross-sell */}
      <section className="py-16 sm:py-20 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Also Offered
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white tracking-tight">
                More from CS Media
              </h2>
              <p className="mt-3 text-sm text-dark-200">
                Beyond real estate, we also cover events and video production across Kentucky.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                slug: "events",
                title: "Events",
                blurb: "Weddings, baby showers, birthdays & special occasions — captured candidly.",
                image: "/images/kentucky-event-catering-photography.webp",
                imageAlt: "Catered event spread photographed by CS Media",
              },
              {
                slug: "video-production",
                title: "Video Production",
                blurb: "Promo videos, business content & social media reels for Kentucky brands.",
                image: "/images/leitchfield-downtown-holiday-event-aerial.webp",
                imageAlt: "Aerial footage of a Kentucky downtown event by CS Media",
              },
            ].map((cat, i) => (
              <FadeIn key={cat.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-dark-500/30 bg-dark-700 hover:border-gold/40 transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-dark-900">
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/30 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7 text-center flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-dark-100 leading-relaxed">
                      {cat.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold group-hover:border-gold group-hover:bg-gold/15 transition-all">
                      Learn More
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      <CTASection
        heading="Not Sure Which Package You Need?"
        subheading="Text or call and we'll recommend the right option for your listing."
        desktopSubheading="Reach out and we'll recommend the perfect option for your project."
        buttonText="Request a Quote"
        useTextLink
      />

      <div
        aria-hidden="true"
        className="md:hidden"
        style={{ height: "var(--sticky-book-bar, 0px)" }}
      />
      <MobileStickyBookBar />
    </>
  );
}
