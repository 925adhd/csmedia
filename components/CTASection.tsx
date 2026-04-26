import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import TextLink from "@/components/TextLink";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  desktopSubheading?: string;
  buttonText?: string;
  useTextLink?: boolean;
  backgroundImage?: string;
}

export default function CTASection({
  heading = "Book Your Property Shoot Today",
  subheading = "Professional drone photography & video that helps your properties sell faster and for more.",
  desktopSubheading,
  buttonText = "Book a Shoot",
  useTextLink = false,
  backgroundImage = "/images/twilight-ranch-home-evening-kentucky.webp",
}: CTASectionProps) {
  const buttonClass = "group relative mt-10 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-dark-900 transition-colors hover:bg-gold-light cursor-pointer";

  const flashBurst = (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="flash-burst-sm pointer-events-none absolute -top-2.5 -right-2.5 h-7 w-7 text-gold"
    >
      <defs>
        <radialGradient id="ctaFlashCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="40%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="currentColor">
        <path d="M50 6 L52.5 50 L50 50 L47.5 50 Z" />
        <path d="M94 50 L50 52.5 L50 50 L50 47.5 Z" />
        <path d="M50 94 L47.5 50 L50 50 L52.5 50 Z" />
        <path d="M6 50 L50 47.5 L50 50 L50 52.5 Z" />
      </g>
      <g fill="currentColor" opacity="0.7" transform="rotate(45 50 50)">
        <path d="M50 20 L52 50 L50 50 L48 50 Z" />
        <path d="M80 50 L50 52 L50 50 L50 48 Z" />
        <path d="M50 80 L48 50 L50 50 L52 50 Z" />
        <path d="M20 50 L50 48 L50 50 L50 52 Z" />
      </g>
      <circle cx="50" cy="50" r="18" fill="url(#ctaFlashCore)" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  );

  return (
    <section className="relative bg-dark-800 py-16 sm:py-28 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover object-[center_36%] opacity-45"
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/60 to-dark-900/75" />
        </>
      )}

      {/* Decorative gold gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="inline-block mb-6">
          <span className="h-px w-16 bg-gold/60 inline-block align-middle" />
          <span className="mx-4 text-gold text-xs font-mono uppercase tracking-[0.3em]">Let&apos;s Work</span>
          <span className="h-px w-16 bg-gold/60 inline-block align-middle" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {heading}
        </h2>
        {desktopSubheading ? (
          <>
            <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto md:hidden">
              {subheading}
            </p>
            <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto hidden md:block">
              {desktopSubheading}
            </p>
          </>
        ) : (
          <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
        {useTextLink ? (
          <TextLink className={buttonClass}>
            {flashBurst}
            {buttonText}
          </TextLink>
        ) : (
          <BookingButton className={buttonClass}>
            {flashBurst}
            {buttonText}
          </BookingButton>
        )}
      </div>
    </section>
  );
}
