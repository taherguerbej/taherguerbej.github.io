import { type JourneyStop, type Stat } from "@/types/portfolio-types";

export const HERO_NAME = "Taher Guerbej";

export const HERO_ROLE = "Robotics & Mechatronics Engineering Student";

export const HERO_LOCATION = "Clermont-Ferrand, France";

export const HERO_TAGLINE =
  "Exploring intelligent robotic systems through perception, planning and control.";

/** Badge above the name. Update it once the internship is found. */
export const HERO_AVAILABILITY = "Open to a PFE internship · from March 2027";

export const FLIP_WORDS = ["Perception", "Planning", "Control"];

/** Hand-written, taken from the CV. Update when facts change. */
export const STATS: Stat[] = [
  { value: "2", label: "Engineering schools (double degree)" },
  { value: "4 mo", label: "Research internship at TU Munich" },
  { value: "12-DOF", label: "Dual-arm safety filter run on real robots" },
  { value: "5/51", label: "Class rank at ENISO" },
];

export const JOURNEY: JourneyStop[] = [
  { city: "Sousse", country: "Tunisia", label: "ENISO · Mechatronics" },
  {
    city: "Clermont-Ferrand",
    country: "France",
    label: "SIGMA Clermont · Robotics",
  },
  { city: "Munich", country: "Germany", label: "MIRMI, TUM · Research" },
];
