import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import LagomCarousel from "@/components/LagomCarousel";
import LagomProjectNav from "@/components/LagomProjectNav";
import ZoomableImage from "@/components/ZoomableImage";
import { contentByLocale, getProjectByLocale } from "@/data/projects";
import lagomPhoneHand from "@/images/lagom-phone-hand.jpg";
import rozhovoryLagom from "@/images/rozhovory-lagom.jpg";
import lagomUserPersona from "@/images/lagom-user-persona.jpg";
import lagomLoFi from "@/images/lagom-lo-fi.jpg";
import homepageLagom from "@/images/homepage-lagom.jpg";
import aktivitaLagom from "@/images/aktivita-lagom.jpg";
import komunitaLagom from "@/images/komunita-lagom.jpg";
import psochazkyNotebook from "@/images/psochazky_notebook.jpg";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDesignProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectByLocale("cz", id);

  if (!project) {
    notFound();
  }
  const breadcrumbCurrentLabel = project.id === "lagom-app" ? "Lagom App" : project.name;

  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        backHref="/product-design"
        showBrandTrail
        brandTrailCurrentLabel={breadcrumbCurrentLabel}
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
        includeProjectsInTrail
      />

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
            <LagomProjectNav />

            <div className="lagom-project-content">
              <section id="o-projektu" className="lagom-heading-section">
                <h2>O projektu</h2>
                <p>
                  Lagom dává pohybu smysl. Je to empatický digitální společník navržený pro ty,
                  kteří hledají rovnováhu mezi aktivitou a duševní pohodou. Namísto tlaku na
                  rekordy motivuje k objevování nových tras a interpretuje zdravotní data lidskou
                  řečí. Projekt vznikl s vizí vytvořit rozhraní, které uživatele nepředbíhá, ale
                  provází.
                </p>
                <div className="lagom-project-intro-grid">
                  <ZoomableImage
                    src={lagomPhoneHand}
                    alt="Lagom App na telefonu v ruce"
                    className="lagom-process-image lagom-project-intro-image"
                    ariaLabel="Zvětšit obrázek Lagom App na telefonu"
                  />
                  <aside className="lagom-word-card" aria-label="Význam slova Lagom">
                    <h3 className="lagom-word-title">Lagom</h3>
                    <p className="lagom-word-meta">(adv.) | Sweedish | [ˈlɑːgom]</p>
                    <p className="lagom-word-definition">Not too little, not too much. Just Right.</p>
                  </aside>
                </div>
              </section>

              <section id="research" className="lagom-heading-section">
                <h2>Research</h2>
                <p>
                  Hloubkový průzkum mezi respondenty odhalil zásadní bariéru: stávající fitness
                  aplikace uživatele zahlcují čísly bez kontextu, což vede k demotivaci. Klíčovým
                  zjištěním bylo, že 93,5 % lidí hledá při pohybu primárně „vyčištění hlavy“ a
                  psychický odpočinek, nikoliv překonávání rekordů.
                </p>
                <ZoomableImage
                  src={rozhovoryLagom}
                  alt="Lagom research - rozhovory"
                  className="lagom-process-image lagom-rozhovory-image"
                  ariaLabel="Zvětšit obrázek rozhovory Lagom"
                  width={1800}
                  height={1200}
                  enableFullSizeToggle
                />
                <ZoomableImage
                  src={lagomUserPersona}
                  alt="Lagom user persona"
                  className="lagom-process-image lagom-user-persona-image"
                  ariaLabel="Zvětšit obrázek Lagom user persona"
                />
              </section>

              <section id="idea" className="lagom-heading-section">
                <h2>Idea</h2>
                <p>
                  Řešení stojí na třech pilířích: personalizovaná inspirace k pohybu na základě
                  aktuální energie, srozumitelné vysvětlení odborných metrik (např. VO2 max) a
                  dynamické vizuální prvky, které reflektují denní dobu a počasí pro posílení
                  spojení s přírodou.
                </p>
                <p>
                  První myšlenky jsem formovala formou ručních skic v Procreate. Tento proces mi
                  umožnil rychle iterovat různé způsoby, jak vizualizovat data (např. energii nebo
                  stres), aniž by mě limitovaly konkrétní barvy nebo technické detaily. 
                </p>
                <ZoomableImage
                  src={lagomLoFi}
                  alt="Lagom low fidelity wireframes"
                  className="lagom-process-image lagom-user-persona-image"
                  ariaLabel="Zvětšit obrázek Lagom low fidelity wireframes"
                />
              </section>

              <section id="design" className="lagom-heading-section">
                <h2>Design</h2>
                <p>
                  Finální UI využívá jemnou paletu barev a čistou typografii pro snížení kognitivní
                  zátěže. Klíčovým prvkem jsou srozumitelné widgety s interpretací metrik, které
                  uživateli neradí jen pomocí čísel, ale vysvětlují jejich význam. Rozhraní se
                  dynamicky proměňuje mezi aktivním a klidovým režimem, zatímco interaktivní mapové
                  podklady usnadňují objevování tras. Každá obrazovka prošla procesem iterací na
                  základě uživatelského testování, abych dosáhla maximální srozumitelnosti ovládání
                  i v pohybu.
                </p>
                <div className="lagom-design-gallery">
                  <ZoomableImage
                    src={homepageLagom}
                    alt="Lagom homepage"
                    className="lagom-process-image lagom-user-persona-image"
                    ariaLabel="Zvětšit obrázek Lagom homepage"
                  />
                  <ZoomableImage
                    src={aktivitaLagom}
                    alt="Lagom aktivita"
                    className="lagom-process-image lagom-user-persona-image"
                    ariaLabel="Zvětšit obrázek Lagom aktivita"
                  />
                  <ZoomableImage
                    src={komunitaLagom}
                    alt="Lagom komunita"
                    className="lagom-process-image lagom-user-persona-image"
                    ariaLabel="Zvětšit obrázek Lagom komunita"
                  />
                </div>
              </section>

              <section id="reflexe" className="lagom-heading-section">
                <h2>Reflexe</h2>
                <p>
                  Projekt Lagom mi potvrdil, že UX design není o estetice, ale o správné
                  prioritizaci informací a srozumitelnosti. Největší výzvou bylo najít způsob, jak
                  prezentovat komplexní zdravotní data tak, aby jim porozuměl i laik a nebyl jimi
                  zahlcen.
                </p>
                <p>
                  <strong>Klíčové poznatky:</strong>
                </p>
                <ul className="lagom-list">
                  <li>
                    <strong>Data potřebují kontext:</strong> číslo bez vysvětlení je pro uživatele
                    jen stresový faktor, interpretace je klíčem k motivaci.
                  </li>
                  <li>
                    <strong>Empatie v rozhraní:</strong> design musí respektovat aktuální stav
                    uživatele - jeho únavu i počasí venku.
                  </li>
                </ul>
                <p className="lagom-reflection-next">
                  <strong>Co dál?</strong>
                </p>
                <p>
                  Do budoucna vidím prostor pro rozšíření o dlouhodobé reporty a hlubší zaměření na
                  přístupnost (accessibility). Cílem by bylo otestovat kontrastní poměry v reálném
                  terénu, aby byla aplikace plně funkční i na přímém slunci během outdoorových
                  aktivit.
                </p>
              </section>
              <div className="lagom-cta-block">
                <a
                  className="pdf-link"
                  href="/lagom-ux-case-study.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zobrazit kompletní UX Case Study v PDF
                </a>
              </div>
            </div>
          </div>
          <section className="lagom-next-project" aria-labelledby="lagom-next-project-heading">
            <p className="lagom-next-project-eyebrow">PROJEKTY</p>
            <h2 id="lagom-next-project-heading" className="lagom-next-project-title">
              Další projekt
            </h2>
            <Link
              href="/product-design/projects/psochazky"
              className="lagom-next-project-card"
              aria-label="Otevřít detail projektu Psocházky"
            >
              <div className="lagom-next-project-content">
                <p className="lagom-next-project-kicker">PSOCHÁZKY WEB</p>
                <h3 className="lagom-next-project-headline">Psocházky: Online vizitka pro psí školu</h3>
                <div className="lagom-tags" aria-label="Role projektu Psocházky">
                  <span className="lagom-tag">UX design</span>
                  <span className="lagom-tag">UI design</span>
                  <span className="lagom-tag">Web design</span>
                </div>
                <div className="lagom-next-project-divider" aria-hidden />
                <span className="project-card-cta">
                  <span>Detail projektu</span>
                  <span className="project-card-cta-arrow" aria-hidden>
                    →
                  </span>
                </span>
              </div>
              <div className="lagom-next-project-media" aria-hidden>
                <Image
                  src={psochazkyNotebook}
                  alt="Psocházky - notebook"
                  className="lagom-next-project-image"
                  sizes="(min-width: 900px) 40vw, 100vw"
                />
              </div>
            </Link>
          </section>
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
