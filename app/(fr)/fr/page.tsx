import { type Metadata } from "next";
import { HomePage } from "@/components/portfolio/home-page";
import { HERO_NAME } from "@/constants/hero-constants";
import {
  LANGUAGE_ALTERNATES,
  OG_LOCALE_FR as OG_LOCALE,
  SITE_DESCRIPTION_FR as HOME_DESCRIPTION,
  SITE_NAME_FR as SITE_NAME,
  SITE_TITLE_FR as HOME_TITLE,
  SITE_URL,
} from "@/constants/seo-constants";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/fr/",
    languages: LANGUAGE_ALTERNATES,
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
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/fr/`,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: OG_LOCALE,
    firstName: HERO_NAME.split(" ")[0],
    lastName: HERO_NAME.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function Home() {
  return <HomePage locale="fr" />;
}
