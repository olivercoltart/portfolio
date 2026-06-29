import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of software and product projects by Oliver Coltart.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-section">
      <h1 className="text-heading font-black tracking-tight mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stroke border border-stroke">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
