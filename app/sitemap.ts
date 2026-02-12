import { MetadataRoute } from 'next'

/**
 * Sitemap for NextLetter landing page
 * Canonical domain: https://www.nextletter.ch
 * 
 * DEV VERIFICATION: curl -I https://www.nextletter.ch/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Canonical URL: ALWAYS use www.nextletter.ch for SEO consistency
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextletter.ch'
  const now = new Date()

  return [
    // Page d'accueil — priorité maximale
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Pages légales — exclues du sitemap car noindex
    // Google n'a pas besoin de les trouver via le sitemap,
    // elles restent accessibles via les liens dans le footer
    // Pages de modèles de lettres de résiliation
    {
      url: `${baseUrl}/modeles/lettre-resiliation-bail-locataire-suisse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-bail-bailleur-suisse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-assurance-maladie-suisse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-assurance-complementaire`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-assurance-auto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-assurance-menage-rc`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-abonnement-mobile`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-internet-tv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-resiliation-abonnement-fitness`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-demission-suisse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modeles/lettre-motivation-suisse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

