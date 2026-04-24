import Link from "next/link";

type AboutProps = {
  title: string;
  text: string[];
};

export default function About({ title, text }: AboutProps) {
  if (title === "O mně") {
    return (
      <section id="about" className="about-clean-section">
        <div className="about-clean-inner">
          <h2 className="about-clean-lead">Ahoj, jsem Bára.</h2>

          <p className="about-clean-text">
            Baví mě věci zjednodušovat. Nejvíc mi dává smysl práce, při které se mi podaří digitální
            produkt "učesat" tak, aby mu lidé rozuměli a zbytečně u něj netápali. Moje role je vlastně
            odstraňovat bariéry, které uživatele brzdí nebo matou.
          </p>
          <div className="about-clean-cta-wrap">
            <Link href="/product-design/o-mne" className="hero-cta">
              Více o mně
            </Link>
          </div>

          <section id="contact" className="about-connect-block" aria-labelledby="about-connect-heading">
            <h3 id="about-connect-heading" className="contact-final-title">
              Pojďme se propojit
            </h3>
            <p className="contact-final-subtitle">
              Ráda proberu nové projekty, UX konzultace nebo spolupráci pod značkou BAIA.
            </p>
            <div className="contact-final-links">
              <a href="mailto:vasickovabara@gmail.com">vasickovabara@gmail.com</a>
              <a href="https://www.linkedin.com/in/barbora-vasickova/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="/cv-barbora-vasickova.pdf" className="contact-final-cv">
                Stáhnout životopis (PDF)
              </a>
            </div>
          </section>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="content-section">
      <h2 className="content-section-title">{title}</h2>
      {text.map((paragraph) => (
        <p key={paragraph} className="content-section-text">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
