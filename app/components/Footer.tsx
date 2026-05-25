export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-card/10 px-6 py-10 sm:px-8 lg:px-0">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <div>
          <p>
            &copy; {currentYear} Henrique Mancini. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Henrique-mancini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/henriquemancinii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:henrique.malafaia@gmail.com"
            className="hover:text-foreground transition-colors duration-200"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
