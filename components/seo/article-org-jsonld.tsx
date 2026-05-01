import Script from "next/script"

const ORG_ID = "https://www.nextletter.ch/#organization"

export interface ArticleOrgJsonLdProps {
  id: string
  headline: string
  description: string
  url: string
  /** date ISO optionnelle */
  datePublished?: string
  dateModified?: string
}

/**
 * Article + Organization (publisher) pour GEO — cohérent avec la marque NextLetter
 */
export function ArticleOrgJsonLd({
  id,
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleOrgJsonLdProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "NextLetter",
    url: "https://www.nextletter.ch",
    logo: "https://www.nextletter.ch/brand/nextletter-logo.svg",
    description:
      "Plateforme suisse pour générer et envoyer des lettres officielles en ligne, avec envoi recommandé.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressLocality: "Crissier",
      streetAddress: "Chemin de la Crésentine 57",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@nextletter.ch",
      areaServed: "CH",
      availableLanguage: ["fr-CH", "de-CH", "it-CH"],
    },
  }

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    inLanguage: "fr-CH",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "NextLetter", "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  if (datePublished) article.datePublished = datePublished
  if (dateModified) article.dateModified = dateModified

  const graph = { "@context": "https://schema.org", "@graph": [organization, article] }

  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}
