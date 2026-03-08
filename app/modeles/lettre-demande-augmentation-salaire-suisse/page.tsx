import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande augmentation salaire Suisse – Modèle conforme",
  description: "Demandez une augmentation de salaire à votre employeur en Suisse. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-demande-augmentation-salaire-suisse" },
}

const faqData = [
  { question: "Dois-je demander une augmentation par écrit ?", answer: "Une demande écrite est recommandée pour garder une trace et formaliser votre demande. Elle peut être envoyée par courrier ou remise en main propre." },
  { question: "Le courrier recommandé est-il utile ?", answer: "Le courrier recommandé constitue une preuve de la date de réception de votre demande par l'employeur." },
  { question: "Que doit contenir une lettre de demande d'augmentation ?", answer: "Vos coordonnées, celles de l'employeur, votre poste, vos arguments (ancienneté, responsabilités, marché) et le montant ou pourcentage souhaité." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-demande-augmentation"
      faqData={faqData}
      h1Title="Demande augmentation salaire"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez une augmentation de salaire à votre employeur en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit du travail suisse." }}
      savoirContent={<><p>En Suisse, la demande d'augmentation peut être faite <strong>par écrit</strong>. Une lettre formelle permet de garder une trace et de structurer vos arguments (ancienneté, responsabilités, marché).</p><p>L'envoi par <strong>courrier recommandé</strong> constitue une preuve de la date de réception par l'employeur.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle demande augmentation salaire." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, celles de l'employeur et vos arguments." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, poste" },
        { title: "Coordonnées employeur", subtitle: "Entreprise, adresse" },
        { title: "Demande formulée", subtitle: "Augmentation de salaire" },
        { title: "Arguments", subtitle: "Ancienneté, responsabilités, marché" },
        { title: "Montant ou pourcentage", subtitle: "Souhaité" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander une augmentation ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-augmentation-salaire"
      canonicalPath="/modeles/lettre-demande-augmentation-salaire-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-augmentation-salaire-suisse"
      ctaSecondaryHref="/modeles/lettre-demission-suisse"
      howToName="Demande augmentation salaire en Suisse"
    />
  )
}
