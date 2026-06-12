import facebookIcon from "@/images/facebook_icon.png";
import instagramIcon from "@/images/instagram_icon.png";
import Image from "next/image";

export default function IllustrationPageFooter() {
  return (
    <footer className="illustration-page-footer" aria-label="Patička">
      <div className="illustration-page-footer-content">
        <nav className="illustration-social" aria-label="Sociální sítě">
          <a
            className="illustration-social-link"
            href="https://www.instagram.com/baia.cz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram - BAIA"
          >
            <Image className="illustration-social-icon" src={instagramIcon} alt="" width={22} height={22} />
          </a>
          <a
            className="illustration-social-link"
            href="https://www.facebook.com/baia.cz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - BAIA"
          >
            <Image className="illustration-social-icon" src={facebookIcon} alt="" width={22} height={22} />
          </a>
        </nav>
        <p className="illustration-page-copyright">All works © Barbora Vašíčková alias BAIA 2026</p>
      </div>
    </footer>
  );
}
