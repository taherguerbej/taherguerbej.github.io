"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { formatCounter } from "@/helpers/format-helpers";
import { type ProjectSummaryProps } from "@/types/project-types";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.4 },
  transition: { duration: 0.6, delay },
});

export const ProjectSummary: FC<ProjectSummaryProps> = ({
  project,
  index,
  total,
  onOpen,
}) => (
  <div className="order-2 lg:order-1 lg:col-span-5">
    <motion.p
      {...reveal()}
      transition={{ duration: 0.5 }}
      className="text-[10px] uppercase tracking-[0.4em] text-neutral-400"
    >
      {formatCounter(index, total)} · {project.category}
    </motion.p>

    <motion.h3
      {...reveal()}
      className="mt-3 text-3xl font-bold leading-[1.05] text-white md:text-5xl"
    >
      {project.title}
    </motion.h3>

    <motion.div
      {...reveal(0.05)}
      className="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400"
    >
      <span>{project.period}</span>
      {project.status && (
        <span className="rounded-full border border-aqua/30 bg-aqua/10 px-2 py-0.5 text-aqua">
          {project.status}
        </span>
      )}
      {project.team && <span>· {project.team}</span>}
    </motion.div>

    <motion.p
      {...reveal(0.1)}
      className="mt-5 max-w-xl leading-relaxed text-neutral-300"
    >
      {project.description}
    </motion.p>

    <motion.div {...reveal(0.2)} className="mt-6 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
        >
          {tag}
        </span>
      ))}
    </motion.div>

    <motion.div {...reveal(0.3)} className="mt-7 flex flex-wrap gap-3">
      <button type="button" onClick={onOpen} className="btn-primary">
        <span>Read case study</span>
        <span aria-hidden>→</span>
      </button>
      {project.links?.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <span>{link.label}</span>
          <span aria-hidden>↗</span>
        </a>
      ))}
    </motion.div>
  </div>
);
