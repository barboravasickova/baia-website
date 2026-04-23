import { notFound } from "next/navigation";
import LanguageSwitch from "@/components/LanguageSwitch";
import LagomCarousel from "@/components/LagomCarousel";
import { contentByLocale, getProjectByLocale } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDesignProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectByLocale("cz", id);

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <LanguageSwitch locale="cz" backHref="/product-design" />

      {project.id === "lagom-app" ? (
        <article className="lagom-case-study">
          <section className="lagom-hero">
            <div className="lagom-hero-content">
              <p className="lagom-eyebrow">Lagom App</p>
              <h1 className="lagom-title">Lagom: Pohyb v rovnováze</h1>
              <div className="lagom-tags" aria-label="Project tags">
                <span className="lagom-tag">Health</span>
                <span className="lagom-tag">Tech</span>
                <span className="lagom-tag">UX Design</span>
                <span className="lagom-tag">UI Design</span>
                <span className="lagom-tag">Case Study</span>
              </div>
              <p className="lagom-lead">
                Lagom motivuje k objevování nových tras a učí uživatele rozumět vlastnímu tělu.
                Interpretuje zdravotní data lidskou řečí a mění statistiky v užitečnou inspiraci pro
                každý den.
              </p>
            </div>
            <LagomCarousel />
            <section className="lagom-info-columns" aria-label="Shrnutí projektu Lagom">
              <div className="lagom-info-card">
                <h2>ROLE</h2>
                <p>UX/UI Design</p>
              </div>
              <div className="lagom-info-card">
                <h2>NÁSTROJE</h2>
                <ul className="lagom-info-tools">
                  <li>Figma</li>
                  <li>Procreate</li>
                  <li>Miro</li>
                  <li>Google Forms</li>
                  <li>Google Docs</li>
                  <li>Zoom</li>
                </ul>
              </div>
              <div className="lagom-info-card">
                <h2>TIMELINE</h2>
                <p>říjen 2025 - leden 2026</p>
              </div>
              <div className="lagom-info-card">
                <h2>KONTEXT</h2>
                <p>Projekt vznikl v rámci UX kurzu Czechitas.</p>
              </div>
            </section>
          </section>

          <div className="lagom-project-layout">
            <aside className="lagom-project-nav" aria-label="Navigace case study">
              <a href="#o-projektu">O projektu</a>
              <a href="#research">Research</a>
              <a href="#idea">Idea</a>
              <a href="#design">Design</a>
              <a href="#reflexe">Reflexe</a>
            </aside>

            <div className="lagom-project-content">
              <section id="o-projektu" className="lagom-heading-section">
                <h2>O projektu</h2>
                <p>
                  Lagom dává pohybu smysl. Je to empatický digitální společník navržený pro ty,
                  kteří hledají rovnováhu mezi aktivitou a duševní pohodou. Namísto tlaku na výkon
                  aplikace motivuje k objevování nových tras a interpretuje zdravotní data lidskou
                  řečí. Projekt vznikl v rámci UX kurzu Czechitas jako komplexní návrh řešení pro
                  udržitelný životní styl.
                </p>
              </section>

              <section id="research" className="lagom-heading-section">
                <h2>Research</h2>
                <p>
                  Hloubkový průzkum a dotazníkové šetření mezi více než 30 respondenty odhalily
                  zásadní bariéru: stávající fitness aplikace uživatele často zahlcují čísly bez
                  kontextu. Klíčovým zjištěním bylo, že 93,5 % lidí hledá při pohybu primárně
                  „vyčištění hlavy“ a psychický odpočinek, nikoliv překonávání rekordů. Analýza
                  konkurence a tvorba Empathy Map pomohly definovat potřebu rozhraní, které je
                  informačně bohaté, ale vizuálně klidné.
                </p>
              </section>

              <section id="idea" className="lagom-heading-section">
                <h2>Idea</h2>
                <p>
                  Koncept vychází ze švédské filozofie Lagom - ani málo, ani moc. Cílem bylo
                  vytvořit prostředí, které uživatele nepředbíhá, ale provází. Hlavní myšlenka
                  stojí na třech pilířích: personalizovaná inspirace k pohybu na základě aktuální
                  energie, srozumitelné vysvětlení odborných metrik (např. VO2 max) a dynamické
                  vizuální prvky, které reflektují denní dobu a počasí pro posílení pocitu spojení
                  s přírodou.
                </p>
              </section>

              <section id="design" className="lagom-heading-section">
                <h2>Design</h2>
                <p>
                  Proces návrhu začal ručními skicami a definicí informační architektury s důrazem
                  na hierarchii. Finální UI využívá jemnou paletu barev a čistou typografii pro
                  snížení kognitivní zátěže. Klíčovými prvky jsou widgety s interpretací dat, jasné
                  rozlišení mezi aktivním a klidovým režimem a interaktivní mapové podklady pro
                  snadné objevování tras. Každá obrazovka byla iterována na základě uživatelského
                  testování s cílem maximalizovat srozumitelnost ovládání.
                </p>
              </section>

              <section id="reflexe" className="lagom-heading-section">
                <h2>Reflexe</h2>
                <p>
                  Projekt potvrdil, že UX design není o estetice, ale o správné prioritizaci
                  informací. Největší výzvou bylo najít způsob, jak prezentovat komplexní data tak,
                  aby jim porozuměl i laik. Do budoucna vidím prostor pro rozšíření o dlouhodobé
                  reporty a hlubší zaměření na přístupnost (kontrastní poměry), aby byla aplikace
                  plně funkční i při přímém slunci během outdoorových aktivit.
                </p>
              </section>
            </div>
          </div>
        </article>
      ) : (
        <section className="project-detail">
          <h1>{project.name}</h1>
          <p className="project-type">{project.type}</p>
          <p className="project-detail-text">{project.summary}</p>

          {project.caseStudyPdf ? (
            <p className="project-pdf-block">
              <a
                className="pdf-link"
                href={project.caseStudyPdf.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.caseStudyPdf.label}
              </a>
            </p>
          ) : null}

          {project.sections.map((section) => (
            <div key={`${project.id}-${section.heading}`} className="project-section">
              <h2>{section.heading}</h2>
              <p className="project-detail-text">{section.content}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
