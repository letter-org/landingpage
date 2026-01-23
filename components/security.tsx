"use client"

import { Shield, Lock, Database, FileCheck, CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect, useRef } from "react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Hebergement securise",
    description: "Infrastructure securisee en Europe, avec options Europe/Suisse.",
  },
  {
    icon: Lock,
    title: "Acces protege",
    description: "Acces controle, protections standards et surveillance.",
  },
  {
    icon: Database,
    title: "Archivage securise",
    description: "Vos envois et documents restent accessibles et proteges.",
  },
  {
    icon: FileCheck,
    title: "Tracabilite",
    description: "Historique des envois et statut de suivi en un coup d'œil.",
  },
]

const certifications = [
  { label: "Hebergement securise", delay: 0 },
  { label: "Acces controle", delay: 100 },
  { label: "Suivi & historique", delay: 200 },
]

// Floating particles for premium effect - static values to avoid hydration issues
const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: ((i * 3) % 4) + 2, // Deterministic size
  x: ((i * 7) % 100), // Deterministic x
  y: ((i * 13) % 100), // Deterministic y
  duration: ((i * 5) % 10) + 15, // Deterministic duration
  delay: ((i * 17) % 5), // Deterministic delay
}))

// Mouse follower glow component
function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = document.getElementById('security-section')
    sectionRef.current = section

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
      className="pointer-events-none absolute transition-opacity duration-500"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
        opacity: isHovering ? 1 : 0,
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  )
}

export function Security() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="security-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
      {/* Interactive mouse glow effect */}
      <MouseGlow />
      
      {/* Swiss Alps SVG silhouette background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.15]"
          viewBox="0 0 1440 400" 
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Background mountains layer */}
          <path 
            d="M0,400 L0,350 L100,280 L200,320 L300,250 L400,290 L500,200 L600,260 L700,180 L800,240 L900,160 L1000,220 L1100,140 L1200,200 L1300,120 L1400,180 L1440,150 L1440,400 Z" 
            fill="url(#mountainGradient)"
            opacity="0.5"
          />
          {/* Main mountain range - Matterhorn style peak */}
          <path 
            d="M0,400 L0,320 L150,260 L250,300 L350,220 L450,270 L550,150 L650,200 L720,80 L790,200 L850,140 L950,210 L1050,120 L1150,180 L1250,100 L1350,160 L1440,120 L1440,400 Z" 
            fill="url(#mountainGradient)"
          />
          {/* Snow caps */}
          <path 
            d="M720,80 L680,140 L720,130 L760,140 Z" 
            fill="url(#snowGradient)"
          />
          <path 
            d="M550,150 L520,190 L550,180 L580,190 Z" 
            fill="url(#snowGradient)"
          />
          <path 
            d="M1050,120 L1020,160 L1050,150 L1080,160 Z" 
            fill="url(#snowGradient)"
          />
          <path 
            d="M1250,100 L1220,140 L1250,130 L1280,140 Z" 
            fill="url(#snowGradient)"
          />
        </svg>
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30 animate-float"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orb effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      
      {/* Shimmer line effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold">Securite & Conformite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vos donnees sont en securite</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              NextLetter protege vos informations avec des mesures de securite solides. Infrastructure securisee en Europe, avec options Europe/Suisse. Acces controle et protections standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default ${
                    leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: leftVisible ? `${cert.delay + 300}ms` : '0ms' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Security features grid */}
          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredCard === index
              return (
                <div
                  key={index}
                  className={`relative p-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 group cursor-default overflow-hidden ${
                    rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } ${isHovered ? 'bg-white/10 border-white/30 -translate-y-2 shadow-2xl shadow-blue-500/10' : ''}`}
                  style={{ transitionDelay: rightVisible ? `${index * 100}ms` : '0ms' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card hover glow effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Animated border glow on hover */}
                  <div 
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, transparent 50%, rgba(6,182,212,0.3) 100%)',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                    }}
                  />
                  
                  {/* Shimmer effect on hover */}
                  <div 
                    className={`absolute inset-0 -translate-x-full transition-transform duration-1000 ${
                      isHovered ? 'translate-x-full' : ''
                    }`}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isHovered ? 'bg-blue-500/30 scale-110 rotate-3' : ''
                    }`}>
                      <Icon className={`w-6 h-6 text-blue-400 transition-all duration-300 ${
                        isHovered ? 'text-blue-300 scale-110' : ''
                      }`} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      isHovered ? 'text-blue-200' : ''
                    }`}>{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  
                  {/* Corner accent */}
                  <div 
                    className={`absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Animated grid lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  )
}
