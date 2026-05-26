"use client";

import { motion, Variants } from "framer-motion";

const stackHighlights = [
  {
    label: "Backend",
    value: "Java + Spring Boot",
  },
  {
    label: "Interface",
    value: "Next.js + React",
  },
  {
    label: "Dados",
    value: "PostgreSQL + SQL",
  },
];

const architectureLayers = [
  {
    label: "Interface",
    title: "Next.js",
    detail: "React, TypeScript, Tailwind",
  },
  {
    label: "API",
    title: "Spring Boot",
    detail: "Java, REST, Validation",
  },
  {
    label: "Persistência",
    title: "PostgreSQL",
    detail: "Supabase, JPA, SQL",
  },
];

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative isolate flex flex-col overflow-hidden px-6 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-0 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.82fr)] lg:items-start"
      >
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3.5 py-1 text-xs font-medium text-muted shadow-sm shadow-black/[0.03] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para novos projetos
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Sistemas robustos,{" "}
            <span className="block text-foreground/80">
              da infraestrutura à interface.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Olá, eu sou o <span className="font-medium text-foreground">Henrique</span>. Estudo Engenharia de Software e crio soluções completas utilizando arquiteturas robustas em <strong className="font-semibold text-foreground">Spring Boot (Java)</strong>, persistência de alto desempenho com <strong className="font-semibold text-foreground">PostgreSQL (Supabase)</strong> e experiências de usuário ultrafluidas com <strong className="font-semibold text-foreground">Next.js</strong>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 pt-1 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#projetos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground shadow-sm transition-opacity duration-200 hover:opacity-90"
            >
              Explorar Projetos
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#contato"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/70 px-8 text-sm font-semibold text-foreground shadow-sm shadow-black/[0.02] transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              Falar Comigo
            </motion.a>
          </motion.div>

          <motion.dl
            variants={itemVariants}
            className="grid gap-4 border-y border-border/60 py-4 text-sm sm:grid-cols-3"
          >
            {stackHighlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.label}
                </dt>
                <dd className="font-semibold tracking-tight text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.32, type: "spring", stiffness: 120, damping: 20 }}
          aria-label="Resumo visual da arquitetura full-stack"
          className="relative hidden overflow-hidden rounded-xl border border-border/80 bg-card/90 shadow-2xl shadow-black/[0.06] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] lg:block"
        >
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-3.5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Arquitetura
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Fluxo full-stack preparado para API real
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              build-ready
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="divide-y divide-border/60">
              {architectureLayers.map((layer, index) => (
                <div
                  key={layer.label}
                  className="grid grid-cols-[2.25rem_8.5rem_minmax(0,1fr)] gap-x-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="mt-1 inline-flex h-6 min-h-6 w-6 min-w-6 items-center justify-center rounded-full border border-border bg-background text-[11px] font-semibold leading-none text-muted">
                    {index + 1}
                  </span>
                  <span className="pt-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                    {layer.label}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold tracking-tight text-foreground">
                      {layer.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {layer.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-border bg-background/90 dark:border-white/10 dark:bg-black/30">
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[11px] text-muted">portfolio-api</span>
              </div>
              <div className="space-y-2 px-4 py-3.5 font-mono text-xs leading-relaxed">
                <p className="text-muted">
                  <span className="text-foreground">GET</span> /api/projects
                </p>
                <p className="text-muted">
                  <span className="text-emerald-600 dark:text-emerald-400">200 OK</span> JSON tipado para UI
                </p>
                <p className="text-muted">
                  PostgreSQL <span className="text-foreground">via</span> JPA/Hibernate
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
