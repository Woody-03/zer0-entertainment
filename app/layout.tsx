import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Zero Entertainment — Sierra Leone',
  description: 'Your ultimate destination for African music, entertainment news, and cultural content from Sierra Leone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={syne.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}