import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AssessmentForm } from "@/components/assessment-form"
import { ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Avaliacao Gratuita — Plano Slim360",
  description:
    "Faca sua avaliacao gratuita e descubra o plano ideal de treinos e dietas para o seu perfil. Rapido, seguro e online.",
}

export default function AvaliacaoPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pb-20 pt-8 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-8 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Avaliacao gratuita
            </span>
            <h1 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
              Descubra o plano ideal para voce
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Responda as perguntas abaixo para receber orientacoes personalizadas e garantir seu Plano de Treino.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <AssessmentForm />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4" />
            <span>Seus dados estao seguros e protegidos conforme a LGPD.</span>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
