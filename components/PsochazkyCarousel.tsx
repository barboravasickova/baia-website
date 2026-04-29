"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import psochazkyFullPage from "@/images/psochazky_full_page.jpg";
import psochazkyDesktop from "@/images/psochazky_desktop.jpg";
import psochazkyPhone from "@/images/psochazky_phone.jpg";

const slides = [
  { src: psochazkyFullPage, alt: "Psocházky - full page náhled" },
  { src: psochazkyDesktop, alt: "Psocházky - desktop náhled" },
  { src: psochazkyPhone, alt: "Psocházky - phone náhled" }
];

export default function PsochazkyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = slides.length;
  const currentSlide = slides[currentIndex];

  const visibleSlides = useMemo(() => {
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      { ...slides[prev], position: "side" },
      { ...slides[currentIndex], position: "center" },
      { ...slides[next], position: "side" }
    ];
  }, [currentIndex, total]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div className="lagom-carousel-wrap" aria-label="Náhledy projektu Psocházky">
        <button
          type="button"
          className="lagom-carousel-arrow lagom-carousel-arrow-left"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
          aria-label="Předchozí náhled"
        >
          ←
        </button>

        <div className="lagom-carousel-stage">
          {visibleSlides.map((slide) => (
            <figure
              key={`${slide.alt}-${slide.position}`}
              className={`lagom-carousel-card lagom-carousel-card-${slide.position}`}
            >
              {slide.position === "center" ? (
                <button
                  type="button"
                  className="lagom-carousel-open"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Zvětšit prostřední obrázek"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    className="lagom-carousel-image"
                    priority
                    width={1400}
                    height={980}
                  />
                </button>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="lagom-carousel-image"
                  priority
                  width={1400}
                  height={980}
                />
              )}
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="lagom-carousel-arrow lagom-carousel-arrow-right"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
          aria-label="Další náhled"
        >
          →
        </button>
      </div>

      {isModalOpen ? (
        <div className="lagom-lightbox" role="dialog" aria-modal="true" aria-label="Zvětšený náhled">
          <button
            type="button"
            className="lagom-lightbox-backdrop"
            onClick={() => setIsModalOpen(false)}
            aria-label="Zavřít zvětšený náhled"
          />
          <div className="lagom-lightbox-content">
            <button
              type="button"
              className="lagom-lightbox-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Zavřít"
            >
              ×
            </button>
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="lagom-lightbox-image"
              priority
              width={1600}
              height={1120}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
