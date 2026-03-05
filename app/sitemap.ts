import { MetadataRoute } from 'next'
import { ALL_LETTER_MODELS } from '@/lib/letter-models'

/**
 * Sitemap for NextLetter landing page
 * Canonical domain: https://www.nextletter.ch
 * 
 * DEV VERIFICATION: curl -I https://www.nextletter.ch/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextletter.ch'
  const now = new Date()

  const modelEntries = [
    // Page hub modèles — priorité haute
    {
      url: `${baseUrl}/modeles`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    // Tous les modèles depuis la config centralisée
    ...ALL_LETTER_MODELS.map((model) => ({
      url: `${baseUrl}${model.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/communes`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...modelEntries,
  ]
}

