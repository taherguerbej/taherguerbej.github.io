"use client";

import { type FC } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useDeferredLayers } from "@/hooks/use-deferred-3d";

/**
 * Engineering backdrop for the hero: glows plus two blueprint grids that
 * move at different speeds on scroll. Pure CSS, no image downloads.
 * Phones and low-end devices get the static first layer only.
 */
export const ParallaxBackground: FC = () => {
  const withLayers = useDeferredLayers();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 50 });
  const fineY = useTransform(progress, [0, 0.5], ["0%", "18%"]);
  const majorY = useTransform(progress, [0, 0.5], ["0%", "40%"]);
  const glowX = useTransform(progress, [0, 0.5], ["0%", "-12%"]);

  return (
    <section aria-hidden className="absolute inset-0">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 -z-50 bg-[radial-gradient(ellipse_at_70%_45%,rgba(59,91,255,0.28),transparent_55%),radial-gradient(ellipse_at_85%_80%,rgba(34,211,238,0.16),transparent_50%),radial-gradient(ellipse_at_15%_20%,rgba(139,124,246,0.14),transparent_45%)]" />
        <div className="blueprint-grid absolute inset-0 -z-40 [mask-image:radial-gradient(ellipse_at_65%_50%,black_20%,transparent_75%)]" />

        {withLayers && (
          <>
            <motion.div
              className="blueprint-grid absolute inset-0 -z-30 opacity-60 [mask-image:radial-gradient(ellipse_at_65%_45%,black_10%,transparent_65%)]"
              style={{ y: fineY }}
            />
            <motion.div
              className="blueprint-grid-major absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_65%_55%,black_15%,transparent_70%)]"
              style={{ y: majorY }}
            />
            <motion.div
              className="absolute right-[8%] top-[18%] -z-20 h-[28rem] w-[28rem] rounded-full border border-aqua/10"
              style={{ x: glowX }}
            >
              <div className="absolute inset-10 rounded-full border border-royal/15" />
              <div className="absolute inset-24 rounded-full border border-lavender/10" />
            </motion.div>
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-b from-transparent to-primary" />
      </div>
    </section>
  );
};
