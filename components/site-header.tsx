"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Plano Slim360 - Ir para a home">
          <Leaf className="size-7 text-primary" />
          <span className="font-serif text-lg font-bold text-foreground">
            Plano Slim360
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Menu principal">
          <Link href="/#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Como funciona
          </Link>
          <Link href="/#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Beneficios
          </Link>
          <Link href="/#sobre-o-plano" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            O Plano
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Button asChild size="lg">
            <Link href="/avaliacao">Iniciar avaliacao</Link>
          </Button>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Menu mobile">
          <div className="flex flex-col gap-3 pt-3">
            <Link href="/#como-funciona" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMenuOpen(false)}>
              Como funciona
            </Link>
            <Link href="/#beneficios" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMenuOpen(false)}>
              Beneficios
            </Link>
            <Link href="/#sobre-o-plano" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMenuOpen(false)}>
              O Plano
            </Link>
            <Link href="/#faq" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Button asChild size="lg" className="mt-1">
              <Link href="/avaliacao" onClick={() => setMenuOpen(false)}>Iniciar avaliacao</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
