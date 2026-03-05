import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre contestation amende Suisse – Modèle conforme & envoi recommandé",
  description: "Contestez une amende en Suisse. Modèle conforme, envoi recommandé avec preuve. Amende de circulation, administrative.",
  alternates: { canonical: "/modeles/lettre-contestation-amende-suisse" },
}

const faqData = [
  { question: "Dans quel délai contester une amende ?", answer: "Le délai varie selon le type d'amende (circulation, administrative). Souvent 30 jours. Vérifiez le délai indiqué sur l'amende." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi dans les délais." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un avocat pour des questions spécifiques." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-contestation-amende"
      faqData={faqData}
      h1Title="Lettre contestation amende"
      h1Gradient="en Suisse"
      intro={{ main: "Contestez une amende en Suisse en quelques minutes. Amende de circulation, administrative – votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme. Agissez dans les délais." }}
      savoirContent={<><p>En Suisse, la contestation d'une amende doit être effectuée <strong>par écrit</strong> dans les délais indiqués (souvent 30 jours). Indiquez clairement les <strong>motifs</strong> de votre contestation. L'envoi par <strong>courrier recommandé</strong> est recommandé.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un avocat pour des questions spécifiques.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle contestation amende." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, référence de l'amende et motifs." },
        { title: "Étape 3 – Envoyez dans les délais", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Référence amende", subtitle: "Numéro, date, autorité" },
        { title: "Motifs de contestation", subtitle: "Faits, arguments" },
        { title: "Demande", subtitle: "Annulation ou réduction" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à contester une amende ?"
      ctaDescription="Générez votre lettre de contestation en quelques minutes et envoyez-la dans les délais."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – respectez le délai indiqué"
      utmCampaign="contestation-amende"
      canonicalPath="/modeles/lettre-contestation-amende-suisse"
      excludeFromOtherModels="/modeles/lettre-contestation-amende-suisse"
      ctaSecondaryHref="/modeles/lettre-opposition-poursuite-suisse"
    />
  )
}
