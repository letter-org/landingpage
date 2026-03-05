import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre réclamation consommateur Suisse – Défense des droits & envoi recommandé",
  description: "Réclamez vos droits en tant que consommateur en Suisse. Modèle conforme, envoi recommandé avec preuve. Non-respect garantie, litige commercial.",
  alternates: { canonical: "/modeles/lettre-reclamation-consommateur-suisse" },
  openGraph: {
    title: "Lettre réclamation consommateur Suisse – Défense des droits & envoi recommandé",
    description: "Réclamez vos droits en tant que consommateur en Suisse. Modèle conforme, envoi recommandé.",
    url: "/modeles/lettre-reclamation-consommateur-suisse",
  },
}

const faqData = [
  {
    question: "Quand envoyer une réclamation consommateur en Suisse ?",
    answer: "Dès que vous constatez un problème : produit défectueux, service non conforme, non-respect de la garantie, publicité trompeuse, etc. Agissez rapidement pour préserver vos droits.",
  },
  {
    question: "Dois-je envoyer ma réclamation par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela renforce votre position en cas de litige ou de procédure.",
  },
  {
    question: "Que doit contenir une lettre de réclamation consommateur ?",
    answer: "Vos coordonnées, la description du problème, les références (achat, contrat), votre demande (réparation, remplacement, remboursement) et les pièces justificatives. Restez factuel et courtois.",
  },
  {
    question: "Puis-je contacter une association de consommateurs ?",
    answer: "Oui, en Suisse, la FRC (Fédération romande des consommateurs) et d'autres associations peuvent vous conseiller. Une lettre de réclamation formelle reste souvent la première étape recommandée.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.",
  },
]

export default function LettreReclamationConsommateurPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-reclamation-consommateur-suisse"
      faqData={faqData}
      h1Title="Lettre réclamation consommateur"
      h1Gradient="en Suisse"
      intro={{
        main: "Réclamez vos droits en tant que consommateur en Suisse en quelques minutes. Produit défectueux, service non conforme, non-respect de la garantie – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, le consommateur dispose de <strong>droits protégés par la loi</strong>. Une réclamation écrite est souvent la première étape pour faire valoir vos droits : garantie, conformité, information.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Restez <strong>factuel et courtois</strong>, indiquez clairement votre demande.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle de réclamation consommateur adapté à votre situation." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, décrivez le problème et formulez votre demande." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Description du problème", subtitle: "Faits, dates, références" },
        { title: "Références de l'achat", subtitle: "Facture, contrat, bon de commande" },
        { title: "Demande formulée", subtitle: "Réparation, remplacement, remboursement" },
        { title: "Pièces justificatives", subtitle: "Mention des annexes" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à réclamer vos droits ?"
      ctaDescription="Générez votre lettre de réclamation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="reclamation-consommateur"
      canonicalPath="/modeles/lettre-reclamation-consommateur-suisse"
      excludeFromOtherModels="/modeles/lettre-reclamation-consommateur-suisse"
      ctaSecondaryHref="/modeles/lettre-demande-remboursement-suisse"
    />
  )
}
