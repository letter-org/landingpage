"use client"

import { User, Briefcase, Scale, Building2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { B2BLeadDialog } from "./b2b-lead-dialog"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BackgroundMountains } from "./background-mountains"

const trustLogos = [
  { src: "/logos/ahgv.png", alt: "AHGV", width: 330, height: 83, sizeClass: "h-6 sm:h-8", extraClass: "saturate-200 brightness-90" },
  { src: "/logos/svr-vins.png", alt: "SVR Vins", width: 397, height: 127, sizeClass: "h-10 sm:h-12", extraClass: "" },
  { src: "/logos/leanza.png", alt: "Leanza MGK Sàrl", width: 776, height: 181, sizeClass: "h-9 sm:h-11", extraClass: "" },
]

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

          {/* Trust logos band */}
          <div 
            className={`mt-16 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-center text-xs font-medium text-muted-foreground/50 uppercase tracking-[0.2em] mb-8">
              Ils nous font confiance
            </p>
            
            {/* Marquee — scrolling logos in color, no frames */}
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling track — 6x duplicate for seamless loop */}
              <div className="flex animate-marquee items-end w-max">
                {Array.from({ length: 6 }).flatMap((_, setIdx) =>
                  trustLogos.map((logo, i) => (
                    <div
                      key={`${setIdx}-${i}`}
                      className="flex-shrink-0 flex items-end justify-center h-14 sm:h-16 mx-10 sm:mx-16"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={`object-contain w-auto ${logo.sizeClass} ${logo.extraClass}`}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
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
