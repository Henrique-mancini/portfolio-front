"use client";

import { motion, type Variants } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "prefeitura-jf",
    role: "Desenvolvedor de Software / Estagiário",
    company: "Prefeitura de Juiz de Fora",
    period: "Junho de 2026 — Atualmente",
    location: "Juiz de Fora, MG",
    description: "Responsável pela manutenção e otimização do portal institucional da Prefeitura de Juiz de Fora, além de atuar no desenvolvimento de sistemas internos e novos projetos sob demanda utilizando variadas tecnologias.",
    achievements: [
      "Manutenção preventiva e corretiva no portal principal da prefeitura desenvolvido em PHP, JavaScript, HTML e CSS.",
      "Desenvolvimento de projetos paralelos internos, adaptando-se a novas stacks tecnológicas de acordo com as necessidades específicas de cada sistema.",
      "Garantia de padrões de acessibilidade e performance nos sites e páginas de serviços ao cidadão."
    ],
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Web Development", "Git", "Sistemas Legados"]
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
    },
  },
};

const dotVariants: Variants = {
  hover: {
    scale: 1.3,
    backgroundColor: "var(--foreground)",
    borderColor: "var(--foreground)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)",
  },
};

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 grid gap-5 sm:mb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] lg:items-end">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Trajetória
            </p>
            <h2
              id="experience-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Experiência Profissional e Acadêmica
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            Aplicações desenvolvidas de ponta a ponta, engenharia aplicada a produtos digitais e solidez analítica com foco estatístico.
          </p>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-border/70 ml-2.5 md:ml-4 pl-6 md:pl-10 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Animated Timeline Point */}
              <motion.div
                variants={dotVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -left-[31px] md:-left-[47px] top-6 z-10 h-3 w-3 rounded-full border-2 border-border bg-background transition-colors duration-300 group-hover:border-foreground"
                aria-hidden="true"
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -5, borderColor: "var(--card-hover-border)" }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="relative overflow-hidden rounded-lg border border-border bg-card/75 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none sm:p-7 lg:p-8"
              >
                {/* Horizontal Gradient Top Border line on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Header Info */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-foreground/80">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end text-xs font-medium font-mono text-muted">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {exp.description}
                </p>

                {/* Key Deliverables/Achievements */}
                <div className="mt-5 border-t border-border/40 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                    Principais Entregas e Realizações
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills/Tags */}
                <div className="mt-6 border-t border-border/30 pt-5 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
