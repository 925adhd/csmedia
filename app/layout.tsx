import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieNotice from "@/components/CookieNotice";
import { EditModeProvider, EditToggle } from "@/components/inline-edit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CS Media | Elevated Real Estate Media",
    template: "%s | CS Media",
  },
  description:
    "Professional drone photography, video, and editing services for real estate agents and property owners. Elevate your listings with cinematic aerial media.",
  openGraph: {
    title: "CS Media | Elevated Real Estate Media",
    description:
      "Professional drone photography, video, and editing services for real estate.",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "CS Media",
    images: [
      {
        url: "/images/aerialhome1.jpg",
        width: 1200,
        height: 630,
        alt: "CS Media - Elevated Real Estate Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Media | Elevated Real Estate Media",
    description:
      "Professional drone photography, video, and editing services for real estate.",
    images: ["/images/aerialhome1.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-dark-900 text-white">
        <EditModeProvider>
          <GoogleAnalytics />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieNotice />
          {/* Floating call button */}
          <a
            href="tel:+12703070173"
            aria-label="Call CS Media"
            className="fixed bottom-6 right-6 z-50 flex md:hidden h-14 w-14 items-center justify-center rounded-full bg-dark-800 border border-gold/30 text-gold shadow-lg shadow-black/40 transition-transform hover:scale-110 hover:bg-dark-700 active:scale-95"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <EditToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
