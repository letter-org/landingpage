import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande certificat de travail Suisse – Modèle conforme",
  description: "Demandez votre certificat de travail à votre employeur en Suisse. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-demande-certificat-travail-suisse" },
}

const faqData = [
  { question: "L'employeur doit-il délivrer un certificat de travail ?", answer: "Oui, en Suisse l'employeur est tenu de délivrer un certificat de travail à la demande du salarié, lors de la fin du contrat ou à tout moment pendant l'emploi." },
  { question: "Dois-je envoyer ma demande par courrier recommandé ?", answer: "Le courrier recommandé n'est pas obligatoire mais constitue une preuve en cas de litige sur la date de la demande." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-demande-certificat-travail"
      faqData={faqData}
      h1Title="Demande certificat de travail"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez votre certificat de travail à votre employeur en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit du travail suisse." }}
      savoirContent={<><p>En Suisse, l'employeur est <strong>tenu de délivrer un certificat de travail</strong> à la demande du salarié. La demande peut être faite par écrit. Un certificat qualificatif doit être rédigé de bonne foi. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle demande certificat de travail." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et celles de l'employeur." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Coordonnées employeur", subtitle: "Entreprise, adresse" },
        { title: "Demande formulée", subtitle: "Certificat de travail" },
        { title: "Période concernée", subtitle: "Si pertinent" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander votre certificat de travail ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-certificat-travail"
      canonicalPath="/modeles/lettre-demande-certificat-travail-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-certificat-travail-suisse"
      ctaSecondaryHref="/modeles/lettre-demission-suisse"
      howToName="Demande certificat de travail en Suisse"
    />
  )
}
