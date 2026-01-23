"use client"

import { Logo } from "@/components/logo"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles, ArrowRight, ExternalLink } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Fonctionnalites', href: '#features-section' },
    { label: 'Tarifs', href: '#pricing-section' },
    { label: 'FAQ', href: '#faq-section' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
        scrolled 
          ? 'bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top shimmer line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 transition-opacity duration-500" style={{ opacity: scrolled ? 1 : 0 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <div className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item, index) => (
              <a 
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg group ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
                style={{ transitionDelay: mounted ? `${(index + 1) * 75}ms` : '0ms' }}
                onMouseEnter={() => setHoveredLink(item.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Background on hover */}
                <span className={`absolute inset-0 rounded-lg bg-secondary/80 transition-all duration-300 ${
                  hoveredLink === item.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} />
                <span className="relative">{item.label}</span>
                {/* Underline indicator */}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-brand rounded-full transition-all duration-300 ${
                  hoveredLink === item.label ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`} />
              </a>
            ))}
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <a 
              href={appUrls.login}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300 group ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
            >
              <span className="absolute inset-0 rounded-lg bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Se connecter</span>
            </a>
            
            <a
              href={addUtmParams(appUrls.base, 'landing', 'header', 'nextletter')}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-5 py-2.5 bg-foreground text-background rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ transitionDelay: mounted ? '375ms' : '0ms' }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Creer un compte
              </span>
            </a>
            
            <a
              href={appUrls.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-4 py-2.5 bg-card text-foreground border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-brand/50 hover:shadow-lg hover:-translate-y-0.5 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ transitionDelay: mounted ? '450ms' : '0ms' }}
            >
              <span className="relative flex items-center gap-2 text-sm font-medium">
                Accéder à l'app
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative p-2 rounded-xl hover:bg-secondary transition-all duration-300 group" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="absolute inset-0 rounded-xl bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {mobileMenuOpen ? (
              <X className="w-6 h-6 relative transition-transform duration-300 rotate-0" />
            ) : (
              <Menu className="w-6 h-6 relative transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile menu with premium animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="relative px-4 py-3 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 hover:bg-secondary/50 group"
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand rounded-full group-hover:h-6 transition-all duration-300" />
                  {item.label}
                </a>
              ))}
              
              <div className="h-px bg-border my-2" />
              
              <a 
                href={appUrls.login}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 hover:bg-secondary/50 text-left"
                style={{ 
                  transitionDelay: mobileMenuOpen ? '150ms' : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Se connecter
              </a>
              
              <a
                href={addUtmParams(appUrls.base, 'landing', 'header-mobile', 'nextletter')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mx-4 mt-2 px-5 py-3 bg-foreground text-background rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  transitionDelay: mobileMenuOpen ? '200ms' : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Creer un compte
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              
              <a
                href={appUrls.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mx-4 mt-2 px-5 py-3 bg-card text-foreground border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-brand/50"
                style={{ 
                  transitionDelay: mobileMenuOpen ? '250ms' : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative flex items-center justify-center gap-2 text-sm font-medium">
                  Accéder à l'app
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
