type ContactProps = {
  title: string;
  subtitle: string;
  email: string;
  social: { label: string; href: string }[];
};

export default function Contact({ title, subtitle, email, social }: ContactProps) {
  if (title === "Napište mi") {
    return (
      <section id="footer" className="contact-final-section">
        <div className="contact-final-inner">
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
