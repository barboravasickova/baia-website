import Link from "next/link";

type AboutProps = {
  title: string;
  text: string[];
};

export default function About({ title, text }: AboutProps) {
  if (title === "O mně") {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-section-inner">
          <div className="contact-section-content" aria-labelledby="about-connect-heading">
            <p className="contact-final-eyebrow">KONTAKT</p>
            <h3 id="about-connect-heading" className="contact-final-title">
              vasickovabara@gmail.com
            </h3>
            <p className="contact-final-subtitle">
              Ráda proberu nové projekty, UX konzultace
              <br />
              nebo spolupráci na ilustracích pod mou značkou{" "}
              <Link href="/illustration" className="contact-final-inline-link">
                BAIA
              </Link>
              .
            </p>
            <div className="contact-final-cta-wrap">
              <Link href="/product-design/kontakt" className="hero-cta">
                Kontakt
              </Link>
            </div>

          </div>
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
