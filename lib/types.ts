export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  coverImage?: string;
  images?: { src: string; size?: "small" | "large" }[];
  year: number;
  featured: boolean;
}

export interface Role {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  result: string;
}

export interface CV {
  roles: Role[];
  education: Education[];
  skills: string[];
}
