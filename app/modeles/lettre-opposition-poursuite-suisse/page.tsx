import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre opposition poursuite Suisse – Modèle conforme & envoi recommandé",
  description: "Opposez-vous à une poursuite en Suisse. Modèle conforme, envoi recommandé avec preuve. Contestation commandement de payer.",
  alternates: { canonical: "/modeles/lettre-opposition-poursuite-suisse" },
}

const faqData = [
  { question: "Dans quel délai faire opposition à une poursuite ?", answer: "Le délai d'opposition est généralement de 10 jours à compter de la notification du commandement de payer. Ce délai est impératif." },
  { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi dans les délais." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez immédiatement un avocat ou un service de conseil juridique." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-opposition-poursuite"
      faqData={faqData}
      h1Title="Lettre opposition poursuite"
      h1Gradient="en Suisse"
      intro={{ main: "Opposez-vous à une poursuite en Suisse en quelques minutes. Votre lettre d'opposition est générée et envoyée par courrier recommandé avec preuve. Agissez dans les délais.", sub: "Conforme au droit des poursuites suisse." }}
      savoirContent={<><p>En Suisse, l'opposition à une poursuite doit être déposée dans un <strong>délai de 10 jours</strong> à compter de la notification du commandement de payer. Ce délai est <strong>impératif</strong>. L'opposition peut être faite par écrit auprès de l'office des poursuites. Consultez un avocat ou un service de conseil juridique.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour une poursuite, consultez immédiatement un avocat ou un service de conseil juridique.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle opposition poursuite." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées et les références de la poursuite." },
        { title: "Étape 3 – Envoyez dans les délais", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Agissez vite : délai 10 jours." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Références poursuite", subtitle: "Numéro, office des poursuites" },
        { title: "Opposition formulée", subtitle: "Motifs éventuels" },
        { title: "Date", subtitle: "Dans le délai de 10 jours" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à faire opposition à une poursuite ?"
      ctaDescription="Générez votre lettre d'opposition en quelques minutes. Agissez dans les 10 jours."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – délai 10 jours impératif"
      utmCampaign="opposition-poursuite"
      canonicalPath="/modeles/lettre-opposition-poursuite-suisse"
      excludeFromOtherModels="/modeles/lettre-opposition-poursuite-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-delai-paiement-suisse"
      howToName="Lettre opposition poursuite en Suisse"
    />
  )
}
