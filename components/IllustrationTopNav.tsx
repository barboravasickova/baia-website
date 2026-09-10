import Link from "next/link";

type IllustrationTopNavProps = {
  currentLabel?: string;
  illustrationsHref?: string;
};

export default function IllustrationTopNav({
  currentLabel,
  illustrationsHref = "/#illustrations"
}: IllustrationTopNavProps) {
  return (
    <nav id="top-navigation" className="top-nav" aria-label="Hlavní navigace">
      <div className="top-nav-brand-trail" aria-label="Navigační cesta">
        <Link href="/" className="top-nav-brand-wordmark" aria-label="BAIA Ilustrace – domů">
          BAIA ILUSTRACE
        </Link>
        {currentLabel ? (
          <>
            <span aria-hidden="true">/</span>
            <span className="top-nav-brand-link-current">{currentLabel}</span>
          </>
        ) : null}
      </div>
      <div className="top-nav-links" aria-label="Sekce stránky">
        {illustrationsHref.startsWith("#") ? (
          <a href={illustrationsHref}>Ilustrace</a>
        ) : (
          <Link href={illustrationsHref}>Ilustrace</Link>
        )}
        <Link href="/o-mne">O mně</Link>
        <Link href="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}
