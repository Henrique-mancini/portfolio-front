"use client";

import { useState } from "react";
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
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
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

function CertificatePreview({ certificate, large = false }: { certificate: Certificate; large?: boolean }) {
  if (certificate.previewImageUrl && !large) {
    return (
      <div className="relative aspect-[1.42/1] overflow-hidden rounded-md border border-border bg-white">
        <Image
          src={certificate.previewImageUrl}
          alt={`Prévia do certificado ${certificate.title}`}
          fill
          sizes="(min-width: 1024px) 280px, 100vw"
          className="object-contain p-2"
        />
      </div>
    );
  }

  if (certificate.fileUrl) {
    return (
      <div
        className={`overflow-hidden rounded-md border border-border bg-background ${
          large ? "h-[68vh] min-h-[420px]" : "aspect-[1.42/1]"
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

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-border bg-background ${
        large ? "aspect-[1.42/1] p-8 sm:p-10" : "aspect-[1.42/1] p-5"
      }`}
    >
      <div className="absolute inset-3 rounded-sm border border-border/50" />
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
          <h3 className={`${large ? "text-2xl sm:text-3xl" : "text-base"} font-semibold tracking-tight text-foreground`}>
            {certificate.title}
          </h3>
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

        {large && (
          <div className="flex items-end justify-between gap-4 text-[10px] font-medium uppercase tracking-wider text-muted">
            <span>{certificate.issuer}</span>
            <span>{certificate.issuedAt}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificados" className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Certificados
          </h2>
          <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Formação complementar e credenciais
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3"
        >
          {certificates.map((certificate) => (
            <motion.article
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "var(--card-hover-border)" }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative flex flex-col gap-4 rounded-lg border border-border bg-card/70 p-4 text-left shadow-sm shadow-black/[0.03] transition-colors hover:bg-card dark:shadow-none"
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="absolute inset-0 z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                aria-label={`Abrir certificado ${certificate.title}`}
              >
                <span className="sr-only">Abrir certificado {certificate.title}</span>
              </button>

              <CertificatePreview certificate={certificate} />

              <span className="flex min-w-0 flex-col gap-2">
                <span className="break-words text-base font-semibold leading-snug tracking-tight text-foreground">
                  {certificate.title}
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {certificate.description}
                </span>
              </span>

              <span className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              data-backend-file-path={selectedCertificate.backendFilePath}
              className="w-full max-w-4xl rounded-lg border border-border bg-card p-4 shadow-2xl shadow-black/10 sm:p-6"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {selectedCertificate.category}
                  </p>
                  <h3
                    id="certificate-dialog-title"
                    className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                  >
                    {selectedCertificate.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-card-hover-border hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  aria-label="Fechar certificado"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <CertificatePreview certificate={selectedCertificate} large />

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-muted">
                  {selectedCertificate.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                  {selectedCertificate.fileUrl && (
                    <a
                      href={selectedCertificate.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center rounded-full border border-border px-3 text-xs font-semibold text-foreground transition-colors hover:border-card-hover-border hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    >
                      Abrir PDF
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
