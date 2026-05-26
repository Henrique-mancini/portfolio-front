"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  category: string;
  description: string;
  skills: string[];
  backendFilePath: string;
  fileUrl?: string;
  previewImageUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: "probability-statistics-usp",
    title: "Fundamentos de Probabilidade e Estatística para Ciência de Dados",
    issuer: "USP / ICMC São Carlos",
    issuedAt: "2026",
    category: "Ciência de Dados",
    description: "Curso de extensão universitária da USP sobre fundamentos estatísticos e probabilísticos aplicados à Ciência de Dados.",
    skills: ["Probabilidade", "Estatística", "Ciência de Dados"],
    backendFilePath: "/api/certificates/probability-statistics-usp/file",
    fileUrl: "/certificates/certificadoDigital.pdf",
    previewImageUrl: "/certificates/certificadoDigital.png",
  },
  {
    id: "java-spring",
    title: "Java e Spring Boot",
    issuer: "Arquivo pendente",
    issuedAt: "Back-end",
    category: "Backend",
    description: "Prévia preparada para certificados de desenvolvimento back-end e APIs REST.",
    skills: ["Java", "Spring Boot", "REST APIs"],
    backendFilePath: "/api/certificates/java-spring/file",
  },
  {
    id: "statistics",
    title: "Estatística Aplicada",
    issuer: "Arquivo pendente",
    issuedAt: "Back-end",
    category: "Dados",
    description: "Prévia preparada para certificados de estatística, probabilidade e análise de dados.",
    skills: ["Estatística", "Probabilidade", "Análise"],
    backendFilePath: "/api/certificates/statistics/file",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 19,
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const previewLines = [100, 86, 72];
const certificateAspectRatio = "aspect-[595/842]";

function OpenIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  );
}

function CertificatePreview({
  certificate,
  large = false,
  preferImage = false,
  compact = false,
}: {
  certificate: Certificate;
  large?: boolean;
  preferImage?: boolean;
  compact?: boolean;
}) {
  if (certificate.previewImageUrl && (!large || preferImage)) {
    return (
      <div
        className={`relative ${certificateAspectRatio} overflow-hidden rounded-md border border-border bg-white shadow-sm shadow-black/[0.04]`}
      >
        <Image
          src={certificate.previewImageUrl}
          alt={`Prévia do certificado ${certificate.title}`}
          fill
          sizes={large ? "(min-width: 1024px) 360px, 84vw" : "(min-width: 1024px) 180px, 45vw"}
          className="object-contain"
          priority={certificate.id === "probability-statistics-usp"}
        />
      </div>
    );
  }

  if (certificate.fileUrl) {
    return (
      <div
        className={`overflow-hidden rounded-md border border-border bg-background shadow-sm shadow-black/[0.04] ${
          large ? "h-[68svh] min-h-[420px]" : certificateAspectRatio
        }`}
      >
        <iframe
          title={`${large ? "Certificado completo" : "Prévia do certificado"} ${certificate.title}`}
          src={`${certificate.fileUrl}#toolbar=${large ? "1" : "0"}&navpanes=0&scrollbar=${large ? "1" : "0"}&view=FitH`}
          className={`h-full w-full bg-background ${large ? "" : "pointer-events-none"}`}
        />
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`relative ${certificateAspectRatio} overflow-hidden rounded-md border border-border bg-background shadow-sm shadow-black/[0.03]`}>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:18px_18px] opacity-[0.16]"
        />
        <div className="absolute inset-2 rounded-sm border border-border/60 bg-card/75" />
        <div className="relative flex h-full flex-col justify-between p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-muted">
            {certificate.category}
          </p>
          <div>
            <span className="block h-1.5 w-10 rounded-full bg-foreground/20" />
            <span className="mt-2 block h-1.5 w-7 rounded-full bg-foreground/12" />
          </div>
          <span className="h-6 w-6 rounded-full border border-foreground/15 bg-foreground/[0.03]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-border bg-background shadow-sm shadow-black/[0.03] ${
        large ? `${certificateAspectRatio} p-8 sm:p-10` : `${certificateAspectRatio} p-4`
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.18]"
      />
      <div className="absolute inset-3 rounded-sm border border-border/60 bg-card/72 backdrop-blur-sm" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              {certificate.category}
            </p>
            <p className={`${large ? "mt-4 text-3xl" : "mt-3 text-lg"} font-semibold tracking-tight text-foreground`}>
              Certificado
            </p>
          </div>
          <div
            aria-hidden="true"
            className={`${large ? "h-16 w-16" : "h-11 w-11"} rounded-full border border-foreground/20 bg-foreground/[0.03]`}
          />
        </div>

        <div>
          <p className={`${large ? "text-2xl sm:text-3xl" : "text-base"} font-semibold tracking-tight text-foreground`}>
            {certificate.title}
          </p>
          <p className={`${large ? "mt-3 text-sm" : "mt-2 text-xs"} text-muted`}>
            Henrique Mancini
          </p>
          <div className={`${large ? "mt-6" : "mt-4"} flex flex-col gap-2`}>
            {previewLines.map((width) => (
              <span
                key={width}
                className="h-1 rounded-full bg-foreground/15"
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 text-[10px] font-medium uppercase tracking-wider text-muted">
          <span>{certificate.issuer}</span>
          <span>{certificate.issuedAt}</span>
        </div>
      </div>
    </div>
  );
}

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const realCertificate = certificates[0];
  const pendingCertificates = certificates.slice(1);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certificados"
      aria-labelledby="certificates-heading"
      className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 grid gap-5 sm:mb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] lg:items-end">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Certificados
            </p>
            <h2 id="certificates-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Formação complementar e credenciais
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            Certificados tratados como evidência profissional: arquivo real quando disponível, prévia leve no card e abertura ampliada para conferência.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.48fr)] lg:items-start"
        >
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "var(--card-hover-border)" }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card/75 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(realCertificate)}
              className="absolute inset-0 z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              aria-label={`Abrir certificado ${realCertificate.title}`}
            >
              <span className="sr-only">Abrir certificado {realCertificate.title}</span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(230px,0.42fr)]">
              <div className="flex min-w-0 flex-col gap-6 p-5 sm:p-7 lg:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground">
                        Arquivo real
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium text-muted">
                        PDF + preview PNG
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-card-hover-border group-hover:text-foreground"
                    >
                      <OpenIcon />
                    </span>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-[1.7rem] lg:text-[2rem]">
                      {realCertificate.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                      {realCertificate.description}
                    </p>
                  </div>

                  <dl className="grid gap-3 text-sm sm:grid-cols-3">
                    <div className="border-l border-border/80 pl-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Instituição
                      </dt>
                      <dd className="mt-1 font-semibold tracking-tight text-foreground">
                        {realCertificate.issuer}
                      </dd>
                    </div>
                    <div className="border-l border-border/80 pl-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Emissão
                      </dt>
                      <dd className="mt-1 font-semibold tracking-tight text-foreground">
                        {realCertificate.issuedAt}
                      </dd>
                    </div>
                    <div className="border-l border-border/80 pl-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Área
                      </dt>
                      <dd className="mt-1 font-semibold tracking-tight text-foreground">
                        {realCertificate.category}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-col gap-4 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <SkillTags skills={realCertificate.skills} />
                  <span className="inline-flex h-8 items-center gap-2 text-xs font-semibold text-foreground">
                    Ver credencial <OpenIcon />
                  </span>
                </div>
              </div>

              <div className="flex border-t border-border/60 bg-background/45 p-5 dark:border-white/10 dark:bg-black/20 sm:p-7 lg:items-center lg:border-l lg:border-t-0">
                <div className="mx-auto w-full max-w-[240px]">
                  <CertificatePreview certificate={realCertificate} large preferImage />
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pendingCertificates.map((certificate) => (
              <motion.article
                key={certificate.id}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "var(--card-hover-border)" }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:bg-card dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="absolute inset-0 z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  aria-label={`Abrir certificado ${certificate.title}`}
                >
                  <span className="sr-only">Abrir certificado {certificate.title}</span>
                </button>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/18 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <div className="w-20 shrink-0">
                    <CertificatePreview certificate={certificate} compact />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                        {certificate.category}
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                        {certificate.issuer}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {certificate.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-border/30 pt-4">
                  <SkillTags skills={certificate.skills} />
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
                    Visualizar estrutura <OpenIcon />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/82 px-4 py-4 backdrop-blur-xl sm:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
            aria-describedby="certificate-dialog-description"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              data-backend-file-path={selectedCertificate.backendFilePath}
              className="flex max-h-[calc(100svh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/10 dark:border-white/10"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-border/70 px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {selectedCertificate.category}
                  </p>
                  <h3
                    id="certificate-dialog-title"
                    className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                  >
                    {selectedCertificate.title}
                  </h3>
                  <p
                    id="certificate-dialog-description"
                    className="mt-2 max-w-3xl text-sm leading-relaxed text-muted"
                  >
                    {selectedCertificate.description}
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xl leading-none text-muted transition-colors hover:bg-background hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  aria-label="Fechar modal de certificado"
                >
                  ×
                </button>
              </div>

              <div className="grid min-h-0 flex-1 gap-0 overflow-y-auto lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.34fr)]">
                <div className="min-h-0 bg-background/45 p-4 sm:p-6">
                  <CertificatePreview certificate={selectedCertificate} large />
                </div>

                <aside className="border-t border-border/70 p-4 sm:p-6 lg:border-l lg:border-t-0">
                  <dl className="grid gap-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Instituição
                      </dt>
                      <dd className="mt-1 font-semibold text-foreground">
                        {selectedCertificate.issuer}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Emissão
                      </dt>
                      <dd className="mt-1 font-semibold text-foreground">
                        {selectedCertificate.issuedAt}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Caminho futuro
                      </dt>
                      <dd className="mt-1 break-all font-mono text-xs leading-relaxed text-muted">
                        {selectedCertificate.backendFilePath}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 border-t border-border/50 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Competências
                    </p>
                    <div className="mt-3">
                      <SkillTags skills={selectedCertificate.skills} />
                    </div>
                  </div>

                  {selectedCertificate.fileUrl && (
                    <a
                      href={selectedCertificate.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    >
                      Abrir PDF <OpenIcon />
                    </a>
                  )}
                </aside>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
