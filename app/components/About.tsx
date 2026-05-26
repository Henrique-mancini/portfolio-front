const profileSignals = [
  {
    label: "Formação atual",
    value: "Engenharia de Software",
    detail: "Base acadêmica em arquitetura, qualidade, requisitos e construção de sistemas.",
  },
  {
    label: "Perfil técnico",
    value: "Desenvolvedor web full-stack",
    detail: "Interfaces modernas, APIs RESTful e persistência relacional trabalhando em conjunto.",
  },
  {
    label: "Leitura analítica",
    value: "Dados, SQL e estatística",
    detail: "Fundamentos para modelar, medir e decidir com mais rigor técnico.",
  },
];

const competencyLayers = [
  {
    number: "01",
    layer: "Interface",
    title: "Produto tipado e responsivo",
    description:
      "Construção de experiências em Next.js, React e TypeScript, com atenção a performance, acessibilidade e acabamento visual.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    layer: "API",
    title: "Regras claras e contratos previsíveis",
    description:
      "Back-end em Java com Spring Boot, APIs RESTful, validação de entrada e separação entre camadas de aplicação.",
    tools: ["Java", "Spring Boot", "REST", "Validation"],
  },
  {
    number: "03",
    layer: "Dados",
    title: "Persistência relacional e análise",
    description:
      "Modelagem em PostgreSQL, SQL, JPA/Hibernate e fundamentos estatísticos aplicados à leitura de dados.",
    tools: ["PostgreSQL", "SQL", "JPA / Hibernate", "Estatística"],
  },
];

const formationNotes = [
  {
    title: "Engenharia de Software",
    detail: "Formação central para pensar arquitetura, qualidade e evolução de sistemas.",
  },
  {
    title: "Probabilidade e Estatística",
    detail: "Base complementar para análise de dados e decisões técnicas menos intuitivas.",
  },
  {
    title: "Projetos full-stack",
    detail: "Prática contínua conectando interface, API, persistência e entrega visual.",
  },
];

const workingLoop = [
  {
    label: "Modelar",
    detail: "Domínio, dados, restrições e contrato antes da interface.",
  },
  {
    label: "Construir",
    detail: "UI, API e banco integrados como uma mesma entrega.",
  },
  {
    label: "Refinar",
    detail: "Responsividade, acessibilidade, performance e leitura técnica.",
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

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] lg:items-start">
          <article className="group relative overflow-hidden rounded-lg border border-border bg-card/75 shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:border-card-hover-border hover:bg-card dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(240px,0.42fr)] lg:p-8">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Perfil técnico
                </p>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Formação em engenharia aplicada ao produto completo.
                </h3>
                <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg">
                  <p>
                    Sou Henrique Mancini, estudante de Engenharia de Software e
                    desenvolvedor web. Meu trabalho conecta fundamentos de arquitetura,
                    construção de interfaces e implementação de APIs para transformar
                    ideias em sistemas reais.
                  </p>
                  <p>
                    A base técnica combina Next.js, React e TypeScript no front-end,
                    Java com Spring Boot no back-end e PostgreSQL como camada relacional,
                    com apoio de SQL, Ciência de Dados e Estatística.
                  </p>
                </div>
              </div>

              <dl className="divide-y divide-border/60 border-y border-border/60 lg:border-b-0">
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

            <div className="border-t border-border/50 bg-background/45 p-5 dark:border-white/10 dark:bg-black/20 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Matriz de competências
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    Camadas que conversam entre si.
                  </h3>
                </div>

                <div className="divide-y divide-border/60">
                  {competencyLayers.map((layer) => (
                    <div
                      key={layer.layer}
                      className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[2.5rem_minmax(150px,0.34fr)_minmax(0,1fr)]"
                    >
                      <span className="font-mono text-xs text-muted">
                        {layer.number}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          {layer.layer}
                        </p>
                        <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                          {layer.title}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm leading-relaxed text-muted">
                          {layer.description}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {layer.tools.map((tool) => (
                            <li
                              key={tool}
                              className="rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs font-medium text-muted"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5 lg:self-start">
            <aside
              aria-labelledby="about-formation-heading"
              className="relative overflow-hidden rounded-lg border border-border bg-background/55 p-5 dark:border-white/10 dark:bg-black/20 sm:p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
              />
              <div className="relative flex flex-col gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Formação em progresso
                  </p>
                  <h3
                    id="about-formation-heading"
                    className="mt-3 text-xl font-semibold tracking-tight text-foreground"
                  >
                    Uma base técnica construída entre estudo formal e implementação.
                  </h3>
                </div>

                <ol className="space-y-4">
                  {formationNotes.map((note, index) => (
                    <li
                      key={note.title}
                      className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-border/60 pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold text-muted">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold tracking-tight text-foreground">
                          {note.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {note.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <aside
              aria-labelledby="about-work-heading"
              className="overflow-hidden rounded-lg border border-border bg-card/70 p-5 shadow-sm shadow-black/[0.03] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Modo de trabalho
              </p>
              <h3
                id="about-work-heading"
                className="mt-3 text-xl font-semibold tracking-tight text-foreground"
              >
                Do domínio ao refinamento visual, sem separar forma e engenharia.
              </h3>

              <ol className="mt-6 space-y-4">
                {workingLoop.map((step, index) => (
                  <li
                    key={step.label}
                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-border/60 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold text-muted">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-foreground">
                        {step.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
