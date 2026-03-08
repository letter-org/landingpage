import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Résilier assurance maladie en Suisse – Guide complet LAMal",
  description: "Comment résilier votre assurance maladie en Suisse. Délais, préavis, lettre conforme LAMal. Envoi recommandé avec preuve. Changer de caisse-maladie.",
  alternates: { canonical: "/resilier-assurance-maladie" },
  openGraph: {
    title: "Résilier assurance maladie en Suisse – NextLetter",
    description: "Guide complet : résilier ou changer d'assurance maladie. Lettre conforme, envoi recommandé.",
    url: "/resilier-assurance-maladie",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Quand puis-je résilier mon assurance maladie en Suisse ?",
    answer: "Pour l'assurance de base (LAMal) : préavis de 1 mois pour une résiliation au 31 décembre. Votre lettre doit être reçue avant le 30 novembre. Pour une franchise de 300 CHF (modèle BASIS), préavis de 3 mois pour résiliation au 30 juin.",
  },
  {
    question: "Comment résilier mon assurance maladie ?",
    answer: "Envoyez une lettre de résiliation par courrier recommandé à votre caisse-maladie. NextLetter fournit un modèle conforme à la LAMal, l'imprime et l'envoie avec preuve d'envoi.",
  },
  {
    question: "Dois-je envoyer par courrier recommandé ?",
    answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. C'est la date de réception qui compte, pas le cachet de la poste.",
  },
]

export default function ResilierAssuranceMaladiePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Résilier assurance maladie en Suisse",
    description: "Guide complet pour résilier ou changer d'assurance maladie en Suisse. Délais LAMal, modèle de lettre, envoi recommandé.",
    url: `${baseUrl}/resilier-assurance-maladie`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-resilier-assurance-maladie" data={faqData} />
      <Script
        id="schema-article-resilier-assurance-maladie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Résilier assurance maladie" gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Résilier ou changer d'assurance maladie en Suisse ? Voici le guide complet : délais, préavis LAMal, modèle de lettre conforme et envoi recommandé avec preuve.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Comment résilier votre assurance maladie ?</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>Choisissez le modèle de lettre de résiliation assurance maladie</li>
                <li>Remplissez vos coordonnées et numéro de police</li>
                <li>NextLetter imprime et envoie votre courrier recommandé avec preuve</li>
              </ol>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Modèle conforme à la LAMal</span>
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
              <h2 className="text-2xl font-semibold mb-4">Pages liées</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/modeles/lettre-resiliation-assurance-maladie-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Lettre résiliation assurance maladie</h3>
                  <p className="text-sm text-muted-foreground mt-1">Modèle conforme LAMal</p>
                </Link>
                <Link href="/changer-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Changer assurance maladie</h3>
                  <p className="text-sm text-muted-foreground mt-1">Changer de caisse-maladie</p>
                </Link>
                <Link href="/delai-resiliation-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Délai résiliation assurance maladie</h3>
                  <p className="text-sm text-muted-foreground mt-1">Dates limites et préavis</p>
                </Link>
                <Link href="/quand-resilier-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Quand résilier assurance maladie</h3>
                  <p className="text-sm text-muted-foreground mt-1">Calendrier et échéances</p>
                </Link>
              </div>
            </section>

            <CtaWhaou
              title="Prêt à résilier votre assurance maladie ?"
              description="Générez votre lettre de résiliation et envoyez-la par courrier recommandé en quelques minutes."
              buttonText="Générer ma lettre de résiliation"
              href={addUtmParams(appUrls.base, "landing", "cta", "resilier-assurance-maladie")}
              secondaryLink={{ href: "/modeles/lettre-resiliation-assurance-maladie-suisse", text: "Voir le modèle" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
