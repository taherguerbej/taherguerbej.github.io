"use client";

import { useEffect, type FC } from "react";
import { motion } from "motion/react";
import {
  MediaCaption,
  ProjectMedia,
} from "@/components/projects/project-media";
import { type ProjectDetailsProps } from "@/types/portfolio-types";
import { useContent } from "@/components/i18n/locale-provider";
import { STATUS_LABELS } from "@/content/en";

const Bullets: FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm text-neutral-300">
        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-aqua to-royal" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  category,
  period,
  status,
  team,
  description,
  subDescription,
  tags,
  media,
  gallery,
  subprojects,
  links,
  credits,
  closeModal,
}) => {
  const { locale, ui } = useContent();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [closeModal]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex w-full justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md md:items-start md:py-12"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative h-fit w-full max-w-3xl glass-strong !bg-midnight/95"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={closeModal}
          aria-label={ui.projects.close}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/close.svg" className="h-5 w-5" alt="" />
        </button>

        {media ? (
          <div className="overflow-hidden rounded-t-3xl bg-midnight">
            <div className="aspect-video">
              <ProjectMedia media={media} mode="full" />
            </div>
          </div>
        ) : (
          <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br from-storm to-indigo">
            <div className="blueprint-grid absolute inset-0" />
            <span className="relative text-xs uppercase tracking-[0.3em] text-neutral-400">
              {ui.projects.mediaSoon}
            </span>
          </div>
        )}

        <div className="p-6 md:p-8">
          {media?.caption && <MediaCaption text={media.caption} />}

          <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            {category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <span>{period}</span>
            {status && (
              <span className="rounded-full border border-aqua/30 bg-aqua/10 px-2 py-0.5 text-aqua">
                {STATUS_LABELS[locale][status]}
              </span>
            )}
            {team && <span>· {team}</span>}
          </div>

          <p className="mt-5 text-neutral-300">{description}</p>

          <h4 className="mb-3 mt-7 text-eyebrow">{ui.projects.whatIDid}</h4>
          <Bullets items={subDescription} />

          {subprojects?.map((sub) => (
            <section
              key={sub.title}
              className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-aqua/80">
                {ui.projects.subProject}
              </p>
              <h4 className="mt-1 text-lg font-semibold text-white">
                {sub.title}
              </h4>
              <p className="mb-4 mt-2 text-sm text-neutral-400">
                {sub.description}
              </p>
              <Bullets items={sub.bullets} />
              {sub.media && (
                <figure className="mt-5">
                  <div className="overflow-hidden rounded-xl bg-midnight">
                    <ProjectMedia media={sub.media} mode="full" />
                  </div>
                  <MediaCaption text={sub.media.caption} />
                </figure>
              )}
              {sub.credit && (
                <p className="mt-4 border-t border-white/10 pt-3 text-xs text-neutral-500">
                  {sub.credit}
                </p>
              )}
            </section>
          ))}

          {gallery && gallery.length > 0 && (
            <>
              <h4 className="mb-3 mt-8 text-eyebrow">{ui.projects.moreMedia}</h4>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {gallery.map((item) => (
                  <figure key={item.src}>
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-midnight">
                      <ProjectMedia media={item} mode="full" />
                    </div>
                    <MediaCaption text={item.caption} />
                  </figure>
                ))}
              </div>
            </>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2 !text-sm"
              >
                <span>{link.label}</span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>

          {credits && credits.length > 0 && (
            <p className="mt-4 text-xs text-neutral-500">
              {ui.projects.credits} {credits.join(" ")}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
