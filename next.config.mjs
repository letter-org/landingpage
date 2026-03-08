/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Rewrites: URL plate -> route dynamique (URL reste inchangée)
  async rewrites() {
    const resilierRewrites = [
      "swisscom", "sunrise", "salt", "yallo", "wingo", "upc", "quickline",
      "helsana", "css-assurance", "assura", "swica", "groupe-mutuel",
      "fitnesspark", "activfitness", "puregym-suisse", "letsgo",
    ].map((slug) => ({
      source: `/resilier-${slug}`,
      destination: `/resilier/${slug}`,
    }))
    const adresseRewrites = [
      "swisscom", "sunrise", "salt", "helsana", "css", "assura", "swica", "groupe-mutuel",
    ].map((slug) => ({
      source: `/adresse-resiliation-${slug}`,
      destination: `/adresse-resiliation/${slug}`,
    }))
    const quandRewrites = [
      "assurance-maladie", "assurance-voiture", "bail-suisse", "fitness", "internet",
    ].map((slug) => ({
      source: `/quand-resilier-${slug}`,
      destination: `/quand-resilier/${slug}`,
    }))
    return [...resilierRewrites, ...adresseRewrites, ...quandRewrites]
  },

  // Redirects: /lettre-xxx -> /modeles/lettre-xxx (URLs courtes vers modèles)
  async redirects() {
    const letterRedirects = [
      { from: "/lettre-resiliation-bail-suisse", to: "/modeles/lettre-resiliation-bail-suisse" },
      { from: "/lettre-resiliation-assurance-maladie", to: "/modeles/lettre-resiliation-assurance-maladie-suisse" },
      { from: "/lettre-resiliation-assurance-voiture", to: "/modeles/lettre-resiliation-assurance-voiture-suisse" },
      { from: "/lettre-resiliation-fitness", to: "/modeles/lettre-resiliation-salle-sport-suisse" },
      { from: "/lettre-resiliation-abonnement-telephone", to: "/modeles/lettre-resiliation-telephone-suisse" },
      { from: "/lettre-resiliation-leasing-voiture", to: "/modeles/lettre-resiliation-assurance-auto" },
      { from: "/lettre-resiliation-internet", to: "/modeles/lettre-resiliation-internet-suisse" },
      { from: "/lettre-demission-suisse", to: "/modeles/lettre-demission-suisse" },
      { from: "/lettre-opposition-poursuite", to: "/modeles/lettre-opposition-poursuite-suisse" },
      { from: "/lettre-contestation-facture", to: "/modeles/lettre-contestation-facture-suisse" },
      { from: "/lettre-reclamation-assurance", to: "/modeles/lettre-contestation-facture-suisse" },
      { from: "/lettre-resiliation-bail-locataire", to: "/modeles/lettre-resiliation-bail-locataire-suisse" },
      { from: "/lettre-resiliation-bail-proprietaire", to: "/modeles/lettre-resiliation-bail-proprietaire-suisse" },
      { from: "/lettre-demande-reduction-loyer", to: "/modeles/lettre-augmentation-loyer-contestation-suisse" },
      { from: "/lettre-mainlevee-poursuite", to: "/modeles/lettre-mainlevee-poursuite-suisse" },
      { from: "/lettre-licenciement-employeur", to: "/modeles/lettre-licenciement-employeur-suisse" },
      { from: "/lettre-demande-augmentation-salaire", to: "/modeles/lettre-demande-augmentation-salaire-suisse" },
      { from: "/lettre-demande-conge", to: "/modeles/lettre-demande-conge-suisse" },
      { from: "/lettre-certificat-travail", to: "/modeles/lettre-demande-certificat-travail-suisse" },
      { from: "/modele-lettre-demission", to: "/modeles/lettre-demission-suisse" },
      { from: "/modele-lettre-resiliation-bail", to: "/modeles/lettre-resiliation-bail-suisse" },
      { from: "/modele-lettre-contestation-facture", to: "/modeles/lettre-contestation-facture-suisse" },
      { from: "/modele-lettre-opposition-poursuite", to: "/modeles/lettre-opposition-poursuite-suisse" },
    ].map((r) => ({ source: r.from, destination: r.to, permanent: true }))
    return letterRedirects
  },
  
  // Add security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
