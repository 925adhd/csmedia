import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Photography, videography, drone (Part 107), and video editing services. Quality edits, quick turnaround, lowest prices.",
};

interface ServiceSectionProps {
  number: string;
  title: string;
  description: string;
  included: string[];
  useCases: string[];
  price?: string;
}

function ServiceSection({
  number,
  title,
  description,
  included,
  useCases,
  price,
}: ServiceSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Number */}
      <div className="lg:col-span-1">
        <span className="text-5xl font-bold text-gold/20 font-mono">{number}</span>
      </div>

      {/* Content */}
      <div className="lg:col-span-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-dark-200 leading-relaxed">{description}</p>
        {price && (
          <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
            <span className="h-px w-4 bg-gold/40" />
            Starting at {price}
          </p>
        )}
      </div>

      {/* Details */}
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
            What&apos;s Included
          </h3>
          <ul className="space-y-2.5">
            {included.map((item) => (
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
            {useCases.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-dark-100">
                <span className="text-gold/50 mt-0.5 flex-shrink-0 text-xs">&#9670;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <Image
          src="/images/home3.jpg"
          alt="Aerial view of property"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/70 to-dark-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              What We Do
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Quality edits. Quick turnaround. The best prices for professional
              real estate media. Starting at just $100.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Sections */}
      <section className="bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 divide-y divide-dark-500/30">
          <div className="py-20">
            <FadeIn>
              <ServiceSection
                number="01"
                title="Photography"
                description="High-quality real estate and commercial photography with professional lighting, composition, and HDR processing. Every shot is carefully framed and edited to make your listing shine."
                included={[
                  "25-40 edited photos",
                  "HDR processing",
                  "Interior & exterior",
                  "Twilight shots (optional)",
                  "MLS-ready formatting",
                  "24-48 hour turnaround",
                ]}
                useCases={[
                  "Residential listings",
                  "Commercial properties",
                  "Rental & Airbnb",
                  "Business branding",
                ]}
                price="$200"
              />
            </FadeIn>
          </div>

          <div className="py-20">
            <FadeIn>
              <ServiceSection
                number="02"
                title="Videography"
                description="Cinematic property walkthroughs, promo videos, and social content. From listing tours to branded business videos, we capture footage that drives engagement and gets results."
                included={[
                  "60-90 second edited video",
                  "4K resolution",
                  "Licensed background music",
                  "Color grading & transitions",
                  "Social media formats",
                  "Multiple revision rounds",
                ]}
                useCases={[
                  "Property tours",
                  "Business promo videos",
                  "Social media reels",
                  "Agent marketing",
                ]}
                price="$400"
              />
            </FadeIn>
          </div>

          <div className="py-20">
            <FadeIn>
              <ServiceSection
                number="03"
                title="Drone (Part 107)"
                description="FAA Part 107 certified aerial photography and video. Stunning perspectives that showcase properties, land, and developments from vantage points that ground-level simply can't match."
                included={[
                  "10-20 edited aerial photos",
                  "Multiple altitudes & angles",
                  "4K aerial video option",
                  "Professional color grading",
                  "High-res digital delivery",
                  "FAA compliant operations",
                ]}
                useCases={[
                  "Luxury homes",
                  "Large acreage & land",
                  "New developments",
                  "Roof & property inspections",
                ]}
                price="$250"
              />
            </FadeIn>
          </div>

          <div className="py-20">
            <FadeIn>
              <ServiceSection
                number="04"
                title="Video Editing"
                description="Already have footage? We'll transform your raw clips into polished, branded content. From simple cuts to full productions with graphics, music, and effects."
                included={[
                  "Full edit from raw footage",
                  "Music & sound design",
                  "Text overlays & branding",
                  "Logo/watermark design",
                  "Multiple export formats",
                  "Two rounds of revisions",
                ]}
                useCases={[
                  "Agent walkthrough footage",
                  "Social media content",
                  "Compilation videos",
                  "Brand & marketing videos",
                ]}
                price="$150"
              />
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Virtual Staging Section */}
      <section className="py-16 sm:py-28 bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-5xl font-bold text-gold/20 font-mono">05</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Virtual Staging
                </h2>
                <p className="mt-4 text-dark-200 leading-relaxed">
                  Empty rooms don&apos;t sell. Our edited virtual staging digitally
                  furnishes vacant spaces with realistic furniture and decor,
                  helping buyers visualize the potential of every room.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                  <span className="h-px w-4 bg-gold/40" />
                  Starting at $25/room
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Realistic furniture placement",
                        "Multiple style options",
                        "High-res MLS-ready files",
                        "Fast 24-48hr turnaround",
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
                        "Vacant listings",
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
                  beforeSrc="/images/examplestagingbefore.jpg"
                  afterSrc="/images/examplestagingcomplete.jpg"
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

      <CTASection
        heading="Not Sure Which Service You Need?"
        subheading="Text or call and we'll recommend the perfect package for your project."
        buttonText="Request a Quote"
      />
    </>
  );
}
