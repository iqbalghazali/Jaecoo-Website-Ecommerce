import Footer from '../../components/Footer/Footer'
import ModelsSection from '../../components/Models/ModelsSection'
import Nav from '../../components/Nav/Nav'
import SpecsSection from '../../components/Specs/SpecsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Models',
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
