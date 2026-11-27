import { type HTMLAttributes, type ReactNode } from "react";

/** One image or video shown in a project preview or case study. */
export interface ProjectMedia {
  type: "image" | "video";
  /** Path under public/, e.g. "/media/mirmi/active-search.mp4". */
  src: string;
  /** Still frame shown before a video plays. Use one for every video. */
  poster?: string;
  /** Describes the content for screen readers. */
  alt: string;
  /** Visible caption. Say "Simulation" or "Real robot" explicitly. */
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

/** A self-contained piece of work inside a larger project. */
export interface SubProject {
  title: string;
  description: string;
  bullets: string[];
  media?: ProjectMedia;
  /** Whose work this builds on. Shown under the sub-project. */
  credit?: string;
}

export interface Project {
  id: number;
  title: string;
  /** Small label above the title: where, and in what context. */
  category: string;
  period: string;
  /** Leave undefined rather than guess. */
  status?: "Completed" | "Ongoing";
  /** e.g. "Group project with …". */
  team?: string;
  /** One or two sentences for the showcase panel. */
  description: string;
  /** Detailed bullets for the case-study modal. */
  subDescription: string[];
  tags: string[];
  /** Tailwind gradient used behind the preview. */
  accent: string;
  /** Main preview. Without it the panel shows a styled placeholder. */
  media?: ProjectMedia;
  /** Extra media in the case-study modal. */
  gallery?: ProjectMedia[];
  subprojects?: SubProject[];
  /** Repositories, reports, videos. Only real URLs. */
  links?: ProjectLink[];
  /** Third-party work this project builds on. */
  credits?: string[];
}

/** A smaller project shown in the secondary grid. */
export interface OtherProject {
  title: string;
  context: string;
  period?: string;
  status?: "Completed" | "Ongoing";
  description: string;
  tags: string[];
  links?: ProjectLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface FocusArea {
  id: number;
  title: string;
  description: string;
  /** SVG path data for a 24x24, stroked icon. */
  icon: string;
  bullets: string[];
  /** Projects where this was applied. */
  appliedIn: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface JourneyStop {
  city: string;
  country: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProjectDetailsProps extends Project {
  closeModal: () => void;
}

export interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export interface ParticlesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export interface TimelineProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  data: Experience[];
}

export interface RobotArmProps {
  scale?: number;
  position?: [number, number, number];
}

export interface ThemedGlobeProps {
  className?: string;
}
