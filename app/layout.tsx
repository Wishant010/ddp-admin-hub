import type { Metadata, Viewport } from "next";
import { Providers } from "@/app/providers";
import { CONTACT, SOCIALS, SITE_URL } from "@/lib/constants";
import "@/app/globals.css";

const SITE_NAME = "Administratiekantoor DRFA";
const SITE_TITLE = "Administratiekantoor DRFA | Boekhouding voor zzp'ers in Haarlem";
const SITE_DESCRIPTION =
  "DRFA regelt je boekhouding, BTW-aangifte en jaarcijfers voor een vaste maandprijs. Persoonlijk contact, binnen 24 uur reactie en online inzicht via Moneybird.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "administratiekantoor Haarlem",
    "boekhouder zzp",
    "boekhouding Haarlem",
    "BTW-aangifte",
    "jaarrekening zzp",
    "Moneybird boekhouder",
    "administratie eenmanszaak",
    "boekhouder vaste prijs",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DRFA werkplek met jaarrekening en administratie-overzicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  category: "finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3772",
};

// Schema.org: AccountingService (LocalBusiness-subtype) voor lokale vindbaarheid
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${SITE_URL}/#organisatie`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
    postalCode: "2036 NL",
    addressLocality: "Haarlem",
    addressCountry: "NL",
  },
  areaServed: [
    { "@type": "City", name: "Haarlem" },
    { "@type": "Country", name: "Nederland" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "€€",
  sameAs: [SOCIALS.instagram],
  knowsLanguage: ["nl", "en"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
