import {
  type Experience,
  type FocusArea,
  type JourneyStop,
  type OtherProject,
  type Project,
  type SkillGroup,
  type Stat,
} from "@/types/portfolio-types";

export type Locale = "en" | "fr";

/** A section title split in two: plain text, then the gradient part. */
export interface HeadingText {
  lead: string;
  accent: string;
}

/** Interface labels that are not part of the content data. */
export interface UiStrings {
  nav: { label: string; href: string }[];
  toggleMenu: string;
  switchLanguage: string;
  downloadCv: string;
  viewProjects: string;
  seeProjects: string;
  scroll: string;
  scrollDown: string;
  loading: string;
  loaderTagline: string;
  about: {
    eyebrow: string;
    title: HeadingText;
    whoIAm: string;
    portraitAlt: string;
    /** Bio paragraphs; text between ** markers is highlighted. */
    bio: string[];
    toolkit: string;
  };
  focus: {
    eyebrow: string;
    title: HeadingText;
    hint: [string, string];
    card: string;
    appliedIn: string;
    covers: string;
  };
  projects: {
    eyebrow: string;
    title: HeadingText;
    hint: [string, string];
    readCaseStudy: string;
    caseStudy: string;
    more: string;
    badgeSimulation: string;
    badgeRealRobot: string;
    badgeVideo: string;
    badgeResult: string;
    mediaSoon: string;
    whatIDid: string;
    subProject: string;
    moreMedia: string;
    credits: string;
    close: string;
  };
  experience: { eyebrow: string; title: HeadingText };
  education: { eyebrow: string; title: HeadingText };
  skills: { eyebrow: string; title: HeadingText; languages: string };
  contact: {
    eyebrow: string;
    title: HeadingText;
    intro: string;
    email: string;
    basedIn: string;
    cvEyebrow: string;
    cvTitle: string;
    cvText: string;
    facts: { label: string; value: string }[];
    sendEmail: string;
  };
  footer: {
    reachMe: string;
    builtOn: string;
    template: string;
  };
}

/** Everything on the page that changes with the language. */
export interface SiteContent {
  locale: Locale;
  hero: {
    role: string;
    location: string;
    tagline: string;
    availability: string;
    flipWords: string[];
  };
  stats: Stat[];
  journey: JourneyStop[];
  projects: Project[];
  otherProjects: OtherProject[];
  focusAreas: FocusArea[];
  experiences: Experience[];
  education: Experience[];
  skillGroups: SkillGroup[];
  /** Scrolling chips in the About section. */
  skillChips: string[];
  languages: { name: string; level: string }[];
  cv: { url: string; fileName: string };
  ui: UiStrings;
}
