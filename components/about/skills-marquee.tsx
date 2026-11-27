"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/portfolio/marquee";
import { MARQUEE, SKILL_CHIP_CLASS } from "@/constants/about-constants";
import { useContent } from "@/components/i18n/locale-provider";

const Chip: FC<{ skill: string }> = ({ skill }) => (
  <span className={SKILL_CHIP_CLASS}>{skill}</span>
);

export const SkillsMarquee: FC = () => {
  const { skillChips, ui } = useContent();
  return (
  <div className="mt-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-6 flex items-center justify-between"
    >
      <p className="text-eyebrow">{ui.about.toolkit}</p>
      <div className="ml-6 h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
    </motion.div>

    <div className="relative overflow-hidden">
      <Marquee className={MARQUEE.forward} pauseOnHover>
        {skillChips.map((skill) => (
          <Chip key={skill} skill={skill} />
        ))}
      </Marquee>

      <Marquee reverse className={MARQUEE.reverse} pauseOnHover>
        {[...skillChips].reverse().map((skill) => (
          <Chip key={`reverse-${skill}`} skill={skill} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-primary to-transparent" />
    </div>
  </div>
  );
};
