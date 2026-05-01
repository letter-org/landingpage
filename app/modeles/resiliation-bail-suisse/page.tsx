import type { Metadata } from "next"
import Link from "next/link"
import { LetterModelTemplate } from "@/components/letter-model-template"

const LEGAL_DISCLAIMER =
  "NextLetter fournit des modèles et une aide à la rédaction. Les informations générées ne remplacent pas un conseil juridique personnalisé."

export const metadata: Metadata = {
  title: "Résiliation de bail en Suisse – Modèle de lettre",
  description:
    "Lettre de résiliation de bail en Suisse : délais, préavis, locataire ou propriétaire. Modèle IA, PDF et envoi recommandé pour une trace claire.",
  alternates: { canonical: "/modeles/resiliation-bail-suisse" },
  openGraph: {
    title: "Résiliation de bail en Suisse – Modèle de lettre",
    description:
      "Résilier un bail d’appartement en Suisse avec une lettre structurée : questionnaire, personnalisation IA et PDF.",
    url: "/modeles/resiliation-bail-suisse",
  },
}

const faqData = [
  {
    question: "Comment résilier un bail en Suisse par lettre ?",
    answer:
      "La résiliation doit en principe être faite par écrit, avec indication des parties, du logement, des dates importantes et du respect du préavis. Un envoi avec preuve est souvent recommandé pour la date de réception.",
  },
  {
    question: "Quel délai de résiliation de bail pour un locataire en Suisse ?",
    answer:
      "Le préavis le plus courant est de trois mois, mais votre bail peut prévoir des règles différentes ou des dates d’échéance précises. Relisez votre contrat avant d’envoyer votre courrier.",
  },
  {
    question: "Existe-t-il un modèle de résiliation de bail locataire en Suisse ?",
    answer:
      "Oui : NextLetter propose des parcours locataire et propriétaire. Cette page résume l’approche générale ; pour un modèle très détaillé côté locataire, utilisez aussi le modèle dédié dans l’annuaire.",
  },
  {
    question: "Dois-je résilier mon bail d’appartement aux dates fixes du calendrier locatif ?",
    answer:
      "Souvent les baux suisses prévoient des termes à certaines dates ; encore une fois, votre contrat fait foi. Une lettre bien datée et envoyée à temps évite les surprises.",
  },
  {
    question: "La résiliation par e-mail suffit-elle ?",
    answer:
      "Selon les parties et les clauses, parfois oui — mais pour sécuriser une preuve et éviter les désaccords sur la réception, un courrier traçable reste une référence en Suisse.",
  },
  {
    question: "NextLetter vérifie-t-il mon bail ?",
    answer:
      "Non : vous restez responsable de la conformité de votre résiliation au contrat. NextLetter vous aide à formuler et à envoyer le courrier.",
  },
]

export default function Page() {
  return (
    <LetterModelTemplate
      faqSchemaId="schema-faq-resiliation-bail-seo-court"
      faqData={faqData}
      h1Title="Résiliation de bail"
      h1Gradient="en Suisse"
      heroBadge="Adapté à la Suisse"
      showHeroCta
      intro={{
        main:
          "Quitter un logement ou récupérer un bien demande souvent une lettre de résiliation irréprochable : dates, préavis et destinataire doivent être limpides pour éviter un différend sur la fin du bail.",
        sub:
          "NextLetter vous accompagne pour rédiger une résiliation alignée sur vos informations contractuelles, puis vous livre un PDF ou gère l’envoi recommandé.",
      }}
      geoDirectAnswer={`Pour résilier un bail en Suisse, envoyez en principe une résiliation écrite qui respecte le préavis et les dates d’échéance prévues au contrat. NextLetter propose un modèle guidé par questions, une adaptation par IA, un PDF et l’envoi recommandé optionnel.`}
      savoirContent={
        <>
          <p>
            Le problème classique est une résiliation trop vague : sans date de sortie claire ou sans référence au bon objet du bail, la partie adverse peut contester la réception ou la date d’effet.
          </p>
          <p>
            Le risque est financier et logistique : paiements qui continuent, garantie bloquée ou désaccord sur l’état des lieux. Une lettre datée et traçable réduit ces frictions.
          </p>
          <p>
            Réagir avant la prochaine échéance vous laisse le temps de corriger une erreur de forme ou de clarifier un préavis ; une fois la date critique passée, vous pouvez devoir attendre une fenêtre suivante.
          </p>
          <p>
            Pour des cas très détaillés côté locataire ou bailleur, ouvrez aussi nos modèles{" "}
            <Link href="/modeles/lettre-resiliation-bail-locataire-suisse" className="text-brand font-medium hover:underline">
              résiliation bail locataire
            </Link>
            ,{" "}
            <Link href="/modeles/lettre-resiliation-bail-bailleur-suisse" className="text-brand font-medium hover:underline">
              résiliation bailleur
            </Link>{" "}
            ou l’URL historique consolidée{" "}
            <Link href="/modeles/lettre-resiliation-bail-suisse" className="text-brand font-medium hover:underline">
              /lettre-resiliation-bail-suisse
            </Link>{" "}
            (canonical vers cette page pilier)
            . Explorez l’ensemble sur{" "}
            <Link href="/modeles" className="text-brand font-medium hover:underline">
              la page modèles
            </Link>
            .
          </p>
          <p className="text-sm italic pt-4 border-t border-border">
            ⚠️ Les baux spéciaux (meublé, sous-location, etc.) peuvent nécessiter des précisions supplémentaires : vérifiez vos clauses.
          </p>
        </>
      }
      intermediateCta={{
        title: "Prêt à générer votre lettre ?",
        description: "Indiquez vos dates et votre profil : nous adaptons la structure du courrier.",
        buttonText: "Générer ma résiliation de bail",
      }}
      steps={[
        {
          title: "Choisissez le modèle",
          description: "Locataire, propriétaire ou résiliation générale selon votre cas.",
        },
        {
          title: "Répondez aux questions",
          description: "Adresse du logement, dates de sortie, références du bail.",
        },
        {
          title: "L’IA personnalise la lettre",
          description: "Formulations conformes aux usages et à votre situation.",
        },
        {
          title: "PDF ou recommandé",
          description: "Gardez une copie ou faites partir un recommandé avec preuve.",
        },
      ]}
      letterContent={[
        { title: "Destinataire", subtitle: "Bailleur ou locataire selon le sens de la résiliation" },
        { title: "Objet", subtitle: "Résiliation de bail avec mention du logement" },
        { title: "Contexte", subtitle: "Références du contrat et rappel du préavis" },
        { title: "Demande claire", subtitle: "Date de fin souhaitée et modalités de remise des clés si utile" },
        { title: "Délai / échéance", subtitle: "Alignement sur les termes du bail et le calendrier" },
        { title: "Formule de politesse", subtitle: "Clôture adaptée à une relation durable" },
        { title: "Adaptation automatique par IA", subtitle: "Variantes selon déménagement, mutation ou changement personnel" },
      ]}
      ctaTitle="Clôturer votre bail sans ambiguïté"
      ctaDescription="Une résiliation propre facilite l’état des lieux et le retour de caution lorsque les conditions sont réunies."
      ctaButtonText="Générer ma résiliation de bail"
      ctaReassurance="Locataire ou bailleur · PDF · Recommandé possible"
      reassuranceBullets={[
        "Structure pensée pour les pratiques locatives suisses",
        "Mise en forme rapide pour respecter vos délais",
        "PDF prêt à signer ou à envoyer",
        "Envoi recommandé pour figer la date de réception",
        "Vous gardez la maîtrise du fond : lecture du bail indispensable",
      ]}
      legalDisclaimer={LEGAL_DISCLAIMER}
      ctaSecondaryHref="/modeles/lettre-resiliation-bail-locataire-suisse"
      utmCampaign="resiliation-bail-seo"
      canonicalPath="/modeles/resiliation-bail-suisse"
      excludeFromOtherModels="/modeles/resiliation-bail-suisse"
      howToName="Résiliation de bail en Suisse – modèle de lettre"
      conversionTracking={{ pageSlug: "resiliation-bail-suisse" }}
      maillageAppLinkLabel="Envoyer en recommandé (app)"
    />
  )
}
