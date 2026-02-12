import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ComparisonSection } from "@/components/comparison-section"
import { SwissAdvantage } from "@/components/swiss-advantage"
import { TargetAudience } from "@/components/target-audience"
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
  // { absolute } empêche le template "%s | NextLetter" du layout de s'appliquer
  // Sans ça, le titre devenait "NextLetter – ... | NextLetter" (doublé)
  title: {
    absolute: "NextLetter – Lettre recommandée en ligne en Suisse",
  },
  description: "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi en temps réel, modèles de lettres prêts à l'emploi. Simple, rapide et conforme.",
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
    description: "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi, modèles prêts à l'emploi.",
    url: "https://www.nextletter.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLetter – Lettre recommandée en ligne en Suisse",
    description: "Envoyez vos lettres recommandées en ligne en Suisse, sans déplacement. Preuve d'envoi, suivi, modèles prêts à l'emploi.",
  },
}

/**
 * DEV VERIFICATION COMMANDS:
 * curl -I https://www.nextletter.ch
 * curl -I https://www.nextletter.ch/sitemap.xml
 * curl -I https://www.nextletter.ch/robots.txt
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global background mountains */}
      <BackgroundMountains />
      
      <Header />
      <main className="relative z-10">
        {/* Hero contains the main H1 */}
        <Hero />
        
        {/* Comment ça marche + article Suisse avec effet whaou */}
        <HowItWorks />
        
        {/* Modèles de lettres les plus utilisés */}
        <SeoHomepageContent />
        
        {/* Comparaison: Courrier standard vs NextLetter */}
        <ComparisonSection />
        
        {/* Fonctionnalités - moved between ComparisonSection and TargetAudience */}
        <Features />
        
        {/* Pour qui */}
        <TargetAudience />
        
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
