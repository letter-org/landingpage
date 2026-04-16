/**
 * Configuration SEO centralisée – 100+ pages
 * Architecture scalable pour NextLetter
 *
 * @see lib/letter-models.ts - Modèles pour hub et maillage
 * @see app/modeles/[slug]/page.tsx - Route dynamique
 * @see app/guides/[slug]/page.tsx - Guides SEO
 */

export function slugifyBrand(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Assurances santé Suisse (top 20+)
export const ASSURANCE_SANTE_BRANDS = [
  "CSS", "Helsana", "Assura", "Swica", "Concordia", "AXA", "Generali", "Swisslife",
  "Sanagate", "Agrisano", "Aquilana", "Compact", "EGK", "Group Mutuel", "KPT",
  "Okk", "Philos", "Provita", "Sympany", "Vita", "Visana", "Atupri", "Bild",
  "Krankenkasse", "Lumneziana", "Mutuel", "Rhenus", "Sodalis", "Sumiswalder",
]

// Opérateurs télécom Suisse
export const TELECOM_BRANDS = [
  "Swisscom", "Sunrise", "Salt", "Yallo", "M-Budget", "Lycamobile", "Lebara",
  "Wingo", "UPC", "Quickline", "Aldi", "Coop", "Migros", "TalkTalk", "Oppo", "Galaxus", "Digitec",
]

// Banques, néobanques et cartes connues en Suisse
export const BANK_BRANDS = [
  "UBS", "PostFinance", "Raiffeisen", "Banque Migros", "BCV", "ZKB", "Banque Cler",
  "Baloise Bank", "yuh", "neon", "Zak", "Revolut", "Wise", "CSX", "Yapeal",
  "Cornercard", "Cembra", "Swisscard", "Bonus Card", "Viseca", "Valiant",
  "Julius Baer", "LUKB", "BCGE", "BCF", "BPS Suisse", "Alpian", "Bank Cler Zak", "CA Next Bank", "FlowBank",
]

// Leasing et mobilité
export const LEASING_BRANDS = [
  "AMAG Leasing", "BMW Financial Services", "Mercedes-Benz Financial Services",
  "Multilease", "Cembra Leasing", "Migrol Carsharing", "Mobility", "LeasePlan",
  "ALD Automotive", "Arval", "Ford Credit", "Hyundai Finance", "Kia Finance",
  "Renault Financial Services", "Toyota Financial Services", "Volvo Car Financial Services",
  "Tesla Leasing", "Emil Frey Leasing", "PSA Finance", "Nissan Finance",
]

// Streaming et divertissement
export const STREAMING_BRANDS = [
  "Netflix", "Disney Plus", "Spotify", "Apple Music", "Apple TV Plus", "YouTube Premium",
  "DAZN", "Sky", "Canal Plus", "Amazon Prime", "Paramount Plus", "Deezer",
  "Play Suisse", "Sunrise TV", "blue TV", "Audible", "Tidal", "Apple One", "RTL Plus", "Scribd",
]

// Fitness et sport
export const FITNESS_BRANDS = [
  "Activ Fitness", "Lets Go Fitness", "NonStop Gym", "PureGym", "Update Fitness",
  "Holmes Place", "Clever Fit", "Silhouette", "Satus", "One Training Center",
  "Mrs Sporty", "MySports Club", "Migros Fitnesspark", "Harmony Fitness", "INDIGO Fitness",
  "Kieser", "Evo Fitness", "Seven Fitness", "Physic Club", "David Lloyd",
]

// Presse et abonnements médias
export const MEDIA_BRANDS = [
  "Le Temps", "NZZ", "Blick", "24 heures", "Tribune de Geneve", "Tages-Anzeiger",
  "Basler Zeitung", "Abo Blick Plus", "Tamedia", "Femina", "Bilan", "PME Magazine",
  "Bon a Savoir", "L Hebdo", "Illustré", "La Liberte", "ArcInfo", "Heidi News",
  "SonntagsZeitung", "Finanz und Wirtschaft",
]

// Fournisseurs énergie/utilités (Internet déjà dans résiliation)
export const UTILITY_TYPES = [
  { slug: "electricite", title: "électricité" },
  { slug: "gaz", title: "gaz" },
  { slug: "eau", title: "eau" },
  { slug: "chauffage", title: "chauffage" },
]

/** Génère les slugs pour les pages assurance marque */
export function getAssuranceBrandSlugs(): string[] {
  return ASSURANCE_SANTE_BRANDS.map((b) =>
    `lettre-resiliation-assurance-${slugifyBrand(b)}-suisse`
  )
}

/** Génère les slugs pour les pages telecom marque */
export function getTelecomBrandSlugs(): string[] {
  return [...new Set(TELECOM_BRANDS)].map((b) =>
    `lettre-resiliation-${slugifyBrand(b)}-suisse`
  )
}

/** Génère les slugs pour les pages utilités */
export function getUtilitySlugs(): string[] {
  return UTILITY_TYPES.map((u) =>
    `lettre-resiliation-${u.slug}-suisse`
  )
}

export function getBankBrandSlugs(): string[] {
  return BANK_BRANDS.map((b) => `lettre-resiliation-compte-${slugifyBrand(b)}-suisse`)
}

export function getLeasingBrandSlugs(): string[] {
  return LEASING_BRANDS.map((b) => `lettre-resiliation-leasing-${slugifyBrand(b)}-suisse`)
}

export function getStreamingBrandSlugs(): string[] {
  return STREAMING_BRANDS.map((b) => `lettre-resiliation-abonnement-${slugifyBrand(b)}-suisse`)
}

export function getFitnessBrandSlugs(): string[] {
  return FITNESS_BRANDS.map((b) => `lettre-resiliation-fitness-${slugifyBrand(b)}-suisse`)
}

export function getMediaBrandSlugs(): string[] {
  return MEDIA_BRANDS.map((b) => `lettre-resiliation-abonnement-presse-${slugifyBrand(b)}-suisse`)
}
