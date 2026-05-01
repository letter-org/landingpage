import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre mainlevée poursuite Suisse – Modèle conforme & envoi recommandé",
  description: "Demandez la mainlevée d'une poursuite en Suisse. Modèle conforme, envoi recommandé avec preuve. Levée de poursuite après paiement.",
  alternates: { canonical: "/modeles/lettre-mainlevee-poursuite-suisse" },
}

const faqData = [
  { question: "Qu'est-ce que la mainlevée de poursuite ?", answer: "La mainlevée est la levée de la poursuite après paiement de la dette ou accord avec le créancier. Elle met fin à la procédure de poursuite." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
  { question: "Quelle est la différence entre opposition et mainlevée ?", answer: "L'opposition conteste la poursuite (délai 10 jours). La mainlevée demande la levée de la poursuite après paiement ou accord." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un avocat ou un service de conseil juridique." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-mainlevee-poursuite"
      faqData={faqData}
      h1Title="Lettre mainlevée poursuite"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez la mainlevée de votre poursuite en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit des poursuites suisse." }}
      savoirContent={<><p>En Suisse, la <strong>mainlevée de poursuite</strong> peut être demandée après paiement de la dette ou accord avec le créancier. La lettre doit être adressée à l'office des poursuites. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p>La mainlevée met fin à la procédure de poursuite. Elle se distingue de l'opposition, qui conteste la poursuite dans un délai de 10 jours.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour une poursuite, consultez un avocat ou un service de conseil juridique.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle mainlevée poursuite." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et les références de la poursuite." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Références poursuite", subtitle: "Numéro, office des poursuites" },
        { title: "Demande de mainlevée", subtitle: "Paiement effectué ou accord" },
        { title: "Pièces jointes", subtitle: "Preuve de paiement si applicable" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander la mainlevée de votre poursuite ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="mainlevee-poursuite"
      canonicalPath="/modeles/lettre-mainlevee-poursuite-suisse"
      excludeFromOtherModels="/modeles/lettre-mainlevee-poursuite-suisse"
      ctaSecondaryHref="/modeles/opposition-poursuite-suisse"
      howToName="Lettre mainlevée poursuite en Suisse"
    />
  )
}
