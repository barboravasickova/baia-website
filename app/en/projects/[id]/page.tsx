import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitch from "@/components/LanguageSwitch";
import { contentByLocale, getProjectByLocale } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const content = contentByLocale.en;
  const project = getProjectByLocale("en", id);

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <LanguageSwitch locale="en" labels={content.nav} />
      <Link href="/en" className="back-link">
        Back to homepage
      </Link>

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
    </main>
  );
}
