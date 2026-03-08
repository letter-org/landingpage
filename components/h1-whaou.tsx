/**
 * H1 avec effet whaou (gradient animé)
 * Utilisé sur toutes les pages SEO pour cohérence visuelle
 */

interface H1WhaouProps {
  /** Partie en texte normal */
  title: string
  /** Partie avec gradient animé (ex: "en Suisse", "Swisscom") */
  gradient: string
  className?: string
}

export function H1Whaou({ title, gradient, className = "" }: H1WhaouProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        <span className="text-foreground">{title}</span>{" "}
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
            {gradient}
          </span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"
            aria-hidden="true"
          >
            {gradient}
          </span>
        </span>
      </h1>
    </div>
  )
}
