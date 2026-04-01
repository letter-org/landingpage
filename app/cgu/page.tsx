import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation de NextLetter, plateforme d'envoi de lettres recommandées en ligne en Suisse.",
  alternates: {
    canonical: "/cgu",
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
              Les présentes Conditions Générales régissent l&apos;utilisation de la plateforme NextLetter, éditée par{" "}
              <strong>LEANZA MGK Sàrl</strong> (mentions légales :{" "}
              <a href="https://www.nextletter.ch/mentions-legales" className="text-brand hover:underline">
                https://www.nextletter.ch/mentions-legales
              </a>
              ), permettant aux utilisateurs de :
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
              <li>ne conserve pas les données complètes de paiement : celles-ci sont traitées par des prestataires de paiement agréés.</li>
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
              L&apos;impression, l&apos;acheminement et la distribution des courriers sont assurés par des prestataires postaux tiers.
              L&apos;utilisateur accepte que l&apos;envoi soit réalisé par des partenaires externes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              LEANZA MGK Sàrl agit en tant qu&apos;intermédiaire technique et ne saurait être tenue responsable des délais de livraison,
              pertes, erreurs d&apos;acheminement ou incidents imputables à ces prestataires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Preuves et suivi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorsque disponible, NextLetter met à disposition des preuves d&apos;envoi ou de distribution fournies par les prestataires tiers,{" "}
              <strong>à titre indicatif</strong>. Elles sont consultables dans l&apos;espace utilisateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prix, crédits et paiement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les prix sont indiqués en francs suisses (CHF). Le service fonctionne sur un <strong>système de crédits prépayés</strong>.
              Les crédits peuvent être utilisés pour générer et/ou envoyer des lettres via la plateforme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les crédits achetés ne sont pas remboursables, sauf obligation légale contraire.
              Après exécution d&apos;un envoi ou d&apos;une prestation commandée, aucun remboursement ne peut être exigé hors ces cas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le règlement s&apos;effectue via un prestataire de paiement tiers ; les moyens de paiement acceptés sont ceux proposés au moment de la commande.
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
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les contenus générés via NextLetter sont fournis <strong>à titre informatif</strong> et ne constituent en aucun cas un conseil juridique.
              L&apos;utilisateur est seul responsable du contenu des lettres, de leur utilisation et de leur conformité aux lois applicables.
              LEANZA MGK Sàrl ne garantit pas l&apos;exactitude, la validité juridique ou l&apos;adéquation des documents à une situation particulière ;
              l&apos;utilisateur vérifie les informations avant tout envoi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dans les limites autorisées par le droit suisse, la responsabilité de LEANZA MGK Sàrl est exclue pour tout dommage indirect,
              perte financière, litige avec un tiers ou préjudice consécutif (y compris en cas de rejet administratif ou de retard).
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

