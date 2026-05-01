import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre opposition prélèvement Suisse – Annuler mandat & envoi recommandé",
  description: "Opposez-vous à un prélèvement automatique en Suisse. Annulez votre mandat de prélèvement. Modèle conforme, envoi recommandé avec preuve.",
  alternates: { canonical: "/modeles/lettre-opposition-prelevement-suisse" },
  openGraph: {
    title: "Lettre opposition prélèvement Suisse – Annuler mandat & envoi recommandé",
    description: "Opposez-vous à un prélèvement automatique en Suisse. Modèle conforme, envoi recommandé.",
    url: "/modeles/lettre-opposition-prelevement-suisse",
  },
}

const faqData = [
  {
    question: "Comment annuler un prélèvement automatique en Suisse ?",
    answer: "Vous devez informer par écrit le créancier (ou le prestataire) de votre opposition au prélèvement. Envoyez une lettre recommandée pour preuve. Vous pouvez aussi informer votre banque pour bloquer les futurs prélèvements.",
  },
  {
    question: "Dois-je envoyer ma lettre d'opposition par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige si des prélèvements continuent.",
  },
  {
    question: "Que doit contenir une lettre d'opposition au prélèvement ?",
    answer: "Vos coordonnées, le numéro de mandat ou de référence, la date à partir de laquelle vous opposez au prélèvement, et une formulation claire d'annulation du mandat de prélèvement.",
  },
  {
    question: "Puis-je aussi informer ma banque ?",
    answer: "Oui, vous pouvez demander à votre banque de ne plus accepter les prélèvements du créancier concerné. Une lettre au créancier reste toutefois recommandée pour officialiser l'annulation.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez votre banque ou un professionnel du droit.",
  },
]

export default function LettreOppositionPrelevementPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-opposition-prelevement-suisse"
      faqData={faqData}
      h1Title="Lettre opposition prélèvement"
      h1Gradient="en Suisse"
      intro={{
        main: "Opposez-vous à un prélèvement automatique en Suisse en quelques minutes. Annulez votre mandat de prélèvement – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, l'opposition à un prélèvement automatique (LSV, mandat de prélèvement) doit être effectuée <strong>par écrit</strong> auprès du créancier. Vous pouvez aussi informer votre banque pour bloquer les futurs prélèvements.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Indiquez clairement la date à partir de laquelle vous opposez au prélèvement.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez votre banque ou un professionnel du droit.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle d'opposition au prélèvement adapté à votre situation." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, le numéro de mandat et la date d'opposition." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Référence du mandat", subtitle: "Numéro de prélèvement, créancier" },
        { title: "Date d'opposition", subtitle: "À partir de quelle date" },
        { title: "Formulation d'annulation", subtitle: "Annulation du mandat de prélèvement" },
        { title: "Coordonnées du créancier", subtitle: "Destinataire de la lettre" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à vous opposer à un prélèvement ?"
      ctaDescription="Générez votre lettre d'opposition en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="opposition-prelevement"
      canonicalPath="/modeles/lettre-opposition-prelevement-suisse"
      excludeFromOtherModels="/modeles/lettre-opposition-prelevement-suisse"
      ctaSecondaryHref="/modeles/lettre-contestation-facture-suisse"
    />
  )
}
