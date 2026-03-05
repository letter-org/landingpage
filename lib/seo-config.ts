/**
 * Configuration SEO centralisée – 100+ pages
 * Architecture scalable pour NextLetter
 *
 * @see lib/letter-models.ts - Modèles pour hub et maillage
 * @see app/modeles/[slug]/page.tsx - Route dynamique
 * @see app/guides/[slug]/page.tsx - Guides SEO
 */

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
  "Wingo", "Aldi", "Coop", "Migros", "TalkTalk", "Oppo", "Galaxus", "Digitec",
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
    `lettre-resiliation-assurance-${b.toLowerCase()}-suisse`
  )
}

/** Génère les slugs pour les pages telecom marque */
export function getTelecomBrandSlugs(): string[] {
  return [...new Set(TELECOM_BRANDS)].map((b) =>
    `lettre-resiliation-${b.toLowerCase()}-suisse`
  )
}

/** Génère les slugs pour les pages utilités */
export function getUtilitySlugs(): string[] {
  return UTILITY_TYPES.map((u) =>
    `lettre-resiliation-${u.slug}-suisse`
  )
}
