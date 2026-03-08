/**
 * Template pour les pages /resilier-[entreprise]
 * Landing pages SEO "resilier swisscom", "resilier helsana", etc.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"
import type { ResilierBrand } from "@/lib/resilier-config"
import { getRelatedModels } from "@/lib/letter-models"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

function getFaqData(brand: ResilierBrand) {
  const { name, type } = brand
  if (type === "telecom") {
    return [
      { question: `Comment résilier ${name} en Suisse ?`, answer: `Pour résilier votre abonnement ${name}, envoyez une lettre de résiliation par courrier recommandé. NextLetter vous fournit un modèle conforme au droit suisse, l'imprime et l'envoie avec preuve d'envoi.` },
      { question: `Quel délai pour résilier ${name} ?`, answer: "Le délai varie selon votre contrat, souvent 1 à 3 mois. Vérifiez les conditions générales de votre abonnement." },
      { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi et de réception, essentielle en cas de litige." },
    ]
  }
  if (type === "assurance") {
    return [
      { question: `Comment résilier mon assurance ${name} ?`, answer: `Pour résilier votre assurance maladie ${name}, envoyez une lettre de résiliation par courrier recommandé avant l'échéance. NextLetter fournit un modèle conforme à la LAMal.` },
      { question: "Quel préavis pour une résiliation assurance ?", answer: "En Suisse, le préavis pour l'assurance maladie est généralement de 3 mois pour une résiliation en fin d'année." },
      { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi." },
    ]
  }
  // fitness
  return [
    { question: `Comment résilier mon abonnement ${name} ?`, answer: `Pour résilier votre abonnement ${name}, envoyez une lettre de résiliation par courrier recommandé. NextLetter vous fournit un modèle conforme et l'envoie avec preuve.` },
    { question: "Quel délai pour résilier une salle de sport ?", answer: "Le délai varie selon le contrat, souvent 1 à 3 mois. Vérifiez les conditions de votre abonnement." },
    { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi." },
  ]
}

export interface ResilierLandingProps {
  brand: ResilierBrand
}

export function ResilierLandingTemplate({ brand }: ResilierLandingProps) {
  const path = `/resilier-${brand.slug}`
  const faqData = getFaqData(brand)
  const relatedModels = getRelatedModels(brand.modelPath, 6)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Résilier ${brand.name} en Suisse`,
    description: `Guide pour résilier ${brand.name} : lettre de résiliation conforme, envoi recommandé avec preuve.`,
    url: `${baseUrl}${path}`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  const typeLabel = brand.type === "telecom" ? "abonnement" : brand.type === "assurance" ? "assurance" : "abonnement fitness"

  return (
    <>
      <FaqJsonLd id={`schema-faq-resilier-${brand.slug}`} data={faqData} />
      <Script
        id={`schema-article-resilier-${brand.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title={`Résilier ${brand.name}`} gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Vous souhaitez résilier votre {typeLabel} {brand.name} ? Envoyez votre lettre de résiliation par courrier recommandé en quelques minutes avec NextLetter. Modèle conforme au droit suisse, preuve d'envoi incluse.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Comment résilier {brand.name} ?</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>Choisissez le modèle de lettre de résiliation {brand.name}</li>
                <li>Remplissez vos coordonnées et références de contrat</li>
                <li>NextLetter imprime et envoie votre courrier recommandé avec preuve</li>
              </ol>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Lettre conforme au droit suisse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Preuve d'envoi et suivi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Sans déplacement – tout en ligne</span>
                </li>
              </ul>
            </section>

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

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Autres modèles de lettres</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {relatedModels.map((model) => (
                  <Link
                    key={model.path}
                    href={model.path}
                    className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">{model.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{model.subtitle}</p>
                  </Link>
                ))}
              </div>
              <Link href="/modeles" className="text-brand font-semibold hover:underline">
                Voir tous les modèles
              </Link>
            </section>

            <CtaWhaou
              title={`Prêt à résilier ${brand.name} ?`}
              description="Générez votre lettre de résiliation et envoyez-la par courrier recommandé en quelques minutes."
              buttonText="Générer ma lettre de résiliation"
              href={addUtmParams(appUrls.base, "landing", "cta", `resilier-${brand.slug}`)}
              secondaryLink={{ href: brand.modelPath, text: `Voir le modèle ${brand.name}` }}
              reassurance="Envoi en quelques minutes – preuve conservée"
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
