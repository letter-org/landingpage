import { MetadataRoute } from 'next'
import { ALL_LETTER_MODELS } from '@/lib/letter-models'
import { ALL_GUIDES } from '@/lib/guides'

/**
 * Sitemap for NextLetter landing page
 * Canonical domain: https://www.nextletter.ch
 * 100+ pages SEO : modèles, guides, landing
 *
 * DEV VERIFICATION: curl -I https://www.nextletter.ch/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextletter.ch'
  const now = new Date()

  const modelEntries = [
    {
      url: `${baseUrl}/modeles`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    ...ALL_LETTER_MODELS.map((model) => ({
      url: `${baseUrl}${model.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const guideEntries = ALL_GUIDES.map((guide) => ({
    url: `${baseUrl}${guide.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const landingEntries = [
    {
      url: `${baseUrl}/envoyer-lettre-en-ligne-suisse`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/communes`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...landingEntries,
    ...modelEntries,
    ...guideEntries,
  ]
}

