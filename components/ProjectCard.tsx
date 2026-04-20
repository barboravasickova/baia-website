import type { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  detailHref: string;
  detailLabel: string;
};

export default function ProjectCard({ project, detailHref, detailLabel }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-layout">
        <div className="project-card-media">
          <img
            className="project-card-img"
            src={project.previewImage}
            alt={project.previewAlt}
            loading="lazy"
            decoding="async"
          />
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
