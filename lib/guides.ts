/**
 * Configuration des guides SEO NextLetter
 * Long-form content pour le référencement
 */

export interface GuideLink {
  slug: string
  title: string
  description: string
  path: string
  relatedModels: string[] // paths des modèles liés
}

export const ALL_GUIDES: GuideLink[] = [
  {
    slug: "comment-envoyer-lettre-recommandee-suisse",
    title: "Comment envoyer une lettre recommandée en Suisse",
    description: "Guide complet : envoi lettre recommandée, preuve, délais, La Poste et alternatives en ligne.",
    path: "/guides/comment-envoyer-lettre-recommandee-suisse",
    relatedModels: ["/modeles/lettre-resiliation-assurance-maladie-suisse", "/modeles/lettre-resiliation-bail-locataire-suisse", "/modeles/lettre-demission-suisse"],
  },
  {
    slug: "comment-resilier-assurance-suisse",
    title: "Comment résilier une assurance en Suisse",
    description: "Délais, préavis, courrier recommandé. Guide résiliation assurance maladie, auto, ménage.",
    path: "/guides/comment-resilier-assurance-suisse",
    relatedModels: ["/modeles/lettre-resiliation-assurance-maladie-suisse", "/modeles/lettre-resiliation-assurance-auto", "/modeles/lettre-resiliation-assurance-css-suisse"],
  },
  {
    slug: "comment-resilier-bail-suisse",
    title: "Comment résilier un bail en Suisse",
    description: "Délai 3 mois, dates d'échéance, courrier recommandé. Guide locataire et bailleur.",
    path: "/guides/comment-resilier-bail-suisse",
    relatedModels: ["/modeles/lettre-resiliation-bail-locataire-suisse", "/modeles/lettre-resiliation-bail-bailleur-suisse", "/modeles/lettre-resiliation-bail-suisse"],
  },
  {
    slug: "comment-contester-facture-suisse",
    title: "Comment contester une facture en Suisse",
    description: "Délais, motifs, courrier recommandé. Guide contestation facture erronée.",
    path: "/guides/comment-contester-facture-suisse",
    relatedModels: ["/modeles/lettre-contestation-facture-suisse", "/modeles/lettre-demande-remboursement-suisse"],
  },
  {
    slug: "comment-contester-amende-suisse",
    title: "Comment contester une amende en Suisse",
    description: "Délais, procédure, recours. Guide contestation amende circulation ou administrative.",
    path: "/guides/comment-contester-amende-suisse",
    relatedModels: ["/modeles/lettre-contestation-amende-suisse", "/modeles/lettre-opposition-poursuite-suisse"],
  },
]

export function getGuideBySlug(slug: string): GuideLink | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug)
}

/** 2 guides pertinents pour une page modèle (priorité aux guides liés) */
export function getRelatedGuides(modelPath: string, limit = 2): GuideLink[] {
  const exact = ALL_GUIDES.filter((g) => g.relatedModels.includes(modelPath))
  if (exact.length >= limit) return exact.slice(0, limit)
  const slug = modelPath.toLowerCase()
  const byKeyword: Record<string, string[]> = {
    "comment-resilier-assurance-suisse": ["resiliation-assurance", "assurance"],
    "comment-resilier-bail-suisse": ["resiliation-bail", "bail"],
    "comment-contester-facture-suisse": ["contestation-facture", "remboursement"],
    "comment-contester-amende-suisse": ["contestation-amende", "opposition-poursuite"],
    "comment-envoyer-lettre-recommandee-suisse": ["resiliation", "demission", "contestation"],
  }
  const scored = ALL_GUIDES.filter((g) => !exact.includes(g)).map((g) => {
    const keywords = byKeyword[g.slug] || []
    const score = keywords.some((k) => slug.includes(k)) ? 1 : 0
    return { guide: g, score }
  })
  const byRelevance = scored.sort((a, b) => b.score - a.score).map((s) => s.guide)
  return [...exact, ...byRelevance].slice(0, limit)
}
