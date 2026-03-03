import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Table2,
  Apple,
  Gift,
  ShieldCheck,
  Lock,
  CreditCard,
  ArrowRight,
  MessageCircle,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Finalizar Compra — Plano Slim360",
  description:
    "Finalize a compra do Plano de Treino Slim360 e comece hoje mesmo sua transformacao com treinos e dietas.",
}

const CHECKOUT_URL = "#"
const PRECO = "R$ 19,90"

export default function PagamentoPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pb-20 pt-8 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Ultimo passo
            </span>
            <h1 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
              Finalize a compra do Plano de Treino Estética em Forma
            </h1>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {/* Product Summary */}
            <div className="mb-6">
              <h2 className="font-serif text-lg font-semibold text-card-foreground">
                O que esta incluso:
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {[
                  { icon: BookOpen, text: "Plano de Treino completo (PDF) " },
                  { icon: Table2, text: "Planilhas de treino semana a semana" },
                  { icon: Apple, text: "Sugestões de dieta com substituições" },
                  { icon: Gift, text: "Bônus: Checklist de compras e planejamento" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm text-card-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-baseline gap-3 rounded-xl bg-muted p-4">
              <span className="font-serif text-3xl font-extrabold text-foreground">{PRECO}</span>
              <span className="text-sm text-muted-foreground">pagamento unico</span>
            </div>

            {/* CTA Button */}
            <Button asChild size="lg" className="w-full text-lg font-semibold">
              <a href={CHECKOUT_URL} rel="noopener noreferrer">
                <CreditCard className="mr-2 size-5" />
                Ir para pagamento seguro
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>

            {/* Security badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="size-3.5" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5" />
                <span>SSL protegido</span>
              </div>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-serif text-lg font-semibold text-card-foreground">
              Duvidas frequentes
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  q: "Quais formas de pagamento sao aceitas?",
                  a: "Aceitamos Cartão de Crédito, PIX e Boleto Bancário.",
                },
                {
                  q: "Como recebo o Plano de Treino?",
                  a: "Apos a confirmação do pagamento, você recebe o Plano de Treino por e-mail em até 5 minutos.",
                },
                {
                  q: "Posso pedir reembolso?",
                  a: "Sim. Voce tem 7 dias de garantia para solicitar reembolso total.",
                },
              ].map((item) => (
                <div key={item.q}>
                  <p className="text-sm font-semibold text-card-foreground">
                    {item.q}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:justify-center">
            <span>Precisa de ajuda?</span>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:underline"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="mailto:suporte@slim360.com.br"
                className="flex items-center gap-1.5 text-primary hover:underline"
              >
                <Mail className="size-4" />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
