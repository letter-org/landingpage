import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre de motivation stage Suisse – Candidature stage + PDF",
  description: "Modèle de lettre de motivation pour stage en Suisse. Candidature stage obligatoire ou volontaire. Export PDF, conforme.",
  alternates: { canonical: "/modeles/lettre-motivation-stage-suisse" },
}

const faqData = [
  { question: "Comment rédiger une lettre de motivation pour un stage ?", answer: "Mettez en avant votre motivation pour l'entreprise et le secteur, vos compétences acquises en formation, et ce que vous souhaitez apprendre. Adaptez au poste et à l'entreprise." },
  { question: "Quelle longueur pour une lettre de motivation stage ?", answer: "Une page A4 maximum. Soyez concis : introduction, développement sur votre profil et motivation, conclusion qui relance." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un conseiller en orientation." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-motivation-stage"
      faqData={faqData}
      h1Title="Lettre de motivation stage"
      h1Gradient="en Suisse"
      intro={{ main: "Créez votre lettre de motivation pour stage en Suisse en quelques minutes. Stage obligatoire ou volontaire – personnalisée et exportable en PDF.", sub: "Adaptée aux attentes suisses. Professionnelle et authentique." }}
      savoirContent={<><p>En Suisse, la lettre de motivation pour stage est <strong>souvent attendue</strong> avec le CV. Elle doit être <strong>adaptée à l'entreprise</strong> et au secteur, mettre en avant votre motivation et ce que vous souhaitez apprendre. Une page A4 maximum.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un conseiller en orientation.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre de motivation stage." },
        { title: "Étape 2 – Personnalisez votre lettre", description: "Adaptez le contenu à l'entreprise et au stage visé." },
        { title: "Étape 3 – Exportez en PDF", description: "Téléchargez votre lettre en PDF et envoyez-la avec votre CV." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Objet et entreprise", subtitle: "Stage visé" },
        { title: "Introduction", subtitle: "Contexte et motivation" },
        { title: "Développement", subtitle: "Compétences, parcours" },
        { title: "Conclusion", subtitle: "Disponibilité, remerciements" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à postuler pour un stage ?"
      ctaDescription="Générez votre lettre de motivation stage en quelques minutes et exportez-la en PDF."
      ctaButtonText="Créer ma lettre de motivation maintenant"
      ctaReassurance="Génération en quelques minutes – Export PDF inclus"
      utmCampaign="lettre-motivation-stage"
      canonicalPath="/modeles/lettre-motivation-stage-suisse"
      excludeFromOtherModels="/modeles/lettre-motivation-stage-suisse"
      ctaSecondaryHref="/modeles/lettre-motivation-apprentissage-suisse"
    />
  )
}
