"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      category: "Backend & Core",
      items: ["Java", "Spring Boot", "Lógica de Programação", "APIs RESTful", "JPA / Hibernate"],
    },
    {
      category: "Frontend & UI",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Dados & Ciência",
      items: ["Banco de Dados (SQL)", "Ciência de Dados", "PostgreSQL", "Análise Estatística"],
    },
  ];

  return (
    <section id="sobre" className="py-24 border-t border-border/40 px-6 md:px-0">
      <div className="mx-auto max-w-3xl w-full">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Sobre Mim
          </h2>
          <p className="text-2xl font-bold tracking-tight text-foreground">
            Formação e Competências
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-10">
          {/* Bio paragraph */}
          <div className="text-base sm:text-lg text-muted leading-relaxed flex flex-col gap-4">
            <p>
              Sou Henrique Mancini, estudante de Engenharia de Software e desenvolvedor web. Construo aplicações modernas, rápidas e escaláveis utilizando tecnologias como Next.js, React e Java com Spring Boot.
            </p>
            <p>
              Com sólidos conhecimentos em lógica de programação, banco de dados (SQL) e fundamentos de Ciência de Dados, busco sempre entregar soluções eficientes do back-end ao front-end.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/20">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-foreground tracking-tight">
                  {skillGroup.category}
                </h4>
                <ul className="flex flex-col gap-2">
                  {skillGroup.items.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 dark:bg-foreground/40" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
