import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import CTASection from "@/components/CTASection";
import { EditableText } from "@/components/inline-edit";
import { getPageContent } from "@/lib/supabase/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the operator behind CS MEDIA, LLC in Leitchfield, KY. FAA Part 107 certified drone pilot offering photography, videography, and editing.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About | CS Media",
    description:
      "Meet the operator behind CS MEDIA, LLC in Leitchfield, KY. FAA Part 107 certified drone pilot offering photography, videography, and editing.",
    type: "website",
    url: `${BASE_URL}/about`,
    siteName: "CS Media",
    images: [{ url: "/images/aerialhome1.jpg", width: 1200, height: 630 }],
  },
};

export default async function AboutPage() {
  const [headerContent, bioContent, trustContent, ctaContent] = await Promise.all([
    getPageContent("about", "header"),
    getPageContent("about", "bio"),
    getPageContent("about", "trust_points"),
    getPageContent("about", "cta"),
  ]);

  // Header fallbacks
  const headerTagline = (headerContent?.tagline as string) || "About";
  const headerHeading = (headerContent?.heading as string) || "The Person Behind";
  const headerHeadingGold = (headerContent?.heading_gold as string) || "the Lens";

  // Bio fallbacks
  const bioTagline = (bioContent?.tagline as string) || "My Story";
  const bioHeading = (bioContent?.heading as string) || "Hi, I\u2019m Cheris \u2014";
  const bioHeadingGold = (bioContent?.heading_gold as string) || "CS Media";
  const bioParagraphs = (bioContent?.paragraphs as string[]) || [
    "I started CS MEDIA, LLC with a passion for capturing properties and businesses in the best possible light. As a solo operator, I bring a level of personal attention and consistency that larger companies simply can\u2019t match.",
    "I\u2019m FAA Part 107 certified and specialize in photography, videography, drone work, and video editing. From real estate listings to promo videos and logo design, I handle it all \u2014 start to finish.",
    "When you work with me, you get the same person every time. Someone who learns your style, understands what you need, and delivers consistent quality project after project. No runaround, no random contractors.",
    "While I\u2019m based in Leitchfield and serve all of Kentucky, I\u2019m also available to travel out of state for the right project. If you need professional media anywhere in the region, reach out \u2014 I\u2019ll make it happen.",
    "Quality edits. Quick turnaround. And the best prices you\u2019ll find for professional media services. That\u2019s the CS Media promise.",
  ];
  const bioPhone = (bioContent?.phone as string) || "(270)\u00a0307-0173";
  const bioPhoneHref = bioPhone.replace(/[^\d+]/g, "");

  // Trust points fallbacks
  const trustTagline = (trustContent?.tagline as string) || "Why CS Media";
  const trustHeading = (trustContent?.heading as string) || "What Sets Us Apart";
  const trustPoints = (trustContent?.points as { title: string; description: string }[]) || [
    { title: "FAA Part 107", description: "Fully licensed and insured. Every drone flight is legal, safe, and professional." },
    { title: "Quick Turnaround", description: "Most projects delivered within 24-48 hours. Rush delivery available when you need it." },
    { title: "Lowest Prices", description: "Professional quality at the best rates. No hidden fees, no surprises. Just great work." },
    { title: "One Operator", description: "Same person every time. I learn your style and deliver consistent results, shoot after shoot." },
  ];

  // CTA fallbacks
  const ctaHeading = (ctaContent?.heading as string) || "Let's Work Together";
  const ctaSubheading = (ctaContent?.subheading as string) || "Text or call for your next project. Quality media, fast turnaround, best prices.";

  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 pt-12 sm:pt-14 pb-10 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <EditableText page="about" section="header" field="tagline" value={headerTagline}>
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                {headerTagline}
              </span>
            </EditableText>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              <EditableText page="about" section="header" field="heading" value={headerHeading}>
                {headerHeading}
              </EditableText>
              <br />
              <span className="text-gold">
                <EditableText page="about" section="header" field="heading_gold" value={headerHeadingGold}>
                  {headerHeadingGold}
                </EditableText>
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-20 lg:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_460px)_1fr] gap-10 lg:gap-16 items-center">
            {/* Video column */}
            <FadeIn>
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[460px]">
                  <div className="rounded-[20px] overflow-hidden border border-dark-500/20 shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_12px_50px_rgba(201,169,110,0.12)] hover:scale-[1.02]">
                    <VideoPlayer
                      src="/videos/personalpromo.mp4"
                      poster="/images/me.webp"
                      posterAlt="Cheris S. Chanthavong, owner of CS Media"
                    />
                  </div>
                  {/* Decorative accents */}
                  <div className="absolute -bottom-3 -right-3 w-28 h-28 border border-gold/15 rounded-2xl -z-10" />
                  <div className="absolute -top-3 -left-3 w-20 h-20 border border-gold/10 rounded-2xl -z-10" />
                </div>
              </div>
            </FadeIn>

            {/* Text column */}
            <FadeIn delay={0.15}>
              <div className="max-w-[560px] mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-gold/60" />
                  <EditableText page="about" section="bio" field="tagline" value={bioTagline}>
                    <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                      {bioTagline}
                    </span>
                  </EditableText>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                  <EditableText page="about" section="bio" field="heading" value={bioHeading}>
                    {bioHeading}
                  </EditableText>
                  <br />
                  the owner of <span className="text-gold">
                    <EditableText page="about" section="bio" field="heading_gold" value={bioHeadingGold}>
                      {bioHeadingGold}
                    </EditableText>
                  </span>.
                </h2>
                <div className="space-y-5 text-dark-200 leading-[1.8] text-[15px]">
                  {bioParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="mt-10">
                  <a
                    href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
                    className="inline-flex items-center gap-3 text-gold font-mono tracking-wider hover:text-gold-light transition-colors"
                  >
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    <span className="whitespace-nowrap">{bioPhone}</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 sm:py-28 bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <EditableText page="about" section="trust_points" field="tagline" value={trustTagline}>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                  {trustTagline}
                </span>
              </EditableText>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                <EditableText page="about" section="trust_points" field="heading" value={trustHeading}>
                  {trustHeading}
                </EditableText>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const icons = [
                <svg key="icon-0" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,
                <svg key="icon-1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
                <svg key="icon-2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
                <svg key="icon-3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>,
              ];
              return trustPoints.map((point, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative rounded-2xl bg-dark-800 p-8 border-gradient h-full">
                    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]" />
                    <div className="relative z-10">
                      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold">
                        {icons[i]}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-dark-200 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ));
            })()}
          </div>
        </div>
      </section>

      <CTASection
        heading={ctaHeading}
        subheading={ctaSubheading}
        desktopSubheading="Reach out for your next project. Quality media, fast turnaround, best prices."
        useTextLink
      />
    </>
  );
}
