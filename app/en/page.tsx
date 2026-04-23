import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LanguageSwitch from "@/components/LanguageSwitch";
import Projects from "@/components/Projects";
import VisualWork from "@/components/VisualWork";
import { contentByLocale } from "@/data/projects";

export default function EnglishPage() {
  const content = contentByLocale.en;

  return (
    <main className="page">
      <LanguageSwitch locale="en" />
      <Hero
        identityName={content.hero.identityName}
        supporting={content.hero.supporting}
        ctaLabel={content.hero.ctaLabel}
        ctaHref={content.hero.ctaHref}
      />
      <Projects
        id="projects"
        title={content.projectsTitle}
        projects={content.projects}
        locale="en"
        detailLabel="View case study"
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
