import { notFound } from 'next/navigation'

import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import {
  SECTION_CONTENT,
  type SectionKey,
} from '../../lib/navigation'

type SectionPageProps = {
  params: {
    section: string
  }
}

export function generateStaticParams() {
  return Object.keys(SECTION_CONTENT).map((section) => ({ section }))
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = params.section as SectionKey
  const content = SECTION_CONTENT[section]

  if (!content || section === 'models' || section === 'specs') {
    notFound()
  }

  return (
    <>
      <Nav />
      <section style={{ paddingTop: 180, minHeight: '70vh' }}>
        <div className="sectionTag">JAECOO</div>
        <h1 className="sectionTitle">{content.title}</h1>
        <p className="sectionDesc">{content.description}</p>
      </section>
      <Footer />
    </>
  )
}
