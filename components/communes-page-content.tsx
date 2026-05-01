"use client"

import { useScrollAnimation, useCountAnimation } from "@/hooks/use-scroll-animation"
import {
  Leaf,
  ArrowRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  TrendingDown,
  Printer,
  Factory,
  Recycle,
  Heart,
  Shield,
  Lock,
  Database,
  FileCheck,
  CheckCircle2,
  Building2,
  BarChart3,
  Award,
  Timer,
  TreePine,
} from "lucide-react"
import { useState } from "react"

/* ───────────────────────── DATA ───────────────────────── */

const constatItems = [
  { icon: Printer, text: "Une imprimante fabriquée à l'étranger (60–80 kg CO₂ à la production)", color: "text-red-500" },
  { icon: Recycle, text: "Des cartouches d'encre (~4–5 kg CO₂ chacune)", color: "text-orange-500" },
  { icon: FileText, text: "Du papier souvent importé", color: "text-amber-500" },
  { icon: MapPin, text: "Des déplacements vers la poste", color: "text-yellow-600" },
  { icon: Clock, text: "Du temps administratif à faible valeur ajoutée", color: "text-lime-600" },
]

const impactStats = [
  { label: "Heures administratives économisées", value: 1600, suffix: "h", icon: Timer, gradient: "from-blue-500 to-cyan-500" },
  { label: "Feuilles économisées", value: 18000, suffix: "", icon: FileText, gradient: "from-green-500 to-emerald-500" },
  { label: "Enveloppes économisées", value: 5000, suffix: "", icon: Mail, gradient: "from-teal-500 to-green-500" },
  { label: "Kilomètres évités", value: 2300, suffix: " km", icon: MapPin, gradient: "from-emerald-500 to-teal-500" },
  { label: "CO₂ évité", value: 450, suffix: " kg", icon: Leaf, gradient: "from-green-600 to-emerald-600" },
]

const localBenefits = [
  { icon: Printer, title: "Moins d'imprimantes individuelles", description: "Réduction du parc d'imprimantes communal et des coûts de maintenance associés." },
  { icon: Recycle, title: "Moins de gaspillage", description: "Fini les impressions ratées, les stocks d'enveloppes inutilisés, le papier qui jaunit." },
  { icon: BarChart3, title: "Optimisation des volumes", description: "L'impression centralisée permet des économies d'échelle et une qualité professionnelle." },
  { icon: Heart, title: "Soutien à l'économie locale", description: "Nos partenaires d'impression sont des entreprises suisses, ancrées dans le tissu régional." },
]

const securityFeatures = [
  { icon: Shield, title: "Hébergement Europe / Suisse", description: "Vos données sont hébergées sur des infrastructures conformes et sécurisées." },
  { icon: Lock, title: "Conforme RGPD & LPD", description: "Respect total des réglementations sur la protection des données." },
  { icon: FileCheck, title: "Traçabilité complète", description: "Chaque envoi est tracé, horodaté et archivé avec preuve de livraison." },
  { icon: Database, title: "Archivage sécurisé", description: "Vos courriers et documents restent accessibles dans un espace protégé." },
]

const publicPageStats = [
  { label: "CO₂ évités", value: "450 kg" },
  { label: "Kilomètres évités", value: "2'300 km" },
  { label: "Feuilles économisées", value: "18'000" },
]

/* ───────────────────────── ANIMATED COUNTER ───────────────────────── */

function AnimatedStat({ value, suffix, label, icon: Icon, gradient }: {
  value: number
  suffix: string
  label: string
  icon: typeof Timer
  gradient: string
}) {
  const { count, ref, isVisible } = useCountAnimation(value, 2500)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-500 cursor-default ${
        isHovered ? "shadow-xl -translate-y-2 border-green-300/50" : "shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 ${
        isHovered ? "w-full" : "w-1/3"
      }`} />
      {/* Hover background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-500 ${
        isHovered ? "opacity-[0.04]" : "opacity-0"
      }`} />
      <div className="relative z-10">
        <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${gradient} mb-4 transition-transform duration-300 ${
          isHovered ? "scale-110" : ""
        }`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1" ref={ref} suppressHydrationWarning>
          {isVisible ? `${count.toLocaleString("fr-CH")}${suffix}` : `0${suffix}`}
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
      {/* Corner glow */}
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${gradient} rounded-full blur-2xl transition-opacity duration-500 ${
        isHovered ? "opacity-30" : "opacity-0"
      }`} />
    </div>
  )
}

/* ───────────────────────── MAIN COMPONENT ───────────────────────── */

export function CommunesPageContent() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: constatRef, isVisible: constatVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: localRef, isVisible: localVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: tempsRef, isVisible: tempsVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: engagementRef, isVisible: engagementVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: secRef, isVisible: secVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredLocal, setHoveredLocal] = useState<number | null>(null)
  const [hoveredSec, setHoveredSec] = useState<number | null>(null)

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-background to-blue-50/60" />
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div ref={heroRef} className="max-w-5xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-green-700" />
              <span className="text-sm text-green-700 font-semibold">Solution collectivités publiques</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Digitalisez vos courriers communaux.{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Réduisez votre empreinte carbone.
              </span>{" "}
              Mesurez votre impact.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              NextLetter accompagne les communes suisses dans leur transition écologique administrative avec des
              statistiques RSE mesurables et publiables.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@nextletter.ch?subject=D%C3%A9monstration%20collectivit%C3%A9s"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Demander une démonstration
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@nextletter.ch?subject=Brochure%20collectivit%C3%A9s"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold text-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
              >
                Recevoir la brochure collectivités
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ LE CONSTAT ════════════ */}
      <section id="constat" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto" ref={constatRef}>
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              constatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-600 font-semibold">Le constat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Chaque courrier traditionnel mobilise&hellip;
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {constatItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`group p-5 bg-card border border-border rounded-2xl text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    constatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: constatVisible ? `${i * 80}ms` : "0ms" }}
                >
                  <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-red-50 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>

          {/* Callout */}
          <div
            className={`max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center transition-all duration-700 delay-300 ${
              constatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-green-900 leading-relaxed">
              La gestion du courrier est l&apos;un des leviers les plus simples pour réduire immédiatement
              l&apos;empreinte carbone administrative d&apos;une commune.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ IMPACT MESURABLE ════════════ */}
      <section id="impact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50/60 via-background to-blue-50/40">
        <div className="max-w-7xl mx-auto" ref={impactRef}>
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-green-700" />
              <span className="text-sm text-green-700 font-semibold">Impact mesurable</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Avec NextLetter, votre commune peut suivre
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemple pour une commune envoyant 5&apos;000 lettres par an.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {impactStats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:info@nextletter.ch?subject=Exemple%20rapport%20RSE"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
            >
              <BarChart3 className="w-4 h-4" />
              Demander un exemple de rapport RSE
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ SOUTIEN IMPRIMERIES LOCALES ════════════ */}
      <section id="local" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto" ref={localRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div
              className={`transition-all duration-700 ${
                localVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Factory className="w-4 h-4 text-blue-700" />
                <span className="text-sm text-blue-700 font-semibold">Économie locale</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Moins d&apos;imprimantes individuelles.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Plus d&apos;efficacité locale.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Contrairement à l&apos;achat d&apos;imprimantes produites à l&apos;étranger ou aux chaînes logistiques
                longues, NextLetter centralise l&apos;impression via des partenaires suisses.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Une production optimisée et responsable, au service de votre commune.
              </p>
            </div>

            {/* Right — cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localBenefits.map((b, i) => {
                const Icon = b.icon
                const isHovered = hoveredLocal === i
                return (
                  <div
                    key={i}
                    className={`group relative p-5 bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 cursor-default ${
                      localVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    } ${isHovered ? "shadow-xl -translate-y-1 border-blue-300/50" : "shadow-sm"}`}
                    style={{ transitionDelay: localVisible ? `${i * 100}ms` : "0ms" }}
                    onMouseEnter={() => setHoveredLocal(i)}
                    onMouseLeave={() => setHoveredLocal(null)}
                  >
                    <div
                      className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ${
                        isHovered ? "w-full" : "w-0"
                      }`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 transition-transform duration-300 ${
                          isHovered ? "scale-110" : ""
                        }`}
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ GAIN DE TEMPS ════════════ */}
      <section id="temps" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/60 via-background to-green-50/40">
        <div className="max-w-7xl mx-auto" ref={tempsRef}>
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              tempsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
              <Timer className="w-4 h-4 text-blue-700" />
              <span className="text-sm text-blue-700 font-semibold">Gain de temps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Réallouez le temps à ce qui compte
            </h2>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Traditional */}
            <div
              className={`relative p-8 bg-card border border-border rounded-2xl transition-all duration-700 ${
                tempsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-400 to-orange-400 rounded-t-2xl" />
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Courrier traditionnel</h3>
                <div className="text-4xl font-bold text-red-500 mb-1">15–25 min</div>
                <p className="text-sm text-muted-foreground">par courrier (rédaction, impression, mise sous pli, déplacement)</p>
              </div>
            </div>

            {/* NextLetter */}
            <div
              className={`relative p-8 bg-card border border-green-200 rounded-2xl shadow-lg transition-all duration-700 delay-100 ${
                tempsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-2xl" />
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <Timer className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Avec NextLetter</h3>
                <div className="text-4xl font-bold text-green-600 mb-1">3–5 min</div>
                <p className="text-sm text-muted-foreground">par courrier (rédaction en ligne, envoi en un clic)</p>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div
            className={`max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 text-center transition-all duration-700 delay-200 ${
              tempsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-blue-900 leading-relaxed">
              <strong>5&apos;000 lettres/an</strong> = jusqu&apos;à <strong>1&apos;600 heures économisées</strong>.
              <br />
              <span className="text-blue-700">Soit presque un équivalent temps partiel réalloué au service des citoyens.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ ENGAGEMENT PUBLIC ════════════ */}
      <section id="engagement" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10" ref={engagementRef}>
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              engagementVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">Engagement public</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Affichez votre engagement</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Chaque commune utilisant NextLetter peut publier une page de transparence RSE et afficher un badge
              d&apos;engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Badge */}
            <div
              className={`flex justify-center transition-all duration-700 ${
                engagementVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative w-72 sm:w-80">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-3xl blur-xl" />
                <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 text-center backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-green-300 mb-2">Commune engagée</div>
                  <h3 className="text-xl font-bold mb-1">Digitalisation responsable</h3>
                  <p className="text-sm text-gray-400">avec NextLetter</p>
                  <div className="mt-4 h-px bg-white/10" />
                  <div className="mt-4 text-xs text-gray-500">Vérifié &bull; 2026</div>
                </div>
              </div>
            </div>

            {/* Public page preview */}
            <div
              className={`transition-all duration-700 delay-200 ${
                engagementVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Page publique — Exemple</p>
                <h3 className="text-xl font-bold mb-6">Cette commune a permis :</h3>
                <div className="space-y-4">
                  {publicPageStats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="text-2xl font-bold text-green-400">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                  Données vérifiées et publiables dans votre rapport RSE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SÉCURITÉ ════════════ */}
      <section id="securite" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto" ref={secRef}>
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
              <Shield className="w-4 h-4 text-blue-700" />
              <span className="text-sm text-blue-700 font-semibold">Sécurité & conformité</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Vos données communales sont protégées
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((f, i) => {
              const Icon = f.icon
              const isHovered = hoveredSec === i
              return (
                <div
                  key={i}
                  className={`group relative p-6 bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 cursor-default ${
                    secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  } ${isHovered ? "shadow-xl -translate-y-1 border-blue-300/50" : "shadow-sm"}`}
                  style={{ transitionDelay: secVisible ? `${i * 100}ms` : "0ms" }}
                  onMouseEnter={() => setHoveredSec(i)}
                  onMouseLeave={() => setHoveredSec(null)}
                >
                  <div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 transition-transform duration-300 ${
                        isHovered ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════ CTA FINAL ════════════ */}
      <section id="cta" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50/80 via-background to-blue-50/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10" ref={ctaRef}>
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            suppressHydrationWarning
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Modernisez votre administration.{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Engagez votre commune.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Rejoignez les communes suisses qui mesurent et réduisent leur empreinte carbone administrative avec
              NextLetter.
            </p>
            <a
              href="mailto:info@nextletter.ch?subject=D%C3%A9monstration%20personnalis%C3%A9e%20commune"
              className="inline-flex items-center gap-2 px-10 py-5 bg-foreground text-background rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Planifier une démonstration personnalisée
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
