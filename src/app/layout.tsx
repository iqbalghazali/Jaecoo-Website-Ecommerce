import './globals.css'
import type { Metadata } from 'next'
import { SHOWROOM_PHONE_DISPLAY, SOCIAL_LINKS } from '../lib/contact'

const siteUrl = 'https://www.jaecoomurahbdg.com'
const showroomAddress =
  'Jl. Soekarno-Hatta No. 590, Sekejati, Kec. Buah Batu, Kota Bandung, Jawa Barat 40286'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jaecoo Bandung',
    template: '%s | Jaecoo Bandung',
  },
  description:
    'Dealer resmi JAECOO Bandung. Cek harga OTR Bandung, promo, spesifikasi model, dan booking test drive via WhatsApp.',
  keywords: [
    'Jaecoo Bandung',
    'Dealer Jaecoo Bandung',
    'Jaecoo murah Bandung',
    'Harga Jaecoo Bandung',
    'Promo Jaecoo Bandung',
    'JAECOO Indonesia',
    'Mobil SUV Bandung',
    'Test drive Jaecoo',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Jaecoo Bandung',
    title: 'Jaecoo Bandung',
    description:
      'Official showroom JAECOO Bandung. Explore models, compare specs, and book a test drive.',
    locale: 'id_ID',
    images: [
      {
        url: '/Photos/J8 SHS.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaecoo Bandung showroom models',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaecoo Bandung',
    description:
      'Official showroom JAECOO Bandung. Explore models, compare specs, and book a test drive.',
    images: ['/Photos/J8 SHS.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Jaecoo Bandung',
    url: siteUrl,
    telephone: SHOWROOM_PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      streetAddress: showroomAddress,
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: '40286',
      addressCountry: 'ID',
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, SOCIAL_LINKS.facebook],
  }

  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
