import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation bail Suisse – Locataire ou bailleur, modèle conforme",
  description: "Résiliez votre bail en Suisse (locataire ou bailleur). Modèle conforme, envoi recommandé avec preuve. Délai 3 mois, dates d'échéance.",
  alternates: { canonical: "/modeles/lettre-resiliation-bail-suisse" },
  openGraph: {
    title: "Lettre résiliation bail Suisse – Locataire ou bailleur, modèle conforme",
    description: "Résiliez votre bail en Suisse. Modèle conforme, envoi recommandé avec preuve.",
    url: "/modeles/lettre-resiliation-bail-suisse",
  },
}

const faqData = [
  {
    question: "Quel est le délai de préavis pour résilier un bail en Suisse ?",
    answer: "Le délai de préavis est généralement de 3 mois, mais peut varier selon le type de bail et les clauses contractuelles. La résiliation doit respecter les dates d'échéance (fin de trimestre).",
  },
  {
    question: "Dois-je envoyer ma résiliation de bail par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige sur la date de réception.",
  },
  {
    question: "Quelle différence entre résiliation locataire et bailleur ?",
    answer: "Le locataire résilie pour quitter le logement ; le bailleur résilie pour récupérer le logement (ou pour d'autres motifs prévus par la loi). Chaque situation a son propre modèle.",
  },
  {
    question: "Que doit contenir une lettre de résiliation de bail ?",
    answer: "Vos coordonnées, celles du bailleur/locataire, la date de résiliation, la date de libération des lieux, et l'adresse du logement. Le modèle NextLetter inclut tous les éléments essentiels.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit.",
  },
]

export default function LettreResiliationBailPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-resiliation-bail-suisse"
      faqData={faqData}
      h1Title="Lettre résiliation bail"
      h1Gradient="en Suisse"
      intro={{
        main: "Résiliez votre bail en Suisse en quelques minutes. Que vous soyez locataire ou bailleur, votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, la résiliation de bail doit être effectuée <strong>par écrit</strong>. Le délai de préavis est généralement de <strong>3 mois</strong>, et la résiliation doit respecter les <strong>dates d'échéance</strong> du bail (généralement fin de trimestre : 31 mars, 30 juin, 30 septembre, 31 décembre).
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Choisissez le modèle adapté à votre situation : <strong>locataire</strong> (vous quittez) ou <strong>bailleur</strong> (vous récupérez le logement).
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez votre situation", description: "Sélectionnez le modèle : résiliation en tant que locataire ou en tant que bailleur." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, celles du bailleur ou du locataire, et les dates de résiliation." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Coordonnées du bailleur ou locataire", subtitle: "Adresse et références" },
        { title: "Adresse du logement", subtitle: "Logement concerné par la résiliation" },
        { title: "Dates de résiliation", subtitle: "Date d'effet et respect du préavis" },
        { title: "Formulation conforme", subtitle: "Texte adapté au droit suisse" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      optionalContent={
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Délais de résiliation</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Type de bail</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Délai de préavis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Bail à durée indéterminée</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">3 mois, fin de trimestre</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Bail à durée déterminée</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Selon contrat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      }
      ctaTitle="Prêt à résilier votre bail ?"
      ctaDescription="Générez votre lettre de résiliation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-bail"
      canonicalPath="/modeles/lettre-resiliation-bail-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-bail-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-locataire-suisse"
    />
  )
}
