"use client"

import { Leaf, TrendingDown, TreeDeciduous, Droplets, Truck, Sparkles } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

const impactData = [
  { month: "Jan", co2: 2.9, lettres: 100000 },
  { month: "Fev", co2: 4.4, lettres: 150000 },
  { month: "Mar", co2: 5.8, lettres: 200000 },
  { month: "Avr", co2: 7.3, lettres: 250000 },
  { month: "Mai", co2: 8.7, lettres: 300000 },
  { month: "Juin", co2: 11.6, lettres: 400000 },
]

const stats = [
  {
    value: "29g",
    unit: "CO2/lettre",
    label: "Emissions evitees par envoi",
    description: "Chaque lettre numerique economise 29g de CO2",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    value: "10L",
    unit: "d'eau/feuille",
    label: "Eau economisee",
    description: "La production de papier consomme enormement d'eau",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    value: "8,333",
    unit: "feuilles/arbre",
    label: "Arbres preserves",
    description: "Un arbre produit environ 8,333 feuilles A4",
    icon: TreeDeciduous,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    value: "150km",
    unit: "par lettre",
    label: "Transport evite",
    description: "Distance moyenne parcourue par une lettre",
    icon: Truck,
    gradient: "from-orange-500 to-amber-500",
  },
]

const benefits = [
  {
    title: "Moins de trajets",
    description: "Fini les allers-retours a la poste. Envoyez vos lettres depuis votre bureau ou votre domicile.",
    stat: "",
    statLabel: "",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Moins d'impression a domicile",
    description: "Plus besoin d'imprimer vos documents. Redigez, envoyez et archivez tout en ligne.",
    stat: "",
    statLabel: "",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Process plus digital, moins de papier",
    description: "Vos courriers sont numeriques de bout en bout. Moins de papier, moins de dechets.",
    stat: "",
    statLabel: "",
    gradient: "from-teal-500 to-green-500",
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
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: chartRef, isVisible: chartVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Chaque lettre numerique compte</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Chaque recommande envoye en ligne evite un deplacement en voiture et limite l'impression a domicile (papier, encre, energie).
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Exemple : si vous evitez 2 allers-retours a la poste par mois (5 km), vous reduisez des kilometres inutiles — et donc des emissions — tout en gagnant du temps.
          </p>
        </div>

        {/* Stats grid */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isHovered = hoveredStat === index
            return (
              <div
                key={index}
                className={`relative p-6 bg-card rounded-2xl border border-border overflow-hidden cursor-default transition-all duration-500 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isHovered ? 'shadow-2xl -translate-y-2 border-green-300/50' : 'shadow-lg'}`}
                style={{ transitionDelay: statsVisible ? `${index * 100}ms` : '0ms' }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${stat.gradient} transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-1/2'
                }`} />
                
                {/* Background glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} transition-opacity duration-500 ${
                    isHovered ? 'opacity-5' : 'opacity-0'
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
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} transition-all duration-300 ${
                      isHovered ? 'scale-110 shadow-lg' : ''
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-3xl font-bold transition-colors duration-300 ${
                      isHovered ? 'text-green-600' : 'text-foreground'
                    }`}>{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>

                {/* Corner glow */}
                <div 
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-30' : 'opacity-0'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Benefits section */}
        <div ref={benefitsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
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
                {/* Background gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-500 ${
                    isHovered ? 'opacity-[0.03]' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>

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

        {/* Chart */}
        <div 
          ref={chartRef}
          className={`relative bg-card rounded-2xl shadow-lg border border-border p-8 overflow-hidden group hover:shadow-xl hover:border-green-300/30 transition-all duration-500 ${
            chartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.02] via-transparent to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Impact cumule : CO2 evite (en tonnes)</h3>
              </div>
              <div className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                Base sur 29g CO2/lettre
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value: number, name: string) => {
                    if (name === "co2") return [`${value} tonnes`, "CO2 evite"]
                    return [value.toLocaleString(), "Lettres numeriques"]
                  }}
                />
                <Bar dataKey="co2" fill="url(#greenGradient)" radius={[8, 8, 0, 0]} name="co2" />
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              *Estimation basee sur une entreprise envoyant 100,000 lettres par an. Sources : Ecotricity UK, WWF, ADEME.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
