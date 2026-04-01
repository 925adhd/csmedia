import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import CalendlyButton from "@/components/CalendlyButton";
import TextLink from "@/components/TextLink";
import { EditableText, EditableList } from "@/components/inline-edit";
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
    hero,
    servicesContent,
    stagingContent,
    recentWork,
    testimonialsContent,
    statsContent,
    testimonials,
    services,
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

  const stats = Array.isArray(statsContent)
    ? (statsContent as Array<{ value: string; label: string }>)
    : [
        { value: "Part 107", label: "FAA Certified" },
        { value: "24hr", label: "Turnaround" },
        { value: "1.1K+", label: "Followers" },
        { value: "100%", label: "Recommended" },
      ];

  const stagingFeatures = (stagingContent?.features as string[]) || [
    "Realistic digitally furnished rooms",
    "Multiple style options available",
    "Fraction of the cost of physical staging",
    "24-48 hour turnaround",
  ];

  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative flex items-start pt-24 md:items-center md:pt-0 justify-center min-h-screen bg-dark-900 overflow-hidden">
        <Image
          src="/images/aerialhome1.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/70 to-dark-900" />
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
              <EditableText page="home" section="hero" field="tagline" value={(hero?.tagline as string) || "Licensed to Drone"}>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.4em]">
                  {(hero?.tagline as string) || "Licensed to Drone"}
                </span>
              </EditableText>
              <span className="h-px w-12 bg-gold/60" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              <EditableText page="home" section="hero" field="heading_line1" value={(hero?.heading_line1 as string) || "Elevated"}>
                {(hero?.heading_line1 as string) || "Elevated"}
              </EditableText>
              <br />
              <span className="text-gold">
                <EditableText page="home" section="hero" field="heading_line2" value={(hero?.heading_line2 as string) || "Real Estate"}>
                  {(hero?.heading_line2 as string) || "Real Estate"}
                </EditableText>
              </span>
              <br />
              <EditableText page="home" section="hero" field="heading_line3" value={(hero?.heading_line3 as string) || "Media"}>
                {(hero?.heading_line3 as string) || "Media"}
              </EditableText>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <EditableText page="home" section="hero" field="subtext" value={(hero?.subtext as string) || "Professional drone photography, cinematic video & expert editing. Quality work. Quick turnaround."} multiline>
              <p className="mt-8 text-lg md:text-xl text-dark-200 max-w-xl mx-auto leading-relaxed">
                {(hero?.subtext as string) || "Professional drone photography, cinematic video & expert editing. Quality work. Quick turnaround."}
              </p>
            </EditableText>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CalendlyButton
                className="border-gradient rounded-full bg-gold/10 px-10 py-4 text-base font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20 cursor-pointer"
              >
                Book a Shoot
              </CalendlyButton>
              <Link
                href="/portfolio"
                className="rounded-full border border-dark-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
              >
                View Portfolio
              </Link>
            </div>
            <p className="mt-5 text-sm text-dark-300">
              Or text{" "}
              <a
                href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
                className="text-gold/70 hover:text-gold transition-colors"
              >
                (270) 307-0173
              </a>
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      <div className="flex flex-col">
      {/* Services Preview */}
      <section id="services" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden order-3 md:order-1">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <EditableText page="home" section="services" field="tagline" value={(servicesContent?.tagline as string) || "What We Do"}>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  {(servicesContent?.tagline as string) || "What We Do"}
                </span>
              </EditableText>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                <EditableText page="home" section="services" field="heading" value={(servicesContent?.heading as string) || "Property Media That Delivers"}>
                  {(servicesContent?.heading as string) || "Property Media That Delivers"}
                </EditableText>
                <span className="text-gold">
                  {" "}<EditableText page="home" section="services" field="heading_gold" value={(servicesContent?.heading_gold as string) || "Results"}>
                    {(servicesContent?.heading_gold as string) || "Results"}
                  </EditableText>
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.length > 0
              ? services.map((service, i) => (
                  <FadeIn key={service.id} delay={i * 0.1}>
                    <ServiceCard
                      icon={iconMap[service.icon_name] || iconMap.camera}
                      title={service.title}
                      description={service.description}
                    />
                  </FadeIn>
                ))
              : [
                  { icon: "camera", title: "Photography", desc: "Interior and exterior real estate photography with professional lighting, composition, and HDR processing." },
                  { icon: "video", title: "Videography", desc: "Cinematic property walkthroughs and promo videos that capture attention and drive engagement." },
                  { icon: "drone", title: "Drone (Part 107)", desc: "FAA-certified aerial photography and video. Stunning perspectives from above." },
                  { icon: "staging", title: "Virtual Staging", desc: "Digitally furnish empty rooms with realistic furniture and decor. Sell the lifestyle, not just the space." },
                  { icon: "edit", title: "Video Editing", desc: "Polished, branded videos with music, transitions, color grading, and graphics." },
                ].map((s, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <ServiceCard icon={iconMap[s.icon]} title={s.title} description={s.desc} />
                  </FadeIn>
                ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Virtual Staging Before/After */}
      <section id="staging" className="scroll-mt-20 py-16 sm:py-28 bg-dark-800 relative overflow-hidden order-2 md:order-2">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <EditableText page="home" section="staging" field="tagline" value={(stagingContent?.tagline as string) || "Virtual Staging"}>
                  <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                    {(stagingContent?.tagline as string) || "Virtual Staging"}
                  </span>
                </EditableText>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  <EditableText page="home" section="staging" field="heading" value={(stagingContent?.heading as string) || "Virtual Staging That"}>
                    {(stagingContent?.heading as string) || "Virtual Staging That"}
                  </EditableText>
                  <br />
                  <span className="text-gold">
                    <EditableText page="home" section="staging" field="heading_gold" value={(stagingContent?.heading_gold as string) || "Sells Homes Faster"}>
                      {(stagingContent?.heading_gold as string) || "Sells Homes Faster"}
                    </EditableText>
                  </span>
                </h2>
                <EditableText page="home" section="staging" field="description" value={(stagingContent?.description as string) || "Our edited virtual staging transforms empty, hard-to-visualize spaces into fully furnished rooms that help buyers see the potential. Realistic furniture, decor, and styling — digitally placed to sell the lifestyle, not just the square footage."} multiline>
                  <p className="mt-5 text-dark-200 leading-relaxed">
                    {(stagingContent?.description as string) || "Our edited virtual staging transforms empty, hard-to-visualize spaces into fully furnished rooms that help buyers see the potential. Realistic furniture, decor, and styling — digitally placed to sell the lifestyle, not just the square footage."}
                  </p>
                </EditableText>
                <EditableList page="home" section="staging" field="features" items={stagingFeatures}>
                  <ul className="mt-6 space-y-3">
                    {stagingFeatures.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-dark-100">
                        <svg className="h-4 w-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </EditableList>
                <TextLink
                  className="mt-8 inline-block border-gradient rounded-full bg-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
                >
                  <EditableText page="home" section="staging" field="cta_text" value={(stagingContent?.cta_text as string) || "Get a Quote"}>
                    {(stagingContent?.cta_text as string) || "Get a Quote"}
                  </EditableText>
                </TextLink>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <BeforeAfter
                  beforeSrc="/images/examplestagingbefore.webp"
                  afterSrc="/images/examplestagingcomplete.webp"
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

      {/* Recent Work */}
      <section id="portfolio" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 order-1 md:order-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <EditableText page="home" section="recent_work" field="tagline" value={(recentWork?.tagline as string) || "Recent Work"}>
                  <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                    {(recentWork?.tagline as string) || "Recent Work"}
                  </span>
                </EditableText>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                  <EditableText page="home" section="recent_work" field="heading" value={(recentWork?.heading as string) || "Featured Projects"}>
                    {(recentWork?.heading as string) || "Featured Projects"}
                  </EditableText>
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-dark-200 hover:text-gold transition-colors group"
              >
                {(recentWork?.view_all_text as string) || "View All"}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioProjects.filter((p) => !p.videoSrc).slice(0, 2).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <PortfolioCard project={portfolioProjects.find((p) => p.slug === "twilight-showcase")!} />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PortfolioCard project={portfolioProjects.find((p) => p.slug === "drone-property-tour")!} />
            </FadeIn>
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

      </div>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20 py-16 sm:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <EditableText page="home" section="testimonials" field="tagline" value={(testimonialsContent?.tagline as string) || "Reviews"}>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  {(testimonialsContent?.tagline as string) || "Reviews"}
                </span>
              </EditableText>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                <EditableText page="home" section="testimonials" field="heading" value={(testimonialsContent?.heading as string) || "Trusted by Agents & Property Owners"}>
                  {(testimonialsContent?.heading as string) || "Trusted by Agents & Property Owners"}
                </EditableText>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(testimonials.length > 0
              ? testimonials
              : [
                  { quote: "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!", name: "Snow Dogs Food Truck", badge: "Recommends CS MEDIA, LLC", service: "Video Production" },
                  { quote: "OH MY GOSH!!!! I can't even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.", name: "Jared Clouse - Bary", badge: "Recommends CS MEDIA, LLC", service: "Logo & Design" },
                ]
            ).map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <article className="group relative rounded-2xl bg-dark-800/80 backdrop-blur-sm p-8 sm:p-10 border border-dark-500/30 hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                  <span className="text-gold/10 text-[120px] font-serif leading-none absolute -top-4 -left-2 select-none" aria-hidden="true">
                    &ldquo;
                  </span>

                  <span className="inline-block self-start rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold mb-5 relative z-10">
                    {testimonial.service}
                  </span>

                  <p className="text-dark-100 text-lg leading-relaxed relative z-10 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="mt-8 pt-6 border-t border-dark-500/30 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-gold font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gold/60 mt-0.5 font-mono tracking-wider">
                        {testimonial.badge}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
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

      {/* Stats bar */}
      <section id="stats" className="scroll-mt-20 py-16 bg-dark-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
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
