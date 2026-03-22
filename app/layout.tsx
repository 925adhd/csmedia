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

export const metadata: Metadata = {
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
          <div className="fixed top-0 left-0 right-0 z-[60] bg-dark-900/95 backdrop-blur-sm border-b border-gold/20 py-1.5 px-4 text-center">
            <p className="text-[11px] text-dark-200">
              Demo website created by <a href="https://studio925.design" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light font-semibold transition-colors">Studio 925</a> — not affiliated with or authorized by CS Media, LLC
            </p>
          </div>
          <GoogleAnalytics />
          <Navbar />
          <main className="flex-1 pt-[calc(4rem+28px)]">{children}</main>
          <Footer />
          <CookieNotice />
          <EditToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
