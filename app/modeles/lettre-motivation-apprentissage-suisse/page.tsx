import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre de motivation apprentissage Suisse – Candidature formation + PDF",
  description: "Modèle de lettre de motivation pour apprentissage en Suisse. Candidature CFC, formation professionnelle. Export PDF, conforme.",
  alternates: { canonical: "/modeles/lettre-motivation-apprentissage-suisse" },
}

const faqData = [
  { question: "Comment rédiger une lettre de motivation pour un apprentissage ?", answer: "Mettez en avant votre motivation pour le métier, votre parcours scolaire, vos stages ou expériences, et votre capacité à apprendre. Adaptez à la profession et à l'entreprise." },
  { question: "Quelle longueur pour une lettre de motivation apprentissage ?", answer: "Une page A4 maximum. Les entreprises reçoivent beaucoup de candidatures – soyez direct, clair et montrez votre motivation pour le métier." },
  { question: "NextLetter fournit-il des conseils juridiques ?", answer: "Non, NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un conseiller en orientation." },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-motivation-apprentissage"
      faqData={faqData}
      h1Title="Lettre de motivation apprentissage"
      h1Gradient="en Suisse"
      intro={{ main: "Créez votre lettre de motivation pour apprentissage en Suisse en quelques minutes. CFC, formation professionnelle – personnalisée et exportable en PDF.", sub: "Adaptée aux attentes suisses. Claire et motivante." }}
      savoirContent={<><p>En Suisse, la lettre de motivation pour apprentissage est <strong>attendue</strong> avec le CV. Elle doit montrer votre <strong>motivation pour le métier</strong>, votre parcours scolaire et votre capacité à apprendre. Une page A4 maximum.</p><p className="text-sm italic pt-4 border-t border-border">⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Consultez un conseiller en orientation.</p></>}
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre de motivation apprentissage." },
        { title: "Étape 2 – Personnalisez votre lettre", description: "Adaptez le contenu à la profession et à l'entreprise." },
        { title: "Étape 3 – Exportez en PDF", description: "Téléchargez votre lettre en PDF et envoyez-la avec votre CV." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
        { title: "Objet et profession", subtitle: "Apprentissage visé" },
        { title: "Introduction", subtitle: "Motivation pour le métier" },
        { title: "Développement", subtitle: "Parcours, compétences" },
        { title: "Conclusion", subtitle: "Disponibilité, remerciements" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à postuler pour un apprentissage ?"
      ctaDescription="Générez votre lettre de motivation apprentissage en quelques minutes et exportez-la en PDF."
      ctaButtonText="Créer ma lettre de motivation maintenant"
      ctaReassurance="Génération en quelques minutes – Export PDF inclus"
      utmCampaign="lettre-motivation-apprentissage"
      canonicalPath="/modeles/lettre-motivation-apprentissage-suisse"
      excludeFromOtherModels="/modeles/lettre-motivation-apprentissage-suisse"
      ctaSecondaryHref="/modeles/lettre-motivation-stage-suisse"
    />
  )
}
