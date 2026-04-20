import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import BookingButton from "@/components/BookingButton";
import TextLink from "@/components/TextLink";
import { StampIcon, DroneIcon, PolaroidIcon } from "@/components/StepIcons";
import { getPortfolioProjects } from "@/lib/portfolio";
import { getPageContent } from "@/lib/supabase/queries";
import { getTestimonials, getServices } from "@/lib/supabase/queries";

const iconMap: Record<string, React.ReactNode> = {
  camera: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  ),
  video: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  drone: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  staging: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM10.5 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  edit: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
};

export default async function Home() {
  const [
    portfolioProjects,
    _hero,
    servicesContent,
    stagingContent,
    recentWork,
    testimonialsContent,
    _statsContent,
    testimonials,
    _services,
  ] = await Promise.all([
    getPortfolioProjects(),
    getPageContent("home", "hero"),
    getPageContent("home", "services"),
    getPageContent("home", "staging"),
    getPageContent("home", "recent_work"),
    getPageContent("home", "testimonials"),
    getPageContent("home", "stats"),
    getTestimonials(),
    getServices(),
  ]);

  const stats = [
    { value: "Part 107", label: "FAA Certified" },
    { value: "24–48hr", label: "Turnaround" },
    { value: "$85+", label: "Starting Rate" },
  ];


  const faqItems = [
    { q: "How much does real estate photography cost?", a: "Packages start at $85 for aerial-only and $140 for interior + exterior photos. Our Photo Package with drone is $200, and full packages with cinematic listing video run $280\u2013$380. See our services page for the full breakdown." },
    { q: "How fast will I get my photos back?", a: "All deliverables\u2014photos, drone media, and virtual staging\u2014are delivered within 24\u201348 hours of the shoot. Rush delivery in 24 hours is available for an additional $40." },
    { q: "Do you need a license to fly drones?", a: "Yes. Commercial drone work requires an FAA Part 107 certificate. CS Media is fully Part 107 certified for all aerial photography and videography." },
    { q: "What areas do you serve?", a: "We\u2019re based in Leitchfield, KY and serve all of Grayson County, Elizabethtown, Bowling Green, Owensboro, Bardstown, and the rest of Kentucky. Out-of-state projects available upon request." },
    { q: "What is virtual staging?", a: "Virtual staging digitally furnishes empty rooms with realistic furniture and decor\u2014helping buyers visualize a property at a fraction of the cost of physical staging. Available as an add-on at $25 per photo or $50 per video scene." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section id="hero" className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] pt-20 pb-16 md:pt-24 md:pb-20 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/images/brick-home-aerial-drone-kentucky.webp"
            alt="Aerial drone shot of a brick home with landscaped yard in Kentucky"
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.55]"
            preload
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwAgCdASoQAAwAA4BaJbACsAYvXWU5YP6KAADymXLefN8XytR0++YiAodY0sXOYNnI99BHxRFH5sNGyqws4VDnedWH+gvMYDbleOrAV9DfALdGF3l73VN287y2aEsXVPoLMnLV4sT2IeuC8AA="
          />
        </div>

        {/* Vignette — makes it feel like viewfinder glass */}
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Single drone tag — no ticking numbers */}
        <div className="absolute top-5 left-4 md:top-6 md:left-6 z-[5] flex items-center gap-2 md:gap-2.5 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gold/60">
          <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-red-500" />
          <span>REC</span>
          <span className="hidden md:inline text-gold/30">·</span>
          <span className="hidden md:inline">Leitchfield, KY · Aerial</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/35 via-dark-900/55 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_70%)]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute top-20 left-8 w-32 h-px bg-gradient-to-r from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-20 right-8 w-px h-32 bg-gradient-to-t from-gold/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-20 right-8 w-32 h-px bg-gradient-to-l from-gold/40 to-transparent hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs font-mono uppercase tracking-[0.4em]">
                Kentucky Real Estate Media
              </span>
              <span className="h-px w-12 bg-gold/60" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              Get Your Kentucky
              <br />
              Listing{" "}
              <span className="relative inline-block">
                Sold
                <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-2 h-[2px] md:h-[3px] bg-gold" />
              </span>
              <br />
              Faster
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-dark-200 max-w-xl mx-auto leading-relaxed">
              Professional drone photography, cinematic video &amp; virtual staging. Delivered in 24–48 hours.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookingButton
                className="rounded-full border border-gold/50 bg-gold/10 px-10 py-4 text-base font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold/20 hover:border-gold cursor-pointer"
              >
                Book a Shoot
              </BookingButton>
              <Link
                href="/portfolio"
                className="rounded-full border border-dark-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
              >
                View Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Stats bar */}
      <section id="stats" className="scroll-mt-20 pt-16 pb-12 sm:py-12 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs text-dark-300 font-mono uppercase tracking-wider md:tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Recent Work */}
      <section id="portfolio" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <FadeIn>
            <div className="mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {(recentWork?.tagline as string) || "Recent Work"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {(recentWork?.heading as string) || "Featured Projects"}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioProjects.filter((p) => p.featured).slice(0, 4).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-dark-200 hover:text-gold transition-colors group"
            >
              {(recentWork?.view_full_text as string) || "View Full Portfolio"}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Staging Before/After */}
      <section id="staging" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  {(stagingContent?.tagline as string) || "Virtual Staging"}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {(stagingContent?.heading as string) || "Virtual Staging That"}
                  <br />
                  <span className="text-gold">
                    {(stagingContent?.heading_gold as string) || "Sells Homes Faster"}
                  </span>
                </h2>
                <p className="mt-5 text-dark-200 leading-relaxed">
                  Empty listings sit longer. Virtual staging helps buyers picture themselves living there — so they book showings faster. Realistic furniture and decor, digitally placed for +$25 per photo.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Buyers see a home, not an empty box",
                    "Modern, farmhouse, luxury — match any listing style",
                    "A fraction of the cost of physical staging",
                    "Ready for your listing in 24–48 hours",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-dark-100">
                      <svg className="h-4 w-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <TextLink
                  className="mt-8 inline-block border-gradient rounded-full bg-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
                >
                  {(stagingContent?.cta_text as string) || "Get a Quote"}
                </TextLink>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <BeforeAfter
                  beforeSrc="/images/virtual-staging-before-empty-room.webp"
                  afterSrc="/images/virtual-staging-after-furnished.webp"
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

      {/* Services Preview */}
      <section id="services" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {(servicesContent?.tagline as string) || "What We Do"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {(servicesContent?.heading as string) || "Property Media That Delivers"}{" "}
                <span className="relative inline-block">
                  {(servicesContent?.heading_gold as string) || "Results"}
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "camera", image: "/images/stone-estate-living-room-fireplace.webp", title: "Photography", desc: "Bright, clean listing photos that make buyers stop scrolling and book a showing." },
              { icon: "drone", image: "/images/service-drone-field.webp", title: "Drone (Part 107)", desc: "Aerial views that show off the lot, neighborhood, and curb appeal — the shots your competitors don't have." },
              { icon: "video", image: "/images/service-videography-studio.webp", title: "Listing Video", desc: "30–90 second walkthrough video bundled into Full Packages — buyers tour the home before they ever visit." },
              { icon: "staging", image: "/images/virtual-staging-after-furnished.webp", title: "Virtual Staging", desc: "Empty rooms furnished digitally so buyers see a home, not a blank space. Add-on: +$25 per photo." },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <ServiceCard icon={iconMap[s.icon]} image={s.image} title={s.title} description={s.desc} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {(testimonialsContent?.tagline as string) || "Reviews"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {(testimonialsContent?.heading as string) || "Trusted by Agents & Property Owners"}
              </h2>
              <div className="mt-4 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-dark-200 font-mono">{(testimonialsContent?.rating as string) || "5.0"}</span>
              </div>
            </div>
          </FadeIn>
          {(() => {
            const hardcoded = [
              { quote: "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!", name: "Snow Dogs Food Truck", badge: "Recommends CS MEDIA, LLC", service: "Video Production", avatar: "/images/testimonial-snow-dogs.webp" },
              { quote: "I would recommend CS MEDIA to anyone! Simply the best person to work with and has PHENOMENAL turn around time. The photos taken of my wedding I'll cherish for a lifetime 🤍", name: "Bethany Brim", badge: "Recommends CS MEDIA, LLC", service: "Wedding Photography", avatar: "/images/testimonial-bethany-brim.webp" },
              { quote: "OH MY GOSH!!!! I can't even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.", name: "Jared Clouse - Bary", badge: "Recommends CS MEDIA, LLC", service: "Logo & Design", avatar: "/images/testimonial-jared-clouse.webp" },
            ];
            const hardcodedNames = new Set(hardcoded.map((t) => t.name.toLowerCase().trim()));
            const extras = testimonials.filter((t) => !hardcodedNames.has(t.name.toLowerCase().trim()));
            const list = [...hardcoded, ...extras];
            const gridCols = list.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
            return (
          <div className={`grid grid-cols-1 ${gridCols} gap-8 max-w-5xl mx-auto`}>
            {list.map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <article className="group relative rounded-xl bg-dark-800/60 p-7 sm:p-8 border border-dark-500/30 hover:border-gold/30 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    {"avatar" in testimonial && testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar as string}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover border border-dark-500/40 shrink-0"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                        <span className="text-gold font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{testimonial.name}</p>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70 mt-1">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>

                  <p className="text-dark-100 text-[16px] leading-[1.7] flex-1">
                    {testimonial.quote}
                  </p>

                  <p className="mt-6 pt-5 text-[11px] font-mono uppercase tracking-wider text-dark-400 border-t border-dark-500/20">
                    {testimonial.badge}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
            );
          })()}
          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <a
                href="https://www.facebook.com/profile.php?id=100090509656389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-dark-300 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                See our reviews on Facebook
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* How It Works */}
      <section id="process" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                From Booking to{" "}
                <span className="relative inline-block">
                  Delivery
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto relative">
            {/* Connector line between steps on desktop */}
            <div aria-hidden className="hidden md:block absolute top-[11px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

            {[
              { step: "01", title: "Book Your Shoot", desc: "Pick a date online or text us. We\u2019ll confirm details and arrive on time, ready to go.", Icon: StampIcon },
              { step: "02", title: "We Capture It", desc: "Professional drone, photo, and video coverage of your property\u2014inside and out.", Icon: DroneIcon },
              { step: "03", title: "Get Your Media", desc: "Edited photos, video, and virtual staging delivered within 24\u201348 hours.", Icon: PolaroidIcon },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative text-left md:text-center px-2">
                  <div className="inline-flex items-center gap-3 mb-4 bg-dark-800 md:bg-dark-800 relative z-10 md:px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70">Step {item.step}</span>
                  </div>
                  <div className="text-gold/80 mb-4 md:mx-auto md:w-fit">
                    <item.Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-200 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
            {faqItems.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-b border-dark-500/30 pb-8">
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="mt-3 text-dark-200 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="text-sm text-dark-200 hover:text-gold transition-colors underline"
              >
                View all services and pricing
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="mt-10 pt-8 border-t border-dark-500/30">
              <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 mb-4">
                Related Reading
              </p>
              <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-dark-100">
                <li>
                  <Link
                    href="/blog/real-estate-photography-cost-kentucky"
                    className="hover:text-gold transition-colors underline decoration-dark-500 hover:decoration-gold underline-offset-4"
                  >
                    How much does a real estate photographer cost in Kentucky?
                  </Link>
                </li>
                <li className="hidden sm:block text-dark-500">·</li>
                <li>
                  <Link
                    href="/blog/why-your-listing-isnt-getting-showings"
                    className="hover:text-gold transition-colors underline decoration-dark-500 hover:decoration-gold underline-offset-4"
                  >
                    Why isn&apos;t my listing getting showings?
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
