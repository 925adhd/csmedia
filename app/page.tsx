import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BookingButton from "@/components/BookingButton";
import HeroViewportLock from "@/components/HeroViewportLock";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const testimonials = [
    {
      quote: "From the first 30 seconds in the initial phone call I knew we had the right team for what we are trying to accomplish. Accommodating, extremely friendly, extremely professional. Their work and videography was absolutely top notch!",
      name: "Aaron Foulks",
      service: "Video Production",
      avatar: "/images/testimonial-aaron-foulks.webp",
    },
    {
      quote: "She showed up with everything needed to shoot high-quality content and made me feel completely comfortable in front of the camera. Seriously cannot recommend her enough!",
      name: "Ashton Watkins",
      service: "Video Production",
      avatar: "/images/testimonial-ashton-watkins.webp",
    },
    {
      quote: "10/10 recommend! Not only is Cheris the best hype man, she's phenomenal at what she does. 5 stars isn't enough!!",
      name: "Reece McCoy",
      service: "Video Production",
      avatar: "/images/testimonial-reece-mccoy.webp",
    },
    {
      quote: "I am so fortunate to have CS Media in my corner! The professional quality videos and photography has worked wonders for my business! I highly recommend her work!",
      name: "Doggone Pet Waste Removal Service",
      service: "Business Promo",
      avatar: "/images/testimonial-doggone-pet-waste.webp",
    },
  ];

  return (
    <>
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
              Get your listing clicked, toured,{" "}and{" "}sold.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex items-center justify-center">
              <BookingButton
                className="rounded-full bg-gold px-10 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-dark-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] transition-colors hover:bg-gold/90 cursor-pointer"
              >
                Book a Shoot
              </BookingButton>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-dark-800 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 mb-6">
              Reviews
            </p>
          </FadeIn>
          <TestimonialCarousel testimonials={testimonials} />
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
