import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Termos de Uso — Plano Slim360",
  description: "Leia os termos e condicoes de uso do Plano de Treino Slim360.",
}

export default function TermosPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-4 [&_h1]:mb-4 [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground">
          <h1>Termos de Uso</h1>
          <p>Ultima atualizacao: marco de 2026</p>

          <h2>1. Sobre o produto</h2>
          <p>
            O Plano Slim360 e um Plano de Treino digital (PDF) com conteudo educativo sobre
            emagrecimento, treinos e dietas. O material nao substitui
            acompanhamento medico ou nutricional profissional.
          </p>

          <h2>2. Uso do conteudo</h2>
          <p>
            Ao adquirir o Plano de Treino, voce recebe uma licenca pessoal e intransferivel
            de uso. E proibido reproduzir, distribuir, comercializar ou compartilhar
            o conteudo sem autorizacao expressa.
          </p>

          <h2>3. Resultados</h2>
          <p>
            Os resultados obtidos variam de pessoa para pessoa e dependem de fatores
            como biotipo, rotina, alimentacao e adesao ao plano. Nao garantimos
            resultados especificos.
          </p>

          <h2>4. Garantia de reembolso</h2>
          <p>
            Oferecemos garantia incondicional de 7 dias a partir da data da compra.
            Para solicitar reembolso, entre em contato pelo e-mail{" "}
            <a href="mailto:suporte@slim360.com.br" className="text-primary">
              suporte@slim360.com.br
            </a>{" "}
            dentro do prazo.
          </p>

          <h2>5. Responsabilidade</h2>
          <p>
            O conteudo do Plano de Treino e de carater informativo e educativo. O usuario e
            responsavel por consultar um profissional de saude antes de iniciar
            qualquer programa de exercicios ou dieta, especialmente se possuir
            condicoes de saude pre-existentes.
          </p>

          <h2>6. Modificacoes</h2>
          <p>
            Nos reservamos o direito de alterar estes termos a qualquer momento.
            Alteracoes serao publicadas nesta pagina com a data de atualizacao.
          </p>

          <h2>7. Legislacao aplicavel</h2>
          <p>
            Estes termos sao regidos pelas leis da Republica Federativa do Brasil.
            Qualquer disputa sera resolvida no foro da comarca do domicilio do
            consumidor.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
