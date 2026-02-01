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
  title: "Résiliation officielle par courrier en Suisse | NextLetter",
  description:
    "Générez et envoyez vos lettres de résiliation en Suisse par courrier recommandé. Modèles de lettres de résiliations, modèles de résiliations assurance suisse, modèles de lettres de licenciements, modèles de lettres résiliation de bail suisse. Suivi lettre recommandée suisse, preuve de livraison recommandée, suivi recommandé suisse, preuve de livraison lettre suisse, acheminement recommandé suisse, preuve de signature recommandée suisse. Preuve d'envoi, conformité légale, simple et rapide avec NextLetter.",
  keywords: [
    "modèles de lettres de résiliations",
    "modèles de résiliations assurance suisse",
    "modèles de lettres de licenciements",
    "modèles de lettres résiliation de bail suisse",
    "suivi lettre recommandée suisse",
    "preuve de livraison recommandée",
    "suivi recommandé suisse",
    "preuve de livraison lettre suisse",
    "acheminement recommandé suisse",
    "preuve de signature recommandée suisse",
    "lettre recommandée en ligne en Suisse",
    "envoyer lettre recommandée en ligne Suisse",
    "lettre recommandée en ligne",
    "alternative La Poste Suisse",
    "envoi courrier officiel en ligne Suisse",
    "lettre recommandée électronique Suisse",
    "envoyer lettre recommandée sans aller à la poste",
    "recommandé électronique Suisse",
    "alternative la poste suisse",
    "envoi lettre officielle en ligne",
    "preuve d'envoi",
    "suivi lettre recommandée",
    "envoyer recommandé en ligne",
    "modèles de lettres résiliation",
    "modèles résiliation assurance",
    "modèles lettres licenciement",
    "modèles résiliation bail",
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
    title: "NextLetter - Lettre recommandée en ligne en Suisse | Alternative La Poste",
    description:
      "Envoyer des lettres recommandées en ligne en Suisse sans vous déplacer. Solution simple avec suivi en temps réel et preuve d'envoi. Alternative moderne à La Poste suisse.",
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
    title: "NextLetter - Lettre recommandée en ligne en Suisse",
    description:
      "Envoyer des lettres recommandées en ligne en Suisse sans vous déplacer. Suivi en temps réel et preuve d'envoi.",
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
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <StructuredData />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
