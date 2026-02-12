import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation de NextLetter, plateforme d'envoi de lettres recommandées en ligne en Suisse.",
  alternates: {
    canonical: "/cgu",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">📑 CONDITIONS GÉNÉRALES D'UTILISATION ET DE VENTE (CG)</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objet</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les présentes Conditions Générales régissent l'utilisation de la plateforme NextLetter, permettant aux utilisateurs de :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>générer des courriers à partir de modèles,</li>
              <li>personnaliser ces courriers,</li>
              <li>déclencher leur transmission via des prestataires tiers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Nature du service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter fournit un outil numérique d'assistance à la rédaction et à la transmission de courriers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              NextLetter :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>ne fournit aucun conseil juridique,</li>
              <li>ne garantit pas la validité légale universelle d'un courrier,</li>
              <li>ne détient aucun fonds,</li>
              <li>ne stocke aucune donnée bancaire.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Responsabilité de l'utilisateur</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'utilisateur est seul responsable :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4 mb-4">
              <li>du contenu généré,</li>
              <li>du choix du destinataire,</li>
              <li>de l'usage du courrier,</li>
              <li>de la conformité de son courrier à sa situation personnelle.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Les modèles proposés sont fournis à titre indicatif, selon les usages courants en Suisse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Transmission des courriers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'impression, l'acheminement et la distribution des courriers sont assurés par des prestataires postaux tiers agréés.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NextLetter agit en tant qu'intermédiaire technique et ne saurait être tenu responsable d'un incident postal indépendant de sa volonté.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Preuves et suivi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorsque disponible, NextLetter met à disposition des preuves d'envoi ou de distribution fournies par les prestataires tiers.
              Ces preuves sont consultables dans l'espace utilisateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prix et paiement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les prix sont indiqués en francs suisses (CHF).
              Le paiement porte sur un service numérique exécuté à la demande.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Une fois le service exécuté, aucun remboursement ne peut être exigé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Accès au service</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              NextLetter se réserve le droit :
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>de suspendre un compte en cas d'abus,</li>
              <li>de limiter l'accès au service pour des raisons techniques ou légales.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation de responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dans les limites autorisées par le droit suisse, la responsabilité de NextLetter est exclue pour tout dommage indirect, perte financière ou préjudice consécutif.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Les présentes CG sont soumises au droit suisse.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tout litige relève des tribunaux compétents en Suisse.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

