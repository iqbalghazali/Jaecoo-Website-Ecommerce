import Footer from '../../components/Footer/Footer'
import ModelsSection from '../../components/Models/ModelsSection'
import Nav from '../../components/Nav/Nav'
import SpecsSection from '../../components/Specs/SpecsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Model JAECOO Bandung',
  description:
    'Lihat lineup model JAECOO di Bandung, termasuk harga OTR, detail fitur, dan spesifikasi utama tiap varian.',
  alternates: {
    canonical: '/models',
  },
  openGraph: {
    title: 'Model JAECOO Bandung',
    description:
      'Bandingkan model JAECOO berdasarkan harga, fitur, dan spesifikasi untuk kebutuhan berkendara di Bandung.',
    url: 'https://www.jaecoomurahbdg.com/models',
  },
}

export default function ModelsPage() {
  return (
    <>
      <Nav />
      <ModelsSection />
      <SpecsSection />
      <Footer />
    </>
  )
}
