/**
 * LetterModelTemplate – Template réutilisable pour les pages de modèles de lettres
 *
 * Structure documentée selon les bonnes pratiques SEO et conversion NextLetter :
 * 1. H1 avec effet gradient "whaou" (animate-gradient-x)
 * 2. Introduction + proposition de valeur
 * 3. Section "Ce qu'il faut savoir en Suisse" (cadre juridique)
 * 4. Étapes "Comment procéder" (3 cartes)
 * 5. Contenu de la lettre (checklist ou aperçu)
 * 6. Contenu optionnel (tableaux, conseils)
 * 7. FAQ (schema.org FAQPage)
 * 8. CTA principal + secondaire (lien app)
 * 9. Maillage interne "Autres modèles"
 *
 * @see app/modeles/[slug]/page.tsx
 * @see lib/letter-models.ts
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, FileText, CheckCircle, Clock } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import Link from "next/link"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { HowToJsonLd } from "@/components/seo/howto-jsonld"
import { getRelatedModels } from "@/lib/letter-models"
import { getRelatedGuides } from "@/lib/guides"
import { MaillageContextuel } from "@/components/maillage-contextuel"
import { GeoDirectAnswer, GeoBrandCitation } from "@/components/geo-seo-blocks"
import { ArticleOrgJsonLd } from "@/components/seo/article-org-jsonld"

export interface FaqItem {
  question: string
  answer: string
}

export interface StepConfig {
  title: string
  description: string
}

export interface LetterContentItem {
  title: string
  subtitle: string
}

export interface LetterModelTemplateProps {
  /** Identifiant unique pour FaqJsonLd */
  faqSchemaId: string
  faqData: FaqItem[]
  /** Titre H1 (partie avant le gradient) */
  h1Title: string
  /** Partie du H1 avec effet gradient (ex: "en Suisse") */
  h1Gradient: string
  /** Paragraphes d'introduction */
  intro: {
    main: string
    sub: string
  }
  /** Contenu de la section "Ce qu'il faut savoir" */
  savoirContent: React.ReactNode
  /** Les 3 étapes "Comment procéder" */
  steps: StepConfig[]
  /** Éléments de la lettre (checklist) */
  letterContent: LetterContentItem[]
  /** Contenu optionnel entre lettre et FAQ (table, conseils, etc.) */
  optionalContent?: React.ReactNode
  /** Titre du CTA (ex: "Prêt à démissionner ?") */
  ctaTitle: string
  /** Description du CTA */
  ctaDescription: string
  /** Texte du bouton principal */
  ctaButtonText: string
  /** Texte de réassurance sous les boutons */
  ctaReassurance: string
  /** Lien secondaire "Voir d'autres modèles" */
  ctaSecondaryHref?: string
  /** UTM campaign pour le CTA */
  utmCampaign: string
  /** Chemin canonique (ex: /modeles/lettre-demission-suisse) */
  canonicalPath: string
  /** Modèles à exclure du maillage (généralement la page actuelle) */
  excludeFromOtherModels?: string
  /** Nom pour le schema HowTo (ex: "Lettre de démission en Suisse") */
  howToName?: string
  /** Réponse directe GEO (2–3 phrases). Sinon générée depuis le H1. */
  geoDirectAnswer?: string
}

export function LetterModelTemplate({
  faqSchemaId,
  faqData,
  h1Title,
  h1Gradient,
  intro,
  savoirContent,
  steps,
  letterContent,
  optionalContent,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaReassurance,
  ctaSecondaryHref,
  utmCampaign,
  canonicalPath,
  excludeFromOtherModels,
  howToName,
  geoDirectAnswer,
}: LetterModelTemplateProps) {
  const relatedModels = getRelatedModels(excludeFromOtherModels || canonicalPath, 6)
  const relatedGuides = getRelatedGuides(excludeFromOtherModels || canonicalPath, 2)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const articleUrl = `${baseUrl}${canonicalPath}`
  const articleHeadline = `${h1Title} ${h1Gradient}`.trim()
  const articleDesc = `${intro.main} ${intro.sub}`.slice(0, 300)
  const directAnswerText =
    geoDirectAnswer ??
    `Pour ${articleHeadline}, une lettre écrite avec preuve d'envoi ou accusé de réception est souvent indispensable pour sécuriser vos délais et votre dossier. NextLetter vous permet de rédiger, personnaliser et expédier ce courrier en ligne vers la Suisse, sans vous déplacer, avec envoi recommandé et preuve conservée.`

  return (
    <>
      <ArticleOrgJsonLd
        id={`${faqSchemaId}-article-org`}
        headline={articleHeadline}
        description={articleDesc}
        url={articleUrl}
      />
      <FaqJsonLd id={faqSchemaId} data={faqData} />
      {howToName && (
        <HowToJsonLd
          id={`${faqSchemaId}-howto`}
          name={howToName}
          description={`Comment générer et envoyer votre ${h1Title} ${h1Gradient} par courrier recommandé.`}
          steps={steps.map((s) => ({ name: s.title, text: s.description }))}
          url={canonicalPath}
        />
      )}
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {/* H1 avec effet whaou */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                <span className="text-foreground">{h1Title}</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                    {h1Gradient}
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"
                    aria-hidden="true"
                  >
                    {h1Gradient}
                  </span>
                </span>
              </h1>
            </div>

            <GeoDirectAnswer>{directAnswerText}</GeoDirectAnswer>
            <GeoBrandCitation />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">{intro.main}</p>
              <p className="text-muted-foreground leading-relaxed">{intro.sub}</p>
            </div>

            {/* Ce qu'il faut savoir en Suisse */}
            <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ce qu'il faut savoir en Suisse</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">{savoirContent}</div>
            </section>

            {/* Comment procéder */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Comment procéder</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                      {i === 0 && <FileText className="w-6 h-6 text-brand" />}
                      {i === 1 && <CheckCircle className="w-6 h-6 text-brand" />}
                      {i === 2 && <Clock className="w-6 h-6 text-brand" />}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ce que contient votre lettre */}
            <section className="mb-12 bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shimmer"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ce que contient votre lettre</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le contenu exact de votre lettre est généré dynamiquement selon votre situation. Aucun modèle
                  générique n'est affiché afin de garantir la conformité et la personnalisation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {letterContent.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {optionalContent}

            <MaillageContextuel models={relatedModels} guides={relatedGuides} utmCampaign={utmCampaign} />

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
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{ctaTitle}</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{ctaDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
                  <a
                    href={addUtmParams(appUrls.base, "landing", "cta", utmCampaign)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {ctaButtonText}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href={ctaSecondaryHref || relatedModels[0]?.path || "/modeles"}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-colors duration-300"
                  >
                    Voir d'autres modèles de lettres
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">{ctaReassurance}</p>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
