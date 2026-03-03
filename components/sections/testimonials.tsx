import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mariana S.",
    location: "Sao Paulo, SP",
    rating: 5,
    text: "Perdi 6kg em 8 semanas com o Plano de Treino. O treino em casa me salvou! Finalmente algo que cabe na minha rotina.",
  },
  {
    name: "Carlos R.",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Comecei como iniciante e em 2 meses ja via resultados no espelho. O cardapio e super pratico e saboroso.",
  },
  {
    name: "Juliana M.",
    location: "Curitiba, PR",
    rating: 5,
    text: "A planilha de treinos e incrivel. Organizou minha semana toda e me ajudou a manter a constancia.",
  },
  {
    name: "Rafael L.",
    location: "Rio de Janeiro, RJ",
    rating: 4,
    text: "Material muito completo. As substituicoes de alimentos facilitaram demais. Recomendo para quem quer comecar certo.",
  },
  {
    name: "Ana P.",
    location: "Brasilia, DF",
    rating: 5,
    text: "Melhor investimento que fiz na minha saude. Ja emagreci 4kg e me sinto com muito mais disposicao.",
  },
  {
    name: "Lucas F.",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "O checklist de compras e um bonus genial. Economizo tempo e dinheiro no supermercado toda semana.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliacao: ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-4xl text-balance">
            O que dizem nossos alunos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Avaliacao media: <strong className="text-accent-foreground">4,9/5</strong> (2.500+ avaliacoes)
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <StarRating rating={t.rating} />
              <p className="flex-1 text-sm leading-relaxed text-card-foreground">
                {`"${t.text}"`}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
