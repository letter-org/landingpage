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
    "description": "Solution d'envoi de lettres recommandées en ligne pour particuliers, entreprises et institutions. Envoi courrier officiel en ligne avec suivi en temps réel.",
    "url": baseUrl,
    "screenshot": `${baseUrl}/images/image.png`,
    "featureList": [
      "Envoi de lettres recommandées en ligne",
      "Suivi en temps réel",
      "Archivage sécurisé",
      "Conforme aux normes suisses",
      "Alternative à La Poste",
    ],
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextLetter",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.svg`,
    "description": "NextLetter est une solution permettant d'envoyer des lettres recommandées en ligne pour l'envoi de courrier officiel en ligne.",
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

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Est-ce légal d'envoyer une lettre recommandée en ligne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, les lettres recommandées envoyées via NextLetter sont parfaitement légales. Les preuves d'envoi fournies sont équivalentes à celles obtenues au guichet postal et ont une valeur juridique probante. La lettre recommandée électronique est conforme aux normes en vigueur.",
        },
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre NextLetter et La Poste ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextLetter est une alternative poste recommandée qui permet d'envoyer des lettres recommandées en ligne sans se déplacer à la poste. Nous utilisons La Poste pour l'acheminement physique, mais vous gérez tout depuis votre ordinateur ou smartphone. C'est l'alternative moderne à la poste recommandée traditionnelle.",
        },
      },
      {
        "@type": "Question",
        "name": "Peut-on envoyer une lettre de résiliation en ligne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, vous pouvez envoyer vos lettres de résiliation (assurance, bail, abonnement) via NextLetter. Les preuves d'envoi sont valables juridiquement. C'est une solution pratique pour les résiliations de contrat sans vous déplacer.",
        },
      },
      {
        "@type": "Question",
        "name": "Est-ce valable pour les entreprises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, NextLetter est adapté aux entreprises, PME, professions réglementées et institutions. Nous proposons des solutions personnalisées avec CRM, multi-comptes et reporting. Parfait pour l'envoi de courrier administratif en ligne.",
        },
      },
      {
        "@type": "Question",
        "name": "Combien de temps prend l'envoi d'une lettre recommandée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les courriers envoyés avant 14h sont imprimés et remis à La Poste le jour même. Le délai d'acheminement est ensuite celui de La Poste, généralement 1 à 2 jours ouvrés. Vous suivez chaque étape en temps réel.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}

