"use client";

import { useRef, type FC } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { useContent } from "@/components/i18n/locale-provider";
import { HERO_NAME } from "@/constants/hero-constants";

const Journey: FC = () => {
  const { journey } = useContent();
  return (
  <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
    {journey.map((stop, index) => (
      <li
        key={stop.city}
        className="relative rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-aqua/80">
          {String(index + 1).padStart(2, "0")} · {stop.country}
        </p>
        <p className="mt-1 font-semibold text-white">{stop.city}</p>
        <p className="text-xs text-neutral-400">{stop.label}</p>
        {index < journey.length - 1 && (
          <span
            aria-hidden
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-aqua/70 sm:block"
          >
            →
          </span>
        )}
      </li>
    ))}
  </ol>
  );
};

/** Renders **text** as highlighted spans. */
const Rich: FC<{ text: string }> = ({ text }) => (
  <>
    {text.split("**").map((part, index) =>
      index % 2 ? (
        <span key={index} className="font-semibold text-white">
          {part}
        </span>
      ) : (
        part
      )
    )}
  </>
);

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { hero, cv, ui } = useContent();
  const [intro, ...rest] = ui.about.bio;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <div className="flex items-center gap-5">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-aqua/40 md:h-24 md:w-24">
          <Image
            src="/media/about/headshot.png"
            alt={ui.about.portraitAlt}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-1 text-sm uppercase tracking-[0.25em] text-neutral-400">
            {ui.about.whoIAm}
          </p>
          <h3 className="text-2xl font-bold md:text-3xl">{HERO_NAME}</h3>
          <p className="text-sm text-neutral-400">{hero.location}</p>
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-lg">
        <Rich text={intro} />
      </p>
      {rest.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed text-neutral-400">
          <Rich text={paragraph} />
        </p>
      ))}

      <Journey />

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={cv.url} download={cv.fileName} className="btn-primary">
          <span>{ui.downloadCv}</span>
          <span aria-hidden>↓</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>{ui.seeProjects}</span>
        </a>
      </div>
    </motion.div>
  );
};
