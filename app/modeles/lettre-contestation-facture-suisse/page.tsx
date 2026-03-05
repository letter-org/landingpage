import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre contestation facture Suisse – Modèle conforme & envoi recommandé",
  description: "Contestez une facture en Suisse. Modèle conforme, envoi recommandé avec preuve. Erreur, double facturation, service non fourni.",
  alternates: { canonical: "/modeles/lettre-contestation-facture-suisse" },
  openGraph: {
    title: "Lettre contestation facture Suisse – Modèle conforme & envoi recommandé",
    description: "Contestez une facture en Suisse. Modèle conforme, envoi recommandé avec preuve.",
    url: "/modeles/lettre-contestation-facture-suisse",
  },
}

const faqData = [
  {
    question: "Dans quel délai contester une facture en Suisse ?",
    answer: "Il n'y a pas de délai légal fixe, mais agissez rapidement. Dès que vous constatez une erreur, envoyez votre contestation par écrit. Conservez une copie et envoyez par courrier recommandé pour preuve.",
  },
  {
    question: "Dois-je envoyer ma contestation de facture par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige et prouve que vous avez contesté dans les délais.",
  },
  {
    question: "Que doit contenir une lettre de contestation de facture ?",
    answer: "Vos coordonnées, la référence de la facture contestée, les motifs de contestation (erreur, double facturation, service non fourni, etc.), les pièces justificatives éventuelles et la demande de régularisation.",
  },
  {
    question: "Puis-je refuser de payer une facture contestée ?",
    answer: "En cas de contestation légitime, vous pouvez suspendre le paiement de la partie contestée tout en payant le reste. Indiquez clairement dans votre lettre ce que vous contestez et pourquoi.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.",
  },
]

export default function LettreContestationFacturePage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-contestation-facture-suisse"
      faqData={faqData}
      h1Title="Lettre contestation facture"
      h1Gradient="en Suisse"
      intro={{
        main: "Contestez une facture en Suisse en quelques minutes. Erreur, double facturation, service non fourni – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, la contestation d'une facture doit être effectuée <strong>par écrit</strong>. Indiquez clairement les <strong>motifs</strong> (erreur de montant, double facturation, service non fourni, etc.) et joignez les <strong>pièces justificatives</strong> si nécessaire.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Agissez rapidement après réception de la facture contestée.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle de contestation de facture adapté à votre situation." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, la référence de la facture et les motifs de contestation." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Référence de la facture", subtitle: "Numéro, date, montant" },
        { title: "Motifs de contestation", subtitle: "Erreur, double facturation, etc." },
        { title: "Demande de régularisation", subtitle: "Correction, remboursement, annulation" },
        { title: "Pièces justificatives", subtitle: "Mention des annexes éventuelles" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à contester une facture ?"
      ctaDescription="Générez votre lettre de contestation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="contestation-facture"
      canonicalPath="/modeles/lettre-contestation-facture-suisse"
      excludeFromOtherModels="/modeles/lettre-contestation-facture-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-remboursement-suisse"
    />
  )
}
