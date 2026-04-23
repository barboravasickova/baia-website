import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LanguageSwitch from "@/components/LanguageSwitch";
import MyProcess from "@/components/MyProcess";
import Projects from "@/components/Projects";
import { contentByLocale } from "@/data/projects";

export default function ProductDesignPage() {
  const content = contentByLocale.cz;

  return (
    <main className="page">
      <LanguageSwitch locale="cz" />
      <Hero
        identityName={content.hero.identityName}
        supporting={content.hero.supporting}
        ctaLabel={content.hero.ctaLabel}
        ctaHref={content.hero.ctaHref}
      />
      <Projects
        id="projekty"
        projects={content.projects}
        locale="cz"
        detailLabel="Detail projektu"
        detailBasePath="/product-design"
      />
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
