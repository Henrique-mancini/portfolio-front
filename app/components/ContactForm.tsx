"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido.";
    }
    if (!formData.message.trim()) newErrors.message = "A mensagem é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulating API integration
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contato" className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0">
      <div className="mx-auto max-w-4xl w-full">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Contato
          </h2>
          <p className="text-2xl font-bold tracking-tight text-foreground">
            Vamos trabalhar juntos
          </p>
          <p className="text-sm text-muted max-w-md mt-1">
            Preencha o formulário abaixo ou envie uma mensagem diretamente para iniciar nossa conversa.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-14">
          {/* Info Side */}
          <div className="md:col-span-2 flex flex-col gap-6 text-sm text-muted">
            <div>
              <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
              <a href="mailto:henrique.malafaia@gmail.com" className="hover:text-foreground transition-colors block">
                henrique.malafaia@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Localização</h4>
              <p>Juiz de Fora, MG</p>
              <p>Brasil</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Redes</h4>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                    errors.name 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <span className="text-xs text-red-500">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted">
                  Endereço de E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                    errors.email 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="voce@exemplo.com"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full rounded-lg border bg-card/25 px-4 py-2.5 text-sm text-foreground outline-none transition-all resize-none ${
                    errors.message 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-border focus:border-foreground focus:ring-0"
                  }`}
                  placeholder="Como posso te ajudar?"
                />
                {errors.message && (
                  <span className="text-xs text-red-500">{errors.message}</span>
                )}
              </div>

              {/* Submit Button & Feedback */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-foreground shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                  ) : (
                    "Enviar Mensagem"
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center"
                  >
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
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
