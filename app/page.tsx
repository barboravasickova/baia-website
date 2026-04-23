import Link from "next/link";
import Image from "next/image";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import baiaLogo from "@/images/baia_logo_static.jpg";

const leftFont = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

const rightFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function HomePage() {
  return (
    <main className="split-landing" aria-label="Rozcestník">
      <Link href="/product-design" className={`split-panel split-panel-left ${leftFont.className}`}>
        <span className="split-panel-inner">
          <h1 className="split-title">Barbora Vašíčková</h1>
          <p className="split-subtitle">UX / Product Design</p>
        </span>
      </Link>

      <Link href="/illustration" className={`split-panel split-panel-right ${rightFont.className}`}>
        <span className="split-panel-inner">
          <Image src={baiaLogo} alt="BAIA" className="split-logo" priority />
          <p className="split-subtitle">Illustrace &amp; Shop</p>
        </span>
      </Link>
    </main>
  );
}
