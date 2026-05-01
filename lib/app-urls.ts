/**
 * Utility functions for building app URLs
 * Uses NEXT_PUBLIC_APP_URL environment variable (defaults to https://app.nextletter.ch)
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.nextletter.ch'

export const appUrls = {
  base: APP_URL,
  signup: `${APP_URL}/login`,
  login: `${APP_URL}/login`,
  dashboard: `${APP_URL}/dashboard`,
} as const

/**
 * Add UTM parameters to a URL
 */
export const addUtmParams = (url: string, source: string = 'landing', medium: string = 'cta', campaign: string = 'nextletter') => {
  // If CTA points to app root, keep it clean (no /signup, no UTM).
  // Requested for direct redirection to app.nextletter.ch.
  const normalizedBase = APP_URL.replace(/\/+$/, "")
  const normalizedInput = url.replace(/\/+$/, "")
  if (normalizedInput === normalizedBase) {
    return normalizedBase
  }
  const finalUrl = url
  const separator = finalUrl.includes("?") ? "&" : "?"
  return `${finalUrl}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
}

export type TrackedAppPlacement = "hero" | "intermediate" | "final" | "maillage_app"

/**
 * URL app avec paramètres UTM (y compris sur la racine app) pour le suivi conversion landing → app.
 * utm_content = emplacement du CTA ; utm_term = slug page modèle (optionnel).
 */
export function buildTrackedAppHref(params: {
  campaign: string
  placement: TrackedAppPlacement
  pageSlug?: string
  source?: string
  medium?: string
}) {
  const base = APP_URL.replace(/\/+$/, "")
  const search = new URLSearchParams({
    utm_source: params.source ?? "landing",
    utm_medium: params.medium ?? "cta",
    utm_campaign: params.campaign,
    utm_content: params.placement,
  })
  if (params.pageSlug) search.set("utm_term", params.pageSlug)
  return `${base}?${search.toString()}`
}

