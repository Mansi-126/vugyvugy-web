import { Inter } from "next/font/google";
import "./globals.css";
import { AptabaseProvider } from "@aptabase/react";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vugyvugy.site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VugyVugy - Make Every Keypress A Vibe | Meme Soundboard for Developers",
    template: "%s | VugyVugy",
  },
  description: "Turn your keyboard into a meme soundboard. Assign funny sounds to keypresses for instant laughs while coding. Free desktop app for Windows, Linux & macOS. Built for developers who need serotonin between PRs.",
  keywords: [
    "VugyVugy",
    "keyboard soundboard",
    "meme sounds",
    "developer tools",
    "productivity app",
    "mechanical keyboard sounds",
    "custom keyboard sounds",
    "funny keyboard app",
    "desktop soundboard",
    "Windows soundboard",
    "Linux soundboard",
    "macOS soundboard",
    "Electron app",
    "developer serotonin",
    "coding entertainment",
    "keyboard customization",
    "sound effects keyboard",
    "mechanical keyboard software",
  ],
  authors: [{ name: "VugyVugy Team" }],
  creator: "VugyVugy",
  publisher: "VugyVugy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "VugyVugy",
    title: "VugyVugy - Make Every Keypress A Vibe",
    description: "Turn your keyboard into a meme soundboard. Free desktop app for Windows, Linux & macOS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VugyVugy - Keyboard Meme Soundboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VugyVugy - Make Every Keypress A Vibe",
    description: "Turn your keyboard into a meme soundboard. Free desktop app for developers.",
    images: ["/og-image.png"],
    creator: "@vugyvugy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const appKey = process.env.NEXT_PUBLIC_APTABASE_KEY || "";

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VugyVugy",
              url: siteUrl,
              logo: `${siteUrl}/icon.svg`,
              description: "Make every keypress a vibe with VugyVugy keyboard soundboard",
              sameAs: [
                "https://twitter.com/vugyvugy",
                "https://github.com/vugyvugy",
              ],
            }),
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VugyVugy",
              applicationCategory: "DesktopApplication",
              operatingSystem: ["Windows", "Linux", "macOS"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description: "Turn your keyboard into a meme soundboard with custom sound effects for every keypress.",
              softwareVersion: "1.0",
              author: {
                "@type": "Organization",
                name: "VugyVugy",
              },
              downloadUrl: `${siteUrl}/#download`,
              screenshot: `${siteUrl}/og-image.png`,
              featureList: [
                "Custom keyboard sounds",
                "Meme soundboard library",
                "Playlist builder",
                "Cross-platform support",
                "Low latency audio",
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite with SearchAction */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VugyVugy",
              url: siteUrl,
              description: "Make every keypress a vibe",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-vugy-bg text-vugy-text-primary antialiased font-sans select-none overflow-x-hidden">
        <AptabaseProvider appKey={appKey}>
          {children}
        </AptabaseProvider>
      </body>
    </html>
  );
}
