import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre de motivation job étudiant Suisse – Emploi étudiant + PDF",
  description: "Modèle de lettre de motivation pour job étudiant en Suisse. Candidature emploi à temps partiel, job d'été. Export PDF, conforme.",
  alternates: { canonical: "/modeles/lettre-motivation-job-etudiant-suisse" },
  openGraph: {
    title: "Lettre de motivation job étudiant Suisse – Emploi étudiant + PDF",
    description: "Modèle de lettre de motivation pour job étudiant en Suisse. Candidature emploi à temps partiel.",
    url: "/modeles/lettre-motivation-job-etudiant-suisse",
  },
}

const faqData = [
  {
    question: "Comment rédiger une lettre de motivation pour un job étudiant ?",
    answer: "Mettez en avant votre disponibilité (horaires, jours), votre motivation, vos compétences (même extra-scolaires) et votre capacité à concilier études et travail. Soyez concis et professionnel.",
  },
  {
    question: "Faut-il mentionner que je suis étudiant dans la lettre ?",
    answer: "Oui, c'est pertinent pour un job étudiant. Indiquez votre formation, votre année d'études et vos disponibilités. L'employeur doit savoir que vous conciliez études et emploi.",
  },
  {
    question: "Lettre de motivation pour job d'été en Suisse ?",
    answer: "Adaptez la lettre à la saison : indiquez vos dates de disponibilité, votre motivation pour le secteur (restauration, retail, etc.) et toute expérience pertinente, même courte.",
  },
  {
    question: "Quelle longueur pour une lettre job étudiant ?",
    answer: "Une page A4 maximum. Les employeurs reçoivent beaucoup de candidatures – soyez direct, clair et mettez en avant ce qui vous distingue (disponibilité, motivation, réactivité).",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un conseiller en orientation.",
  },
]

export default function LettreMotivationJobEtudiantPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-motivation-job-etudiant-suisse"
      faqData={faqData}
      h1Title="Lettre de motivation job étudiant"
      h1Gradient="en Suisse"
      intro={{
        main: "Créez votre lettre de motivation pour job étudiant en Suisse en quelques minutes. Emploi à temps partiel, job d'été, petit boulot – personnalisée et exportable en PDF.",
        sub: "Adaptée aux emplois étudiants. Claire et efficace.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, les jobs étudiants (restauration, retail, administration, etc.) demandent souvent une <strong>lettre de motivation</strong> en plus du CV. Elle doit être <strong>courte et claire</strong>, mettre en avant votre <strong>disponibilité</strong> et votre motivation.
          </p>
          <p>
            Indiquez vos horaires possibles, votre formation en cours et toute expérience pertinente. Le ton doit être <strong>professionnel</strong> tout en restant authentique.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un conseiller en orientation.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre de motivation job étudiant adapté à votre recherche (temps partiel, job d'été, etc.)." },
        { title: "Étape 2 – Personnalisez votre lettre", description: "Remplissez vos informations, vos disponibilités et adaptez le contenu à l'entreprise et au poste." },
        { title: "Étape 3 – Exportez en PDF", description: "Téléchargez votre lettre en PDF et envoyez-la avec votre CV." },
      ]}
      letterContent={[
        { title: "Vos coordonnées", subtitle: "Nom, adresse, email, téléphone" },
        { title: "Objet et poste visé", subtitle: "Job étudiant, type de contrat" },
        { title: "Introduction", subtitle: "Contexte et motivation" },
        { title: "Disponibilités", subtitle: "Horaires, jours, période" },
        { title: "Compétences et expériences", subtitle: "Pertinentes pour le poste" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à postuler pour un job étudiant ?"
      ctaDescription="Générez votre lettre de motivation en quelques minutes et exportez-la en PDF."
      ctaButtonText="Créer ma lettre de motivation maintenant"
      ctaReassurance="Génération en quelques minutes – Export PDF inclus"
      utmCampaign="lettre-motivation-job-etudiant"
      canonicalPath="/modeles/lettre-motivation-job-etudiant-suisse"
      excludeFromOtherModels="/modeles/lettre-motivation-job-etudiant-suisse"
      ctaSecondaryHref="/modeles/lettre-motivation-etudiant-suisse"
    />
  )
}
