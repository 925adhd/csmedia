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
    google: "8DibFK426dNH-_QmyMCKPZR2OCImW5L8NUWCmbjzkzQ",
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
            href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
            aria-label="Text CS Media"
            className="fixed bottom-6 right-6 z-50 flex md:hidden items-center justify-center rounded-full bg-dark-800 border border-gold/30 h-14 w-14 text-gold shadow-lg shadow-black/40 transition-transform hover:scale-110 hover:bg-dark-700 active:scale-95"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
          </a>
          <EditToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
