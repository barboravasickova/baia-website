export type IllustrationItem = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
  detailImages?: { src: string; alt: string }[];
  createdAt: string;
};

// Add new images here. Use ISO dates so sorting stays reliable.
// Recommended file location: /public/illustration
export const illustrations: IllustrationItem[] = [
  {
    id: "illustration-doubravka-1",
    src: "/illustration/doubravka-1.webp",
    alt: "Doubravka - ilustrace 1",
    title: "Doubravka & její svět",
    subtitle: "volná tvorba 2025",
    description:
      "Autorská série ilustrací sjednocená do vizuálního světa malé hrdinky, jejího psa a jednoho zvědavého ptáčka. Tyto obrázky vznikly jako volná tvorba inspirovaná dětskou bezprostředností, objevováním přírody a drobnými dobrodružstvími v dešti i slunci. Celý set je navržen tak, aby mohl okamžitě doprovázet dětskou knihu, leporelo nebo edukativní projekt pro nejmenší.",
    detailImages: [
      {
        src: "/illustration/doubravka-1.webp",
        alt: "Doubravka - ilustrace 1"
      },
      {
        src: "/illustration/doubravka-2.webp",
        alt: "Doubravka - ilustrace 2"
      },
      {
        src: "/illustration/doubravka-3.webp",
        alt: "Doubravka - ilustrace 3"
      },
      {
        src: "/illustration/doubravka4.webp",
        alt: "Doubravka - ilustrace 4"
      }
    ],
    createdAt: "2026-05-28T14:30:00"
  },
  {
    id: "evoluce-kvetu",
    src: "/illustration/flower-1-1200.webp",
    alt: "Evoluce květu - ilustrace 1",
    title: "Evoluce květu",
    subtitle: "ilustrační experiment",
    description:
      "Jak moc se změní charakter ilustrace, když změníte nástroj? Tato série mapuje evoluci mých botanických motivů napříč třemi naprosto odlišnými světy.\n\nFáze (Papír): Prvotní impulz, hledání tvaru a naivní stylizace linky v analogovém skicáku.\n\nFáze (Zeď): Fyzický experiment s měřítkem. Přenesení křehkého motivu na surový podklad pomocí sprejů.\n\nFáze (Tablet): Finální destilace toho nejlepšího. Překreslení do digitální podoby, vyladění zemitých barev a poladění jemných detailů.\n\nVýsledný minimalistický herbář těží z každého z těchto kroků a ukazuje, jak se z pouhé čmáranice může stát městský mural i čistý designový produkt.",
    detailImages: [
      { src: "/illustration/flower-1-1200.webp", alt: "Evoluce květu - ilustrace 1" },
      { src: "/illustration/flower-2-1200.webp", alt: "Evoluce květu - ilustrace 2" },
      { src: "/illustration/flower-3-1200.webp", alt: "Evoluce květu - ilustrace 3" },
      { src: "/illustration/flower-4-1200.webp", alt: "Evoluce květu - ilustrace 4" },
      { src: "/illustration/flower-5-1200.webp", alt: "Evoluce květu - ilustrace 5" },
      { src: "/illustration/flower-6-1200.webp", alt: "Evoluce květu - ilustrace 6" },
      { src: "/illustration/flower-7-1200.webp", alt: "Evoluce květu - ilustrace 7" },
      { src: "/illustration/flower-8-1200.webp", alt: "Evoluce květu - ilustrace 8" }
    ],
    createdAt: "2026-05-28T14:25:00"
  },
  {
    id: "zivot-s-tuzkou-a-psem",
    src: "/illustration/pink-1-1200.webp",
    alt: "Život s tužkou a psem - ilustrace 1",
    title: "Život s tužkou a psem",
    subtitle: "volná tvorba 2025",
    description:
      "Vizuální zamyšlení nad tím, jak vypadá každodenní svět za ilustrátorským stolem. Tato ucelená série digitálních skic funguje jako moje vlastní autobiografie, ve které s nadsázkou zachycuji kontrasty svého běžného dne. Na jedné straně stojí hodiny strávené navrhováním u počítače, na straně druhé čistá radost z volné tvorby a sdílení prostoru s neposedným psím parťákem.\n\nCharakteristickým rysem celé kolekce je naivní stylizovaná linka kombinovaná s výrazným růžovým akcentem, který vystupuje z černobílého základu. Každý obrázek je samostatným mikropříběhem, který dává nahlédnout pod pokličku mého tvůrčího procesu a ukazuje, že i obyčejná pracovní rutina může mít svou vlastní, hravou poetiku.",
    detailImages: [
      { src: "/illustration/pink-1-1200.webp", alt: "Život s tužkou a psem - ilustrace 1" },
      { src: "/illustration/pink-2-1200.webp", alt: "Život s tužkou a psem - ilustrace 2" },
      { src: "/illustration/pink-3-1200.webp", alt: "Život s tužkou a psem - ilustrace 3" },
      { src: "/illustration/pink-4-1200.webp", alt: "Život s tužkou a psem - ilustrace 4" },
      { src: "/illustration/pink-5-1200.webp", alt: "Život s tužkou a psem - ilustrace 5" },
      { src: "/illustration/pink-6-1200.webp", alt: "Život s tužkou a psem - ilustrace 6" }
    ],
    createdAt: "2026-05-28T14:28:00"
  },
  {
    id: "vyber-ze-skicaku",
    src: "/illustration/skic-1-1200.webp",
    alt: "Výběr ze skicáku - ilustrace 1",
    title: "Výběr ze skicáku",
    subtitle: "proces a tvůrčí hledání",
    description:
      "Ukázka mé každodenní kreslířské rutiny a hledání vizuálního jazyka. Stránky mých analogových zápisníků jsou plné rychlých skic, testování barevných palet a tvarosloví lidských tváří i zvířecích parťáků.\n\nPropojení naivních ilustrací, ručně psaných poznámek a textur papíru tvoří základ, na kterém stavím svou finální práci. Tento syrový pohled do skicáku ukazuje proces vývoje postav a schopnost zachytit pohyb, výraz a emoci pomocí několika málo tahů tužky a pastelky.",
    detailImages: [
      { src: "/illustration/skic-1-1200.webp", alt: "Výběr ze skicáku - ilustrace 1" },
      { src: "/illustration/skic-2-1200.webp", alt: "Výběr ze skicáku - ilustrace 2" },
      { src: "/illustration/skic-3-1200.webp", alt: "Výběr ze skicáku - ilustrace 3" }
    ],
    createdAt: "2026-05-28T14:27:00"
  }
];

export function getSortedIllustrations(items: IllustrationItem[]): IllustrationItem[] {
  return [...items].sort((a, b) => {
    const aTime = Number(new Date(a.createdAt));
    const bTime = Number(new Date(b.createdAt));
    return bTime - aTime;
  });
}

export function getIllustrationById(id: string): IllustrationItem | undefined {
  return illustrations.find((item) => item.id === id);
}

export function isIllustrationSitePath(pathname: string): boolean {
  if (pathname === "/" || pathname === "/o-mne" || pathname === "/kontakt") {
    return true;
  }
  if (pathname.startsWith("/illustration")) {
    return true;
  }
  const id = pathname.replace(/^\//, "");
  return illustrations.some((item) => item.id === id);
}
