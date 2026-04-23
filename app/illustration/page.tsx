import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import baiaLogo from "@/images/baia-logo.gif";
import facebookIcon from "@/images/facebook_icon.png";
import instagramIcon from "@/images/instagram_icon.png";
import Image from "next/image";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function IllustrationPage() {
  return (
    <main className="page illustration-page" aria-label="Illustration and shop">
      <nav className="top-nav" aria-label="Navigace">
        <Link href="/product-design" className="top-nav-back-link" aria-label="Zpět">
          ←
        </Link>
      </nav>

      <section className={`illustration-landing ${illustrationFont.className}`}>
        <div className="illustration-landing-inner">
          <Image
            className="illustration-logo-image"
            src={baiaLogo}
            alt="BAIA"
            width={300}
            priority
          />
          <p className="illustration-tagline">
            Tady se právě teď bojuje s kódem, tužkou, nápady... <br />
            <span className="illustration-tagline-faded">a prokrastinací</span>.
          </p>
          <nav className="illustration-social" aria-label="Sociální sítě">
            <a
              className="illustration-social-link"
              href="https://www.facebook.com/baia.cz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook - BAIA"
            >
              <Image
                className="illustration-social-icon"
                src={facebookIcon}
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a
              className="illustration-social-link"
              href="https://www.instagram.com/baia.cz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram - BAIA"
            >
              <Image
                className="illustration-social-icon"
                src={instagramIcon}
                alt=""
                width={22}
                height={22}
              />
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
