"use client";

import { motion, Variants } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  featured?: boolean;
  githubUrl?: string;
  githubFrontUrl?: string;
  githubBackUrl?: string;
  liveUrl?: string;
}

interface ProjectLink {
  label: string;
  href: string;
  ariaLabel: string;
}

const mockProjects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal Full-Stack",
    description: "Este próprio site de portfólio! Criado para demonstrar maturidade arquitetural e técnica de ponta a ponta.",
    tags: ["Next.js", "Spring Boot", "Java", "PostgreSQL", "Framer Motion"],
    role: "Full-Stack Developer",
    featured: true,
    githubFrontUrl: "https://github.com/Henrique-mancini/portfolio-front",
    githubBackUrl: "https://github.com/Henrique-mancini/portfolio-back",
  },
  {
    id: "lawyer-portfolio",
    title: "Site de Advocacia e CMS",
    description: "Plataforma de portfólio e gerenciamento de conteúdo sob medida para estudante de direito, com painel administrativo integrado.",
    tags: ["React", "Next.js", "CMS", "REST API", "Tailwind CSS"],
    role: "Full-Stack Developer",
    githubFrontUrl: "https://github.com/Henrique-mancini/projeto-site-de-advocacia",
    githubBackUrl: "https://github.com/Henrique-mancini/projeto-site-de-advocacia-cms",
  },
  {
    id: "statistics-usp",
    title: "Estudos de Estatística USP",
    description: "Laboratório de estudos práticos e aplicados em estatística e probabilidade realizados no curso de extensão da USP.",
    tags: ["Python", "Estatística", "Probabilidade", "Notebooks"],
    role: "Data Analyst / Developer",
    githubUrl: "https://github.com/Henrique-mancini/estudos-estatistica-usp",
  },
];

const getProjectLinks = (project: Project): ProjectLink[] => {
  const links: ProjectLink[] = [];

  if (project.githubUrl) {
    links.push({
      label: "Repositório",
      href: project.githubUrl,
      ariaLabel: `Abrir repositório do projeto ${project.title}`,
    });
  }

  if (project.githubFrontUrl) {
    links.push({
      label: "Front-end",
      href: project.githubFrontUrl,
      ariaLabel: `Abrir repositório front-end do projeto ${project.title}`,
    });
  }

  if (project.githubBackUrl) {
    links.push({
      label: "Back-end",
      href: project.githubBackUrl,
      ariaLabel: `Abrir repositório back-end do projeto ${project.title}`,
    });
  }

  if (project.liveUrl) {
    links.push({
      label: "Demo",
      href: project.liveUrl,
      ariaLabel: `Abrir demonstração do projeto ${project.title}`,
    });
  }

  return links;
};

export default function ProjectsGrid() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 32, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 19,
      },
    },
  };

  return (
    <section id="projetos" className="scroll-mt-28 px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14 lg:px-0">
      <div className="mx-auto max-w-4xl w-full">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-10 sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Estudos de Caso
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Arquitetura e Projetos Recentes
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2"
        >
          {mockProjects.map((project) => {
            const links = getProjectLinks(project);
            const isFeatured = project.featured === true;

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: "var(--card-hover-border)",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className={`group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:shadow-none sm:p-6 ${
                  isFeatured ? "lg:col-span-2 lg:min-h-[300px] lg:p-8" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {isFeatured && (
                        <span className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                          Destaque
                        </span>
                      )}
                      <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                        {project.role}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-card-hover-border group-hover:text-foreground"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H8M17 7V16"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className={isFeatured ? "max-w-2xl" : ""}>
                    <h3
                      className={`font-semibold tracking-tight text-foreground ${
                        isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-3 text-muted leading-relaxed ${
                        isFeatured ? "text-base sm:text-lg" : "text-sm sm:text-base"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags and Action Links */}
                <div className="mt-8 flex flex-col gap-5 border-t border-border/30 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="inline-flex h-8 items-center rounded-full border border-border px-3 text-xs font-semibold text-foreground transition-colors hover:border-card-hover-border hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
