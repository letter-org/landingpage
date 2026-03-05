/**
 * Configuration centralisée des pages de modèles de lettres NextLetter
 * Utilisée pour le maillage interne SEO et la page hub /modeles
 *
 * @see components/letter-model-template.tsx - Template de page
 * @see app/modeles/page.tsx - Page hub liste des modèles
 */

export interface LetterModelLink {
  title: string
  path: string
  subtitle: string
  category: LetterModelCategory
}

export type LetterModelCategory = "resiliation" | "motivation" | "reclamations" | "administration" | "logement" | "travail"

export interface LetterModelCategoryConfig {
  id: LetterModelCategory
  title: string
  description: string
}

export const LETTER_CATEGORIES: LetterModelCategoryConfig[] = [
  { id: "resiliation", title: "Résiliation", description: "Résiliez vos assurances, abonnements et baux en Suisse" },
  { id: "motivation", title: "Motivation", description: "Lettres de motivation pour candidatures et formations" },
  { id: "logement", title: "Logement", description: "Bail, loyer, voisinage et déménagement" },
  { id: "travail", title: "Travail", description: "Démission, certificat, stage et apprentissage" },
  { id: "reclamations", title: "Réclamations", description: "Contestation, remboursement et défense des droits" },
  { id: "administration", title: "Administration", description: "Poursuites, amendes, dettes et délais" },
]

/** Tous les modèles disponibles, organisés par catégorie */
export const ALL_LETTER_MODELS: LetterModelLink[] = [
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
  { title: "Demande certificat de travail", path: "/modeles/lettre-demande-certificat-travail-suisse", subtitle: "Attestation employeur", category: "travail" },
  // Réclamations
  { title: "Contestation facture", path: "/modeles/lettre-contestation-facture-suisse", subtitle: "Contester une facture", category: "reclamations" },
  { title: "Demande remboursement", path: "/modeles/lettre-demande-remboursement-suisse", subtitle: "Réclamation financière", category: "reclamations" },
  { title: "Réclamation consommateur", path: "/modeles/lettre-reclamation-consommateur-suisse", subtitle: "Défense des droits", category: "reclamations" },
  { title: "Opposition prélèvement", path: "/modeles/lettre-opposition-prelevement-suisse", subtitle: "Annuler mandat LSV", category: "reclamations" },
  // Administration
  { title: "Opposition poursuite", path: "/modeles/lettre-opposition-poursuite-suisse", subtitle: "Contester une poursuite", category: "administration" },
  { title: "Contestation amende", path: "/modeles/lettre-contestation-amende-suisse", subtitle: "Contester une amende", category: "administration" },
  { title: "Demande délai de paiement", path: "/modeles/lettre-demande-delai-paiement-suisse", subtitle: "Report d'échéance", category: "administration" },
  { title: "Demande arrangement dette", path: "/modeles/lettre-demande-arrangement-dette-suisse", subtitle: "Plan d'apurement", category: "administration" },
]

/** Modèles par catégorie pour la page hub */
export function getModelsByCategory(): Record<LetterModelCategory, LetterModelLink[]> {
  const byCategory = {} as Record<LetterModelCategory, LetterModelLink[]>
  for (const cat of LETTER_CATEGORIES) {
    byCategory[cat.id] = ALL_LETTER_MODELS.filter((m) => m.category === cat.id)
  }
  return byCategory
}

/** Retourne les modèles à afficher en excluant le chemin actuel (max 6) */
export function getOtherModels(currentPath: string, limit = 6): LetterModelLink[] {
  return ALL_LETTER_MODELS.filter((m) => m.path !== currentPath).slice(0, limit)
}
