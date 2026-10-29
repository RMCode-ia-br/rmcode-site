import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rmcode.ia.br'),
  title: 'RMCode | Software sob medida e soluções corporativas com IA',
  description:
    'A RMCode desenvolve software sob medida e soluções corporativas com Inteligência Artificial para acelerar a transformação digital da sua empresa.',
  keywords: ['desenvolvimento de software', 'software sob medida', 'inteligência artificial', 'IA corporativa', 'transformação digital', 'RMCode'],
  generator: 'v0.app',
  openGraph: {
    title: 'RMCode | Software sob medida e IA corporativa',
    description: 'Transformação digital com software sob medida e Inteligência Artificial.',
    url: 'https://rmcode.ia.br',
    siteName: 'RMCode',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f24',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
