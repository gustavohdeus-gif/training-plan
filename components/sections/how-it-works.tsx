import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardList, Mail, BookOpen, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Faca a avaliacao rapida",
    description:
      "Responda algumas perguntas simples sobre seu perfil, objetivo e rotina. Leva menos de 2 minutos.",
  },
  {
    icon: Mail,
    step: "02",
    title: "Receba as orientacoes por e-mail",
    description:
      "Ao concluir a avaliacao, enviamos um e-mail com o proximo passo para acessar seu plano.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Garanta seu Plano de Treino e comece hoje",
    description:
      "Finalize a compra e receba acesso imediato ao Plano de Treino completo com dietas e bonus.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Como funciona
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
            Tres passos simples para comecar
          </h2>
          <p className="mt-3 text-muted-foreground">
            O processo e rapido, seguro e totalmente online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {item.step}
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="size-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="text-base font-semibold">
            <Link href="/avaliacao">
              Iniciar avaliacao
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
