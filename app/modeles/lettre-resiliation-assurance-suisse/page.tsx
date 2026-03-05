import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation assurance Suisse – Modèle conforme & envoi recommandé",
  description: "Résiliez votre assurance en Suisse (maladie, auto, ménage, complémentaire). Modèle conforme, envoi recommandé avec preuve. Simple et rapide.",
  alternates: { canonical: "/modeles/lettre-resiliation-assurance-suisse" },
  openGraph: {
    title: "Lettre résiliation assurance Suisse – Modèle conforme & envoi recommandé",
    description: "Résiliez votre assurance en Suisse. Modèle conforme, envoi recommandé avec preuve.",
    url: "/modeles/lettre-resiliation-assurance-suisse",
  },
}

const faqData = [
  {
    question: "Quel délai pour résilier une assurance en Suisse ?",
    answer: "Le délai varie selon le type d'assurance. Pour l'assurance maladie (LAMal), la résiliation se fait généralement pour fin d'année avec un préavis de 3 mois. Pour les autres assurances, consultez votre contrat.",
  },
  {
    question: "Dois-je envoyer ma résiliation d'assurance par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Cela vous protège en cas de litige sur la date de résiliation.",
  },
  {
    question: "Quelles assurances puis-je résilier avec NextLetter ?",
    answer: "NextLetter propose des modèles pour l'assurance maladie (LAMal), assurance complémentaire, assurance auto, assurance ménage/RC. Chaque modèle est adapté au type d'assurance.",
  },
  {
    question: "Que doit contenir une lettre de résiliation d'assurance ?",
    answer: "Vos coordonnées, le numéro de contrat ou de police, la date de résiliation souhaitée, et une formulation claire de résiliation. Le modèle NextLetter inclut tous les éléments essentiels.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit ou votre assureur.",
  },
]

export default function LettreResiliationAssurancePage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-resiliation-assurance-suisse"
      faqData={faqData}
      h1Title="Lettre résiliation assurance"
      h1Gradient="en Suisse"
      intro={{
        main: "Résiliez votre assurance en Suisse en quelques minutes. Maladie (LAMal), auto, ménage, complémentaire – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, la résiliation d'assurance doit être effectuée <strong>par écrit</strong>. Les délais et dates d'échéance varient selon le type d'assurance : <strong>LAMal</strong> (généralement fin d'année, préavis 3 mois), <strong>assurance auto</strong>, <strong>ménage</strong>, <strong>complémentaire</strong>.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Vérifiez toujours les conditions spécifiques de votre contrat.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit ou votre assureur.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le type d'assurance", description: "Sélectionnez le modèle adapté : maladie, auto, ménage, complémentaire." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, le numéro de contrat et la date de résiliation souhaitée." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Références du contrat", subtitle: "Numéro de police, assureur" },
        { title: "Date de résiliation", subtitle: "Date d'effet et respect du préavis" },
        { title: "Formulation conforme", subtitle: "Texte adapté au droit suisse" },
        { title: "Type d'assurance", subtitle: "Maladie, auto, ménage, complémentaire" },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      optionalContent={
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Types d'assurances résiliables</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Préavis typique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Assurance maladie (LAMal)</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">3 mois, fin d'année</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Assurance auto</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Selon contrat</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Assurance ménage / RC</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Selon contrat</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Assurance complémentaire</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Selon contrat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            ⚠️ Les délais peuvent varier. Vérifiez toujours les conditions de votre contrat.
          </p>
        </section>
      }
      ctaTitle="Prêt à résilier votre assurance ?"
      ctaDescription="Générez votre lettre de résiliation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-assurance"
      canonicalPath="/modeles/lettre-resiliation-assurance-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-assurance-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-assurance-maladie-suisse"
    />
  )
}
