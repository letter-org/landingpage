/**
 * Configuration des guides SEO NextLetter
 * Maillage : 6 modèles par guide + liens croisés via getCompanionGuides
 */

export interface GuideLink {
  slug: string
  title: string
  description: string
  path: string
  relatedModels: string[]
}

const P = {
  maladie: "/modeles/lettre-resiliation-assurance-maladie-suisse",
  css: "/modeles/lettre-resiliation-assurance-css-suisse",
  helsana: "/modeles/lettre-resiliation-assurance-helsana-suisse",
  axa: "/modeles/lettre-resiliation-assurance-axa-suisse",
  generali: "/modeles/lettre-resiliation-assurance-generali-suisse",
  bailLoc: "/modeles/lettre-resiliation-bail-locataire-suisse",
  bailBur: "/modeles/lettre-resiliation-bail-bailleur-suisse",
  bail: "/modeles/lettre-resiliation-bail-suisse",
  bailProp: "/modeles/lettre-resiliation-bail-proprietaire-suisse",
  demission: "/modeles/lettre-demission-suisse",
  facture: "/modeles/lettre-contestation-facture-suisse",
  amende: "/modeles/lettre-contestation-amende-suisse",
  oppoPour: "/modeles/lettre-opposition-poursuite-suisse",
  remb: "/modeles/lettre-demande-remboursement-suisse",
  mobile: "/modeles/lettre-resiliation-abonnement-mobile",
  tel: "/modeles/lettre-resiliation-telephone-suisse",
  internet: "/modeles/lettre-resiliation-internet-suisse",
  internetTv: "/modeles/lettre-resiliation-internet-tv",
  sport: "/modeles/lettre-resiliation-salle-sport-suisse",
  fitness: "/modeles/lettre-resiliation-abonnement-fitness",
  loyer: "/modeles/lettre-augmentation-loyer-contestation-suisse",
  compl: "/modeles/lettre-resiliation-assurance-complementaire",
  auto: "/modeles/lettre-resiliation-assurance-auto",
  voiture: "/modeles/lettre-resiliation-assurance-voiture-suisse",
  rc: "/modeles/lettre-resiliation-assurance-rc-suisse",
  menage: "/modeles/lettre-resiliation-assurance-menage-rc",
  assuranceAll: "/modeles/lettre-resiliation-assurance-suisse",
  abo: "/modeles/lettre-resiliation-abonnement-suisse",
  swisscom: "/modeles/lettre-resiliation-swisscom-suisse",
  sunrise: "/modeles/lettre-resiliation-sunrise-suisse",
  salt: "/modeles/lettre-resiliation-salt-suisse",
  reclam: "/modeles/lettre-reclamation-consommateur-suisse",
  oppoPre: "/modeles/lettre-opposition-prelevement-suisse",
  delai: "/modeles/lettre-demande-delai-paiement-suisse",
  arrang: "/modeles/lettre-demande-arrangement-dette-suisse",
  demenagement: "/modeles/lettre-demenagement-postal-suisse",
  certif: "/modeles/lettre-demande-certificat-travail-suisse",
  conge: "/modeles/lettre-demande-conge-suisse",
  augSal: "/modeles/lettre-demande-augmentation-salaire-suisse",
  licenciement: "/modeles/lettre-licenciement-employeur-suisse",
  mainlev: "/modeles/lettre-mainlevee-poursuite-suisse",
  voisin: "/modeles/lettre-probleme-voisin-suisse",
  yallo: "/modeles/lettre-resiliation-yallo-suisse",
}

export const ALL_GUIDES: GuideLink[] = [
  {
    slug: "comment-envoyer-lettre-recommandee-suisse",
    title: "Comment envoyer une lettre recommandée en Suisse",
    description:
      "Guide complet : envoi lettre recommandée, preuve, délais, La Poste et alternatives en ligne.",
    path: "/guides/comment-envoyer-lettre-recommandee-suisse",
    relatedModels: [P.maladie, P.bailLoc, P.demission, P.facture, P.amende, P.oppoPour],
  },
  {
    slug: "comment-resilier-assurance-suisse",
    title: "Comment résilier une assurance en Suisse",
    description: "Délais, préavis, courrier recommandé. Guide résiliation assurance maladie, auto, ménage.",
    path: "/guides/comment-resilier-assurance-suisse",
    relatedModels: [P.maladie, P.css, P.helsana, P.assuranceAll, P.auto, P.compl],
  },
  {
    slug: "comment-resilier-bail-suisse",
    title: "Comment résilier un bail en Suisse",
    description: "Délai 3 mois, dates d'échéance, courrier recommandé. Guide locataire et bailleur.",
    path: "/guides/comment-resilier-bail-suisse",
    relatedModels: [P.bailLoc, P.bailBur, P.bail, P.bailProp, P.loyer, P.demenagement],
  },
  {
    slug: "comment-contester-facture-suisse",
    title: "Comment contester une facture en Suisse",
    description: "Délais, motifs, courrier recommandé. Guide contestation facture erronée.",
    path: "/guides/comment-contester-facture-suisse",
    relatedModels: [P.facture, P.remb, P.reclam, P.oppoPre, P.delai, P.arrang],
  },
  {
    slug: "comment-contester-amende-suisse",
    title: "Comment contester une amende en Suisse",
    description: "Délais, procédure, recours. Guide contestation amende circulation ou administrative.",
    path: "/guides/comment-contester-amende-suisse",
    relatedModels: [P.amende, P.oppoPour, P.mainlev, P.facture, P.demission, P.maladie],
  },
  {
    slug: "comment-resilier-abonnement-mobile-suisse",
    title: "Comment résilier un abonnement mobile en Suisse",
    description: "Préavis, fin d'engagement et preuve d'envoi pour résilier votre forfait mobile.",
    path: "/guides/comment-resilier-abonnement-mobile-suisse",
    relatedModels: [P.mobile, P.tel, P.sunrise, P.swisscom, P.salt, P.yallo],
  },
  {
    slug: "comment-resilier-internet-suisse",
    title: "Comment résilier un abonnement Internet en Suisse",
    description: "Box, fibre ou câble : résiliation écrite, délais et courrier recommandé.",
    path: "/guides/comment-resilier-internet-suisse",
    relatedModels: [P.internet, P.internetTv, P.abo, P.swisscom, P.sunrise, P.salt],
  },
  {
    slug: "comment-resilier-salle-sport-suisse",
    title: "Comment résilier une salle de sport ou un fitness en Suisse",
    description: "Fin d'abonnement, période d'engagement et lettre de résiliation avec preuve.",
    path: "/guides/comment-resilier-salle-sport-suisse",
    relatedModels: [P.sport, P.fitness, P.mobile, P.abo, P.remb, P.facture],
  },
  {
    slug: "comment-demissionner-en-suisse",
    title: "Comment démissionner en Suisse (préavis et forme)",
    description: "Lettre de démission, délai de préavis CO et envoi recommandé pour la preuve.",
    path: "/guides/comment-demissionner-en-suisse",
    relatedModels: [P.demission, P.certif, P.conge, P.augSal, P.licenciement, P.delai],
  },
  {
    slug: "comment-demander-remboursement-suisse",
    title: "Comment demander un remboursement en Suisse",
    description: "Réclamation, délais et lettre motivée pour obtenir un remboursement ou un avoir.",
    path: "/guides/comment-demander-remboursement-suisse",
    relatedModels: [P.remb, P.facture, P.reclam, P.oppoPre, P.delai, P.arrang],
  },
  {
    slug: "comment-contester-augmentation-loyer-suisse",
    title: "Comment contester une augmentation de loyer en Suisse",
    description: "Formalités, motivation écrite et courrier recommandé pour une contestation de loyer.",
    path: "/guides/comment-contester-augmentation-loyer-suisse",
    relatedModels: [P.loyer, P.bailLoc, P.bailBur, P.voisin, P.demenagement, P.bail],
  },
  {
    slug: "comment-resilier-assurance-complementaire-suisse",
    title: "Comment résilier une assurance complémentaire en Suisse",
    description: "Assurance hospitalisation ou complémentaire LCA : préavis, échéances et courrier.",
    path: "/guides/comment-resilier-assurance-complementaire-suisse",
    relatedModels: [P.compl, P.maladie, P.axa, P.generali, P.css, P.assuranceAll],
  },
  {
    slug: "comment-rediger-reclamation-consommateur-suisse",
    title: "Comment rédiger une réclamation consommateur en Suisse",
    description: "Lettre structurée, preuves et envoi recommandé pour défendre vos droits.",
    path: "/guides/comment-rediger-reclamation-consommateur-suisse",
    relatedModels: [P.reclam, P.facture, P.remb, P.oppoPre, P.amende, P.delai],
  },
  {
    slug: "comment-demander-certificat-travail-suisse",
    title: "Comment demander un certificat de travail en Suisse",
    description: "Obligation de l'employeur, délai et forme d'une demande écrite avec preuve.",
    path: "/guides/comment-demander-certificat-travail-suisse",
    relatedModels: [P.certif, P.demission, P.conge, P.licenciement, P.augSal, P.delai],
  },
  {
    slug: "comment-demander-delai-paiement-suisse",
    title: "Comment demander un délai ou un arrangement de paiement en Suisse",
    description: "Lettre de demande de report, mise en demeure et négociation avec preuve d'envoi.",
    path: "/guides/comment-demander-delai-paiement-suisse",
    relatedModels: [P.delai, P.arrang, P.facture, P.oppoPour, P.remb, P.oppoPre],
  },
  {
    slug: "comment-notifier-demenagement-suisse",
    title: "Comment notifier un déménagement (lettres et preuves) en Suisse",
    description: "Caisse, employeur, fournisseurs : quelles notifications par écrit et pourquoi.",
    path: "/guides/comment-notifier-demenagement-suisse",
    relatedModels: [P.demenagement, P.bailLoc, P.maladie, P.internet, P.mobile, P.assuranceAll],
  },
  {
    slug: "comment-envoyer-courrier-administration-suisse",
    title: "Comment envoyer un courrier à une administration en Suisse",
    description: "Forme recommandée, preuve d'envoi et bonnes pratiques pour les autorités.",
    path: "/guides/comment-envoyer-courrier-administration-suisse",
    relatedModels: [P.amende, P.oppoPour, P.facture, P.maladie, P.demission, P.demenagement],
  },
  {
    slug: "comment-resilier-assurance-auto-suisse",
    title: "Comment résilier une assurance auto ou véhicule en Suisse",
    description: "Échéances, préavis selon police et résiliation par écrit avec courrier recommandé.",
    path: "/guides/comment-resilier-assurance-auto-suisse",
    relatedModels: [P.auto, P.voiture, P.rc, P.assuranceAll, P.menage, P.maladie],
  },
  {
    slug: "comment-opposition-prelevement-suisse",
    title: "Comment s'opposer à un prélèvement ou révoquer un mandat LSV en Suisse",
    description: "Opposition LSV, contestation et lettre recommandée à la banque ou au créancier.",
    path: "/guides/comment-opposition-prelevement-suisse",
    relatedModels: [P.oppoPre, P.facture, P.delai, P.arrang, P.oppoPour, P.remb],
  },
  {
    slug: "comment-relancer-fournisseur-suisse",
    title: "Comment relancer un fournisseur ou un prestataire en Suisse",
    description: "Mise en demeure amiable, délais de réponse et preuves pour une relance efficace.",
    path: "/guides/comment-relancer-fournisseur-suisse",
    relatedModels: [P.facture, P.remb, P.reclam, P.delai, P.loyer, P.internet],
  },
]

export function getGuideBySlug(slug: string): GuideLink | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug)
}

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
    "comment-resilier-abonnement-mobile-suisse": ["abonnement-mobile", "telephone", "sunrise", "salt", "swisscom"],
    "comment-resilier-internet-suisse": ["internet", "swisscom", "sunrise"],
    "comment-resilier-salle-sport-suisse": ["salle-sport", "fitness"],
    "comment-demissionner-en-suisse": ["demission", "certificat", "travail"],
    "comment-demander-remboursement-suisse": ["remboursement", "contestation-facture"],
    "comment-contester-augmentation-loyer-suisse": ["loyer", "bail"],
    "comment-resilier-assurance-complementaire-suisse": ["complementaire", "assurance"],
    "comment-rediger-reclamation-consommateur-suisse": ["reclamation", "consommateur"],
    "comment-demander-certificat-travail-suisse": ["certificat", "travail"],
    "comment-demander-delai-paiement-suisse": ["delai", "paiement", "arrangement"],
    "comment-notifier-demenagement-suisse": ["demenagement", "bail"],
    "comment-envoyer-courrier-administration-suisse": ["contestation-amende", "opposition"],
    "comment-resilier-assurance-auto-suisse": ["assurance-auto", "voiture"],
    "comment-opposition-prelevement-suisse": ["opposition-prelevement", "prelevement"],
    "comment-relancer-fournisseur-suisse": ["contestation-facture", "reclamation", "fournisseur"],
  }
  const scored = ALL_GUIDES.filter((g) => !exact.includes(g)).map((g) => {
    const keywords = byKeyword[g.slug] || []
    const score = keywords.some((k) => slug.includes(k)) ? 1 : 0
    return { guide: g, score }
  })
  const byRelevance = scored.sort((a, b) => b.score - a.score).map((s) => s.guide)
  return [...exact, ...byRelevance].slice(0, limit)
}

export function getCompanionGuides(currentSlug: string, limit = 2): GuideLink[] {
  const current = getGuideBySlug(currentSlug)
  const others = ALL_GUIDES.filter((g) => g.slug !== currentSlug)
  if (!current) return others.slice(0, limit)
  const relatedSet = new Set(current.relatedModels)
  const scored = others.map((g) => ({
    g,
    score: g.relatedModels.filter((p) => relatedSet.has(p)).length,
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.map((s) => s.g).slice(0, limit)
}
