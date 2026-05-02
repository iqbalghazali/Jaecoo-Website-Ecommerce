import type { MetadataRoute } from 'next'

const siteUrl = 'https://jaecoomurahbdg.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/jaecoo-bandung',
    '/models',
    '/compare',
    '/specs',
    '/dealers',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
