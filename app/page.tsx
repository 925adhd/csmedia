import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import { getFeaturedProjects } from "@/lib/portfolio";

function DroneIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}

function StagingIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM10.5 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen bg-dark-900 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/aerialhome1.jpg"
          alt="Aerial drone photography of luxury estate"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        {/* Dark overlay with gold tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/70 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_70%)]" />

        {/* Subtle grid pattern for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative corner lines */}
        <div className="absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute top-20 left-8 w-32 h-px bg-gradient-to-r from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-20 right-8 w-px h-32 bg-gradient-to-t from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-20 right-8 w-32 h-px bg-gradient-to-l from-gold/40 to-transparent hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs font-mono uppercase tracking-[0.4em]">
                Licensed to Drone
              </span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              Elevated
              <br />
              <span className="text-gold">Real Estate</span>
              <br />
              Media
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-dark-200 max-w-xl mx-auto leading-relaxed">
              Professional drone photography, cinematic video &amp; expert
              editing. Quality work. Quick turnaround.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/portfolio"
                className="border-gradient rounded-full bg-gold/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-dark-400 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
              >
                Book a Shoot
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-12 text-dark-300 text-sm font-mono tracking-wider">
              <a href="tel:+12703070173" className="hover:text-gold transition-colors whitespace-nowrap">
                (270)&nbsp;307-0173
              </a>
            </p>
          </FadeIn>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                What We Do
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Services Built for
                <span className="text-gold"> Results</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <FadeIn delay={0}>
              <ServiceCard
                icon={<CameraIcon />}
                title="Photography"
                description="Interior and exterior real estate photography with professional lighting, composition, and HDR processing."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceCard
                icon={<VideoIcon />}
                title="Videography"
                description="Cinematic property walkthroughs and promo videos that capture attention and drive engagement."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ServiceCard
                icon={<DroneIcon />}
                title="Drone (Part 107)"
                description="FAA-certified aerial photography and video. Stunning perspectives from above."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ServiceCard
                icon={<StagingIcon />}
                title="Virtual Staging"
                description="Digitally furnish empty rooms with realistic furniture and decor. Sell the lifestyle, not just the space."
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <ServiceCard
                icon={<EditIcon />}
                title="Video Editing"
                description="Polished, branded videos with music, transitions, color grading, and graphics."
              />
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Image showcase strip */}
      <section className="bg-dark-900 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { src: "/images/aerialhome1.jpg", alt: "Aerial estate photography" },
              { src: "/images/interior1.jpg", alt: "Interior bathroom photography" },
              { src: "/images/nighthome.jpg", alt: "Twilight real estate photography" },
              { src: "/images/interior2.jpg", alt: "Interior kitchen photography" },
              { src: "/images/home2.jpg", alt: "Modern farmhouse photography" },
              { src: "/images/drone.jpg", alt: "CS Media drone pilot in action" },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 33vw, 17vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Staging Before/After */}
      <section className="py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Virtual Staging
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Empty Rooms?
                  <br />
                  <span className="text-gold">We&apos;ll Fix That.</span>
                </h2>
                <p className="mt-5 text-dark-200 leading-relaxed">
                  Our edited virtual staging transforms empty, hard-to-visualize
                  spaces into fully furnished rooms that help buyers see the
                  potential. Realistic furniture, decor, and styling &mdash;
                  digitally placed to sell the lifestyle, not just the square footage.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Realistic digitally furnished rooms",
                    "Multiple style options available",
                    "Fraction of the cost of physical staging",
                    "24-48 hour turnaround",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-dark-100">
                      <svg className="h-4 w-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-block border-gradient rounded-full bg-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
                >
                  Get a Quote
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <BeforeAfter
                  beforeSrc="/images/examplestagingbefore.jpg"
                  afterSrc="/images/examplestagingcomplete.jpg"
                  beforeAlt="Empty room before virtual staging"
                  afterAlt="Room after virtual staging with furniture"
                />
                <p className="mt-3 text-center text-xs text-dark-300 font-mono tracking-wider">
                  DRAG TO COMPARE &mdash; BEFORE &amp; AFTER
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Featured Portfolio */}
      <section className="py-16 sm:py-28 bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  Recent Work
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-dark-200 hover:text-gold transition-colors group"
              >
                View All
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-dark-200 hover:text-gold transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Video Reel */}
      <section className="py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Video Work
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                See It in <span className="text-gold">Motion</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn>
              <div className="relative rounded-xl overflow-hidden border border-dark-500/30 bg-dark-700">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/aerialhome1.jpg"
                  className="w-full aspect-[9/16]"
                >
                  <source src="/videos/dronehousevid.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">Property Tour</h3>
                  <p className="text-xs text-dark-300 mt-1">Property tours with aerial drone footage</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative rounded-xl overflow-hidden border border-dark-500/30 bg-dark-700">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16]"
                >
                  <source src="/videos/truckpromo.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">Business Promo Video</h3>
                  <p className="text-xs text-dark-300 mt-1">Promotional video for Dan Powers</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative rounded-xl overflow-hidden border border-dark-500/30 bg-dark-700">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16]"
                >
                  <source src="/videos/towneventsexample.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">Town Events Coverage</h3>
                  <p className="text-xs text-dark-300 mt-1">Local event highlights and recap</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Reviews
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                What Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!",
                name: "Snow Dogs Food Truck",
                badge: "Recommends CS MEDIA, LLC",
              },
              {
                quote:
                  "OH MY GOSH!!!! I can't even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.",
                name: "Jared Clouse - Bary",
                badge: "Recommends CS MEDIA, LLC",
              },
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl bg-dark-700 p-8 border-gradient h-full flex flex-col">
                  {/* Quote mark */}
                  <span className="text-gold/20 text-6xl font-serif leading-none absolute top-4 right-6">
                    &ldquo;
                  </span>

                  <p className="text-dark-100 leading-relaxed relative z-10 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-dark-500/30">
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gold/70 mt-1 font-mono tracking-wider">
                      {testimonial.badge}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "Part 107", label: "FAA Certified" },
                { value: "24hr", label: "Turnaround" },
                { value: "1.1K+", label: "Followers" },
                { value: "100%", label: "Recommended" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="mt-1 text-xs text-dark-300 font-mono uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
