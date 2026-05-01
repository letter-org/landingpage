"use client"

import { track } from "@vercel/analytics"
import { buildTrackedAppHref, type TrackedAppPlacement } from "@/lib/app-urls"
import type { ReactNode } from "react"

interface TrackedAppCtaProps {
  campaign: string
  placement: TrackedAppPlacement
  pageSlug: string
  className?: string
  children: ReactNode
}

/**
 * Lien vers l’app avec UTM complets + événement Vercel Analytics (conversion pages modèles).
 */
export function TrackedAppCta({ campaign, placement, pageSlug, className, children }: TrackedAppCtaProps) {
  const href = buildTrackedAppHref({ campaign, placement, pageSlug })
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        track("modele_app_cta_click", {
          page_slug: pageSlug,
          placement,
          campaign,
        })
      }}
    >
      {children}
    </a>
  )
}
