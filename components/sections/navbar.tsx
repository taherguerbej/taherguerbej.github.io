"use client";

import { useState, type FC } from "react";
import { CvButton } from "@/components/navbar/cv-button";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { NavBrand } from "@/components/navbar/nav-brand";
import { NavLink } from "@/components/navbar/nav-link";
import { LanguageSwitch } from "@/components/i18n/language-switch";
import { useContent } from "@/components/i18n/locale-provider";
import { NAV_SCROLLED_AT } from "@/constants/navigation-constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(NAV_SCROLLED_AT);
  const active = useActiveSection();
  const { ui } = useContent();

  return (
    <header
      className={`reveal-down fixed inset-x-0 top-0 z-30 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-primary/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="c-space">
        <div className="flex items-center justify-between py-3">
          <NavBrand />

          <nav className="hidden lg:flex">
            <ul className="nav-ul">
              {ui.nav.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  active={active === item.href}
                />
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch />
            <CvButton />
          </div>

          <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex cursor-pointer text-neutral-300 hover:text-white"
            aria-label={ui.toggleMenu}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="h-6 w-6"
              alt=""
            />
          </button>
          </div>
        </div>
      </div>

      <MobileMenu
        open={isOpen}
        active={active}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
};
