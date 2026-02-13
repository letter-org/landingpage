import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CommunesPageContent } from "@/components/communes-page-content"

/**
 * SEO metadata — page collectivités / communes suisses
 * Optimisée pour :
 *   - digitalisation commune suisse
 *   - transition écologique administrative
 *   - solution RSE commune
 *   - réduction CO2 administration
 *   - modernisation administration suisse
 */
export const metadata: Metadata = {
  title: "Solution collectivités – Digitalisation écologique du courrier communal",
  description:
    "NextLetter accompagne les communes suisses dans leur transition écologique administrative. Réduction CO₂, gain de temps, statistiques RSE mesurables et publiables. Demandez une démonstration.",
  alternates: {
    canonical: "/communes",
    languages: { "fr-CH": "/communes" },
  },
  keywords: [
    "digitalisation commune suisse",
    "transition écologique administrative",
    "solution RSE commune",
    "réduction CO2 administration",
    "modernisation administration suisse",
    "courrier recommandé commune",
    "digitalisation collectivité publique suisse",
    "empreinte carbone administration",
    "envoi courrier commune en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_CH",
    title: "NextLetter – Solution collectivités & communes suisses",
    description:
      "Digitalisez vos courriers communaux, réduisez votre empreinte carbone et mesurez votre impact RSE avec NextLetter.",
    url: "https://www.nextletter.ch/communes",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLetter – Solution collectivités & communes suisses",
    description:
      "Digitalisez vos courriers communaux, réduisez votre empreinte carbone et mesurez votre impact RSE avec NextLetter.",
  },
}

export default function CommunesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CommunesPageContent />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
