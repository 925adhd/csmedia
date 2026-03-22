import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real estate media packages starting at $150. Photography, drone, videography, and video editing services. Quick turnaround, best prices.",
};

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
              Professional real estate media packages. Quality work, quick
              turnaround, and the best prices you&apos;ll find.
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
                Pricing
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                Real Estate Media Packages
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Interior Only */}
            <FadeIn>
              <div className="relative rounded-2xl bg-dark-700 border border-dark-500/30 p-8 h-full flex flex-col overflow-hidden group hover:border-gold/20 transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]" />
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                    Interior Only
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$150</span>
                  </div>
                  <div className="mt-6 space-y-3 flex-1">
                    {[
                      "All interior living spaces",
                      "Professional lighting & HDR",
                      "Edited & color corrected",
                      "MLS-ready formatting",
                      "24-48 hour turnaround",
                    ].map((item) => (
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

            {/* Interior + Exterior */}
            <FadeIn delay={0.1}>
              <div className="relative rounded-2xl bg-dark-700 border border-gold/30 p-8 h-full flex flex-col overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.08),transparent_70%)]" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                      Interior + Exterior
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark-900 bg-gold rounded-full px-2.5 py-0.5">
                      Popular
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$200</span>
                  </div>
                  <div className="mt-6 space-y-3 flex-1">
                    {[
                      "All interior living spaces",
                      "6 exterior shots",
                      "Professional lighting & HDR",
                      "Edited & color corrected",
                      "MLS-ready formatting",
                      "24-48 hour turnaround",
                    ].map((item) => (
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

            {/* The Holy-Moley */}
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl bg-dark-700 border border-dark-500/30 p-8 h-full flex flex-col overflow-hidden group hover:border-gold/20 transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]" />
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                    The Holy-Moley
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$300</span>
                  </div>
                  <div className="mt-6 space-y-3 flex-1">
                    {[
                      "Full interior & exterior package",
                      "Drone photos",
                      "Hyperlapse video for social media",
                      "Professional lighting & HDR",
                      "Edited & color corrected",
                      "MLS-ready formatting",
                      "24-48 hour turnaround",
                    ].map((item) => (
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
          </div>

          {/* Fine print */}
          <FadeIn>
            <div className="mt-10 text-center space-y-1">
              <p className="text-xs text-dark-300">
                Taxes and mileage fee will be applied to final price.
              </p>
              <p className="text-xs text-dark-300">
                Mileage is determined by Google Maps distance for round trip.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Additional Services */}
      <section className="bg-dark-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 divide-y divide-dark-500/30">
          <div className="py-16 sm:py-20">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="text-5xl font-bold text-gold/20 font-mono">+</span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Videography
                  </h2>
                  <p className="mt-4 text-dark-200 leading-relaxed">
                    Cinematic property walkthroughs, promo videos, and social content.
                    From listing tours to branded business videos, we capture footage
                    that drives engagement and gets results.
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                    <span className="h-px w-4 bg-gold/40" />
                    Contact for pricing
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "60-90 second edited video",
                        "4K resolution",
                        "Licensed background music",
                        "Color grading & transitions",
                        "Social media formats",
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
                        "Property tours",
                        "Business promo videos",
                        "Social media reels",
                        "Agent marketing",
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
          </div>

          <div className="py-16 sm:py-20">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="text-5xl font-bold text-gold/20 font-mono">+</span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Video Editing
                  </h2>
                  <p className="mt-4 text-dark-200 leading-relaxed">
                    Already have footage? We&apos;ll transform your raw clips into polished,
                    branded content. From simple cuts to full productions with graphics,
                    music, and effects.
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                    <span className="h-px w-4 bg-gold/40" />
                    Contact for pricing
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Full edit from raw footage",
                        "Music & sound design",
                        "Text overlays & branding",
                        "Logo/watermark design",
                        "Multiple export formats",
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
                        "Agent walkthrough footage",
                        "Social media content",
                        "Compilation videos",
                        "Brand & marketing videos",
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
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Virtual Staging Section */}
      <section className="py-16 sm:py-28 bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-5xl font-bold text-gold/20 font-mono">+</span>
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
        heading="Not Sure Which Package You Need?"
        subheading="Text or call and we'll recommend the perfect option for your project."
        buttonText="Request a Quote"
      />
    </>
  );
}
