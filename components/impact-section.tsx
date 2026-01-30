"use client"

import { Leaf, Truck, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

const benefits = [
  {
    title: "Moins de déplacements",
    description: "Fini les allers-retours à la poste. Envoyez vos lettres depuis votre bureau ou votre domicile.",
    gradient: "from-green-500 to-emerald-500",
    icon: Truck,
  },
  {
    title: "Moins d'impression maison",
    description: "Plus besoin d'imprimer vos documents. Rédigez, envoyez et archivez tout en ligne.",
    gradient: "from-blue-500 to-cyan-500",
    icon: Leaf,
  },
  {
    title: "Process plus simple",
    description: "Vos courriers sont numériques de bout en bout. Moins de papier, moins de déchets.",
    gradient: "from-teal-500 to-green-500",
    icon: Sparkles,
  },
]

// Floating leaves particles - static values to avoid hydration issues
const leaves = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: ((i * 3) % 12) + 8, // Deterministic size
  x: ((i * 7) % 100), // Deterministic x
  y: ((i * 11) % 100), // Deterministic y
  duration: ((i * 13) % 15) + 10, // Deterministic duration
  delay: ((i * 17) % 5), // Deterministic delay
}))

// Mouse glow component
function ImpactMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = document.getElementById('impact-section')

    const handleMouseMove = (e: MouseEvent) => {
      if (section) {
        const rect = section.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseenter', handleMouseEnter)
      section.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseenter', handleMouseEnter)
        section.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute transition-all duration-300 ease-out"
      style={{
        left: position.x - 250,
        top: position.y - 250,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)',
        opacity: isHovering ? 1 : 0,
      }}
    />
  )
}

export function ImpactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  return (
    <section id="impact-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50/80 via-background to-blue-50/80 relative overflow-hidden">
      {/* Mouse glow */}
      <ImpactMouseGlow />

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-green-400/20 animate-float"
            style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              animationDuration: `${leaf.duration}s`,
              animationDelay: `${leaf.delay}s`,
            }}
          >
            <Leaf style={{ width: leaf.size, height: leaf.size }} />
          </div>
        ))}
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-4 backdrop-blur-sm">
            <Leaf className="w-4 h-4 text-green-700" />
            <span className="text-sm text-green-700 font-semibold">RSE - Impact environnemental</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Moins de trajets, moins d'impression inutile</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Envoyer en ligne évite des allers-retours à la poste et réduit l'impression à domicile (papier, encre, énergie).
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Exemple : 2 allers-retours évités par mois = moins de kilomètres en voiture, moins de temps perdu.
          </p>
        </div>


        {/* Benefits section */}
        <div ref={benefitsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHovered = hoveredBenefit === index
            return (
              <div 
                key={index} 
                className={`relative bg-card rounded-2xl p-6 border border-border overflow-hidden cursor-default transition-all duration-500 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isHovered ? 'shadow-xl -translate-y-1 border-green-300/50' : 'shadow-sm'}`}
                style={{ transitionDelay: benefitsVisible ? `${index * 100}ms` : '0ms' }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${benefit.gradient} transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-1/2'
                }`} />
                
                {/* Background gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-500 ${
                    isHovered ? 'opacity-[0.03]' : 'opacity-0'
                  }`}
                />

                {/* Shimmer effect */}
                <div 
                  className={`absolute inset-0 -translate-x-full transition-transform duration-1000 ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${benefit.gradient} transition-all duration-300 ${
                      isHovered ? 'scale-110 shadow-lg' : ''
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>

                {/* Corner glow */}
                <div 
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-full blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-30' : 'opacity-0'
                  }`}
                />

                {/* Bottom accent */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.gradient} transition-all duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
