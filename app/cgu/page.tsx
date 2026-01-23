import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation - NextLetter",
  description: "Conditions d'utilisation de NextLetter, plateforme d'envoi de lettres recommandées en ligne.",
}

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">Conditions d'utilisation</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objet</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter est une plateforme permettant d'envoyer des lettres recommandées en ligne.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NextLetter agit en tant qu'intermédiaire technique. L'impression et l'acheminement sont réalisés par des partenaires spécialisés (ex. Pingen).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Utilisation du service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'utilisation de NextLetter implique l'acceptation des présentes conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'utilisateur est responsable du contenu des lettres envoyées et des informations fournies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Fonctionnement du service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter permet notamment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>La rédaction ou l'import de documents</li>
              <li>L'envoi de lettres recommandées</li>
              <li>Le suivi et l'archivage des envois</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NextLetter met tout en œuvre pour assurer un service fiable, mais ne peut être tenue responsable :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Des délais ou incidents liés à l'acheminement postal</li>
              <li>Des erreurs de saisie de l'utilisateur</li>
              <li>Du contenu des lettres envoyées</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              La responsabilité de NextLetter est limitée au montant payé pour l'envoi concerné.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le traitement des données est détaillé dans la <a href="/politique-confidentialite" className="text-brand hover:underline">Politique de confidentialité</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes conditions sont soumises au droit suisse.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For juridique : Lausanne.
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

