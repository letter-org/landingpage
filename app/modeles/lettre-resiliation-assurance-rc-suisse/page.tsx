import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation assurance RC Suisse – Modèle conforme & envoi recommandé",
  description: "Résiliez votre assurance RC (responsabilité civile) en Suisse. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-resiliation-assurance-rc-suisse" },
}

const faqData = [
  { question: "Qu'est-ce que l'assurance RC en Suisse ?", answer: "L'assurance RC (responsabilité civile) couvre les dommages que vous pourriez causer à autrui. Elle peut concerner le ménage, la voiture, etc." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez votre assureur pour des questions spécifiques." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-resiliation-assurance-rc"
      faqData={faqData}
      h1Title="Résiliation assurance RC"
      h1Gradient="en Suisse"
      intro={{ main: "Résiliez votre assurance RC (responsabilité civile) en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Sans déplacement. Conforme au droit suisse." }}
      savoirContent={<><p>En Suisse, la résiliation d'assurance RC doit être effectuée <strong>par écrit</strong>. Les délais varient selon le type (RC ménage, RC auto). L'envoi par <strong>courrier recommandé</strong> est recommandé.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez votre assureur pour des questions spécifiques.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle résiliation assurance RC." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et références du contrat." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Références contrat", subtitle: "Numéro de police" },
        { title: "Date de résiliation", subtitle: "Date d'effet" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à résilier votre assurance RC ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-assurance-rc"
      canonicalPath="/modeles/lettre-resiliation-assurance-rc-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-assurance-rc-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-assurance-menage-rc"
    />
  )
}
