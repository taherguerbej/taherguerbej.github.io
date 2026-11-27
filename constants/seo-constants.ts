import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain before deploying.
 * The fallback only makes local builds work.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `${HERO_NAME} | Robotics Portfolio`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_DESCRIPTION =
  "Robotics and mechatronics engineering student (ENISO, SIGMA Clermont): robot learning, perception and safe control. Open to a PFE internship from March 2027.";

export const SITE_TAGLINE =
  "Robot learning, perception and safe control for intelligent robotic systems.";

export const OG_IMAGE_ALT = `${HERO_NAME}, ${HERO_ROLE}`;
export const OG_LOCALE = "en_US";

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  HERO_NAME,
  "Robotics engineering student",
  "Mechatronics",
  "Robot learning",
  "Reinforcement learning",
  "Active perception",
  "Bimanual manipulation",
  "Control barrier functions",
  "ROS 2",
  "Isaac Lab",
  "PFE internship",
  "SIGMA Clermont",
  "ENISO",
  HERO_LOCATION,
];

export const HOME_TITLE = `${HERO_NAME} | Robotics & Mechatronics Engineering Student`;

export const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#home",
    description: `${HERO_NAME}, ${HERO_ROLE}.`,
  },
  {
    name: "About",
    hash: "#about",
    description: `Background and education of ${HERO_NAME}, based in ${HERO_LOCATION}.`,
  },
  {
    name: "Focus areas",
    hash: "#focus",
    description: "Robot learning, perception, safe control, planning and integration.",
  },
  {
    name: "Projects",
    hash: "#work",
    description:
      "Research and academic robotics projects: active perception with two arms, UR3e inspection, reinforcement learning and mobile robot safety.",
  },
  {
    name: "Experience",
    hash: "#experience",
    description: "Research and industrial internships.",
  },
  {
    name: "Skills",
    hash: "#skills",
    description: "Robotics, robot learning, perception and programming tools.",
  },
  {
    name: "Contact",
    hash: "#contact",
    description: `Contact ${HERO_NAME} about a PFE internship.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;

/* French version, served at /fr. */
export const HERO_ROLE_FR = "Élève ingénieur en robotique et mécatronique";

export const SITE_NAME_FR = `${HERO_NAME} | Portfolio robotique`;

export const SITE_TITLE_FR = `${HERO_NAME} | ${HERO_ROLE_FR}`;

export const SITE_DESCRIPTION_FR =
  "Élève ingénieur en robotique et mécatronique (ENISO, SIGMA Clermont) : apprentissage robotique, perception et commande sécurisée. Disponible pour un stage de fin d'études dès mars 2027.";

export const SITE_TAGLINE_FR =
  "Apprentissage robotique, perception et commande sécurisée pour des systèmes robotiques intelligents.";

export const OG_LOCALE_FR = "fr_FR";

export const SITE_KEYWORDS_FR = [
  HERO_NAME,
  "Élève ingénieur robotique",
  "Mécatronique",
  "Apprentissage robotique",
  "Apprentissage par renforcement",
  "Perception active",
  "Manipulation à deux bras",
  "Fonctions barrières de contrôle",
  "ROS 2",
  "Isaac Lab",
  "Stage de fin d'études",
  "SIGMA Clermont",
  "ENISO",
  HERO_LOCATION,
];

/** hreflang links shared by both pages. */
export const LANGUAGE_ALTERNATES = {
  en: "/",
  fr: "/fr/",
  "x-default": "/",
} as const;
