import { MetadataRoute } from 'next'
import { ALL_LETTER_MODELS } from '@/lib/letter-models'
import { ALL_GUIDES } from '@/lib/guides'
import { RESILIER_BRANDS } from '@/lib/resilier-config'
import { ADRESSE_RESILIATION_ENTRIES } from '@/lib/adresse-resiliation-config'
import { QUAND_RESILIATION_ENTRIES } from '@/lib/quand-resilier-config'

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
    { url: `${baseUrl}/generateur-lettre-suisse`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${baseUrl}/envoyer-lettre-en-ligne-suisse`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/preuve-legale-lettre-recommandee-suisse`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.88 },
    { url: `${baseUrl}/comment-faire-opposition-poursuite`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.88 },
    { url: `${baseUrl}/delai-opposition-poursuite`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.88 },
    { url: `${baseUrl}/annuler-poursuite-suisse`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.88 },
  ]

  const resilierEntries = RESILIER_BRANDS.map((b) => ({
    url: `${baseUrl}/resilier-${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const adresseEntries = ADRESSE_RESILIATION_ENTRIES.map((e) => ({
    url: `${baseUrl}/adresse-resiliation-${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const quandEntries = QUAND_RESILIATION_ENTRIES.map((e) => ({
    url: `${baseUrl}/quand-resilier-${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const assuranceMaladieEntries = [
    { url: `${baseUrl}/resilier-assurance-maladie`, priority: 0.9 },
    { url: `${baseUrl}/changer-assurance-maladie`, priority: 0.88 },
    { url: `${baseUrl}/delai-resiliation-assurance-maladie`, priority: 0.88 },
  ].map((e) => ({
    url: e.url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: e.priority,
  }))

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/communes`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...landingEntries,
    ...assuranceMaladieEntries,
    ...resilierEntries,
    ...adresseEntries,
    ...quandEntries,
    ...modelEntries,
    ...guideEntries,
  ]
}

