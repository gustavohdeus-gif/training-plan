import Image from "next/image"
import { BookOpen, Table2, Apple, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    icon: BookOpen,
    title: "Plano de Treino completo (PDF)",
    description:
      "Guia de emagrecimento com: treinos, dietas, dicas de rotina e motivacao.",
  },
  {
    icon: Table2,
    title: "Planilhas de treino (semana a semana)",
    description:
      "Planejamento estruturado de exercicios para cada semana, com progressao gradual.",
  },
  {
    icon: Apple,
    title: "Sugestoes de dieta com substituicoes",
    description:
      "Cardapios flexiveis que respeitam seu paladar e se adaptam ao seu orcamento.",
  },
  {
    icon: Gift,
    title: "Bonus: Checklist de compras e planejamento",
    description:
      "Lista de compras semanal e planejador de refeicoes para facilitar sua rotina.",
  },
]

export function WhatYouGetSection() {
  return (
    <section id="sobre-o-plano" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            O que voce recebe
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
            Sobre o Plano de Treino Estética em Forma
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tudo pensado para simplificar sua jornada de emagrecimento.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <Card key={item.title} className="border-border transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20">
                    <item.icon className="size-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/ebook-mockup.jpg"
                alt="Mockup do Plano de Treino Estética em Forma exibido em tablet e celular"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h3 className="font-serif text-lg font-bold text-foreground">Estrutura do Plano de Treino</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Capitulo 1: Fundamentos do emagrecimento",
              "Capitulo 2: Treinos para iniciantes e avancados",
              "Capitulo 3: Planos de dieta semanais",
              "Capitulo 4: Mentalidade e constancia",
              "Bonus: Lista de compras inteligente",
              "Bonus: Checklist semanal de habitos",
              "Tabelas de acompanhamento",
              "Garantia de 7 dias",
            ].map((chapter) => (
              <div key={chapter} className="flex items-start gap-2">
                <span className="mt-0.5 text-primary" aria-hidden="true">&#10003;</span>
                <span className="text-sm text-foreground">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
