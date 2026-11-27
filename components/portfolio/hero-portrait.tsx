import { type FC } from "react";
import Image from "next/image";
import { HERO_NAME } from "@/constants/hero-constants";

/**
 * Round portrait on the right of the hero, sized up with the screen
 * (20rem at lg, 27rem at xl, 34rem at 2xl) so it always clears the hero
 * text. Hidden below lg, where the text takes the full width; the About
 * section shows the photo there.
 */
export const HeroPortrait: FC = () => (
  <div
    className="reveal pointer-events-none absolute right-[4%] top-[24%] hidden h-80 w-80 lg:block xl:right-[6%] xl:top-[16%] xl:h-[27rem] xl:w-[27rem] 2xl:right-[8%] 2xl:top-[14%] 2xl:h-[34rem] 2xl:w-[34rem]"
    style={{ animationDelay: "calc(var(--intro-delay) + 0.4s)" }}
  >
    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-aqua/40 via-royal/30 to-lavender/20 blur-3xl" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aqua via-royal to-lavender p-1 shadow-[0_0_80px_rgba(59,91,255,0.4)]">
      <div className="relative h-full w-full overflow-hidden rounded-full bg-midnight">
        <Image
          src="/media/about/portrait-hero.jpg"
          alt={`Portrait of ${HERO_NAME}`}
          fill
          priority
          sizes="(min-width: 1536px) 34rem, (min-width: 1280px) 27rem, (min-width: 1024px) 20rem, 0px"
          className="object-cover"
        />
      </div>
    </div>
  </div>
);
