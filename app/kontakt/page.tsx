import { Cormorant_Garamond } from "next/font/google";
import baiaLogoStatic from "@/images/baia_logo_static_transparent.webp";
import Image from "next/image";
import IllustrationPageFooter from "@/components/IllustrationPageFooter";
import IllustrationTopNav from "@/components/IllustrationTopNav";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function IllustrationContactPage() {
  return (
    <main className={`page illustration-page ${illustrationFont.className}`} aria-label="Kontakt">
      <IllustrationTopNav currentLabel="Kontakt" />

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
