/**
 * Extraction du nom de marque / service pour les pages modèles générées
 */

import type { LetterModelCategory, LetterModelLink } from "./letter-models"

export const SEO_DYNAMIC_MODEL_CATEGORIES: LetterModelCategory[] = [
  "assurance-marque",
  "telecom-marque",
  "banque-marque",
  "leasing-marque",
  "streaming-marque",
  "fitness-marque",
  "media-marque",
  "utilities",
]

export function isSeoDynamicModelCategory(cat: LetterModelCategory): boolean {
  return SEO_DYNAMIC_MODEL_CATEGORIES.includes(cat)
}

export function extractBrandFromLetterModel(model: LetterModelLink): string {
  const { title, category } = model
  switch (category) {
    case "assurance-marque":
      return title.replace("Résiliation assurance ", "")
    case "telecom-marque":
      return title.replace("Résiliation ", "")
    case "banque-marque":
      return title.replace("Résiliation compte ", "")
    case "leasing-marque":
      return title.replace("Résiliation leasing ", "")
    case "streaming-marque":
      return title.replace("Résiliation abonnement ", "")
    case "fitness-marque":
      return title.replace("Résiliation fitness ", "")
    case "media-marque":
      return title.replace("Résiliation abonnement presse ", "")
    case "utilities":
      return title.replace("Résiliation ", "")
    default:
      return ""
  }
}
