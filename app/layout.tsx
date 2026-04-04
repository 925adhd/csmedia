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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CS Media | Real Estate Drone Photography & Video Services",
    template: "%s | CS Media",
  },
  description:
    "Real estate drone photography, videography, virtual staging & video editing in Leitchfield & Grayson County, KY. FAA Part 107 certified. From $150.",
  alternates: {
    canonical: '/',
  },
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
        url: "/images/real-estate-aerial-drone-leitchfield-ky.webp",
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
    images: ["/images/real-estate-aerial-drone-leitchfield-ky.webp"],
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
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="uNPZgneIAGTBtN7TEjB6qA" async />
      </head>
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
                  "@id": "#business",
                  name: "CS MEDIA, LLC",
                  url: BASE_URL,
                  description:
                    "Professional real estate drone photography, videography, virtual staging, and video editing services. FAA Part 107 certified.",
                  image: [`${BASE_URL}/images/real-estate-aerial-drone-leitchfield-ky.webp`],
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=100090509656389",
                  ],
                  email: "cscreatesmediallc@gmail.com",
                  telephone: "+1-270-307-0173",
                  priceRange: "$150-$300",
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    opens: "08:00",
                    closes: "18:00",
                  },
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
                },
                {
                  "@type": "Organization",
                  "@id": "#organization",
                  name: "CS MEDIA, LLC",
                  url: BASE_URL,
                  logo: `${BASE_URL}/images/cs-media-logo.webp`,
                  email: "cscreatesmediallc@gmail.com",
                  telephone: "+1-270-307-0173",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Leitchfield",
                    addressRegion: "KY",
                    postalCode: "42754",
                    addressCountry: "US",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "#website",
                  name: "CS Media",
                  url: BASE_URL,
                  publisher: { "@id": "#organization" },
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
