type HeroProps = {
  identityName: string;
  supporting: string[];
  ctaLabel: string;
  ctaHref: string;
};

export default function Hero({
  identityName,
  supporting,
  ctaLabel,
  ctaHref
}: HeroProps) {
  const introText = supporting[0] ?? "";

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-headline">
      <div className="hero-inner">
        <h1 id="hero-headline" className="hero-headline">
          {identityName}
        </h1>
        <p className="hero-intro">{introText}</p>

        <a className="hero-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
