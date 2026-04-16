/**
 * Configuration centralisée des pages de modèles de lettres NextLetter
 * 100+ pages SEO – Architecture scalable
 *
 * @see components/letter-model-template.tsx
 * @see app/modeles/[slug]/page.tsx
 * @see lib/seo-config.ts
 */

import {
  ASSURANCE_SANTE_BRANDS,
  BANK_BRANDS,
  FITNESS_BRANDS,
  LEASING_BRANDS,
  MEDIA_BRANDS,
  slugifyBrand,
  STREAMING_BRANDS,
  TELECOM_BRANDS,
  UTILITY_TYPES,
} from "./seo-config"

export interface LetterModelLink {
  title: string
  path: string
  subtitle: string
  category: LetterModelCategory
}

export type LetterModelCategory =
  | "resiliation"
  | "motivation"
  | "reclamations"
  | "administration"
  | "logement"
  | "travail"
  | "assurance-marque"
  | "telecom-marque"
  | "banque-marque"
  | "leasing-marque"
  | "streaming-marque"
  | "fitness-marque"
  | "media-marque"
  | "utilities"

export interface LetterModelCategoryConfig {
  id: LetterModelCategory
  title: string
  description: string
}

export const LETTER_CATEGORIES: LetterModelCategoryConfig[] = [
  { id: "resiliation", title: "Résiliation", description: "Résiliez vos assurances, abonnements et baux en Suisse" },
  { id: "assurance-marque", title: "Résiliation par assureur", description: "Résiliez votre assurance maladie chez CSS, Helsana, AXA, etc." },
  { id: "telecom-marque", title: "Résiliation par opérateur", description: "Résiliez chez Swisscom, Sunrise, Salt, etc." },
  { id: "banque-marque", title: "Résiliation banque et carte", description: "Clôturez un compte bancaire, une carte ou un service financier en Suisse" },
  { id: "leasing-marque", title: "Résiliation leasing et mobilité", description: "Fin de leasing, car sharing ou contrat de mobilité" },
  { id: "streaming-marque", title: "Résiliation streaming", description: "Netflix, Spotify, Disney Plus, YouTube Premium et autres abonnements" },
  { id: "fitness-marque", title: "Résiliation fitness par enseigne", description: "Activ Fitness, PureGym, Update Fitness et autres salles" },
  { id: "media-marque", title: "Résiliation presse et médias", description: "Journaux, magazines et abonnements médias en Suisse" },
  { id: "utilities", title: "Énergie et utilités", description: "Résiliez électricité, gaz, eau, chauffage" },
  { id: "motivation", title: "Motivation", description: "Lettres de motivation pour candidatures et formations" },
  { id: "logement", title: "Logement", description: "Bail, loyer, voisinage et déménagement" },
  { id: "travail", title: "Travail", description: "Démission, certificat, stage et apprentissage" },
  { id: "reclamations", title: "Réclamations", description: "Contestation, remboursement et défense des droits" },
  { id: "administration", title: "Administration", description: "Poursuites, amendes, dettes et délais" },
]

/** Modèles de base (existants + utilités) */
const BASE_MODELS: LetterModelLink[] = [
  // Résiliation
  { title: "Résiliation assurance maladie", path: "/modeles/lettre-resiliation-assurance-maladie-suisse", subtitle: "Modèle conforme LAMal", category: "resiliation" },
  { title: "Résiliation assurance voiture", path: "/modeles/lettre-resiliation-assurance-voiture-suisse", subtitle: "Assurance auto", category: "resiliation" },
  { title: "Résiliation assurance RC", path: "/modeles/lettre-resiliation-assurance-rc-suisse", subtitle: "RC ménage", category: "resiliation" },
  { title: "Résiliation assurance complémentaire", path: "/modeles/lettre-resiliation-assurance-complementaire", subtitle: "Modèle complémentaire", category: "resiliation" },
  { title: "Résiliation assurance auto", path: "/modeles/lettre-resiliation-assurance-auto", subtitle: "Modèle pour véhicule", category: "resiliation" },
  { title: "Résiliation assurance ménage", path: "/modeles/lettre-resiliation-assurance-menage-rc", subtitle: "RC ménage", category: "resiliation" },
  { title: "Résiliation salle de sport", path: "/modeles/lettre-resiliation-salle-sport-suisse", subtitle: "Abonnement fitness", category: "resiliation" },
  { title: "Résiliation Internet", path: "/modeles/lettre-resiliation-internet-suisse", subtitle: "Abonnement Internet", category: "resiliation" },
  { title: "Résiliation téléphone", path: "/modeles/lettre-resiliation-telephone-suisse", subtitle: "Abonnement mobile", category: "resiliation" },
  { title: "Résiliation abonnement mobile", path: "/modeles/lettre-resiliation-abonnement-mobile", subtitle: "Téléphonie", category: "resiliation" },
  { title: "Résiliation Internet TV", path: "/modeles/lettre-resiliation-internet-tv", subtitle: "Internet et TV", category: "resiliation" },
  { title: "Résiliation abonnement fitness", path: "/modeles/lettre-resiliation-abonnement-fitness", subtitle: "Salle de sport", category: "resiliation" },
  { title: "Résiliation assurance", path: "/modeles/lettre-resiliation-assurance-suisse", subtitle: "Tous types", category: "resiliation" },
  { title: "Résiliation abonnement", path: "/modeles/lettre-resiliation-abonnement-suisse", subtitle: "Tous types", category: "resiliation" },
  // Logement
  { title: "Résiliation bail", path: "/modeles/lettre-resiliation-bail-suisse", subtitle: "Locataire ou bailleur", category: "logement" },
  { title: "Résiliation bail locataire", path: "/modeles/lettre-resiliation-bail-locataire-suisse", subtitle: "Modèle pour locataire", category: "logement" },
  { title: "Résiliation bail propriétaire", path: "/modeles/lettre-resiliation-bail-proprietaire-suisse", subtitle: "Modèle pour propriétaire", category: "logement" },
  { title: "Résiliation bail bailleur", path: "/modeles/lettre-resiliation-bail-bailleur-suisse", subtitle: "Modèle bailleur", category: "logement" },
  { title: "Contestation augmentation loyer", path: "/modeles/lettre-augmentation-loyer-contestation-suisse", subtitle: "Contester une hausse", category: "logement" },
  { title: "Problème voisin", path: "/modeles/lettre-probleme-voisin-suisse", subtitle: "Litige voisinage", category: "logement" },
  { title: "Changement d'adresse postal", path: "/modeles/lettre-demenagement-postal-suisse", subtitle: "Annonce déménagement", category: "logement" },
  // Motivation / Travail
  { title: "Lettre de motivation", path: "/modeles/lettre-motivation-suisse", subtitle: "Candidature + PDF", category: "motivation" },
  { title: "Lettre motivation étudiant", path: "/modeles/lettre-motivation-etudiant-suisse", subtitle: "Candidature études", category: "motivation" },
  { title: "Lettre motivation job étudiant", path: "/modeles/lettre-motivation-job-etudiant-suisse", subtitle: "Emploi étudiant", category: "motivation" },
  { title: "Lettre motivation stage", path: "/modeles/lettre-motivation-stage-suisse", subtitle: "Candidature stage", category: "motivation" },
  { title: "Lettre motivation apprentissage", path: "/modeles/lettre-motivation-apprentissage-suisse", subtitle: "Candidature formation", category: "motivation" },
  { title: "Lettre de démission", path: "/modeles/lettre-demission-suisse", subtitle: "Modèle pour démission", category: "travail" },
  { title: "Lettre licenciement employeur", path: "/modeles/lettre-licenciement-employeur-suisse", subtitle: "Notification licenciement", category: "travail" },
  { title: "Demande augmentation salaire", path: "/modeles/lettre-demande-augmentation-salaire-suisse", subtitle: "Demande d'augmentation", category: "travail" },
  { title: "Demande congé", path: "/modeles/lettre-demande-conge-suisse", subtitle: "Demande de congés", category: "travail" },
  { title: "Demande certificat de travail", path: "/modeles/lettre-demande-certificat-travail-suisse", subtitle: "Attestation employeur", category: "travail" },
  // Réclamations
  { title: "Contestation facture", path: "/modeles/lettre-contestation-facture-suisse", subtitle: "Contester une facture", category: "reclamations" },
  { title: "Demande remboursement", path: "/modeles/lettre-demande-remboursement-suisse", subtitle: "Réclamation financière", category: "reclamations" },
  { title: "Réclamation consommateur", path: "/modeles/lettre-reclamation-consommateur-suisse", subtitle: "Défense des droits", category: "reclamations" },
  { title: "Opposition prélèvement", path: "/modeles/lettre-opposition-prelevement-suisse", subtitle: "Annuler mandat LSV", category: "reclamations" },
  // Administration
  { title: "Opposition poursuite", path: "/modeles/lettre-opposition-poursuite-suisse", subtitle: "Contester une poursuite", category: "administration" },
  { title: "Mainlevée poursuite", path: "/modeles/lettre-mainlevee-poursuite-suisse", subtitle: "Levée de poursuite", category: "administration" },
  { title: "Contestation amende", path: "/modeles/lettre-contestation-amende-suisse", subtitle: "Contester une amende", category: "administration" },
  { title: "Demande délai de paiement", path: "/modeles/lettre-demande-delai-paiement-suisse", subtitle: "Report d'échéance", category: "administration" },
  { title: "Demande arrangement dette", path: "/modeles/lettre-demande-arrangement-dette-suisse", subtitle: "Plan d'apurement", category: "administration" },
]

/** Modèles assurance par marque (générés) */
const ASSURANCE_BRAND_MODELS: LetterModelLink[] = ASSURANCE_SANTE_BRANDS.map(
  (brand) => ({
    title: `Résiliation assurance ${brand}`,
    path: `/modeles/lettre-resiliation-assurance-${slugifyBrand(brand)}-suisse`,
    subtitle: `Modèle pour ${brand}`,
    category: "assurance-marque" as LetterModelCategory,
  })
)

/** Modèles telecom par marque (générés) */
const TELECOM_BRAND_MODELS: LetterModelLink[] = TELECOM_BRANDS.map((brand) => ({
  title: `Résiliation ${brand}`,
  path: `/modeles/lettre-resiliation-${slugifyBrand(brand)}-suisse`,
  subtitle: `Modèle pour ${brand}`,
  category: "telecom-marque" as LetterModelCategory,
}))

const BANK_BRAND_MODELS: LetterModelLink[] = BANK_BRANDS.map((brand) => ({
  title: `Résiliation compte ${brand}`,
  path: `/modeles/lettre-resiliation-compte-${slugifyBrand(brand)}-suisse`,
  subtitle: `Clôture de compte ou carte ${brand}`,
  category: "banque-marque" as LetterModelCategory,
}))

const LEASING_BRAND_MODELS: LetterModelLink[] = LEASING_BRANDS.map((brand) => ({
  title: `Résiliation leasing ${brand}`,
  path: `/modeles/lettre-resiliation-leasing-${slugifyBrand(brand)}-suisse`,
  subtitle: `Modèle pour ${brand}`,
  category: "leasing-marque" as LetterModelCategory,
}))

const STREAMING_BRAND_MODELS: LetterModelLink[] = STREAMING_BRANDS.map((brand) => ({
  title: `Résiliation abonnement ${brand}`,
  path: `/modeles/lettre-resiliation-abonnement-${slugifyBrand(brand)}-suisse`,
  subtitle: `Modèle pour ${brand}`,
  category: "streaming-marque" as LetterModelCategory,
}))

const FITNESS_BRAND_MODELS: LetterModelLink[] = FITNESS_BRANDS.map((brand) => ({
  title: `Résiliation fitness ${brand}`,
  path: `/modeles/lettre-resiliation-fitness-${slugifyBrand(brand)}-suisse`,
  subtitle: `Modèle pour ${brand}`,
  category: "fitness-marque" as LetterModelCategory,
}))

const MEDIA_BRAND_MODELS: LetterModelLink[] = MEDIA_BRANDS.map((brand) => ({
  title: `Résiliation abonnement presse ${brand}`,
  path: `/modeles/lettre-resiliation-abonnement-presse-${slugifyBrand(brand)}-suisse`,
  subtitle: `Modèle pour ${brand}`,
  category: "media-marque" as LetterModelCategory,
}))

/** Modèles utilités (électricité, gaz, eau, etc.) */
const UTILITY_MODELS: LetterModelLink[] = UTILITY_TYPES.map((u) => ({
  title: `Résiliation ${u.title}`,
  path: `/modeles/lettre-resiliation-${u.slug}-suisse`,
  subtitle: `Fournisseur ${u.title}`,
  category: "utilities" as LetterModelCategory,
}))

/** Tous les modèles – 100+ pages */
export const ALL_LETTER_MODELS: LetterModelLink[] = [
  ...BASE_MODELS,
  ...ASSURANCE_BRAND_MODELS,
  ...TELECOM_BRAND_MODELS,
  ...BANK_BRAND_MODELS,
  ...LEASING_BRAND_MODELS,
  ...STREAMING_BRAND_MODELS,
  ...FITNESS_BRAND_MODELS,
  ...MEDIA_BRAND_MODELS,
  ...UTILITY_MODELS,
]

/** Modèles par catégorie */
export function getModelsByCategory(): Record<LetterModelCategory, LetterModelLink[]> {
  const byCategory = {} as Record<LetterModelCategory, LetterModelLink[]>
  for (const cat of LETTER_CATEGORIES) {
    byCategory[cat.id] = ALL_LETTER_MODELS.filter((m) => m.category === cat.id)
  }
  return byCategory
}

/** Modèles liés (6 max) – priorité à la même catégorie */
export function getRelatedModels(currentPath: string, limit = 6): LetterModelLink[] {
  const current = ALL_LETTER_MODELS.find((m) => m.path === currentPath)
  const others = ALL_LETTER_MODELS.filter((m) => m.path !== currentPath)
  if (!current) return others.slice(0, limit)
  const sameCategory = others.filter((m) => m.category === current.category)
  const otherCategory = others.filter((m) => m.category !== current.category)
  return [...sameCategory, ...otherCategory].slice(0, limit)
}

/** @deprecated Utiliser getRelatedModels */
export const getOtherModels = getRelatedModels
