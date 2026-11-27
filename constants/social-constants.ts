import { type SocialLink } from "@/types/portfolio-types";

export const MY_SOCIALS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-taher-guerbej",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/taherguerbej",
    icon: "/assets/socials/github.svg",
  },
];

export const CONTACT_EMAIL = "mohamed_taher.guerbej@sigma-clermont.fr";

/** Public CVs: resume_2027_vetaion (EN) and cv_2027_sileane (FR), rebuilt without the phone number. */
export const CV_URL = "/cv/Taher_Guerbej_CV.pdf";

export const CV_FILE_NAME = "Taher_Guerbej_CV.pdf";

export const AVAILABILITY = {
  start: "15 March 2027",
  duration: "6 months",
  interests: "Robot learning, manipulation or perception",
} as const;
