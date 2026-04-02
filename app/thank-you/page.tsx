import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE_URL}/thank-you` },
  openGraph: {
    title: "Thank You | CS Media",
    description: "Thanks for reaching out to CS Media. We'll be in touch soon.",
    type: "website",
    url: `${BASE_URL}/thank-you`,
    siteName: "CS Media",
  },
};

export default function ThankYouPage() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <svg className="mx-auto h-16 w-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Thank You
        </h1>
        <p className="mt-5 text-dark-200 leading-relaxed">
          Your message has been received. We&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gold/10 border border-gold/20 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
          >
            Back to Home
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-dark-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
