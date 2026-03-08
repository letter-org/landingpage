import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { QuandResilierTemplate } from "@/components/quand-resilier-template"
import { QUAND_RESILIATION_ENTRIES, getQuandResilierBySlug } from "@/lib/quand-resilier-config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return QUAND_RESILIATION_ENTRIES.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = getQuandResilierBySlug(slug)
  if (!entry) return {}

  const title = `Quand résilier ${entry.title} en Suisse – Délais et dates limites`
  const description = `${entry.description} Délais : ${entry.delays}`

  return {
    title,
    description,
    alternates: { canonical: `/quand-resilier-${slug}` },
    openGraph: { title, description, url: `/quand-resilier-${slug}` },
  }
}

export default async function QuandResilierPage({ params }: PageProps) {
  const { slug } = await params
  const entry = getQuandResilierBySlug(slug)
  if (!entry) notFound()

  return <QuandResilierTemplate entry={entry} />
}
