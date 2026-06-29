import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "game",
    title: "Game Development: Country Race",
    tagline:
      "Developed a novel educational game using the Godot game engine.",
    description:
      "For this project, I designed and developed a plane navigation game using the Godot game engine, written in GD Script. The game was designed to be a fast-paced, mission-driven experience, with the aim of making learning European country locations and capital cities enjoyable and engaging. Players control their airplane using the arrow keys on their computer around an interactive map of Europe.",
    tags: ["Godot", "GD Script", "Vercel"],
    url: "https://plane-game-git-main-olis-projects-8c7a958a.vercel.app/plane-game.html",
    repo: "https://github.com/olivercoltart/plane-game",
    coverImage: "/projects/game/airplane.svg",
    images: [
      { src: "/projects/game/instructions.jpg" },
      { src: "/projects/game/instructions2.jpg" },
      { src: "/projects/game/mona_lisa_brief.jpg" },
      { src: "/projects/game/Screenshot%202026-06-26%20164243.png" },
      { src: "/projects/game/Screenshot%202026-06-26%20164316.png" },
      { src: "/projects/game/Screenshot%202026-06-26%20164342.png" },
      { src: "/projects/game/Screenshot%202026-06-26%20164420.png" },
      { src: "/projects/game/zoomed_in_example.png" },
    ],
    year: 2026,
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    tagline:
      "This site was developed to showcase my project and skills as a Software Engineer and Product developer.",
    description:
      "A personal portfolio site showcasing my work as a software engineer and product developer. Built with Next.js App Router, TypeScript, and Tailwind CSS v4. All pages are statically generated at build time, with a server-side contact form powered by Resend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "CI/CD"],
    repo: "https://github.com/olivercoltart/portfolio",
    coverImage: "",
    year: 2026,
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Short one-line description of your second project.",
    description:
      "Replace this with a real description of your project. What problem does it solve? Who uses it? What was interesting or challenging about building it? Add as much detail as you like — this is the content shown on the project detail page.",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "https://example.com",
    repo: "https://github.com/olivercoltart/project-two",
    coverImage: "",
    year: 2024,
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Short one-line description of your third project.",
    description:
      "Replace this with a real description of your project. What problem does it solve? Who uses it? What was interesting or challenging about building it?",
    tags: ["Python", "FastAPI", "React"],
    repo: "https://github.com/olivercoltart/project-three",
    coverImage: "",
    year: 2024,
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
