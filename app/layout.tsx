import './global.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Steven Ung — AI Engineer',
    template: '%s | Steven Ung',
  },
  description: "AI engineer building production agentic systems, evals and knowledge graphs, with a decade of data science across pharma, energy, banking and defense.",
  openGraph: {
    title: 'Steven Ung — AI Engineer',
    description: "AI engineer building production agentic systems, evals and knowledge graphs, with a decade of data science across pharma, energy, banking and defense.",
    url: baseUrl,
    siteName: 'Steven Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        playfair.variable,
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased text-neutral-900 bg-neutral-50" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
