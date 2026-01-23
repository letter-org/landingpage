"use client"

import { Clock, Users, BarChart3, FileCheck, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { B2BLeadDialog } from "./b2b-lead-dialog"
import { Button } from "./ui/button"

const features = [
  {
    icon: Clock,
    title: "Gain de temps significatif",
    description: "Plus besoin d'imprimer, d'affranchir ou de se déplacer. Centralisez tous vos envois.",
  },
  {
    icon: FileCheck,
    title: "Réduction d'erreurs administratives",
    description: "Vérification automatique et formatage correct. Moins de risques, plus de sérénité.",
  },
  {
    icon: Users,
    title: "Gestion centralisée",
    description: "Multi-comptes, équipes et rôles. Parfait pour les communes, fiduciaires et PME.",
  },
  {
    icon: BarChart3,
    title: "Suivi et reporting",
    description: "Historique complet, statistiques et traçabilité de tous vos envois.",
  },
]

export function B2BPersonalization() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
        <div ref={ref} className="max-w-6xl mx-auto relative">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Solution pour les organisations
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pensé pour les communes, fiduciaires et PME établies. Gain de temps, réduction d'erreurs et centralisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`p-6 bg-card rounded-xl border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setDialogOpen(true)}
              variant="outline"
              size="lg"
              className="group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Demander une démo
            </Button>
          </div>
        </div>
      </section>

      <B2BLeadDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        segment="pme"
      />
    </>
  )
}

