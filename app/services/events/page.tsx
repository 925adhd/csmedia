import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Kentucky Event Photography — Weddings, Showers & Parties | CS Media",
  description:
    "Event photography across Kentucky — weddings, baby showers, birthdays, and special occasions. Candid, warm, and timeless. Captured the way you actually remember the day.",
  alternates: { canonical: `${BASE_URL}/services/events` },
  openGraph: {
    title: "Kentucky Event Photography | CS Media",
    description:
      "Weddings, baby showers, parties, and special occasions across Kentucky.",
    type: "website",
    url: `${BASE_URL}/services/events`,
    siteName: "CS Media",
    images: [{ url: "/images/kentucky-baby-shower-event-photography.webp", width: 1200, height: 630, alt: "Kentucky event photography by CS Media" }],
  },
};

export default function EventsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Event Photography", item: `${BASE_URL}/services/events` },
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS MEDIA, LLC — Event Photography",
    description:
      "Event photography across Kentucky — weddings, baby showers, birthdays, engagements, and special occasions.",
    url: `${BASE_URL}/services/events`,
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
      "Wedding Photography",
      "Baby Shower Photography",
      "Birthday Party Photography",
      "Engagement Photography",
      "Corporate Event Photography",
    ],
  };

  const eventTypes = [
    "Weddings & ceremonies",
    "Baby showers",
    "Birthday parties",
    "Engagement & couples",
    "Corporate events & openings",
    "Family gatherings",
  ];

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
          { label: "Event Photography" },
        ]}
      />

      <section className="relative bg-dark-900 py-20 sm:py-32 overflow-hidden">
        <Image
          src="/images/kentucky-baby-shower-event-photography.webp"
          alt="Welcome sign at a Kentucky baby shower photographed by CS Media"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/65 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Events
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Kentucky Event Photography
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-100 max-w-2xl mx-auto leading-relaxed">
              Weddings, baby showers, birthdays, and the moments in between. Captured candidly, warmly, and the way you&apos;ll actually remember the day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Every Event Is Different
            </h2>
            <p className="mt-5 text-dark-100 leading-relaxed">
              We don&apos;t shoot every event the same way. A wedding day, a baby shower, a milestone birthday — each has its own rhythm and the moments that matter most are different. We adapt to your venue, your style, and your people, then deliver photos that feel like the day instead of staging it.
            </p>

            <h3 className="mt-12 text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Events We Cover
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {eventTypes.map((item) => (
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
                &ldquo;I would recommend CS MEDIA to anyone! Simply the best person to work with and has PHENOMENAL turn around time. The photos taken of my wedding I&apos;ll cherish for a lifetime.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-mono uppercase tracking-wider text-gold/70">
                — Bethany Brim
              </footer>
            </blockquote>
            <p className="mt-12 text-sm text-dark-200">
              Event pricing is custom-quoted based on coverage, location, and add-ons.{" "}
              <Link href="/book" className="text-gold hover:underline">
                Request a quote
              </Link>{" "}
              with your date and venue.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Tell Us About Your Event"
        subheading="Send us your date, venue, and what coverage you're imagining. We'll respond with a custom quote."
        desktopSubheading="Send us your date, venue, and what coverage you're imagining. We'll respond with a custom quote."
        buttonText="Request a Quote"
        useTextLink
      />
    </>
  );
}
