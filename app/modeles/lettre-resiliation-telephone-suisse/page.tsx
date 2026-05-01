import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation téléphone Suisse – Modèle conforme & envoi recommandé",
  description: "Résiliez votre abonnement téléphone en Suisse. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-resiliation-telephone-suisse" },
}

const faqData = [
  { question: "Quel délai pour résilier un abonnement téléphone ?", answer: "Le délai varie selon l'opérateur, souvent 1 à 3 mois. Vérifiez les conditions de votre contrat." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est recommandé pour disposer d'une preuve d'envoi et de réception." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-resiliation-telephone"
      faqData={faqData}
      h1Title="Résiliation téléphone"
      h1Gradient="en Suisse"
      intro={{ main: "Résiliez votre abonnement téléphone en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Sans déplacement. Conforme au droit suisse." }}
      savoirContent={<><p>En Suisse, la résiliation d'abonnement téléphone doit être effectuée <strong>par écrit</strong>. Les délais varient selon l'opérateur. L'envoi par <strong>courrier recommandé</strong> est recommandé.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle résiliation téléphone." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et références." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Références abonnement", subtitle: "Numéro client" },
        { title: "Date de résiliation", subtitle: "Date d'effet" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à résilier votre téléphone ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-telephone"
      canonicalPath="/modeles/lettre-resiliation-telephone-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-telephone-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-abonnement-mobile"
    />
  )
}
