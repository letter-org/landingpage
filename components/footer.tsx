"use client"

import { Logo } from "@/components/logo"
import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

// Particles for footer - static values to avoid hydration issues
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: ((i * 5) % 3) + 1, // Deterministic size
  x: ((i * 19) % 100), // Deterministic x
  y: ((i * 23) % 100), // Deterministic y
  duration: ((i * 7) % 15) + 10, // Deterministic duration
  delay: ((i * 11) % 5), // Deterministic delay
}))

export function Footer() {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div ref={footerRef} className="max-w-7xl mx-auto relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
              <Logo variant="white" size="sm" className="mb-4" />
            </a>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Solution de rédaction et d'envoi en ligne de lettres recommandées en Suisse, pour particuliers et entreprises. Envoyez vos courriers et lettres officielles depuis n'importe où.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Service disponible 24/7</span>
            </div>
          </div>

          {/* Links column */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Liens utiles
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Fonctionnalites', href: '#features-section' },
                { label: 'Tarifs', href: '#pricing-section' },
                { label: 'FAQ', href: '#faq-section' },
                { label: 'Modèles de lettres', href: '/modeles' },
                { label: 'Opposition poursuite', href: '/modeles/opposition-poursuite-suisse' },
                { label: 'Collectivités publiques', href: '/communes' },
                { label: 'Blog', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1"
                    onMouseEnter={() => setHoveredLink(item.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                      hoveredLink === item.label ? 'w-3' : ''
                    }`} />
                    {item.label}
                    <ArrowUpRight className={`w-3 h-3 transition-all duration-300 ${
                      hoveredLink === item.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Confidentialité', href: '/politique-confidentialite' },
                { label: "Conditions d'utilisation", href: '/cgu' },
                { label: 'Cookies', href: '/cookies' },
                { label: 'Informations légales', href: '/mentions-legales' },
                { label: 'Contact', href: 'mailto:info@nextletter.ch' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1"
                    onMouseEnter={() => setHoveredLink(item.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                      hoveredLink === item.label ? 'w-3' : ''
                    }`} />
                    {item.label}
                    <ArrowUpRight className={`w-3 h-3 transition-all duration-300 ${
                      hoveredLink === item.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10 transition-all duration-700 delay-300 ${
            footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: Mail, label: 'Email', value: 'info@nextletter.ch', href: 'mailto:info@nextletter.ch' },
            { icon: Phone, label: 'Telephone', value: '+41 79 908 61 52', href: 'tel:+41799086152' },
            { icon: MapPin, label: 'Adresse', value: 'Chemin de la Crésentine 57, 1023 Crissier', href: null },
          ].map((contact, index) => (
            <div 
              key={contact.label}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                <contact.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                {contact.href ? (
                  <a href={contact.href} className="text-white hover:text-blue-400 transition-colors duration-300">
                    {contact.value}
                  </a>
                ) : (
                  <div className="text-white">{contact.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">2026 NextLetter. Tous droits reserves.</p>
          <div className="flex items-center gap-3">
            {[
              { name: 'Facebook', href: '#', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { name: 'Twitter', href: '#', path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nextletter-swiss-0060053ab', path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg bg-white/5 border border-transparent transition-all duration-300 ${
                  hoveredSocial === social.name 
                    ? 'bg-white/10 border-white/20 scale-110 -translate-y-1' 
                    : 'hover:bg-white/10'
                }`}
                aria-label={social.name}
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className={`w-4 h-4 transition-colors duration-300 ${
                  hoveredSocial === social.name ? 'text-blue-400' : 'text-gray-400'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
