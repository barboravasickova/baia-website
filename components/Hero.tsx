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
          <a className={ctaVariant === "arrow" ? "hero-cta-arrow" : "hero-cta"} href={ctaHref}>
            {ctaLabel}
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
