export function StructuredData() {
  // Canonical URL: ALWAYS use www.nextletter.ch for SEO consistency
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextletter.ch'

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NextLetter",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CHF",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
    },
    "description": "Solution d'envoi de lettres recommandées en ligne en Suisse pour particuliers, entreprises et institutions. Envoi courrier officiel en ligne avec suivi en temps réel.",
    "url": baseUrl,
    "screenshot": `${baseUrl}/images/image.png`,
    "featureList": [
      "Envoi de lettres recommandées en ligne en Suisse",
      "Suivi en temps réel",
      "Archivage sécurisé",
      "Preuve d'envoi",
      "Alternative à La Poste suisse",
    ],
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextLetter",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.svg`,
    "description": "NextLetter est une solution permettant d'envoyer des lettres recommandées en ligne en Suisse pour l'envoi de courrier officiel en ligne.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH",
      "addressLocality": "Lausanne",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@nextletter.ch",
    },
    "sameAs": [
      // Ajouter les réseaux sociaux si disponibles
    ],
  }

  // WebSite schema without SearchAction (no on-site search feature)
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NextLetter",
    "url": baseUrl,
    "description": "Solution d'envoi de lettres recommandées en ligne en Suisse. Envoyez vos courriers officiels sans vous déplacer, avec suivi en temps réel et preuve d'envoi.",
    "inLanguage": "fr-CH",
    "publisher": {
      "@type": "Organization",
      "name": "NextLetter",
      "url": baseUrl
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
    </>
  )
}

