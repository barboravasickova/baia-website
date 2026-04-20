export type Locale = "cz" | "en";

export type ProjectSection = {
  heading: string;
  content: string;
};

export type Project = {
  id: string;
  name: string;
  type: string;
  summary: string;
  /** Náhled na kartě projektu (soubor ve /public). */
  previewImage: string;
  previewAlt: string;
  /** Volitelný odkaz na PDF case study (soubor ve složce /public). */
  caseStudyPdf?: {
    href: string;
    label: string;
  };
  sections: ProjectSection[];
};

export type VisualWorkSet = {
  title: string;
  description: string;
  /** Počet prázdných náhledových polí v řadě (3 nebo 4). */
  previewSlots: number;
};

export type SiteContent = {
  nav: {
    cz: string;
    en: string;
  };
  hero: {
    identityName: string;
    identityRole: string;
    headlineLines: [string, string];
    supporting: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  projectsTitle: string;
  projects: Project[];
  visual: {
    title: string;
    intro: string;
    sets: VisualWorkSet[];
  };
  about: {
    title: string;
    text: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    social: { label: string; href: string }[];
  };
};

export const contentByLocale: Record<Locale, SiteContent> = {
  cz: {
    nav: { cz: "CZ", en: "EN" },
    hero: {
      identityName: "Barbora Vašíčková",
      identityRole: "UX / Product Designer",
      headlineLines: ["Navrhuji digitální produkty,", "které dávají smysl a dobře se používají."],
      supporting: [
        "Kombinuji UX myšlení s vizuálním stylem,\naby rozhraní byla srozumitelná a zapamatovatelná.",
        "Tvořím pod jménem BAIA."
      ],
      ctaLabel: "Zobrazit projekty",
      ctaHref: "#projekty"
    },
    projectsTitle: "Projekty",
    projects: [
      {
        id: "psochazky",
        name: "Psocházky",
        type: "UX / Web Design",
        summary: "Web pro trenérku psů zaměřený na zjednodušení komunikace s klienty",
        previewImage: "/projects/preview-psochazky.svg",
        previewAlt: "Psocházky – náhled webu",
        sections: [
          {
            heading: "Overview",
            content:
              "Psocházky\n\nWeb pro trenérku psů zaměřený na zjednodušení komunikace s klienty\n\nMoje role: UX / UI design, návrh struktury, realizace webu\nCíl: vytvořit přehledné místo, které vysvětluje službu a vede uživatele ke kontaktu"
          },
          {
            heading: "Problém",
            content:
              "Klienti neměli jedno místo, kde by našli všechny potřebné informace o službách.\n\nTo vedlo k:\n\n- opakujícím se dotazům\n- nejasnému pochopení nabídky\n- zdlouhavé komunikaci přes zprávy\n\n👉 Uživatelé často nevěděli, co mají udělat jako další krok."
          },
          {
            heading: "Insight",
            content:
              "Z komunikace s klientkou vyplynulo, že většina dotazů se opakuje a týká se základních informací o službě.\n\n👉 Problém nebyl v samotné nabídce, ale v tom, jak byla komunikována."
          },
          {
            heading: "Cíl",
            content:
              "- zpřehlednit informace\n- snížit množství opakujících se dotazů\n- zjednodušit rozhodování uživatele\n- vytvořit jasnou cestu ke kontaktu"
          },
          {
            heading: "Řešení",
            content:
              "Navrhla jsem web, který:\n\n- strukturuje obsah podle potřeb uživatele\n- odpovídá na nejčastější otázky přímo na stránce\n- vede uživatele k jasné akci\n- působí přehledně a důvěryhodně"
          },
          {
            heading: "Klíčová rozhodnutí",
            content:
              "1. Struktura podle reálných dotazů\nObsah jsem uspořádala podle toho, na co se klienti nejčastěji ptají, aby si informace dokázali dohledat sami bez nutnosti další komunikace.\n\n2. Jednoduchost místo zahlcení\nUpřednostnila jsem přehlednou strukturu a omezené množství informací, aby uživatel rychle pochopil, co služba nabízí.\n\n3. Jasná cesta k akci\nDo návrhu jsem zahrnula prvky, které vedou uživatele k dalšímu kroku (kontakt nebo rezervace).\n\n4. Integrace rezervačního systému\nNapojení na Booqito umožnilo uživatelům přihlásit se samostatně bez nutnosti komunikace s klientkou."
          },
          {
            heading: "Proces",
            content:
              "- návrh struktury webu\n- definice obsahu\n- návrh UI\n- realizace webu v prostředí Cursor"
          },
          {
            heading: "Výsledek",
            content:
              "👉 www.psochazky.cz\n\nWeb slouží jako hlavní komunikační nástroj pro klienty a prezentuje služby přehledně a srozumitelně."
          },
          {
            heading: "Outcome",
            content:
              "Po spuštění webu začali klienti přicházet lépe informovaní a často již neměli doplňující dotazy.\n\nNapříklad jedna z nových klientek si sama dohledala všechny potřebné informace na webu a kontaktovala trenérku přímo bez nutnosti dalšího vysvětlování.\n\nDíky napojení na rezervační systém se uživatelé mohou přihlásit samostatně bez asistence.\n\n👉 Web tak snížil potřebu opakované komunikace a ušetřil čas při domlouvání služeb."
          },
          {
            heading: "Reflexe",
            content:
              "Co bych dnes zlepšila:\n\n- silnější výzvy k akci (CTA)\n- výraznější vizuální hierarchii\n- lepší strukturování textu pro rychlé skenování\n\nTento projekt mi ukázal, jak velký dopad má správně strukturovaný obsah na chování uživatele."
          }
        ]
      },
      {
        id: "lagom-app",
        name: "Lagom App",
        type: "UX Case Study",
        summary:
          "UX case study mobilní aplikace zaměřené na vyvážený pohyb a duševní pohodu.",
        previewImage: "/projects/preview-lagom.svg",
        previewAlt: "Lagom App – náhled mobilního UI",
        caseStudyPdf: {
          href: "/lagom-ux-case-study.pdf",
          label: "Otevřít PDF case study (Lagom)"
        },
        sections: [
          {
            heading: "Kontext",
            content:
              "Projekt vznikl v rámci UX kurzu Czechitas jako návrh mobilní aplikace podporující zdravý pohyb a duševní pohodu."
          },
          {
            heading: "Problém",
            content:
              "Existující fitness aplikace se zaměřují hlavně na výkon a data, ale často:\n- zahlcují uživatele informacemi\n- nevysvětlují význam dat\n- vytváří tlak na výkon místo podpory\n\nUživatelům chybí aplikace, která by spojovala pohyb s duševní pohodou a motivací."
          },
          {
            heading: "Cíl",
            content:
              "- propojit fyzickou aktivitu s duševní rovnováhou\n- zpřehlednit a vysvětlit data\n- zvýšit motivaci k pohybu\n- vytvořit přívětivé a srozumitelné rozhraní"
          },
          {
            heading: "Výzkum",
            content:
              "Metody\n- hloubkové rozhovory\n- dotazník (30+ respondentů)\n\nKlíčové poznatky:\n- lidé hledají spíše \"vyčištění hlavy\" než výkon\n- data bez kontextu jsou matoucí\n- počasí a únava výrazně ovlivňují motivaci\n- uživatelé chtějí jednoduchost a srozumitelnost"
          },
          {
            heading: "Řešení",
            content:
              "Navrhla jsem aplikaci, která:\n- interpretuje data místo jejich pouhého zobrazování\n- motivuje uživatele k pohybu přirozenou formou\n- nabízí personalizované tipy a inspiraci\n- podporuje klidný a neagresivní přístup ke zdraví"
          },
          {
            heading: "Proces",
            content:
              "Analýza a strategie\n- analýza konkurence\n- definice problému\n- vytvoření persony\n\nNávrh\n- low-fidelity wireframy\n- návrh struktury aplikace\n- návrh UI ve Figmě\n\nTestování\n- uživatelské testování prototypu\n- iterace návrhu"
          },
          {
            heading: "Výsledek",
            content:
              "Finální návrh aplikace obsahuje:\n- jasné tlačítko pro zahájení aktivity\n- přehlednější strukturu dat\n- vysvětlení jednotlivých metrik\n- personalizované a motivující prvky\n- vizuální styl inspirovaný přírodou"
          },
          {
            heading: "Reflexe",
            content:
              "Co jsem se naučila:\n- UX není jen o vizuálu, ale o prioritizaci informací\n- uživatel potřebuje data chápat, ne jen vidět\n\nCo bych zlepšila:\n- testování na větším vzorku uživatelů\n- lepší přístupnost (kontrast, čitelnost)\n- rozšíření o dlouhodobé přehledy dat"
          }
        ]
      },
      {
        id: "coming-soon",
        name: "Coming Soon",
        type: "Nový projekt",
        summary: "Nyní pracuji na novém projektu.",
        previewImage: "/projects/preview-coming-soon.svg",
        previewAlt: "Nový projekt – náhled připravujeme",
        sections: []
      }
    ],
    visual: {
      title: "Ilustrace a vizuální komunikace",
      intro:
        "Vizuální styl vnímám jako nástroj, který pomáhá uživatelům lépe chápat a používat produkt.",
      sets: [
        {
          title: "UX States",
          description:
            "Ilustrace pro stavy v rozhraní, které pomáhají uživateli lépe pochopit situaci a zmírnit frustraci.",
          previewSlots: 4
        },
        {
          title: "Microcopy & Visuals",
          description:
            "Kombinace ilustrace a textu pro srozumitelnou komunikaci s uživatelem v klíčových momentech.",
          previewSlots: 3
        }
      ]
    },
    about: {
      title: "O mně",
      text: [
        "Jsem Barbora Vašíčková (BAIA) a věnuji se UX a vizuálnímu designu.",
        "Baví mě hledat způsoby, jak věci zjednodušit a udělat je pro lidi srozumitelnější. Nejvíc mi dává smysl práce, kde můžu pomoct tomu, aby se uživatelé při používání produktu cítili jistěji a nebyli zbytečně frustrovaní.",
        "Vadí mi momenty, kdy člověk neví, co má udělat dál nebo proč se něco děje. Proto se snažím navrhovat rozhraní tak, aby vedla přirozeně krok za krokem a dávala smysl i bez přemýšlení.",
        "Při práci si sbírám informace, hledám souvislosti, kreslím návrhy a postupně je upravuji, dokud to celé nezačne fungovat.",
        "K tomu mám blízko i k vizuální stránce, kterou beru jako způsob, jak věci ještě víc zpřehlednit a zpříjemnit."
      ]
    },
    contact: {
      title: "Napište mi",
      subtitle: "Těším se na spolupráci.",
      email: "vasickovabara@gmail.com",
      social: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/barbora-vasickova/" }]
    }
  },
  en: {
    nav: { cz: "CZ", en: "EN" },
    hero: {
      identityName: "Barbora Vašíčková",
      identityRole: "UX / Product Designer",
      headlineLines: ["I design digital products", "that make sense and feel natural to use."],
      supporting: [
        "I combine UX thinking with visual craft\nso interfaces stay clear and memorable.",
        "I work under the name BAIA."
      ],
      ctaLabel: "View projects",
      ctaHref: "#projects"
    },
    projectsTitle: "Projects",
    projects: [
      {
        id: "psochazky",
        name: "Psocházky",
        type: "Branding + Web Design",
        summary: "Dog walking brand with logo design and a website built in Cursor.",
        previewImage: "/projects/preview-psochazky.svg",
        previewAlt: "Psocházky – website preview",
        sections: [
          {
            heading: "Problem",
            content:
              "The service needed a trustworthy and friendly brand presence that clients could understand at a glance."
          },
          {
            heading: "Solution",
            content:
              "I created a visual identity and a clear website that explains the service, value, and booking flow."
          },
          {
            heading: "Process",
            content:
              "From logo sketches and style exploration to a simple website implementation in Cursor, with focus on clarity."
          },
          {
            heading: "Outcome",
            content:
              "The final result is a consistent brand and practical website that supports credibility and easy communication."
          }
        ]
      },
      {
        id: "lagom-app",
        name: "Lagom App",
        type: "UX Case Study",
        summary: "Mobile app for balanced lifestyle, created during the Czechitas UX course.",
        previewImage: "/projects/preview-lagom.svg",
        previewAlt: "Lagom App – mobile UI preview",
        caseStudyPdf: {
          href: "/lagom-ux-case-study.pdf",
          label: "Open PDF case study (Lagom)"
        },
        sections: [
          {
            heading: "Problem",
            content:
              "Many users struggle to maintain a healthy movement routine without pressure, complexity, or burnout."
          },
          {
            heading: "Research",
            content:
              "I analyzed user needs, pain points, and motivation patterns to define practical opportunities for the product."
          },
          {
            heading: "User Flow",
            content:
              "I designed the journey from onboarding to daily use, keeping key actions predictable and easy to complete."
          },
          {
            heading: "Wireframes",
            content:
              "Low-fidelity screens helped validate information architecture and interaction logic before visual polishing."
          },
          {
            heading: "UI Design",
            content:
              "The interface uses calm visual language, clear hierarchy, and reusable components for consistent experience."
          },
          {
            heading: "Outcome",
            content:
              "The case study demonstrates UX decision-making and shows how visual design supports user goals."
          }
        ]
      },
      {
        id: "coming-soon",
        name: "Coming Soon",
        type: "New project",
        summary: "Currently working on a new project.",
        previewImage: "/projects/preview-coming-soon.svg",
        previewAlt: "New project – preview placeholder",
        sections: []
      }
    ],
    visual: {
      title: "Illustration and visual communication",
      intro:
        "I treat visual style as a tool that helps people understand a product and use it with more confidence.",
      sets: [
        {
          title: "UX States",
          description:
            "Illustrations for interface states that help users understand what is happening and reduce frustration.",
          previewSlots: 4
        },
        {
          title: "Microcopy & Visuals",
          description:
            "Pairing illustration with copy to communicate clearly with users at critical moments.",
          previewSlots: 3
        }
      ]
    },
    about: {
      title: "About",
      text: [
        "I am BAIA, a UX & Visual Designer.",
        "I combine illustration principles with digital product design to create clear and engaging experiences.",
        "My goal is to design products that are useful, understandable, and visually consistent."
      ]
    },
    contact: {
      title: "Contact me",
      subtitle: "Let’s work together.",
      email: "vasickovabara@gmail.com",
      social: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/barbora-vasickova/" }]
    }
  }
};

export function getProjectByLocale(locale: Locale, id: string) {
  return contentByLocale[locale].projects.find((project) => project.id === id);
}
