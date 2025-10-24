import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BlueMarlinAI - Advanced AI Solutions for Your Business',
  description: 'BlueMarlinAI delivers cutting-edge artificial intelligence services that drive efficiency, innovation, and growth for enterprises of all sizes.',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0a0f1c'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} bg-[#0a0f1c] text-white antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}