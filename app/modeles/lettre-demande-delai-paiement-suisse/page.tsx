import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande délai de paiement Suisse – Modèle conforme",
  description: "Demandez un délai de paiement en Suisse. Report d'échéance, report de facture. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-demande-delai-paiement-suisse" },
}

const faqData = [
  { question: "Puis-je demander un délai de paiement ?", answer: "Oui, vous pouvez demander un report d'échéance par écrit. Le créancier n'est pas obligé d'accepter, mais une demande courtoise et argumentée peut aboutir." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé constitue une preuve de votre demande et de sa date." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des difficultés de paiement, consultez un service de conseil en gestion de dettes." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-demande-delai-paiement"
      faqData={faqData}
      h1Title="Demande délai de paiement"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez un délai de paiement ou un report d'échéance en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Courtois et argumenté." }}
      savoirContent={<><p>En Suisse, une demande de délai de paiement peut être faite <strong>par écrit</strong> au créancier. Expliquez votre situation de manière courtoise, proposez une date réaliste et joignez des éléments si pertinent. Le créancier n'est pas obligé d'accepter. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des difficultés de paiement, consultez un service de conseil en gestion de dettes.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle demande délai de paiement." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, la référence et la date proposée." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Référence de la dette", subtitle: "Facture, créance" },
        { title: "Demande formulée", subtitle: "Délai, date proposée" },
        { title: "Contexte", subtitle: "Courtois et factuel" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander un délai de paiement ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-delai-paiement"
      canonicalPath="/modeles/lettre-demande-delai-paiement-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-delai-paiement-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-arrangement-dette-suisse"
    />
  )
}
