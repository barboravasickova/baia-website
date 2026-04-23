type ContactProps = {
  title: string;
  subtitle: string;
  email: string;
  social: { label: string; href: string }[];
};

export default function Contact({ title, subtitle, email, social }: ContactProps) {
  if (title === "Napište mi") {
    const linkedInHref = social.find((item) => item.label.toLowerCase().includes("linkedin"))?.href;

    return (
      <section id="contact" className="contact-final-section">
        <div className="contact-final-inner">
          <h2 className="contact-final-title">Pojďme se propojit</h2>
          <p className="contact-final-subtitle">
            Ráda proberu nové projekty, UX konzultace nebo spolupráci pod značkou BAIA.
          </p>

          <div className="contact-final-links">
            <a href={`mailto:${email}`}>{email}</a>
            {linkedInHref ? <a href={linkedInHref}>LinkedIn</a> : null}
            <a href="/cv-barbora-vasickova.pdf" className="contact-final-cv">
              Stáhnout životopis (PDF)
            </a>
          </div>

          <p className="contact-final-footnote">
            © 2026 Barbora Vašíčková • Navrženo v Brně a postaveno na Next.js
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="content-section">
      <h2 className="content-section-title">{title}</h2>
      <p className="content-section-text">{subtitle}</p>
      <div className="contact-links">
        <a href={`mailto:${email}`}>{email}</a>
        {social.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
