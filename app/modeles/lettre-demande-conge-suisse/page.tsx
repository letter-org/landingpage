import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande congé Suisse – Modèle conforme",
  description: "Demandez vos congés à votre employeur en Suisse. Modèle conforme au droit du travail, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-demande-conge-suisse" },
}

const faqData = [
  { question: "Dois-je demander mes congés par écrit ?", answer: "Selon l'entreprise, une demande écrite peut être requise. Elle constitue une trace utile et évite les malentendus." },
  { question: "Quel délai pour demander des congés en Suisse ?", answer: "Le délai dépend du contrat et des usages. Souvent, une demande anticipée est attendue (ex. plusieurs semaines à l'avance)." },
  { question: "Le courrier recommandé est-il utile pour une demande de congé ?", answer: "Le courrier recommandé constitue une preuve de la date de réception de votre demande par l'employeur." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-demande-conge"
      faqData={faqData}
      h1Title="Demande congé"
      h1Gradient="en Suisse"
      intro={{ main: "Demandez vos congés à votre employeur en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit du travail suisse." }}
      savoirContent={<><p>En Suisse, la demande de congé peut être faite <strong>par écrit</strong>. Le délai et les modalités dépendent de votre contrat et des usages de l'entreprise.</p><p>Une demande écrite constitue une trace utile et évite les malentendus sur les dates. L'envoi par <strong>courrier recommandé</strong> constitue une preuve.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle demande congé." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, celles de l'employeur et les dates souhaitées." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, poste" },
        { title: "Coordonnées employeur", subtitle: "Entreprise, adresse" },
        { title: "Demande de congé", subtitle: "Dates souhaitées" },
        { title: "Période", subtitle: "Début et fin des congés" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander vos congés ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-conge"
      canonicalPath="/modeles/lettre-demande-conge-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-conge-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-certificat-travail-suisse"
      howToName="Demande congé en Suisse"
    />
  )
}
