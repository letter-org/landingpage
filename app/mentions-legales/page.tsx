import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Informations légales",
  description: "Informations légales de NextLetter, plateforme d'envoi de lettres recommandées en ligne en Suisse.",
  alternates: {
    canonical: "/mentions-legales",
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">📄 MENTIONS LÉGALES — NextLetter</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Page officielle :{" "}
              <a href="https://www.nextletter.ch/mentions-legales" className="text-brand hover:underline">
                https://www.nextletter.ch/mentions-legales
              </a>
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>NextLetter</strong> — service numérique de génération et d&apos;envoi de courriers
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Édité par <strong>LEANZA MGK Sàrl</strong>, société à responsabilité limitée de droit suisse,
                siège social : Chemin de la Crésentine 57, 1023 Crissier.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                IDE : CHE-442.966.726 — inscrite au Registre du commerce suisse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                📧 Contact : <a href="mailto:info@nextletter.ch" className="text-brand hover:underline">info@nextletter.ch</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé par un prestataire technique situé en Europe, garantissant un niveau de sécurité conforme aux standards en vigueur (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter (LEANZA MGK Sàrl) met à disposition une plateforme permettant la génération et la transmission de courriers via des prestataires tiers.
              NextLetter n&apos;est ni un service postal, ni une autorité publique, ni un cabinet juridique.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              LEANZA MGK Sàrl ne saurait être tenue responsable :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>du refus d'un courrier par un destinataire,</li>
              <li>de l'interprétation juridique faite du contenu d'un courrier,</li>
              <li>d'un retard ou incident imputable aux prestataires tiers impliqués dans l'acheminement.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              L'ensemble des contenus du site (textes, modèles, visuels, structure) est protégé par le droit d'auteur.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Toute reproduction sans autorisation est interdite.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

