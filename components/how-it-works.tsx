import { Edit3, Printer, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Edit3,
    title: "Rédigez ou importez votre lettre",
    description:
      "Créez votre courrier avec notre éditeur intuitif, utilisez l'IA pour vous assister, ou importez simplement vos documents PDF.",
  },
  {
    number: "02",
    icon: Printer,
    title: "NextLetter gère l'impression et l'envoi",
    description:
      "Notre plateforme transforme vos documents numériques en courriers physiques de haute qualité et assure une livraison fiable, via La Poste Suisse.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Suivi & preuve + historique",
    description:
      "Suivez chaque étape, consultez les preuves de dépôt et accédez à votre historique complet.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comment ça marche en 3 étapes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et rapide pour envoyer vos courriers officiels en toute simplicité.
          </p>
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
      </div>
    </section>
  )
}
