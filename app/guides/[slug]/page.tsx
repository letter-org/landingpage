import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { ALL_GUIDES, getCompanionGuides, getGuideBySlug } from "@/lib/guides"
import { ALL_LETTER_MODELS, getRelatedModels, type LetterModelLink } from "@/lib/letter-models"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"
import { GeoDirectAnswer, GeoBrandCitation } from "@/components/geo-seo-blocks"
import { MaillageContextuel } from "@/components/maillage-contextuel"
import { ArticleOrgJsonLd } from "@/components/seo/article-org-jsonld"
import { GUIDE_CONTENT } from "@/lib/guide-content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}

  return {
    title: `${guide.title} – Guide NextLetter`,
    description: guide.description,
    alternates: { canonical: guide.path },
    openGraph: { title: guide.title, description: guide.description, url: guide.path },
  }
}

function resolveModelsForGuide(guide: NonNullable<ReturnType<typeof getGuideBySlug>>): LetterModelLink[] {
  const fromPaths = guide.relatedModels
    .map((path) => ALL_LETTER_MODELS.find((m) => m.path === path))
    .filter(Boolean) as LetterModelLink[]
  if (fromPaths.length >= 6) return fromPaths.slice(0, 6)
  const seed = guide.relatedModels[0] || ALL_LETTER_MODELS[0]?.path
  const fill = seed ? getRelatedModels(seed, 6) : ALL_LETTER_MODELS.slice(0, 6)
  const merged: LetterModelLink[] = [...fromPaths]
  const seen = new Set(merged.map((m) => m.path))
  for (const m of fill) {
    if (merged.length >= 6) break
    if (!seen.has(m.path)) {
      merged.push(m)
      seen.add(m.path)
    }
  }
  return merged.slice(0, 6)
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const data = GUIDE_CONTENT[slug]
  if (!data) notFound()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const articleUrl = `${baseUrl}${guide.path}`
  const sixModels = resolveModelsForGuide(guide)
  const companionGuides = getCompanionGuides(slug, 2)

  return (
    <>
      <ArticleOrgJsonLd
        id={`schema-article-org-${slug}`}
        headline={guide.title}
        description={guide.description}
        url={articleUrl}
      />
      <FaqJsonLd id={`schema-faq-${slug}`} data={data.faq.map((f) => ({ question: f.q, answer: f.a }))} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title={guide.title.replace(" en Suisse", "")} gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-6">{guide.description}</p>

            <GeoDirectAnswer>{data.directAnswer}</GeoDirectAnswer>
            <GeoBrandCitation />

            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground leading-relaxed [&_a]:text-brand [&_a]:hover:underline">
              {data.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4">
                      {block.replace("## ", "")}
                    </h2>
                  )
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- "))
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, j) => {
                        const text = item.replace("- ", "")
                        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
                        return (
                          <li key={j}>
                            {parts.map((part, k) => {
                              const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
                              return m ? (
                                <Link key={k} href={m[2]}>
                                  {m[1]}
                                </Link>
                              ) : (
                                part
                              )
                            })}
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
                const parts = block.split(/(\[[^\]]+\]\([^)]+\))/g)
                return (
                  <p key={i} className="mb-4">
                    {parts.map((part, j) => {
                      const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
                      return m ? (
                        <Link key={j} href={m[2]}>
                          {m[1]}
                        </Link>
                      ) : (
                        part
                      )
                    })}
                  </p>
                )
              })}
            </div>

            <MaillageContextuel models={sixModels} guides={companionGuides} utmCampaign={`guide-${slug}`} />

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {data.faq.map((f, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{f.q}</summary>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <CtaWhaou
              title="Générer cette lettre avec NextLetter"
              description="Accédez à l'application : modèles suisses, personnalisation et envoi recommandé avec preuve."
              buttonText="Ouvrir l'app NextLetter"
              href={addUtmParams(appUrls.base, "landing", "cta", `guide-${slug}`)}
              secondaryLink={{ href: "/generateur-lettre-suisse", text: "Générateur de lettre suisse" }}
              reassurance={`Redirection vers ${appUrls.base.replace(/^https?:\/\//, "")}`}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
