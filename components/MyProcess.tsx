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

export default function MyProcess() {
  return (
    <section id="process" className="my-process-section" aria-labelledby="my-process-heading">
      <h2 id="my-process-heading" className="my-process-title">
        Můj proces tvorby
      </h2>

      <div className="my-process-grid">
        {steps.map((step) => (
          <article key={step.number} className="my-process-item">
            <div className="my-process-number" aria-hidden>
              {step.number}
            </div>
            <h3 className="my-process-item-title">{step.title}</h3>
            <p className="my-process-item-text">{step.description}</p>
          </article>
        ))}
      </div>
      <div className="my-process-cta-wrap">
        <Link href="/product-design/proces" className="hero-cta">
          Více o mém procesu
        </Link>
      </div>
    </section>
  );
}
