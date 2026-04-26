import type { NavLink } from '../../lib/navigation'

export type ModelData = {
  slug: string
  badge: string
  name: string
  tagline: string
  price: string
  image: string
  specs: { value: string; label: string }[]
}

export const MODEL_NAV_LINKS: NavLink[] = [
  { label: 'j5-EV-Standard', href: '/models#model-j5-EV-Standard' },
  { label: 'j5-EV-Premium', href: '/models#model-j5-EV-Premium' },
  { label: 'J7 AWD', href: '/models#model-j7-awd' },
  { label: 'J7 SHS', href: '/models#model-j7-shs' },
  { label: 'J8 SHS', href: '/models#model-j8-shs' },
  { label: 'J8 ARDIS', href: '/models#model-j8-ardis' },
]

export const MODELS: ModelData[] = [
  {
    slug: 'j5-ev-Standard',
    badge: 'Entry EV SUV',
    name: 'J5 EV Standard',
    tagline: 'Compact electric SUV untuk mobilitas harian yang efisien dan praktis.',
    price: 'Rp 281.900.000 (OTR Bandung)',
    image: '/Photos/J5 EV Standard.webp',
    specs: [
      { value: 'BEV (Electric)', label: 'Powertrain' },
      { value: '210 PS', label: 'Power' },
      { value: '288 Nm', label: 'Torque' },
      { value: '461 km (NEDC)', label: 'Range' },
      { value: '9" Display', label: 'Infotainment' },
    ],
  },
  {
    slug: 'j5-ev-Premium',
    badge: 'Entry EV SUV',
    name: 'J5 EV Premium',
    tagline: 'Electric SUV dengan teknologi lebih canggih dan kenyamanan maksimal.',
    price: 'Rp 311.900.000 (OTR Bandung)',
    image: '/Photos/J5 EV Premium.webp',
    specs: [
      { value: 'BEV (Electric)', label: 'Powertrain' },
      { value: '210 PS', label: 'Power' },
      { value: '288 Nm', label: 'Torque' },
      { value: '461 km (NEDC)', label: 'Range' },
      { value: '13.2" Touchscreen', label: 'Infotainment' },
    ],
  },
  {
    slug: 'j7-awd',
    badge: 'Core Product',
    name: 'J7 AWD',
    tagline: 'Varian J7 dengan penggerak semua roda untuk all-terrain.',
    price: 'Rp 561.900.000 (OTR Bandung)',
    image: '/Photos/J7 AWD.jpg',
    specs: [
      { value: '2.0T', label: 'Engine' },
      { value: 'AWD', label: 'Drive' },
      { value: 'Up to 261 HP', label: 'Power' },
      { value: '7-Speed DCT', label: 'Transmission' },
    ],
  },
  {
    slug: 'j7-shs',
    badge: 'Hybrid Performance',
    name: 'J7 SHS',
    tagline: 'Super Hybrid System untuk efisiensi tinggi dan respons cepat.',
    price: 'Rp 511.900.000 (OTR Bandung)',
    image: '/Photos/J7 SHS.webp',
    specs: [
      { value: 'SHS Hybrid', label: 'Powertrain' },
      { value: 'FWD/AWD (varian)', label: 'Drive' },
      { value: 'High Efficiency', label: 'Fuel Economy' },
      { value: '8.3s', label: '0–100' },
    ],
  },
  {
    slug: 'j8-shs',
    badge: 'Luxury Hybrid',
    name: 'J8 SHS',
    tagline: 'Flagship SUV dengan SHS untuk performa dan efisiensi premium.',
    price: 'Rp 830.000.000 (OTR Bandung)',
    image: '/Photos/J8 SHS.jpg',
    specs: [
      { value: '2.0T', label: 'Engine' },
      { value: 'SHS Hybrid', label: 'Powertrain' },
      { value: 'Up to 249 HP', label: 'System Power' },
      { value: 'AWD', label: 'Drive' },
      { value: '6-7 Seats', label: 'Seating' },
    ],
  },
  {
    slug: 'j8-ardis',
    badge: 'Top Flagship',
    name: 'J8 ARDIS',
    tagline: 'Varian tertinggi J8 dengan fitur teknologi dan kenyamanan penuh.',
    price: 'Rp 701.900.000 (OTR Bandung)',
    image: '/Photos/J8 ARDIS.webp',
    specs: [
      { value: '2.0T Turbo', label: 'Engine' },
      { value: 'AWD', label: 'Drive' },
      { value: 'Premium ADAS', label: 'Safety Suite' },
      { value: '6-7 Seats', label: 'Seating' },
    ],
  },
]
