"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { VIEWPORT_ONCE } from "@/animations/scroll-animations";
import { useContent } from "@/components/i18n/locale-provider";
import { STATUS_LABELS } from "@/content/en";

/** Secondary collection: smaller academic projects, shown as cards. */
export const MoreProjects: FC = () => {
  const { locale, otherProjects, ui } = useContent();
  return (
  <div className="c-space mt-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.8 }}
      className="mb-6 flex items-center justify-between"
    >
      <p className="text-eyebrow">{ui.projects.more}</p>
      <div className="ml-6 h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
    </motion.div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {otherProjects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="glass gradient-border flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            <span>{project.context}</span>
            {project.status && (
              <span className="rounded-full border border-aqua/30 bg-aqua/10 px-2 py-0.5 tracking-normal normal-case text-aqua">
                {STATUS_LABELS[locale][project.status]}
              </span>
            )}
          </div>
          <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
          {project.period && (
            <p className="text-xs text-neutral-500">{project.period}</p>
          )}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-300">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-white"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </div>
  </div>
  );
};
