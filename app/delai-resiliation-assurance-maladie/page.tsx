import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, AlertCircle } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Délai résiliation assurance maladie – Dates limites LAMal Suisse",
  description: "Délai et préavis pour résilier assurance maladie en Suisse. Date limite 30 novembre, 31 mars. Calendrier LAMal. Envoi recommandé.",
  alternates: { canonical: "/delai-resiliation-assurance-maladie" },
  openGraph: {
    title: "Délai résiliation assurance maladie – NextLetter",
    description: "Dates limites et préavis pour résilier votre assurance maladie en Suisse.",
    url: "/delai-resiliation-assurance-maladie",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Quel est le délai pour résilier l'assurance maladie ?",
    answer: "Préavis de 1 mois pour une résiliation au 31 décembre. Pour une franchise de 300 CHF (modèle BASIS), préavis de 3 mois pour résiliation au 30 juin.",
  },
  {
    question: "Quelle est la date limite pour résilier ?",
    answer: "Pour résilier au 1er janvier : votre lettre doit être reçue avant le 30 novembre (dernier jour ouvrable). Pour résilier au 1er juillet (franchise 300 CHF) : avant le 31 mars.",
  },
  {
    question: "La date de réception ou d'envoi compte ?",
    answer: "C'est la date de réception qui compte, pas le cachet de la poste. Envoyez par courrier recommandé suffisamment tôt pour respecter le délai.",
  },
]

export default function DelaiResiliationAssuranceMaladiePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Délai résiliation assurance maladie – Suisse",
    description: "Délais, préavis et dates limites pour résilier votre assurance maladie en Suisse. Calendrier LAMal.",
    url: `${baseUrl}/delai-resiliation-assurance-maladie`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-delai-assurance-maladie" data={faqData} />
      <Script
        id="schema-article-delai-assurance-maladie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Délai résiliation" gradient="assurance maladie" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Quel délai et quelles dates limites pour résilier votre assurance maladie en Suisse ? Voici le calendrier LAMal et les préavis à respecter.
            </p>

            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand" />
                Préavis et délais
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Assurance de base (LAMal) :</strong> préavis de 1 mois pour résiliation au 31 décembre.</li>
                <li><strong className="text-foreground">Franchise 300 CHF (modèle BASIS) :</strong> préavis de 3 mois pour résiliation au 30 juin.</li>
                <li><strong className="text-foreground">Assurance complémentaire :</strong> préavis de 3 mois pour résiliation au 31 décembre.</li>
              </ul>
            </section>

            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand" />
                Dates limites importantes
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Résiliation au 1er janvier :</strong> lettre reçue avant le 30 novembre (dernier jour ouvrable).</li>
                <li><strong className="text-foreground">Résiliation au 1er juillet :</strong> (franchise 300 CHF uniquement) lettre reçue avant le 31 mars.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                C'est la date de réception qui compte, pas le cachet de la poste. Envoyez par courrier recommandé suffisamment tôt.
              </p>
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
                <Link href="/resilier-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Résilier assurance maladie</h3>
                </Link>
                <Link href="/changer-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Changer assurance maladie</h3>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-maladie-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Lettre résiliation assurance maladie</h3>
                </Link>
                <Link href="/quand-resilier-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Quand résilier assurance maladie</h3>
                </Link>
              </div>
            </section>

            <CtaWhaou
              title="Prêt à résilier ?"
              description="Générez votre lettre et envoyez-la par courrier recommandé avant la date limite."
              buttonText="Générer ma lettre"
              href={addUtmParams(appUrls.base, "landing", "cta", "delai-assurance-maladie")}
              secondaryLink={{ href: "/modeles/lettre-resiliation-assurance-maladie-suisse", text: "Voir le modèle" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
