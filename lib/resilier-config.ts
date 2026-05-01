/**
 * Configuration des pages /resilier-[entreprise]
 * Landing pages SEO pour requêtes "resilier swisscom", "resilier helsana", etc.
 */

export type ResilierType = "telecom" | "assurance" | "fitness"

export interface ResilierBrand {
  slug: string
  name: string
  type: ResilierType
  modelPath: string // lien vers le modèle de lettre
}

export const RESILIER_BRANDS: ResilierBrand[] = [
  // Télécom
  { slug: "swisscom", name: "Swisscom", type: "telecom", modelPath: "/modeles/lettre-resiliation-swisscom-suisse" },
  { slug: "sunrise", name: "Sunrise", type: "telecom", modelPath: "/modeles/lettre-resiliation-sunrise-suisse" },
  { slug: "salt", name: "Salt", type: "telecom", modelPath: "/modeles/lettre-resiliation-salt-suisse" },
  { slug: "yallo", name: "Yallo", type: "telecom", modelPath: "/modeles/lettre-resiliation-yallo-suisse" },
  { slug: "wingo", name: "Wingo", type: "telecom", modelPath: "/modeles/lettre-resiliation-wingo-suisse" },
  { slug: "upc", name: "UPC", type: "telecom", modelPath: "/modeles/lettre-resiliation-upc-suisse" },
  { slug: "quickline", name: "Quickline", type: "telecom", modelPath: "/modeles/lettre-resiliation-quickline-suisse" },
  // Assurance
  { slug: "helsana", name: "Helsana", type: "assurance", modelPath: "/modeles/lettre-resiliation-assurance-helsana-suisse" },
  { slug: "css-assurance", name: "CSS Assurance", type: "assurance", modelPath: "/modeles/lettre-resiliation-assurance-css-suisse" },
  { slug: "assura", name: "Assura", type: "assurance", modelPath: "/modeles/lettre-resiliation-assurance-assura-suisse" },
  { slug: "swica", name: "Swica", type: "assurance", modelPath: "/modeles/lettre-resiliation-assurance-swica-suisse" },
  { slug: "groupe-mutuel", name: "Groupe Mutuel", type: "assurance", modelPath: "/modeles/lettre-resiliation-assurance-group-mutuel-suisse" },
  // Fitness
  { slug: "fitnesspark", name: "Fitnesspark", type: "fitness", modelPath: "/modeles/lettre-resiliation-salle-sport-suisse" },
  { slug: "activfitness", name: "Activ Fitness", type: "fitness", modelPath: "/modeles/lettre-resiliation-salle-sport-suisse" },
  { slug: "puregym-suisse", name: "Puregym Suisse", type: "fitness", modelPath: "/modeles/lettre-resiliation-salle-sport-suisse" },
  { slug: "letsgo", name: "Letsgo", type: "fitness", modelPath: "/modeles/lettre-resiliation-salle-sport-suisse" },
]

export function getResilierBySlug(slug: string): ResilierBrand | undefined {
  return RESILIER_BRANDS.find((b) => b.slug === slug)
}
