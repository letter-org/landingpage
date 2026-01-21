"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Clock, Zap } from "lucide-react"
import { Logo } from "./logo"

const traditionalSteps = [
  "Imprimer les documents",
  "Préparer les enveloppes",
  "Affranchir les lettres",
  "Se rendre à la poste",
  "Suivi manuel",
]

const nextletterSteps = ["Télécharger les documents", "Cliquer sur « Envoyer »", "Suivi en ligne"]

export function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showTimeAnimation, setShowTimeAnimation] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger time animation after other animations
          setTimeout(() => setShowTimeAnimation(true), 2000)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Main comparison container */}
        <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Traditional method - Left side */}
            <div className="p-8 lg:p-12 bg-secondary/30 relative flex flex-col">
              <h3
                className={`text-xl lg:text-2xl font-bold text-muted-foreground mb-10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {"Distribution traditionnelle"} 
              </h3>

              <div className="relative flex-1">
                {/* Vertical dotted line */}
                <div
                  className={`absolute left-3 top-2 bottom-20 border-l-2 border-dashed border-muted-foreground/30 transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                />

                <div className="space-y-8">
                  {traditionalSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start gap-4 transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${400 + index * 300}ms` : "0ms",
                      }}
                    >
                      {/* Circle marker */}
                      <div
                        className={`w-6 h-6 rounded-full border-2 border-muted-foreground/40 bg-card flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isVisible ? "scale-100" : "scale-0"
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${450 + index * 300}ms` : "0ms",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                      </div>

                      {/* Step text */}
                      <span className="text-muted-foreground text-base lg:text-lg pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Time indicator */}
                <div
                  className={`mt-10 flex items-center gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "1900ms" : "0ms" }}
                >
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Temps moyen pour 100 lettres :</span>
                  <span
                    className={`text-2xl lg:text-3xl font-bold text-foreground transition-all duration-1000 ${
                      showTimeAnimation ? "scale-90" : "scale-100"
                    }`}
                  >
                    2 à 3 heures
                  </span>
                </div>
              </div>
            </div>

            {/* VS Badge - Centered */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className={`w-16 h-16 bg-card rounded-full shadow-xl flex items-center justify-center border-2 border-border transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              >
                <span className="text-lg font-bold text-muted-foreground">VS</span>
              </div>
            </div>

            {/* NextLetter method - Right side */}
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border relative flex flex-col bg-gradient-to-br from-brand/5 to-transparent">
              {/* Mobile VS badge */}
              <div className="lg:hidden flex justify-center -mt-12 mb-6">
                <div
                  className={`w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center border border-border transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                  style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                >
                  <span className="text-sm font-bold text-muted-foreground">VS</span>
                </div>
              </div>

              <div
                className={`mb-10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              >
                <Logo variant="dark" size="md" />
              </div>

              <div className="relative flex-1">
                {/* Vertical solid blue line */}
                <div
                  className={`absolute left-3 top-2 h-32 w-0.5 bg-gradient-to-b from-brand to-brand/50 transition-all duration-700 origin-top ${
                    isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                />

                <div className="space-y-10">
                  {nextletterSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start gap-4 transition-all duration-500 ease-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${800 + index * 150}ms` : "0ms",
                      }}
                    >
                      {/* Check circle marker */}
                      <div
                        className={`w-6 h-6 rounded-full bg-brand flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${850 + index * 150}ms` : "0ms",
                        }}
                      >
                        <Check className="w-3.5 h-3.5 text-brand-foreground" strokeWidth={3} />
                      </div>

                      {/* Step text */}
                      <span className="text-foreground text-base lg:text-lg font-medium pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Time indicator */}
                <div
                  className={`mt-12 flex items-center gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "1300ms" : "0ms" }}
                >
                  <Zap className="w-5 h-5 text-brand" />
                  <span className="text-foreground text-sm">Temps nécessaire pour 100 lettres :</span>
                  <span
                    className={`text-2xl lg:text-4xl font-bold text-brand transition-all duration-1000 ${
                      showTimeAnimation ? "scale-110" : "scale-100"
                    }`}
                  >
                    {"< 5 minutes"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "2200ms" : "0ms" }}
        >
          <p className="text-xl lg:text-2xl font-semibold text-foreground">
            Gain de temps. <span className="text-brand">Pas de déplacements.</span>
          </p>
          <p className="mt-3 text-muted-foreground">Moins d'effort. Moins d'erreurs. Plus de contrôle.</p>
        </div>
      </div>
    </section>
  )
}
