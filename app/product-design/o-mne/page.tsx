import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function ProductDesignAboutPage() {
  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        brandTrailCurrentLabel="O mně"
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />

      <section className="content-section" aria-labelledby="about-me-heading">
        <h1 id="about-me-heading" className="content-section-title">
          O mně
        </h1>

        <h2 className="about-clean-subheading">Jak o designu přemýšlím:</h2>

        <div className="project-section">
          <h3>Navigace bez hádání</h3>
          <p className="project-detail-text">
            Rozhraní stavím tak, aby člověk přirozeně věděl, co má udělat dál. Dobrý design je pro mě ten,
            který uživatel nemusí luštit.
          </p>
        </div>

        <div className="project-section">
          <h3>Pořádek a souvislosti</h3>
          <p className="project-detail-text">
            Ráda hledám řád v hromadě informací. Skládám si dílky k sobě, dokud celá logika produktu nepůsobí
            přirozeně.
          </p>
        </div>

        <div className="project-section">
          <h3>Vizuál jako pomocník</h3>
          <p className="project-detail-text">
            Estetika je pro mě důležitá, ale beru ji hlavně jako způsob, jak věci zpřehlednit a zpříjemnit
            jejich používání.
          </p>
        </div>

        <p className="project-detail-text">
          Ve volném čase tvořím pod jménem BAIA, kde kreslím ilustrace a věnuji se autorské tvorbě. Je to pro mě
          skvělý protipól k analytickému UX - učí mě to hlídat si vizuální detail a nezapomínat na to, že design
          má být i radost používat.
        </p>

        <p className="project-detail-text">
          <Link href="/illustration" className="about-clean-link">
            Když zrovna neřeším UX, najdete mě u barev pod značkou BAIA →
          </Link>
        </p>
      </section>
    </main>
  );
}
