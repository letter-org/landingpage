import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

/**
 * SEO Content Block for Homepage
 * Contains: SEO paragraph + Models links
 * Placed after HowItWorks section in page.tsx
 */
export function SeoHomepageContent() {
  // Top 6 most popular letter models
  const popularModels = [
    { title: "Résiliation bail locataire", href: "/modeles/lettre-resiliation-bail-locataire-suisse" },
    { title: "Résiliation assurance maladie", href: "/modeles/lettre-resiliation-assurance-maladie-suisse" },
    { title: "Résiliation assurance auto", href: "/modeles/lettre-resiliation-assurance-auto" },
    { title: "Résiliation abonnement mobile", href: "/modeles/lettre-resiliation-abonnement-mobile" },
    { title: "Lettre de démission", href: "/modeles/lettre-demission-suisse" },
    { title: "Lettre de motivation", href: "/modeles/lettre-motivation-suisse" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* SEO paragraph - visible text for crawlers */}
        <div className="mb-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NextLetter vous permet d'envoyer des <strong>lettres recommandées en ligne</strong>, sans vous déplacer. 
            Bénéficiez d'une <strong>preuve d'envoi</strong> officielle et d'un <strong>suivi</strong> en temps réel 
            de vos courriers, le tout en quelques clics.
          </p>
        </div>

        {/* Models section with internal links */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Modèles de lettres les plus utilisés
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularModels.map((model) => (
              <li key={model.href}>
                <Link
                  href={model.href}
                  className="group flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <FileText className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="flex-1 font-medium text-foreground group-hover:text-brand transition-colors">
                    {model.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
