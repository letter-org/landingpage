import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ComparisonSection } from "@/components/comparison-section"
import { TargetAudience } from "@/components/target-audience"
import { CommunesCtaBanner } from "@/components/communes-cta-banner"
import { ImpactSection } from "@/components/impact-section"
import { Security } from "@/components/security"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { BackgroundMountains } from "@/components/background-mountains"
import { CookieBanner } from "@/components/cookie-banner"
import { SeoHomepageContent } from "@/components/seo-homepage-content"
import type { Metadata } from "next"

/**
 * Homepage-specific metadata to strengthen SEO signals
 * This overrides the default layout metadata for the homepage only
 */
export const metadata: Metadata = {
  title: {
    absolute: "NextLetter – Lettre recommandée en ligne en Suisse",
  },
  description:
    "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi en temps réel, modèles de lettres prêts à l'emploi. Simple, rapide et conforme.",
  alternates: {
    canonical: "/",
    languages: {
      "fr-CH": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    title: "NextLetter – Lettre recommandée en ligne en Suisse",
    description:
      "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi, modèles prêts à l'emploi.",
    url: "https://www.nextletter.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLetter – Lettre recommandée en ligne en Suisse",
    description:
      "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi, modèles prêts à l'emploi.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundMountains />

      <Header />
      <main className="relative z-10">
        <Hero />

        <HowItWorks />

        <SeoHomepageContent />

        <ComparisonSection />

        <Features />

        <TargetAudience />

        <CommunesCtaBanner />

        <ImpactSection />
        <Security />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
