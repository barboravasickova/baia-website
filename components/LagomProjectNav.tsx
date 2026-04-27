"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "o-projektu", label: "O projektu" },
  { id: "research", label: "Research" },
  { id: "idea", label: "Idea" },
  { id: "design", label: "Design" },
  { id: "reflexe", label: "Reflexe" }
] as const;

export default function LagomProjectNav() {
  const [activeId, setActiveId] = useState<(typeof NAV_ITEMS)[number]["id"]>("o-projektu");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (section): section is HTMLElement => Boolean(section)
    );

    if (sections.length === 0) {
      return;
    }

    const getActivationY = () => {
      const topNavigation = document.getElementById("top-navigation");
      const navHeight = topNavigation?.getBoundingClientRect().height ?? 0;
      const viewportLead = Math.min(Math.max(window.innerHeight * 0.22, 140), 260);
      return window.scrollY + navHeight + viewportLead;
    };

    let ticking = false;

    const updateActiveSection = () => {
      const activationY = getActivationY();
      const sectionTops = sections.map((section) => ({
        id: section.id as (typeof NAV_ITEMS)[number]["id"],
        top: section.getBoundingClientRect().top + window.scrollY
      }));

      const firstSection = sectionTops[0];
      const lastSection = sectionTops[sectionTops.length - 1];

      if (!firstSection || !lastSection) {
        return;
      }

      if (activationY <= firstSection.top) {
        setActiveId(firstSection.id);
        return;
      }

      if (activationY >= lastSection.top) {
        setActiveId(lastSection.id);
        return;
      }

      for (let index = 0; index < sectionTops.length - 1; index += 1) {
        const current = sectionTops[index];
        const next = sectionTops[index + 1];

        if (activationY >= current.top && activationY < next.top) {
          setActiveId(current.id);
          return;
        }
      }
    };

    const onScrollOrResize = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <aside className="lagom-project-nav" aria-label="Navigace case study">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "true" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </aside>
  );
}
