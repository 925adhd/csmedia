import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import CTASection from "@/components/CTASection";
import { getPageContent } from "@/lib/supabase/queries";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "About CS Media: An Asian with a Camera in Kentucky",
  description:
    "Meet Cheris Chanthavong, an asian with a camera based in Leitchfield, KY. FAA Part 107 certified drone pilot offering photography, videography, and editing across Kentucky.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About | CS Media",
    description:
      "Meet Cheris Chanthavong, an asian with a camera based in Leitchfield, KY. FAA Part 107 drone pilot offering photography, videography, and editing across Kentucky.",
    type: "website",
    url: `${BASE_URL}/about`,
    siteName: "CS Media",
    images: [{ url: "/images/cheris-chanthavong-cs-media-owner.webp", width: 1200, height: 630, alt: "Cheris Chanthavong, owner of CS Media in Leitchfield, Kentucky" }],
  },
};

export default async function AboutPage() {
  const headerContent = await getPageContent("about", "header");
  const headerTagline = (headerContent?.tagline as string) || "About";

  const trustTagline = "Why CS Media";
  const trustHeading = "Here’s what you can count on.";
  const trustPoints = [
    { title: "Premium look, lowest area pricing", description: "High-end real estate, event, and brand media at the lowest rates in the region. The polish your listing or brand deserves without paying premium-vendor rates." },
    { title: "Every angle covered", description: "Photo, drone, video, and editing in one booking. Your listing, event, or brand gets seen from every side without juggling three vendors." },
    { title: "Licensed pilot, one operator", description: "FAA Part 107 certified and fully insured, with the same person on every shoot. Consistent results and a direct line for follow-up, every time." },
    { title: "Built to make you stand out", description: "Whether it is a listing, an event, or a brand launch, the work is designed to help you sell faster, grow bigger, and outshine the competition, without an agency markup attached." },
  ];

  const ctaHeading = "Ready to See the Difference?";
  const ctaSubheading = "Book your first shoot or text me about your next listing.";

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Meet Cheris, the Operator Behind CS Media",
    description:
      "Meet Cheris Chanthavong, FAA Part 107 certified drone pilot and owner of CS Media in Leitchfield, Kentucky.",
    thumbnailUrl: `${BASE_URL}/images/personalpromo-poster.webp`,
    contentUrl: `${BASE_URL}/videos/personalpromo.mp4`,
    uploadDate: "2025-06-01T00:00:00Z",
  };

  const trustIcons = [
    // Dollar — premium pricing
    <svg key="0" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Camera — every angle
    <svg key="1" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>,
    // Shield with check — licensed / insured
    <svg key="2" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    // Trending up — growth
    <svg key="3" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>,
  ];

  return (
    <div className={fraunces.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Cover */}
      <section className="relative bg-dark-900 overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,110,0.05),transparent_55%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
            <FadeIn className="col-span-12 lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
                {headerTagline}
              </p>
              <h1 className="font-serif text-white tracking-tight font-normal">
                <span className="block leading-[1.05] text-[clamp(34px,4.5vw,68px)]">
                  Hi, I&rsquo;m <span className="italic">Cheris</span>.
                </span>
                <span className="block mt-3 text-gold italic leading-[1.15] text-[clamp(20px,2.6vw,38px)] max-w-xl">
                  The asian with the camera you&rsquo;ve been looking for.
                </span>
              </h1>
              <p
                className="mt-8 text-xl md:text-2xl text-dark-100 leading-relaxed max-w-xl font-light"
                spellCheck={false}
              >
                FAA Part 107 drone pilot. Solo operator behind <span className="text-white">CS Media</span>. Based in Leitchfield, Kentucky, shooting all over the state.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="col-span-12 lg:col-span-5">
              <div className="relative w-full max-w-[340px] mx-auto lg:ml-auto">
                <div className="overflow-hidden rounded-sm border border-dark-500/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                  <VideoPlayer
                    src="/videos/personalpromo.mp4"
                    poster="/images/personalpromo-poster.webp"
                    posterAlt="Cheris Chanthavong, owner of CS Media"
                    captionsSrc="/videos/personalpromo.vtt"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="relative bg-dark-900 py-20 lg:py-28 border-t border-dark-500/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                {trustTagline}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight font-normal">
                {trustHeading}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {trustPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 text-gold pt-1">
                    {trustIcons[i]}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-dark-100 leading-relaxed text-[15px]">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={ctaHeading}
        subheading={ctaSubheading}
        desktopSubheading="Reach out for your next project. Quality media, fast turnaround, best prices."
        useTextLink
      />
    </div>
  );
}
