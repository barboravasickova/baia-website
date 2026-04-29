"use client";

import { useEffect, useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type CarouselSlide = {
  src: StaticImageData | string;
  alt: string;
};

type ProjectCarouselProps = {
  slides: CarouselSlide[];
  ariaLabel: string;
};

export default function ProjectCarousel({ slides, ariaLabel }: ProjectCarouselProps) {
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
  }, [currentIndex, slides, total]);

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

  if (slides.length === 0) {
    return null;
  }

  return (
    <>
      <div className="project-carousel-wrap" aria-label={ariaLabel}>
        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow-left"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
          aria-label="Předchozí náhled"
        >
          ←
        </button>

        <div className="project-carousel-stage">
          {visibleSlides.map((slide, index) => (
            <figure
              key={`${slide.alt}-${slide.position}-${index}`}
              className={`project-carousel-card project-carousel-card-${slide.position}`}
            >
              {slide.position === "center" ? (
                <button
                  type="button"
                  className="project-carousel-open"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Zvětšit prostřední obrázek"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    className="project-carousel-image"
                    priority
                    width={1400}
                    height={980}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="project-carousel-side-trigger"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      slide.position === "side" && index === 0 ? (prev - 1 + total) % total : (prev + 1) % total
                    )
                  }
                  aria-label={index === 0 ? "Přejít na předchozí náhled" : "Přejít na další náhled"}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    className="project-carousel-image"
                    priority
                    width={1400}
                    height={980}
                  />
                </button>
              )}
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow-right"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
          aria-label="Další náhled"
        >
          →
        </button>
      </div>

      {isModalOpen && currentSlide ? (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Zvětšený náhled">
          <button
            type="button"
            className="project-lightbox-backdrop"
            onClick={() => setIsModalOpen(false)}
            aria-label="Zavřít zvětšený náhled"
          />
          <div className="project-lightbox-content">
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Zavřít"
            >
              ×
            </button>
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="project-lightbox-image"
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
