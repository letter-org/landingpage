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
  title: "Changer assurance maladie en Suisse – Guide changement caisse-maladie",
  description: "Comment changer d'assurance maladie en Suisse. Délais, préavis, lettre de résiliation. Nouvelle caisse-maladie. Envoi recommandé avec preuve.",
  alternates: { canonical: "/changer-assurance-maladie" },
  openGraph: {
    title: "Changer assurance maladie en Suisse – NextLetter",
    description: "Guide pour changer de caisse-maladie. Résilier l'ancienne, souscrire la nouvelle.",
    url: "/changer-assurance-maladie",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Comment changer d'assurance maladie en Suisse ?",
    answer: "1) Souscrivez une nouvelle assurance maladie avant le 30 novembre. 2) La nouvelle caisse envoie la confirmation à l'ancienne. 3) Envoyez votre lettre de résiliation à l'ancienne caisse par courrier recommandé avant le 30 novembre pour une résiliation au 31 décembre.",
  },
  {
    question: "Quel délai pour changer de caisse-maladie ?",
    answer: "Préavis de 1 mois pour une résiliation au 31 décembre. Votre lettre doit être reçue avant le 30 novembre. La nouvelle assurance doit confirmer votre inscription auprès de l'ancienne.",
  },
  {
    question: "Puis-je changer d'assurance maladie à tout moment ?",
    answer: "Non, la résiliation standard se fait pour le 31 décembre. Exception : franchise 300 CHF (modèle BASIS) peut être résiliée au 30 juin avec préavis de 3 mois.",
  },
]

export default function ChangerAssuranceMaladiePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Changer assurance maladie en Suisse",
    description: "Guide complet pour changer de caisse-maladie en Suisse. Étapes, délais, lettre de résiliation.",
    url: `${baseUrl}/changer-assurance-maladie`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-changer-assurance-maladie" data={faqData} />
      <Script
        id="schema-article-changer-assurance-maladie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Changer assurance maladie" gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Changer de caisse-maladie en Suisse ? Voici les étapes : souscrire la nouvelle assurance, résilier l'ancienne par courrier recommandé avant le 30 novembre pour une prise d'effet au 1er janvier.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Les 3 étapes pour changer d'assurance maladie</h2>
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Souscrire la nouvelle assurance</strong> – Choisissez votre nouvelle caisse-maladie et souscrivez avant le 30 novembre.</li>
                <li><strong className="text-foreground">Confirmation par la nouvelle caisse</strong> – La nouvelle caisse envoie la confirmation à l'ancienne. Pas besoin de le faire vous-même.</li>
                <li><strong className="text-foreground">Résilier l'ancienne</strong> – Envoyez votre lettre de résiliation par courrier recommandé à l'ancienne caisse avant le 30 novembre.</li>
              </ol>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Modèle de lettre conforme LAMal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>Envoi recommandé avec preuve</span>
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
                <Link href="/resilier-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Résilier assurance maladie</h3>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-maladie-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Lettre résiliation assurance maladie</h3>
                </Link>
                <Link href="/delai-resiliation-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Délai résiliation assurance maladie</h3>
                </Link>
                <Link href="/quand-resilier-assurance-maladie" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground">Quand résilier assurance maladie</h3>
                </Link>
              </div>
            </section>

            <CtaWhaou
              title="Prêt à changer d'assurance maladie ?"
              description="Générez votre lettre de résiliation et envoyez-la par courrier recommandé."
              buttonText="Générer ma lettre"
              href={addUtmParams(appUrls.base, "landing", "cta", "changer-assurance-maladie")}
              secondaryLink={{ href: "/modeles/lettre-resiliation-assurance-maladie-suisse", text: "Voir le modèle" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
