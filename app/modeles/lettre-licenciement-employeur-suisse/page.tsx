import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre licenciement employeur Suisse – Modèle conforme & envoi recommandé",
  description: "Notifiez un licenciement en Suisse. Modèle conforme au droit du travail, envoi recommandé avec preuve. Notification écrite obligatoire.",
  alternates: { canonical: "/modeles/lettre-licenciement-employeur-suisse" },
}

const faqData = [
  { question: "Le licenciement doit-il être notifié par écrit en Suisse ?", answer: "Oui, le licenciement doit être notifié par écrit. La forme écrite est obligatoire pour sa validité." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
  { question: "Quel est le délai de préavis pour un licenciement ?", answer: "Le délai dépend du contrat et de l'ancienneté : généralement 1 mois la 1ère année, 2 mois de 2 à 9 ans, 3 mois à partir de 10 ans." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-licenciement-employeur"
      faqData={faqData}
      h1Title="Lettre licenciement employeur"
      h1Gradient="en Suisse"
      intro={{ main: "Notifiez un licenciement en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.", sub: "Conforme au droit du travail suisse." }}
      savoirContent={<><p>En Suisse, le <strong>licenciement doit être notifié par écrit</strong>. Le délai de préavis dépend de votre contrat et de l'ancienneté : généralement <strong>1 mois la première année</strong>, 2 mois de 2 à 9 ans, 3 mois à partir de 10 ans.</p><p>L'envoi par <strong>courrier recommandé</strong> constitue une preuve en cas de litige sur la date de notification.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un professionnel du droit ou votre syndicat.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre licenciement employeur." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez les coordonnées de l'employeur et du salarié." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
      ]}
      letterContent={[
        { title: "Coordonnées employeur", subtitle: "Entreprise, adresse" },
        { title: "Coordonnées salarié", subtitle: "Nom, adresse" },
        { title: "Notification de licenciement", subtitle: "Date d'effet, motif si requis" },
        { title: "Délai de préavis", subtitle: "Respect des délais légaux" },
        { title: "Signature", subtitle: "Employeur ou représentant" },
      ]}
      ctaTitle="Prêt à notifier un licenciement ?"
      ctaDescription="Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="licenciement-employeur"
      canonicalPath="/modeles/lettre-licenciement-employeur-suisse"
      excludeFromOtherModels="/modeles/lettre-licenciement-employeur-suisse"
      ctaSecondaryHref="/modeles/lettre-demission-suisse"
      howToName="Lettre licenciement employeur en Suisse"
    />
  )
}
