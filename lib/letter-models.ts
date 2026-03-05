/**
 * Configuration centralisée des pages de modèles de lettres NextLetter
 * Utilisée pour le maillage interne SEO et la cohérence des liens
 *
 * @see components/letter-model-template.tsx - Template de page
 * @see app/modeles/[slug]/page.tsx - Pages individuelles
 */

export interface LetterModelLink {
  title: string
  path: string
  subtitle: string
}

/** Tous les modèles disponibles pour le maillage interne */
export const ALL_LETTER_MODELS: LetterModelLink[] = [
  { title: "Lettre de démission", path: "/modeles/lettre-demission-suisse", subtitle: "Modèle pour démission" },
  { title: "Lettre de motivation", path: "/modeles/lettre-motivation-suisse", subtitle: "Candidature + PDF" },
  { title: "Lettre motivation étudiant", path: "/modeles/lettre-motivation-etudiant-suisse", subtitle: "Candidature études" },
  { title: "Lettre motivation job étudiant", path: "/modeles/lettre-motivation-job-etudiant-suisse", subtitle: "Emploi étudiant" },
  { title: "Résiliation bail locataire", path: "/modeles/lettre-resiliation-bail-locataire-suisse", subtitle: "Modèle pour locataire" },
  { title: "Résiliation bail bailleur", path: "/modeles/lettre-resiliation-bail-bailleur-suisse", subtitle: "Modèle pour propriétaire" },
  { title: "Résiliation assurance maladie", path: "/modeles/lettre-resiliation-assurance-maladie-suisse", subtitle: "Modèle conforme LAMal" },
  { title: "Résiliation assurance complémentaire", path: "/modeles/lettre-resiliation-assurance-complementaire", subtitle: "Modèle complémentaire" },
  { title: "Résiliation assurance auto", path: "/modeles/lettre-resiliation-assurance-auto", subtitle: "Modèle pour véhicule" },
  { title: "Résiliation assurance ménage", path: "/modeles/lettre-resiliation-assurance-menage-rc", subtitle: "RC ménage" },
  { title: "Résiliation abonnement mobile", path: "/modeles/lettre-resiliation-abonnement-mobile", subtitle: "Modèle pour téléphonie" },
  { title: "Résiliation Internet TV", path: "/modeles/lettre-resiliation-internet-tv", subtitle: "Modèle pour Internet et TV" },
  { title: "Résiliation abonnement fitness", path: "/modeles/lettre-resiliation-abonnement-fitness", subtitle: "Modèle pour salle de sport" },
  { title: "Résiliation assurance", path: "/modeles/lettre-resiliation-assurance-suisse", subtitle: "Tous types d'assurances" },
  { title: "Résiliation abonnement", path: "/modeles/lettre-resiliation-abonnement-suisse", subtitle: "Tous types d'abonnements" },
  { title: "Résiliation bail", path: "/modeles/lettre-resiliation-bail-suisse", subtitle: "Locataire ou bailleur" },
  { title: "Contestation facture", path: "/modeles/lettre-contestation-facture-suisse", subtitle: "Contester une facture" },
  { title: "Demande remboursement", path: "/modeles/lettre-demande-remboursement-suisse", subtitle: "Réclamation financière" },
  { title: "Réclamation consommateur", path: "/modeles/lettre-reclamation-consommateur-suisse", subtitle: "Défense des droits" },
  { title: "Changement d'adresse postal", path: "/modeles/lettre-demenagement-postal-suisse", subtitle: "Annonce déménagement" },
  { title: "Opposition prélèvement", path: "/modeles/lettre-opposition-prelevement-suisse", subtitle: "Annuler mandat LSV" },
]

/** Retourne les modèles à afficher en excluant le chemin actuel (max 6) */
export function getOtherModels(currentPath: string, limit = 6): LetterModelLink[] {
  return ALL_LETTER_MODELS.filter((m) => m.path !== currentPath).slice(0, limit)
}
