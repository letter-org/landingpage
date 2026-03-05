import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre de motivation étudiant Suisse – Candidature études + PDF",
  description: "Modèle de lettre de motivation pour étudiant en Suisse. Candidature formation, stage, échange. Export PDF, conforme aux attentes suisses.",
  alternates: { canonical: "/modeles/lettre-motivation-etudiant-suisse" },
  openGraph: {
    title: "Lettre de motivation étudiant Suisse – Candidature études + PDF",
    description: "Modèle de lettre de motivation pour étudiant en Suisse. Candidature formation, stage, échange.",
    url: "/modeles/lettre-motivation-etudiant-suisse",
  },
}

const faqData = [
  {
    question: "Comment adapter une lettre de motivation pour un étudiant ?",
    answer: "Une lettre de motivation étudiante doit mettre en avant votre parcours académique, vos projets, votre motivation pour la formation ou le stage, et vos compétences transférables. Adaptez le ton à votre niveau (bac, bachelor, master).",
  },
  {
    question: "Quelle longueur pour une lettre de motivation étudiante ?",
    answer: "En Suisse, une page A4 maximum est recommandée. Soyez concis : introduction accrocheuse, développement sur votre profil et motivation, conclusion qui relance.",
  },
  {
    question: "Faut-il mentionner le manque d'expérience dans une lettre étudiante ?",
    answer: "Plutôt que de souligner l'absence d'expérience, mettez en avant vos stages, projets, engagements associatifs, compétences acquises en cours et votre motivation à apprendre.",
  },
  {
    question: "Lettre de motivation pour candidature spontanée étudiante ?",
    answer: "Oui, une candidature spontanée peut fonctionner pour un stage ou un premier emploi. Adaptez la lettre à l'entreprise et au secteur, montrez votre intérêt et ce que vous pouvez apporter.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un conseiller en orientation ou un professionnel du droit.",
  },
]

export default function LettreMotivationEtudiantPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-motivation-etudiant-suisse"
      faqData={faqData}
      h1Title="Lettre de motivation étudiant"
      h1Gradient="en Suisse"
      intro={{
        main: "Créez votre lettre de motivation pour étudiant en Suisse en quelques minutes. Candidature formation, stage, échange universitaire ou premier emploi – personnalisée et exportable en PDF.",
        sub: "Adaptée aux attentes suisses. Professionnelle et authentique.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, la lettre de motivation étudiante est <strong>souvent attendue</strong> pour les candidatures en formation, stage ou premier emploi. Elle doit être <strong>adaptée au contexte</strong> (école, entreprise, université) et faire <strong>une page A4 maximum</strong>.
          </p>
          <p>
            Mettez en avant votre parcours académique, vos projets, votre motivation et vos compétences transférables. Le ton doit être <strong>professionnel mais authentique</strong>, sans surjouer l'expérience.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un conseiller en orientation.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le modèle", description: "Sélectionnez le modèle lettre de motivation étudiant adapté (formation, stage, job étudiant, échange)." },
        { title: "Étape 2 – Personnalisez votre lettre", description: "Remplissez vos informations, adaptez le contenu à l'établissement ou à l'entreprise, et personnalisez le ton." },
        { title: "Étape 3 – Exportez en PDF", description: "Téléchargez votre lettre en PDF et envoyez-la avec votre CV et vos documents." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, email, téléphone" },
        { title: "Objet et destinataire", subtitle: "Formation, stage ou poste visé" },
        { title: "Introduction accrocheuse", subtitle: "Contexte et motivation" },
        { title: "Développement personnalisé", subtitle: "Parcours, compétences, projets" },
        { title: "Conclusion qui relance", subtitle: "Disponibilité et remerciements" },
        { title: "Signature", subtitle: "Votre nom et signature" },
      ]}
      ctaTitle="Prêt à créer votre lettre de motivation étudiante ?"
      ctaDescription="Générez votre lettre personnalisée en quelques minutes et exportez-la en PDF."
      ctaButtonText="Créer ma lettre de motivation maintenant"
      ctaReassurance="Génération en quelques minutes – Export PDF inclus"
      utmCampaign="lettre-motivation-etudiant"
      canonicalPath="/modeles/lettre-motivation-etudiant-suisse"
      excludeFromOtherModels="/modeles/lettre-motivation-etudiant-suisse"
      ctaSecondaryHref="/modeles/lettre-motivation-job-etudiant-suisse"
    />
  )
}
