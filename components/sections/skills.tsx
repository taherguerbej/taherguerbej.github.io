"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { VIEWPORT_ONCE } from "@/animations/scroll-animations";
import { LANGUAGES, SKILL_GROUPS } from "@/constants/skills-constants";

/** Replaces the template's testimonials with grouped, factual skills. */
export const Skills: FC = () => (
  <section
    id="skills"
    className="relative c-space section-spacing overflow-hidden"
  >
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-1/3 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-royal/10 blur-[140px]" />
    </div>

    <SectionHeader
      eyebrow="Skills & tools"
      title={
        <>
          The toolkit behind{" "}
          <span className="text-gradient">the projects.</span>
        </>
      }
    />

    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {SKILL_GROUPS.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, delay: index * 0.06 }}
          className="glass gradient-border p-6"
        >
          <p className="text-eyebrow !text-aqua/80">{group.title}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-neutral-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.6 }}
      className="glass gradient-border mt-4 p-6"
    >
      <p className="text-eyebrow !text-aqua/80">Languages</p>
      <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {LANGUAGES.map((language) => (
          <li key={language.name}>
            <p className="font-semibold text-white">{language.name}</p>
            <p className="text-sm text-neutral-400">{language.level}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);
