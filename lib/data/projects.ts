import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "game",
    title: "Country Race: Game Development",
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
    slug: "seating-algorithm",
    title: "Airplane Seating Allocation Algorithm",
    tagline: "A full-stack application that allocates seats based on user inputs.",
    description:
      "This university project involved developing a full-stack web application that automatically assigns airplane seats based on a custom set of business rules. The system handles individual and group bookings for up to 7 passengers across VIP, Standard, Disabled, and Under-10 seating categories, assigning window or aisle seats to solo travellers and adjacent same-row seats to groups. The seating plan includes a No Children Zone and disability-accessible aisle seats. An admin override feature allows seats to be manually reassigned or cancelled, bypassing the algorithm's rules. Built using a plan-driven iterative approach with TDD via Jest, the project covers the full SDLC including UML system modelling, REST API design, database integration, and a responsive booking UI.",
    tags: ["React", "Next.js", "Node.js", "Jest", "TypeScript", "Prisma ORM", "SQLite"],
    repo: "https://github.com/olivercoltart/AS3-seatAllocation",
    coverImage: "",
    images: [
      { src: "/projects/SeatingAlgorithm/HomeScreen.png" },
      { src: "/projects/SeatingAlgorithm/SeatTypeSelection.png" },
      { src: "/projects/SeatingAlgorithm/FullSeatingPlan.png" },
      { src: "/projects/SeatingAlgorithm/AdminOverride.png" },
    ],
    year: 2025,
    featured: true,
  },
  {
    slug: "quiz-app",
    title: "Quiz App: Agile DevOps Group Project",
    tagline: "A full-stack quiz application developed as a group, including a CI/CD pipeline.",
    description:
      "This project involved developing a full-stack quiz application in a team of four, using Agile Kanban practices, built and iterated across three versioned releases. The development process followed a feature branch Git workflow with pull request reviews, and included a Jenkins CI/CD pipeline that automatically ran the Vitest test suite inside a Docker container on each build. My role covered Agile coaching and DevOps engineering, including configuring the Jenkins pipeline and Dockerized environment.",
    tags: ["React", "JavaScript", "Node.js", "Express.js", "Vite", "Vitest", "Jest", "Docker", "Jenkins", "Postman"],
    repo: "https://github.com/olivercoltart/ase2-quiz",
    coverImage: "",
    images: [
      { src: "/projects/quiz/SignUp.png" },
      { src: "/projects/quiz/Login.png" },
      { src: "/projects/quiz/Home.png" },
      { src: "/projects/quiz/QuestionTimer.png" },
      { src: "/projects/quiz/Score.png" },
      { src: "/projects/quiz/Incorrect.png" },
    ],
    year: 2025,
    featured: true,
  },
  {
    slug: "machine-learning",
    title: "Diabetes Predictor: Machine Learning",
    tagline: "Developed machine learning models used to predict whether individuals would develop diabetes from features in a medical database.",
    description:
      "This machine learning group project involved analysing the Pima Indians Diabetes dataset to predict diabetes outcomes from medical features. The work covered exploratory data analysis, data cleaning (KNN imputation, outlier assessment, duplicate removal), and bias investigation. Several models were trained and compared, including: Logistic Regression, Decision Tree, Random Forest, and Support Vector Machine.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
    coverImage: "",
    year: 2025,
    featured: true,
  },
  {
    slug: "pen-test",
    title: "Penetration Test: Cyber Security",
    tagline: "A full vulnerability assessment and penetration test conducted against a simulated corporate network (SOA Enterprises)",
    description:
      "Working across a host-only isolated lab of four VMs (Kali attacker, Metasploitable, Windows 10 + WebGoat, Kali + DVWA), this project combined network reconnaissance, port scanning, automated vulnerability and web application scanning, manual exploitation validation, and packet capture analysis to identify and verify real security weaknesses, including a critical vsftpd backdoor, outdated SSH/Apache services, and missing HTTP security headers. The report concludes with prioritised mitigation recommendations, an assessment of the target organisation's incident response maturity, and a discussion of the legal and ethical boundaries observed throughout testing.",
    tags: ["Oracle VirtualBox", "Kali Linux", "WebGoat", "Metasploitable", "Nmap", "OpenVAS", "Wireshark", "Nikto", "Burp Suite"],
    year: 2025,
    featured: false,
  },
  {
    slug: "knowledge-network",
    title: "Digital Knowledge Network Application",
    tagline: "A full-stack web application built for Velion Dynamics Consultants",
    description:
      "This university project involved implementing a Digital Knowledge Network for Velion Dynamics, a fictional case-study, designed to solve organisational knowledge management challenges. The system was built on a modular client-server architecture, with a React frontend communicating via RESTful APIs to a Node.js/Express backend, using Prisma ORM to manage a PostgreSQL database. The application implements role-based access control across four user types (Consultants, Knowledge Champions, the Knowledge Governance Council, and Data Protection Officers), supporting a full resource lifecycle from submission and review/approval, through governance auditing and data compliance verification, to searchable publication. JWT-based authentication secures protected endpoints, and the system was deployed end-to-end in production, with the backend and managed PostgreSQL database hosted on Render and the React frontend deployed as a static site on Netlify.",
    tags: ["Node.js", "Express.js (REST API)", "PostgreSQL", "Prisma ORM", "JWT authentication", "Netlify ", "React"],
    url: "https://earnest-baklava-9360ff.netlify.app/",
    repo: "https://github.com/olivercoltart/digital-knowledge-network/tree/main",
    year: 2025,
    featured: false,
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    tagline:
      "This site was developed to showcase my projects and skills as a Software Engineer and Product developer.",
    description:
      "A personal portfolio site showcasing my work as a software engineer and product developer. Built with Next.js App Router, TypeScript, and Tailwind CSS v4. All pages are statically generated at build time, with a server-side contact form powered by Resend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "CI/CD"],
    repo: "https://github.com/olivercoltart/portfolio",
    coverImage: "",
    year: 2026,
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
