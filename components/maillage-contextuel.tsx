/**
 * Maillage interne : jusqu'à 6 modèles + 2 guides + accueil + app NextLetter
 */

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LetterModelLink } from "@/lib/letter-models"
import type { GuideLink } from "@/lib/guides"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { TrackedAppCta } from "@/components/tracked-app-cta"

interface MaillageContextuelProps {
  models: LetterModelLink[]
  guides: GuideLink[]
  utmCampaign?: string
  /** Texte du lien vers l'application */
  appLinkLabel?: string
  /** Suivi conversion (pages pilier SEO) : lien app avec UTM + événement analytics */
  conversionTracking?: { pageSlug: string }
}

export function MaillageContextuel({
  models,
  guides,
  utmCampaign = "maillage-modele",
  appLinkLabel = "Ouvrir NextLetter (app)",
  conversionTracking,
}: MaillageContextuelProps) {
  const appHref = addUtmParams(appUrls.base, "landing", "cta", utmCampaign)
  const displayModels = models.slice(0, 6)
  const displayGuides = guides.slice(0, 2)

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Pour aller plus loin</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Modèles de lettres</h3>
          <ul className="space-y-2">
            {displayModels.map((m) => (
              <li key={m.path}>
                <Link href={m.path} className="text-brand hover:underline text-sm">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/modeles"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            Tous les modèles
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {displayGuides.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Guides</h3>
              <ul className="space-y-2">
                {displayGuides.map((g) => (
                  <li key={g.path}>
                    <Link href={g.path} className="text-brand hover:underline text-sm">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">NextLetter</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-brand hover:underline">
                  Page d&apos;accueil et présentation
                </Link>
              </li>
              <li>
                {conversionTracking ? (
                  <TrackedAppCta
                    campaign={utmCampaign}
                    placement="maillage_app"
                    pageSlug={conversionTracking.pageSlug}
                    className="text-brand hover:underline font-medium"
                  >
                    {appLinkLabel}
                  </TrackedAppCta>
                ) : (
                  <a
                    href={appHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline font-medium"
                  >
                    {appLinkLabel}
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
