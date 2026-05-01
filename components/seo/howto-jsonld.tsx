"use client"

import Script from "next/script"

export interface HowToStep {
  name: string
  text: string
}

interface HowToJsonLdProps {
  id: string
  name: string
  description: string
  steps: HowToStep[]
  url?: string
}

export function HowToJsonLd({ id, name, description, steps, url }: HowToJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: url ? `${baseUrl}${url}` : undefined,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  )
}
