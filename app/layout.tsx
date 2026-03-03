import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Estética em Forma — Emagreça em 30 DIAS',
  description:
    'Adquira o Plano de Treino Estética em Forma e siga um passo a passo simples para perder peso com segurançaa e constância. Treinos e dietas para sua rotina.',
  openGraph: {
    title: 'Plano Estética em Forma — Emagreça em 30 DIAS',
    description:
      'Adquira o Plano de Treino Estética em Forma e siga um passo a passo simples para perder peso com seguranca e constancia.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Estética em Forma — Emagreça em 30 DIAS',
    description:
      'Adquira o Plano de Treino Estética em Forma e siga um passo a passo simples para perder peso com seguranca e constancia.',
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
