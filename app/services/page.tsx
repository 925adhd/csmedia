import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import { EditableText, EditableList } from "@/components/inline-edit";
import { getPageContent } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real estate media packages starting at $150 in Leitchfield & Grayson County, KY. Photography, drone, videography, and video editing. Quick turnaround.",
};

interface PricingPackage {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
}

export default async function ServicesPage() {
  const [headerContent, pricingContent, videographyContent, editingContent, stagingContent, ctaContent] =
    await Promise.all([
      getPageContent("services", "header"),
      getPageContent("services", "pricing"),
      getPageContent("services", "videography"),
      getPageContent("services", "editing"),
      getPageContent("services", "staging"),
      getPageContent("services", "cta"),
    ]);

  // Header fallbacks
  const headerTagline = (headerContent?.tagline as string) || "What We Do";
  const headerHeading = (headerContent?.heading as string) || "Our Services";
  const headerSubtext =
    (headerContent?.subtext as string) ||
    "Professional real estate media packages. Quality work, quick turnaround, and the best prices you'll find.";

  // Pricing fallbacks
  const pricingTagline = (pricingContent?.tagline as string) || "Pricing";
  const pricingHeading = (pricingContent?.heading as string) || "Real Estate Media Packages";
  const packages = (pricingContent?.packages as PricingPackage[]) || [
    {
      name: "Interior Only",
      price: "$150",
      popular: false,
      features: [
        "All interior living spaces",
        "Professional lighting & HDR",
        "Edited & color corrected",
        "MLS-ready formatting",
        "24-48 hour turnaround",
      ],
    },
    {
      name: "Interior + Exterior",
      price: "$200",
      popular: true,
      features: [
        "All interior living spaces",
        "6 exterior shots",
        "Professional lighting & HDR",
        "Edited & color corrected",
        "MLS-ready formatting",
        "24-48 hour turnaround",
      ],
    },
    {
      name: "The Holy-Moley",
      price: "$300",
      popular: false,
      features: [
        "Full interior & exterior package",
        "Drone photos",
        "Hyperlapse video for social media",
        "Professional lighting & HDR",
        "Edited & color corrected",
        "MLS-ready formatting",
        "24-48 hour turnaround",
      ],
    },
  ];
  const finePrint = (pricingContent?.fine_print as string[]) || [
    "Taxes and mileage fee will be applied to final price.",
    "Mileage is determined by Google Maps distance for round trip.",
  ];

  // Videography fallbacks
  const videoHeading = (videographyContent?.heading as string) || "Videography";
  const videoDescription =
    (videographyContent?.description as string) ||
    "Cinematic property walkthroughs, promo videos, and social content. From listing tours to branded business videos, we capture footage that drives engagement and gets results.";
  const videoPriceText = (videographyContent?.price_text as string) || "Contact for pricing";
  const videoIncluded = (videographyContent?.included as string[]) || [
    "60-90 second edited video",
    "4K resolution",
    "Licensed background music",
    "Color grading & transitions",
    "Social media formats",
  ];
  const videoIdealFor = (videographyContent?.ideal_for as string[]) || [
    "Property tours",
    "Business promo videos",
    "Social media reels",
    "Agent marketing",
  ];

  // Editing fallbacks
  const editHeading = (editingContent?.heading as string) || "Video Editing";
  const editDescription =
    (editingContent?.description as string) ||
    "Already have footage? We'll transform your raw clips into polished, branded content. From simple cuts to full productions with graphics, music, and effects.";
  const editPriceText = (editingContent?.price_text as string) || "Contact for pricing";
  const editIncluded = (editingContent?.included as string[]) || [
    "Full edit from raw footage",
    "Music & sound design",
    "Text overlays & branding",
    "Logo/watermark design",
    "Multiple export formats",
  ];
  const editIdealFor = (editingContent?.ideal_for as string[]) || [
    "Agent walkthrough footage",
    "Social media content",
    "Compilation videos",
    "Brand & marketing videos",
  ];

  // Staging fallbacks
  const stagingHeading = (stagingContent?.heading as string) || "Virtual Staging";
  const stagingDescription =
    (stagingContent?.description as string) ||
    "Empty rooms don't sell. Our edited virtual staging digitally furnishes vacant spaces with realistic furniture and decor, helping buyers visualize the potential of every room.";
  const stagingPriceText = (stagingContent?.price_text as string) || "Starting at $25/room";
  const stagingIncluded = (stagingContent?.included as string[]) || [
    "Realistic furniture placement",
    "Multiple style options",
    "High-res MLS-ready files",
    "Fast 24-48hr turnaround",
    "Revision rounds included",
  ];
  const stagingIdealFor = (stagingContent?.ideal_for as string[]) || [
    "Vacant listings",
    "New construction",
    "Flips & renovations",
    "Rental properties",
  ];

  // CTA fallbacks
  const ctaHeading = (ctaContent?.heading as string) || "Not Sure Which Package You Need?";
  const ctaSubheading =
    (ctaContent?.subheading as string) ||
    "Text or call and we'll recommend the perfect option for your project.";
  const ctaButtonText = (ctaContent?.button_text as string) || "Request a Quote";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does real estate drone photography cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CS Media offers real estate photography packages starting at $150. Our most popular Interior + Exterior package is $200, and our full package including drone photos and video is $300. Taxes and mileage fees may apply.",
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
          text: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor. It helps buyers visualize a property's potential at a fraction of the cost of physical staging. CS Media offers virtual staging starting at $25 per room with 24-48 hour turnaround.",
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <EditableText page="services" section="header" field="tagline" value={headerTagline}>
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {headerTagline}
              </span>
            </EditableText>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              <EditableText page="services" section="header" field="heading" value={headerHeading}>
                {headerHeading}
              </EditableText>
            </h1>
            <EditableText page="services" section="header" field="subtext" value={headerSubtext} multiline>
              <p className="mt-4 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
                {headerSubtext}
              </p>
            </EditableText>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 sm:py-28 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <EditableText page="services" section="pricing" field="tagline" value={pricingTagline}>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  {pricingTagline}
                </span>
              </EditableText>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                <EditableText page="services" section="pricing" field="heading" value={pricingHeading}>
                  {pricingHeading}
                </EditableText>
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
                  </div>
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
                    <EditableText page="services" section="videography" field="heading" value={videoHeading}>
                      {videoHeading}
                    </EditableText>
                  </h2>
                  <EditableText page="services" section="videography" field="description" value={videoDescription} multiline>
                    <p className="mt-4 text-dark-200 leading-relaxed">
                      {videoDescription}
                    </p>
                  </EditableText>
                  <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                    <span className="h-px w-4 bg-gold/40" />
                    <EditableText page="services" section="videography" field="price_text" value={videoPriceText}>
                      {videoPriceText}
                    </EditableText>
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {videoIncluded.map((item) => (
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
                      {videoIdealFor.map((item) => (
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
                    <EditableText page="services" section="editing" field="heading" value={editHeading}>
                      {editHeading}
                    </EditableText>
                  </h2>
                  <EditableText page="services" section="editing" field="description" value={editDescription} multiline>
                    <p className="mt-4 text-dark-200 leading-relaxed">
                      {editDescription}
                    </p>
                  </EditableText>
                  <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                    <span className="h-px w-4 bg-gold/40" />
                    <EditableText page="services" section="editing" field="price_text" value={editPriceText}>
                      {editPriceText}
                    </EditableText>
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {editIncluded.map((item) => (
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
                      {editIdealFor.map((item) => (
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
                  <EditableText page="services" section="staging" field="heading" value={stagingHeading}>
                    {stagingHeading}
                  </EditableText>
                </h2>
                <EditableText page="services" section="staging" field="description" value={stagingDescription} multiline>
                  <p className="mt-4 text-dark-200 leading-relaxed">
                    {stagingDescription}
                  </p>
                </EditableText>
                <p className="mt-4 inline-flex items-center gap-2 text-gold font-semibold">
                  <span className="h-px w-4 bg-gold/40" />
                  <EditableText page="services" section="staging" field="price_text" value={stagingPriceText}>
                    {stagingPriceText}
                  </EditableText>
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
                a: "CS Media offers real estate photography packages starting at $150. Our most popular Interior + Exterior package is $200, and our full package including drone photos and video is $300. Taxes and mileage fees may apply.",
              },
              {
                q: "Do you need a license to fly drones for real estate photos?",
                a: "Yes. Commercial drone pilots must hold an FAA Part 107 Remote Pilot Certificate. CS Media is fully FAA Part 107 certified for all aerial photography and videography work.",
              },
              {
                q: "What is virtual staging and how does it work?",
                a: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor. It helps buyers visualize a property\u2019s potential at a fraction of the cost of physical staging. CS Media offers virtual staging starting at $25 per room with 24\u201348 hour turnaround.",
              },
              {
                q: "How fast will I get my real estate photos back?",
                a: "CS Media provides a 24\u201348 hour turnaround on all real estate photography, drone media, and virtual staging deliverables.",
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
