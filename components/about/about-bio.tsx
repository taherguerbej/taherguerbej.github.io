"use client";

import { useRef, type FC } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { CV_FILE_NAME, CV_URL } from "@/constants/social-constants";
import { HERO_LOCATION, HERO_NAME, JOURNEY } from "@/constants/hero-constants";

const Journey: FC = () => (
  <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
    {JOURNEY.map((stop, index) => (
      <li
        key={stop.city}
        className="relative rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-aqua/80">
          {String(index + 1).padStart(2, "0")} · {stop.country}
        </p>
        <p className="mt-1 font-semibold text-white">{stop.city}</p>
        <p className="text-xs text-neutral-400">{stop.label}</p>
        {index < JOURNEY.length - 1 && (
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

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            alt={`Portrait of ${HERO_NAME}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-1 text-sm uppercase tracking-[0.25em] text-neutral-400">
            Who I Am
          </p>
          <h3 className="text-2xl font-bold md:text-3xl">{HERO_NAME}</h3>
          <p className="text-sm text-neutral-400">{HERO_LOCATION}</p>
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-lg">
        I&apos;m a final-year{" "}
        <span className="font-semibold text-white">
          Robotics and Mechatronics
        </span>{" "}
        engineering student in a double-degree programme between ENISO
        (Tunisia) and SIGMA Clermont (France).
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        I spent four months at{" "}
        <span className="text-white">MIRMI, TU Munich</span>, working on active
        perception with two robot arms: a safety filter running on the real
        robots, reinforcement learning in simulation and a learned vision
        module.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        I&apos;m looking for a{" "}
        <span className="text-white">6-month final-year internship (PFE)</span>{" "}
        from 15 March 2027 in robot learning, manipulation or perception.
      </p>

      <Journey />

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={CV_URL} download={CV_FILE_NAME} className="btn-primary">
          <span>Download CV</span>
          <span aria-hidden>↓</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>See projects</span>
        </a>
      </div>
    </motion.div>
  );
};
