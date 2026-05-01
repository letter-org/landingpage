import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre demande remboursement Suisse – Modèle conforme & envoi recommandé",
  description: "Demandez un remboursement en Suisse. Modèle conforme, envoi recommandé avec preuve. Produit défectueux, service non rendu, annulation.",
  alternates: { canonical: "/modeles/lettre-demande-remboursement-suisse" },
  openGraph: {
    title: "Lettre demande remboursement Suisse – Modèle conforme & envoi recommandé",
    description: "Demandez un remboursement en Suisse. Modèle conforme, envoi recommandé avec preuve.",
    url: "/modeles/lettre-demande-remboursement-suisse",
  },
}

const faqData = [
  {
    question: "Dans quel délai demander un remboursement en Suisse ?",
    answer: "Agissez rapidement. Pour un produit défectueux ou un service non rendu, la demande doit être faite dans des délais raisonnables. Consultez les conditions générales de vente et la loi sur les délais de garantie.",
  },
  {
    question: "Dois-je envoyer ma demande de remboursement par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige et prouve que vous avez formulé votre demande.",
  },
  {
    question: "Que doit contenir une lettre de demande de remboursement ?",
    answer: "Vos coordonnées, la référence de l'achat ou du contrat, les motifs de la demande (produit défectueux, service non rendu, annulation, etc.), le montant demandé et les pièces justificatives éventuelles.",
  },
  {
    question: "Quels sont mes droits en cas de produit défectueux ?",
    answer: "En Suisse, le vendeur est tenu de réparer, remplacer ou rembourser en cas de défaut. Vous pouvez exiger le remboursement si la réparation ou le remplacement n'est pas possible ou disproportionné.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.",
  },
]

export default function LettreDemandeRemboursementPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-demande-remboursement-suisse"
      faqData={faqData}
      h1Title="Lettre demande remboursement"
      h1Gradient="en Suisse"
      intro={{
        main: "Demandez un remboursement en Suisse en quelques minutes. Produit défectueux, service non rendu, annulation – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, une demande de remboursement doit être effectuée <strong>par écrit</strong>. Indiquez clairement les <strong>motifs</strong> (produit défectueux, service non rendu, annulation, erreur, etc.) et le <strong>montant</strong> demandé.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Joignez les pièces justificatives (facture, preuve d'achat, photos) si nécessaire.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou une association de consommateurs.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle de demande de remboursement adapté à votre situation." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, la référence de l'achat et les motifs de la demande." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Référence de l'achat", subtitle: "Facture, commande, contrat" },
        { title: "Motifs de la demande", subtitle: "Défaut, non-livraison, annulation" },
        { title: "Montant demandé", subtitle: "Somme à rembourser" },
        { title: "Pièces justificatives", subtitle: "Mention des annexes" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à demander un remboursement ?"
      ctaDescription="Générez votre lettre de demande de remboursement en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demande-remboursement"
      canonicalPath="/modeles/lettre-demande-remboursement-suisse"
      excludeFromOtherModels="/modeles/lettre-demande-remboursement-suisse"
      ctaSecondaryHref="/modeles/lettre-contestation-facture-suisse"
    />
  )
}
