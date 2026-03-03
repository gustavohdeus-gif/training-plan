import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Compra Confirmada — Plano Slim360",
  description:
    "Obrigado pela sua compra! Voce recebera o Plano de Treino Slim360 por e-mail em instantes.",
}

export default function ObrigadoPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="size-10 text-primary" />
          </div>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Compra confirmada!
          </h1>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Obrigado por adquirir o <strong className="text-foreground">Plano Slim360</strong>.
            Seu Plano de Treino esta a caminho!
          </p>

          <div className="mt-6 rounded-xl border border-border bg-muted p-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
              <Mail className="size-5 text-primary" />
              Voce recebera o Plano de Treino por e-mail em ate 5 minutos.
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Verifique tambem sua caixa de spam ou promocoes.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button asChild size="lg" className="text-base font-semibold">
              <Link href="/">
                Voltar para a Home
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Duvidas? Entre em contato:{" "}
            <a href="mailto:suporte@slim360.com.br" className="text-primary underline underline-offset-2">
              suporte@slim360.com.br
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
