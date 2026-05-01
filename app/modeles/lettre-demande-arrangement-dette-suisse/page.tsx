import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande arrangement dette Suisse – Modèle conforme",
  description: "Demandez un arrangement de dette en Suisse. Plan d'apurement, échelonnement. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-demande-arrangement-dette-suisse" },
}

const faqData = [
  { question: "Qu'est-ce qu'un arrangement de dette ?", answer: "Un arrangement de dette permet de convenir avec le créancier d'un plan de remboursement échelonné adapté à votre situation. Il peut éviter une poursuite." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé constitue une preuve de votre demande et de sa date." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des difficultés de paiement, consultez un service de conseil en gestion de dettes (Caritas, Pro Juventute, etc.)." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-demande-arrangement-dette"
      faqData={faqData}
      h1Title="Demande arrangement dette"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez un arrangement de dette ou un plan d'apurement en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Proposez un plan réaliste." }}
      savoirContent={<><p>En Suisse, une demande d'arrangement de dette peut être faite <strong>par écrit</strong> au créancier. Proposez un <strong>plan de remboursement échelonné</strong> réaliste adapté à votre situation. Le créancier n'est pas obligé d'accepter. Pour des difficultés importantes, consultez un service de conseil en gestion de dettes. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des difficultés de paiement, consultez Caritas, Pro Juventute ou un service de conseil en gestion de dettes.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle demande arrangement dette." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, proposez un plan de remboursement." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Référence de la dette", subtitle: "Créancier, montant" },
        { title: "Plan proposé", subtitle: "Montants, échéances" },
        { title: "Contexte", subtitle: "Situation, bonne foi" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander un arrangement de dette ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-arrangement-dette"
      canonicalPath="/modeles/lettre-demande-arrangement-dette-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-arrangement-dette-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-delai-paiement-suisse"
    />
  )
}
