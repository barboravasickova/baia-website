"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import lagomPhoneHand from "@/images/lagom-phone-hand.jpg";
import lagomIphone from "@/images/lagom_iphone.jpg";

const slides = [
  { src: lagomPhoneHand, alt: "Lagom App náhled v ruce" },
  { src: lagomIphone, alt: "Lagom App náhled rozhraní" },
  { src: lagomPhoneHand, alt: "Lagom App detail mobilního mockupu" }
];

export default function LagomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = slides.length;

  const visibleSlides = useMemo(() => {
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      { ...slides[prev], position: "side" },
      { ...slides[currentIndex], position: "center" },
      { ...slides[next], position: "side" }
    ];
  }, [currentIndex, total]);

  return (
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
            <Image src={slide.src} alt={slide.alt} className="lagom-carousel-image" priority />
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
  );
}
