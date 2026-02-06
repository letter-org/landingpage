import Link from "next/link"
import { FileText, Send, Search, ArrowRight } from "lucide-react"

/**
 * SEO Content Block for Homepage
 * This content is server-rendered and visible in HTML for Google crawlers.
 * It reinforces homepage signals and provides internal linking to /modeles pages.
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

  const steps = [
    {
      icon: FileText,
      title: "1. Rédigez ou importez",
      description: "Choisissez un modèle prêt à l'emploi ou importez votre propre lettre."
    },
    {
      icon: Send,
      title: "2. Envoyez",
      description: "NextLetter s'occupe de l'impression et de l'envoi par courrier recommandé."
    },
    {
      icon: Search,
      title: "3. Suivez",
      description: "Consultez le statut de votre envoi et recevez la preuve de distribution."
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* SEO paragraph - visible text for crawlers */}
        <div className="mb-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NextLetter vous permet d'envoyer une <strong>lettre recommandée en ligne</strong> depuis la <strong>Suisse</strong>, 
            sans vous déplacer. Bénéficiez d'une <strong>preuve d'envoi</strong> officielle et d'un <strong>suivi</strong> en 
            temps réel de vos courriers, le tout en quelques clics.
          </p>
        </div>

        {/* Models section with internal links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
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

        {/* How it works - simple steps */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                  <step.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
