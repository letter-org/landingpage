import type { Metadata } from "next"
import Link from "next/link"
import { LetterModelTemplate } from "@/components/letter-model-template"

const LEGAL_DISCLAIMER =
  "NextLetter fournit des modèles et une aide à la rédaction. Les informations générées ne remplacent pas un conseil juridique personnalisé."

export const metadata: Metadata = {
  title: "Mise en demeure en Suisse – Modèle de lettre",
  description:
    "Modèle de mise en demeure en Suisse : facture impayée, paiement, avant poursuite. Lettre guidée par IA, PDF et envoi recommandé.",
  alternates: { canonical: "/modeles/mise-en-demeure-suisse" },
  openGraph: {
    title: "Mise en demeure en Suisse – Modèle de lettre",
    description:
      "Créez une mise en demeure structurée pour une créance en Suisse : questions simples, lettre personnalisée, PDF et recommandé.",
    url: "/modeles/mise-en-demeure-suisse",
  },
}

const faqData = [
  {
    question: "Comment rédiger une mise en demeure en Suisse pour une facture impayée ?",
    answer:
      "Une mise en demeure décrit la créance, le montant et un délai raisonnable pour régulariser avant d’engager d’autres mesures. Elle doit rester factuelle et traçable ; un envoi avec preuve d’acheminement est souvent pertinent.",
  },
  {
    question: "Une mise en demeure avant poursuite est-elle obligatoire ?",
    answer:
      "Cela dépend du type de créance et du droit applicable à votre contrat. Dans la pratique, une mise en demeure est fréquente avant une escalade, car elle formalise la demande et les délais. Vérifiez votre situation ou demandez un conseil si vous êtes incertain.",
  },
  {
    question: "Que doit contenir une lettre de mise en demeure pour paiement en Suisse ?",
    answer:
      "En général : coordonnées des parties, références de facture ou contrat, montant dû, délai de paiement, modalités de règlement et traçabilité. NextLetter vous aide à couvrir ces blocs via un questionnaire.",
  },
  {
    question: "Une mise en demeure suffit-elle pour une relance de facture impayée ?",
    answer:
      "C’est souvent l’étape qui suit les relances informelles. Elle montre votre sérieux et fixe un cadre. Pour les montants élevés ou les litiges complexes, un accompagnement juridique peut compléter votre démarche.",
  },
  {
    question: "Puis-je envoyer ma mise en demeure en recommandé avec NextLetter ?",
    answer:
      "Oui : vous pouvez préparer la lettre puis choisir une expédition avec preuve lorsque vous utilisez les options d’envoi proposées par NextLetter.",
  },
  {
    question: "NextLetter garantit-il le succès du recouvrement ?",
    answer:
      "Non. NextLetter facilite la rédaction et l’envoi. Le paiement dépend de votre débiteur et du cadre contractuel ; aucun résultat juridique ou financier ne peut être garanti.",
  },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-mise-en-demeure-suisse"
      faqData={faqData}
      h1Title="Mise en demeure"
      h1Gradient="en Suisse"
      heroBadge="Adapté à la Suisse"
      showHeroCta
      intro={{
        main:
          "Une facture impayée ou un retard répété peut bloquer votre trésorerie et créer des tensions inutiles avec un client ou un partenaire. Formaliser une mise en demeure donne un cadre clair : montant, délai et suites possibles.",
        sub:
          "NextLetter vous aide à transformer votre situation en lettre professionnelle, prête en PDF ou envoyée en recommandé lorsque vous le décidez.",
      }}
      geoDirectAnswer={`Une mise en demeure en Suisse est une lettre qui demande formellement à votre débiteur de régulariser une créance dans un délai donné, souvent après des relances informelles. NextLetter propose un modèle guidé par questions, une personnalisation par IA, un PDF et l’option d’envoi recommandé.`}
      savoirContent={
        <>
          <p>
            Le problème le plus fréquent est le flou : relances par message sans trace, montants ou références peu lisibles. Une mise en demeure pose les bases pour une discussion sérieuse ou une suite procédurale si nécessaire.
          </p>
          <p>
            Le risque si vous attendez trop est double : prescription ou perte d’éléments de preuve, et perception de manque de rigueur de votre côté. Réagir tôt avec un courrier structuré protège votre position commerciale.
          </p>
          <p>
            Une lettre bien rédigée évite un ton agressif tout en restant ferme : elle décrit les faits, fixe un délai raisonnable et préserve la relation lorsque le dossier peut encore se régler à l’amiable.
          </p>
          <p>
            Pour une étape amont plus souple, voir aussi la{" "}
            <Link href="/modeles/relance-facture-impayee-suisse" className="text-brand font-medium hover:underline">
              relance de facture impayée en Suisse
            </Link>{" "}
            ; pour une contestation sur le fond d’une facture, le{" "}
            <Link href="/modeles/lettre-contestation-facture-suisse" className="text-brand font-medium hover:underline">
              modèle de contestation de facture
            </Link>{" "}
            peut être plus adapté. Tous les courriers sont listés sur{" "}
            <Link href="/modeles" className="text-brand font-medium hover:underline">
              la page modèles
            </Link>
            .
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter ne fournit pas de conseil juridique : adaptez toujours votre stratégie au montant, aux preuves et à vos contrats.
          </p>
        </>
      }
      intermediateCta={{
        title: "Prêt à générer votre lettre ?",
        description: "Structurez votre mise en demeure sans partir d’une page blanche.",
        buttonText: "Créer ma mise en demeure",
      }}
      steps={[
        {
          title: "Choisissez le modèle",
          description: "Optez pour la mise en demeure adaptée à une créance en Suisse.",
        },
        {
          title: "Répondez aux questions",
          description: "Montants, références, délais souhaités et coordonnées du destinataire.",
        },
        {
          title: "L’IA personnalise la lettre",
          description: "Ton professionnel, phrases claires et blocs complets.",
        },
        {
          title: "PDF ou recommandé",
          description: "Export PDF ou envoi postal avec preuve d’acheminement.",
        },
      ]}
      letterContent={[
        { title: "Destinataire", subtitle: "Nom, adresse et fonction si pertinent" },
        { title: "Objet", subtitle: "Mise en demeure de payer / références contractuelles" },
        { title: "Contexte", subtitle: "Historique factuel des factures ou engagements" },
        { title: "Demande claire", subtitle: "Montant dû et modalités de paiement" },
        { title: "Délai / échéance", subtitle: "Date limite pour régulariser la situation" },
        { title: "Formule de politesse", subtitle: "Clôture sobre et professionnelle" },
        { title: "Adaptation automatique par IA", subtitle: "Variantes selon votre secteur et votre relation commerciale" },
      ]}
      ctaTitle="Formaliser votre créance proprement ?"
      ctaDescription="Une mise en demeure lisible renforce votre sérieux sans alourdir inutilement le ton."
      ctaButtonText="Créer ma mise en demeure"
      ctaReassurance="Guidage pas à pas · PDF · Envoi recommandé possible"
      reassuranceBullets={[
        "Formulations adaptées aux usages suisses",
        "Gain de temps sur la mise en forme",
        "PDF prêt à être archivé ou envoyé",
        "Option recommandé pour tracer la réception",
        "Service d’aide à la rédaction, sans engagement sur l’issue du dossier",
      ]}
      legalDisclaimer={LEGAL_DISCLAIMER}
      ctaSecondaryHref="/modeles/relance-facture-impayee-suisse"
      utmCampaign="mise-en-demeure-suisse"
      canonicalPath="/modeles/mise-en-demeure-suisse"
      excludeFromOtherModels="/modeles/mise-en-demeure-suisse"
      howToName="Mise en demeure en Suisse – modèle de lettre"
      conversionTracking={{ pageSlug: "mise-en-demeure-suisse" }}
      maillageAppLinkLabel="Envoyer en recommandé (app)"
    />
  )
}
