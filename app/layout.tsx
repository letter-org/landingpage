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
  title: "NextLetter - Envoyer lettre recommandée en ligne | Alternative poste recommandée",
  description:
    "Envoyez vos lettres recommandées en ligne sans vous déplacer. Solution simple pour envoi courrier officiel en ligne. Lettre recommandée électronique conforme avec suivi en temps réel. Alternative moderne à la poste.",
  keywords: [
    "envoyer lettre recommandée en ligne",
    "lettre recommandée suisse",
    "alternative poste recommandée",
    "envoi courrier officiel en ligne",
    "lettre recommandée électronique",
    "envoyer lettre recommandée sans aller à la poste",
    "lettre recommandée en ligne suisse",
    "recommandé électronique",
    "alternative la poste",
    "envoi lettre officielle en ligne",
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
    title: "NextLetter - Lettre recommandée en ligne Suisse | Alternative La Poste",
    description:
      "Envoyez vos lettres recommandées en ligne en Suisse sans vous déplacer. Application suisse d'envoi de lettres officielles. Alternative digitale à La Poste Suisse.",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NextLetter - Application suisse d'envoi de lettres recommandées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLetter - Lettre recommandée en ligne Suisse",
    description:
      "Envoyez vos lettres recommandées en ligne en Suisse. Application suisse d'envoi de lettres officielles.",
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
    icon: "/favicon.png",
    apple: "/favicon.png",
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
