"use client";

import { motion, Variants } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  githubUrl?: string;
  githubFrontUrl?: string;
  githubBackUrl?: string;
  liveUrl?: string;
}

const mockProjects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal Full-Stack",
    description: "Este próprio site de portfólio! Criado para demonstrar maturidade arquitetural e técnica de ponta a ponta.",
    tags: ["Next.js", "Spring Boot", "Java", "PostgreSQL", "Framer Motion"],
    role: "Full-Stack Developer",
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

export default function ProjectsGrid() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section id="projetos" className="py-24 border-t border-border/40 px-6 md:px-0">
      <div className="mx-auto max-w-3xl w-full">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Estudos de Caso
          </h2>
          <p className="text-2xl font-bold tracking-tight text-foreground">
            Arquitetura e Projetos Recentes
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {mockProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                borderColor: "var(--card-hover-border)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 hover:bg-card/90 transition-colors duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted/80">
                    {project.role}
                  </span>
                  
                  {/* Decorative Arrow */}
                  <span className="text-muted group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags and Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-border/20">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-neutral-200/40 dark:border-neutral-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-muted hover:text-foreground transition-colors"
                    >
                      Repositório
                    </a>
                  )}
                  {project.githubFrontUrl && (
                    <a
                      href={project.githubFrontUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-muted hover:text-foreground transition-colors"
                    >
                      Repo (Front)
                    </a>
                  )}
                  {project.githubBackUrl && (
                    <a
                      href={project.githubBackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-muted hover:text-foreground transition-colors"
                    >
                      Repo (Back)
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-xs font-medium text-foreground hover:opacity-85 transition-opacity"
                    >
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
