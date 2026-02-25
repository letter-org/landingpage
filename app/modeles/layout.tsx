import type { Metadata } from "next"
import type { ReactNode } from "react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

export const metadata: Metadata = {
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
  openGraph: {
    type: "article",
    locale: "fr_CH",
    siteName: "NextLetter",
    images: [
      {
        url: `${siteUrl}/brand/nextletter-logo.svg`,
        alt: "NextLetter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/brand/nextletter-logo.svg`],
  },
}

export default function ModelesLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
