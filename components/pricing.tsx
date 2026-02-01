"use client"

import { Check, CreditCard, Smartphone, Sparkles, Zap, Crown, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"
import { appUrls, addUtmParams } from "@/lib/app-urls"

const plans = [
  {
    credits: 5,
    price: "5",
    popular: false,
    icon: Zap,
    label: "Starter",
  },
  {
    credits: 10,
    price: "10",
    popular: false,
    icon: Sparkles,
    label: "Basic",
  },
  {
    credits: 20,
    price: "20",
    popular: true,
    icon: Crown,
    label: "Popular",
  },
  {
    credits: 50,
    price: "50",
    popular: false,
    icon: Star,
    label: "Ultimate",
  },
]

const features = [
  "Lettres simples & recommandees",
  "Suivi en temps reel",
  "Aperçu PDF et Archivage",
  "Preuve de réception",
]

// Mouse glow component
function PricingMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = document.getElementById('pricing-section')

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
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        opacity: isHovering ? 1 : 0,
      }}
    />
  )
}

export function Pricing() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="pricing-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Mouse glow */}
      <PricingMouseGlow />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          suppressHydrationWarning
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-sm text-brand font-semibold">Tarification transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tarification simple</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Achetez des credits selon vos besoins. Pas d'abonnement, pas de frais caches.
          </p>
        </div>

        {/* Pricing grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredCard === index
            return (
              <div
                key={index}
                className={`relative p-8 bg-card rounded-2xl border-2 transition-all duration-500 cursor-default overflow-hidden ${
                  isHovered ? 'border-brand/50 shadow-xl -translate-y-2' : 'border-border'
                } ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-cyan-500/5 transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
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

                <div className="relative z-10">
                  {/* Plan label with icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isHovered ? 'bg-brand/20' : 'bg-secondary'
                    }`}>
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${
                        isHovered ? 'text-brand' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{plan.label}</span>
                  </div>

                  <div className="text-center mb-6">
                    <div className={`text-5xl font-bold mb-2 transition-all duration-300 ${
                      isHovered ? 'scale-110 text-brand' : 'text-foreground'
                    }`}>{plan.credits}</div>
                    <div className="text-sm text-muted-foreground mb-4">credits</div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">CHF</span>
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    </div>
                  </div>

                  <a
                    href={addUtmParams(appUrls.base, 'landing', 'pricing', 'nextletter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-full py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden flex items-center justify-center ${
                      plan.popular
                        ? "bg-gradient-to-r from-brand to-cyan-500 text-white hover:shadow-lg hover:shadow-brand/30"
                        : `${isHovered ? 'bg-foreground text-background' : 'bg-secondary text-foreground hover:bg-secondary/80'}`
                    }`}
                  >
                    <span className="relative z-10">Acheter</span>
                  </a>
                </div>

                {/* Corner accent */}
                <div 
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-brand/20 to-cyan-500/20 rounded-full blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Features included */}
        <div 
          ref={featuresRef}
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-card rounded-2xl border border-border p-8 overflow-hidden group hover:shadow-xl hover:border-brand/20 transition-all duration-500">
            {/* Animated border drawing effect - more subtle and flowing */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-2xl">
              <defs>
                <linearGradient id="pricingBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="calc(100% - 4px)"
                height="calc(100% - 4px)"
                fill="none"
                stroke="url(#pricingBorderGradient)"
                strokeWidth="1.5"
                strokeDasharray="600"
                strokeDashoffset="600"
                rx="14"
                className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 animate-draw-border"
                style={{
                  strokeLinecap: 'round',
                }}
              />
            </svg>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.02] via-transparent to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center relative z-10">Tous les packs incluent :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-500 hover:bg-secondary/50 ${
                    featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: featuresVisible ? `${index * 75}ms` : '0ms' }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Moyens de paiement acceptes</p>
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: CreditCard, label: 'Stripe', color: 'text-brand', hoverBg: 'hover:bg-brand/5' },
              { icon: Smartphone, label: 'Twint', color: 'text-purple-600', hoverBg: 'hover:bg-purple-500/5' },
            ].map((method, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl transition-all duration-300 cursor-pointer hover:border-brand/30 hover:shadow-lg hover:-translate-y-0.5 ${method.hoverBg}`}
              >
                <method.icon className={`w-5 h-5 ${method.color}`} />
                <span className="text-sm font-semibold text-foreground">{method.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
