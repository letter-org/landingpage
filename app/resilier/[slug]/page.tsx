import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ResilierLandingTemplate } from "@/components/resilier-landing-template"
import { RESILIER_BRANDS, getResilierBySlug } from "@/lib/resilier-config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return RESILIER_BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getResilierBySlug(slug)
  if (!brand) return {}

  const title = `Résilier ${brand.name} en Suisse – Lettre de résiliation avec preuve`
  const description = `Résiliez votre ${brand.type === "telecom" ? "abonnement" : brand.type === "assurance" ? "assurance" : "abonnement fitness"} ${brand.name} en Suisse. Modèle de lettre conforme, envoi recommandé avec preuve.`

  return {
    title,
    description,
    alternates: { canonical: `/resilier-${slug}` },
    openGraph: { title, description, url: `/resilier-${slug}` },
  }
}

export default async function ResilierPage({ params }: PageProps) {
  const { slug } = await params
  const brand = getResilierBySlug(slug)
  if (!brand) notFound()

  return <ResilierLandingTemplate brand={brand} />
}
