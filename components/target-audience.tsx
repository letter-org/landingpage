"use client"

import { User, Briefcase, Scale, Building2 } from "lucide-react"
import { useState } from "react"
import { B2BLeadDialog } from "./b2b-lead-dialog"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BackgroundMountains } from "./background-mountains"

const audiences = [
  {
    icon: User,
    title: "Particuliers",
    description: "Résiliation de contrats, réclamations, démarches administratives simplifiées.",
    segment: null as const,
  },
  {
    icon: Briefcase,
    title: "PME & indépendants",
    description: "Factures, relances, correspondances commerciales et administratives.",
    segment: "pme" as const,
  },
  {
    icon: Scale,
    title: "Professions réglementées",
    description: "Avocats, notaires, fiduciaires : conformité et traçabilité garanties.",
    segment: "regulated" as const,
  },
  {
    icon: Building2,
    title: "Communes & institutions",
    description: "Communication officielle, notifications légales, gestion documentaire.",
    segment: "public" as const,
  },
]

export function TargetAudience() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedSegment, setSelectedSegment] = useState<"pme" | "regulated" | "public">("pme")
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const handleCardClick = (segment: "pme" | "regulated" | "public" | null) => {
    if (segment === null) {
      // Redirect particuliers to signup
      window.open(addUtmParams(appUrls.base, "landing", "target-audience", "nextletter"), "_blank")
      return
    }
    setSelectedSegment(segment)
    setDialogOpen(true)
  }

  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background mountains */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <BackgroundMountains />
        </div>
        <div ref={ref} className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pour qui ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pensé pour les particuliers et entreprises. Nous vous fournissons des solutions sur mesure.
            </p>
          </div>

          {/* Audience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              const isB2B = audience.segment !== null
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(audience.segment)}
                  className={`group relative p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    isB2B ? "cursor-pointer" : "cursor-pointer"
                  } ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                >
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-brand/0 group-hover:border-brand/30 transition-all duration-300 pointer-events-none" />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <B2BLeadDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        segment={selectedSegment}
      />
    </>
  )
}
