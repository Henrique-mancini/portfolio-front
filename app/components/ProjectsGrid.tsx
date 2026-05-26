"use client";

import { motion, Variants } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  focus: string[];
  proof: string;
  architecture?: ProjectArchitectureStep[];
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

interface ProjectArchitectureStep {
  label: string;
  value: string;
}

const mockProjects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal Full-Stack",
    description: "Este próprio site de portfólio! Criado para demonstrar maturidade arquitetural e técnica de ponta a ponta.",
    tags: ["Next.js", "Spring Boot", "Java", "PostgreSQL", "Framer Motion"],
    role: "Full-Stack Developer",
    focus: ["App Router", "API REST", "Persistência relacional"],
    proof: "Front-end, back-end e banco pensados como uma vitrine técnica única.",
    architecture: [
      { label: "Front-end", value: "Next.js + Framer Motion" },
      { label: "API", value: "Spring Boot + Java" },
      { label: "Dados", value: "PostgreSQL + Supabase" },
    ],
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
    focus: ["Site institucional", "CMS", "Painel administrativo"],
    proof: "Repositórios segregados para interface pública e gestão de conteúdo.",
    githubFrontUrl: "https://github.com/Henrique-mancini/projeto-site-de-advocacia",
    githubBackUrl: "https://github.com/Henrique-mancini/projeto-site-de-advocacia-cms",
  },
  {
    id: "statistics-usp",
    title: "Estudos de Estatística USP",
    description: "Laboratório de estudos práticos e aplicados em estatística e probabilidade realizados no curso de extensão da USP.",
    tags: ["Python", "Estatística", "Probabilidade", "Notebooks"],
    role: "Data Analyst / Developer",
    focus: ["Probabilidade", "Estatística", "Notebooks"],
    proof: "Estudos aplicados para consolidar fundamentos analíticos e matemáticos.",
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

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
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
  );
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
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
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsGrid() {
  const featuredProject = mockProjects.find((project) => project.featured);
  const secondaryProjects = mockProjects.filter((project) => !project.featured);

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
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-28 px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14 lg:px-0"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 grid gap-5 sm:mb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] lg:items-end">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Estudos de Caso
            </p>
            <h2 id="projects-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Arquitetura e Projetos Recentes
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            Projetos reais organizados por decisão técnica, entrega e stack, com repositórios separados quando a arquitetura pede essa divisão.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-4 sm:gap-5"
        >
          {featuredProject && (
            <motion.article
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "var(--card-hover-border)",
              }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/75 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.78fr)]">
                <div className="flex min-w-0 flex-col justify-between gap-8 p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                          Projeto em destaque
                        </span>
                        <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                          {featuredProject.role}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-card-hover-border group-hover:text-foreground"
                      >
                        <ArrowIcon />
                      </span>
                    </div>

                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        {featuredProject.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                        {featuredProject.description}
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm sm:grid-cols-3">
                      {featuredProject.focus.map((item) => (
                        <div key={item} className="border-l border-border/80 pl-3">
                          <p className="font-semibold tracking-tight text-foreground">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 border-t border-border/40 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <ProjectTags tags={featuredProject.tags} />
                    <ProjectLinks links={getProjectLinks(featuredProject)} />
                  </div>
                </div>

                <div className="border-t border-border/60 bg-background/45 p-5 dark:border-white/10 dark:bg-black/20 sm:p-7 lg:border-l lg:border-t-0">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Arquitetura do caso
                      </p>
                      <div className="mt-5 divide-y divide-border/60">
                        {featuredProject.architecture?.map((step, index) => (
                          <div
                            key={step.label}
                            className="grid grid-cols-[2rem_1fr] gap-3 py-3 first:pt-0 last:pb-0"
                          >
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold leading-none text-muted">
                              {index + 1}
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                                {step.label}
                              </p>
                              <p className="mt-1 text-sm font-semibold text-foreground">
                                {step.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Evidência
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {featuredProject.proof}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  borderColor: "var(--card-hover-border)",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none sm:p-6"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/18 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted">
                        0{index + 2}
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                        {project.role}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-card-hover-border group-hover:text-foreground"
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2 border-l border-border/80 pl-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Foco técnico
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {project.focus.join(" / ")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-border/30 pt-5">
                  <ProjectTags tags={project.tags} />
                  <ProjectLinks links={getProjectLinks(project)} />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
