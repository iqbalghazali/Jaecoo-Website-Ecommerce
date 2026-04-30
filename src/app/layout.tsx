import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Jaecoo Bandung',
    template: '%s | Jaecoo Bandung',
  },
  description: 'Jaecoo Bandung - Official showroom and model information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
