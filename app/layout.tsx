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
    default: "CS Media | Real Estate Drone Photography & Video Services",
    template: "%s | CS Media",
  },
  description:
    "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. Packages from $150. Book today.",
  openGraph: {
    title: "CS Media | Real Estate Drone Photography & Video Services",
    description:
      "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. Packages from $150.",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "CS Media",
    images: [
      {
        url: "/images/aerialhome1.jpg",
        width: 1200,
        height: 630,
        alt: "CS Media - Real Estate Drone Photography & Video Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Media | Real Estate Drone Photography & Video Services",
    description:
      "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. Packages from $150.",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark-900 focus:outline-none"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${BASE_URL}/#business`,
                  name: "CS MEDIA, LLC",
                  description:
                    "Professional real estate drone photography, videography, virtual staging, and video editing services. FAA Part 107 certified.",
                  url: BASE_URL,
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=100090509656389",
                  ],
                  telephone: "+1-270-307-0173",
                  image: `${BASE_URL}/images/aerialhome1.jpg`,
                  priceRange: "$150-$300",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Leitchfield",
                    addressRegion: "KY",
                    postalCode: "42754",
                    addressCountry: "US",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 37.4801,
                    longitude: -86.2938,
                  },
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Leitchfield",
                      containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: "Grayson County, Kentucky",
                      },
                    },
                    { "@type": "City", name: "Caneyville" },
                    { "@type": "City", name: "Clarkson" },
                    { "@type": "City", name: "Elizabethtown" },
                    { "@type": "City", name: "Bowling Green" },
                    { "@type": "City", name: "Owensboro" },
                    { "@type": "City", name: "Bardstown" },
                    {
                      "@type": "State",
                      name: "Kentucky",
                    },
                    {
                      "@type": "Country",
                      name: "US",
                    },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Real Estate Media Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Real Estate Photography",
                          description:
                            "Interior and exterior real estate photography with professional lighting, composition, and HDR processing.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Drone Photography & Video",
                          description:
                            "FAA Part 107 certified aerial photography and video for real estate listings.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Real Estate Videography",
                          description:
                            "Cinematic property walkthroughs and promotional videos for listings and agents.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Virtual Staging",
                          description:
                            "Digitally furnish empty rooms with realistic furniture and decor for real estate listings.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Video Editing",
                          description:
                            "Professional video editing with music, transitions, color grading, and branded graphics.",
                        },
                      },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "2",
                    bestRating: "5",
                  },
                  review: [
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Snow Dogs Food Truck" },
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "We couldn't be happier with a promo video she shot for us! She made it so much fun, can't wait to do another!!!!",
                    },
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Jared Clouse" },
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "OH MY GOSH!!!! I can't even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "CS Media",
                  publisher: { "@id": `${BASE_URL}/#business` },
                },
              ],
            }),
          }}
        />
        <EditModeProvider>
          <GoogleAnalytics />
          <Navbar />
          <main id="main-content" className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieNotice />
          {/* Floating text button */}
          <a
            href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
            aria-label="Text CS Media"
            suppressHydrationWarning
            className="fixed bottom-6 right-6 z-40 flex md:hidden items-center justify-center rounded-full bg-dark-800 border border-gold/30 h-14 w-14 text-gold shadow-lg shadow-black/40 transition-transform hover:scale-110 hover:bg-dark-700 active:scale-95"
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
