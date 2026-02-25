import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, FileText, CheckCircle, Clock } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import Link from "next/link"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"

export const metadata: Metadata = {
  title: "Lettre résiliation assurance maladie Suisse – modèle conforme & envoi recommandé",
  description: "Générez et envoyez votre lettre de résiliation d'assurance maladie en Suisse. Modèle conforme LAMal, envoi recommandé avec preuve.",
  alternates: {
    canonical: "/modeles/lettre-resiliation-assurance-maladie-suisse",
  },
  openGraph: {
    title: "Lettre résiliation assurance maladie Suisse – modèle conforme & envoi recommandé",
    description: "Générez et envoyez votre lettre de résiliation d'assurance maladie en Suisse. Modèle conforme LAMal, envoi recommandé avec preuve.",
    url: "/modeles/lettre-resiliation-assurance-maladie-suisse",
  },
}

const faqData = [
  {
    question: "Quand puis-je résilier mon assurance maladie de base en Suisse ?",
    answer: "L'assurance maladie de base (LAMal) peut être résiliée une fois par an, avec un délai de préavis de 3 mois. La résiliation doit être envoyée avant le 30 novembre pour prendre effet au 1er janvier de l'année suivante.",
  },
  {
    question: "Dois-je envoyer ma résiliation d'assurance maladie par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé afin de disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige concernant la date de réception de votre résiliation.",
  },
  {
    question: "Que doit contenir une lettre de résiliation d'assurance maladie ?",
    answer: "Une lettre de résiliation d'assurance maladie doit contenir vos coordonnées, votre numéro d'assuré, le nom de l'assureur, la date de résiliation souhaitée, et la mention de votre nouvelle assurance si applicable. Le modèle NextLetter inclut tous ces éléments essentiels.",
  },
  {
    question: "Puis-je résilier mon assurance maladie à tout moment ?",
    answer: "Non, l'assurance maladie de base ne peut être résiliée qu'une fois par an, avec un préavis de 3 mois, pour prendre effet au 1er janvier. Vérifiez les conditions spécifiques de votre contrat.",
  },
  {
    question: "Quelle est la date limite pour résilier mon assurance maladie ?",
    answer: "La résiliation doit être envoyée avant le 30 novembre pour prendre effet au 1er janvier de l'année suivante. Envoyez votre lettre suffisamment tôt pour respecter le délai de préavis de 3 mois.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou votre assureur.",
  },
]

export default function LettreResiliationAssuranceMaladiePage() {
  return (
    <>
      <FaqJsonLd id="schema-faq-lettre-resiliation-assurance-maladie-suisse" data={faqData} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {/* H1 avec effet whaou */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                <span className="text-foreground">Résiliation</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                    d'assurance maladie en Suisse
                  </span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse" aria-hidden="true">
                    d'assurance maladie en Suisse
                  </span>
                </span>
              </h1>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Résiliez votre assurance maladie de base (LAMal) en Suisse en quelques minutes. Votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sans déplacement. Conforme au droit suisse.
              </p>
            </div>

            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ce qu'il faut savoir en Suisse</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En Suisse, la résiliation de l'assurance maladie de base (LAMal) doit être effectuée <strong>par écrit</strong>. La résiliation n'est possible <strong>qu'une fois par an</strong>, avec un délai de préavis de <strong>3 mois</strong>.
                </p>
                <p>
                  La résiliation doit être envoyée <strong>avant le 30 novembre</strong> pour prendre effet au <strong>1er janvier</strong> de l'année suivante. L'envoi par <strong>courrier recommandé est fortement recommandé</strong> afin de disposer d'une preuve d'envoi et de réception.
                </p>
                <p>
                  Vous devez mentionner votre nouvelle assurance maladie si vous changez d'assureur, ou indiquer si vous êtes couvert par une autre assurance.
                </p>
                <p className="text-sm italic pt-4 border-t border-border">
                  ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou votre assureur.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Comment procéder</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 1 – Choisissez le modèle</h3>
                  <p className="text-muted-foreground text-sm">Sélectionnez le modèle de résiliation d'assurance maladie adapté à votre situation.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 2 – Complétez vos informations</h3>
                  <p className="text-muted-foreground text-sm">Remplissez vos coordonnées, votre numéro d'assuré, le nom de l'assureur et les dates.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 3 – Envoyez par courrier avec preuve</h3>
                  <p className="text-muted-foreground text-sm">NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement.</p>
                </div>
              </div>
            </section>

            {/* Ce que contient votre lettre */}
            <section className="mb-12 bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              {/* Effet whaou - border glow au hover */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ce que contient votre lettre</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le contenu exact de votre lettre est généré dynamiquement selon votre situation. Aucun modèle générique n'est affiché afin de garantir la conformité et la personnalisation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Vos coordonnées complètes</p>
                      <p className="text-xs text-muted-foreground">Nom, adresse, informations de contact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Numéro d'assuré</p>
                      <p className="text-xs text-muted-foreground">Référence de votre contrat LAMal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Coordonnées de l'assureur</p>
                      <p className="text-xs text-muted-foreground">Nom et adresse de votre compagnie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Date de résiliation</p>
                      <p className="text-xs text-muted-foreground">Date d'effet au 1er janvier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Formulation conforme LAMal</p>
                      <p className="text-xs text-muted-foreground">Texte adapté au droit suisse</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Nouvelle assurance (si applicable)</p>
                      <p className="text-xs text-muted-foreground">Mention de votre nouvel assureur</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Délais de résiliation</h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Type d'assurance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Délai de préavis</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date limite d'envoi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Assurance maladie de base (LAMal)</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">3 mois</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Avant le 30 novembre</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Prise d'effet</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">-</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">1er janvier de l'année suivante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                ⚠️ La résiliation n'est possible qu'une fois par an. Vérifiez toujours les conditions spécifiques de votre contrat.
              </p>
            </section>

            <section className="mb-12">
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

            <section className="mb-12 text-center bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden group">
              {/* Effet whaou - glow au hover */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Prêt à résilier votre assurance maladie ?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Générez votre lettre de résiliation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
                  <a
                    href={addUtmParams(appUrls.base, 'landing', 'cta', 'resiliation-assurance-maladie')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Générer et envoyer ma lettre maintenant
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/modeles/lettre-resiliation-assurance-complementaire"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-colors duration-300"
                  >
                    Voir d'autres modèles de résiliation
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Envoi en quelques minutes – preuve conservée dans votre dashboard
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Autres modèles de lettres</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/modeles/lettre-resiliation-assurance-complementaire" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation assurance complémentaire</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour complémentaire</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-auto" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation assurance auto</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour véhicule</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-menage-rc" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation assurance ménage RC</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour ménage</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-bail-locataire-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation bail locataire</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour locataire</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-abonnement-mobile" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation abonnement mobile</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour téléphonie</p>
                </Link>
                <Link href="/modeles/lettre-demission-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Lettre de démission</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour démission</p>
                </Link>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
