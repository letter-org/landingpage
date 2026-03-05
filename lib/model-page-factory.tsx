/**
 * Factory pour générer les props des pages modèles dynamiques
 * Utilisé pour les pages assurance/telecom/utility par marque
 */

import type { LetterModelTemplateProps } from "@/components/letter-model-template"
import { ALL_LETTER_MODELS } from "./letter-models"

export type ModelPageType = "assurance-brand" | "telecom-brand" | "utility"

export interface BrandModelConfig {
  slug: string
  brand: string
  type: ModelPageType
}

/** Vérifie si un slug correspond à un modèle dynamique (sans page statique) */
export function isDynamicModel(slug: string): boolean {
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model) return false
  return ["assurance-marque", "telecom-marque", "utilities"].includes(model.category)
}

/** Génère les props pour une page modèle dynamique */
export function getDynamicModelProps(slug: string): LetterModelTemplateProps | null {
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model) return null

  const path = `/modeles/${slug}`

  if (model.category === "assurance-marque") {
    const brand = model.title.replace("Résiliation assurance ", "").replace(" en Suisse", "")
    return getAssuranceBrandProps(brand, path)
  }
  if (model.category === "telecom-marque") {
    const brand = model.title.replace("Résiliation ", "").replace(" en Suisse", "")
    return getTelecomBrandProps(brand, path)
  }
  if (model.category === "utilities") {
    const utility = model.title.replace("Résiliation ", "").replace(" en Suisse", "")
    return getUtilityProps(utility, path)
  }

  return null
}

function getAssuranceBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const faqData = [
    { question: `Quand résilier mon assurance ${brand} en Suisse ?`, answer: `L'assurance maladie peut généralement être résiliée pour fin d'année avec un préavis de 3 mois. Vérifiez votre contrat ${brand}.` },
    { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
    { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez votre assureur pour des questions spécifiques." },
  ]

  return {
    faqSchemaId: `schema-faq-resiliation-${brand.toLowerCase()}`,
    faqData,
    h1Title: `Résiliation assurance ${brand}`,
    h1Gradient: "en Suisse",
    intro: {
      main: `Résiliez votre assurance ${brand} en Suisse en quelques minutes. Votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.`,
      sub: "Sans déplacement. Conforme au droit suisse.",
    },
    savoirContent: (
      <>
        <p>
          En Suisse, la résiliation d'assurance maladie doit être effectuée <strong>par écrit</strong>. Pour {brand}, le préavis est généralement de 3 mois pour une résiliation en fin d'année. L'envoi par <strong>courrier recommandé</strong> est recommandé.
        </p>
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez {brand} pour des questions spécifiques.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle résiliation assurance ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et numéro de contrat." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références contrat", subtitle: "Numéro de police, assureur" },
      { title: "Date de résiliation", subtitle: "Date d'effet" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    ctaTitle: `Prêt à résilier votre assurance ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve.",
    ctaButtonText: "Générer et envoyer ma lettre maintenant",
    ctaReassurance: "Envoi en quelques minutes – preuve conservée dans votre dashboard",
    utmCampaign: `resiliation-${brand.toLowerCase()}`,
    canonicalPath: path,
    excludeFromOtherModels: path,
    ctaSecondaryHref: "/modeles/lettre-resiliation-assurance-maladie-suisse",
  }
}

function getTelecomBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const faqData = [
    { question: `Quel délai pour résilier ${brand} ?`, answer: "Le délai varie selon le contrat, souvent 1 à 3 mois. Vérifiez les conditions de votre abonnement." },
    { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi et de réception." },
    { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers." },
  ]

  return {
    faqSchemaId: `schema-faq-resiliation-${brand.toLowerCase()}`,
    faqData,
    h1Title: `Résiliation ${brand}`,
    h1Gradient: "en Suisse",
    intro: {
      main: `Résiliez votre abonnement ${brand} en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.`,
      sub: "Sans déplacement. Conforme au droit suisse.",
    },
    savoirContent: (
      <>
        <p>
          En Suisse, la résiliation d'abonnement {brand} doit être effectuée <strong>par écrit</strong>. Les délais varient selon le contrat. L'envoi par <strong>courrier recommandé</strong> est recommandé.
        </p>
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle résiliation ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et références." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références abonnement", subtitle: "Numéro client" },
      { title: "Date de résiliation", subtitle: "Date d'effet" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    ctaTitle: `Prêt à résilier ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve.",
    ctaButtonText: "Générer et envoyer ma lettre maintenant",
    ctaReassurance: "Envoi en quelques minutes – preuve conservée dans votre dashboard",
    utmCampaign: `resiliation-${brand.toLowerCase()}`,
    canonicalPath: path,
    excludeFromOtherModels: path,
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-mobile",
  }
}

function getUtilityProps(utility: string, path: string): LetterModelTemplateProps {
  const faqData = [
    { question: `Quel délai pour résilier mon contrat ${utility} ?`, answer: "Le délai varie selon le fournisseur, souvent 1 à 3 mois. Vérifiez les conditions de votre contrat." },
    { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi et de réception." },
    { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers." },
  ]

  return {
    faqSchemaId: `schema-faq-resiliation-${utility.toLowerCase().replace("é", "e")}`,
    faqData,
    h1Title: `Résiliation ${utility}`,
    h1Gradient: "en Suisse",
    intro: {
      main: `Résiliez votre contrat ${utility} en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.`,
      sub: "Sans déplacement. Conforme au droit suisse.",
    },
    savoirContent: (
      <>
        <p>
          En Suisse, la résiliation d'un contrat {utility} doit être effectuée <strong>par écrit</strong>. Les délais varient selon le fournisseur. L'envoi par <strong>courrier recommandé</strong> est recommandé.
        </p>
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle résiliation ${utility}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et références." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références contrat", subtitle: "Numéro client" },
      { title: "Date de résiliation", subtitle: "Date d'effet" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    ctaTitle: `Prêt à résilier votre contrat ${utility} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve.",
    ctaButtonText: "Générer et envoyer ma lettre maintenant",
    ctaReassurance: "Envoi en quelques minutes – preuve conservée dans votre dashboard",
    utmCampaign: `resiliation-${utility.toLowerCase().replace("é", "e")}`,
    canonicalPath: path,
    excludeFromOtherModels: path,
    ctaSecondaryHref: "/modeles/lettre-resiliation-internet-suisse",
  }
}
