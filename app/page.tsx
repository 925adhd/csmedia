import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, UserCheck, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import BookingButton from "@/components/BookingButton";
import { CircularShowcase } from "@/components/ui/circular-showcase";
import { SimpleTestimonials } from "@/components/ui/simple-testimonials";

const AVAILABILITY_URL = "https://csmediallc.square.site/s/appointments";

export default function Home() {
  const testimonials = [
    {
      quote: "From the first 30 seconds in the initial phone call I knew we had the right team for what we are trying to accomplish. Accommodating, extremely friendly, extremely professional. Their work and videography was absolutely top notch!",
      name: "Aaron Foulks",
      designation: "Drone / Construction Footage",
      src: "/images/testimonial-aaron-foulks.webp",
    },
    {
      quote: "She showed up with everything needed to shoot high-quality content and made me feel completely comfortable in front of the camera. Seriously cannot recommend her enough!",
      name: "Ashton Watkins",
      designation: "Video Production",
      src: "/images/testimonial-ashton-watkins.webp",
    },
    {
      quote: "10/10 recommend! Not only is Cheris the best hype man, she's phenomenal at what she does. 5 stars isn't enough!!",
      name: "Reece McCoy",
      designation: "Branding",
      src: "/images/testimonial-reece-mccoy.webp",
    },
  ];

  return (
    <>
      {/* Hero — the brand wording ("Meet your local little Asian with a camera") is baked into
          both source images and is left untouched; it is not readable as a real heading by
          search engines, so a single real HTML <h1> below carries the SEO/accessibility role.
          There is exactly one <h1> in the DOM, absolutely overlaid on each breakpoint's own
          image in its blank wall/paper area — same treatment on mobile and desktop. */}
      <section id="hero" className="relative bg-dark-900 overflow-hidden">
        {/* Positioning context for the image + overlay below, sized purely by the image's own
            aspect ratio. The section is only as tall as the image itself — on mobile the
            compact booking CTA section right below picks up immediately after, instead of
            leaving blank dark-900 space under the image. */}
        <div className="relative w-full">
          {/* Mobile image (<768px) — shows the full brand artwork (headline + her full figure)
              uncropped; only the source file's own dead black band beneath her feet is cropped
              off at the CSS level (object-cover against a shorter container). The file itself is
              untouched — this is a display crop, not an edit to the image. No vh/svh sizing, so it
              never resizes mid-scroll. */}
          <div className="relative w-full md:hidden" style={{ aspectRatio: "1080 / 1180" }}>
            <FadeIn className="absolute inset-0">
              <Image
                src="/images/hero_components/csmedia-homepage-hero-mobile.webp"
                alt="Cheris of CS Media, holding her camera rig, in front of a chalkboard-and-brick backdrop reading Meet your local little Asian with a camera"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </FadeIn>
          </div>

          {/* Desktop image (>=768px) — full, uncropped; the real content block below is
              absolutely positioned over its blank paper area. */}
          <div
            className="relative mx-auto hidden md:block"
            style={{ aspectRatio: "1920 / 900", width: "min(100%, 1600px, calc((100vh - 80px) * 1920 / 900))" }}
          >
            <FadeIn className="absolute inset-0">
              <Image
                src="/images/hero_components/csmedia-homepage-hero-desktop.webp"
                alt="Cheris of CS Media, holding her camera rig, in front of a chalkboard-and-brick backdrop reading Meet your local little Asian with a camera"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </FadeIn>
          </div>

          {/* Real H1 + copy + CTAs — one shared block, not a duplicate per breakpoint. Absolutely
              positioned over each breakpoint's own blank wall/paper area (mobile position is
              recalculated against the 1080/1180 cropped mobile image above, not the source
              file's full 1920px height). */}
          <FadeIn
            delay={0.2}
            className="absolute left-[6%] top-[54%] w-[47%] md:left-[9%] md:top-[64%] md:w-[39%] md:max-w-[540px]"
          >
            <h1 className="text-[clamp(15px,4.4vw,20px)] leading-[1.15] font-bold md:text-[clamp(11px,1.6vw,32px)] md:leading-[1.15] md:font-extrabold uppercase text-dark-900">
              Kentucky Photo,
              <br />
              Video &amp; Branding
            </h1>
            {/* Mobile: concrete service list replaces the generic subheading and the Portfolio
                button. Book Now already has its own section right below the hero, so mobile
                needs nothing here but a quick scan of what's for sale. */}
            <ul className="md:hidden mt-3 space-y-2">
              {["Real Estate Photo & Drone", "Construction & Job-Site Drone", "Local Business Reels & TikToks"].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-[11.5px] font-semibold leading-tight text-dark-800">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="hidden md:block md:mt-[0.8%] md:text-[clamp(6px,1vw,16px)] md:leading-snug text-dark-700">
              Photography, video, and branded content for real estate, contractors, and local businesses.
            </p>
            <div className="hidden md:mt-[2%] md:flex md:items-center md:gap-4">
              <Link
                href="/portfolio"
                className="flex h-[clamp(16px,3.4vw,42px)] min-h-[44px] items-center justify-center rounded-md bg-gold px-4 text-[clamp(7px,0.95vw,14px)] font-bold uppercase tracking-widest text-dark-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] transition-colors hover:bg-gold-dark"
              >
                View Portfolio
              </Link>
              <BookingButton
                href={AVAILABILITY_URL}
                className="inline-flex items-center gap-1.5 text-[clamp(7px,0.9vw,14px)] font-semibold uppercase tracking-widest text-dark-900/70 decoration-dark-900/30 underline-offset-4 transition-colors hover:text-dark-900 hover:underline hover:decoration-dark-900"
              >
                Book Now
                <ArrowRight className="h-[0.9em] w-[0.9em]" />
              </BookingButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mobile-only compact booking CTA — fills the space directly under the hero image
          (previously blank dark-900 area from the section's old min-h-svh) with a real,
          height-bounded CTA instead of dead space. Desktop keeps its own "Book Now" link
          in the hero, so this is hidden at md and up. */}
      <section className="md:hidden bg-dark-900 border-t border-dark-500/20 px-6 py-6 text-center">
        <div className="mx-auto mb-3 h-0.5 w-10 rounded-full bg-gold" />
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
          Ready to Book?
        </h2>
        <p className="mt-1.5 text-sm leading-snug text-dark-300">
          Pick your service, choose a date, and reserve your shoot online.
        </p>
        <BookingButton
          href={AVAILABILITY_URL}
          className="mt-4 inline-flex h-11 min-h-[44px] items-center justify-center gap-1.5 rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-widest text-dark-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] transition-colors hover:bg-gold-dark"
        >
          Book Now
          <ArrowRight className="h-4 w-4" />
        </BookingButton>
        <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.1em] text-dark-300/80">
          From $185 &bull; FAA Certified &bull; Easy Online Booking
        </p>
      </section>

      {/* What We Do — circular stacked showcase (same style/animation the testimonials used to use) */}
      {/* pb-0 below md — the showcase's own trailing pb-24 (clearance for the
          floating Text Us button) already provides the bottom breathing room
          down there; adding this section's usual bottom padding on top of
          that left a huge dead gap before the next section. */}
      <section className="pt-12 sm:pt-16 pb-0 md:pb-16 bg-dark-900 relative border-t border-dark-500/20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-12">
          {/* Trust strip — real, verified claims already used elsewhere on the site
              (about page, city landing pages), not new marketing copy. Desktop/tablet
              only — dropped on mobile to keep the section from running too long there. */}
          <FadeIn>
            <div className="mb-12 sm:mb-16 hidden border-b border-dark-500/20 pb-8 md:grid md:grid-cols-4 md:gap-6">
              {[
                { icon: ShieldCheck, label: "FAA Part 107", desc: "Certified & insured for every flight" },
                { icon: Clock, label: "24–48hr Turnaround", desc: "Edited files delivered fast" },
                { icon: UserCheck, label: "One Operator", desc: "Same person on every shoot" },
                { icon: MapPin, label: "Central Kentucky", desc: "Leitchfield, Elizabethtown, Radcliff & beyond" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">{label}</p>
                    <p className="mt-1 text-xs text-dark-300 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 mb-6">
              What We Offer
            </h2>
          </FadeIn>

          <CircularShowcase
            autoplay
            items={[
              { image: "/images/alice-theater-brand-poster.webp", video: "/videos/alice-theater-brand-video.mp4", eyebrow: "Social Media Promos", title: "Branding Content", description: "Promo and branding videos that showcase your business and connect with your audience.", href: "/services/video-production", ctaLabel: "Explore Branding Services" },
              { image: "/images/service-drone-poster.webp", video: "/videos/drone2-trimmed.mp4", eyebrow: "Real Estate Drone Video", title: "Drone (Part 107)", description: "Aerial views that show off the lot, neighborhood, and curb appeal: the shots your competitors don't have.", href: "/services/real-estate#just-need-drone", ctaLabel: "Explore Drone Services" },
              { image: "/images/service-listing-video-poster.webp", video: "/videos/walkthrough.mp4", eyebrow: "Real Estate Walkthroughs", title: "Listing Video", description: "Up to a 1-minute walkthrough video bundled into the Full Media Package. Buyers tour the home before they ever visit.", disclaimer: "*Some rooms shown with virtual staging — $15 per video scene, billed separately if needed.", href: "/services/real-estate#full-media-package", ctaLabel: "Explore Listing Video" },
              { image: "/images/white-farmhouse-front-exterior-kentucky.webp", images: ["/images/white-farmhouse-front-exterior-kentucky.webp", "/images/rustic-kitchen-wood-beams-island.webp", "/images/stone-estate-living-room-fireplace.webp"], eyebrow: "Real Estate Photography", title: "Photography", description: "Bright, clean listing photos that make buyers stop scrolling and book a showing.", href: "/services/real-estate#photography-only", ctaLabel: "Explore Photography Services" },
            ]}
          />
        </div>
      </section>

      {/* Testimonials — small circular avatar picker. pb-24 below md (with the
          section's own pb zeroed there to match) reserves clearance so a long
          quote's last line never sits under the floating Text Us button —
          verified against the actual worst-case scroll position, not just eyeballed. */}
      <section className="pt-6 sm:pt-16 pb-0 md:pb-16 bg-dark-800 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 pb-24 md:pb-0">
          <FadeIn>
            <h2 className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 mb-6">
              Reviews
            </h2>
          </FadeIn>
          <SimpleTestimonials testimonials={testimonials} />
          <FadeIn delay={0.1}>
            <div className="mt-8 text-center">
              <a
                href="https://www.facebook.com/profile.php?id=100090509656389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-dark-300 hover:text-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                See more reviews on Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
