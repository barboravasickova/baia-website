import Link from "next/link";
import type { Locale } from "@/data/projects";

type LanguageSwitchProps = {
  locale: Locale;
  backHref?: string;
  showBrandTrail?: boolean;
  brandTrailCurrentLabel?: string;
  projectsHref?: string;
  processHref?: string;
  aboutHref?: string;
  includeProjectsInTrail?: boolean;
};

export default function LanguageSwitch({
  locale,
  backHref = "/",
  showBrandTrail = false,
  brandTrailCurrentLabel,
  projectsHref,
  processHref,
  aboutHref,
  includeProjectsInTrail = false
}: LanguageSwitchProps) {
  const resolvedProjectsHref = projectsHref ?? (locale === "cz" ? "#projekty" : "#projects");
  const resolvedProcessHref = processHref ?? "#process";
  const resolvedAboutHref = aboutHref ?? (showBrandTrail && locale === "cz" ? "/product-design/o-mne" : "#about");
  const showSignpostLabel = backHref === "/";
  const sectionLinks =
    locale === "cz"
      ? [
          { label: "Projekty", href: resolvedProjectsHref },
          { label: "Proces", href: resolvedProcessHref },
          { label: "O mně", href: resolvedAboutHref },
          { label: "Kontakt", href: "#contact" }
        ]
      : [
          { label: "Home", href: "#home" },
          { label: "Projects", href: resolvedProjectsHref },
          { label: "Process", href: resolvedProcessHref },
          { label: "About", href: resolvedAboutHref },
          { label: "Contact", href: "#contact" }
        ];

  return (
    <nav className="top-nav" aria-label={locale === "cz" ? "Hlavní navigace" : "Main navigation"}>
      {showBrandTrail ? (
        <div className="top-nav-brand-trail" aria-label="Navigační cesta">
          <a href="/" className="top-nav-brand-badge" aria-label="Domů">
            B
          </a>
          <span aria-hidden="true">/</span>
          <Link
            href="/product-design"
            className={brandTrailCurrentLabel ? "top-nav-brand-link" : "top-nav-brand-link-current"}
          >
            Product design
          </Link>
          {includeProjectsInTrail ? (
            <>
              <span aria-hidden="true">/</span>
              <Link href={resolvedProjectsHref} className="top-nav-brand-link">
                Projekty
              </Link>
            </>
          ) : null}
          {brandTrailCurrentLabel ? (
            <>
              <span aria-hidden="true">/</span>
              <span className="top-nav-brand-link-current">{brandTrailCurrentLabel}</span>
            </>
          ) : null}
        </div>
      ) : (
        <Link href={backHref} className="top-nav-back-link" aria-label="Zpět">
          <span aria-hidden="true">←</span>
          {showSignpostLabel ? <span className="top-nav-back-label">ROZCESTNÍK</span> : null}
        </Link>
      )}
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
