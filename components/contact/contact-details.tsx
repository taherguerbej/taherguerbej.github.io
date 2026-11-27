"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { CONTACT_EMAIL, MY_SOCIALS } from "@/constants/portfolio-constants";
import { useContent } from "@/components/i18n/locale-provider";
import { Heading } from "@/components/i18n/heading";
import { ContactInfoCard } from "./contact-info-card";

const linkedIn = MY_SOCIALS.find((social) => social.name === "LinkedIn");
const gitHub = MY_SOCIALS.find((social) => social.name === "GitHub");

const shortUrl = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "");

export const ContactDetails: FC = () => {
  const { hero, ui } = useContent();
  return (
  <motion.div {...revealProps()} className="lg:col-span-6">
    <p className="text-eyebrow">{ui.contact.eyebrow}</p>
    <h2 className="text-heading mt-3">
      <Heading {...ui.contact.title} lineBreak />
    </h2>
    <p className="mt-4 leading-relaxed text-neutral-400">
      {ui.contact.intro}
    </p>

    <div className="mt-8 space-y-4">
      <ContactInfoCard
        icon="✉"
        label={ui.contact.email}
        value={CONTACT_EMAIL}
        href={`mailto:${CONTACT_EMAIL}`}
        gradient="from-aqua/30 to-royal/30"
      />
      {linkedIn && (
        <ContactInfoCard
          icon="in"
          label="LinkedIn"
          value={shortUrl(linkedIn.href)}
          href={linkedIn.href}
          external
          gradient="from-royal/30 to-lavender/30"
        />
      )}
      {gitHub && (
        <ContactInfoCard
          icon="⌥"
          label="GitHub"
          value={shortUrl(gitHub.href)}
          href={gitHub.href}
          external
          gradient="from-lavender/30 to-aqua/30"
        />
      )}
      <ContactInfoCard
        icon="⌖"
        label={ui.contact.basedIn}
        value={hero.location}
        gradient="from-aqua/30 to-mint/30"
      />
    </div>
  </motion.div>
  );
};
