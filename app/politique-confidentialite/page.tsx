import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - NextLetter",
  description: "Politique de confidentialité de NextLetter concernant le traitement des données personnelles.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter, exploitée par LEANZA MGK, accorde une importance particulière à la protection de vos données personnelles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette politique explique de manière claire comment vos données sont collectées, utilisées et protégées lorsque vous utilisez la plateforme NextLetter, conformément à la législation applicable en matière de protection des données (LPD et RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Responsable du traitement</h2>
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Données que nous collectons</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Selon votre utilisation de la plateforme, nous pouvons collecter :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Informations de contact :</strong> nom, prénom, email, téléphone, adresse postale</li>
              <li><strong>Informations liées au compte :</strong> historique d'envoi, documents, contacts</li>
              <li><strong>Informations de facturation</strong> (traitées par des prestataires de paiement sécurisés)</li>
              <li><strong>Données techniques :</strong> adresse IP, type d'appareil, navigateur</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pourquoi nous utilisons vos données</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vos données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Fournir le service d'envoi de lettres recommandées</li>
              <li>Gérer votre compte et vos crédits</li>
              <li>Assurer le suivi et l'archivage de vos envois</li>
              <li>Vous contacter en cas de besoin lié au service</li>
              <li>Améliorer la plateforme et l'expérience utilisateur</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Partage des données</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vos données sont partagées uniquement lorsque nécessaire, notamment avec :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Des prestataires d'impression et d'acheminement postal (ex. Pingen)</li>
              <li>Des prestataires de paiement</li>
              <li>Des prestataires techniques (hébergement, maintenance)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              👉 Vos données ne sont jamais revendues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Conservation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous conservons vos données uniquement pendant la durée nécessaire au bon fonctionnement du service et au respect de nos obligations légales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sécurité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité adaptées afin de protéger vos données contre tout accès non autorisé, perte ou utilisation abusive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vous pouvez à tout moment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Accéder à vos données</li>
              <li>Demander leur correction ou suppression (dans les limites légales)</li>
              <li>Vous opposer à certains traitements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              📧 <a href="mailto:info@nextletter.ch" className="text-brand hover:underline">info@nextletter.ch</a>
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

