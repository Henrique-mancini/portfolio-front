"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Certificados", href: "#certificados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 sm:px-8 lg:px-0">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground select-none"
        >
          Henrique <span className="text-muted/80 font-normal">Mancini</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "-rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <nav className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-4 sm:px-8 lg:px-0">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-muted hover:text-foreground py-2 border-b border-border/40 last:border-0 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
