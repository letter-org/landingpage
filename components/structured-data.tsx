export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextletter.ch'

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

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NextLetter",
    "url": baseUrl,
    "description": "Solution d'envoi de lettres recommandées en ligne en Suisse. Envoyez vos courriers officiels sans vous déplacer, avec suivi en temps réel et preuve d'envoi.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi utiliser NextLetter pour envoyer une lettre recommandée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextLetter simplifie l'envoi de lettres recommandées en ligne en s'appuyant sur des services postaux partenaires, avec suivi et justificatif d'expédition, le tout sans déplacement.",
        },
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre NextLetter et La Poste ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextLetter permet d'envoyer des lettres recommandées en ligne sans se déplacer. Nous utilisons La Poste pour l'acheminement physique.",
        },
      },
      {
        "@type": "Question",
        "name": "Combien de temps prend l'envoi ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En général les courriers envoyés avant 14h sont pris en charge par nos imprimeries professionnelles et remises pour acheminement à la poste. Délai d'acheminement : 1 à 2 jours ouvrés. NextLetter n'est pas responsable des retards de livraisons.",
        },
      },
      {
        "@type": "Question",
        "name": "Comment fonctionne NextLetter ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous rédigez ou téléchargez votre lettre, et NextLetter veille à ce que vos lettres soient imprimées dans des imprimeries professionnelles et livrées par la poste. Vous suivez l'acheminement en temps réel et recevez une preuve de distribution.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}

