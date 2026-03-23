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
          <GoogleAnalytics />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieNotice />
          <EditToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
