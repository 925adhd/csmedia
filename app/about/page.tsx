import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import DepthPortrait from "@/components/DepthPortrait";
import CTASection from "@/components/CTASection";
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "About CS Media: An Asian with a Camera in Kentucky",
  description:
    "Cheris Chanthavong — an Asian with a camera based in Leitchfield, KY. FAA Part 107 drone pilot shooting real estate, events, and video across Central Kentucky.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About | CS Media",
    description:
      "Cheris Chanthavong — an Asian with a camera based in Leitchfield, KY. FAA Part 107 drone pilot shooting real estate, events, and video across Central Kentucky.",
    type: "website",
    url: `${BASE_URL}/about`,
    siteName: "CS Media",
    images: [{ url: "/images/cheris-chanthavong-cs-media-owner.webp", width: 1200, height: 630, alt: "Cheris Chanthavong, owner of CS Media in Leitchfield, Kentucky" }],
  },
};

export default async function AboutPage() {
  const headerTagline = "About";

  const trustTagline = "The CS Media Promise";
  const trustHeading = "Here’s what you can count on.";
  const trustPoints = [
    { title: "Premium look, lowest area pricing", description: "High-end real estate, event, and brand media at the lowest rates in the region. The polish your listing or brand deserves without paying premium-vendor rates." },
    { title: "Every angle covered", description: "Photo, drone, video, and editing in one booking. Your listing, event, or brand gets seen from every side without juggling three vendors." },
    { title: "Licensed pilot, one operator", description: "FAA Part 107 certified and fully insured with the same person on every shoot. Consistent results and a direct line for follow-up, every time." },
    { title: "Built to make you stand out", description: "Whether it is a listing, an event, or a brand launch, the work is designed to help you sell faster, grow bigger, and outshine the competition without an agency markup attached." },
  ];

  const ctaHeading = "Ready to See the Difference?";
  const ctaSubheading = "Book your first shoot or text me about your next project.";

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
      {/* Shared wrapper for the Cover + Trust sections — overflow left visible (and
          Cover's own overflow-hidden dropped) so Cheris's cutout can bleed down past
          the Cover section's box and stack above the Trust section beneath it. */}
      <div className="relative">
      {/* Cover */}
      <section className="relative bg-dark-900 pt-10 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,110,0.05),transparent_55%)] pointer-events-none" />
        {/* No z-index here (was z-10) — an explicit z-index + position:relative would
            trap descendants in their own stacking context, capping the portrait
            column's elevated z-index at this level instead of letting it compete
            against the Trust section sibling below. */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-y-12 items-start">
            <div className="relative col-span-12 lg:col-span-7">
              {/* Charcoal brush swash behind the copy — the full, uncropped
                  brush-stroke.png cutout (public/graphics), recolored via CSS mask
                  so it reads as charcoal against the dark section instead of its
                  native light gray. Sized to the source's own aspect ratio so
                  `contain` shows the whole stroke rather than a cropped slice. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-6 -right-6 lg:-left-10 lg:-right-10 top-1/2 -z-10 -translate-y-1/2 bg-[#232019]"
                style={{
                  aspectRatio: "1541 / 1245",
                  WebkitMaskImage: "url(/graphics/brush-stroke.png)",
                  maskImage: "url(/graphics/brush-stroke.png)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />

              <FadeIn>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                  {headerTagline}
                </p>
                <h1 className="font-serif text-white tracking-tight font-normal">
                  <span className="block leading-[1.05] text-[clamp(34px,4.5vw,68px)]">
                    Hi, I&rsquo;m <span className="italic">Cheris</span>.
                  </span>
                  <span className="block mt-2 text-gold italic leading-[1.15] text-[clamp(20px,2.6vw,38px)] max-w-xl">
                    The asian with the camera you&rsquo;ve been looking for.
                  </span>
                </h1>
                <p
                  className="mt-5 text-lg md:text-xl text-dark-100 leading-snug max-w-xl font-light"
                  spellCheck={false}
                >
                  FAA Part 107 drone pilot and solo operator behind <span className="text-white">CS Media</span> — based in Leitchfield, shooting across Central Kentucky.
                </p>
                <a
                  href="#why-cs-media"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.25em] text-gold/80 transition-colors hover:text-gold"
                >
                  Why CS Media
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </FadeIn>
            </div>

            {/* z-30 lets her escape the Cover section's stacking and render above
                the Trust section below once it's pulled up to overlap her feet. */}
            <FadeIn delay={0.2} className="relative z-30 col-span-12 lg:col-span-5">
              <DepthPortrait />
            </FadeIn>
          </div>
        </div>

        {/* Painted brush-stroke edge in place of a flat section rule — the
            text-divider.png cutout (public/graphics) as a CSS mask, recolored to
            the trust section's tone so it bleeds in instead of a hard straight
            line. Cropped from the top so the torn edge (near the top of the
            source) survives; the plain fill below it is what gets trimmed. Sits
            above the Trust section's own background (z-30 figure aside) so it
            stays visible rather than getting covered once Trust overlaps up. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-[150px] sm:bottom-[90px] lg:bottom-[190px] z-20 h-16 sm:h-20 bg-[#f4f1ec]"
          style={{
            WebkitMaskImage: "url(/graphics/text-divider.png)",
            maskImage: "url(/graphics/text-divider.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "top",
            maskPosition: "top",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        />
      </section>

      {/* Trust points — pulled up to overlap the Cover section's bottom (where her
          feet and tripod are) so she reads as standing on/in the cream section
          instead of floating above it, at every breakpoint. */}
      {/* -mt overlap is intentionally 2px deeper than the divider's own
          bottom-[…] offset above — exact-matching values left a 1px seam
          where the dark Cover background peeked through, since the masked
          divider composites on its own layer and rounds its edge
          independently of this section's box. The extra 2px guarantees a
          genuine cream-on-cream overlap instead of an edge-to-edge touch. */}
      <section id="why-cs-media" className="relative scroll-mt-24 bg-[#f4f1ec] pt-24 pb-20 lg:pt-14 lg:pb-28 -mt-[152px] sm:-mt-[92px] lg:-mt-[192px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* grid-cols-1 below lg — a 12-col grid's 11 fixed gap-x-10 gaps (440px)
              would otherwise be reserved regardless of content, overflowing any
              viewport narrower than that before a single column even renders. */}
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:gap-y-12">
            {/* Mobile/tablet-only eyebrow — orients the reader before the video
                rather than after it; hidden at lg where it already sits above the
                heading inside the text column below. */}
            <FadeIn className="lg:hidden">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                {trustTagline}
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-5">
              <div
                className="relative mx-auto aspect-[720/984] w-full max-w-[380px] overflow-hidden rounded-sm border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] lg:max-w-none"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/videos/gimbal-walk.mp4" type="video/mp4" />
                </video>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <FadeIn>
                <div className="mb-10 max-w-2xl">
                  <p className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                    {trustTagline}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-dark-900 tracking-tight leading-tight font-normal">
                    {trustHeading}
                  </h2>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {trustPoints.map((point, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 text-gold pt-1">
                        {trustIcons[i]}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-dark-900 mb-2 leading-tight">
                          {point.title}
                        </h3>
                        <p className="text-dark-600 leading-relaxed text-[15px]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <CTASection
        heading={ctaHeading}
        subheading={ctaSubheading}
        desktopSubheading="Reach out for your next project. Quality media, fast turnaround, best prices."
        useTextLink
        backgroundImage="/images/cs-media-photographer-on-location-kentucky.webp"
      />
    </div>
  );
}
