import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation bail propriétaire Suisse – Modèle conforme & envoi recommandé",
  description: "Résiliez un bail en tant que propriétaire en Suisse. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-resiliation-bail-proprietaire-suisse" },
}

const faqData = [
  { question: "Quel délai pour résilier un bail en tant que propriétaire ?", answer: "Le délai est généralement de 3 mois. La résiliation doit respecter les dates d'échéance (fin de trimestre)." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-resiliation-bail-proprietaire"
      faqData={faqData}
      h1Title="Résiliation bail propriétaire"
      h1Gradient="en Suisse"
      intro={{ main: "Résiliez un bail en tant que propriétaire en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Sans déplacement. Conforme au droit suisse." }}
      savoirContent={<><p>En Suisse, la résiliation de bail par le propriétaire doit être effectuée <strong>par écrit</strong>. Le délai est généralement de <strong>3 mois</strong>. Les motifs de résiliation sont encadrés par la loi. L'envoi par <strong>courrier recommandé</strong> est recommandé.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle résiliation bail propriétaire." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et celles du locataire." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Coordonnées du locataire", subtitle: "Adresse du logement" },
        { title: "Date de résiliation", subtitle: "Date d'effet, respect préavis" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à résilier en tant que propriétaire ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-bail-proprietaire"
      canonicalPath="/modeles/lettre-resiliation-bail-proprietaire-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-bail-proprietaire-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-bailleur-suisse"
    />
  )
}
