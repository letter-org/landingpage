import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre contestation augmentation loyer Suisse – Modèle conforme",
  description: "Contestez une augmentation de loyer en Suisse. Modèle conforme au droit du bail, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-augmentation-loyer-contestation-suisse" },
}

const faqData = [
  { question: "Dans quel délai contester une augmentation de loyer ?", answer: "Vous disposez généralement de 30 jours à compter de la réception de l'annonce pour contester par écrit. Vérifiez les délais selon votre canton." },
  { question: "Quels motifs pour contester une hausse de loyer ?", answer: "Une hausse peut être contestée si elle dépasse l'indice des loyers, si elle n'est pas justifiée par des travaux ou si elle est disproportionnée." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez une régie ou un professionnel du droit." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-augmentation-loyer-contestation"
      faqData={faqData}
      h1Title="Contestation augmentation loyer"
      h1Gradient="en Suisse"
      intro={{ main: "Contestez une augmentation de loyer en Suisse en quelques minutes. Votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit du bail suisse." }}
      savoirContent={<><p>En Suisse, la contestation d'une augmentation de loyer doit être effectuée <strong>par écrit</strong> dans les délais (souvent 30 jours). Les hausses sont encadrées par l'indice des loyers et le droit du bail. L'envoi par <strong>courrier recommandé</strong> est recommandé.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez une régie ou un professionnel du droit.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle contestation augmentation loyer." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, l'ancien et nouveau loyer, les motifs." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Références du bail", subtitle: "Adresse, bailleur" },
        { title: "Motifs de contestation", subtitle: "Indice, disproportion" },
        { title: "Demande", subtitle: "Maintien du loyer ou révision" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à contester une augmentation de loyer ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="contestation-augmentation-loyer"
      canonicalPath="/modeles/lettre-augmentation-loyer-contestation-suisse"
      excludeFromOtherModels="/modeles/lettre-augmentation-loyer-contestation-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-locataire-suisse"
    />
  )
}
