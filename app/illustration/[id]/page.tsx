import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import IllustrationPageFooter from "@/components/IllustrationPageFooter";
import { getIllustrationById, illustrations } from "@/data/illustrations";

const illustrationFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"]
});

type IllustrationDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return illustrations.map((item) => ({ id: item.id }));
}

export default async function IllustrationDetailPage({ params }: IllustrationDetailPageProps) {
  const { id } = await params;
  const illustration = getIllustrationById(id);

  if (!illustration) {
    notFound();
  }

  return (
    <main className={`page illustration-page ${illustrationFont.className}`} aria-label="Detail ilustrace">
      <nav id="top-navigation" className="top-nav" aria-label="Hlavní navigace">
        <div className="top-nav-brand-trail" aria-label="Navigační cesta">
          <Link href="/" className="top-nav-brand-badge" aria-label="Domů">
            B
          </Link>
          <span aria-hidden="true">/</span>
          <span className="top-nav-brand-link-current">Illustration</span>
        </div>
        <div className="top-nav-links" aria-label="Sekce stránky">
          <Link href="/illustration#illustrations">Ilustrace</Link>
          <Link href="/illustration/o-mne">O mně</Link>
          <Link href="/illustration/kontakt">Kontakt</Link>
        </div>
      </nav>

      <article className="illustration-detail">
        <p className="illustration-detail-back">
          <Link href="/illustration">← Zpět</Link>
        </p>
        <div className="illustration-detail-grid">
          <div className="illustration-detail-media-stack">
            {(illustration.detailImages ?? [{ src: illustration.src, alt: illustration.alt }]).map((image, index) => (
              <figure key={`${image.src}-${index}`} className="illustration-detail-media">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="illustration-detail-image"
                  sizes="(min-width: 1100px) 55vw, 100vw"
                  priority={index === 0}
                />
              </figure>
            ))}
          </div>

          <aside className="illustration-detail-content">
            <h1 className="illustration-detail-title">{illustration.title ?? "Ilustrace"}</h1>
            {illustration.subtitle ? (
              <p className="illustration-detail-subtitle">{illustration.subtitle}</p>
            ) : null}
            {(illustration.description ?? "Autorská ilustrace z kolekce BAIA.")
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="illustration-detail-description">
                  {paragraph}
                </p>
              ))}
          </aside>
        </div>
      </article>

      <IllustrationPageFooter />
    </main>
  );
}
