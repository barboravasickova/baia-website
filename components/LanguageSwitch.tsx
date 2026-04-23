import Link from "next/link";
import type { Locale } from "@/data/projects";

type LanguageSwitchProps = {
  locale: Locale;
  backHref?: string;
};

export default function LanguageSwitch({ locale, backHref = "/" }: LanguageSwitchProps) {
  const showSignpostLabel = backHref === "/";
  const sectionLinks =
    locale === "cz"
      ? [
          { label: "Projekty", href: "#projekty" },
          { label: "Proces", href: "#process" },
          { label: "O mně", href: "#about" },
          { label: "Kontakt", href: "#contact" }
        ]
      : [
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "Process", href: "#process" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" }
        ];

  return (
    <nav className="top-nav" aria-label={locale === "cz" ? "Hlavní navigace" : "Main navigation"}>
      <Link href={backHref} className="top-nav-back-link" aria-label="Zpět">
        <span aria-hidden="true">←</span>
        {showSignpostLabel ? <span className="top-nav-back-label">ROZCESTNÍK</span> : null}
      </Link>
      <div className="top-nav-links">
        {sectionLinks.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
