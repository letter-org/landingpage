import type { Metadata } from "next"
import Link from "next/link"
import { LetterModelTemplate } from "@/components/letter-model-template"

const LEGAL_DISCLAIMER =
  "NextLetter fournit des modèles et une aide à la rédaction. Les informations générées ne remplacent pas un conseil juridique personnalisé."

export const metadata: Metadata = {
  title: "Opposition à une poursuite en Suisse – Modèle de lettre",
  description:
    "Faire opposition à une poursuite en Suisse : modèle de lettre, commandement de payer et délais. Rédaction assistée par IA, PDF et envoi recommandé.",
  alternates: { canonical: "/modeles/opposition-poursuite-suisse" },
  openGraph: {
    title: "Opposition à une poursuite en Suisse – Modèle de lettre",
    description:
      "Lettre d’opposition adaptée au contexte suisse : questions guidées, PDF et envoi recommandé pour sécuriser vos délais.",
    url: "/modeles/opposition-poursuite-suisse",
  },
}

const faqData = [
  {
    question: "Comment faire opposition à une poursuite en Suisse ?",
    answer:
      "L’opposition se formule en général par écrit auprès de l’office des poursuites compétent, dans le délai prévu après notification du commandement de payer. Une lettre claire, datée et traçable aide à respecter les formalités et à garder une preuve d’envoi.",
  },
  {
    question: "Qu’est-ce qu’un commandement de payer dans une opposition poursuite suisse ?",
    answer:
      "Le commandement de payer est l’acte qui vous informe de la poursuite et ouvre en principe un délai pour vous opposer. Les modalités exactes figurent sur les documents que vous recevez ; vérifiez-y la date et l’autorité destinataire.",
  },
  {
    question: "Quel délai pour une opposition à une poursuite en Suisse ?",
    answer:
      "Le délai dépend de votre dossier et des mentions portées sur la notification (souvent un délai court et impératif). Ne tardez pas : un retard peut limiter vos options. En cas de doute, rapprochez-vous rapidement d’un conseil juridique.",
  },
  {
    question: "Existe-t-il un modèle de lettre d’opposition au commandement de payer ?",
    answer:
      "Un modèle structuré aide à présenter vos références, votre demande et vos coordonnées sans oublier l’essentiel. NextLetter vous guide par des questions puis adapte la formulation ; vous conservez la responsabilité du fond et des pièces éventuelles.",
  },
  {
    question: "Faut-il envoyer l’opposition par courrier recommandé ?",
    answer:
      "Une preuve d’acheminement est souvent précieuse lorsque les délais sont serrés. NextLetter permet de préparer votre courrier et de l’expédier en recommandé lorsque vous choisissez cette option.",
  },
  {
    question: "NextLetter remplace-t-il un avocat pour une poursuite ?",
    answer:
      "Non. NextLetter aide à la rédaction et à l’envoi de courriers. Pour une situation litigieuse ou une analyse juridique personnalisée, consultez un professionnel compétent.",
  },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-opposition-poursuite-seo"
      faqData={faqData}
      h1Title="Opposition à une poursuite"
      h1Gradient="en Suisse"
      heroBadge="Adapté à la Suisse"
      showHeroCta
      intro={{
        main:
          "Recevoir une poursuite ou un commandement de payer peut être stressant : les délais sont courts et chaque jour compte. Une opposition bien rédigée, envoyée avec trace, permet de vous exprimer clairement et de garder un dossier propre.",
        sub:
          "NextLetter vous aide à structurer votre lettre pour le contexte suisse, puis à obtenir un PDF prêt à joindre ou à expédier en recommandé lorsque vous le souhaitez.",
      }}
      geoDirectAnswer={`Pour faire opposition à une poursuite en Suisse, il faut en général respecter un délai court après la notification du commandement de payer et adresser une opposition écrite à l’office des poursuites concerné. NextLetter vous aide à rédiger une lettre structurée, téléchargeable en PDF et expédiable en recommandé.`}
      savoirContent={
        <>
          <p>
            Une poursuite engage des délais stricts : attendre peut réduire vos marges de manœuvre et compliquer la suite du dossier. Poser par écrit votre opposition dans les temps aide à figer votre position et à éviter les malentendus.
          </p>
          <p>
            Le risque principal est double : dépasser un délai ou envoyer une lettre incomplète qui ne permet pas au lecteur de comprendre votre demande. Dans les deux cas, vous perdez du temps alors que la procédure avance.
          </p>
          <p>
            Une lettre bien structurée facilite la lecture pour l’office des poursuites et clarifie vos références de dossier. Elle complète, sans la remplacer, une analyse juridique lorsque votre situation est sensible ou contestée.
          </p>
          <p>
            Pour comprendre le document qui précède souvent l’opposition, voir aussi notre page{" "}
            <Link href="/modeles/commandement-de-payer-suisse" className="text-brand font-medium hover:underline">
              commandement de payer en Suisse
            </Link>
            . Une variante plus courte du même parcours existe encore sous l’URL historique{" "}
            <Link href="/modeles/lettre-opposition-poursuite-suisse" className="text-brand font-medium hover:underline">
              /lettre-opposition-poursuite-suisse
            </Link>{" "}
            (canonical vers cette page pilier). Retrouvez tous les cas dans l’
            <Link href="/modeles" className="text-brand font-medium hover:underline">
              annuaire des modèles
            </Link>
            .
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter est un service d’assistance à la rédaction et à l’envoi. Pour une poursuite, un conseil juridique personnalisé peut être indispensable.
          </p>
        </>
      }
      intermediateCta={{
        title: "Prêt à générer votre lettre ?",
        description: "Quelques questions, puis une opposition prête à être envoyée ou téléchargée.",
        buttonText: "Générer mon opposition en 2 minutes",
      }}
      steps={[
        {
          title: "Choisissez le modèle",
          description: "Sélectionnez le parcours adapté à une opposition dans un contexte suisse.",
        },
        {
          title: "Répondez aux questions",
          description: "Indiquez vos références de dossier, destinataire et les informations utiles à votre situation.",
        },
        {
          title: "L’IA personnalise la lettre",
          description: "La formulation est harmonisée pour une lecture claire et professionnelle.",
        },
        {
          title: "PDF ou recommandé",
          description: "Téléchargez votre PDF ou faites expédier le courrier avec preuve d’acheminement.",
        },
      ]}
      letterContent={[
        { title: "Destinataire", subtitle: "Office des poursuites ou autorité indiquée sur vos documents" },
        { title: "Objet", subtitle: "Opposition / références de poursuite" },
        { title: "Contexte", subtitle: "Rappel factuel des éléments utiles à votre dossier" },
        { title: "Demande claire", subtitle: "Formulation de votre opposition et suites attendues" },
        { title: "Délai / échéance", subtitle: "Mention des dates et du respect du délai lorsque pertinent" },
        { title: "Formule de politesse", subtitle: "Clôture conforme aux usages administratifs" },
        { title: "Adaptation automatique par IA", subtitle: "Ton et détails ajustés selon vos réponses" },
      ]}
      ctaTitle="Une opposition prête à partir ?"
      ctaDescription="Finalisez votre lettre, contrôlez le rendu et passez à l’envoi lorsque vous êtes prêt."
      ctaButtonText="Générer mon opposition en 2 minutes"
      ctaReassurance="Questions guidées · PDF · Envoi recommandé disponible"
      reassuranceBullets={[
        "Rédaction pensée pour le contexte administratif suisse",
        "Parcours rapide pour ne pas perdre de temps",
        "PDF prêt à imprimer ou à joindre à votre dossier",
        "Possibilité d’expédition en recommandé avec trace",
        "Assistant à la rédaction : pas de dossier juridique « automatique »",
      ]}
      legalDisclaimer={LEGAL_DISCLAIMER}
      ctaSecondaryHref="/modeles/commandement-de-payer-suisse"
      utmCampaign="opposition-poursuite-seo"
      canonicalPath="/modeles/opposition-poursuite-suisse"
      excludeFromOtherModels="/modeles/opposition-poursuite-suisse"
      howToName="Opposition à une poursuite en Suisse – modèle de lettre"
      conversionTracking={{ pageSlug: "opposition-poursuite-suisse" }}
      maillageAppLinkLabel="Envoyer en recommandé (app)"
    />
  )
}
