"use client"

import { FileText, Zap, Clock, Archive, BarChart3, Sparkles, Ban } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"
import { BackgroundMountains } from "./background-mountains"

const features = [
  {
    icon: FileText,
    title: "Redaction assistee par IA",
    description: "Notre IA vous aide a rediger des courriers professionnels en quelques secondes.",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "violet",
  },
  {
    icon: Zap,
    title: "Envoi instantane",
    description: "Envoyez vos lettres recommandées en ligne. Vos lettres sont imprimées et envoyées le jour même. Plus besoin d'aller à la poste.",
    gradient: "from-yellow-500 to-orange-500",
    glowColor: "yellow",
  },
  {
    icon: Clock,
    title: "Suivi en temps reel",
    description: "Suivez l'acheminement de vos courriers a chaque etape du processus.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    icon: Archive,
    title: "Archivage",
    description: "Retrouvez vos courriers et preuves d'envoi quand vous en avez besoin.",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "pink",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord",
    description: "Contacts, historique, export: une vue claire, même pour un volume important.",
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "indigo",
  },
  {
    icon: Ban,
    title: "Zéro déplacement",
    description: "Fini les trajets au guichet. Tout se fait en ligne, depuis votre bureau ou votre mobile.",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "green",
  },
]

// Mouse glow component
function FeaturesMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = document.getElementById('features-section')

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
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)',
        opacity: isHovering ? 1 : 0,
      }}
    />
  )
}

export function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="features-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background mountains */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <BackgroundMountains />
      </div>
      {/* Mouse glow effect */}
      <FeaturesMouseGlow />
      
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-sm text-brand font-semibold">Fonctionnalites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Fonctionnalités</h2>
        </div>

        {/* Features grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredCard === index
            return (
              <div
                key={index}
                className={`group relative p-6 bg-card border border-border rounded-2xl transition-all duration-500 cursor-default overflow-hidden ${
                  gridVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${isHovered ? 'border-brand/40 shadow-2xl -translate-y-2' : 'hover:shadow-lg'}`}
                style={{ 
                  transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient background on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} transition-opacity duration-500 ${
                    isHovered ? 'opacity-[0.03]' : 'opacity-0'
                  }`}
                />
                
                {/* Shimmer effect */}
                <div 
                  className={`absolute inset-0 -translate-x-full transition-transform duration-1000 ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                />

                {/* Corner glow */}
                <div 
                  className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-20' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-10'
                    }`} />
                    <Icon className={`w-7 h-7 relative z-10 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-brand'
                    }`} />
                  </div>

                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-foreground' : 'text-foreground'
                  }`}>{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                {/* Bottom accent line */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-500 ${
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
