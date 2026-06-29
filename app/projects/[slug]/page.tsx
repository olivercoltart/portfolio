import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        <Link
          href="/projects"
          className="text-label font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
        >
          ← All Projects
        </Link>
      </div>
      <ProjectDetail project={project} />
    </main>
  );
}
