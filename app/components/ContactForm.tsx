"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormField = keyof FormState;
type FormStatus = "idle" | "loading" | "success" | "error";

const fieldErrorIds: Record<FormField, string> = {
  name: "contact-name-error",
  email: "contact-email-error",
  message: "contact-message-error",
};

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
    if (!validate()) return;

    setStatus("loading");

    // Simulating API integration
    setTimeout(() => {
      setStatus("success");
      setErrors({});
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
      className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0"
    >
      <div className="mx-auto max-w-4xl w-full">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Contato
          </p>
          <h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Vamos trabalhar juntos
          </h2>
          <p id="contact-description" className="text-sm text-muted max-w-md mt-1">
            Preencha o formulário abaixo ou envie uma mensagem diretamente para iniciar nossa conversa.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-14">
          {/* Info Side */}
          <div className="md:col-span-2 flex flex-col gap-6 text-sm text-muted">
            <div>
              <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
              <a href="mailto:henrique.malafaia@gmail.com" className="hover:text-foreground transition-colors block">
                henrique.malafaia@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Localização</h3>
              <p>Juiz de Fora, MG</p>
              <p>Brasil</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Redes</h3>
              <a 
                href="https://www.linkedin.com/in/henriquemancinii" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground block transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Henrique-mancini" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground block transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
              aria-describedby={
                status === "success" || status === "error" ? "contact-form-status" : undefined
              }
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted">
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
                  aria-describedby={errors.name ? fieldErrorIds.name : undefined}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                    errors.name 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <span id={fieldErrorIds.name} className="text-xs text-red-500">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted">
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
                  aria-describedby={errors.email ? fieldErrorIds.email : undefined}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                    errors.email 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="voce@exemplo.com"
                />
                {errors.email && (
                  <span id={fieldErrorIds.email} className="text-xs text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  value={formData.message}
                  onChange={(e) => handleFieldChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? fieldErrorIds.message : undefined}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all resize-none ${
                    errors.message 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="Como posso te ajudar?"
                />
                {errors.message && (
                  <span id={fieldErrorIds.message} className="text-xs text-red-500">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button & Feedback */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                  className="w-full flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-foreground shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-5 w-5 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent"
                      />
                      <span className="sr-only">Enviando mensagem</span>
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {(status === "success" || status === "error") && (
                  <motion.div
                    id="contact-form-status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    role={status === "error" ? "alert" : "status"}
                    aria-live={status === "error" ? "assertive" : "polite"}
                    className={`p-4 rounded-lg border text-sm font-medium text-center ${
                      status === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status === "success"
                      ? "Mensagem enviada com sucesso! Entrarei em contato em breve."
                      : "Revise os campos destacados antes de enviar."}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
