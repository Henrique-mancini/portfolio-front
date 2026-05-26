const profileSignals = [
  {
    label: "Formação",
    value: "Engenharia de Software",
    detail: "Base acadêmica voltada à arquitetura, qualidade e construção de sistemas.",
  },
  {
    label: "Perfil",
    value: "Desenvolvedor web",
    detail: "Implementação de interfaces modernas, APIs e persistência relacional.",
  },
  {
    label: "Diferencial",
    value: "Dados e estatística",
    detail: "Fundamentos analíticos para apoiar decisões técnicas com mais rigor.",
  },
];

const competencyTracks = [
  {
    number: "01",
    title: "Backend & Core",
    description:
      "Construo a base da aplicação com foco em regras claras, endpoints previsíveis e persistência consistente.",
    items: ["Java", "Spring Boot", "APIs RESTful", "JPA / Hibernate"],
  },
  {
    number: "02",
    title: "Frontend & UI",
    description:
      "Transformo arquitetura em experiência de uso, priorizando performance, responsividade e acabamento visual.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Dados & Ciência",
    description:
      "Trabalho com fundamentos de SQL, modelagem relacional e análise estatística para sustentar produtos mais confiáveis.",
    items: ["PostgreSQL", "Banco de Dados (SQL)", "Ciência de Dados", "Análise Estatística"],
  },
];

const deliveryFlow = [
  {
    title: "Modelar",
    detail: "Entender domínio, dados e restrições antes da interface.",
  },
  {
    title: "Integrar",
    detail: "Conectar API, banco e camada visual com contratos claros.",
  },
  {
    title: "Refinar",
    detail: "Polir responsividade, acessibilidade e leitura técnica da entrega.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-24 lg:px-0"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 grid gap-5 sm:mb-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.55fr)] lg:items-end">
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Sobre Mim
            </p>
            <h2
              id="about-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Formação e competências em leitura full-stack
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            Um perfil técnico em formação contínua, conectando Engenharia de Software,
            desenvolvimento web e fundamentos de dados para construir produtos com
            critério.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.45fr)]">
          <article className="group relative overflow-hidden rounded-lg border border-border bg-card/75 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:border-card-hover-border hover:bg-card dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(240px,0.42fr)]">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Perfil técnico
                </p>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Engenharia aplicada da persistência ao produto final.
                </h3>
                <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg">
                  <p>
                    Sou Henrique Mancini, estudante de Engenharia de Software e
                    desenvolvedor web. Construo aplicações modernas, rápidas e
                    escaláveis utilizando tecnologias como Next.js, React e Java com
                    Spring Boot.
                  </p>
                  <p>
                    Minha base combina lógica de programação, bancos de dados SQL e
                    fundamentos de Ciência de Dados para entregar soluções eficientes do
                    back-end ao front-end.
                  </p>
                </div>
              </div>

              <dl className="divide-y divide-border/60 border-y border-border/60">
                {profileSignals.map((signal) => (
                  <div key={signal.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {signal.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold tracking-tight text-foreground">
                      {signal.value}
                    </dd>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">
                      {signal.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <aside
            aria-label="Resumo da stack principal"
            className="relative overflow-hidden rounded-lg border border-border bg-background/55 p-5 dark:border-white/10 dark:bg-black/20 sm:p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
            />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Stack principal
                </p>
                <p className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  Next.js, Spring Boot e PostgreSQL como eixo de construção.
                </p>
              </div>

              <div className="space-y-3">
                {["Interface tipada", "API REST", "Persistência relacional"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 border-t border-border/60 pt-3 first:border-t-0 first:pt-0"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold text-muted">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-semibold tracking-tight text-foreground">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {competencyTracks.map((track) => (
            <article
              key={track.title}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:border-card-hover-border hover:bg-card dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/18 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-muted">{track.number}</span>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                    Competência
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {track.description}
                  </p>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2 border-t border-border/30 pt-5">
                {track.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card/70 shadow-sm shadow-black/[0.03] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(220px,0.36fr)_minmax(0,1fr)] lg:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Modo de trabalho
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                Do domínio ao refinamento visual.
              </h3>
            </div>

            <ol className="grid gap-4 sm:grid-cols-3">
              {deliveryFlow.map((step, index) => (
                <li key={step.title} className="border-l border-border/80 pl-4">
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
