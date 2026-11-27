"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import {
  AVAILABILITY,
  CONTACT_EMAIL,
  CV_FILE_NAME,
  CV_URL,
} from "@/constants/social-constants";

const FACTS = [
  { label: "Start", value: AVAILABILITY.start },
  { label: "Duration", value: AVAILABILITY.duration },
  { label: "Interests", value: AVAILABILITY.interests },
  { label: "Languages", value: "English, French (fluent) · German A2" },
];

/** Replaces the template's contact form: CV download plus key facts. */
export const ContactCvCard: FC = () => (
  <motion.div
    {...revealProps(0.1)}
    className="glass-strong gradient-border p-8 md:p-10 lg:col-span-6"
  >
    <p className="text-eyebrow !text-aqua/80">PFE internship 2027</p>
    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
      Everything on one page.
    </h3>
    <p className="mt-3 text-neutral-400">
      My CV in English (PDF), with the details of each project and internship.
    </p>

    <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {FACTS.map((fact) => (
        <div
          key={fact.label}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
        >
          <dt className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm text-white">{fact.value}</dd>
        </div>
      ))}
    </dl>

    <div className="mt-8 flex flex-wrap gap-3">
      <a href={CV_URL} download={CV_FILE_NAME} className="btn-primary">
        <span>Download CV</span>
        <span aria-hidden>↓</span>
      </a>
      <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost">
        <span>Send an email</span>
      </a>
    </div>
  </motion.div>
);
