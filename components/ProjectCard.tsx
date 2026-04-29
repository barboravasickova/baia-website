import type { Project } from "@/data/projects";
import lagomPreview from "@/images/lagom_iphone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import atelierFloraPreview from "@/images/atelier-flora-desktop.jpg";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  detailHref: string;
  detailLabel: string;
  reverse?: boolean;
};

export default function ProjectCard({ project, detailHref, detailLabel, reverse = false }: ProjectCardProps) {
  const previewStyleClass = `project-card-media-placeholder project-preview-${project.id}`;
  const previewImageById: Partial<Record<Project["id"], typeof psochazkyPreview>> = {
    "lagom-app": lagomPreview,
    psochazky: psochazkyPreview,
    "kytky-z-melatina": atelierFloraPreview
  };
  const previewImage = previewImageById[project.id];

  return (
    <Link href={detailHref} className={`project-card ${reverse ? "project-card-reverse" : ""}`}>
      <div className="project-card-layout">
        <div className="project-card-media">
          {previewImage ? (
            <Image
              src={previewImage}
              alt={project.previewAlt}
              className="project-card-media-image"
              fill
              sizes="(min-width: 720px) 55vw, 100vw"
            />
          ) : (
            <div className={previewStyleClass} aria-label={project.previewAlt} role="img" />
          )}
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{project.name}</h3>
          <p className="project-type">{project.type}</p>
          <p className="project-card-summary">{project.summary}</p>
          <span className="project-card-cta">
            <span>{detailLabel}</span>
            <span className="project-card-cta-arrow" aria-hidden>
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
