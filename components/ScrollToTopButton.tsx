"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_SCROLL_Y = 280;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top-button${isVisible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Zpět nahoru k navigaci"
    >
      ↑
    </button>
  );
}
