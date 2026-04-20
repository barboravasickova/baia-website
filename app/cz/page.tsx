import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LanguageSwitch from "@/components/LanguageSwitch";
import Projects from "@/components/Projects";
import VisualWork from "@/components/VisualWork";
import { contentByLocale } from "@/data/projects";

export default function CzechPage() {
  const content = contentByLocale.cz;

  return (
    <main className="page">
      <LanguageSwitch locale="cz" labels={content.nav} />
      <Hero
        identityName={content.hero.identityName}
        identityRole={content.hero.identityRole}
        headlineLines={content.hero.headlineLines}
        supporting={content.hero.supporting}
        ctaLabel={content.hero.ctaLabel}
        ctaHref={content.hero.ctaHref}
      />
      <Projects
        id="projekty"
        title={content.projectsTitle}
        projects={content.projects}
        locale="cz"
        detailLabel="Zobrazit detail projektu"
      />
      <VisualWork title={content.visual.title} intro={content.visual.intro} sets={content.visual.sets} />
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
