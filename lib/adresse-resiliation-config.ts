/**
 * Configuration des pages /adresse-resiliation-[entreprise]
 * Cluster SEO "adresse résiliation swisscom", "adresse résiliation helsana", etc.
 * Mots-clés transactionnels, peu concurrentiels
 */

export interface AdresseResiliationEntry {
  slug: string
  name: string
  type: "telecom" | "assurance"
  address: string
  delays: string
  modelPath: string
}

export const ADRESSE_RESILIATION_ENTRIES: AdresseResiliationEntry[] = [
  // Télécom
  {
    slug: "swisscom",
    name: "Swisscom",
    type: "telecom",
    address: "Swisscom, z.H. Kundenservice, Alte Tiefenaustrasse 6, 3050 Bern, Suisse",
    delays: "Internet/TV/ligne fixe : 60 jours. Téléphonie mobile : 30 jours.",
    modelPath: "/modeles/lettre-resiliation-swisscom-suisse",
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    type: "telecom",
    address: "Sunrise GmbH, Thurgauerstrasse 101B, 8152 Glattpark (Opfikon), Suisse",
    delays: "2 mois à la fin du mois. Résiliation possible par téléphone ou chat.",
    modelPath: "/modeles/lettre-resiliation-sunrise-suisse",
  },
  {
    slug: "salt",
    name: "Salt",
    type: "telecom",
    address: "Salt Mobile SA, Avenue de Malley 2, 1008 Prilly, Suisse",
    delays: "60 jours avant la fin de la durée minimale du contrat.",
    modelPath: "/modeles/lettre-resiliation-salt-suisse",
  },
  // Assurance
  {
    slug: "helsana",
    name: "Helsana",
    type: "assurance",
    address: "Helsana Assurances SA, Résiliations, Case postale 8081, 8050 Zurich, Suisse",
    delays: "Assurance de base : 1 mois (avant 30 nov. pour fin d'année). Complémentaire : 3 mois.",
    modelPath: "/modeles/lettre-resiliation-assurance-helsana-suisse",
  },
  {
    slug: "css",
    name: "CSS",
    type: "assurance",
    address: "CSS Assurance-maladie, Tribschenstrasse 21, 6002 Lucerne, Suisse",
    delays: "1 mois pour résiliation au 1er janvier (avant 30 nov.). 3 mois pour franchise 300 CHF.",
    modelPath: "/modeles/lettre-resiliation-assurance-css-suisse",
  },
  {
    slug: "assura",
    name: "Assura",
    type: "assurance",
    address: "Assura, Case postale 61, 1009 Pully, Suisse",
    delays: "Assurance de base : 1 mois (avant 30 nov.). Complémentaire : 3 mois.",
    modelPath: "/modeles/lettre-resiliation-assurance-assura-suisse",
  },
  {
    slug: "swica",
    name: "Swica",
    type: "assurance",
    address: "SWICA Assurance-maladie SA, Römerstrasse 38, 8401 Winterthour, Suisse",
    delays: "Assurance de base : 1 mois (avant 30 nov.). Complémentaire : 3 mois ou 1 mois selon cas.",
    modelPath: "/modeles/lettre-resiliation-assurance-swica-suisse",
  },
  {
    slug: "groupe-mutuel",
    name: "Groupe Mutuel",
    type: "assurance",
    address: "Groupe Mutuel, Rue Marterey 5, Case postale 292, 1001 Lausanne, Suisse",
    delays: "Assurance de base : 1 mois. Complémentaire : 3 mois.",
    modelPath: "/modeles/lettre-resiliation-assurance-group-mutuel-suisse",
  },
]

export function getAdresseResiliationBySlug(slug: string): AdresseResiliationEntry | undefined {
  return ADRESSE_RESILIATION_ENTRIES.find((e) => e.slug === slug)
}
