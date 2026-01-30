import { Edit3, Printer, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Edit3,
    title: "Rédigez ou importez vos lettres",
    description:
      "Créez votre courrier avec notre éditeur intuitif, utilisez l'IA pour vous assister, ou importez simplement vos documents PDF.",
  },
  {
    number: "02",
    icon: Printer,
    title: "Envoyez.",
    description:
      "NextLetter gère l'impression et l'envoi de vos courriers",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Suivez chaque étape",
    description:
      "Suivez chaque étape, consultez les preuves de dépôt et accédez à votre historique complet.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comment ça marche</h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-muted via-brand to-brand-muted" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-card border-4 border-brand rounded-full flex items-center justify-center shadow-lg z-10 relative">
                        <Icon className="w-9 h-9 text-brand" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SEO text block - notice style with whaou effect */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative bg-card/40 border border-border/30 rounded-lg p-4 sm:p-5 backdrop-blur-sm group overflow-hidden transition-all duration-500 hover:border-blue-400/40">
            {/* Animated border glow effect - whaou */}
            <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
              {/* Animated shimmer border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
              {/* Inner border glow */}
              <div className="absolute inset-[1px] rounded-lg border border-blue-400/20" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify mb-2.5">
                En Suisse, les lettres recommandées sont souvent nécessaires pour les démarches administratives : résiliations, courriers officiels, notifications légales. Avec NextLetter, vous envoyez vos lettres recommandées en ligne, sans vous rendre au guichet postal.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                Vous rédigez ou importez votre courrier. Nous l'imprimons dans des imprimeries professionnelles et le remettons à La Poste pour l'acheminement. Le suivi de l'expédition est disponible en temps réel. Vous recevez une preuve de distribution conforme aux exigences suisses. Vos données sont hébergées en Europe/Suisse, conformes LPD et RGPD, avec archivage sécurisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
