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
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-0 pt-20">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-neutral-200/40 dark:bg-neutral-900/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl w-full flex flex-col gap-6 md:gap-8"
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.05]"
        >
          Desenvolvendo sistemas robustos, da infraestrutura à interface.
        </motion.h1>

        {/* Introduction Text */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
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
      </motion.div>
    </section>
  );
}
