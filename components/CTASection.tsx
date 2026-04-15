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
  const buttonClass = "mt-10 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-dark-900 transition-colors hover:bg-gold-light cursor-pointer";

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
            {buttonText}
          </TextLink>
        ) : (
          <BookingButton className={buttonClass}>
            {buttonText}
          </BookingButton>
        )}
      </div>
    </section>
  );
}
