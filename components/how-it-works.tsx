"use client"

import { Edit3, Send, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "1",
    icon: Edit3,
    title: "Rédigez ou importez",
    description:
      "Créez votre courrier avec notre éditeur intuitif ou importez vos documents PDF.",
  },
  {
    number: "2",
    icon: Send,
    title: "Envoyez",
    description:
      "NextLetter gère l'impression et l'envoi de vos courriers recommandés.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Suivez",
    description:
      "Consultez le statut en temps réel et recevez votre preuve de distribution.",
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div 
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          suppressHydrationWarning
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Comment ça marche</h2>
        </div>

        {/* Steps - clean and minimal */}
        <div className="relative">
          {/* Connection line - subtle */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center group">
                    {/* Step circle with number */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 bg-card border-2 border-blue-500/30 rounded-full flex items-center justify-center shadow-sm group-hover:border-blue-500/60 group-hover:shadow-md transition-all duration-300">
                        <Icon className="w-7 h-7 text-blue-500" />
                      </div>
                      {/* Number badge - small and elegant */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-xs shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SEO text block - notice style with whaou effect */}
        <div 
          className={`mt-14 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
            <div className="relative z-10 space-y-2.5">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                En Suisse, les lettres recommandées sont souvent nécessaires pour les démarches administratives : résiliations, courriers officiels, notifications légales. Avec NextLetter, vous envoyez vos lettres recommandées en ligne, sans vous rendre au guichet postal.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                Vous rédigez ou importez votre courrier. Nous l'imprimons dans des imprimeries professionnelles et le remettons aux services postaux pour l'acheminement. Le suivi est disponible en temps réel et vous recevez une preuve de distribution. Vos données sont hébergées en Europe/Suisse, conformes LPD et RGPD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
