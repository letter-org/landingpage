import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique des cookies - NextLetter",
  description: "Politique des cookies de NextLetter concernant l'utilisation des cookies et technologies similaires.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">Politique des cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. 
              Il permet au site de mémoriser vos préférences et d'améliorer votre expérience de navigation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Cookies utilisés par NextLetter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter utilise les types de cookies suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (authentification, sécurité)</li>
              <li><strong>Cookies de préférences :</strong> mémorisent vos choix (langue, thème)</li>
              <li><strong>Cookies analytiques :</strong> nous aident à comprendre comment vous utilisez le site (uniquement avec votre consentement)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Gestion de vos préférences</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vous pouvez gérer vos préférences de cookies à tout moment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Via le bandeau de consentement affiché lors de votre première visite</li>
              <li>En modifiant les paramètres de votre navigateur</li>
              <li>En nous contactant à <a href="mailto:info@nextletter.ch" className="text-brand hover:underline">info@nextletter.ch</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies tiers</h2>
            <p className="text-muted-foreground leading-relaxed">
              NextLetter peut utiliser des services tiers (analytics) qui déposent leurs propres cookies. 
              Ces cookies sont soumis aux politiques de confidentialité de ces tiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Durée de conservation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les cookies sont conservés pour une durée maximale de 13 mois, conformément à la réglementation en vigueur.
            </p>
          </section>

          <div className="mt-12 p-6 bg-secondary rounded-xl border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Dernière mise à jour :</strong> 21.01.2026
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Éditeur :</strong> LEANZA MGK, Lausanne, Suisse
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
