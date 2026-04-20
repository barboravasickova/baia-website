import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  id: string;
  title: string;
  projects: Project[];
  locale: "cz" | "en";
  detailLabel: string;
};

export default function Projects({ id, title, projects, locale, detailLabel }: ProjectsProps) {
  const homepageOrder = ["lagom-app", "psochazky"];
  const sortedProjects = [...projects].sort((a, b) => {
    const indexA = homepageOrder.indexOf(a.id);
    const indexB = homepageOrder.indexOf(b.id);

    const safeA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
    const safeB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

    return safeA - safeB;
  });

  return (
    <section id={id} className="projects-section">
      <h2 className="projects-section-title">{title}</h2>
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            detailHref={`/${locale}/projects/${project.id}`}
            detailLabel={detailLabel}
          />
        ))}
      </div>
    </section>
  );
}
