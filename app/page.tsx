import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import BookingButton from "@/components/BookingButton";
import TextLink from "@/components/TextLink";
import HeroViewportLock from "@/components/HeroViewportLock";
import { StampIcon, DroneIcon, PolaroidIcon } from "@/components/StepIcons";
import { getPortfolioProjects } from "@/lib/portfolio";
import { locations } from "@/lib/locations";
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

  const faqItems = [
    {
      q: "How much does real estate photography cost?",
      a: "Packages start at $85 for aerial-only and $140 for interior + exterior photos. Our Photo Package with drone is $200, and full packages with cinematic listing video run $280\u2013$380. See our pricing page for the full breakdown.",
      aNode: (
        <>
          Packages start at $85 for aerial-only and $140 for interior + exterior photos. Our Photo Package with drone is $200, and full packages with cinematic listing video run $280&ndash;$380. See our{" "}
          <Link href="/services/real-estate" className="text-gold hover:underline">
            pricing page
          </Link>{" "}
          for the full breakdown.
        </>
      ),
    },
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
      <HeroViewportLock />

      {/* Hero */}
      <section id="hero" className="relative flex items-center justify-center h-[var(--hero-h,90svh)] md:h-auto md:min-h-[90vh] pt-20 pb-16 md:pt-24 md:pb-20 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/images/brick-home-aerial-drone-kentucky.webp"
            alt="Aerial drone shot of a brick home with landscaped yard in Kentucky"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwAgCdASoQAAwAA4BaJbACsAYvXWU5YP6KAADymXLefN8XytR0++YiAodY0sXOYNnI99BHxRFH5sNGyqws4VDnedWH+gvMYDbleOrAV9DfALdGF3l73VN287y2aEsXVPoLMnLV4sT2IeuC8AA="
          />
        </div>

        {/* Corner drone tag */}
        <div className="absolute top-5 left-4 md:top-6 md:left-6 z-[5] flex items-center gap-2 md:gap-2.5 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.7)]" />
          <span>REC</span>
          <span aria-hidden="true" className="hidden md:inline text-gold/60">·</span>
          <span className="hidden md:inline">Leitchfield, KY · Aerial</span>
        </div>

        {/* Uniform darkening for text legibility — preserves image tonal range */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Viewfinder corner frames — desktop (top-left + bottom-right, tucked inward) */}
        <div className="absolute top-32 left-16 w-px h-32 bg-gradient-to-b from-gold/60 to-transparent hidden lg:block" />
        <div className="absolute top-32 left-16 w-32 h-px bg-gradient-to-r from-gold/60 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 right-16 w-px h-32 bg-gradient-to-t from-gold/60 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 right-16 w-32 h-px bg-gradient-to-l from-gold/60 to-transparent hidden lg:block" />

        {/* Viewfinder corner frames — mobile (top-left + bottom-right, matching desktop + REC tag) */}
        <div className="absolute top-24 left-6 w-px h-14 bg-gradient-to-b from-gold/60 to-transparent lg:hidden" />
        <div className="absolute top-24 left-6 w-14 h-px bg-gradient-to-r from-gold/60 to-transparent lg:hidden" />
        <div className="absolute bottom-24 right-6 w-px h-14 bg-gradient-to-t from-gold/60 to-transparent lg:hidden" />
        <div className="absolute bottom-24 right-6 w-14 h-px bg-gradient-to-l from-gold/60 to-transparent lg:hidden" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] md:leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]">
              Kentucky Real Estate
              <br />
              <span className="relative inline-block">
                Photography
                <span aria-hidden className="hidden md:block absolute left-0 right-0 -bottom-1 h-[3px] bg-gold" />
              </span>
              {" "}&amp;<span className="hidden md:inline">{" "}</span><br className="md:hidden" />Drone Video
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-white max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Get your listing clicked, toured,{"\u00a0"}and{"\u00a0"}<span className="text-gold">sold.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex items-center justify-center">
              <BookingButton
                className="rounded-full bg-gold px-10 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-dark-900 transition-all hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/25 shadow-lg shadow-gold/15 cursor-pointer"
              >
                Book a Shoot
              </BookingButton>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Trust + Stats bar (merged) */}
      <section id="stats" className="scroll-mt-20 py-6 sm:py-10 bg-dark-800 border-y border-gold/15">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-center items-center">
              {/* Rating */}
              <div className="flex flex-col items-center">
                <div role="img" aria-label="Rated 5 out of 5 stars" className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-xs text-dark-300 font-mono uppercase tracking-wider">
                  KY Realtors
                </p>
              </div>

              {/* Turnaround */}
              <div>
                <p className="text-base sm:text-2xl md:text-3xl font-bold text-gold whitespace-nowrap">24–48hr</p>
                <p className="mt-1 text-[9px] sm:text-xs text-dark-300 font-mono uppercase tracking-wider">
                  Delivery
                </p>
              </div>

              {/* Part 107 */}
              <div>
                <p className="text-base sm:text-2xl md:text-3xl font-bold text-gold whitespace-nowrap">Part 107</p>
                <p className="mt-1 text-[9px] sm:text-xs text-dark-300 font-mono uppercase tracking-wider">
                  FAA Certified
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recent Work */}
      <section id="portfolio" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {(recentWork?.tagline as string) || "Recent Work"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {(recentWork?.heading as string) || "Recent Kentucky Real Estate Photography"}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {(testimonialsContent?.tagline as string) || "Reviews"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {(testimonialsContent?.heading as string) || "Reviews from Kentucky Real Estate Agents"}
              </h2>
              <div className="mt-4 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} aria-hidden="true" className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-dark-200 font-mono">{(testimonialsContent?.rating as string) || "5.0"}</span>
              </div>
            </div>
          </FadeIn>
          {(() => {
            const hardcoded = [
              { quote: "I would recommend CS MEDIA to anyone! Simply the best person to work with and has PHENOMENAL turn around time. The photos taken of my wedding I'll cherish for a lifetime 🤍", name: "Bethany Brim", badge: "Recommends CS MEDIA, LLC", service: "Wedding Photography", avatar: "/images/testimonial-bethany-brim.webp", bgImage: "/images/twilight-ranch-aerial-drone-dusk.webp" },
              { quote: "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!", name: "Snow Dogs Food Truck", badge: "Recommends CS MEDIA, LLC", service: "Video Production", avatar: "/images/testimonial-snow-dogs.webp", bgImage: "/images/snow-dogs-food-truck-promo-kentucky.webp" },
              { quote: "OH MY GOSH!!!! I can't even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.", name: "Jared Clouse - Bary", badge: "Recommends CS MEDIA, LLC", service: "Logo & Design", avatar: "/images/testimonial-jared-clouse.webp" },
            ];
            const hardcodedNames = new Set(hardcoded.map((t) => t.name.toLowerCase().trim()));
            const extras = testimonials.filter((t) => !hardcodedNames.has(t.name.toLowerCase().trim()));
            const list = [...hardcoded, ...extras];
            const featured = list[0];
            const rest = list.slice(1);
            const restWrapperClass =
              rest.length === 1
                ? "mt-10 max-w-2xl mx-auto"
                : `mt-10 grid grid-cols-1 ${rest.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6 max-w-5xl mx-auto`;
            return (
              <>
                {/* Featured pull quote on property photo */}
                <FadeIn>
                  <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gold/20 min-h-[420px] sm:min-h-[460px] shadow-2xl shadow-black/40">
                    <Image
                      src="/images/twilight-ranch-aerial-drone-dusk.webp"
                      alt="Twilight aerial drone photography of a Kentucky property at dusk"
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-12">
                      <span aria-hidden className="text-gold/40 text-[100px] sm:text-[140px] font-serif leading-[0.6] select-none mb-2">&ldquo;</span>
                      <p className="text-lg sm:text-xl md:text-2xl font-light italic text-white leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                        {featured.quote}
                      </p>
                      <div className="mt-8 flex items-center gap-3">
                        {"avatar" in featured && featured.avatar ? (
                          <Image
                            src={featured.avatar as string}
                            alt={featured.name}
                            width={44}
                            height={44}
                            className="h-11 w-11 rounded-full object-cover border border-gold/30 shrink-0"
                          />
                        ) : (
                          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/30 flex items-center justify-center shrink-0">
                            <span className="text-gold font-semibold text-sm">{featured.name.charAt(0)}</span>
                          </div>
                        )}
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white">{featured.name}</p>
                          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/80 mt-0.5">{featured.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Remaining testimonials grid */}
                {rest.length > 0 && (
                  <div className={restWrapperClass}>
                    {rest.map((testimonial, i) => {
                      const hasBg = "bgImage" in testimonial && !!testimonial.bgImage;
                      return (
                        <FadeIn key={i} delay={i * 0.15}>
                          <article className="group relative rounded-xl overflow-hidden border border-dark-500/30 hover:border-gold/30 transition-colors h-full flex flex-col min-h-[380px]">
                            {hasBg && (
                              <>
                                <Image
                                  src={testimonial.bgImage as string}
                                  alt=""
                                  aria-hidden="true"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
                              </>
                            )}
                            {!hasBg && <div className="absolute inset-0 bg-dark-900/60" />}

                            <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col">
                              <div className="flex items-center gap-4 mb-6">
                                {"avatar" in testimonial && testimonial.avatar ? (
                                  <Image
                                    src={testimonial.avatar as string}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 rounded-full object-cover border border-gold/30 shrink-0"
                                  />
                                ) : (
                                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                                    <span className="text-gold font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-white truncate">{testimonial.name}</p>
                                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/80 mt-1">
                                    {testimonial.service}
                                  </p>
                                </div>
                              </div>

                              <p className="text-white text-[15px] leading-[1.7] flex-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                                {testimonial.quote}
                              </p>

                              <p className="mt-6 pt-5 text-[11px] font-mono uppercase tracking-wider text-dark-300 border-t border-white/15">
                                {testimonial.badge}
                              </p>
                            </div>
                          </article>
                        </FadeIn>
                      );
                    })}
                  </div>
                )}
              </>
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

      {/* Locations */}
      <section id="locations" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Service Areas
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Real Estate Photography Across{" "}
                <span className="relative inline-block">
                  Kentucky
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
              <p className="mt-5 text-base text-dark-100 max-w-2xl mx-auto leading-relaxed">
                Based in Leitchfield. Shooting across central and western Kentucky most weeks. Pick your market for local details, airspace notes, and pricing.
              </p>
            </div>
          </FadeIn>
          {/* Mobile: BCP-style inline text links — light, scannable */}
          <FadeIn>
            <p className="text-center text-[15px] leading-[2] text-dark-100 sm:hidden">
              {locations.map((loc, i) => (
                <span key={loc.slug}>
                  <Link
                    href={`/${loc.slug}-real-estate-photography`}
                    className="underline decoration-dark-500 underline-offset-4 hover:decoration-gold hover:text-gold transition-colors"
                  >
                    {loc.city}
                  </Link>
                  {i < locations.length - 1 ? <span aria-hidden="true">, </span> : null}
                </span>
              ))}
            </p>
          </FadeIn>

          {/* Desktop: card grid with county + city */}
          <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <FadeIn key={loc.slug} delay={i * 0.03}>
                <Link
                  href={`/${loc.slug}-real-estate-photography`}
                  className="group block h-full rounded-xl border border-dark-500/30 bg-dark-800/40 p-5 transition-all hover:border-gold/40 hover:bg-dark-800/60"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70">
                    {loc.county}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-white group-hover:text-gold transition-colors">
                    {loc.city}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                href="/services/real-estate"
                className="text-sm text-gold hover:text-gold/80 transition-colors font-medium"
              >
                View all service areas &rarr;
              </Link>
            </div>
          </FadeIn>
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
                {(servicesContent?.heading as string) || "Real Estate Photography, Drone &"}{" "}
                <span className="relative inline-block">
                  {(servicesContent?.heading_gold as string) || "Video Services"}
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "camera", image: "/images/stone-estate-front-exterior-walkway.webp", title: "Photography", desc: "Bright, clean listing photos that make buyers stop scrolling and book a showing.", href: "/services/real-estate" },
              { icon: "drone", image: "/images/service-drone-field.webp", title: "Drone (Part 107)", desc: "Aerial views that show off the lot, neighborhood, and curb appeal — the shots your competitors don't have.", href: "/services/real-estate" },
              { icon: "video", image: "/images/stone-estate-living-room-fireplace.webp", title: "Listing Video", desc: "30–90 second walkthrough video bundled into Full Packages — buyers tour the home before they ever visit.", href: "/services/real-estate" },
              { icon: "staging", image: "/images/virtual-staging-after-furnished.webp", title: "Virtual Staging", desc: "Empty rooms furnished digitally so buyers see a home, not a blank space. Add-on: +$25 per photo.", href: "/services/real-estate" },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <ServiceCard icon={iconMap[s.icon]} image={s.image} title={s.title} description={s.desc} href={s.href} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Virtual Staging Before/After */}
      <section id="staging" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
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

      {/* How It Works */}
      <section id="process" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                How Our Real Estate Photography{" "}
                <span className="relative inline-block">
                  Process Works
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 md:-bottom-1.5 h-[2px] md:h-[3px] bg-gold" />
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto relative">
            {/* Connector line between steps on desktop */}
            <div aria-hidden className="hidden md:block absolute top-[11px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

            {[
              { step: "01", title: "Book Your Shoot", desc: "Send a quick request — text, call, or use the form. We\u2019ll confirm the date and arrive on time, ready to go.", Icon: StampIcon },
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
                  <p className="mt-2 text-sm text-dark-100 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.45}>
            <div className="mt-14 text-center">
              <BookingButton
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold hover:border-gold hover:bg-gold/15 transition-all cursor-pointer"
              >
                Book a Shoot
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </BookingButton>
            </div>
          </FadeIn>
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
                  <p className="mt-3 text-dark-100 leading-relaxed">{faq.a}</p>
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
                <li aria-hidden="true" className="hidden sm:block text-dark-500">·</li>
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
