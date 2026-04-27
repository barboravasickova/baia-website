import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Od zadání k problému",
    description:
      "Místo slepého kreslení hledám, co přesně má produkt vyřešit a kde jsou třecí plochy. Dobrý design začíná tím, že se ptám na věci, které ostatní považují za jasné."
  },
  {
    number: "02",
    title: "Kostra, která drží",
    description:
      "Stavím logiku aplikace tak, aby ji uživatel nemusel luštit. Wireframy jsou pro mě nástroj, jak si potvrdit, že cesta k cíli je co nejkratší a bez zbytečných odboček."
  },
  {
    number: "03",
    title: "Precizní exekuce",
    description:
      "Tady se potkává logika s estetikou. Navrhuji rozhraní, která jsou vizuálně čistá, ale hlavně technicky dotažená - tak, aby vývojáři přesně věděli, co a jak mají postavit."
  },
  {
    number: "04",
    title: "Ladění detailů",
    description:
      "První návrh je jen začátek. Sleduji, jak lidé s produktem reálně pracují, a podle toho odstraňuji poslední bariéry. Design pro mě končí až ve chvíli, kdy všechno hladce funguje."
  }
];

export default function AboutMeSection() {
  return (
    <section id="about" className="about-me-section" aria-labelledby="about-me-heading">
      <h2 id="about-me-heading" className="about-me-title">
        Ahoj, jsem Bára.
      </h2>
      <p className="about-me-intro">
        Baví mě věci zjednodušovat – nejvíce mi dává smysl práce, při které se mi podaří digitální
        produkty navrhnout tak, aby jim lidé  rozuměli a zbytečně u nich netápali. 
      </p>
      <p className="about-me-subtitle">Jaký je můj postup při navrhování produktů?</p>

      <div className="about-me-grid">
        {steps.map((step) => (
          <article key={step.number} className="about-me-item">
            <div className="about-me-number" aria-hidden>
              {step.number}
            </div>
            <h3 className="about-me-item-title">{step.title}</h3>
            <p className="about-me-item-text">{step.description}</p>
          </article>
        ))}
      </div>
      <div className="about-me-cta-wrap">
        <Link href="/product-design/o-mne" className="hero-cta">
          Více o mně
        </Link>
      </div>
    </section>
  );
}
