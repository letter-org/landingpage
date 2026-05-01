/**
 * Section CTA avec effet whaou (glow au hover)
 * Utilisé sur toutes les pages SEO pour cohérence
 */

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CtaWhaouProps {
  title: string
  description: string
  buttonText: string
  href: string
  secondaryLink?: { href: string; text: string }
  /** Texte de réassurance sous les boutons */
  reassurance?: string
}

export function CtaWhaou({ title, description, buttonText, href, secondaryLink, reassurance }: CtaWhaouProps) {
  return (
    <section className="mb-12 text-center bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden group">
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-md animate-pulse" />
      </div>
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="inline-flex items-center gap-2 px-6 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-colors duration-300"
            >
              {secondaryLink.text}
            </Link>
          )}
        </div>
        {reassurance && <p className="text-sm text-muted-foreground">{reassurance}</p>}
      </div>
    </section>
  )
}
