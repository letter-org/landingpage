import { MetadataRoute } from 'next'

/**
 * Robots.txt for NextLetter landing page
 * Allows all crawlers, disallows /api/ and /admin/
 * References sitemap at https://www.nextletter.ch/sitemap.xml
 * 
 * DEV VERIFICATION: curl -I https://www.nextletter.ch/robots.txt
 */
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

