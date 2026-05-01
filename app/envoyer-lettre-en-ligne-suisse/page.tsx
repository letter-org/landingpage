import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Mail, Clock, Shield, FileText } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { ALL_LETTER_MODELS } from "@/lib/letter-models"
import { ALL_GUIDES } from "@/lib/guides"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"

export const metadata: Metadata = {
  title: "Envoyer une lettre en ligne en Suisse – Courrier recommandé sans déplacement",
  description: "Envoyez vos lettres recommandées en ligne en Suisse avec NextLetter. Sans déplacement, preuve d'envoi, suivi. Alternative à La Poste pour résiliations, réclamations et lettres officielles.",
  alternates: { canonical: "/envoyer-lettre-en-ligne-suisse" },
  openGraph: {
    title: "Envoyer une lettre en ligne en Suisse – NextLetter",
    description: "Envoyez vos lettres recommandées en ligne en Suisse. Alternative à La Poste, sans déplacement.",
    url: "/envoyer-lettre-en-ligne-suisse",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Comment envoyer une lettre en ligne en Suisse ?",
    answer: "Avec NextLetter, vous rédigez votre lettre en ligne, choisissez un modèle conforme au droit suisse, personnalisez le contenu, puis NextLetter imprime et envoie votre courrier par La Poste en recommandé. Vous recevez une preuve d'envoi et pouvez suivre l'acheminement.",
  },
  {
    question: "NextLetter remplace-t-il La Poste ?",
    answer: "Non, NextLetter utilise La Poste pour l'acheminement physique. NextLetter s'occupe de l'impression, de l'affranchissement et de l'envoi en recommandé. Vous n'avez pas à vous déplacer au bureau de poste.",
  },
  {
    question: "Quels types de lettres puis-je envoyer en ligne ?",
    answer: "Résiliations (assurance, bail, abonnement), lettres de motivation, démissions, contestations de facture ou d'amende, réclamations, oppositions aux poursuites. Plus de 100 modèles conformes au droit suisse.",
  },
  {
    question: "Ai-je une preuve d'envoi ?",
    answer: "Oui, chaque lettre envoyée via NextLetter génère une preuve d'envoi et un suivi. Idéal pour les résiliations et réclamations où un accusé de réception est requis.",
  },
  {
    question: "Combien coûte l'envoi d'une lettre en ligne ?",
    answer: "NextLetter propose des formules à l'unité ou par abonnement. Le prix inclut l'impression, l'affranchissement recommandé et la preuve d'envoi. Consultez les tarifs sur l'application.",
  },
]

const benefits = [
  { icon: Clock, text: "Zéro déplacement – Envoyez depuis chez vous" },
  { icon: Shield, text: "Preuve d'envoi et suivi en temps réel" },
  { icon: FileText, text: "Modèles conformes au droit suisse" },
  { icon: Mail, text: "Courrier recommandé via La Poste" },
]

const popularPaths = [
  "/modeles/lettre-resiliation-assurance-maladie-suisse",
  "/modeles/lettre-resiliation-bail-locataire-suisse",
  "/modeles/lettre-demission-suisse",
  "/modeles/lettre-contestation-facture-suisse",
  "/modeles/lettre-resiliation-assurance-css-suisse",
  "/modeles/lettre-motivation-suisse",
]
const popularModels = popularPaths
  .map((p) => ALL_LETTER_MODELS.find((m) => m.path === p))
  .filter(Boolean) as typeof ALL_LETTER_MODELS

const relatedGuides = ALL_GUIDES.slice(0, 3)

export default function EnvoyerLettreEnLigneSuissePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Envoyer une lettre en ligne en Suisse",
    description: "Guide complet : envoyer une lettre recommandée en ligne en Suisse avec NextLetter. Comparaison avec La Poste, avantages et procédure.",
    url: `${baseUrl}/envoyer-lettre-en-ligne-suisse`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-envoyer-lettre" data={faqData} />
      <Script
        id="schema-article-envoyer-lettre"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Envoyer une lettre en ligne" gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Envoyer une lettre recommandée en Suisse sans vous déplacer ? C'est possible avec NextLetter. 
              Rédigez, personnalisez et envoyez vos courriers officiels en quelques minutes, avec preuve d'envoi et suivi.
            </p>

            {/* Avantages */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Pourquoi envoyer une lettre en ligne ?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                    <b.icon className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Explication du service */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Comment ça marche ?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                NextLetter est un service suisse qui vous permet d'envoyer des lettres recommandées en ligne. 
                Vous choisissez un modèle (résiliation assurance, bail, démission, contestation, etc.), 
                vous personnalisez le texte, et NextLetter imprime, affranchit et envoie votre courrier 
                par La Poste en recommandé. Vous recevez une preuve d'envoi et pouvez suivre l'acheminement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Idéal pour les résiliations d'assurance maladie, de bail, d'abonnements, les lettres de démission, 
                les contestations de facture ou d'amende, et toutes les démarches administratives nécessitant 
                un courrier recommandé avec preuve.
              </p>
            </section>

            {/* Comparaison avec La Poste */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">NextLetter vs La Poste : quelle différence ?</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left p-4 font-semibold">Critère</th>
                      <th className="text-left p-4 font-semibold">La Poste (bureau)</th>
                      <th className="text-left p-4 font-semibold">NextLetter</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4">Déplacement</td>
                      <td className="p-4">Obligatoire</td>
                      <td className="p-4"><span className="text-foreground font-medium">Aucun</span></td>
                    </tr>
                    <tr className="border-t border-border bg-card/50">
                      <td className="p-4">Impression</td>
                      <td className="p-4">À faire soi-même</td>
                      <td className="p-4"><span className="text-foreground font-medium">Incluse</span></td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Preuve d'envoi</td>
                      <td className="p-4">Accusé de réception (optionnel)</td>
                      <td className="p-4"><span className="text-foreground font-medium">Incluse</span></td>
                    </tr>
                    <tr className="border-t border-border bg-card/50">
                      <td className="p-4">Modèles de lettres</td>
                      <td className="p-4">Non</td>
                      <td className="p-4"><span className="text-foreground font-medium">100+ modèles</span></td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Suivi</td>
                      <td className="p-4">Sur demande</td>
                      <td className="p-4"><span className="text-foreground font-medium">Centralisé</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                NextLetter utilise La Poste pour l'acheminement physique. La différence : vous n'avez pas à 
                imprimer, mettre sous pli, affranchir ni vous déplacer. Tout est géré en ligne.
              </p>
            </section>

            {/* Avantages détaillés */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Les avantages d'envoyer une lettre en ligne</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Gain de temps</strong> – Plus besoin d'imprimer, d'affranchir ou de vous rendre au bureau de poste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Preuve juridique</strong> – Chaque envoi génère une preuve d'envoi, essentielle pour les résiliations et réclamations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Modèles conformes</strong> – Lettres adaptées au droit suisse (LAMal, Code des obligations, etc.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Disponible 24/7</strong> – Envoyez quand vous voulez, sans contrainte d'horaires.</span>
                </li>
              </ul>
            </section>

            {/* Modèles populaires */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Modèles de lettres populaires</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {popularModels.map((model) => (
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

            {/* Guides */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Guides utiles</h2>
              <div className="space-y-3">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.path}
                    href={guide.path}
                    className="block bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
                  </Link>
                ))}
              </div>
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

            <CtaWhaou
              title="Prêt à envoyer votre lettre en ligne ?"
              description="Générez et envoyez votre lettre recommandée en quelques minutes avec NextLetter."
              buttonText="Générer et envoyer ma lettre"
              href={addUtmParams(appUrls.base, "landing", "cta", "envoyer-lettre-en-ligne")}
              secondaryLink={{ href: "/modeles", text: "Voir tous les modèles" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
