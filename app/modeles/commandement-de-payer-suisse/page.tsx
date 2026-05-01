import type { Metadata } from "next"
import Link from "next/link"
import { LetterModelTemplate } from "@/components/letter-model-template"

const LEGAL_DISCLAIMER =
  "NextLetter fournit des modèles et une aide à la rédaction. Les informations générées ne remplacent pas un conseil juridique personnalisé."

export const metadata: Metadata = {
  title: "Commandement de payer en Suisse – Que faire ?",
  description:
    "Commandement de payer reçu : délais, opposition, office des poursuites. Comprenez les étapes utiles et préparez votre lettre avec NextLetter (PDF, recommandé).",
  alternates: { canonical: "/modeles/commandement-de-payer-suisse" },
  openGraph: {
    title: "Commandement de payer en Suisse – Que faire ?",
    description:
      "Cadre pratique après un commandement de payer : délais, opposition possible et aide à la rédaction pour une lettre structurée.",
    url: "/modeles/commandement-de-payer-suisse",
  },
}

const faqData = [
  {
    question: "J’ai reçu un commandement de payer : que faire en Suisse ?",
    answer:
      "Lisez attentivement les mentions sur le document : autorité, références et indication de délais. En parallèle, préparez une réponse écrite si vous devez vous opposer ou clarifier votre situation. Une trace d’envoi peut être importante lorsque le temps joue contre vous.",
  },
  {
    question: "Quel est le délai pour une opposition après commandement de payer ?",
    answer:
      "Le délai est indiqué sur votre notification et dépend des règles applicables à votre dossier ; il est souvent court. Ne vous fiez pas aux rumeurs : vérifiez la date imprimée sur l’acte et agissez sans attendre si vous contestez ou répondez.",
  },
  {
    question: "Comment formuler une opposition au commandement de payer en Suisse ?",
    answer:
      "Votre lettre doit identifier le dossier, l’autorité destinataire et votre demande claire (par exemple opposition). NextLetter propose un parcours guidé pour structurer ces éléments avant PDF ou envoi recommandé.",
  },
  {
    question: "L’office des poursuites et le commandement de payer : quel lien ?",
    answer:
      "En procédure de poursuite, l’office des poursuites joue un rôle central dans la réception des actes et la coordination avec les parties concernées. Adressez votre courrier à l’entité indiquée sur vos documents officiels.",
  },
  {
    question: "Une poursuite en Suisse sans opposition : que risque-t-on ?",
    answer:
      "Sans réaction dans les délais ou sans stratégie adaptée, une poursuite peut continuer son cours selon les règles applicables. Ce risque dépend entièrement de votre dossier : renseignez-vous vite et faites-vous accompagner si nécessaire.",
  },
  {
    question: "NextLetter peut-il dire si je dois m’opposer ?",
    answer:
      "Non : nous ne diagnostiquons pas votre situation juridique. Nous vous aidons à rédiger et à envoyer un courrier lorsque vous savez quelle suite vous donner.",
  },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-commandement-de-payer-suisse"
      faqData={faqData}
      h1Title="Commandement de payer"
      h1Gradient="en Suisse : que faire ?"
      heroBadge="Adapté à la Suisse"
      showHeroCta
      intro={{
        main:
          "Recevoir un commandement de payer peut surprendre : les références sont nombreuses et le délai pour réagir est souvent court. Comprendre ce que signifie le document et préparer une réponse écrite traçable vous aide à garder le contrôle.",
        sub:
          "Cette page résume l’essentiel en langage clair et vous oriente vers une opposition structurée lorsque c’est la voie que vous choisissez.",
      }}
      geoDirectAnswer={`Après un commandement de payer en Suisse, vérifiez le délai et le destinataire indiqués sur l’acte, puis décidez si vous opposez ou clarifiez votre situation par écrit auprès de l’office des poursuites concerné. NextLetter aide à rédiger une lettre personnalisée, PDF ou envoi recommandé.`}
      savoirContent={
        <>
          <p>
            Le problème immédiat est souvent l’angoisse du délai : sans réponse datée et adressée au bon service, vous pouvez vous retrouver en difficulté même si votre fond est défendable sur le fond.
          </p>
          <p>
            Le risque est de traiter le dossier comme une simple facture à payer alors qu’une procédure de poursuite nécessite une lecture précise des mentions légales figurant sur vos documents.
          </p>
          <p>
            Agir vite permet au minimum de sécuriser une trace et de formaliser votre position ; une lettre lisible évite les incompréhensions qui retardent le traitement administratif.
          </p>
          <p>
            Si vous souhaitez déposer une opposition, utilisez la{" "}
            <Link href="/modeles/opposition-poursuite-suisse" className="text-brand font-medium hover:underline">
              page pilier opposition à une poursuite en Suisse
            </Link>
            . Pour le contexte général, retrouvez aussi les autres courriers sur{" "}
            <Link href="/modeles" className="text-brand font-medium hover:underline">
              /modeles
            </Link>
            .
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ NextLetter ne substitue pas un avocat : pour les montants élevés ou les motifs complexes, demandez un conseil ciblé sans tarder.
          </p>
        </>
      }
      intermediateCta={{
        title: "Prêt à générer votre lettre ?",
        description: "Si vous optez pour une opposition, préparez-la avec un parcours guidé.",
        buttonText: "Créer une opposition",
      }}
      steps={[
        {
          title: "Choisissez le modèle",
          description: "Opposition poursuite ou autre courrier lié à votre dossier.",
        },
        {
          title: "Répondez aux questions",
          description: "Références de poursuite, destinataire et éléments factuels.",
        },
        {
          title: "L’IA personnalise la lettre",
          description: "Ton neutre et phrases adaptées au formalisme administratif.",
        },
        {
          title: "PDF ou recommandé",
          description: "Contrôlez le rendu puis téléchargez ou expédiez avec preuve.",
        },
      ]}
      letterContent={[
        { title: "Destinataire", subtitle: "Office des poursuites ou service mentionné sur l’acte" },
        { title: "Objet", subtitle: "Opposition / références du commandement de payer" },
        { title: "Contexte", subtitle: "Rappel factuel des informations utiles au traitement" },
        { title: "Demande claire", subtitle: "Ce que vous demandez à l’autorité (ex. prise en compte de l’opposition)" },
        { title: "Délai / échéance", subtitle: "Mention du respect du délai lorsque vous vous opposez" },
        { title: "Formule de politesse", subtitle: "Clôture sobre" },
        { title: "Adaptation automatique par IA", subtitle: "Variantes selon votre situation personnelle ou professionnelle" },
      ]}
      ctaTitle="Passer à l’action sur votre dossier ?"
      ctaDescription="Une fois votre décision prise, une lettre complète accélère la mise en forme administrative."
      ctaButtonText="Créer une opposition"
      ctaReassurance="Modèle opposition · PDF · Envoi recommandé"
      reassuranceBullets={[
        "Langage adapté aux autorités suisses de poursuite",
        "Gain de temps pour respecter des délais serrés",
        "PDF prêt à joindre à vos pièces",
        "Option recommandé pour tracer l’envoi",
        "Outil d’aide à la rédaction, sans diagnostic juridique",
      ]}
      legalDisclaimer={LEGAL_DISCLAIMER}
      ctaSecondaryHref="/modeles/opposition-poursuite-suisse"
      utmCampaign="commandement-de-payer-suisse"
      canonicalPath="/modeles/commandement-de-payer-suisse"
      excludeFromOtherModels="/modeles/commandement-de-payer-suisse"
      howToName="Commandement de payer en Suisse – préparer une opposition par écrit"
      conversionTracking={{ pageSlug: "commandement-de-payer-suisse" }}
      maillageAppLinkLabel="Envoyer en recommandé (app)"
    />
  )
}
