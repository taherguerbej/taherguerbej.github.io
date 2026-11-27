"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { CONTACT_EMAIL } from "@/constants/social-constants";
import { useContent } from "@/components/i18n/locale-provider";

/** Replaces the template's contact form: CV download plus key facts. */
export const ContactCvCard: FC = () => {
  const { cv, ui } = useContent();
  return (
  <motion.div
    {...revealProps(0.1)}
    className="glass-strong gradient-border p-8 md:p-10 lg:col-span-6"
  >
    <p className="text-eyebrow !text-aqua/80">{ui.contact.cvEyebrow}</p>
    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
      {ui.contact.cvTitle}
    </h3>
    <p className="mt-3 text-neutral-400">
      {ui.contact.cvText}
    </p>

    <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {ui.contact.facts.map((fact) => (
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
      <a href={cv.url} download={cv.fileName} className="btn-primary">
        <span>{ui.downloadCv}</span>
        <span aria-hidden>↓</span>
      </a>
      <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost">
        <span>{ui.contact.sendEmail}</span>
      </a>
    </div>
  </motion.div>
  );
};
