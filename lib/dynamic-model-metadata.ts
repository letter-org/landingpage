/**
 * Titres et descriptions SEO renforcés pour les pages modèles dynamiques (par marque / cluster)
 */

import { ALL_LETTER_MODELS, type LetterModelLink } from "./letter-models"
import { extractBrandFromLetterModel, isSeoDynamicModelCategory } from "./model-brand-utils"
import { getPriorityOverrideForModel } from "./priority-model-overrides"

function clip(s: string, max: number): string {
  if (s.length <= max) return s
  return s.slice(0, max - 1).trimEnd() + "…"
}

function metaForModel(model: LetterModelLink): { title: string; description: string } {
  const name = extractBrandFromLetterModel(model)
  const baseDesc =
    "Générez votre lettre, téléchargez le PDF et envoyez en recommandé avec preuve d'envoi. Particuliers et PME en Suisse."

  switch (model.category) {
    case "assurance-marque":
      return {
        title: clip(`Lettre résiliation assurance ${name} Suisse – modèle & envoi recommandé`, 62),
        description: clip(
          `Modèle de résiliation ${name} (assurance maladie / caisse). ${baseDesc}`,
          158,
        ),
      }
    case "telecom-marque":
      return {
        title: clip(`Résiliation ${name} Suisse – lettre recommandée & preuve`, 62),
        description: clip(
          `Résiliez votre abonnement ${name} : lettre type, délais à respecter selon contrat, envoi recommandé. ${baseDesc}`,
          158,
        ),
      }
    case "banque-marque":
      return {
        title: clip(`Clôture compte ${name} Suisse – lettre type & recommandé`, 62),
        description: clip(
          `Demande de clôture ou résiliation ${name} par courrier traçable. Vérifiez soldes, cartes et produits liés. ${baseDesc}`,
          158,
        ),
      }
    case "leasing-marque":
      return {
        title: clip(`Résiliation leasing ${name} Suisse – lettre & preuve d'envoi`, 62),
        description: clip(
          `Courrier pour ${name} : fin de leasing, restitution ou demande selon votre contrat. Anticipez les clauses et délais. ${baseDesc}`,
          158,
        ),
      }
    case "streaming-marque":
      return {
        title: clip(`Résiliation ${name} Suisse – modèle lettre recommandée`, 62),
        description: clip(
          `Résiliez ${name} avec une trace claire : date de fin, identifiant client, demande de confirmation. ${baseDesc}`,
          158,
        ),
      }
    case "fitness-marque":
      return {
        title: clip(`Résiliation salle ${name} Suisse – lettre & recommandé`, 62),
        description: clip(
          `Fin d'abonnement ${name} : préavis, engagement, reconduction. Formalisez votre demande par écrit recommandé. ${baseDesc}`,
          158,
        ),
      }
    case "media-marque":
      return {
        title: clip(`Résiliation abonnement ${name} Suisse – lettre recommandée`, 62),
        description: clip(
          `Presse ou média ${name} : résiliation papier/numérique, références d'abonnement, preuve d'envoi. ${baseDesc}`,
          158,
        ),
      }
    case "utilities":
      return {
        title: clip(`Résiliation ${name} Suisse – modèle lettre & envoi recommandé`, 62),
        description: clip(
          `Résiliez votre contrat ${name} en Suisse : courrier clair, délai selon fournisseur, recommandé pour la trace. ${baseDesc}`,
          158,
        ),
      }
    default:
      return {
        title: clip(`${model.title} Suisse – modèle & envoi recommandé`, 62),
        description: clip(`${model.subtitle}. ${baseDesc}`, 158),
      }
  }
}

/** Retourne title/description enrichis si la page est un modèle dynamique SEO, sinon null */
export function getEnhancedDynamicModelMetadata(slug: string): { title: string; description: string } | null {
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model || !isSeoDynamicModelCategory(model.category)) return null
  const base = metaForModel(model)
  const brand = extractBrandFromLetterModel(model)
  const po = getPriorityOverrideForModel(model.category, brand)
  return {
    title: po?.metaTitle ? clip(po.metaTitle, 62) : base.title,
    description: po?.metaDescription ? clip(po.metaDescription, 158) : base.description,
  }
}
