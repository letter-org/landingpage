import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre changement d'adresse postal Suisse – Annonce déménagement",
  description: "Annoncez votre déménagement en Suisse. Lettre de changement d'adresse pour la poste, banques, assurances. Modèle conforme, envoi recommandé.",
  alternates: { canonical: "/modeles/lettre-demenagement-postal-suisse" },
  openGraph: {
    title: "Lettre changement d'adresse postal Suisse – Annonce déménagement",
    description: "Annoncez votre déménagement en Suisse. Lettre de changement d'adresse.",
    url: "/modeles/lettre-demenagement-postal-suisse",
  },
}

const faqData = [
  {
    question: "Qui dois-je prévenir de mon changement d'adresse en Suisse ?",
    answer: "La poste (pour le courrier), votre banque, vos assurances, votre employeur, l'administration (AVS, impôts), les abonnements (téléphone, Internet), et tout organisme qui vous envoie du courrier.",
  },
  {
    question: "Dois-je envoyer mon annonce de changement d'adresse par courrier recommandé ?",
    answer: "Pour les organismes importants (banque, assurances, administration), le courrier recommandé est recommandé pour disposer d'une preuve. Pour d'autres, un courrier simple ou un formulaire en ligne peut suffire.",
  },
  {
    question: "Que doit contenir une lettre de changement d'adresse ?",
    answer: "Vos coordonnées actuelles (ancienne adresse), votre nouvelle adresse, la date d'effet du déménagement, et éventuellement vos références client (numéro de compte, etc.).",
  },
  {
    question: "Quand envoyer les annonces de changement d'adresse ?",
    answer: "Idéalement 2 à 4 semaines avant le déménagement pour laisser le temps aux organismes de mettre à jour leurs fichiers. Pour la poste, vous pouvez aussi souscrire au service de réexpédition.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez la poste ou les organismes concernés.",
  },
]

export default function LettreDemenagementPostalPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-demenagement-postal-suisse"
      faqData={faqData}
      h1Title="Lettre changement d'adresse postal"
      h1Gradient="en Suisse"
      intro={{
        main: "Annoncez votre déménagement en Suisse en quelques minutes. Changez votre adresse auprès de la poste, banques, assurances et autres organismes – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme aux usages suisses.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, un changement d'adresse doit être annoncé <strong>par écrit</strong> aux organismes qui vous envoient du courrier : <strong>poste</strong>, <strong>banque</strong>, <strong>assurances</strong>, <strong>employeur</strong>, <strong>administration</strong>, abonnements.
          </p>
          <p>
            Pour les organismes importants, l'envoi par <strong>courrier recommandé est recommandé</strong> pour disposer d'une preuve. La poste propose aussi un <strong>service de réexpédition</strong> temporaire.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez la poste ou les organismes concernés.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle de changement d'adresse adapté (poste, banque, assurance, etc.)." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez votre ancienne et nouvelle adresse, la date d'effet et les références du destinataire." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, ancienne adresse" },
        { title: "Nouvelle adresse", subtitle: "Adresse complète à partir de la date" },
        { title: "Date d'effet", subtitle: "Date du déménagement" },
        { title: "Références", subtitle: "Numéro client, compte si pertinent" },
        { title: "Destinataire", subtitle: "Organisme à informer" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à annoncer votre déménagement ?"
      ctaDescription="Générez votre lettre de changement d'adresse en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="demenagement-postal"
      canonicalPath="/modeles/lettre-demenagement-postal-suisse"
      excludeFromOtherModels="/modeles/lettre-demenagement-postal-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-locataire-suisse"
    />
  )
}
