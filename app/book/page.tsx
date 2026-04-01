import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import CalendlyInline from "@/components/CalendlyInline";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  title: "Book a Shoot",
  description:
    "Schedule a professional drone photography, videography, or virtual staging session with CS Media in Leitchfield, KY.",
  alternates: { canonical: `${BASE_URL}/book` },
  openGraph: {
    title: "Book a Shoot | CS Media",
    description:
      "Schedule a professional drone photography, videography, or virtual staging session with CS Media in Leitchfield, KY.",
    type: "website",
    url: `${BASE_URL}/book`,
    siteName: "CS Media",
    images: [{ url: "/images/aerialhome1.jpg", width: 1200, height: 630 }],
  },
};

export default function BookPage() {
  return (
    <>
      <section className="relative bg-dark-900 pt-12 pb-2 sm:pt-16 sm:pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Schedule
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Book a Shoot
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Pick a date and time that works for you. Or text{" "}
              <a
                href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
                className="text-gold hover:text-gold-light transition-colors whitespace-nowrap"
              >
                (270) 307-0173
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-dark-900 relative">
        <div className="mx-auto px-4">
          <FadeIn>
            <CalendlyInline />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
