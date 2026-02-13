"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Building2, ArrowRight } from "lucide-react"

export function CommunesCtaBanner() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50/80 via-emerald-50/60 to-blue-50/80">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        suppressHydrationWarning
      >
        <div className="relative bg-card border border-green-200/60 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-5">
              <Building2 className="w-4 h-4 text-green-700" />
              <span className="text-sm text-green-700 font-semibold">Collectivités publiques</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Vous êtes une commune ou une administration ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Découvrez comment NextLetter aide les communes suisses à réduire leur empreinte carbone, gagner du temps et publier des rapports RSE mesurables.
            </p>

            <a
              href="/communes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Découvrir la solution collectivités
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
