import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-16">
        <div className="text-center">
          <p className="font-serif text-7xl font-extrabold text-primary md:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Pagina nao encontrada
          </h1>
          <p className="mt-3 text-muted-foreground">
            A pagina que voce procura nao existe ou foi movida.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" />
                Voltar para a Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
