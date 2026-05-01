/**
 * Maillage SEO : 3 résiliations + 3 modèles + 1 envoyer recommandé
 * Crée un cluster sémantique puissant sur chaque page
 */

import Link from "next/link"

const RESILIATION_LINKS = [
  { href: "/modeles/lettre-resiliation-assurance-maladie-suisse", title: "Résiliation assurance maladie" },
  { href: "/modeles/resiliation-bail-suisse", title: "Résiliation de bail (pilier)" },
  { href: "/modeles/lettre-resiliation-bail-locataire-suisse", title: "Résiliation bail locataire" },
  { href: "/resilier-swisscom", title: "Résilier Swisscom" },
]

const MODELE_LINKS = [
  { href: "/modeles/lettre-demission-suisse", title: "Lettre de démission" },
  { href: "/modeles/opposition-poursuite-suisse", title: "Opposition poursuite" },
  { href: "/modeles/commandement-de-payer-suisse", title: "Commandement de payer" },
  { href: "/modeles/mise-en-demeure-suisse", title: "Mise en demeure" },
  { href: "/modeles/relance-facture-impayee-suisse", title: "Relance facture impayée" },
  { href: "/modeles/lettre-contestation-facture-suisse", title: "Contestation facture" },
]

export function MaillageSeo() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Pages utiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3">Résiliations</h3>
          <ul className="space-y-2">
            {RESILIATION_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand hover:underline text-sm">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3">Modèles de lettres</h3>
          <ul className="space-y-2">
            {MODELE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand hover:underline text-sm">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3">Envoi recommandé</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/envoyer-lettre-en-ligne-suisse" className="text-brand hover:underline text-sm">
                Envoyer une lettre recommandée en ligne
              </Link>
            </li>
            <li>
              <Link href="/preuve-legale-lettre-recommandee-suisse" className="text-brand hover:underline text-sm">
                Preuve, délais & lettre recommandée
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
