import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ALL_LETTER_MODELS, LETTER_CATEGORIES, getModelsByCategory } from "@/lib/letter-models"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Modèles de lettres pour la Suisse – Résiliation, Motivation, Réclamations",
  description: "Tous les modèles de lettres NextLetter pour la Suisse : résiliation assurance, bail, abonnement, lettre de motivation, démission, contestation, réclamation. Conformes au droit suisse.",
  alternates: { canonical: "/modeles" },
  openGraph: {
    title: "Modèles de lettres pour la Suisse – Résiliation, Motivation, Réclamations",
    description: "Tous les modèles de lettres NextLetter pour la Suisse. Conformes au droit suisse.",
    url: "/modeles",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Quels types de lettres puis-je créer avec NextLetter ?",
    answer: "NextLetter propose des modèles pour les résiliations (assurance, bail, abonnement), les lettres de motivation (candidature, stage, apprentissage), les réclamations (contestation facture, remboursement), et l'administration (opposition poursuite, contestation amende, délai de paiement).",
  },
  {
    question: "Les modèles NextLetter sont-ils conformes au droit suisse ?",
    answer: "Oui, tous nos modèles sont adaptés au cadre juridique suisse : LAMal, Code des obligations, droit du bail, etc. NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers.",
  },
  {
    question: "Puis-je envoyer ma lettre par courrier recommandé avec NextLetter ?",
    answer: "Oui, NextLetter imprime et envoie vos lettres par courrier recommandé. Vous recevez une preuve d'envoi et pouvez suivre l'acheminement. Idéal pour les résiliations et réclamations.",
  },
  {
    question: "Comment choisir le bon modèle de lettre ?",
    answer: "Parcourez les catégories (Résiliation, Motivation, Logement, Travail, Réclamations, Administration) et sélectionnez le modèle qui correspond à votre situation. Chaque modèle est personnalisable.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions juridiques spécifiques, consultez un professionnel du droit.",
  },
]

export default function ModelesHubPage() {
  const byCategory = getModelsByCategory()

  // Schema.org : CollectionPage + ItemList
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/modeles#webpage`,
    url: `${baseUrl}/modeles`,
    name: "Modèles de lettres pour la Suisse – NextLetter",
    description: "Tous les modèles de lettres NextLetter pour la Suisse : résiliation, motivation, réclamations, administration.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ALL_LETTER_MODELS.length,
      itemListElement: ALL_LETTER_MODELS.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: model.title,
          description: model.subtitle,
          url: `${baseUrl}${model.path}`,
        },
      })),
    },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-modeles-hub" data={faqData} />
      <Script
        id="schema-collection-modeles"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {/* H1 */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                <span className="text-foreground">Modèles de lettres</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                    pour la Suisse
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"
                    aria-hidden="true"
                  >
                    pour la Suisse
                  </span>
                </span>
              </h1>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Choisissez votre modèle de lettre parmi notre catalogue. Résiliation, motivation, réclamations, administration – tous nos modèles sont conformes au droit suisse et envoyés par courrier recommandé avec preuve.
              </p>
            </div>

            {/* Catégories et modèles */}
            <div className="space-y-12">
              {LETTER_CATEGORIES.map((category) => {
                const models = byCategory[category.id]
                if (models.length === 0) return null
                return (
                  <section key={category.id} className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">{category.title}</h2>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {models.map((model) => (
                        <Link
                          key={model.path}
                          href={model.path}
                          className="bg-background border border-border rounded-lg p-4 hover:border-brand/40 hover:shadow-md transition-all duration-300 group"
                        >
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand transition-colors">
                            {model.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{model.subtitle}</p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <details key={index} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold text-foreground cursor-pointer list-none">
                      {faq.question}
                    </summary>
                    <p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
