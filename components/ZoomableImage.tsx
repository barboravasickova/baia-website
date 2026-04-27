"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type ZoomableImageProps = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
  enableFullSizeToggle?: boolean;
};

export default function ZoomableImage({
  src,
  alt,
  className,
  ariaLabel = "Zvětšit obrázek",
  width,
  height,
  enableFullSizeToggle = false
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setIsFullSize(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button type="button" className="lagom-zoom-trigger" onClick={() => setIsOpen(true)} aria-label={ariaLabel}>
        <Image src={src} alt={alt} className={className} width={width} height={height} />
      </button>

      {isOpen ? (
        <div className="lagom-lightbox" role="dialog" aria-modal="true" aria-label="Zvětšený náhled">
          <button
            type="button"
            className="lagom-lightbox-backdrop"
            onClick={closeModal}
            aria-label="Zavřít zvětšený náhled"
          />
          <div className="lagom-lightbox-content">
            <button type="button" className="lagom-lightbox-close" onClick={closeModal} aria-label="Zavřít">
              ×
            </button>
            <div
              className={`lagom-lightbox-image-wrap ${
                isFullSize ? "lagom-lightbox-image-wrap-full" : ""
              } ${enableFullSizeToggle ? "lagom-lightbox-image-wrap-zoomable" : ""}`}
              onClick={enableFullSizeToggle ? () => setIsFullSize((prev) => !prev) : undefined}
              role={enableFullSizeToggle ? "button" : undefined}
              tabIndex={enableFullSizeToggle ? 0 : undefined}
              onKeyDown={
                enableFullSizeToggle
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsFullSize((prev) => !prev);
                      }
                    }
                  : undefined
              }
              aria-label={enableFullSizeToggle ? (isFullSize ? "Zmenšit obrázek" : "Přiblížit obrázek na 100%") : undefined}
            >
              <Image
                src={src}
                alt={alt}
                className={`lagom-lightbox-image ${isFullSize ? "lagom-lightbox-image-full" : ""}`}
                priority
              />
            </div>
            {enableFullSizeToggle ? (
              <button
                type="button"
                className="lagom-lightbox-fullsize"
                onClick={() => setIsFullSize((prev) => !prev)}
                aria-label={isFullSize ? "Přepnout na přizpůsobenou velikost" : "Zobrazit obrázek ve 100% velikosti"}
              >
                🔍
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
