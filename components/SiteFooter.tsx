"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === "/" || pathname.startsWith("/illustration")) {
    return null;
  }

  const isProductDesign = pathname.startsWith("/product-design");

  return (
    <footer
      className={`site-footer${isProductDesign ? " site-footer-product-design" : ""}`}
      aria-label="Patička webu"
    >
      <div className="site-footer-inner">
        {isProductDesign ? (
          <>
            <span>Barbora Vašíčková © {currentYear}</span>
            <nav className="site-footer-nav" aria-label="Navigace Product design">
              <Link href="/product-design/projekty">Projekty</Link>
              <Link href="/product-design/o-mne">O mně</Link>
              <Link href="/product-design/kontakt">Kontakt</Link>
            </nav>
          </>
        ) : (
          <span>BAIA © {currentYear}</span>
        )}
      </div>
    </footer>
  );
}
