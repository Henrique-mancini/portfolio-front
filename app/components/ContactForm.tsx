"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactMethod {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: "mail" | "pin" | "linkedin" | "github";
  ariaLabel?: string;
}

type FormField = keyof FormState;
type FormStatus = "idle" | "loading" | "success" | "error";

const fieldErrorIds: Record<FormField, string> = {
  name: "contact-name-error",
  email: "contact-email-error",
  message: "contact-message-error",
};

const contactMethods: ContactMethod[] = [
  {
    label: "E-mail",
    value: "henrique.malafaia@gmail.com",
    href: "mailto:henrique.malafaia@gmail.com",
    icon: "mail",
    ariaLabel: "Enviar email para Henrique Malafaia",
  },
  {
    label: "Localização",
    value: "Juiz de Fora, MG, Brasil",
    icon: "pin",
  },
  {
    label: "LinkedIn",
    value: "henriquemancinii",
    href: "https://www.linkedin.com/in/henriquemancinii",
    external: true,
    icon: "linkedin",
    ariaLabel: "Abrir LinkedIn de Henrique Mancini",
  },
  {
    label: "GitHub",
    value: "Henrique-mancini",
    href: "https://github.com/Henrique-mancini",
    external: true,
    icon: "github",
    ariaLabel: "Abrir GitHub de Henrique Mancini",
  },
];

const simulateContactRequest = () =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, 1400);
  });

function ContactIcon({ icon }: { icon: ContactMethod["icon"] }) {
  const sharedProps = {
    "aria-hidden": true,
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  if (icon === "mail") {
    return (
      <svg {...sharedProps}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (icon === "pin") {
    return (
      <svg {...sharedProps}>
        <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg {...sharedProps}>
        <path d="M7.25 9.5v7.25" />
        <path d="M7.25 7.1v.05" />
        <path d="M11 16.75v-4.1a3.05 3.05 0 0 1 6.1 0v4.1" />
        <path d="M11 9.5v7.25" />
        <path d="M4.75 3.75h14.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5" />
      <path d="M15 22v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7 4.4 4.4 0 0 0 18.4 4S17.3 3.7 15 5.3a11.4 11.4 0 0 0-6 0C6.7 3.7 5.6 4 5.6 4a4.4 4.4 0 0 0-.1 3 4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.9 5.7 5.6 6a3 3 0 0 0-.8 2.3V22" />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Informe um nome com pelo menos 2 caracteres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A mensagem é obrigatória.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;

    if (!isValid) {
      setStatus("error");
    }

    return isValid;
  };

  const getFieldDescription = (field: FormField) =>
    errors[field] ? fieldErrorIds[field] : undefined;

  const handleFieldChange = (field: FormField, value: string) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [field]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const updatedErrors = { ...currentErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });

    if (status !== "loading") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "loading" || !validate()) {
      return;
    }

    setStatus("loading");

    await simulateContactRequest();

    setStatus("success");
    setErrors({});
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
      className="relative isolate scroll-mt-28 overflow-hidden px-6 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.13] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.58fr)] lg:items-end">
          <div className="flex min-w-0 flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Contato
            </p>
            <h2
              id="contact-heading"
              className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Vamos trabalhar juntos
            </h2>
          </div>
          <p
            id="contact-description"
            className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end"
          >
            Preencha o formulário ou envie uma mensagem direta para conversar
            sobre produto, interface, API ou uma entrega full-stack completa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1fr)] lg:gap-8">
          <aside
            aria-label="Canais diretos de contato"
            className="flex min-w-0 flex-col justify-between gap-8 rounded-xl border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] backdrop-blur dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
          >
            <div className="flex flex-col gap-6">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Canais diretos
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Para convites, projetos ou trocas técnicas, estes são os
                  melhores caminhos para iniciar a conversa.
                </p>
              </div>

              <div className="divide-y divide-border/70">
                {contactMethods.map((method) => {
                  const content = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground shadow-sm shadow-black/[0.02] transition-colors group-hover:border-card-hover-border dark:border-white/10">
                        <ContactIcon icon={method.icon} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                          {method.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-semibold text-foreground">
                          {method.value}
                        </span>
                      </span>
                      {method.href && (
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-transparent text-muted transition-colors group-hover:border-border group-hover:text-foreground">
                          <ExternalArrowIcon />
                        </span>
                      )}
                    </>
                  );

                  if (!method.href) {
                    return (
                      <div key={method.label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      aria-label={method.ariaLabel}
                      className="group flex items-center gap-4 py-4 transition-colors first:pt-0 last:pb-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
              <div className="flex items-center gap-2 font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Disponível para novos projetos
              </div>
              <p className="mt-1.5 leading-relaxed text-emerald-700/80 dark:text-emerald-200/75">
                Respondo por e-mail ou pelas redes assim que possível.
              </p>
            </div>
          </aside>

          <div className="min-w-0 rounded-xl border border-border bg-card/90 p-5 shadow-xl shadow-black/[0.05] dark:border-white/10 dark:bg-white/[0.045] sm:p-6 lg:p-7">
            <div className="mb-6 flex flex-col gap-1.5">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Envie sua mensagem
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                O envio abaixo continua simulado, com estrutura preparada para a
                futura integração com a API.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
              aria-describedby={
                status === "success" || status === "error" ? "contact-form-status" : undefined
              }
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex min-w-0 flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={getFieldDescription("name")}
                    className={`h-12 w-full rounded-lg border bg-background px-4 text-sm font-medium text-foreground outline-none transition-all placeholder:text-muted/60 disabled:cursor-not-allowed disabled:opacity-70 ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                        : "border-border focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                    }`}
                    placeholder="Seu nome"
                    disabled={status === "loading"}
                  />
                  {errors.name && (
                    <span id={fieldErrorIds.name} className="text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Endereço de E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={getFieldDescription("email")}
                    className={`h-12 w-full rounded-lg border bg-background px-4 text-sm font-medium text-foreground outline-none transition-all placeholder:text-muted/60 disabled:cursor-not-allowed disabled:opacity-70 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                        : "border-border focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                    }`}
                    placeholder="voce@exemplo.com"
                    disabled={status === "loading"}
                  />
                  {errors.email && (
                    <span id={fieldErrorIds.email} className="text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  value={formData.message}
                  onChange={(e) => handleFieldChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={getFieldDescription("message")}
                  className={`w-full resize-none rounded-lg border bg-background px-4 py-3 text-sm font-medium leading-relaxed text-foreground outline-none transition-all placeholder:text-muted/60 disabled:cursor-not-allowed disabled:opacity-70 ${
                    errors.message
                      ? "border-red-500/60 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-border focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                  }`}
                  placeholder="Como posso te ajudar?"
                  disabled={status === "loading"}
                />
                {errors.message && (
                  <span id={fieldErrorIds.message} className="text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 pt-1">
                <motion.button
                  whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                >
                  {status === "loading" ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent"
                      />
                      <span>Enviando...</span>
                      <span className="sr-only">Enviando mensagem</span>
                    </>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>

                <AnimatePresence mode="wait">
                  {(status === "success" || status === "error") && (
                    <motion.div
                      key={status}
                      id="contact-form-status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      role={status === "error" ? "alert" : "status"}
                      aria-live={status === "error" ? "assertive" : "polite"}
                      className={`rounded-lg border px-4 py-3 text-sm font-medium ${
                        status === "success"
                          ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                          : "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300"
                      }`}
                    >
                      {status === "success"
                        ? "Mensagem enviada com sucesso! Entrarei em contato em breve."
                        : "Revise os campos destacados antes de enviar."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
