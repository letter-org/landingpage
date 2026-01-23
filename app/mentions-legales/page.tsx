import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Informations légales - NextLetter",
  description: "Informations légales de NextLetter, plateforme d'envoi de lettres recommandées en ligne.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">Informations légales</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              NextLetter est une plateforme exploitée par :
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>LEANZA MGK</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Lausanne, Suisse
              </p>
              <p className="text-muted-foreground leading-relaxed">
                📧 <a href="mailto:info@nextletter.ch" className="text-brand hover:underline">info@nextletter.ch</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter agit comme plateforme intermédiaire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'impression et l'acheminement des courriers sont réalisés par des partenaires tiers spécialisés.
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

