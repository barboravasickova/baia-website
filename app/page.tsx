import Link from "next/link";
import { Montserrat, Cormorant_Garamond } from "next/font/google";

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
      <Link href="/cz" className={`split-panel split-panel-left ${leftFont.className}`}>
        <span className="split-panel-inner">
          <h1 className="split-title">Barbora Vašíčková</h1>
          <p className="split-subtitle">UX / Product Design</p>
        </span>
      </Link>

      <Link href="/produkty/" className={`split-panel split-panel-right ${rightFont.className}`}>
        <span className="split-panel-inner">
          <h2 className="split-title split-title-strong">BAIA</h2>
          <p className="split-subtitle">Ilustrace &amp; Produkty</p>
        </span>
      </Link>
    </main>
  );
}
