import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

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

const DEDICATED_ROUTES = new Set<SectionKey>(['models', 'specs', 'compare'])

export function generateStaticParams() {
  return (Object.keys(SECTION_CONTENT) as SectionKey[])
    .filter((section) => !DEDICATED_ROUTES.has(section))
    .map((section) => ({ section }))
}

export function generateMetadata({ params }: SectionPageProps): Metadata {
  const section = params.section as SectionKey
  const content = SECTION_CONTENT[section]

  if (!content || DEDICATED_ROUTES.has(section)) {
    return {
      title: 'Jaecoo Bandung',
    }
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${section}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://jaecoomurahbdg.com/${section}`,
    },
  }
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = params.section as SectionKey
  const content = SECTION_CONTENT[section]

  if (!content || DEDICATED_ROUTES.has(section)) {
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
