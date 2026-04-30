import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spesifikasi JAECOO Bandung',
  description:
    'Detail spesifikasi model JAECOO meliputi performa, dimensi, fitur keselamatan, dan teknologi untuk pasar Bandung.',
  alternates: {
    canonical: '/specs',
  },
}

export default function SpecsPage() {
  redirect('/models#specs')
}
