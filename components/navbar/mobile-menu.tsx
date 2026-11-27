"use client";

import { type FC } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useContent } from "@/components/i18n/locale-provider";
import { CvButton } from "./cv-button";
import { NavLink } from "./nav-link";

interface MobileMenuProps {
  open: boolean;
  active: string;
  onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ open, active, onClose }) => {
  const { ui } = useContent();
  return (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="block overflow-hidden border-t border-white/10 bg-primary/90 text-center backdrop-blur-xl lg:hidden"
      >
        <nav className="py-5">
          <ul className="nav-ul">
            {ui.nav.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={active === item.href}
                onClick={onClose}
              />
            ))}
          </ul>
          <div className="mt-4 px-6">
            <CvButton full onClick={onClose} />
          </div>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
  );
};
