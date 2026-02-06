import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Canonical URL: ALWAYS use www.nextletter.ch for SEO consistency
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextletter.ch'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

