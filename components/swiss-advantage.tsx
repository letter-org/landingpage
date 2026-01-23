"use client"

import { Shield, CheckCircle2, FileText, Zap, Clock, Building2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const advantages = [
  {
    icon: Clock,
    title: "Gain de temps",
    description:
      "Plus besoin d'imprimer, d'affranchir ou de vous déplacer.",
  },
  {
    icon: CheckCircle2,
    title: "Réduction d'erreurs",
    description:
      "Vérification automatique et formatage correct.",
  },
  {
    icon: Shield,
    title: "Traçabilité complète",
    description:
      "Preuves horodatées, suivi en temps réel et archivage sécurisé.",
  },
  {
    icon: Building2,
    title: "Centralisation",
    description:
      "Gérez tous vos envois depuis une interface unique.",
  },
]

export function SwissAdvantage() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Moins d'efforts, moins d'erreurs, plus de contrôle
          </h2>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className={`relative p-6 bg-card rounded-2xl border border-border transition-all duration-500 hover:shadow-xl hover:border-brand/30 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

