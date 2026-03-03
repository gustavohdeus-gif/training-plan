import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politica de Privacidade — Plano Slim360",
  description: "Saiba como coletamos, usamos e protegemos seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-4 [&_h1]:mb-4 [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_li]:text-sm [&_li]:text-muted-foreground">
          <h1>Politica de Privacidade</h1>
          <p>Ultima atualizacao: marco de 2026</p>

          <h2>1. Dados coletados</h2>
          <p>
            Coletamos apenas os dados necessarios para oferecer nossos servicos:
            nome, e-mail, idade, peso, altura, preferencias de treino e meta. Esses
            dados sao fornecidos voluntariamente pelo usuario por meio do formulario
            de avaliacao.
          </p>

          <h2>2. Uso dos dados</h2>
          <p>Seus dados sao utilizados para:</p>
          <ul>
            <li>Envio do e-mail de confirmacao da avaliacao;</li>
            <li>Personalizacao das orientacoes do Plano de Treino;</li>
            <li>Comunicacoes sobre o produto (caso o usuario autorize);</li>
            <li>Melhoria contínua dos nossos servicos.</li>
          </ul>

          <h2>3. Compartilhamento</h2>
          <p>
            Nao vendemos, alugamos ou compartilhamos seus dados pessoais com
            terceiros, exceto quando necessario para processamento de pagamento
            (via gateway seguro) ou quando exigido por lei.
          </p>

          <h2>4. Seguranca</h2>
          <p>
            Utilizamos criptografia SSL e seguimos as melhores praticas de seguranca
            da informacao para proteger seus dados contra acesso nao autorizado.
          </p>

          <h2>5. Direitos do titular (LGPD)</h2>
          <p>
            Voce pode solicitar a qualquer momento: acesso, correcao, exclusao ou
            portabilidade dos seus dados pessoais. Para exercer seus direitos, entre
            em contato pelo e-mail{" "}
            <a href="mailto:suporte@slim360.com.br" className="text-primary">
              suporte@slim360.com.br
            </a>
            .
          </p>

          <h2>6. Cookies</h2>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site e cookies de
            analytics para entender como os usuarios interagem com nosso conteudo.
            Voce pode desativar cookies no navegador a qualquer momento.
          </p>

          <h2>7. Alteracoes</h2>
          <p>
            Esta politica pode ser atualizada periodicamente. Recomendamos que voce
            consulte esta pagina regularmente.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
