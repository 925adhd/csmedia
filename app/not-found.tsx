import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved. Browse CS Media drone photography and videography services.",
  openGraph: {
    title: "Page Not Found | CS Media",
    description:
      "The page you are looking for does not exist or has been moved. Browse CS Media drone photography and videography services.",
    type: "website",
    url: BASE_URL,
    siteName: "CS Media",
  },
};

export default function NotFound() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <p className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
          404
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-5 text-dark-200 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gold/10 border border-gold/20 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-dark-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-dark-400 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-100 transition-all hover:border-gold/50 hover:text-gold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
