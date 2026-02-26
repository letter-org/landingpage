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
  // SEO: avoid linking to app root if it redirects.
  // When url points to APP_URL root, switch to /signup directly.
  const normalizedBase = APP_URL.replace(/\/+$/, "")
  const normalizedInput = url.replace(/\/+$/, "")
  const finalUrl = normalizedInput === normalizedBase ? `${normalizedBase}/signup` : url
  const separator = finalUrl.includes("?") ? "&" : "?"
  return `${finalUrl}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
}

