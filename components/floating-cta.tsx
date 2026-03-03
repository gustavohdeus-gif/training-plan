"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Button asChild size="lg" className="w-full text-base font-semibold">
        <Link href="/avaliacao">
          Iniciar avaliacao
          <ArrowRight className="ml-2 size-5" />
        </Link>
      </Button>
    </div>
  )
}
