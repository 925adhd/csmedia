import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the operator behind CS MEDIA, LLC. FAA Part 107 certified drone pilot delivering professional photography, videography, and editing services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 pt-14 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              About
            </span>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold text-white tracking-tight">
              The Person Behind
              <br />
              <span className="text-gold">the Lens</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24 bg-dark-800 relative">
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
                      poster="/images/me.jpg"
                      posterAlt="Cheris S. Chanthavong, founder of CS Media"
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
                  <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                    My Story
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                  Hi, I&apos;m Cheris &mdash;
                  <br />
                  the founder of <span className="text-gold">CS Media</span>.
                </h2>
                <div className="space-y-5 text-dark-200 leading-[1.8] text-[15px]">
                  <p>
                    I started CS MEDIA, LLC with a passion for capturing
                    properties and businesses in the best possible light. As a
                    solo operator, I bring a level of personal attention and
                    consistency that larger companies simply can&apos;t match.
                  </p>
                  <p>
                    I&apos;m FAA Part 107 certified and specialize in
                    photography, videography, drone work, and video editing.
                    From real estate listings to promo videos and logo design,
                    I handle it all &mdash; start to finish.
                  </p>
                  <p>
                    When you work with me, you get the same person every
                    time. Someone who learns your style, understands what you
                    need, and delivers consistent quality project after project.
                    No runaround, no random contractors.
                  </p>
                  <p>
                    Quality edits. Quick turnaround. And the best prices you&apos;ll
                    find for professional media services. That&apos;s the CS Media promise.
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    href="tel:+12703070173"
                    className="inline-flex items-center gap-3 text-gold font-mono tracking-wider hover:text-gold-light transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (270) 307-0173
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-28 bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
                Why CS Media
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                What Sets Us Apart
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "FAA Part 107",
                desc: "Fully licensed and insured. Every drone flight is legal, safe, and professional.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Quick Turnaround",
                desc: "Most projects delivered within 24-48 hours. Rush delivery available when you need it.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Lowest Prices",
                desc: "Professional quality at the best rates. No hidden fees, no surprises. Just great work.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "One Operator",
                desc: "Same person every time. I learn your style and deliver consistent results, shoot after shoot.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl bg-dark-800 p-8 border-gradient h-full">
                  <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.05),transparent_70%)]" />
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-dark-200 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Work Together"
        subheading="Text or call for your next project. Quality media, fast turnaround, best prices."
      />
    </>
  );
}
