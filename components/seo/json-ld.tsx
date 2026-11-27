import { type FC } from "react";
import { type Locale } from "@/types/i18n-types";
import {
  CONTACT_POINT_EMAIL,
  HERO_ROLE_FR,
  SITE_DESCRIPTION_FR,
  SITE_NAME_FR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SECTIONS,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/constants/seo-constants";
import {
  HERO_LOCATION,
  HERO_NAME,
  HERO_ROLE,
} from "@/constants/hero-constants";
import { SKILL_CHIPS } from "@/constants/skills-constants";

const [city, country] = HERO_LOCATION.split(",").map((part) => part.trim());

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: HERO_NAME,
  jobTitle: HERO_ROLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${CONTACT_POINT_EMAIL}`,
  image: `${SITE_URL}/media/about/headshot.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: country,
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "SIGMA Clermont, Clermont Auvergne INP",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "National Engineering School of Sousse (ENISO)",
    },
  ],
  knowsAbout: SKILL_CHIPS,
  sameAs: SOCIAL_PROFILES,
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: ["en", "fr"],
  publisher: { "@id": `${SITE_URL}/#person` },
};

const sectionId = (hash: string) => `${SITE_URL}/${hash}`;

const sections = SITE_SECTIONS.map((section) => ({
  "@type": "WebPageElement",
  "@id": sectionId(section.hash),
  name: section.name,
  description: section.description,
  url: sectionId(section.hash),
  isPartOf: { "@id": `${SITE_URL}/#webpage` },
}));

const navigation = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#sections`,
  name: `${SITE_NAME} sections`,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: SITE_SECTIONS.length,
  itemListElement: SITE_SECTIONS.map((section, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: section.name,
    url: sectionId(section.hash),
  })),
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
  primaryImageOfPage: `${SITE_URL}/media/about/portrait-hero.jpg`,
  hasPart: sections.map((section) => ({ "@id": section["@id"] })),
  significantLink: SITE_SECTIONS.map((section) => sectionId(section.hash)),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [person, website, profilePage, navigation, ...sections],
};

/** French page: same graph, French texts and its own page node. */
const graphFr = {
  "@context": "https://schema.org",
  "@graph": [
    { ...person, jobTitle: HERO_ROLE_FR, description: SITE_DESCRIPTION_FR },
    website,
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/fr/#webpage`,
      url: `${SITE_URL}/fr/`,
      name: SITE_NAME_FR,
      description: SITE_DESCRIPTION_FR,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "fr",
      primaryImageOfPage: `${SITE_URL}/media/about/portrait-hero.jpg`,
    },
  ],
};

export const JsonLd: FC<{ locale: Locale }> = ({ locale }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(locale === "fr" ? graphFr : graph),
    }}
  />
);
