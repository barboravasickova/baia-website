import Link from "next/link";
import type { Locale } from "@/data/projects";

type LanguageSwitchProps = {
  locale: Locale;
};

export default function LanguageSwitch({ locale }: LanguageSwitchProps) {
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
      <Link href="/" className="top-nav-back-link">
        ← ROZCESTNÍK
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
