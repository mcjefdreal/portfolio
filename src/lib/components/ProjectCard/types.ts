export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}
