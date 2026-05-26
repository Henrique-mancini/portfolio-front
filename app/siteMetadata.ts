export const siteConfig = {
  name: "Henrique Mancini",
  title: "Henrique Mancini | Engenheiro de Software",
  description:
    "Portfólio de Engenharia de Software com projetos full-stack em Next.js, Spring Boot, Java, PostgreSQL e Ciência de Dados.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",
  email: "henrique.malafaia@gmail.com",
  githubUrl: "https://github.com/Henrique-mancini",
  linkedinUrl: "https://www.linkedin.com/in/henriquemancinii",
  keywords: [
    "Henrique Mancini",
    "Engenheiro de Software",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Ciência de Dados",
  ],
};

export const getSiteUrl = () => new URL(siteConfig.url);
