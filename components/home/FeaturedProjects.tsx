import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Divider from "@/components/ui/Divider";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-section">
      <Divider className="mb-12" />
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="text-heading font-bold tracking-tight">Selected Work</h2>
        <Link
          href="/projects"
          className="text-label font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
        >
          All Projects →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stroke border border-stroke">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
