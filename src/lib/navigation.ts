export type NavLink = {
  label: string
  href: string
}

export type SectionKey =
  | 'models'
  | 'specs'
  // | 'finance'
  | 'compare'
  // | 'dealers'
  // | 'book-test-drive'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  // { label: 'Finance', href: '/finance' },
  { label: 'Compare', href: '/compare' },
  // { label: 'Dealers', href: '/dealers' },
  // { label: 'Book Test Drive', href: '/book-test-drive' },
]

export const SECTION_CONTENT: Record<
  SectionKey,
  { title: string; description: string }
> = {
  models: {
    title: 'Models',
    description:
      'Browse the latest JAECOO models and compare trims built for urban comfort and off-road confidence.',
  },
  specs: {
    title: 'Specs',
    description:
      'Explore full technical specifications, dimensions, safety systems, and performance highlights.',
  },
  // finance: {
  //   title: 'Finance',
  //   description:
  //     'Review financing options, monthly installment estimates, and current promotional programs.',
  // },
  compare: {
    title: 'Compare',
    description:
      'Compare JAECOO models side by side to find the best fit for your lifestyle and budget.',
  },
  // dealers: {
  //   title: 'Dealers',
  //   description:
  //     'Find official dealerships near you and get contact details for showroom visits and support.',
  // },
  // 'book-test-drive': {
  //   title: 'Book Test Drive',
  //   description:
  //     'Schedule your test drive and let our team prepare the vehicle, date, and route that suit you.',
  // },
}
