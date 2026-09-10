import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import baiaLogoStatic from "@/images/baia_logo_static_transparent.webp";
import Image from "next/image";
import IllustrationPageFooter from "@/components/IllustrationPageFooter";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function IllustrationContactPage() {
  return (
    <main className={`page illustration-page ${illustrationFont.className}`} aria-label="Kontakt">
      <nav id="top-navigation" className="top-nav" aria-label="Hlavní navigace">
        <div className="top-nav-brand-trail" aria-label="Navigační cesta">
          <Link href="/" className="top-nav-brand-badge" aria-label="Domů">
            B
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/" className="top-nav-brand-link">
            Illustration
          </Link>
          <span aria-hidden="true">/</span>
          <span className="top-nav-brand-link-current">Kontakt</span>
        </div>
        <div className="top-nav-links" aria-label="Sekce stránky">
          <Link href="/#illustrations">Ilustrace</Link>
          <Link href="/o-mne">O mně</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </nav>

      <section className="illustration-contact illustration-subpage" aria-label="Kontakt">
        <Image
          className="illustration-contact-logo"
          src={baiaLogoStatic}
          alt="BAIA"
          width={560}
          height={560}
          priority
        />
        <p className="illustration-contact-name">Barbora Vašíčková</p>
        <a className="illustration-contact-mail" href="mailto:vasickovabara@gmail.com">
          vasickovabara@gmail.com
        </a>
        <nav className="illustration-contact-social" aria-label="Sociální sítě">
          <a
            className="illustration-contact-social-link"
            href="https://www.instagram.com/baia.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram baia.cz
          </a>
          <a
            className="illustration-contact-social-link"
            href="https://www.facebook.com/baia.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook baia.cz
          </a>
        </nav>
      </section>

      <IllustrationPageFooter />
    </main>
  );
}
