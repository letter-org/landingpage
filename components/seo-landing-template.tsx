/**
 * Template SEO pour pages guides/landing
 * H1 whaou + contenu juridique suisse + FAQ + HowTo + Maillage (3 résil, 3 modèles, 1 envoyer)
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"
import { MaillageSeo } from "@/components/maillage-seo"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { HowToJsonLd, type HowToStep } from "@/components/seo/howto-jsonld"
import Script from "next/script"
import Link from "next/link"
import { appUrls, addUtmParams } from "@/lib/app-urls"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

export interface SeoLandingProps {
  title: string
  gradient: string
  description: string
  content: React.ReactNode
  faq: { question: string; answer: string }[]
  howTo?: { name: string; description: string; steps: HowToStep[] }
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
  ctaHref: string
  modelPath?: string
  schemaId: string
  canonicalPath: string
}

export function SeoLandingTemplate({
  title,
  gradient,
  description,
  content,
  faq,
  howTo,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaHref,
  modelPath,
  schemaId,
  canonicalPath,
}: SeoLandingProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${title} ${gradient}`.trim(),
    description,
    url: `${baseUrl}${canonicalPath}`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id={`${schemaId}-faq`} data={faq} />
      {howTo && (
        <HowToJsonLd
          id={`${schemaId}-howto`}
          name={howTo.name}
          description={howTo.description}
          steps={howTo.steps}
          url={canonicalPath}
        />
      )}
      <Script
        id={`${schemaId}-article`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title={title} gradient={gradient} />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{description}</p>

            {content}

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{f.question}</summary>
                    <p className="text-muted-foreground mt-4">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <MaillageSeo />

            <CtaWhaou
              title={ctaTitle}
              description={ctaDescription}
              buttonText={ctaButtonText}
              href={ctaHref}
              secondaryLink={modelPath ? { href: modelPath, text: "Voir le modèle" } : { href: "/modeles", text: "Voir tous les modèles" }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
