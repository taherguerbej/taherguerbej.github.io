import { type FC } from "react";
import Image from "next/image";
import { HERO_NAME } from "@/constants/hero-constants";

/**
 * Round portrait in the hero. From xl it sits centred in the decorative rings
 * drawn by ParallaxBackground (same box: right 8%, top 18%, 28rem); at lg it is
 * smaller so it clears the hero text. Hidden below lg, where the text takes
 * the full width; the About section shows the photo there.
 */
export const HeroPortrait: FC = () => (
  <div
    className="reveal pointer-events-none absolute right-[3%] top-[30%] hidden h-72 w-72 lg:block xl:right-[8%] xl:top-[18%] xl:h-[28rem] xl:w-[28rem]"
    style={{ animationDelay: "calc(var(--intro-delay) + 0.4s)" }}
  >
    <div className="absolute inset-[11%] rounded-full bg-gradient-to-br from-aqua/40 via-royal/30 to-lavender/20 blur-3xl" />
    <div className="absolute inset-[12.5%] rounded-full bg-gradient-to-br from-aqua via-royal to-lavender p-[3px] shadow-[0_0_60px_rgba(59,91,255,0.35)]">
      <div className="relative h-full w-full overflow-hidden rounded-full bg-midnight">
        <Image
          src="/media/about/portrait-hero.jpg"
          alt={`Portrait of ${HERO_NAME}`}
          fill
          priority
          sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 14rem, 0px"
          className="object-cover"
        />
      </div>
    </div>
  </div>
);
