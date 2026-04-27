type HeroProps = {
  identityName: string;
  supporting: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  ctaVariant?: "button" | "arrow";
  statusLabel?: string;
};

export default function Hero({
  identityName,
  supporting,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  ctaVariant = "button",
  statusLabel
}: HeroProps) {
  const introText = supporting[0] ?? "";

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-headline">
      <div className="hero-inner">
        <h1 id="hero-headline" className="hero-headline">
          {identityName}
        </h1>
        <p className="hero-intro">{introText}</p>
        {statusLabel ? (
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden />
            <span>{statusLabel}</span>
          </p>
        ) : null}

        <div className="hero-cta-group">
          <a
            className={ctaVariant === "arrow" ? "hero-cta-arrow" : "hero-cta"}
            href={ctaHref}
            aria-label={ctaVariant === "arrow" ? ctaLabel : undefined}
          >
            {ctaVariant === "arrow" ? (
              <svg
                className="hero-cta-arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 5V19M12 19L6 13M12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              ctaLabel
            )}
          </a>
          {secondaryCtaLabel && secondaryCtaHref ? (
            <a className="hero-cta" href={secondaryCtaHref}>
              {secondaryCtaLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
