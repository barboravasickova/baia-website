"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import lagomPhoneHand from "@/images/lagom-phone-hand.jpg";
import lagomIphone from "@/images/lagom_iphone.jpg";
import lagomAktivita from "@/images/lagom-aktivita.jpg";

const slides = [
  { src: lagomPhoneHand, alt: "Lagom App náhled v ruce" },
  { src: lagomIphone, alt: "Lagom App náhled rozhraní" },
  { src: lagomAktivita, alt: "Lagom App náhled obrazovky aktivit" }
];

export default function LagomCarousel() {
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
      <div className="lagom-carousel-wrap" aria-label="Náhledy Lagom aplikace">
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
                  <Image src={slide.src} alt={slide.alt} className="lagom-carousel-image" priority />
                </button>
              ) : (
                <Image src={slide.src} alt={slide.alt} className="lagom-carousel-image" priority />
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
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
