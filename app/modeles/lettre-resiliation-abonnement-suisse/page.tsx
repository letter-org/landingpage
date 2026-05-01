import type { Metadata } from "next"
import { LetterModelTemplate } from "@/components/letter-model-template"

export const metadata: Metadata = {
  title: "Lettre résiliation abonnement Suisse – Modèle conforme & envoi recommandé",
  description: "Résiliez votre abonnement en Suisse (mobile, fitness, Internet, TV). Modèle conforme, envoi recommandé avec preuve. Simple et rapide.",
  alternates: { canonical: "/modeles/lettre-resiliation-abonnement-suisse" },
  openGraph: {
    title: "Lettre résiliation abonnement Suisse – Modèle conforme & envoi recommandé",
    description: "Résiliez votre abonnement en Suisse. Modèle conforme, envoi recommandé avec preuve.",
    url: "/modeles/lettre-resiliation-abonnement-suisse",
  },
}

const faqData = [
  {
    question: "Quel délai pour résilier un abonnement en Suisse ?",
    answer: "Le délai varie selon le type d'abonnement et le contrat. Pour les abonnements mobile et Internet, le préavis est souvent de 1 à 3 mois. Vérifiez les conditions générales de votre contrat.",
  },
  {
    question: "Dois-je envoyer ma résiliation d'abonnement par courrier recommandé ?",
    answer: "L'envoi par courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception. Certains prestataires l'exigent. Cela vous protège en cas de litige.",
  },
  {
    question: "Quels abonnements puis-je résilier avec NextLetter ?",
    answer: "NextLetter propose des modèles pour l'abonnement mobile, Internet/TV, fitness, et d'autres abonnements. Chaque modèle est adapté au type de contrat.",
  },
  {
    question: "Que doit contenir une lettre de résiliation d'abonnement ?",
    answer: "Vos coordonnées, le numéro de contrat ou client, la date de résiliation souhaitée, et une formulation claire de résiliation. Le modèle NextLetter inclut tous les éléments essentiels.",
  },
  {
    question: "NextLetter fournit-il des conseils juridiques ?",
    answer: "Non, NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, consultez un professionnel du droit.",
  },
]

export default function LettreResiliationAbonnementPage() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-lettre-resiliation-abonnement-suisse"
      faqData={faqData}
      h1Title="Lettre résiliation abonnement"
      h1Gradient="en Suisse"
      intro={{
        main: "Résiliez votre abonnement en Suisse en quelques minutes. Mobile, fitness, Internet, TV – votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.",
        sub: "Sans déplacement. Conforme au droit suisse.",
      }}
      savoirContent={
        <>
          <p>
            En Suisse, la résiliation d'abonnement doit être effectuée <strong>par écrit</strong>. Les délais varient selon le prestataire et le type de contrat : <strong>mobile</strong>, <strong>Internet/TV</strong>, <strong>fitness</strong>, etc.
          </p>
          <p>
            L'envoi par <strong>courrier recommandé est fortement recommandé</strong> pour disposer d'une preuve d'envoi et de réception. Certains prestataires exigent une résiliation écrite. Vérifiez les conditions de votre contrat.
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service numérique d'assistance à la rédaction et à l'envoi de courriers. Nous ne fournissons aucun conseil juridique. Pour des questions spécifiques, consultez un professionnel du droit.
          </p>
        </>
      }
      steps={[
        { title: "Étape 1 – Choisissez le type d'abonnement", description: "Sélectionnez le modèle adapté : mobile, Internet/TV, fitness, ou autre." },
        { title: "Étape 2 – Complétez vos informations", description: "Remplissez vos coordonnées, le numéro de contrat et la date de résiliation souhaitée." },
        { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé. Vous recevez une preuve d'envoi et suivez l'acheminement." },
      ]}
      letterContent={[
        { title: "Vos coordonnées complètes", subtitle: "Nom, adresse, informations de contact" },
        { title: "Références du contrat", subtitle: "Numéro client, prestataire" },
        { title: "Date de résiliation", subtitle: "Date d'effet et respect du préavis" },
        { title: "Formulation conforme", subtitle: "Texte adapté au droit suisse" },
        { title: "Type d'abonnement", subtitle: "Mobile, Internet, fitness, etc." },
        { title: "Signature personnalisée", subtitle: "Votre nom et signature" },
      ]}
      optionalContent={
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Types d'abonnements résiliables</h2>
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
                  <td className="px-4 py-3 text-sm text-muted-foreground">Abonnement mobile</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">1 à 3 mois (selon contrat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Internet / TV</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">1 à 3 mois (selon contrat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Abonnement fitness</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Selon contrat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      }
      ctaTitle="Prêt à résilier votre abonnement ?"
      ctaDescription="Générez votre lettre de résiliation en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi."
      ctaButtonText="Générer et envoyer ma lettre maintenant"
      ctaReassurance="Envoi en quelques minutes – preuve conservée dans votre dashboard"
      utmCampaign="resiliation-abonnement"
      canonicalPath="/modeles/lettre-resiliation-abonnement-suisse"
      excludeFromOtherModels="/modeles/lettre-resiliation-abonnement-suisse"
      ctaSecondaryHref="/modeles/lettre-resiliation-abonnement-mobile"
    />
  )
}
