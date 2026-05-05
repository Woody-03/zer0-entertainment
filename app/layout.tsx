import type { Metadata } from 'next'
import './globals.css'

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
      <head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}