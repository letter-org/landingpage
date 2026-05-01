/**
 * Template pour les pages /adresse-resiliation-[entreprise]
 * Cluster SEO "adresse résiliation swisscom", etc.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Clock, FileText } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"
import type { AdresseResiliationEntry } from "@/lib/adresse-resiliation-config"
import { ADRESSE_RESILIATION_ENTRIES } from "@/lib/adresse-resiliation-config"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

function getFaqData(entry: AdresseResiliationEntry) {
  return [
    {
      question: `Où envoyer ma lettre de résiliation ${entry.name} ?`,
      answer: `Envoyez votre lettre de résiliation à l'adresse suivante : ${entry.address}. Nous recommandons l'envoi par courrier recommandé pour disposer d'une preuve.`,
    },
    {
      question: `Quel délai pour résilier ${entry.name} ?`,
      answer: entry.delays,
    },
    {
      question: "Dois-je envoyer par courrier recommandé ?",
      answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception, essentielle en cas de litige.",
    },
  ]
}

export interface AdresseResiliationTemplateProps {
  entry: AdresseResiliationEntry
}

export function AdresseResiliationTemplate({ entry }: AdresseResiliationTemplateProps) {
  const path = `/adresse-resiliation-${entry.slug}`
  const faqData = getFaqData(entry)
  const relatedAdresses = ADRESSE_RESILIATION_ENTRIES.filter((e) => e.slug !== entry.slug).slice(0, 4)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Adresse résiliation ${entry.name}`,
    description: `Adresse complète pour envoyer votre lettre de résiliation ${entry.name}. Délais, modèle de lettre, envoi recommandé.`,
    url: `${baseUrl}${path}`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id={`schema-faq-adresse-${entry.slug}`} data={faqData} />
      <Script
        id={`schema-article-adresse-${entry.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Adresse résiliation" gradient={entry.name} />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Vous cherchez l'adresse pour envoyer votre lettre de résiliation {entry.name} ? Voici l'adresse complète, les délais à respecter et un modèle de lettre conforme au droit suisse.
            </p>

            {/* Adresse complète */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand" />
                Adresse complète
              </h2>
              <p className="text-foreground font-medium leading-relaxed">
                {entry.address}
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Vérifiez sur le site officiel {entry.name} en cas de changement d'adresse.
              </p>
            </section>

            {/* Délais */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand" />
                Délais à respecter
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {entry.delays}
              </p>
            </section>

            {/* Modèle lettre + Envoyer recommandé */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand" />
                Modèle de lettre et envoi recommandé
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                NextLetter vous fournit un modèle de lettre conforme au droit suisse pour résilier {entry.name}. 
                Remplissez vos coordonnées, et NextLetter imprime et envoie votre courrier recommandé avec preuve d'envoi. 
                Plus besoin d'imprimer, d'affranchir ou de vous déplacer à La Poste.
              </p>
              <a
                href={addUtmParams(appUrls.base, "landing", "cta", `adresse-resiliation-${entry.slug}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                Générer et envoyer ma lettre
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4">
                <Link href={entry.modelPath} className="text-brand font-medium hover:underline">
                  Voir le modèle de lettre {entry.name} →
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

            {/* Autres adresses */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Autres adresses de résiliation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {relatedAdresses.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/adresse-resiliation-${e.slug}`}
                    className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">Adresse résiliation {e.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{e.type === "telecom" ? "Télécom" : "Assurance"}</p>
                  </Link>
                ))}
              </div>
              <Link href="/modeles" className="text-brand font-semibold hover:underline">
                Voir tous les modèles de lettres
              </Link>
            </section>

            <CtaWhaou
              title={`Prêt à résilier ${entry.name} ?`}
              description="Générez votre lettre, envoyez-la par courrier recommandé avec preuve. Sans déplacement."
              buttonText="Générer ma lettre de résiliation"
              href={addUtmParams(appUrls.base, "landing", "cta", `adresse-${entry.slug}`)}
              secondaryLink={{ href: entry.modelPath, text: `Voir le modèle ${entry.name}` }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
