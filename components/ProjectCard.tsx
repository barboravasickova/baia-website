import type { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  detailHref: string;
  detailLabel: string;
  reverse?: boolean;
};

export default function ProjectCard({ project, detailHref, detailLabel, reverse = false }: ProjectCardProps) {
  const previewStyleClass = `project-card-media-placeholder project-preview-${project.id}`;

  return (
    <article className={`project-card ${reverse ? "project-card-reverse" : ""}`}>
      <div className="project-card-layout">
        <div className="project-card-media">
          <div className={previewStyleClass} aria-label={project.previewAlt} role="img" />
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{project.name}</h3>
          <p className="project-type">{project.type}</p>
          <p className="project-card-summary">{project.summary}</p>
          <Link href={detailHref} className="project-card-cta">
            <span>{detailLabel}</span>
            <span className="project-card-cta-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
