import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nextletter.ch"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NextLetter - Envoyer lettre recommandée en ligne | Alternative au guichet postal",
  description:
    "Envoyez vos lettres recommandées en ligne sans vous déplacer. Solution simple pour envoi courrier officiel avec suivi en temps réel et preuve d'envoi. Alternative moderne au guichet postal.",
  keywords: [
    "envoyer lettre recommandée en ligne",
    "lettre recommandée en ligne",
    "alternative poste recommandée",
    "envoi courrier officiel en ligne",
    "lettre recommandée électronique",
    "envoyer lettre recommandée sans aller à la poste",
    "recommandé électronique",
    "alternative la poste",
    "envoi lettre officielle en ligne",
    "preuve d'envoi",
    "suivi lettre recommandée",
    "envoyer recommandé en ligne",
  ],
  authors: [{ name: "NextLetter" }],
  creator: "NextLetter",
  publisher: "NextLetter",
  alternates: {
    canonical: "/",
    languages: {
      "fr-CH": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteUrl,
    siteName: "NextLetter",
    title: "NextLetter - Envoyer lettre recommandée en ligne | Alternative au guichet",
    description:
      "Envoyez vos lettres recommandées en ligne sans vous déplacer. Solution simple avec suivi en temps réel et preuve d'envoi. Alternative moderne au guichet postal.",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NextLetter - Envoyer lettre recommandée en ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLetter - Envoyer lettre recommandée en ligne",
    description:
      "Envoyez vos lettres recommandées en ligne sans vous déplacer. Suivi en temps réel et preuve d'envoi.",
    images: [`${siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/nextletter-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/brand/nextletter-icon.svg",
  },
}

import { Toaster } from "@/components/ui/sonner"
import { StructuredData } from "@/components/structured-data"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-CH">
      <body className={`font-sans antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
