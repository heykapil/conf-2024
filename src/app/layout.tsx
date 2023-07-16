import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CUSEC 2024',
  description: 'Made with 💖 by the CUSEC Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      >{children}</body>
    </html>
  )
}