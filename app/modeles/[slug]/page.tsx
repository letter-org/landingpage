import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LetterModelTemplate } from "@/components/letter-model-template"
import { ALL_LETTER_MODELS } from "@/lib/letter-models"
import { getEnhancedDynamicModelMetadata } from "@/lib/dynamic-model-metadata"
import { getDynamicModelProps } from "@/lib/model-page-factory"

interface PageProps {
  params: Promise<{ slug: string }>
}

/** Slugs des modèles avec page statique (pas de génération dynamique) */
const STATIC_MODEL_SLUGS = new Set([
  "lettre-demission-suisse", "lettre-motivation-suisse", "lettre-motivation-etudiant-suisse",
  "lettre-motivation-job-etudiant-suisse", "lettre-motivation-stage-suisse", "lettre-motivation-apprentissage-suisse",
  "lettre-resiliation-bail-locataire-suisse", "lettre-resiliation-bail-bailleur-suisse", "lettre-resiliation-bail-suisse",
  "lettre-resiliation-bail-proprietaire-suisse", "lettre-resiliation-assurance-maladie-suisse", "lettre-resiliation-assurance-auto",
  "lettre-resiliation-assurance-voiture-suisse", "lettre-resiliation-assurance-rc-suisse", "lettre-resiliation-assurance-menage-rc",
  "lettre-resiliation-assurance-complementaire", "lettre-resiliation-assurance-suisse", "lettre-resiliation-abonnement-suisse",
  "lettre-resiliation-abonnement-mobile", "lettre-resiliation-abonnement-fitness", "lettre-resiliation-internet-tv",
  "lettre-resiliation-internet-suisse", "lettre-resiliation-telephone-suisse", "lettre-resiliation-salle-sport-suisse",
  "lettre-augmentation-loyer-contestation-suisse", "lettre-probleme-voisin-suisse", "lettre-demenagement-postal-suisse",
  "lettre-contestation-facture-suisse", "lettre-demande-remboursement-suisse", "lettre-reclamation-consommateur-suisse",
  "lettre-opposition-prelevement-suisse", "lettre-opposition-poursuite-suisse", "lettre-mainlevee-poursuite-suisse",
  "lettre-contestation-amende-suisse", "lettre-demande-delai-paiement-suisse", "lettre-demande-arrangement-dette-suisse",
  "lettre-demande-certificat-travail-suisse", "lettre-licenciement-employeur-suisse", "lettre-demande-augmentation-salaire-suisse",
  "lettre-demande-conge-suisse",
])

export async function generateStaticParams() {
  return ALL_LETTER_MODELS
    .filter((m) => !STATIC_MODEL_SLUGS.has(m.path.replace("/modeles/", "")))
    .map((m) => ({ slug: m.path.replace("/modeles/", "") }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model) return {}

  const enhanced = getEnhancedDynamicModelMetadata(slug)
  const title = enhanced?.title ?? `${model.title} Suisse – Modèle conforme & envoi recommandé`
  const description =
    enhanced?.description ??
    `${model.subtitle}. Modèle conforme au droit suisse, envoi recommandé avec preuve.`

  return {
    title,
    description,
    alternates: { canonical: `/modeles/${slug}` },
    openGraph: { title, description, url: `/modeles/${slug}` },
  }
}

export default async function ModelPage({ params }: PageProps) {
  const { slug } = await params
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)

  if (!model) notFound()

  const props = getDynamicModelProps(slug)
  if (props) {
    return <LetterModelTemplate {...props} />
  }

  notFound()
}
