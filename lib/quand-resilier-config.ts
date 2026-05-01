/**
 * Configuration des pages /quand-resilier-[contrat]
 * Cluster SEO "quand résilier assurance maladie suisse", "quand résilier bail suisse", etc.
 */

export interface QuandResilierEntry {
  slug: string
  title: string
  description: string
  delays: string
  deadlines: string
  modelPath: string
}

export const QUAND_RESILIATION_ENTRIES: QuandResilierEntry[] = [
  {
    slug: "assurance-maladie",
    title: "Assurance maladie",
    description: "Quand et comment résilier votre assurance maladie (LAMal) en Suisse.",
    delays: "Préavis de 1 mois pour une résiliation au 31 décembre. Pour une franchise de 300 CHF (modèle BASIS), préavis de 3 mois pour résiliation au 30 juin.",
    deadlines: "Pour résilier au 1er janvier : votre lettre doit être reçue avant le 30 novembre. Pour résilier au 1er juillet (franchise 300 CHF) : avant le 31 mars.",
    modelPath: "/modeles/lettre-resiliation-assurance-maladie-suisse",
  },
  {
    slug: "assurance-voiture",
    title: "Assurance voiture",
    description: "Quand et comment résilier votre assurance auto en Suisse.",
    delays: "Le préavis varie selon le contrat, généralement 3 mois. Vérifiez les conditions générales de votre assurance.",
    deadlines: "La résiliation prend effet à la date d'échéance annuelle du contrat. Envoyez votre lettre suffisamment tôt pour respecter le préavis.",
    modelPath: "/modeles/lettre-resiliation-assurance-voiture-suisse",
  },
  {
    slug: "bail-suisse",
    title: "Bail",
    description: "Quand et comment résilier votre bail en Suisse (locataire ou bailleur).",
    delays: "Préavis de 3 mois pour un bail à durée indéterminée. La résiliation doit tomber à une date d'échéance (généralement fin mars, fin juin, fin septembre ou fin décembre).",
    deadlines: "Pour quitter au 30 juin : envoyez votre résiliation avant le 31 mars. Pour le 31 décembre : avant le 30 septembre.",
    modelPath: "/modeles/resiliation-bail-suisse",
  },
  {
    slug: "fitness",
    title: "Abonnement fitness",
    description: "Quand et comment résilier votre abonnement salle de sport en Suisse.",
    delays: "Le préavis varie selon le contrat, souvent 1 à 3 mois. Les abonnements annuels peuvent être résiliés à l'échéance.",
    deadlines: "Vérifiez les conditions de votre contrat. Envoyez votre lettre par courrier recommandé pour avoir une preuve.",
    modelPath: "/modeles/lettre-resiliation-salle-sport-suisse",
  },
  {
    slug: "internet",
    title: "Abonnement Internet",
    description: "Quand et comment résilier votre abonnement Internet en Suisse.",
    delays: "Préavis généralement de 30 à 60 jours selon l'opérateur. Après la durée minimale du contrat.",
    deadlines: "Vérifiez la date de fin de votre engagement. Envoyez votre résiliation suffisamment tôt pour respecter le préavis.",
    modelPath: "/modeles/lettre-resiliation-internet-suisse",
  },
]

export function getQuandResilierBySlug(slug: string): QuandResilierEntry | undefined {
  return QUAND_RESILIATION_ENTRIES.find((e) => e.slug === slug)
}
