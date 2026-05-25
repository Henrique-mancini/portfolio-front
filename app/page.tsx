import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 flex flex-col gap-4">
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

      {/* Contact Form Section with scroll reveal */}
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
