import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const siteName = 'PAULTRAE INNOVATIONS'
const siteDescription =
  'Official business links for Paultrae Innovations. Website design, IT support, and direct contact for businesses in Lusaka, Zambia.'

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: new URL('https://paultraeinnovations.com'),
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: 'website',
    images: [
      {
        url: '/branding/favicon-glow.png',
        width: 256,
        height: 256,
        alt: 'Paultrae Innovations glowing logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/branding/favicon-glow.png'],
  },
  icons: {
    icon: '/branding/favicon-glow.png',
    shortcut: '/branding/favicon-glow.png',
    apple: '/branding/favicon-glow.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#081525',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}
