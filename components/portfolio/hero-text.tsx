"use client";

import { type CSSProperties, type FC } from "react";
import { FlipWords } from "@/components/portfolio/flip-words";
import { useContent } from "@/components/i18n/locale-provider";
import { HERO_NAME, MY_SOCIALS } from "@/constants/portfolio-constants";

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `calc(var(--intro-delay) + ${seconds}s)`,
});

const AvailabilityBadge: FC<{ compact?: boolean }> = ({ compact }) => {
  const { hero } = useContent();
  return (
  <div
    className={`reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 ${
      compact ? "self-center" : "self-start mb-6"
    }`}
    style={delay(0.05)}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-75" />
      <span className="relative rounded-full bg-mint h-2 w-2" />
    </span>
    <span
      className={`${
        compact ? "text-[10px]" : "text-xs"
      } tracking-[0.25em] uppercase text-neutral-300`}
    >
      {hero.availability}
    </span>
  </div>
  );
};

/** Round icon buttons on desktop, labelled buttons on phones. */
const SocialButtons: FC<{ full?: boolean }> = ({ full }) => (
  <>
    {MY_SOCIALS.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        title={social.name}
        className={`btn-ghost ${full ? "w-full" : "!h-12 !w-12 !px-0"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={social.icon} alt="" className="h-4 w-4" />
        {full && <span>{social.name}</span>}
      </a>
    ))}
  </>
);

export const HeroText: FC = () => {
  const { locale, hero, cv, ui } = useContent();
  return (
    <div className="z-10 mt-24 text-center md:mt-32 md:text-left max-w-4xl">
      <div className="flex-col hidden md:flex c-space">
        <AvailabilityBadge />

        <h1
          className="reveal text-6xl lg:text-7xl font-black tracking-tight text-white"
          style={delay(0.12)}
        >
          {HERO_NAME}
        </h1>

        <p
          className="reveal text-2xl xl:text-3xl font-semibold mt-3 text-gradient leading-tight"
          style={delay(0.19)}
        >
          {hero.role}
        </p>

        <div className="reveal mt-6" style={delay(0.26)}>
          <FlipWords
            words={hero.flipWords}
            className="font-black text-white/90 text-6xl lg:text-7xl"
          />
        </div>

        <p
          className="reveal mt-4 max-w-xl text-lg lg:text-xl text-neutral-300"
          style={delay(0.33)}
        >
          {hero.tagline}
        </p>

        <div className="reveal flex flex-wrap gap-3 mt-10" style={delay(0.4)}>
          <a href="#work" className="btn-primary">
            <span>{ui.viewProjects}</span>
            <span aria-hidden>→</span>
          </a>
          <a href={cv.url} download={cv.fileName} className="btn-ghost">
            <span>{ui.downloadCv}</span>
            <span aria-hidden>↓</span>
          </a>
          <SocialButtons />
        </div>
      </div>

      <div className="flex flex-col space-y-5 md:hidden px-4">
        <AvailabilityBadge compact />

        <h1
          className="reveal text-5xl font-black tracking-tight text-white"
          style={delay(0.12)}
        >
          {HERO_NAME}
        </h1>

        <p
          className="reveal text-xl font-semibold text-gradient"
          style={delay(0.19)}
        >
          {hero.role}
        </p>

        <div className="reveal" style={delay(0.26)}>
          <FlipWords
            words={hero.flipWords}
            className={`font-black text-white/90 ${
              // "Planification" is wider than a phone at text-5xl.
              locale === "fr" ? "text-[clamp(2rem,10vw,3rem)]" : "text-5xl"
            }`}
          />
        </div>

        <p
          className="reveal text-base text-neutral-300"
          style={delay(0.33)}
        >
          {hero.tagline}
        </p>

        <div
          className="reveal flex flex-col gap-3 mt-2 items-center"
          style={delay(0.4)}
        >
          <a href="#work" className="btn-primary w-full">
            <span>{ui.viewProjects}</span>
            <span aria-hidden>→</span>
          </a>
          <a
            href={cv.url}
            download={cv.fileName}
            className="btn-ghost w-full"
          >
            <span>{ui.downloadCv}</span>
            <span aria-hidden>↓</span>
          </a>
          <div className="grid w-full grid-cols-2 gap-3">
            <SocialButtons full />
          </div>
        </div>
      </div>
    </div>
  );
};
