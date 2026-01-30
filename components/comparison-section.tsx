"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Zap, ArrowRight } from "lucide-react"
import { BackgroundMountains } from "./background-mountains"
import { appUrls, addUtmParams } from "@/lib/app-urls"

export function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [timeValue, setTimeValue] = useState(0)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate time value from 0 to 5-10
          if (!reducedMotion) {
            let current = 0
            const target = 5
            const duration = 1500
            const startTime = Date.now()
            
            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              current = Math.floor(progress * target)
              setTimeValue(current)
              
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setTimeValue(5) // Final value
              }
            }
            requestAnimationFrame(animate)
          } else {
            setTimeValue(5)
          }
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [reducedMotion])

  const beforeSteps = ["Imprimer", "Mettre sous-plis", "Affranchir", "Se déplacer"]
  const afterSteps = ["Importer", "Envoyer", "Suivre"]

  const benefits = [
    "Zéro déplacement",
    "Suivi centralisé",
    "Preuves archivées"
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
      aria-labelledby="comparison-title"
    >
      {/* Background mountains - très subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <BackgroundMountains />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible || reducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h2
            id="comparison-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 relative inline-block"
          >
            {/* Effet whaou - glow pulse */}
            <span 
              className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand blur-xl opacity-50 animate-pulse ${
                isVisible ? "block" : "hidden"
              }`}
              aria-hidden="true"
            >
              Courrier standard vs NextLetter
            </span>
            {/* Effet shimmer */}
            <span 
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-x-full animate-shimmer ${
                isVisible ? "block" : "hidden"
              }`}
              style={{ animationDuration: '3s' }}
              aria-hidden="true"
            />
            {/* Texte principal */}
            <span className="relative z-10 bg-gradient-to-r from-foreground via-brand to-foreground bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              Courrier standard vs NextLetter
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Envoyez vos lettres recommandées en ligne en série en quelques minutes.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Avant Card */}
          <div
            className={`bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-sm transition-all duration-700 ${
              isVisible || reducedMotion
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible && !reducedMotion ? "200ms" : "0ms",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Clock className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-muted-foreground">Courrier standard</h3>
            </div>

            {/* Time Display */}
            <div className="mb-8">
              <div className="text-5xl sm:text-6xl font-bold text-muted-foreground mb-2">
                2–3h
              </div>
              <p className="text-sm text-muted-foreground/70">
                / 100 courriers
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {beforeSteps.map((step, index) => (
                <div
                  key={step}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible || reducedMotion
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isVisible && !reducedMotion ? `${400 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  <span className="text-base text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avec NextLetter Card */}
          <div
            className={`bg-gradient-to-br from-brand/5 via-card to-card rounded-2xl border-2 border-brand/20 p-8 sm:p-10 shadow-lg transition-all duration-700 ${
              isVisible || reducedMotion
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible && !reducedMotion ? "400ms" : "0ms",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="/brand/nextletter-wordmark.svg" 
                  alt="NextLetter" 
                  className="h-6 w-auto"
                />
              </div>
            </div>

            {/* Time Display - avec animation */}
            <div className="mb-8">
              <div className="text-5xl sm:text-6xl font-bold text-brand mb-2">
                {reducedMotion ? "5–10" : `${timeValue > 0 ? timeValue : "5"}–10`} min
              </div>
              <p className="text-sm text-muted-foreground">
                / 100 courriers
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {afterSteps.map((step, index) => (
                <div
                  key={step}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible || reducedMotion
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isVisible && !reducedMotion ? `${600 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-base font-medium text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Chips */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-8 transition-all duration-700 ${
            isVisible || reducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible && !reducedMotion ? "1000ms" : "0ms",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground transition-all duration-500 ${
                isVisible || reducedMotion
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible && !reducedMotion ? `${1100 + index * 100}ms` : "0ms",
              }}
            >
              {benefit}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible || reducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible && !reducedMotion ? "1400ms" : "0ms",
          }}
        >
          <a
            href={addUtmParams(appUrls.base, 'landing', 'comparison-cta', 'nextletter')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
          >
            Tester un envoi
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
