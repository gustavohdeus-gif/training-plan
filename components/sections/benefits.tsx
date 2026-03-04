import { Dumbbell, Utensils, CalendarCheck, Download, ShieldCheck, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Protocolos de treino para casa ou academia",
    description: "Exercícios adaptáveis ao seu ambiente e nivel de experiência.",
  },
  {
    icon: Utensils,
    title: "Sugestões de cardápio equilibrado",
    description: "Refeições práticas com substituições para o dia a dia.",
  },
  {
    icon: CalendarCheck,
    title: "Rotinas semanais e checklists",
    description: "Organização semanal para manter a constância nos treinos.",
  },
  {
    icon: Download,
    title: "Acesso rapido, formato PDF",
    description: "Baixe e acesse do celular, tablet ou computador a qualquer momento.",
  },
  {
    icon: ShieldCheck,
    title: "Resultados sustentáveis e seguros",
    description: "Metodologia sem radicalismos, focada em saúde e bem-estar.",
  },
  {
    icon: CheckCircle,
    title: "Suporte por e-mail",
    description: "Tire suas dúvidas com nossa equipe de suporte dedicada.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Beneficios
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
            Tudo o que você precisa para emagrecer de verdade
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-xl bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <benefit.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
