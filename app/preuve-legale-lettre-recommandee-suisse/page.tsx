import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle, Check, Clock, FileText, Shield } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { ALL_LETTER_MODELS } from "@/lib/letter-models"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"

/** Mot-clé principal SEO (remplacez la constante si vous ciblez une autre requête). */
const MOT_CLE_PRINCIPAL = "Lettre recommandée en ligne en Suisse"

export const metadata: Metadata = {
  title: "Lettre recommandée en ligne Suisse – preuve, délais | NextLetter",
  description:
    "Maîtrisez votre délai et votre preuve : lettre recommandée en ligne en Suisse avec NextLetter. Génération, PDF, envoi recommandé via prestataire. Particuliers et PME.",
  alternates: { canonical: "/preuve-legale-lettre-recommandee-suisse" },
  openGraph: {
    title: `${MOT_CLE_PRINCIPAL} – NextLetter`,
    description:
      "Résiliation, démission, courriers officiels : générez votre lettre et envoyez-la en recommandé avec traçabilité, sans aller à la poste.",
    url: "/preuve-legale-lettre-recommandee-suisse",
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"

const faqData = [
  {
    question: "Qu’est-ce qu’une preuve légale utile dans une démarche de résiliation suisse ?",
    answer:
      "On parle surtout d’éléments de preuve : date d’envoi, suivi, accusé de réception ou équivalent selon le canal. Pour une lettre recommandée, l’objectif est de montrer que vous avez respecté les formalités et le délai, et que le destinataire a pu prendre connaissance du courrier. En cas de doute sur votre situation, renseignez-vous auprès d’un professionnel du droit.",
  },
  {
    question: "Le délai de résiliation ou de préavis est-il le même pour tous les contrats en Suisse ?",
    answer:
      "Non. Le délai dépend du type de contrat (assurance, bail, abonnement, emploi…) et des conditions contractuelles ou du cadre légal applicable. Vérifiez toujours votre contrat, les conditions générales et, si besoin, une source officielle ou un conseil qualifié pour ne pas vous tromper de date butoir.",
  },
  {
    question: "Une simple lettre par e-mail suffit-elle pour une résiliation suisse ?",
    answer:
      "Cela dépend des exigences du prestataire ou du texte applicable à votre cas. Souvent, un écrit envoyé de manière traçable est préférable. Beaucoup d’organisations demandent ou recommandent un courrier ; le recommandé est alors un réflexe courant pour disposer d’une preuve d’acheminement et de réception. Vérifiez les modalités prévues pour votre contrat.",
  },
  {
    question: "Puis-je télécharger un PDF avant l’envoi avec NextLetter ?",
    answer:
      "Oui. Vous pouvez conserver une copie de votre lettre au format PDF pour votre dossier personnel ou interne, puis confier l’impression et l’envoi recommandé au flux NextLetter via le prestataire postal.",
  },
  {
    question: "NextLetter convient-il aux PME en Suisse ?",
    answer:
      "Oui. Les PME utilisent NextLetter pour formaliser résiliations, mises en demeure simples, courriers récurrents ou dossiers nécessitant une lettre recommandée avec suivi, sans mobiliser du temps sur les déplacements ou la mise sous pli.",
  },
  {
    question: "NextLetter est-il un cabinet d’avocats ?",
    answer:
      "Non. NextLetter est un outil de génération de lettres et d’envoi de courrier recommandé. Les contenus proposés sont des modèles à adapter ; ils ne remplacent pas un conseil juridique personnalisé.",
  },
]

const relatedModelPaths = [
  "/modeles/lettre-resiliation-assurance-maladie-suisse",
  "/modeles/lettre-resiliation-bail-locataire-suisse",
  "/modeles/lettre-demission-suisse",
  "/modeles/lettre-contestation-facture-suisse",
]

const relatedModels = relatedModelPaths
  .map((p) => ALL_LETTER_MODELS.find((m) => m.path === p))
  .filter(Boolean) as typeof ALL_LETTER_MODELS

const relatedLandings = [
  {
    href: "/envoyer-lettre-en-ligne-suisse",
    title: "Envoyer une lettre en ligne en Suisse",
    subtitle: "Comparatif et procédure sans déplacement",
  },
  {
    href: "/generateur-lettre-suisse",
    title: "Générateur de lettre suisse",
    subtitle: "Rédiger puis envoyer en recommandé",
  },
] as const

export default function PreuveLegaleLettreRecommandeeSuissePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${MOT_CLE_PRINCIPAL} : preuve, délais et envoi recommandé`,
    description:
      "Comprendre l’intérêt de la lettre recommandée en Suisse pour les délais et la traçabilité, éviter les erreurs courantes, utiliser NextLetter pour générer et envoyer.",
    url: `${baseUrl}/preuve-legale-lettre-recommandee-suisse`,
    publisher: { "@type": "Organization", name: "NextLetter" },
  }

  return (
    <>
      <FaqJsonLd id="schema-faq-preuve-legale-recommandee" data={faqData} />
      <Script
        id="schema-article-preuve-legale-recommandee"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title={MOT_CLE_PRINCIPAL} gradient="preuve, délai & tranquillité" />

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Un jour de retard sur un{" "}
              <Link href="/delai-resiliation-assurance-maladie" className="text-brand hover:underline">
                délai
              </Link>
              , une formalité mal adressée, une trace d’envoi floue : en Suisse comme ailleurs, les démarches sensibles
              (résiliation suisse, fin de bail, démission) se jouent souvent sur des détails qui coûtent cher une fois
              la date passée. Si vous devez envoyer une{" "}
              <strong className="text-foreground">lettre recommandée</strong>, mieux vaut anticiper que courir après une
              preuve au dernier moment.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Que vous soyez un particulier qui boucle un dossier personnel ou une PME qui doit enchaîner plusieurs
              courriers administratifs, le scénario est le même : vous voulez un texte clair, un envoi fiable et une
              trace exploitable si la situation s’aiguise. C’est exactement le rôle d’une démarche structurée autour de
              la <strong className="text-foreground">lettre recommandée</strong> et d’outils comme NextLetter, qui
              centralisent la rédaction, le PDF et l’expédition recommandée via prestataire postal.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Ce qu’il faut avoir en tête en Suisse (sans jargon inutile)</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Les règles varient selon la situation : type de contrat, clauses, éventuelles obligations d’information
                  par écrit, etc. En pratique, trois idées reviennent souvent lorsqu’on parle de courrier officiel ou de{" "}
                  <strong className="text-foreground">résiliation suisse</strong> :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Le délai</strong> : date limite, préavis, prise d’effet… tout
                    est généralement calé sur ce que prévoit votre contrat ou le cadre applicable. Une erreur de date ou
                    de calcul peut vous laisser engagé plus longtemps que prévu, ou exposé en cas de litige.
                  </li>
                  <li>
                    <strong className="text-foreground">La lettre recommandée</strong> : beaucoup d’acteurs s’attendent
                    à un courrier qui peut être suivi et dont la distribution laisse une trace exploitable en dossier.
                    C’est un réflexe fréquent lorsqu’on veut une <strong className="text-foreground">preuve légale</strong>{" "}
                    au sens large — c’est-à-dire des éléments sérieux pour établir qu’on a bien envoyé, quand, et que le
                    destinataire a pu recevoir le message.
                  </li>
                  <li>
                    <strong className="text-foreground">La « validité » de votre démarche</strong> : au-delà du fond
                    (motifs, légitimité, etc.), la forme compte souvent : adresse correcte, références de contrat,
                    signature, date, pièces jointes éventuelles. Ce ne sont pas des détails anodins quand une partie
                    conteste plus tard la bonne exécution de la procédure.
                  </li>
                </ul>
                <p>
                  Dans beaucoup de cas concrets — assurance, bail, fournisseur, employeur — la discussion ne porte pas
                  seulement sur « ce que vous souhaitez », mais sur « ce que vous pouvez démontrer » : quand votre
                  intention a été exprimée, sous quelle forme, et avec quels éléments de suivi. D’où l’intérêt de ne pas
                  confondre vitesse d’envoi et qualité de dossier : une{" "}
                  <strong className="text-foreground">preuve légale</strong> utile, ce n’est pas une promesse magique,
                  c’est une combinaison de contenu sérieux et
                  de canal d’acheminement crédible.
                </p>
                <p>
                  Pour le logement, les questions de dates et de préavis méritent souvent une lecture attentive des
                  documents et, le cas échéant, un accompagnement spécialisé : notre{" "}
                  <Link href="/guides/comment-resilier-bail-suisse" className="text-brand font-medium hover:underline">
                    guide sur la résiliation de bail en Suisse
                  </Link>{" "}
                  peut vous aider à structurer votre démarche sans remplacer une analyse au cas par cas.
                </p>
                <p className="text-sm border-l-2 border-brand/40 pl-4">
                  Rappel : cette page vise à vous aider à vous organiser ; elle ne constitue pas un conseil juridique.
                  Pour une situation complexe, rapprochez-vous d’un professionnel compétent.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-7 h-7 text-amber-500 shrink-0" />
                Erreurs fréquentes
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Envoyer trop tard</strong> par rapport au{" "}
                    <strong className="text-foreground">délai</strong> contractuel ou légal : le courrier part un jour
                    férié, le cachet postal ne correspond pas à votre plan, ou vous mélangez date d’envoi et date de
                    réception.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Sous-estimer la trace</strong> : un message informel sans
                    accusé de réception ni suivi peut suffire dans certains cas — mais pas dans d’autres. Pour une{" "}
                    <strong className="text-foreground">lettre recommandée</strong>, l’intérêt est précisément de
                    structurer la preuve d’acheminement.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Oublier l’adresse ou le service destinataire</strong> : une
                    résiliation envoyée à la mauvaise entité peut tourner en courrier perdu, avec perte de temps sur le
                    calendrier.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Rédiger dans la précipitation</strong> : fautes de dates,
                    contradictions, mentions floues. Une <strong className="text-foreground">résiliation suisse</strong>{" "}
                    mal rédigée nourrit les contestations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Ne conserver aucune copie structurée</strong> : même avec une
                    bonne intention, perdre la version finale, les annexes ou les échanges utiles complique la suite.
                    Télécharger un PDF et archiver les éléments de suivi reste une discipline simple… souvent négligée.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Ignorer le calendrier postal</strong> : un envoi prévu « à la
                    limite » du <strong className="text-foreground">délai</strong> laisse peu de marge si le traitement
                    interne du destinataire traîne. Anticiper quelques jours ouvrés réduit une partie du risque purement
                    opérationnel.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Pourquoi le recommandé reste un repère important</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Le recommandé ne « résout » pas automatiquement un litige, mais il répond souvent à une question simple
                que tout le monde comprend : <em>avez-vous vraiment envoyé, et le destinataire a-t-il pu en prendre
                connaissance dans des conditions sérieuses ?</em> Pour une mise en demeure, une fin de relation
                contractuelle ou un courrier sensible, c’est une couche de sérieux que beaucoup d’interlocuteurs
                attendent — surtout lorsque les enjeux financiers ou personnels sont réels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Côté particulier comme côté PME, le recommandé via un prestataire postal reconnu permet de garder une
                chaîne claire entre votre texte, l’envoi physique et les éléments de suivi. C’est précisément ce type de
                dossier qui aide à défendre une position si quelqu’un prétend ne rien avoir reçu, ou reçu « trop tard ».
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Le recommandé ne remplace pas une stratégie : il renforce une démarche déjà cohérente. Si votre courrier
                est ambigu, une trace d’acheminement ne « répare » pas le fond — mais si votre courrier est correct, la
                combinaison « texte propre + <strong className="text-foreground">lettre recommandée</strong> + archive
                PDF » devient un socle beaucoup plus solide pour avancer sereinement, y compris dans une logique de{" "}
                <strong className="text-foreground">résiliation suisse</strong> où chaque partie surveille le calendrier.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Solution simple avec NextLetter</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                NextLetter est un service en ligne pensé pour la Suisse : vous choisissez un modèle adapté (résiliation,
                démission, réclamation, etc.), vous complétez les champs, vous révisez le texte, puis vous pouvez{" "}
                <strong className="text-foreground">télécharger un PDF</strong> pour votre archive. L’envoi physique en{" "}
                <strong className="text-foreground">lettre recommandée</strong> est pris en charge via le flux
                d’impression et d’affranchissement partenaire, avec les éléments de traçabilité associés à un envoi
                recommandé — sans vous déplacer au guichet.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">En trois gestes</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                <li>
                  <strong className="text-foreground">Choisir</strong> un modèle proche de votre situation (ex. fin
                  d’abonnement, sortie d’un contrat, courrier RH ou administratif).
                </li>
                <li>
                  <strong className="text-foreground">Personnaliser</strong> les informations utiles (identités,
                  références, dates, motifs formulés prudemment) et relire avant validation.
                </li>
                <li>
                  <strong className="text-foreground">Envoyer en recommandé</strong> via le parcours NextLetter : vous
                  gardez une copie PDF, le courrier part en recommandé, vous suivez l’acheminement dans une logique de
                  dossier claire pour vous ou votre entreprise.
                </li>
              </ol>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                L’objectif n’est pas de « brûler » une étape juridique, mais de rendre l’exécution simple : moins de
                friction administrative, moins d’oubli de détail, moins de stress quand le <strong className="text-foreground">délai</strong>{" "}
                approche. Pour une PME, cela peut aussi homogénéiser la façon dont les équipes expédient des courriers
                sensibles, au lieu de multiplier les formats maison difficiles à tracer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <FileText className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Modèles</strong> pour les démarches courantes (résiliations,
                    démissions, contestations…).
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Shield className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Preuve légale</strong> au sens de dossier solide : envoi
                    recommandé, suivi, moins de zone grise qu’un simple « j’ai posté ».
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Clock className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Délai</strong> : en réduisant les frictions (rédaction,
                    mise en forme, trajet), vous laissez moins de place au stress de dernière minute.
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Check className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Particuliers & PME</strong> : un même outil pour vos courriers
                    personnels et professionnels récurrents.
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Pour aller plus loin sur la mécanique d’envoi et les bonnes pratiques, consultez notre{" "}
                <Link href="/guides/comment-envoyer-lettre-recommandee-suisse" className="text-brand font-medium hover:underline">
                  guide : comment envoyer une lettre recommandée en Suisse
                </Link>
                , la page dédiée à l’
                <Link href="/envoyer-lettre-en-ligne-suisse" className="text-brand font-medium hover:underline">
                  envoi de lettre en ligne
                </Link>{" "}
                et le{" "}
                <Link href="/generateur-lettre-suisse" className="text-brand font-medium hover:underline">
                  générateur de lettre suisse
                </Link>
                . Vous préparez une assurance ? Le guide{" "}
                <Link href="/guides/comment-resilier-assurance-suisse" className="text-brand font-medium hover:underline">
                  résilier une assurance en Suisse
                </Link>{" "}
                complète utilement cette page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Modèles et pages liées</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {relatedModels.map((model) => (
                  <Link
                    key={model.path}
                    href={model.path}
                    className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">{model.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{model.subtitle}</p>
                  </Link>
                ))}
                {relatedLandings.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">{page.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{page.subtitle}</p>
                  </Link>
                ))}
              </div>
              <Link href="/modeles" className="text-brand font-semibold hover:underline inline-flex items-center gap-1">
                Voir tous les modèles de lettres
              </Link>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((f, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{f.question}</summary>
                    <p className="text-muted-foreground mt-4">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <CtaWhaou
              title="Ne laissez pas une date limite vous surprendre"
              description="Créez et envoyez votre lettre recommandée en Suisse en quelques minutes avec NextLetter"
              buttonText="Ouvrir NextLetter"
              href={addUtmParams(appUrls.base, "landing", "cta", "preuve-legale-lettre-recommandee")}
              secondaryLink={{ href: "/modeles", text: "Parcourir les modèles" }}
              reassurance="Sans déplacement : génération, PDF et envoi recommandé depuis votre navigateur."
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
