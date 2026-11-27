import { EDUCATION, EXPERIENCES } from "@/constants/experience-constants";
import { FOCUS_AREAS } from "@/constants/focus-constants";
import {
  FLIP_WORDS,
  HERO_AVAILABILITY,
  HERO_LOCATION,
  HERO_ROLE,
  HERO_TAGLINE,
  JOURNEY,
  STATS,
} from "@/constants/hero-constants";
import { MY_PROJECTS, OTHER_PROJECTS } from "@/constants/projects-constants";
import {
  LANGUAGES,
  SKILL_CHIPS,
  SKILL_GROUPS,
} from "@/constants/skills-constants";
import {
  AVAILABILITY,
  CV_FILE_NAME,
  CV_URL,
} from "@/constants/social-constants";
import { type SiteContent } from "@/types/i18n-types";

/** English site: the constants files are the English source. */
export const EN: SiteContent = {
  locale: "en",
  hero: {
    role: HERO_ROLE,
    location: HERO_LOCATION,
    tagline: HERO_TAGLINE,
    availability: HERO_AVAILABILITY,
    flipWords: FLIP_WORDS,
  },
  stats: STATS,
  journey: JOURNEY,
  projects: MY_PROJECTS,
  otherProjects: OTHER_PROJECTS,
  focusAreas: FOCUS_AREAS,
  experiences: EXPERIENCES,
  education: EDUCATION,
  skillGroups: SKILL_GROUPS,
  skillChips: SKILL_CHIPS,
  languages: [...LANGUAGES],
  cv: { url: CV_URL, fileName: CV_FILE_NAME },
  ui: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Focus", href: "#focus" },
      { label: "Projects", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    toggleMenu: "Toggle menu",
    switchLanguage: "Lire en français",
    downloadCv: "Download CV",
    viewProjects: "View Projects",
    seeProjects: "See projects",
    scroll: "Scroll",
    scrollDown: "Scroll down",
    loading: "Loading",
    loaderTagline: "Robotics & Mechatronics · Perception · Planning · Control",
    about: {
      eyebrow: "About",
      title: { lead: "Building robots that", accent: "see, decide and move safely." },
      whoIAm: "Who I Am",
      portraitAlt: "Portrait of Taher Guerbej",
      bio: [
        "I'm a final-year **Robotics and Mechatronics** engineering student in a double-degree programme between ENISO (Tunisia) and SIGMA Clermont (France).",
        "I spent four months at **MIRMI, TU Munich**, working on active perception with two robot arms: a safety filter running on the real robots, reinforcement learning in simulation and a learned vision module.",
        "I'm looking for a **6-month final-year internship (PFE)** from 15 March 2027 in robot learning, manipulation or perception.",
      ],
      toolkit: "Toolkit",
    },
    focus: {
      eyebrow: "Engineering focus areas",
      title: { lead: "Where I put my effort,", accent: "from simulation to hardware." },
      hint: ["Scroll", "Stack"],
      card: "Focus",
      appliedIn: "Applied in",
      covers: "What it covers",
    },
    projects: {
      eyebrow: "Selected projects",
      title: {
        lead: "Research and engineering work,",
        accent: "in simulation and on real robots.",
      },
      hint: ["Scroll", "Pinned"],
      readCaseStudy: "Read case study",
      caseStudy: "Case study",
      more: "More academic projects",
      badgeSimulation: "Simulation",
      badgeRealRobot: "Real robot",
      badgeVideo: "Video",
      badgeResult: "Result",
      mediaSoon: "Media coming soon",
      whatIDid: "What I did",
      subProject: "Sub-project",
      moreMedia: "More media",
      credits: "Credits:",
      close: "Close",
    },
    experience: {
      eyebrow: "Experience",
      title: { lead: "From the shop floor", accent: "to a robotics research lab." },
    },
    education: {
      eyebrow: "Education",
      title: { lead: "A double degree", accent: "across two countries." },
    },
    skills: {
      eyebrow: "Skills & tools",
      title: { lead: "The toolkit behind", accent: "the projects." },
      languages: "Languages",
    },
    contact: {
      eyebrow: "Contact",
      title: { lead: "Looking for a PFE intern", accent: "in robotics?" },
      intro:
        "I'm available for a 6-month final-year internship from 15 March 2027. Email is the quickest way to reach me.",
      email: "Email",
      basedIn: "Based in",
      cvEyebrow: "PFE internship 2027",
      cvTitle: "Everything on one page.",
      cvText:
        "My CV in English (PDF), with the details of each project and internship.",
      facts: [
        { label: "Start", value: AVAILABILITY.start },
        { label: "Duration", value: AVAILABILITY.duration },
        { label: "Interests", value: AVAILABILITY.interests },
        { label: "Languages", value: "English, French (fluent) · German A2" },
      ],
      sendEmail: "Send an email",
    },
    footer: {
      reachMe: "Reach me at",
      builtOn: "Built on",
      template: "Hasnain Irfan's 3D portfolio template",
    },
  },
};

export const STATUS_LABELS = {
  en: { Completed: "Completed", Ongoing: "Ongoing" },
  fr: { Completed: "Terminé", Ongoing: "En cours" },
} as const;
