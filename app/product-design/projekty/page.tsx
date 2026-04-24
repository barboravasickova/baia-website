import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import { contentByLocale } from "@/data/projects";
import lagomPreview from "@/images/lagom_iphone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import atelierFloraPreview from "@/images/atelier-flora-desktop.jpg";

const previewImageById = {
  "lagom-app": lagomPreview,
  psochazky: psochazkyPreview,
  "atelier-flora": atelierFloraPreview
} as const;

export default function ProductDesignProjectsPage() {
  const content = contentByLocale.cz;
  const projectsOrder = ["lagom-app", "psochazky"];
  const sortedProjects = [...content.projects].sort((a, b) => {
    const aIndex = projectsOrder.indexOf(a.id);
    const bIndex = projectsOrder.indexOf(b.id);
    const safeA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const safeB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
    return safeA - safeB;
  });

  return (
    <main className="page">
      <LanguageSwitch
        locale="cz"
        showBrandTrail
        brandTrailCurrentLabel="Projekty"
        projectsHref="/product-design/projekty"
        processHref="/product-design/proces"
        aboutHref="/product-design/o-mne"
      />

      <section className="projects-overview" aria-labelledby="projects-overview-heading">
        <h1 id="projects-overview-heading" className="projects-overview-title">
          Projekty
        </h1>

        <div className="projects-overview-grid">
          {sortedProjects.map((project) => {
            const previewImage = previewImageById[project.id as keyof typeof previewImageById];

            return (
              <article key={project.id} className="projects-overview-card">
                {previewImage ? (
                  <Link href={`/product-design/projects/${project.id}`} className="projects-overview-media-link">
                    <Image
                      src={previewImage}
                      alt={project.previewAlt}
                      className="projects-overview-media-image"
                      sizes="(min-width: 1100px) 30vw, (min-width: 760px) 46vw, 100vw"
                    />
                  </Link>
                ) : (
                  <div className="projects-overview-media-fallback" aria-label={project.previewAlt} role="img" />
                )}

                <div className="projects-overview-body">
                  <h2 className="projects-overview-card-title">
                    <Link href={`/product-design/projects/${project.id}`}>{project.name}</Link>
                  </h2>
                  <p className="project-type">{project.type}</p>
                  <p className="projects-overview-summary">{project.summary}</p>
                  <Link href={`/product-design/projects/${project.id}`} className="project-card-cta">
                    <span>Detail projektu</span>
                    <span className="project-card-cta-arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
