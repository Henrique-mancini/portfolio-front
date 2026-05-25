"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="mx-auto max-w-5xl px-6 flex flex-col gap-4">
      {/* Hero Section */}
      <Hero />

      {/* Projects Grid Section with scroll reveal */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <ProjectsGrid />
      </motion.div>

      {/* About Section with scroll reveal */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <About />
      </motion.div>

      {/* Contact Form Section with scroll reveal */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
