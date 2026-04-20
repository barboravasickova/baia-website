type ContactProps = {
  title: string;
  subtitle: string;
  email: string;
  social: { label: string; href: string }[];
};

export default function Contact({ title, subtitle, email, social }: ContactProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
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
