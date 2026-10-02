import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/content";
import "./globals.css";

const sofiaPro = localFont({
  src: [
    { path: "./fonts/SofiaPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SofiaPro-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SofiaPro-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SofiaPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sofia",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "PhysioErgo Integrative Consultancy Ltd | Workplace Ergonomics & Wellness",
    template: "%s | PhysioErgo Integrative Consultancy Ltd",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "workplace ergonomics Kenya",
    "workplace wellness Kenya",
    "occupational ergonomics Nairobi",
    "ergonomic assessment Kenya",
    "workplace health Kenya",
    "physiotherapy workplace wellness",
    "musculoskeletal workplace health",
    "corporate wellness Kenya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title:
      "PhysioErgo Integrative Consultancy Ltd | Workplace Ergonomics & Wellness",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@PhysioErgoCon",
    creator: "@PhysioErgoCon",
    title:
      "PhysioErgo Integrative Consultancy Ltd | Workplace Ergonomics & Wellness",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Organization data for search engines. Every field is drawn from `site`, so the
 * markup cannot drift from what the pages themselves display.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phones.map((phone) => phone.tel.replace("tel:", "")),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: "KE",
  sameAs: site.social.map((channel) => channel.href),
  contactPoint: site.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel.replace("tel:", ""),
    email: site.email,
    contactType: "customer service",
    areaServed: "KE",
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sofiaPro.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-canvas">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {/* Scroll reveals are progressive enhancement — show everything without JS. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: "<style>.reveal{opacity:1;transform:none}</style>",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
