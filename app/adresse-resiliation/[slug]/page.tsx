import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AdresseResiliationTemplate } from "@/components/adresse-resiliation-template"
import { ADRESSE_RESILIATION_ENTRIES, getAdresseResiliationBySlug } from "@/lib/adresse-resiliation-config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ADRESSE_RESILIATION_ENTRIES.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = getAdresseResiliationBySlug(slug)
  if (!entry) return {}

  const title = `Adresse résiliation ${entry.name} – Où envoyer votre lettre`
  const description = `Adresse complète pour résilier ${entry.name} : ${entry.address}. Délais, modèle de lettre, envoi recommandé avec preuve.`

  return {
    title,
    description,
    alternates: { canonical: `/adresse-resiliation-${slug}` },
    openGraph: { title, description, url: `/adresse-resiliation-${slug}` },
  }
}

export default async function AdresseResiliationPage({ params }: PageProps) {
  const { slug } = await params
  const entry = getAdresseResiliationBySlug(slug)
  if (!entry) notFound()

  return <AdresseResiliationTemplate entry={entry} />
}
