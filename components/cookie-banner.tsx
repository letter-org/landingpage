"use client"

import { useState, useEffect } from "react"
import { Cookie, X, Settings } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

const COOKIE_CONSENT_KEY = "nextletter-cookie-consent"

type CookieConsent = {
  essential: boolean
  analytics: boolean
  timestamp: number
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Check if consent was already given (only on client side)
    if (typeof window === "undefined") return
    
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      try {
        const parsed: CookieConsent = JSON.parse(consent)
        setAnalyticsEnabled(parsed.analytics)
        // Initialize analytics if enabled
        if (parsed.analytics) {
          // Analytics initialization would go here
          // Example: gtag('consent', 'update', { analytics_storage: 'granted' })
        }
      } catch (e) {
        // Invalid consent, show banner
        setShowBanner(true)
      }
    }
  }, [])

  const saveConsent = (analytics: boolean) => {
    // Only save if localStorage is available (client side)
    if (typeof window === "undefined") return
    
    const consent: CookieConsent = {
      essential: true, // Always true
      analytics,
      timestamp: Math.floor(Date.now() / 1000), // Unix timestamp
    }
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
    setAnalyticsEnabled(analytics)
    
    // Initialize analytics if enabled
    if (analytics) {
      // Analytics initialization would go here
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' })
    }
    
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleAcceptAll = () => {
    saveConsent(true)
  }

  const handleRejectAll = () => {
    saveConsent(false)
  }

  const handleSaveSettings = () => {
    // Settings dialog will handle this
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-brand/10 rounded-lg">
                <Cookie className="w-5 h-5 text-brand" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Gestion des cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous utilisons des cookies pour améliorer votre expérience. 
                  Les cookies essentiels sont nécessaires au fonctionnement du site.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex-1 sm:flex-initial"
              >
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-initial"
              >
                Refuser
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-initial"
              >
                Accepter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Paramètres des cookies</DialogTitle>
            <DialogDescription>
              Gérez vos préférences de cookies. Vous pouvez modifier ces paramètres à tout moment.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-secondary/50 rounded-lg">
              <div className="flex-1">
                <Label className="text-base font-semibold">Cookies essentiels</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Nécessaires au fonctionnement du site (authentification, sécurité). 
                  Ces cookies ne peuvent pas être désactivés.
                </p>
              </div>
              <Checkbox checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-secondary/50 rounded-lg">
              <div className="flex-1">
                <Label htmlFor="analytics" className="text-base font-semibold">
                  Cookies analytiques
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                </p>
              </div>
              <Checkbox
                id="analytics"
                checked={analyticsEnabled}
                onCheckedChange={(checked) => setAnalyticsEnabled(checked === true)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Annuler
            </Button>
            <Button
              onClick={() => {
                saveConsent(analyticsEnabled)
              }}
            >
              Enregistrer les préférences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
