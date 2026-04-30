import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specs',
}

export default function SpecsPage() {
  redirect('/models#specs')
}
