import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function ProductDesignContactPage() {
  return (
    <main className="page page-footer-flush">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        brandTrailCurrentLabel="Kontakt"
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />

      <section
        id="contact"
        className="contact-section-content product-design-subpage-content"
        aria-labelledby="about-connect-heading"
      >
        <p className="contact-final-eyebrow">KONTAKT</p>
        <h1 id="about-connect-heading" className="contact-final-title">
          vasickovabara@gmail.com
        </h1>
        <p className="contact-final-subtitle">
          Ráda proberu nové projekty, UX konzultace nebo spolupráci pod značkou{" "}
          <Link href="/illustration" className="contact-final-inline-link">
            BAIA
          </Link>
          .
        </p>
        <div className="contact-final-cta-wrap">
          <a href="mailto:vasickovabara@gmail.com" className="hero-cta">
            Napsat e-mail
          </a>
        </div>
        <div className="contact-final-links">
          <a href="mailto:vasickovabara@gmail.com">vasickovabara@gmail.com</a>
          <a href="https://www.linkedin.com/in/barbora-vasickova/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
