import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-background p-8 hover:bg-surface transition-colors"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-label text-muted">{project.year}</span>
        <span className="text-label font-medium tracking-widest uppercase text-muted group-hover:text-foreground transition-colors">
          View →
        </span>
      </div>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-subhead font-bold mb-2">{project.title}</h3>
          <p className="text-body text-muted leading-relaxed mb-6">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        {project.coverImage && (
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
