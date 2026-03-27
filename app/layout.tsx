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
          {/* Floating text button */}
          <a
            href="sms:+12703070173"
            aria-label="Text CS Media"
            className="fixed bottom-6 right-6 z-50 flex md:hidden items-center justify-center rounded-full bg-dark-800 border border-gold/30 px-5 py-3 text-gold font-semibold text-sm shadow-lg shadow-black/40 transition-transform hover:scale-105 hover:bg-dark-700 active:scale-95"
          >
            Text Us
          </a>
          <EditToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
