import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, FileText, CheckCircle, Clock, Eye } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import Link from "next/link"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"

export const metadata: Metadata = {
  title: "Lettre de motivation Suisse – Candidature + PDF | NextLetter",
  description: "Créez une lettre de motivation en Suisse, personnalisée selon le poste. Export PDF et envoi simple.",
  alternates: {
    canonical: "/modeles/lettre-motivation-suisse",
  },
  openGraph: {
    title: "Lettre de motivation Suisse – Candidature + PDF | NextLetter",
    description: "Créez une lettre de motivation en Suisse, personnalisée selon le poste. Export PDF et envoi simple.",
    url: "/modeles/lettre-motivation-suisse",
  },
}

const faqData = [
  {
    question: "Quelle est la longueur idéale d'une lettre de motivation en Suisse ?",
    answer: "En Suisse, une lettre de motivation fait généralement une page A4 maximum. Elle doit être concise, claire et adaptée au poste visé. Privilégiez la qualité et la pertinence plutôt que la longueur.",
  },
  {
    question: "Faut-il mentionner le salaire dans une lettre de motivation ?",
    answer: "Il n'est généralement pas recommandé de mentionner le salaire dans la lettre de motivation, sauf si l'annonce le demande explicitement. Le salaire se discute généralement lors de l'entretien.",
  },
  {
    question: "Dois-je joindre des certificats avec ma lettre de motivation ?",
    answer: "Les certificats et diplômes sont généralement joints au CV, pas à la lettre de motivation. La lettre de motivation sert à présenter votre candidature et à montrer votre motivation pour le poste.",
  },
  {
    question: "Dois-je envoyer la lettre de motivation avec le CV ?",
    answer: "Oui, en Suisse, il est courant d'envoyer la lettre de motivation et le CV ensemble. La lettre de motivation complète le CV en expliquant votre motivation et en mettant en avant les éléments pertinents pour le poste.",
  },
  {
    question: "Quelle est la différence entre une lettre de motivation et une candidature spontanée ?",
    answer: "Une lettre de motivation répond à une offre d'emploi spécifique, tandis qu'une candidature spontanée est envoyée à une entreprise sans poste annoncé. Dans les deux cas, la lettre doit être adaptée à l'entreprise et au secteur.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou un conseiller en orientation professionnelle.",
  },
]

export default function LettreMotivationPage() {
  return (
    <>
      <FaqJsonLd id="schema-faq-lettre-motivation-suisse" data={faqData} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {/* H1 avec effet whaou */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                <span className="text-foreground">Lettre de motivation</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                    en Suisse
                  </span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse" aria-hidden="true">
                    en Suisse
                  </span>
                </span>
              </h1>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Créez votre lettre de motivation en Suisse en quelques minutes. Votre lettre est générée, personnalisée selon le poste et exportable en PDF.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Adaptée à votre candidature. Professionnelle et efficace.
              </p>
            </div>

            {/* Ce qu'il faut savoir en Suisse */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ce qu'il faut savoir en Suisse</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En Suisse, la lettre de motivation est <strong>souvent attendue</strong> avec le CV lors d'une candidature. Elle doit être <strong>adaptée au poste</strong> et à l'entreprise, et faire généralement <strong>une page A4 maximum</strong>.
                </p>
                <p>
                  La structure classique comprend : une introduction qui accroche, un développement qui met en avant vos compétences et votre motivation, et une conclusion qui relance. Le ton doit être <strong>professionnel mais authentique</strong>.
                </p>
                <p>
                  Il est recommandé de personnaliser chaque lettre selon le poste visé et l'entreprise. Une lettre générique est souvent moins efficace qu'une lettre adaptée.
                </p>
                <p className="text-sm italic pt-4 border-t border-border">
                  ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un conseiller en orientation professionnelle.
                </p>
              </div>
            </section>

            {/* Étapes */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Comment procéder</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 1 – Choisissez le modèle</h3>
                  <p className="text-muted-foreground text-sm">Sélectionnez le modèle de lettre de motivation adapté à votre situation (candidature ou candidature spontanée).</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 2 – Personnalisez votre lettre</h3>
                  <p className="text-muted-foreground text-sm">Remplissez vos informations, adaptez le contenu au poste et à l'entreprise, et personnalisez le ton.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Étape 3 – Exportez en PDF</h3>
                  <p className="text-muted-foreground text-sm">Téléchargez votre lettre de motivation en PDF et envoyez-la avec votre CV.</p>
                </div>
              </div>
            </section>

            {/* Extrait (aperçu) */}
            <section className="mb-12 bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              {/* Effet whaou - border glow au hover */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Extrait (aperçu)</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le contenu exact de votre lettre est généré dynamiquement selon votre situation et le poste visé. Aucun modèle générique complet n'est affiché afin de garantir la personnalisation.
                </p>
                
                {/* Aperçu tronqué avec blur */}
                <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm relative select-none">
                  <div className="blur-sm">
                    <p className="mb-3">[Votre nom et adresse]</p>
                    <p className="mb-3">[Date]</p>
                    <p className="mb-3">[Nom et adresse de l'entreprise]</p>
                    <p className="mb-3 font-semibold">Objet : Candidature pour le poste de [poste]</p>
                    <p className="mb-3">Madame, Monsieur,</p>
                    <p className="mb-3">
                      Par la présente, je souhaite vous faire part de ma candidature pour le poste de [poste] au sein de votre entreprise. Mon parcours professionnel et mes compétences correspondent aux exigences de ce poste.
                    </p>
                    <p className="mb-3">
                      [Développement personnalisé selon votre profil et le poste]
                    </p>
                    <p className="mb-3">
                      Je reste à votre disposition pour un entretien et vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.
                    </p>
                    <p>[Signature]</p>
                  </div>
                  
                  {/* Overlay avec bouton */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
                    <a
                      href={addUtmParams(appUrls.base, 'landing', 'cta', 'lettre-motivation')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      Générer dans l'app
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Conseils pratiques */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Conseils pour rédiger votre lettre</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Structure</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Introduction accrocheuse (1-2 paragraphes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Développement : compétences et motivation (2-3 paragraphes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Conclusion qui relance (1 paragraphe)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Ton et style</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Ton professionnel mais authentique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Longueur : une page A4 maximum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>Adaptation au poste et à l'entreprise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
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

            {/* CTA */}
            <section className="mb-12 text-center bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden group">
              {/* Effet whaou - glow au hover */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Prêt à créer votre lettre de motivation ?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Générez votre lettre de motivation personnalisée en quelques minutes et exportez-la en PDF.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
                  <a
                    href={addUtmParams(appUrls.base, 'landing', 'cta', 'lettre-motivation')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Créer ma lettre de motivation maintenant
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/modeles/lettre-demission-suisse"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-colors duration-300"
                  >
                    Voir d'autres modèles de lettres
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Génération en quelques minutes – Export PDF inclus
                </p>
              </div>
            </section>

            {/* Liens internes */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Autres modèles de lettres</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/modeles/lettre-demission-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Lettre de démission</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour démission</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-bail-locataire-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation bail locataire</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour locataire</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-maladie-suisse" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation assurance maladie</h3>
                  <p className="text-sm text-muted-foreground">Modèle conforme LAMal</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-assurance-auto" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation assurance auto</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour véhicule</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-abonnement-mobile" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation abonnement mobile</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour téléphonie</p>
                </Link>
                <Link href="/modeles/lettre-resiliation-abonnement-fitness" className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Résiliation abonnement fitness</h3>
                  <p className="text-sm text-muted-foreground">Modèle pour salle de sport</p>
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
