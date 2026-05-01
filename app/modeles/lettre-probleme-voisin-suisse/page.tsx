import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre problème voisin Suisse – Modèle conforme & envoi recommandé",
  description: "Réglez un litige de voisinage en Suisse. Bruit, nuisances, conflit. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-probleme-voisin-suisse" },
}

const faqData = [
  { question: "Comment régler un conflit de voisinage par écrit ?", answer: "Une lettre formelle et courtoise peut servir de première étape. Documentez les faits, les dates et formulez une demande claire. Le courrier recommandé constitue une preuve." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi et de réception en cas d'escalade." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des litiges complexes, consultez un médiateur ou un avocat." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-probleme-voisin"
      faqData={faqData}
      h1Title="Lettre problème voisin"
      h1Gradient="en Suisse"
      intro={{ main: "Réglez un litige de voisinage en Suisse en quelques minutes. Bruit, nuisances, conflit – votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme aux usages. Courtois et factuel." }}
      savoirContent={<><p>En Suisse, une lettre formelle peut constituer une première étape pour régler un conflit de voisinage. Restez <strong>factuel et courtois</strong>, documentez les faits et formulez une demande claire. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des litiges complexes, consultez un médiateur ou un avocat.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre problème voisin." },
        { title: "Étape 2 – Complétez vos informations", description: "Décrivez la situation, les faits et votre demande." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Description des faits", subtitle: "Dates, circonstances" },
        { title: "Demande formulée", subtitle: "Ce que vous souhaitez" },
        { title: "Ton courtois", subtitle: "Factuel et respectueux" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à régler un conflit de voisinage ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="probleme-voisin"
      canonicalPath="/modeles/lettre-probleme-voisin-suisse"
      excludeFromOtherModels="/modeles/lettre-probleme-voisin-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-locataire-suisse"
    />
  )
}
