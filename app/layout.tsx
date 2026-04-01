import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CS Media | Real Estate Drone Photography & Video Services",
    template: "%s | CS Media",
  },
  description:
    "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. From $150.",
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
      "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. From $150.",
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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
