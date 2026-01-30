"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"
import { HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "Pourquoi utiliser NextLetter pour envoyer une lettre recommandée ?",
    answer:
      "NextLetter simplifie l'envoi de lettres recommandées en ligne en s'appuyant sur des services postaux partenaires, avec suivi et justificatif d'expédition, le tout sans déplacement.",
  },
  {
    question: "Quelle est la différence entre NextLetter et La Poste ?",
    answer:
      "NextLetter permet d'envoyer des lettres recommandées en ligne sans se déplacer. Nous utilisons La Poste pour l'acheminement physique.",
  },
  {
    question: "Combien de temps prend l'envoi ?",
    answer:
      "En général les courriers envoyés avant 14h sont pris en charge par nos imprimeries professionnelles et remises pour acheminement à la poste. Délai d'acheminement : 1 à 2 jours ouvrés. NextLetter n'est pas responsable des retards de livraisons.",
  },
  {
    question: "Comment fonctionne NextLetter ?",
    answer:
      "Vous rédigez ou téléchargez votre lettre, et NextLetter veille à ce que vos lettres soient imprimées dans des imprimeries professionnelles et livrées par la poste. Vous suivez l'acheminement en temps réel et recevez une preuve de distribution.",
  },
]

// Mouse glow component
function FAQMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = document.getElementById('faq-section')

    const handleMouseMove = (e: MouseEvent) => {
      if (section) {
        const rect = section.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseenter', handleMouseEnter)
      section.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseenter', handleMouseEnter)
        section.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute transition-all duration-300 ease-out"
      style={{
        left: position.x - 250,
        top: position.y - 250,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 60%)',
        opacity: isHovering ? 1 : 0,
      }}
    />
  )
}

export function FAQ() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden">
      {/* Mouse glow */}
      <FAQMouseGlow />

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-4 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-brand" />
            <span className="text-sm text-brand font-semibold">Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Questions frequentes</h2>
        </div>

        {/* FAQ Accordion */}
        <div ref={faqRef}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 data-[state=open]:shadow-xl data-[state=open]:border-brand/30 ${
                  faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${hoveredItem === index ? 'shadow-lg border-brand/20' : ''}`}
                style={{ transitionDelay: faqVisible ? `${index * 75}ms` : '0ms' }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Gradient background on hover/open */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/[0.02] via-transparent to-cyan-500/[0.02] opacity-0 data-[state=open]:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <div 
                  className={`absolute inset-0 -translate-x-full transition-transform duration-1000 pointer-events-none ${
                    hoveredItem === index ? 'translate-x-full' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                  }}
                />

                <AccordionTrigger className="relative z-10 text-left text-foreground font-semibold hover:no-underline py-5 px-6 group">
                  <span className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand/20 group-hover:scale-110 ${
                      hoveredItem === index ? 'bg-brand/20' : ''
                    }`}>
                      <span className="text-sm font-bold text-brand">{index + 1}</span>
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="relative z-10 text-muted-foreground leading-relaxed pb-5 px-6 pl-[4.25rem]">
                  {faq.answer}
                </AccordionContent>

                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand to-cyan-500 transition-opacity duration-300 ${
                  hoveredItem === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div 
          ref={ctaRef}
          className={`mt-12 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-card rounded-2xl border border-border p-8 text-center overflow-hidden group hover:shadow-xl hover:border-brand/30 transition-all duration-500">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-brand" />
              </div>
              <p className="text-muted-foreground mb-4">Vous ne trouvez pas la reponse a votre question ?</p>
              <button className="group/btn relative px-6 py-3 bg-foreground text-background rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                {/* Button shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Contactez-nous
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
