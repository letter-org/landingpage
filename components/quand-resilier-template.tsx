/**
 * Template pour les pages /quand-resilier-[contrat]
 * Cluster SEO "quand résilier assurance maladie suisse", etc.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, AlertCircle } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"
import type { QuandResilierEntry } from "@/lib/quand-resilier-config"
import { QUAND_RESILIATION_ENTRIES } from "@/lib/quand-resilier-config"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

function getFaqData(entry: QuandResilierEntry) {
  return [
    {
      question: `Quand résilier mon ${entry.title.toLowerCase()} en Suisse ?`,
      answer: entry.delays,
    },
    {
      question: "Quelles sont les dates limites ?",
      answer: entry.deadlines,
    },
    {
      question: "Dois-je envoyer par courrier recommandé ?",
      answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception.",
    },
  ]
}

export interface QuandResilierTemplateProps {
  entry: QuandResilierEntry
}

export function QuandResilierTemplate({ entry }: QuandResilierTemplateProps) {
  const path = `/quand-resilier-${entry.slug}`
  const faqData = getFaqData(entry)
  const relatedEntries = QUAND_RESILIATION_ENTRIES.filter((e) => e.slug !== entry.slug).slice(0, 4)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Quand résilier ${entry.title} en Suisse`,
    description: entry.description,
    url: `${baseUrl}${path}`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id={`schema-faq-quand-${entry.slug}`} data={faqData} />
      <Script
        id={`schema-article-quand-${entry.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title={`Quand résilier ${entry.title}`} gradient="en Suisse ?" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {entry.description}
            </p>

            {/* Délais */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand" />
                Délais de préavis
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {entry.delays}
              </p>
            </section>

            {/* Dates limites */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand" />
                Dates limites importantes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {entry.deadlines}
              </p>
            </section>

            {/* Modèle lettre */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4">Modèle de lettre de résiliation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                NextLetter vous fournit un modèle conforme au droit suisse pour résilier votre {entry.title.toLowerCase()}. 
                Remplissez vos coordonnées, et NextLetter imprime et envoie votre courrier recommandé avec preuve d'envoi.
              </p>
              <a
                href={addUtmParams(appUrls.base, "landing", "cta", `quand-resilier-${entry.slug}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                Générer ma lettre de résiliation
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4">
                <Link href={entry.modelPath} className="text-brand font-medium hover:underline">
                  Voir le modèle de lettre →
                </Link>
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((f, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{f.question}</summary>
                    <p className="text-muted-foreground mt-4">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Autres pages quand résilier */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Quand résilier d'autres contrats</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {relatedEntries.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/quand-resilier-${e.slug}`}
                    className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">Quand résilier {e.title.toLowerCase()}</h3>
                  </Link>
                ))}
              </div>
              <Link href="/modeles" className="text-brand font-semibold hover:underline">
                Voir tous les modèles de lettres
              </Link>
            </section>

            <CtaWhaou
              title="Prêt à résilier ?"
              description="Générez votre lettre et envoyez-la par courrier recommandé avec preuve."
              buttonText="Générer ma lettre"
              href={addUtmParams(appUrls.base, "landing", "cta", `quand-${entry.slug}`)}
              secondaryLink={{ href: entry.modelPath, text: "Voir le modèle" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
