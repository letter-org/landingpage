import type { Metadata } from "next"
import Link from "next/link"
import { LetterModelTemplate } from "@/components/letter-model-template"

const LEGAL_DISCLAIMER =
  "NextLetter fournit des modèles et une aide à la rédaction. Les informations générées ne remplacent pas un conseil juridique personnalisé."

export const metadata: Metadata = {
  title: "Relance de facture impayée en Suisse – Modèle de lettre",
  description:
    "Relance facture impayée en Suisse : modèle de lettre, rappel paiement, facture impayée que faire. IA, PDF et envoi recommandé.",
  alternates: { canonical: "/modeles/relance-facture-impayee-suisse" },
  openGraph: {
    title: "Relance de facture impayée en Suisse – Modèle de lettre",
    description:
      "Relancer un client pour une facture impayée avec une lettre structurée : questionnaire guidé, personnalisation IA et PDF.",
    url: "/modeles/relance-facture-impayee-suisse",
  },
}

const faqData = [
  {
    question: "Comment relancer un client pour une facture impayée en Suisse ?",
    answer:
      "Commencez par un rappel écrit clair : références de facture, montant, date d’échéance et moyen de paiement. Escaladez ensuite si nécessaire vers une mise en demeure. NextLetter aide à rédiger ces envois de façon cohérente.",
  },
  {
    question: "Existe-t-il un modèle de relance facture adapté au droit suisse ?",
    answer:
      "Oui : un bon modèle respecte un ton professionnel, cite les références utiles et conserve une chronologie recevable. NextLetter combine structure fixe et adaptation automatique selon vos réponses.",
  },
  {
    question: "Facture impayée en Suisse : que faire en premier ?",
    answer:
      "Vérifiez la date d’échéance, les coordonnées du client et les relances déjà envoyées. Ensuite, envoyez un courrier traçable si le montant ou la relation le justifie ; conservez les preuves dans votre dossier comptable.",
  },
  {
    question: "Quelle différence entre un rappel et une mise en demeure pour une facture ?",
    answer:
      "Le rappel reste souvent plus court et orienté « paiement oublié » ; la mise en demeure formalise une exigence avec délai et mention des suites possibles. Choisissez le niveau adapté à l’ancienneté du retard et au montant.",
  },
  {
    question: "Puis-je utiliser un lettre rappel paiement pour une entreprise suisse ?",
    answer:
      "Oui : précisez votre raison sociale, votre numéro de TVA si utile, les références client et la facture concernée. NextLetter vous guide sur ces blocs.",
  },
  {
    question: "NextLetter assure-t-il le recouvrement de ma créance ?",
    answer:
      "Non : vous restez responsable du recouvrement. NextLetter fournit une aide à la rédaction et des options d’envoi, sans garantir le paiement.",
  },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-relance-facture-impayee-suisse"
      faqData={faqData}
      h1Title="Relance de facture impayée"
      h1Gradient="en Suisse"
      heroBadge="Adapté à la Suisse"
      showHeroCta
      intro={{
        main:
          "Un retard de paiement arrive à tous les indépendants et PME : ce qui change la donne, c’est une relance écrite nette, traçable et répétable. Elle protège votre relation client tout en montrant que vous suivez vos créances.",
        sub:
          "Générez une lettre de rappel ou de relance sérieuse en quelques minutes, puis téléchargez-la ou faites-la partir en recommandé.",
      }}
      geoDirectAnswer={`Pour une facture impayée en Suisse, commencez par une relance écrite avec références et délai de paiement. NextLetter propose un modèle guidé, une personnalisation par IA, un PDF et la possibilité d’envoyer en lettre recommandée.`}
      savoirContent={
        <>
          <p>
            Sans écrit, vous accumulez les « petits » retards qui finissent par peser sur votre liquidité. Une relance papier ou PDF datée montre que votre processus est sérieux et aide à aligner votre client sur vos conditions de paiement.
          </p>
          <p>
            Le risque d’attendre est que le retard se prolonge et que la conversation devienne émotionnelle. Une lettre factuelle ramène le dialogue sur les chiffres et les dates — ce qui est souvent plus simple à régler.
          </p>
          <p>
            Une formulation trop agressive peut briser une relation ; trop molle, elle est ignorée. Un modèle équilibré et une IA qui adapte le niveau de fermeté vous font gagner du temps tout en restant professionnels.
          </p>
          <p>
            Pour passer au stade suivant, utilisez une{" "}
            <Link href="/modeles/mise-en-demeure-suisse" className="text-brand font-medium hover:underline">
              mise en demeure en Suisse
            </Link>
            . Pour explorer d’autres courriers professionnels, ouvrez{" "}
            <Link href="/modeles" className="text-brand font-medium hover:underline">
              tous les modèles NextLetter
            </Link>
            .
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ Les montants élevés ou les litiges sur la prestation peuvent nécessiter un avis juridique en complément.
          </p>
        </>
      }
      intermediateCta={{
        title: "Prêt à générer votre lettre ?",
        description: "Transformez votre créance en message clair, sans partir de zéro.",
        buttonText: "Générer ma relance",
      }}
      steps={[
        {
          title: "Choisissez le modèle",
          description: "Relance client ou rappel de paiement selon votre besoin.",
        },
        {
          title: "Répondez aux questions",
          description: "Facture, montant, coordonnées et niveau de fermeté souhaité.",
        },
        {
          title: "L’IA personnalise la lettre",
          description: "Phrases prêtes à envoyer, cohérentes avec votre secteur.",
        },
        {
          title: "PDF ou recommandé",
          description: "Gardez une trace dans votre dossier ou expédiez avec accusé.",
        },
      ]}
      letterContent={[
        { title: "Destinataire", subtitle: "Client ou service comptable à contacter" },
        { title: "Objet", subtitle: "Relance / rappel de paiement avec références" },
        { title: "Contexte", subtitle: "Facture(s), date de prestation ou délai convenu" },
        { title: "Demande claire", subtitle: "Montant attendu et modalités de règlement" },
        { title: "Délai / échéance", subtitle: "Nouvelle date limite pour régulariser" },
        { title: "Formule de politesse", subtitle: "Clôture ouverte mais professionnelle" },
        { title: "Adaptation automatique par IA", subtitle: "Variantes selon l’ancienneté du retard" },
      ]}
      ctaTitle="Vos factures méritent une relance nette"
      ctaDescription="Passez du message informel au courrier traçable lorsque votre créance le mérite."
      ctaButtonText="Générer ma relance"
      ctaReassurance="Parcours guidé · PDF · Envoi recommandé possible"
      reassuranceBullets={[
        "Ton adapté aux entreprises et indépendants en Suisse",
        "Relances structurées pour votre dossier interne",
        "PDF prêt à envoyer ou archiver",
        "Envoi recommandé pour les montants sensibles",
        "Pas de promesse de résultat sur le recouvrement",
      ]}
      legalDisclaimer={LEGAL_DISCLAIMER}
      ctaSecondaryHref="/modeles/mise-en-demeure-suisse"
      utmCampaign="relance-facture-impayee-suisse"
      canonicalPath="/modeles/relance-facture-impayee-suisse"
      excludeFromOtherModels="/modeles/relance-facture-impayee-suisse"
      howToName="Relance de facture impayée en Suisse – modèle de lettre"
      conversionTracking={{ pageSlug: "relance-facture-impayee-suisse" }}
      maillageAppLinkLabel="Envoyer en recommandé (app)"
    />
  )
}
