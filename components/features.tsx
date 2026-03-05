"use client"

import { FileText, Zap, Clock, Archive, BarChart3, Sparkles, Ban, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect, useRef } from "react"
import { BackgroundMountains } from "./background-mountains"
import Link from "next/link"
import { ALL_LETTER_MODELS, LETTER_CATEGORIES } from "@/lib/letter-models"

const features = [
  {
    icon: FileText,
    title: "Modèles de lettres et rédaction assistée par IA",
    description: "Choisissez votre modèle de lettres et notre IA vous aide à rédiger des courriers professionnels en quelques secondes.",
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

// Liste complète de tous les modèles (synchronisée avec lib/letter-models.ts)
const categoryLabels: Record<string, string> = Object.fromEntries(
  LETTER_CATEGORIES.map((c) => [c.id, c.title])
)

const allLetterModels = ALL_LETTER_MODELS.map((m) => ({
  title: m.title,
  path: m.path,
  category: categoryLabels[m.category] || m.category,
}))

// Liste des modèles de lettres disponibles (sélection réduite pour meilleure lisibilité)
const letterModels = [
  { title: "Résiliation bail locataire", path: "/modeles/lettre-resiliation-bail-locataire-suisse", category: "Logement" },
  { title: "Résiliation assurance maladie", path: "/modeles/lettre-resiliation-assurance-maladie-suisse", category: "Assurance" },
  { title: "Résiliation abonnement mobile", path: "/modeles/lettre-resiliation-abonnement-mobile", category: "Télécom" },
  { title: "Lettre de motivation", path: "/modeles/lettre-motivation-suisse", category: "Travail" },
]

// Fonction pour obtenir un modèle aléatoire (excluant ceux déjà affichés)
function getRandomModel() {
  const displayedPaths = letterModels.map(m => m.path)
  const availableModels = allLetterModels.filter(m => !displayedPaths.includes(m.path))
  if (availableModels.length === 0) return allLetterModels[0]
  return availableModels[Math.floor(Math.random() * availableModels.length)]
}

// Composant pour les bulles de modèles
function ModelBubbles({ isVisible, cardRef, onMouseEnter, onMouseLeave }: { 
  isVisible: boolean
  cardRef: React.RefObject<HTMLDivElement>
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([])
  const [randomModel, setRandomModel] = useState(getRandomModel())
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const bubblesRef = useRef<HTMLDivElement>(null)

  // Détecter prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Générer un nouveau modèle aléatoire quand les bulles deviennent visibles
  useEffect(() => {
    if (isVisible) {
      setRandomModel(getRandomModel())
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || !cardRef.current || !bubblesRef.current) return

    const updatePositions = () => {
      const card = cardRef.current
      if (!card) return

      const cardRect = card.getBoundingClientRect()
      const bubbleCount = letterModels.length
      
      // Position relative à la fenêtre (pour fixed positioning)
      const centerX = cardRect.left + cardRect.width / 2
      const centerY = cardRect.top + cardRect.height / 2
      
      // Calculer un rayon adaptatif basé sur la position de la carte
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const margin = window.innerWidth < 768 ? 15 : 20 // Marge adaptative
      const bubbleWidth = window.innerWidth < 768 ? 180 : 220 // Largeur adaptative selon l'écran
      
      // Rayon de base adaptatif
      let baseRadius = window.innerWidth < 768 ? 200 : 280
      
      // Ajuster le rayon si la carte est trop près des bords
      const distanceToLeft = centerX
      const distanceToRight = viewportWidth - centerX
      const distanceToTop = centerY
      const distanceToBottom = viewportHeight - centerY
      
      // Réduire le rayon si nécessaire pour éviter les débordements
      const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom)
      if (minDistance < baseRadius + bubbleWidth / 2 + margin) {
        baseRadius = Math.max(150, minDistance - bubbleWidth / 2 - margin)
      }
      
      // Positionner les bulles en arc autour de la carte
      // Privilégier le côté droit, bas et haut (éviter le côté gauche)
      // Arc de -20° à 200° (220° d'arc) pour éviter le côté gauche
      const startAngle = -Math.PI / 9 // -20°
      const endAngle = (10 * Math.PI) / 9 // 200°
      const angleRange = endAngle - startAngle
      
      const bubbleHalfWidth = bubbleWidth / 2
      const bubbleHeight = window.innerWidth < 768 ? 70 : 80 // Hauteur adaptative selon l'écran
      const bubbleHalfHeight = bubbleHeight / 2
      
      const newPositions = letterModels.map((_, index) => {
        // Répartir les bulles sur l'arc
        const normalizedIndex = bubbleCount > 1 ? index / (bubbleCount - 1) : 0
        let angle = startAngle + normalizedIndex * angleRange
        
        // Position initiale sur le cercle
        let x = centerX + Math.cos(angle) * baseRadius
        let y = centerY + Math.sin(angle) * baseRadius
        
        // Ajuster si la bulle sort de l'écran (avec marge de sécurité)
        const safeMargin = margin + bubbleHalfWidth
        
        // Si trop à gauche, déplacer vers la droite
        if (x < safeMargin) {
          x = safeMargin
          // Recalculer y pour rester à une distance raisonnable de la carte
          const maxY = centerY + baseRadius
          const minY = centerY - baseRadius
          y = Math.max(safeMargin, Math.min(viewportHeight - safeMargin, y))
        }
        
        // Si trop à droite
        if (x > viewportWidth - safeMargin) {
          x = viewportWidth - safeMargin
        }
        
        // Si trop haut
        if (y < margin + bubbleHalfHeight) {
          y = margin + bubbleHalfHeight
        }
        
        // Si trop bas
        if (y > viewportHeight - margin - bubbleHalfHeight) {
          y = viewportHeight - margin - bubbleHalfHeight
        }
        
        return { x, y }
      })

      // Position pour la bulle "Voir tous les modèles" (centrée horizontalement au-dessus de la carte)
      const spacing = window.innerWidth < 768 ? 15 : 20 // Espacement adaptatif
      const moreModelsPos = {
        x: centerX, // Centré horizontalement sur la carte
        y: Math.max(margin + bubbleHeight / 2 + 10, cardRect.top - spacing - bubbleHeight / 2) // Au-dessus de la carte avec espacement
      }
      
      // Ajuster si la bulle sort de l'écran sur mobile
      if (window.innerWidth < 768) {
        const bubbleWidth = 200
        const safeMargin = margin + bubbleWidth / 2
        if (moreModelsPos.x < safeMargin) {
          moreModelsPos.x = safeMargin
        } else if (moreModelsPos.x > viewportWidth - safeMargin) {
          moreModelsPos.x = viewportWidth - safeMargin
        }
      }

      setPositions([...newPositions, moreModelsPos])
    }

    // Délai pour laisser le temps à la carte de se positionner
    const timeoutId = setTimeout(updatePositions, 100)
    window.addEventListener('resize', updatePositions)
    window.addEventListener('scroll', updatePositions, true)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updatePositions)
      window.removeEventListener('scroll', updatePositions, true)
    }
  }, [isVisible, cardRef])

  if (!isVisible) return null

  return (
    <div 
      ref={bubblesRef}
      className="fixed inset-0 z-[60] transition-opacity duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ pointerEvents: 'none', opacity: isVisible ? 1 : 0 }}
    >
      {letterModels.map((model, index) => {
        const pos = positions[index]
        if (!pos) return null

        return (
          <Link
            key={model.path}
            href={model.path}
            className="absolute pointer-events-auto cursor-pointer z-[70]"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: 'translate(-50%, -50%)',
              animation: isVisible && !prefersReducedMotion ? `fadeInScale 0.5s ease-out ${index * 80}ms both` : 'none',
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="group/bubble relative bg-background/30 backdrop-blur-[2px] border border-violet-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg hover:bg-background/50 hover:shadow-violet-500/20 hover:border-violet-500/60 transition-all duration-300 hover:scale-110 active:scale-105 min-w-[160px] max-w-[180px] sm:min-w-[200px] sm:max-w-[220px] cursor-pointer select-none">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-violet-500/30 rounded-xl blur-md opacity-0 group-hover/bubble:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs text-violet-600 font-semibold mb-0.5 sm:mb-1 uppercase tracking-wide drop-shadow-sm">{model.category}</div>
                <div className="text-xs sm:text-sm font-bold text-foreground leading-tight drop-shadow-sm">{model.title}</div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/bubble:translate-x-full transition-transform duration-1000" />
              
              {/* Indicateur de clic - icône flèche */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center opacity-70 group-hover/bubble:opacity-100 transition-all duration-300 group-hover/bubble:scale-110">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        )
      })}
      
      {/* Bulle spéciale "Voir tous les modèles" */}
      {positions[letterModels.length] && randomModel && (
        <Link
          href={randomModel.path}
          className="absolute pointer-events-auto cursor-pointer z-[70]"
          style={{
            left: `${positions[letterModels.length].x}px`,
            top: `${positions[letterModels.length].y}px`,
            transform: 'translate(-50%, -50%)',
            animation: isVisible && !prefersReducedMotion ? `fadeInScale 0.5s ease-out ${letterModels.length * 80 + 100}ms both` : 'none',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="group/bubble relative bg-violet-500/10 backdrop-blur-[1px] border border-violet-500/30 rounded-xl px-3 py-2 sm:px-5 sm:py-4 shadow-lg hover:bg-violet-500/20 hover:border-violet-500/60 transition-all duration-300 hover:scale-110 active:scale-105 min-w-[160px] max-w-[180px] sm:min-w-[180px] sm:max-w-[200px] cursor-pointer select-none">
            {/* Glow effect plus subtil */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 rounded-xl blur-md opacity-0 group-hover/bubble:opacity-50 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center gap-2 sm:gap-3">
              <div className="flex-1">
                <div className="text-[10px] sm:text-xs text-violet-600/90 font-bold mb-0.5 sm:mb-1 uppercase tracking-wide drop-shadow-sm">
                  Plus de modèles
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground leading-tight drop-shadow-sm">
                  {randomModel.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600/80 flex-shrink-0 group-hover/bubble:translate-x-1 transition-transform duration-300" />
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/bubble:translate-x-full transition-transform duration-1000" />
          </div>
        </Link>
      )}
    </div>
  )
}

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
  const [showBubbles, setShowBubbles] = useState(false)
  const modelCardRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Gérer l'affichage des bulles avec délai
  const handleCardMouseEnter = (index: number) => {
    if (index === 0) {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }
      setShowBubbles(true)
    }
    setHoveredCard(index)
  }

  const handleCardMouseLeave = (index: number) => {
    if (index === 0) {
      // Délai avant de masquer les bulles
      hideTimeoutRef.current = setTimeout(() => {
        setShowBubbles(false)
      }, 300) // 300ms de délai
    }
    setHoveredCard(null)
  }

  const handleBubblesMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    setShowBubbles(true)
  }

  const handleBubblesMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowBubbles(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="features-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-x-hidden">
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
          suppressHydrationWarning
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-sm text-brand font-semibold">Fonctionnalites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Fonctionnalités</h2>
        </div>

        {/* Bulles de modèles (affichées au survol de la première carte) - positionnées par rapport à la section */}
        {showBubbles && (
          <ModelBubbles 
            isVisible={showBubbles} 
            cardRef={modelCardRef}
            onMouseEnter={handleBubblesMouseEnter}
            onMouseLeave={handleBubblesMouseLeave}
          />
        )}

        {/* Features grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative overflow-visible">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredCard === index
            const isModelCard = index === 0
            return (
              <div
                key={index}
                ref={isModelCard ? modelCardRef : undefined}
                className={`group relative p-6 bg-card border border-border rounded-2xl transition-all duration-500 ${
                  isModelCard ? 'cursor-pointer' : 'cursor-default'
                } overflow-visible ${
                  gridVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${isHovered ? 'border-brand/40 shadow-2xl -translate-y-2' : 'hover:shadow-lg'} ${
                  isModelCard && isHovered ? 'z-50' : ''
                }`}
                style={{ 
                  transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
                }}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
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
                  suppressHydrationWarning
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
