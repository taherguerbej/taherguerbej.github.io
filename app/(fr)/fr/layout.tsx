import type { Metadata, Viewport } from "next";
import { RootDocument } from "@/components/seo/root-document";
import { HERO_NAME } from "@/constants/hero-constants";
import {
  GOOGLE_SITE_VERIFICATION,
  OG_LOCALE_FR as OG_LOCALE,
  SITE_DESCRIPTION_FR as SITE_DESCRIPTION,
  SITE_KEYWORDS_FR as SITE_KEYWORDS,
  SITE_NAME_FR as SITE_NAME,
  SITE_TAGLINE_FR as SITE_TAGLINE,
  SITE_TITLE_FR as SITE_TITLE,
  SITE_URL,
} from "@/constants/seo-constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${HERO_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: HERO_NAME, url: SITE_URL }],
  creator: HERO_NAME,
  publisher: HERO_NAME,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    url: `${SITE_URL}/fr/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_TAGLINE,
    locale: OG_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_TAGLINE,
  },
  category: "technology",
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030412" },
    { media: "(prefers-color-scheme: light)", color: "#3b5bff" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}
