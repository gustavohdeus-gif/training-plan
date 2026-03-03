import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Plano Slim360 — Emagreça com Treinos e Dietas',
  description:
    'Adquira o Plano de Treino Slim360 e siga um passo a passo simples para perder peso com seguranca e constancia. Treinos e dietas para sua rotina.',
  openGraph: {
    title: 'Plano Slim360 — Emagreça com Treinos e Dietas',
    description:
      'Adquira o Plano de Treino Slim360 e siga um passo a passo simples para perder peso com seguranca e constancia.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Slim360 — Emagreça com Treinos e Dietas',
    description:
      'Adquira o Plano de Treino Slim360 e siga um passo a passo simples para perder peso com seguranca e constancia.',
  },
}

export const viewport: Viewport = {
  themeColor: '#16A34A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
