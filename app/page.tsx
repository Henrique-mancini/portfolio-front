import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Projects Grid Section with scroll reveal */}
      <AnimatedSection>
        <ProjectsGrid />
      </AnimatedSection>

      {/* About Section with scroll reveal */}
      <AnimatedSection>
        <About />
      </AnimatedSection>

      {/* Experience Section with scroll reveal */}
      <AnimatedSection>
        <Experience />
      </AnimatedSection>

      {/* Certificates Section with scroll reveal */}
      <AnimatedSection>
        <Certificates />
      </AnimatedSection>

      {/* Contact Form Section with scroll reveal */}
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
