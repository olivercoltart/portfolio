import type { Project } from "@/lib/types";
import Tag from "@/components/ui/Tag";
import ExternalLink from "@/components/ui/ExternalLink";
import Divider from "@/components/ui/Divider";
import ImageGrid from "@/components/projects/ImageGrid";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-7xl mx-auto px-6 md:px-8 py-section">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-label text-muted">{project.year}</span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <h1 className="text-heading font-black tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-subhead text-muted leading-relaxed mb-8">
          {project.tagline}
        </p>

        <Divider className="mb-8" />

        <p className="text-body leading-relaxed mb-10">{project.description}</p>

        <div className="flex flex-wrap gap-4">
          {project.url && (
            <ExternalLink
              href={project.url}
              className="inline-flex items-center gap-1 text-label font-medium tracking-widest uppercase border border-stroke px-5 py-3 hover:bg-surface transition-colors"
            >
              Live Site
            </ExternalLink>
          )}
          {project.repo && (
            <ExternalLink
              href={project.repo}
              className="inline-flex items-center gap-1 text-label font-medium tracking-widest uppercase border border-stroke px-5 py-3 hover:bg-surface transition-colors"
            >
              Repository
            </ExternalLink>
          )}
        </div>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-10">
          <ImageGrid images={project.images} />
        </div>
      )}
    </article>
  );
}
