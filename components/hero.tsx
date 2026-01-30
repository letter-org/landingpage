"use client"

import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect, useRef } from "react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { BackgroundMountains } from "./background-mountains"

// Mouse follower glow for hero
function HeroMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = document.getElementById('hero-section')

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
        left: position.x - 300,
        top: position.y - 300,
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
        opacity: isHovering ? 1 : 0,
      }}
    />
  )
}

// Animated particles - static values to avoid hydration issues
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: ((i * 7) % 4) + 1, // Deterministic size
  x: ((i * 13) % 100), // Deterministic x
  y: ((i * 17) % 100), // Deterministic y
  duration: ((i * 11) % 20) + 10, // Deterministic duration
  delay: ((i * 3) % 5), // Deterministic delay
}))

export function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <section id="hero-section" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Background mountains - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <BackgroundMountains />
      </div>
      
      {/* Interactive mouse glow */}
      <HeroMouseGlow />
      
      {/* Animated grid background - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20 animate-float"
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

      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/5 rounded-full blur-3xl" />
      </div>

      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer" />

      <div ref={heroRef} className="relative max-w-7xl mx-auto z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with premium animation - simplified */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 shadow-lg transition-all duration-700 hover:shadow-xl hover:border-brand/30 cursor-default ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-foreground">Conforme LPD & RGPD</span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="text-sm font-medium text-foreground">Infrastructure sécurisée</span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="text-sm font-medium text-foreground">Disponible 24/7</span>
          </div>

          {/* Main headline - simple and clear */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Envoyez vos lettres recommandées,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                sans vous déplacer
              </span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse" aria-hidden="true">
                sans vous déplacer
              </span>
            </span>
          </h1>

          {/* Subtitle - human and clear */}
          <p 
            className={`text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Depuis votre bureau, ou votre canapé. L'envoi d'une lettre n'a jamais été aussi simple.
          </p>

          {/* CTAs with premium hover effects - single clear CTA */}
          <div 
            className={`flex flex-col items-center justify-center gap-3 mb-6 transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href={addUtmParams(appUrls.base, 'landing', 'cta', 'nextletter')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-4 bg-foreground text-background rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold overflow-hidden"
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {/* Button shimmer effect */}
              <div 
                className={`absolute inset-0 -translate-x-full transition-transform duration-700 ${
                  hoveredButton === 'primary' ? 'translate-x-full' : ''
                }`}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
              />
              <span className="relative">Envoyer une lettre maintenant</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-sm text-muted-foreground">En 2 minutes • Sans installation • Suivi inclus</p>
          </div>

          {/* Trust indicators - simplified and professional */}
          <div 
            ref={trustRef}
            className={`flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
              trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Déjà utilisé par des particuliers et des entreprises' },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-secondary transition-all duration-300 cursor-default group"
              >
                <div className={`p-1 rounded-full ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero mockup with premium effects */}
        <div 
          ref={mockupRef}
          className={`mt-16 relative max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            mockupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Floating badges around mockup */}
          <div className="absolute -top-4 -left-4 lg:-left-16 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl border border-green-500/20 flex items-center justify-center animate-float backdrop-blur-sm z-10" style={{ animationDelay: '0s' }}>
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-1" />
              <span className="text-xs text-green-600 font-medium">Securise</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 lg:-right-16 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center animate-float backdrop-blur-sm z-10" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-1" />
              <span className="text-xs text-blue-600 font-medium">Rapide</span>
            </div>
          </div>

          {/* Main mockup container */}
          <div className="relative group">
            {/* Glow effect behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-500 group-hover:shadow-3xl group-hover:border-brand/20">
              {/* Browser chrome */}
              <div className="bg-secondary/80 backdrop-blur px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer hover:scale-110" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer hover:scale-110" />
                  <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer hover:scale-110" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-1 bg-background/50 rounded-lg border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-sm text-muted-foreground">app.nextletter.ch</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-0 bg-gradient-to-br from-blue-50/30 to-background relative overflow-hidden">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                
                <div className="text-center">
                  <img
                    src="/images/image.png"
                    alt="Interface de redaction NextLetter"
                    className="w-full h-auto"
                  />
                  <p className="text-muted-foreground py-4 bg-card/80 backdrop-blur-sm">Interface de redaction intuitive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
