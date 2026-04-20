type HeroProps = {
  identityName: string;
  identityRole: string;
  headlineLines: [string, string];
  supporting: string[];
  ctaLabel: string;
  ctaHref: string;
};

export default function Hero({
  identityName,
  identityRole,
  headlineLines,
  supporting,
  ctaLabel,
  ctaHref
}: HeroProps) {
  const [line1, line2] = headlineLines;

  return (
    <section className="hero-section" aria-labelledby="hero-headline">
      <div className="hero-inner">
        <div className="hero-identity">
          <div className="hero-identity-name">{identityName}</div>
          <div className="hero-identity-role">{identityRole}</div>
        </div>

        <h1 id="hero-headline" className="hero-headline">
          <span className="hero-headline-line">{line1}</span>
          <span className="hero-headline-line">{line2}</span>
        </h1>

        <div className="hero-supporting">
          {supporting.map((block, index) => (
            <p key={index} className="hero-supporting-text">
              {block}
            </p>
          ))}
        </div>

        <a className="hero-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
