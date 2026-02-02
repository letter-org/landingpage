import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - NextLetter",
  description: "Politique de confidentialité de NextLetter concernant le traitement des données personnelles.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">🔐 POLITIQUE DE CONFIDENTIALITÉ</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Données collectées</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter collecte uniquement les données nécessaires à l'exécution du service, notamment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>informations fournies par l'utilisateur,</li>
              <li>adresses de livraison,</li>
              <li>données techniques de connexion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Utilisation des données</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4 mb-4">
              <li>la génération des courriers,</li>
              <li>la transmission aux prestataires tiers,</li>
              <li>la mise à disposition des preuves d'envoi.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Aucune donnée n'est vendue ni exploitée à des fins publicitaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Prestataires tiers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Certaines données peuvent être transmises à des prestataires techniques ou postaux tiers uniquement pour l'exécution du service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ces prestataires respectent des standards de sécurité conformes à la législation applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conservation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données sont conservées pendant une durée limitée, proportionnelle à la finalité du service, puis supprimées ou anonymisées.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sécurité</h2>
            <p className="text-muted-foreground leading-relaxed">
              NextLetter met en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les données contre tout accès non autorisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Droits des utilisateurs</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conformément à la Loi fédérale sur la protection des données (LPD), l'utilisateur peut :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4 mb-4">
              <li>demander l'accès à ses données,</li>
              <li>demander leur rectification ou suppression,</li>
              <li>exercer ses droits via : <a href="mailto:info@nextletter.ch" className="text-brand hover:underline">info@nextletter.ch</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              La présente politique peut être mise à jour à tout moment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La version en vigueur est celle publiée sur le site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

