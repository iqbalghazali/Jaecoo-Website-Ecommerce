import { NextResponse } from 'next/server'

import { MODEL_NAV_LINKS } from '../../../data/sections/models'
import { NAV_LINKS } from '../../../lib/navigation'

export async function GET() {
  return NextResponse.json(
    {
      links: NAV_LINKS,
      modelLinks: MODEL_NAV_LINKS,
    },
    { status: 200 },
  )
}
