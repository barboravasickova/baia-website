import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  id: string;
  projects: Project[];
  locale: "cz" | "en";
  detailLabel: string;
  detailBasePath?: string;
};

export default function Projects({ id, projects, locale, detailLabel, detailBasePath }: ProjectsProps) {
  const homepageOrder = ["lagom-app", "psochazky", "salon-u-potoka"];
  const resolvedDetailBasePath = detailBasePath ?? `/${locale}`;
  const sortedProjects = [...projects].sort((a, b) => {
    const indexA = homepageOrder.indexOf(a.id);
    const indexB = homepageOrder.indexOf(b.id);

    const safeA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
    const safeB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

    return safeA - safeB;
  });

  return (
    <section id={id} className="projects-section">
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            detailHref={`${resolvedDetailBasePath}/projects/${project.id}`}
            detailLabel={detailLabel}
          />
        ))}
      </div>
    </section>
  );
}
