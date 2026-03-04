import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Novo Plano de Treino 2026
            </span>
          </div>

          <h1 className="font-serif text-3xl font-extrabold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl text-balance">
            Emagreca com um plano claro de treinos e dietas — feito para a sua rotina.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-secondary-foreground/70 md:text-lg text-pretty">
            Adquira o Plano de Treino Slim360 e siga um passo a passo simples para
            perder peso com seguranca e constancia.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="text-base font-semibold">
              <Link href="/avaliacao">
                Iniciar avaliacao
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
         <Button
  asChild
  variant="outline"
  size="lg"
  className="bg-green-500 text-black border-green-600 hover:bg-green-600"
>
  <Link href="#sobre-oer detalhes do plano
    <ChevronDown className="ml-2 size-5" />
  </Link>
</Button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary">+2.500</span>
              <span className="text-xs text-secondary-foreground/50">alunos satisfeitos</span>
            </div>
            <div className="h-8 w-px bg-secondary-foreground/10" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary">4,9/5</span>
              <span className="text-xs text-secondary-foreground/50">avaliacao media</span>
            </div>
            <div className="h-8 w-px bg-secondary-foreground/10" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary">PDF</span>
              <span className="text-xs text-secondary-foreground/50">acesso imediato</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Pessoa preparando uma refeicao saudavel com vegetais frescos em uma cozinha moderna"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg md:-bottom-6 md:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="text-lg text-primary" role="img" aria-label="check">&#10003;</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Resultados reais</p>
                <p className="text-xs text-muted-foreground">Sem promessas milagrosas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
