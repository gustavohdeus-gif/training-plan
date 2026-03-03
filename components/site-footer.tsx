import Link from "next/link"
import { Leaf } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Leaf className="size-6 text-primary" />
              <span className="font-serif text-lg font-bold">Plano Slim360</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Um plano simples e eficiente para emagrecer com treinos e dietas que cabem na sua rotina.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Links
            </h3>
            <Link href="/avaliacao" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              Avaliacao
            </Link>
            <Link href="/pagamento" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              Pagamento
            </Link>
            <Link href="/#faq" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              FAQ
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Legal
            </h3>
            <Link href="/privacidade" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              Politica de Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              Termos de Uso
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Contato
            </h3>
            <a href="mailto:suporte@slim360.com.br" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              suporte@slim360.com.br
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/10 pt-6">
          <p className="text-center text-xs leading-relaxed text-secondary-foreground/50">
            Este material e educativo e nao substitui orientacao medica. Resultados variam conforme biotipo, rotina e adesao.
            Consulte um profissional de saude se tiver condicoes pre-existentes.
          </p>
          <p className="mt-2 text-center text-xs text-secondary-foreground/40">
            &copy; {new Date().getFullYear()} Plano Slim360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
