import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import baiaLogo from "@/images/baia-logo.gif";
import Image from "next/image";
import IllustrationPageFooter from "@/components/IllustrationPageFooter";
import IllustrationTopNav from "@/components/IllustrationTopNav";
import { getSortedIllustrations, illustrations } from "@/data/illustrations";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

export default function HomePage() {
  const sortedIllustrations = getSortedIllustrations(illustrations);

  return (
    <main className={`page illustration-page ${illustrationFont.className}`} aria-label="Illustration">
      <IllustrationTopNav illustrationsHref="#illustrations" />

      <section className="illustration-hero" aria-label="Úvod ilustrace">
        <div className="illustration-hero-grid">
          <div className="illustration-hero-media">
            <Image className="illustration-logo-image" src={baiaLogo} alt="BAIA" width={480} height={480} priority />
          </div>
          <div className="illustration-hero-content">
            <p className="illustration-hero-text">
              Autorské vizuální zápisky, roztomilé charaktery a kupa psí radosti přenesená na plátno. Žádná přísná
              pravidla, jen čistá radost z kreslení.
            </p>
            <a href="#illustrations" className="illustration-hero-cta">
              Moje tvorba ↓
            </a>
          </div>
        </div>
      </section>

      <section id="illustrations" className="illustration-gallery" aria-label="Ilustrace">
        {sortedIllustrations.length === 0 ? (
          <p className="illustration-gallery-empty">
            Zatím tu nejsou nahrané žádné ilustrace. Přidej obrázky do <code>/public/illustration</code> a záznamy do{" "}
            <code>data/illustrations.ts</code>.
          </p>
        ) : (
          <div className="illustration-gallery-grid">
            {sortedIllustrations.map((item) => (
              <figure key={item.id} className="illustration-gallery-item">
                <Link href={`/${item.id}`} className="illustration-gallery-link" aria-label={item.title ?? item.alt}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="illustration-gallery-image"
                    sizes="(min-width: 1100px) 30vw, (min-width: 700px) 45vw, 100vw"
                  />
                  <span className="illustration-gallery-overlay" aria-hidden="true">
                    <span className="illustration-gallery-overlay-title">{item.title ?? "Ilustrace"}</span>
                    {item.subtitle ? (
                      <span className="illustration-gallery-overlay-category">{item.subtitle}</span>
                    ) : null}
                  </span>
                </Link>
              </figure>
            ))}
          </div>
        )}
      </section>

      <IllustrationPageFooter />
    </main>
  );
}
