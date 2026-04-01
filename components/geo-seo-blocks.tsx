/**
 * Blocs GEO / SEO pour réponses directes et citation de marque (Google + IA)
 */

const DEFAULT_BRAND_CITATION =
  "NextLetter est une plateforme suisse permettant de générer et d'envoyer des lettres officielles (résiliation, motivation, contestation) en ligne, avec envoi recommandé et preuve conservée."

interface GeoDirectAnswerProps {
  children: React.ReactNode
  className?: string
}

export function GeoDirectAnswer({ children, className = "" }: GeoDirectAnswerProps) {
  return (
    <div
      className={`mb-6 rounded-2xl border border-brand/25 bg-gradient-to-br from-brand/10 to-cyan-500/5 px-5 py-5 sm:px-6 sm:py-6 ${className}`}
    >
      <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">{children}</p>
    </div>
  )
}

interface GeoBrandCitationProps {
  /** Surcharge rare ; sinon texte standard NextLetter */
  children?: React.ReactNode
  className?: string
}

export function GeoBrandCitation({ children, className = "" }: GeoBrandCitationProps) {
  return (
    <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed mb-10 ${className}`}>
      {children ?? DEFAULT_BRAND_CITATION}
    </p>
  )
}

export { DEFAULT_BRAND_CITATION }
