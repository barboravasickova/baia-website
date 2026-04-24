import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LanguageSwitch from "@/components/LanguageSwitch";
import MyProcess from "@/components/MyProcess";
import Projects from "@/components/Projects";
import { contentByLocale } from "@/data/projects";
import Link from "next/link";

export default function ProductDesignPage() {
  const content = contentByLocale.cz;

  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />
      <Hero
        identityName={content.hero.identityName}
        supporting={content.hero.supporting}
        statusLabel="Otevřená novým projektům"
        ctaLabel="↓"
        ctaHref={content.hero.ctaHref}
        ctaVariant="arrow"
      />
      <Projects
        id="projekty"
        projects={content.projects}
        locale="cz"
        detailLabel="Detail projektu"
        detailBasePath="/product-design"
      />
      <div className="projects-more-cta-wrap">
        <Link href="/illustration" className="hero-cta">
          Projekty
        </Link>
      </div>
      <MyProcess />
      <About title={content.about.title} text={content.about.text} />
      <Contact
        title={content.contact.title}
        subtitle={content.contact.subtitle}
        email={content.contact.email}
        social={content.contact.social}
      />
    </main>
  );
}
