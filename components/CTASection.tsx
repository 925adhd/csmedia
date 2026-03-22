import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
}

export default function CTASection({
  heading = "Ready to Elevate Your Listings?",
  subheading = "Professional drone media that helps your properties sell faster and for more.",
  buttonText = "Book a Shoot",
  buttonHref = "/contact",
  backgroundImage = "/images/nighthome.jpg",
}: CTASectionProps) {
  return (
    <section className="relative bg-dark-800 py-16 sm:py-28 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/80 to-dark-900/90" />
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
        <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
          {subheading}
        </p>
        <Link
          href={buttonHref}
          className="mt-10 inline-block border-gradient rounded-full bg-gold/10 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20 hover:glow-gold"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
