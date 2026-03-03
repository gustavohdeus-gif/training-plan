import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Lock, ArrowRight } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="size-8 text-primary" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-secondary-foreground md:text-4xl text-balance">
          Garantia incondicional de 7 dias
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/70 leading-relaxed">
          Se dentro de 7 dias voce nao ficar satisfeito com o conteudo do Plano de Treino,
          devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
            <Lock className="size-4" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
            <ShieldCheck className="size-4" />
            <span>Conexao SSL</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
            <ShieldCheck className="size-4" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="text-base font-semibold">
            <Link href="/avaliacao">
              Iniciar avaliacao agora
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-6 flex justify-center gap-4 text-xs text-secondary-foreground/40">
          <Link href="/privacidade" className="underline underline-offset-2 hover:text-secondary-foreground/60">
            Politica de Privacidade
          </Link>
          <Link href="/termos" className="underline underline-offset-2 hover:text-secondary-foreground/60">
            Termos de Uso
          </Link>
        </div>
      </div>
    </section>
  )
}
