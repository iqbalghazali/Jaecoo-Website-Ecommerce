import type { Metadata } from 'next'

import Nav from '../../components/Nav/Nav'
import DealersSection from '../../components/Dealers/DealersSection'
import BookingSection from '../../components/Booking/BookingSection'
import Footer from '../../components/Footer/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp/FloatingWhatsApp'

const siteUrl = 'https://jaecoomurahbdg.com'

export const metadata: Metadata = {
  title: 'Jaecoo Bandung (Harga, Promo, Test Drive)',
  description:
    'Cari Jaecoo Bandung? Cek harga OTR Bandung, promo, spesifikasi model JAECOO, dan booking test drive via WhatsApp.',
  keywords: [
    'Jaecoo Bandung',
    'Jaecoo murah Bandung',
    'Dealer Jaecoo Bandung',
    'Harga Jaecoo Bandung',
    'Promo Jaecoo Bandung',
    'Test drive Jaecoo Bandung',
  ],
  alternates: {
    canonical: '/jaecoo-bandung',
  },
  openGraph: {
    title: 'Jaecoo Bandung (Harga, Promo, Test Drive)',
    description:
      'Cek harga OTR Bandung, promo, dan booking test drive JAECOO Bandung via WhatsApp.',
    url: `${siteUrl}/jaecoo-bandung`,
  },
}

export default function JaecooBandungPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 180 }}>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
          <div className="sectionTag">JAECOO BANDUNG</div>
          <h1 className="sectionTitle">Jaecoo Bandung</h1>
          <p className="sectionDesc">
            Sedang mencari <strong>Jaecoo Bandung</strong> atau{' '}
            <strong>Jaecoo murah Bandung</strong>? Di sini Anda bisa cek info model,
            kisaran harga OTR Bandung, promo, dan langsung booking test drive via
            WhatsApp.
          </p>

          <div style={{ marginTop: 28, display: 'grid', gap: 14 }}>
            <h2 style={{ margin: 0 }}>Pertanyaan yang sering dicari</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
              <li>Berapa harga OTR Jaecoo di Bandung?</li>
              <li>Ada promo/DP ringan untuk Jaecoo Bandung?</li>
              <li>Bagaimana cara booking test drive di Bandung?</li>
              <li>Model apa saja yang tersedia (J5 EV, J7 SHS, J8 SHS)?</li>
            </ul>
          </div>
        </section>

        <DealersSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

