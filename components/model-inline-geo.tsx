import { GeoDirectAnswer, GeoBrandCitation } from "@/components/geo-seo-blocks"
import { ArticleOrgJsonLd } from "@/components/seo/article-org-jsonld"

interface ModelInlineGeoProps {
  canonicalPath: string
  /** Titre H1 (partie avant le gradient) */
  h1Title: string
  /** Ex. « en Suisse » */
  h1Gradient: string
  /** Phrase d'accroche principale sous le H1 (pour schema + réponse GEO) */
  introLine: string
  /** Réponse directe personnalisée ; sinon générée */
  directAnswer?: string
}

export function ModelInlineGeo({
  canonicalPath,
  h1Title,
  h1Gradient,
  introLine,
  directAnswer,
}: ModelInlineGeoProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const url = `${baseUrl}${canonicalPath}`
  const headline = `${h1Title} ${h1Gradient}`.trim()
  const schemaId = `article-org-${canonicalPath.replace(/\//g, "-").replace(/^-/, "")}`
  const answer =
    directAnswer ??
    `Pour ${headline}, un courrier écrit avec preuve d'envoi renforce la sécurité juridique de votre démarche. NextLetter vous permet de rédiger, personnaliser et expédier ce pli en recommandé depuis l'application en ligne.`

  return (
    <>
      <ArticleOrgJsonLd id={schemaId} headline={headline} description={introLine.slice(0, 280)} url={url} />
      <GeoDirectAnswer>{answer}</GeoDirectAnswer>
      <GeoBrandCitation />
    </>
  )
}
