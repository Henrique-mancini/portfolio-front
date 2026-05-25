"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-24 lg:min-h-[92vh] lg:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-4xl flex-col gap-6 sm:gap-8"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex">
          <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3.5 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para novos projetos
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Desenvolvendo sistemas robustos, da infraestrutura à interface.
        </motion.h1>

        {/* Introduction Text */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Olá, eu sou o <span className="text-foreground font-medium">Henrique</span>. Estudo Engenharia de Software e crio soluções completas utilizando arquiteturas robustas em <strong className="font-semibold text-foreground">Spring Boot (Java)</strong>, persistência de alto desempenho com <strong className="font-semibold text-foreground">PostgreSQL (Supabase)</strong> e experiências de usuário ultrafluidas com <strong className="font-semibold text-foreground">Next.js</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            href="#projetos"
            className="flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground shadow-sm hover:opacity-90 transition-opacity duration-200"
          >
            Explorar Projetos
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            href="#contato"
            className="flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-semibold text-foreground hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            Falar Comigo
          </motion.a>
        </motion.div>

        <motion.dl
          variants={itemVariants}
          className="grid max-w-4xl grid-cols-1 gap-3 pt-4 text-sm sm:grid-cols-3 sm:pt-6"
        >
          <div className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card/35 p-4">
            <dt className="font-semibold text-foreground">Backend</dt>
            <dd className="leading-relaxed text-muted">Java, Spring Boot e APIs REST.</dd>
          </div>
          <div className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card/35 p-4">
            <dt className="font-semibold text-foreground">Interface</dt>
            <dd className="leading-relaxed text-muted">Next.js, React e Tailwind CSS.</dd>
          </div>
          <div className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card/35 p-4">
            <dt className="font-semibold text-foreground">Dados</dt>
            <dd className="leading-relaxed text-muted">PostgreSQL, SQL e análise estatística.</dd>
          </div>
        </motion.dl>
      </motion.div>
    </section>
  );
}
