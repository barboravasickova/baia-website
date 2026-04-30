import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import ProjectCaseNav from "@/components/ProjectCaseNav";
import ProjectCarousel from "@/components/ProjectCarousel";
import ZoomableImage from "@/components/ZoomableImage";
import { contentByLocale, getProjectByLocale } from "@/data/projects";
import lagomPhoneHand from "@/images/lagom-phone-hand.jpg";
import lagomIphone from "@/images/lagom_iphone.jpg";
import lagomAktivita from "@/images/lagom-aktivita.jpg";
import aktivitaLagom from "@/images/aktivita-lagom.jpg";
import rozhovoryLagom from "@/images/rozhovory-lagom.jpg";
import lagomUserPersona from "@/images/lagom-user-persona.jpg";
import lagomLoFi from "@/images/lagom-lo-fi.jpg";
import lagomHomepage from "@/images/lagom-homepage.png";
import komunitaLagom from "@/images/komunita-lagom.jpg";
import psochazkyFullPage from "@/images/psochazky_full_page.jpg";
import psochazkyDesktop from "@/images/psochazky_desktop.jpg";
import psochazkyPhone from "@/images/psochazky_phone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import psochazkyFbCollage from "@/images/psochazky-fb-collage.jpg";
import psochazkyUserFlow from "@/images/psochazky-user-flow.jpg";
import psochazkyDesign from "@/images/psochazky-design.png";
import psochazkyLoFi from "@/images/psochazky-lo-fi.jpg";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectByLocale("cz", id);

  if (!project) {
    return {
      title: "Projekt nenalezen"
    };
  }

  return {
    title: `${project.name} - Product Design`
  };
}

type ProjectConfig = {
  title: string;
  eyebrow: string;
  tags: string[];
  lead: string;
  role: string[];
  tools: string[];
  timeline: string;
  context: string;
  projectIntro: string[];
  introAside?: { title: string; meta: string; definition: string };
  introImage: { src: StaticImageData | string; alt: string; ariaLabel: string; className?: string };
  research: ProjectSectionConfig;
  idea: ProjectSectionConfig;
  design: ProjectSectionConfig;
  reflection: ProjectSectionConfig;
  cta?: { label: string; href: string };
  carouselSlides: { src: StaticImageData | string; alt: string }[];
};

type ProjectSectionConfig = {
  paragraphs: string[];
  list?: string[];
  listHeading?: string;
  afterListHeading?: string;
  afterList?: string;
  images?: {
    src: StaticImageData | string;
    alt: string;
    ariaLabel: string;
    caption?: string;
    className?: string;
    width?: number;
    height?: number;
    enableFullSizeToggle?: boolean;
  }[];
};

const projectsOrder = ["lagom-app", "psochazky", "salon-u-potoka"] as const;

const projectConfigById: Record<(typeof projectsOrder)[number], ProjectConfig> = {
  "lagom-app": {
    title: "Aplikace pro pohyb v rovnováze",
    eyebrow: "Lagom App",
    tags: ["Health", "Tech", "UX Design", "UI Design", "Case Study"],
    lead:
      "Lagom motivuje k objevování nových tras a učí uživatele rozumět vlastnímu tělu. Interpretuje zdravotní data lidskou řečí a mění statistiky v užitečnou inspiraci pro každý den.",
    role: ["UX/UI Design"],
    tools: ["Figma", "Procreate", "Miro", "Google Forms", "Google Docs", "Zoom"],
    timeline: "říjen 2025 - leden 2026",
    context: "Projekt vznikl v rámci UX kurzu Czechitas.",
    projectIntro: [
      "Lagom dává pohybu smysl. Je to empatický digitální společník navržený pro ty, kteří hledají rovnováhu mezi aktivitou a duševní pohodou.",
      "Namísto tlaku na rekordy motivuje k objevování nových tras a interpretuje zdravotní data lidskou řečí. Projekt vznikl s vizí vytvořit rozhraní, které uživatele nepředbíhá, ale provází."
    ],
    introAside: {
      title: "Lagom",
      meta: "(adv.) | Sweedish | [ˈlɑːgom]",
      definition: "Not too little, not too much. Just Right."
    },
    introImage: {
      src: lagomPhoneHand,
      alt: "Lagom App na telefonu v ruce",
      ariaLabel: "Zvětšit obrázek Lagom App na telefonu",
      className: "project-process-image project-intro-image"
    },
    research: {
      paragraphs: [
        "Hloubkový průzkum mezi respondenty odhalil zásadní bariéru: stávající fitness aplikace uživatele zahlcují čísly bez kontextu, což vede k demotivaci. Klíčovým zjištěním bylo, že 93,5 % lidí hledá při pohybu primárně „vyčištění hlavy“ a psychický odpočinek, nikoliv překonávání rekordů."
      ],
      images: [
        {
          src: rozhovoryLagom,
          alt: "Lagom research - rozhovory",
          ariaLabel: "Zvětšit obrázek rozhovory Lagom",
          className: "project-process-image project-rozhovory-image",
          width: 1800,
          height: 1200,
          enableFullSizeToggle: true
        },
        {
          src: lagomUserPersona,
          alt: "Lagom user persona",
          ariaLabel: "Zvětšit obrázek Lagom user persona",
          className: "project-process-image project-user-persona-image"
        }
      ]
    },
    idea: {
      paragraphs: [
        "Řešení stojí na třech pilířích: personalizovaná inspirace k pohybu na základě aktuální energie, srozumitelné vysvětlení odborných metrik (např. VO2 max) a dynamické vizuální prvky, které reflektují denní dobu a počasí pro posílení spojení s přírodou.",
        "První myšlenky jsem formovala formou ručních skic v Procreate. Tento proces mi umožnil rychle iterovat různé způsoby, jak vizualizovat data."
      ],
      images: [
        {
          src: lagomLoFi,
          alt: "Lagom low fidelity wireframes",
          ariaLabel: "Zvětšit obrázek Lagom low fidelity wireframes",
          className: "project-process-image project-user-persona-image"
        }
      ]
    },
    design: {
      paragraphs: [
        "Finální UI využívá jemnou paletu barev a čistou typografii pro snížení kognitivní zátěže. Klíčovým prvkem jsou srozumitelné widgety s interpretací metrik, které uživateli neradí jen pomocí čísel, ale vysvětlují jejich význam.",
        "Rozhraní se dynamicky proměňuje mezi aktivním a klidovým režimem, zatímco interaktivní mapové podklady usnadňují objevování tras."
      ],
      images: [
        {
          src: lagomHomepage,
          alt: "Lagom homepage",
          ariaLabel: "Zvětšit obrázek Lagom homepage",
          className: "project-process-image project-user-persona-image"
        },
        {
          src: aktivitaLagom,
          alt: "Lagom aktivita",
          ariaLabel: "Zvětšit obrázek Lagom aktivita",
          className: "project-process-image project-user-persona-image"
        },
        {
          src: komunitaLagom,
          alt: "Lagom komunita",
          ariaLabel: "Zvětšit obrázek Lagom komunita",
          className: "project-process-image project-user-persona-image"
        }
      ]
    },
    reflection: {
      paragraphs: [
        "Projekt Lagom mi potvrdil, že UX design není o estetice, ale o správné prioritizaci informací a srozumitelnosti.",
        "Největší výzvou bylo najít způsob, jak prezentovat komplexní zdravotní data tak, aby jim porozuměl i laik a nebyl jimi zahlcen."
      ],
      listHeading: "Klíčové poznatky:",
      list: [
        "Data potřebují kontext: číslo bez vysvětlení je pro uživatele jen stresový faktor, interpretace je klíčem k motivaci.",
        "Empatie v rozhraní: design musí respektovat aktuální stav uživatele - jeho únavu i počasí venku."
      ],
      afterListHeading: "Co dál?",
      afterList:
        "Do budoucna vidím prostor pro rozšíření o dlouhodobé reporty a hlubší zaměření na přístupnost (accessibility). Cílem by bylo otestovat kontrastní poměry v reálném terénu, aby byla aplikace plně funkční i na přímém slunci během outdoorových aktivit."
    },
    cta: { label: "Zobrazit kompletní UX Case Study v PDF", href: "/lagom-ux-case-study.pdf" },
    carouselSlides: [
      { src: lagomPhoneHand, alt: "Lagom App náhled v ruce" },
      { src: lagomIphone, alt: "Lagom App náhled rozhraní" },
      { src: lagomAktivita, alt: "Lagom App náhled obrazovky aktivit" }
    ]
  },
  psochazky: {
    title: "Online vizitka pro psí školu",
    eyebrow: "Psocházky",
    tags: ["Logo Design", "UX Design", "UI Design", "Web Design", "Service Website"],
    lead:
      "Webová prezentace pro trenérku psů zaměřená na práci s reaktivními a nejistými psy. Cílem bylo vytvořit prostředí, které snižuje stres už při prvním kontaktu a zároveň efektivně vede uživatele k poptávce služby.",
    role: ["Logo design", "UX/UI Design", "Struktura obsahu", "Realizace"],
    tools: ["Adobe Illustrator", "Figma", "Cursor"],
    timeline: "leden - březen 2026",
    context:
      "Projekt vznikl jako kompletní realizace webu na klíč — od definice služby až po spuštění na doméně.",
    projectIntro: [
      "Psocházky jsou služba zaměřená na socializaci a trénink reaktivních nebo nejistých psů v reálném prostředí. Projekt vznikl jako digitální zázemí pro trenérku Šárku, která pomáhá majitelům zvládat náročné situace při každodenních procházkách.",
      "Hlavním cílem bylo vytvořit jedno ucelené a přehledné místo, kde klienti najdou všechny důležité informace o službě, jejím principu i průběhu spolupráce. Do té doby komunikace probíhala převážně ve Facebook skupině, která byla obsahově roztříštěná a pro nové zájemce obtížně uchopitelná.",
      "Web proto nejen jasně vysvětluje princip tréninku „v pohybu“ a odlišuje službu od běžného venčení psů nebo klasických cvičišť, ale zároveň přináší strukturovaný obsah a logickou cestu k poptávce a rezervaci služeb."
    ],
    introImage: {
      src: psochazkyFullPage,
      alt: "Psocházky - detail webu",
      ariaLabel: "Zvětšit obrázek projektu Psocházky",
      className: "project-process-image project-intro-image project-intro-image--psochazky"
    },
    research: {
      paragraphs: [
        "Původní komunikace probíhala primárně v uzavřené Facebookové skupině. Pro majitele reaktivních psů, kteří jsou často ve stresu a hledají rychlé pochopení, však bylo toto prostředí bariérou.",
        "V rámci UX strategie jsem se zaměřila na:"
      ],
      list: [
        "Jasnou definici: Okamžité určení, pro koho je služba vhodná, aby majitel neztrácel čas.",
        "Edukaci: Srozumitelné vysvětlení rozdílu mezi pouhým venčením a odborným tréninkem.",
        "Empatii: Odstranění obav z odsouzení nebo pocitu selhání, které tito majitelé často zažívají na klasických cvičištích."
      ],
      afterList:
        "Web tak slouží jako první krok ke zklidnění a vybudování důvěry ještě před první schůzkou.",
      images: [
        {
          src: psochazkyFbCollage,
          alt: "Psocházky - původní komunikace ve Facebook skupině",
          ariaLabel: "Zvětšit koláž původní komunikace Psocházky",
          caption:
            "Původní roztříštěná struktura informací na sociálních sítích, která ztěžovala orientaci novým zájemcům."
        }
      ]
    },
    idea: {
      paragraphs: [
        "Hlavním motivem se stal klid, kontrola a bezpečí.",
        "Chtěla jsem vytvořit prostředí, které nepůsobí jako výcvikový tlak, ale jako průvodce. Web se stává místem, kde uživatel rychle pochopí, že jeho situace má řešení.",
        "Struktura webu je navržená tak, aby odpovídala reálným situacím uživatelů, ne jen výčtu služeb. Důraz je kladen na postupné vedení k akci bez zahlcení informacemi."
      ],
      images: [
        {
          src: psochazkyUserFlow,
          alt: "Psocházky - user flow",
          ariaLabel: "Zvětšit user flow projektu Psocházky"
        }
      ]
    },
    design: {
      paragraphs: [
        "Vizuální styl vychází z přirozeného prostředí, ve kterém trénink probíhá. Tlumené barvy, dostatek prostoru a jednoduchá typografie podporují pocit klidu a přehlednosti."
      ],
      list: [
        "jasné rozdělení služeb (skupinové procházky vs. individuální lekce)",
        "rychlou orientaci v obsahu",
        "minimalizaci kroků k poptávce"
      ],
      afterList:
        "Web je navržen mobile-first — s ohledem na to, že uživatelé často hledají informace přímo během procházek.",
      images: [
        {
          src: psochazkyLoFi,
          alt: "Psocházky - lo-fi návrh",
          ariaLabel: "Zvětšit lo-fi návrh projektu Psocházky"
        },
        {
          src: psochazkyDesign,
          alt: "Psocházky - návrh designu",
          ariaLabel: "Zvětšit návrh designu projektu Psocházky",
          className: "project-process-image project-design-image--psochazky"
        }
      ]
    },
    reflection: {
      paragraphs: [
        "Při práci na Psocházkách jsem si uvědomila, jak moc může design ovlivnit vnímání služby, která byla dříve 'schovaná' v chaosu Facebooku. Klíčem k úspěchu bylo pochopení kontextu, ve kterém se uživatel nachází — často unavený a hledající pomoc. Odnáším si zkušenost, že i technicky jednoduchý web může mít obrovský dopad, pokud mluví k uživateli jazykem, kterému v danou chvíli rozumí."
      ]
    },
    cta: { label: "Zobrazit web psochazky.cz v novém okně", href: "https://psochazky.cz" },
    carouselSlides: [
      { src: psochazkyFullPage, alt: "Psocházky - full page náhled" },
      { src: psochazkyDesktop, alt: "Psocházky - desktop náhled" },
      { src: psochazkyPhone, alt: "Psocházky - phone náhled" }
    ]
  },
  "salon-u-potoka": {
    title: "Nová identita & Web pro psí salon",
    eyebrow: "Salon U Potoka",
    tags: ["Rebrand", "UX optimalizace", "Lokální služba"],
    lead:
      "Modernizace zastaralé identity místního psího salonu se zaměřením na vybudování důvěry, přehlednost služeb a zachování historického odkazu značky.",
    role: ["UX/UI Design", "Rebrand", "Struktura webu"],
    tools: ["Figma", "Adobe Illustrator", "Cursor"],
    timeline: "Připravuje se",
    context: "Projekt je aktuálně ve fázi přípravy obsahu a vizuálních podkladů.",
    projectIntro: ["Detail case study bude doplněn po dokončení realizace."],
    introImage: {
      src: "/projects/preview-coming-soon.svg",
      alt: "Salon U Potoka - připravovaný projekt",
      ariaLabel: "Zvětšit náhled projektu Salon U Potoka",
      className: "project-process-image project-intro-image"
    },
    research: { paragraphs: ["Obsah sekce připravujeme."] },
    idea: { paragraphs: ["Obsah sekce připravujeme."] },
    design: { paragraphs: ["Obsah sekce připravujeme."] },
    reflection: { paragraphs: ["Obsah sekce připravujeme."] },
    carouselSlides: [{ src: "/projects/preview-coming-soon.svg", alt: "Salon U Potoka - náhled" }]
  }
};

function renderList(items: string[]) {
  return (
    <ul className="project-info-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function renderSectionContent(section: ProjectSectionConfig) {
  return (
    <>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.listHeading ? <p><strong>{section.listHeading}</strong></p> : null}
      {section.list ? (
        <ul className="project-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
      ) : null}
      {section.afterListHeading ? (
        <p className="project-reflection-next">
          <strong>{section.afterListHeading}</strong>
        </p>
      ) : null}
      {section.afterList ? <p className="project-list-followup">{section.afterList}</p> : null}
      {section.images
        ? section.images.map((image) => (
            <div key={`${image.alt}-${image.ariaLabel}`} className="project-section-image-block">
              <ZoomableImage
                src={image.src}
                alt={image.alt}
                className={image.className ?? "project-process-image"}
                ariaLabel={image.ariaLabel}
                width={image.width}
                height={image.height}
                enableFullSizeToggle={image.enableFullSizeToggle}
              />
              {image.caption ? <p className="project-image-caption">{image.caption}</p> : null}
            </div>
          ))
        : null}
    </>
  );
}

export default async function ProductDesignProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectByLocale("cz", id);

  if (!project) {
    notFound();
  }

  const projectConfig =
    projectConfigById[project.id as (typeof projectsOrder)[number]] ?? projectConfigById["salon-u-potoka"];
  const breadcrumbCurrentLabel = project.id === "lagom-app" ? "Lagom App" : project.name;
  const currentProjectOrderIndex = projectsOrder.indexOf(project.id as (typeof projectsOrder)[number]);
  const nextProjectId =
    currentProjectOrderIndex !== -1 && currentProjectOrderIndex < projectsOrder.length - 1
      ? projectsOrder[currentProjectOrderIndex + 1]
      : null;
  const nextProject = nextProjectId
    ? contentByLocale.cz.projects.find((projectItem) => projectItem.id === nextProjectId)
    : null;

  const getNextProjectPreview = (projectId: string) => {
    if (projectId === "psochazky") {
      return psochazkyPreview;
    }
    return contentByLocale.cz.projects.find((projectItem) => projectItem.id === projectId)?.previewImage;
  };

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

      <article className="project-case-study">
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="project-eyebrow">{projectConfig.eyebrow}</p>
            <h1 className="project-title">{projectConfig.title}</h1>
            <div className="project-tags" aria-label="Project tags">
              {projectConfig.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="project-lead">{projectConfig.lead}</p>
          </div>

          <ProjectCarousel slides={projectConfig.carouselSlides} ariaLabel={`Náhledy projektu ${project.name}`} />

          <section className="project-info-columns" aria-label={`Shrnutí projektu ${project.name}`}>
            <div className="project-info-card">
              <h2>ROLE</h2>
              {renderList(projectConfig.role)}
            </div>
            <div className="project-info-card">
              <h2>NÁSTROJE</h2>
              {renderList(projectConfig.tools)}
            </div>
            <div className="project-info-card">
              <h2>TIMELINE</h2>
              <p>{projectConfig.timeline}</p>
            </div>
            <div className="project-info-card">
              <h2>KONTEXT</h2>
              <p>{projectConfig.context}</p>
            </div>
          </section>
        </section>

        <div className="project-layout">
          <ProjectCaseNav />

          <div className="project-content">
            <section id="o-projektu" className="project-heading-section">
              <h2>O projektu</h2>
              {projectConfig.projectIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className={`project-intro-grid${projectConfig.introAside ? "" : " project-intro-grid--single"}`}>
                <ZoomableImage
                  src={projectConfig.introImage.src}
                  alt={projectConfig.introImage.alt}
                className={projectConfig.introImage.className ?? "project-process-image project-intro-image"}
                  ariaLabel={projectConfig.introImage.ariaLabel}
                  width={1400}
                  height={980}
                />
                {projectConfig.introAside ? (
                  <aside className="project-word-card" aria-label={`Význam slova ${projectConfig.introAside.title}`}>
                    <h3 className="project-word-title">{projectConfig.introAside.title}</h3>
                    <p className="project-word-meta">{projectConfig.introAside.meta}</p>
                    <p className="project-word-definition">{projectConfig.introAside.definition}</p>
                  </aside>
                ) : null}
              </div>
            </section>

            <section id="research" className="project-heading-section">
              <h2>Research</h2>
              {renderSectionContent(projectConfig.research)}
            </section>

            <section id="idea" className="project-heading-section">
              <h2>Idea</h2>
              {renderSectionContent(projectConfig.idea)}
            </section>

            <section id="design" className="project-heading-section">
              <h2>Design</h2>
              {projectConfig.design.images && projectConfig.design.images.length > 1 ? (
                <>
                  {projectConfig.design.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {projectConfig.design.list ? (
                    <ul className="project-list">{projectConfig.design.list.map((item) => <li key={item}>{item}</li>)}</ul>
                  ) : null}
                  {projectConfig.design.afterList ? <p className="project-list-followup">{projectConfig.design.afterList}</p> : null}
                  <div
                    className={`project-design-gallery${
                      project.id === "lagom-app" ? " project-design-gallery--single-row" : ""
                    }`}
                  >
                    {projectConfig.design.images.map((image) => (
                      <ZoomableImage
                        key={`${image.alt}-${image.ariaLabel}`}
                        src={image.src}
                        alt={image.alt}
                        className={image.className ?? "project-process-image"}
                        ariaLabel={image.ariaLabel}
                        width={image.width}
                        height={image.height}
                        enableFullSizeToggle={image.enableFullSizeToggle}
                      />
                    ))}
                  </div>
                </>
              ) : (
                renderSectionContent(projectConfig.design)
              )}
            </section>

            <section id="reflexe" className="project-heading-section">
              <h2>Reflexe</h2>
              {renderSectionContent(projectConfig.reflection)}
            </section>

            {projectConfig.cta ? (
              <div className="project-cta-block">
                <a className="pdf-link" href={projectConfig.cta.href} target="_blank" rel="noopener noreferrer">
                  {projectConfig.cta.label}
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {nextProject ? (
          <section className="project-next-project" aria-labelledby="project-next-project-heading">
            <p className="project-next-project-eyebrow">PROJEKTY</p>
            <h2 id="project-next-project-heading" className="project-next-project-title">
              Další projekt
            </h2>
            <Link
              href={`/product-design/projects/${nextProject.id}`}
              className="project-next-project-card"
              aria-label={`Otevřít detail projektu ${nextProject.name}`}
            >
              <div className="project-next-project-content">
                <p className="project-next-project-kicker">{nextProject.name.toUpperCase()}</p>
                <h3 className="project-next-project-headline">
                  {projectConfigById[nextProject.id as (typeof projectsOrder)[number]]?.title ?? nextProject.name}
                </h3>
                <div className="project-tags" aria-label={`Role projektu ${nextProject.name}`}>
                  <span className="project-tag">{nextProject.type}</span>
                </div>
                <div className="project-next-project-divider" aria-hidden />
                <span className="project-card-cta">
                  <span>Detail projektu</span>
                  <span className="project-card-cta-arrow" aria-hidden>
                    →
                  </span>
                </span>
              </div>
              <div className="project-next-project-media" aria-hidden>
                <Image
                  src={getNextProjectPreview(nextProject.id) ?? nextProject.previewImage}
                  alt={nextProject.previewAlt}
                  className="project-next-project-image"
                  sizes="(min-width: 900px) 40vw, 100vw"
                  width={1280}
                  height={920}
                />
              </div>
            </Link>
          </section>
        ) : null}
      </article>
    </main>
  );
}
