"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Os resultados variam conforme seu biotipo, rotina e adesao ao plano. A maioria dos alunos relata mudancas visiveis entre 4 e 8 semanas seguindo o plano de forma consistente.",
  },
  {
    question: "Preciso de equipamentos?",
    answer:
      "Nao necessariamente. O Plano de Treino inclui treinos para casa (sem equipamentos) e para academia. Voce escolhe o que se adapta melhor a sua realidade.",
  },
  {
    question: "Posso fazer em casa?",
    answer:
      "Sim! Grande parte dos treinos foi desenvolvida para ser feita em casa, sem a necessidade de equipamentos especiais.",
  },
  {
    question: "Serve para iniciantes?",
    answer:
      "Com certeza. O Plano de Treino tem planos especificos para iniciantes, intermediarios e avancados, com progressao gradual para cada nivel.",
  },
  {
    question: "O Plano de Treino e atualizado?",
    answer:
      "Sim. O conteudo e revisado periodicamente para incorporar as melhores praticas e evidencias cientificas mais recentes.",
  },
  {
    question: "Qual a politica de reembolso?",
    answer:
      "Oferecemos garantia de 7 dias. Se voce nao ficar satisfeito, basta entrar em contato e devolvemos 100% do valor investido.",
  },
  {
    question: "O conteudo substitui acompanhamento medico?",
    answer:
      "Nao. O Plano de Treino e um material educativo e informativo. Recomendamos que consulte um profissional de saude antes de iniciar qualquer programa de exercicios ou dieta, especialmente se possuir condicoes pre-existentes.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
