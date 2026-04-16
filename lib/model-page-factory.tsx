/**
 * Factory pour générer les props des pages modèles dynamiques
 * Utilisé pour les pages assurance, télécom, banque, leasing, streaming, fitness,
 * médias et utilités générées depuis les configs SEO.
 */

import type { LetterModelTemplateProps } from "@/components/letter-model-template"
import { ALL_LETTER_MODELS } from "./letter-models"
import { extractBrandFromLetterModel, isSeoDynamicModelCategory } from "./model-brand-utils"
import { getPriorityOverride } from "./priority-model-overrides"
import { slugifyBrand } from "./seo-config"

type FaqRow = { question: string; answer: string }

type ClusterFaqKey =
  | "assurance"
  | "telecom"
  | "banque"
  | "leasing"
  | "streaming"
  | "fitness"
  | "media"
  | "utility"

function optionalTipsSection(title: string, lines: string[]) {
  return (
    <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
        {lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </section>
  )
}

function delaysTableSection(caption: string, rows: { left: string; right: string }[]) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-foreground mb-4">Délais et formalités à vérifier</h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">{caption}</p>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Point</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">À contrôler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-muted-foreground">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-3">{r.left}</td>
                <td className="px-4 py-3">{r.right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground mt-4 italic">
        Les délais et obligations réelles figurent dans votre contrat ou les conditions du prestataire — vérifiez-les avant envoi.
      </p>
    </section>
  )
}

function clusterExtraFaqs(key: ClusterFaqKey, brand: string): FaqRow[] {
  switch (key) {
    case "assurance":
      return [
        {
          question: `Puis-je résilier mon assurance ${brand} uniquement par e-mail ou via l'application ?`,
          answer:
            "Cela dépend des modalités acceptées par votre assureur et du type de contrat. Pour sécuriser un délai sensible ou éviter un différend sur la date de réception, un courrier écrit avec preuve d'acheminement reste souvent le choix le plus prudent.",
        },
        {
          question: `Comment savoir si ma résiliation ${brand} a bien été prise en compte ?`,
          answer:
            "Conservez la preuve d'envoi, suivez l'acheminement du recommandé et, si possible, demandez une confirmation écrite de la part de l'assureur. En cas de doute, rapprochez-vous directement de leur service client.",
        },
      ]
    case "telecom":
      return [
        {
          question: `Dois-je restituer du matériel (box, modem, téléphone) pour résilier ${brand} ?`,
          answer:
            "Les obligations de retour ou de restitution dépendent de votre offre et du matériel fourni. Vérifiez votre contrat ou les conditions de location du matériel avant d'envoyer votre lettre.",
        },
        {
          question: `Un préavis ou une durée minimale s'applique-t-il chez ${brand} ?`,
          answer:
            "Souvent oui, mais les règles varient selon l'offre et les conditions générales. Relisez votre contrat pour identifier le délai exact et la date d'effet possible.",
        },
      ]
    case "banque":
      return [
        {
          question: `Dois-je solder mon compte ${brand} avant la clôture ?`,
          answer:
            "En pratique, les banques exigent généralement un solde nul ou un transfert des fonds avant de clôturer. Les modalités exactes figurent dans les conditions de votre établissement.",
        },
        {
          question: `Faut-il résilier cartes, crédits ou produits liés avant le compte ${brand} ?`,
          answer:
            "Très souvent, les produits rattachés doivent être traités dans un ordre précis. Vérifiez auprès de votre banque quels contrats ou cartes doivent être clos en premier.",
        },
      ]
    case "leasing":
      return [
        {
          question: `Que couvre une résiliation de leasing ${brand} par rapport à une simple restitution du véhicule ?`,
          answer:
            "La résiliation ou la fin de contrat peut impliquer des étapes contractuelles distinctes de la seule remise du véhicule (kilométrage, état, frais, rachat, etc.). Votre contrat reste la référence.",
        },
        {
          question: `Puis-je négocier une sortie anticipée avec ${brand} ?`,
          answer:
            "Cela dépend des clauses du contrat et de la politique du financeur. Une lettre claire peut servir de base à l'échange, mais ne remplace pas la lecture des conditions financières applicables.",
        },
      ]
    case "streaming":
      return [
        {
          question: `La résiliation depuis le site ou l'app ${brand} suffit-elle toujours ?`,
          answer:
            "Parfois oui. Si vous voulez une trace indépendante, une date de demande claire ou si la facturation reste litigieuse, un courrier recommandé complète utilement votre dossier.",
        },
        {
          question: `J'ai souscrit ${brand} via un tiers (opérateur, bundle). Que faire ?`,
          answer:
            "Le canal de résiliation peut passer par ce tiers. Vérifiez sur votre facture ou dans votre espace client où se situe le contrat réel avant d'adresser votre courrier.",
        },
      ]
    case "fitness":
      return [
        {
          question: `Un déménagement ou un arrêt médical influence-t-il ma résiliation ${brand} ?`,
          answer:
            "Certaines conditions générales prévoient des cas particuliers, d'autres non. Vérifiez les CGV et, si besoin, joignez les justificatifs demandés par la salle.",
        },
        {
          question: `Une « pause » d'abonnement équivaut-elle à une résiliation chez ${brand} ?`,
          answer:
            "Pas nécessairement. Une suspension peut laisser le contrat actif et des frais à courir. Une résiliation écrite explicite est en général plus sûre pour une fin définitive.",
        },
      ]
    case "media":
      return [
        {
          question: `Comment résilier un pack ${brand} papier et numérique ?`,
          answer:
            "Précisez dans votre lettre quels supports concernent votre demande et sous quelle offre vous êtes abonné, pour éviter qu'une partie de l'abonnement ne continue d'être facturée.",
        },
        {
          question: `Puis-je être facturé après envoi de ma résiliation ${brand} ?`,
          answer:
            "Cela peut arriver si le délai de préavis n'est pas respecté ou si une reconduction s'applique. Conservez la preuve d'envoi et vérifiez les échéances de facturation dans vos conditions.",
        },
      ]
    case "utility":
      return [
        {
          question: `Faut-il un relevé ou une date de fin de fourniture pour résilier ${brand} ?`,
          answer:
            "Selon le fournisseur et le type de contrat, des formalités supplémentaires peuvent être requises. Consultez votre contrat ou le service client avant d'envoyer votre lettre.",
        },
        {
          question: `Puis-je changer de fournisseur sans résilier mon contrat actuel ?`,
          answer:
            "Parfois le nouvel acteur gère la bascule, parfois vous devez résilier vous-même. Vérifiez la procédure pour éviter une double souscription ou une interruption de service.",
        },
      ]
    default:
      return []
  }
}

export function isDynamicModel(slug: string): boolean {
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model) return false
  return isSeoDynamicModelCategory(model.category)
}

export function getDynamicModelProps(slug: string): LetterModelTemplateProps | null {
  const model = ALL_LETTER_MODELS.find((m) => m.path === `/modeles/${slug}`)
  if (!model) return null

  const path = `/modeles/${slug}`
  const brand = extractBrandFromLetterModel(model)

  switch (model.category) {
    case "assurance-marque":
      return getAssuranceBrandProps(brand, path)
    case "telecom-marque":
      return getTelecomBrandProps(brand, path)
    case "banque-marque":
      return getBankBrandProps(brand, path)
    case "leasing-marque":
      return getLeasingBrandProps(brand, path)
    case "streaming-marque":
      return getStreamingBrandProps(brand, path)
    case "fitness-marque":
      return getFitnessBrandProps(brand, path)
    case "media-marque":
      return getMediaBrandProps(brand, path)
    case "utilities":
      return getUtilityProps(brand, path)
    default:
      return null
  }
}

function getGenericFaq(
  subject: string,
  kindLabel: string,
  specificQuestion: string,
  specificAnswer: string,
  warningTarget?: string,
) {
  return [
    { question: specificQuestion, answer: specificAnswer },
    {
      question: `Dois-je envoyer ma résiliation ${subject} par courrier recommandé ?`,
      answer:
        "Le courrier recommandé est souvent conseillé pour disposer d'une preuve d'envoi et de réception, surtout si un délai ou une contestation peuvent poser problème.",
    },
    {
      question: `Que doit contenir une lettre de résiliation ${kindLabel} ${subject} ?`,
      answer:
        "Votre lettre devrait en général reprendre vos coordonnées, la référence client ou contrat, la date souhaitée de fin, ainsi qu'une formulation claire de résiliation. Vérifiez toujours les conditions propres à votre contrat.",
    },
    {
      question: "NextLetter fournit-il des conseils juridiques ?",
      answer: `Non. NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour des questions spécifiques, rapprochez-vous de ${warningTarget || subject} ou d'un professionnel compétent.`,
    },
  ]
}

function fullDynamicFaq(
  subject: string,
  kindLabel: string,
  specificQuestion: string,
  specificAnswer: string,
  warningTarget: string | undefined,
  cluster: ClusterFaqKey,
  brand: string,
): FaqRow[] {
  return [...getGenericFaq(subject, kindLabel, specificQuestion, specificAnswer, warningTarget), ...clusterExtraFaqs(cluster, brand)]
}

function extraSavoirFromPriority(texts?: string[]) {
  if (!texts?.length) return null
  return texts.map((t, i) => (
    <p key={`prio-savoir-${i}`} className="text-muted-foreground leading-relaxed">
      {t}
    </p>
  ))
}

function buildTemplate(params: {
  faqSchemaId: string
  faqData: { question: string; answer: string }[]
  h1Title: string
  h1Gradient: string
  introMain: string
  savoirContent: React.ReactNode
  steps: { title: string; description: string }[]
  letterContent: { title: string; subtitle: string }[]
  optionalContent?: React.ReactNode
  ctaTitle: string
  ctaDescription: string
  ctaSecondaryHref: string
  utmCampaign: string
  canonicalPath: string
  geoDirectAnswer?: string
}): LetterModelTemplateProps {
  return {
    faqSchemaId: params.faqSchemaId,
    faqData: params.faqData,
    h1Title: params.h1Title,
    h1Gradient: params.h1Gradient,
    intro: {
      main: params.introMain,
      sub: "Sans déplacement. Conforme au droit suisse avec envoi recommandé et preuve d'envoi.",
    },
    savoirContent: params.savoirContent,
    steps: params.steps,
    letterContent: params.letterContent,
    optionalContent: params.optionalContent,
    ctaTitle: params.ctaTitle,
    ctaDescription: params.ctaDescription,
    ctaButtonText: "Générer et envoyer ma lettre maintenant",
    ctaReassurance: "Envoi en quelques minutes – preuve conservée dans votre dashboard",
    utmCampaign: params.utmCampaign,
    canonicalPath: params.canonicalPath,
    excludeFromOtherModels: params.canonicalPath,
    ctaSecondaryHref: params.ctaSecondaryHref,
    howToName: `${params.h1Title} ${params.h1Gradient}`.trim(),
    geoDirectAnswer: params.geoDirectAnswer,
  }
}

function getAssuranceBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("assurance", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-assurance-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "assurance",
        `Quand envoyer ma lettre de résiliation assurance ${brand} en Suisse ?`,
        `Le délai dépend du type de contrat et de la police ${brand}. Vérifiez les conditions générales et anticipez l'envoi afin de respecter la date limite applicable à votre situation.`,
        brand,
        "assurance",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation assurance ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre assurance ${brand} en Suisse en quelques minutes. Votre lettre est générée, personnalisée et envoyée par courrier recommandé avec preuve d'envoi.`,
    savoirContent: (
      <>
        <p>
          En Suisse, la résiliation d'une assurance se fait souvent <strong>par écrit</strong>, avec une attention particulière au <strong>délai</strong> de préavis et à la date de réception. Pour une assurance {brand}, vérifiez les conditions propres à votre contrat.
        </p>
        <p>
          L'envoi d'une <strong>lettre recommandée</strong> est fréquemment conseillé afin de disposer d'une trace sérieuse en cas de discussion sur la réception ou la date de résiliation.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter ne fournit pas de conseil juridique personnalisé. En cas de doute, vérifiez vos documents {brand} ou rapprochez-vous d'un professionnel compétent.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation assurance ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Renseignez vos coordonnées, références de police et date souhaitée." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée avec preuve d'envoi." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références contrat", subtitle: `Numéro de police ou d'assuré ${brand}` },
      { title: "Date de résiliation", subtitle: "Date d'effet souhaitée" },
      { title: "Formulation claire", subtitle: "Résiliation explicite et sans ambiguïté" },
      { title: "Signature", subtitle: "Votre nom et signature" },
      { title: "Pièces utiles", subtitle: "Selon le contrat ou la situation" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Pour une police auprès de ${brand}, les échéances varient selon le produit (maladie de base, complémentaire, autre branche). Vos documents contractuels font foi.`,
          [
            { left: "Produit souscrit", right: "Identifiez la branche et la formule auprès de votre assureur." },
            { left: "Préavis et date limite", right: "Repérez la durée et la date à respecter pour une prise d'effet souhaitée." },
            { left: "Preuve d'envoi", right: "Utile lorsque le calendrier est critique ou en cas de litige sur la réception." },
            { left: "Service destinataire", right: "Utilisez l'adresse de résiliation officielle de l'assureur." },
          ],
        )}
        {optionalTipsSection(`Avant d'envoyer chez ${brand}`, [
          `Contrôlez votre numéro d'assuré ou de police ${brand}.`,
          "Indiquez une date d'effet claire et cohérente avec votre contrat.",
          "Si vous changez d'offre ou d'assureur, vérifiez ce que votre contrat exige comme mention.",
          "Gardez une copie PDF et les preuves d'envoi dans votre dossier.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier votre assurance ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve d'envoi et suivi.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-assurance-maladie-suisse",
    utmCampaign: `resiliation-assurance-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier une assurance ${brand} en Suisse, le respect du délai contractuel et une demande par écrit traçable sont en pratique essentiels. NextLetter génère votre lettre et l'envoie en recommandé avec preuve d'envoi.`,
  })
}

function getTelecomBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("telecom", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "abonnement",
        `Quel délai pour résilier ${brand} ?`,
        "Le délai dépend du contrat, d'une durée minimale éventuelle et des conditions générales. Vérifiez vos documents avant l'envoi de votre lettre.",
        brand,
        "telecom",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre abonnement ${brand} en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.`,
    savoirContent: (
      <>
        <p>
          Pour un abonnement {brand}, le <strong>délai</strong> de résiliation dépend du contrat, d'une reconduction tacite éventuelle et du canal accepté par l'opérateur. Une demande <strong>par écrit</strong> reste souvent la voie la plus prudente.
        </p>
        <p>
          L'envoi en <strong>lettre recommandée</strong> est utile si vous souhaitez conserver une preuve claire de votre démarche et éviter toute discussion sur la date de réception.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter est un service de rédaction et d'envoi. Vérifiez toujours les conditions {brand} applicables à votre abonnement.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos coordonnées, numéro client et date de fin souhaitée." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références abonnement", subtitle: `Numéro client ${brand}` },
      { title: "Date de résiliation", subtitle: "Date d'effet souhaitée" },
      { title: "Demande de confirmation", subtitle: "Clôture ou confirmation écrite si nécessaire" },
      { title: "Signature", subtitle: "Votre nom et signature" },
      { title: "Mentions utiles", subtitle: "Retour matériel ou options selon le contrat" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Les abonnements ${brand} (mobile, Internet, TV combinée) n'ont pas tous les mêmes délais. Vérifiez votre offre, une éventuelle durée minimale et les modalités de fin.`,
          [
            { left: "Type d'offre", right: "Forfait, engagement, bundle : les règles diffèrent." },
            { left: "Préavis", right: "Repérez la durée et la date d'effet possible dans les CGV." },
            { left: "Matériel", right: "Location de box ou modem : conditions de retour éventuelles." },
            { left: "Preuve", right: "Recommandé si vous voulez documenter la date de votre demande." },
          ],
        )}
        {optionalTipsSection(`Check-list ${brand}`, [
          "Notez votre numéro client et l'adresse de résiliation indiquée par l'opérateur.",
          "Précisez la date de fin souhaitée et demandez une confirmation écrite si c'est utile.",
          "Vérifiez si des options payantes ou des essais doivent être arrêtés séparément.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-mobile",
    utmCampaign: `resiliation-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier ${brand} en Suisse, identifiez le délai contractuel et formalisez votre demande par écrit traçable si vous voulez une preuve claire. NextLetter rédige et envoie votre lettre recommandée.`,
  })
}

function getBankBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("banque", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-compte-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "compte",
        `Comment fermer un compte ${brand} en Suisse ?`,
        "La clôture d'un compte ou d'une carte dépend des conditions de l'établissement, des produits liés et des éventuels frais ou obligations en cours. Vérifiez les modalités prévues par votre banque.",
        brand,
        "banque",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation compte ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Fermez votre compte ou service ${brand} en Suisse avec une lettre claire, prête à être envoyée en recommandé avec preuve d'envoi.`,
    savoirContent: (
      <>
        <p>
          Pour clôturer un compte, une carte ou un service financier {brand}, un écrit reste souvent préférable, surtout si vous devez garder une trace de votre demande, d'une restitution de moyens de paiement ou d'un transfert de solde.
        </p>
        <p>
          Une <strong>lettre recommandée</strong> permet de documenter la date d'envoi et de réception. C'est particulièrement utile lorsque vous voulez éviter qu'un prélèvement, des frais ou une reconduction ne subsistent après votre demande.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ Vérifiez les conditions spécifiques de clôture {brand}, les produits annexes et les éventuels délais avant envoi.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de clôture ou résiliation ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos références client, IBAN ou numéro de carte, selon le cas." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée, avec preuve d'envoi." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Référence bancaire", subtitle: `IBAN, compte ou produit ${brand}` },
      { title: "Instruction de clôture", subtitle: "Demande explicite et date souhaitée" },
      { title: "Coordonnées de virement", subtitle: "Compte de transfert si nécessaire" },
      { title: "Demande de confirmation", subtitle: "Confirmation écrite de clôture" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `La clôture chez ${brand} peut dépendre de cartes, crédits, comptes joints ou services numériques. Vérifiez l'ordre des opérations recommandé par la banque.`,
          [
            { left: "Produits liés", right: "Cartes, crédits, comptes épargne : à traiter selon les règles de l'établissement." },
            { left: "Solde", right: "Transfert ou clôture après apurement selon les conditions." },
            { left: "Confirmation", right: "Demander une attestation de clôture peut être utile pour votre dossier." },
            { left: "Preuve d'envoi", right: "Recommandé pour tracer votre demande de clôture." },
          ],
        )}
        {optionalTipsSection(`Avant la clôture ${brand}`, [
          "Listez tous les prélèvements et mandats encore actifs sur le compte.",
          "Mettez à jour votre RIB auprès des créanciers importants avant la fermeture.",
          "Conservez le PDF et la preuve d'envoi de votre courrier.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à clôturer votre compte ${brand} ?`,
    ctaDescription: "Générez votre lettre de résiliation ou clôture et envoyez-la avec preuve d'envoi.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-suisse",
    utmCampaign: `resiliation-compte-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour clôturer un compte ou un produit ${brand} en Suisse, une demande écrite avec preuve d'acheminement sécurise souvent votre dossier. NextLetter prépare la lettre et l'envoi recommandé.`,
  })
}

function getLeasingBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("leasing", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-leasing-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "leasing",
        `Peut-on résilier un leasing ${brand} avant terme ?`,
        "Cela dépend du contrat, d'une reprise éventuelle, d'indemnités et des conditions prévues. Vérifiez toujours la documentation contractuelle avant d'agir.",
        brand,
        "leasing",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation leasing ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Préparez votre lettre de résiliation ou de demande liée à votre contrat de leasing ${brand} en Suisse, puis envoyez-la en recommandé avec preuve.`,
    savoirContent: (
      <>
        <p>
          Un contrat de leasing ou de mobilité comporte souvent des clauses spécifiques : durée minimale, restitution, kilométrage, rachat ou résiliation anticipée. Le <strong>délai</strong> et les conséquences pratiques doivent être vérifiés dans votre contrat.
        </p>
        <p>
          Une demande <strong>par écrit</strong> envoyée en <strong>lettre recommandée</strong> aide à garder une trace précise de vos démarches, surtout si la sortie du contrat peut être discutée.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter ne remplace pas la lecture de votre contrat de leasing {brand} ni un avis professionnel si la situation est complexe.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation leasing ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos références de contrat, véhicule ou service, ainsi que votre demande." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références contrat", subtitle: `Numéro de leasing ou dossier ${brand}` },
      { title: "Objet de la demande", subtitle: "Résiliation, sortie anticipée ou restitution" },
      { title: "Date souhaitée", subtitle: "Date d'effet ou de fin souhaitée" },
      { title: "Véhicule ou service", subtitle: "Informations utiles d'identification" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Un contrat de leasing ${brand} comporte en général des clauses précises sur la durée, la restitution et les coûts éventuels. Votre contrat et les échanges avec le financeur priment.`,
          [
            { left: "Fin normale ou anticipée", right: "Vérifiez les conditions financières et les étapes prévues." },
            { left: "Restitution", right: "Date, lieu et état du véhicule ou du bien selon le contrat." },
            { left: "Assurances liées", right: "Vérifiez si des polices doivent être adaptées ou résiliées." },
            { left: "Preuve", right: "Courrier recommandé pour tracer une demande sensible." },
          ],
        )}
        {optionalTipsSection(`Points d'attention ${brand}`, [
          "Joignez les références de contrat et d'immatriculation si c'est pertinent.",
          "Formulez clairement votre demande : fin à l'échéance, sortie anticipée ou autre selon votre situation.",
          "Conservez toute réponse écrite du financeur.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à envoyer votre courrier ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la en recommandé avec preuve.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-assurance-auto",
    utmCampaign: `resiliation-leasing-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour une démarche de fin de leasing ou de résiliation ${brand}, une lettre claire et une preuve d'envoi aident à sécuriser votre dossier. NextLetter génère le courrier et gère l'envoi recommandé.`,
  })
}

function getStreamingBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("streaming", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-abonnement-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "abonnement",
        `Comment résilier mon abonnement ${brand} ?`,
        "Les modalités dépendent de la facturation, du canal de souscription et des conditions générales. Vérifiez si une simple désactivation suffit ou si un courrier écrit est utile dans votre cas.",
        brand,
        "streaming",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation abonnement ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre abonnement ${brand} en Suisse avec une lettre prête à être envoyée en recommandé lorsque vous souhaitez une preuve claire de votre demande.`,
    savoirContent: (
      <>
        <p>
          Certains services de streaming ou de divertissement permettent une résiliation en ligne, mais une demande <strong>par écrit</strong> peut rester utile si vous voulez une trace solide, notamment en cas de facturation contestée ou de prolongation non souhaitée.
        </p>
        <p>
          Une <strong>lettre recommandée</strong> est pertinente lorsque la question du <strong>délai</strong>, d'une date de fin ou d'une preuve d'envoi est importante pour votre dossier.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ Vérifiez les conditions spécifiques de l'abonnement {brand}, en particulier si le service a été souscrit via une plateforme tierce.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos identifiants client et la date de fin souhaitée." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée si vous souhaitez formaliser la résiliation." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références abonnement", subtitle: `Compte ou identifiant ${brand}` },
      { title: "Date de fin souhaitée", subtitle: "Demande de résiliation claire" },
      { title: "Demande de confirmation", subtitle: "Confirmation écrite ou arrêt de facturation" },
      { title: "Motif éventuel", subtitle: "Optionnel selon votre situation" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Les services comme ${brand} facturent souvent par cycle ou par offre groupée. Vérifiez où se trouve le contrat réel (fournisseur direct, opérateur, bundle).`,
          [
            { left: "Canal de souscription", right: "Application, site, tiers : la procédure peut différer." },
            { left: "Fin de période", right: "Repérez la date de renouvellement ou de prélèvement suivant." },
            { left: "Preuve", right: "Utile si la facturation continue après votre demande." },
            { left: "Identifiant", right: "E-mail ou ID client utilisé à l'inscription." },
          ],
        )}
        {optionalTipsSection(`Conseils pour ${brand}`, [
          "Vérifiez quels moyens de paiement sont encore actifs après résiliation.",
          "Si vous partagez l'abonnement en famille, précisez le compte concerné.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la avec preuve d'envoi si vous souhaitez formaliser votre demande.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-suisse",
    utmCampaign: `resiliation-abonnement-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier ${brand} avec une trace solide en Suisse, une lettre recommandée complète souvent une résiliation en ligne. NextLetter génère le texte et expédie le courrier avec preuve d'envoi.`,
  })
}

function getFitnessBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("fitness", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-fitness-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "fitness",
        `Quel délai pour résilier ${brand} ?`,
        "Le délai dépend du contrat, de l'engagement initial et des conditions de reconduction. Vérifiez votre abonnement avant d'envoyer votre lettre.",
        brand,
        "fitness",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation fitness ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre abonnement ${brand} en Suisse avec une lettre claire, prête à être envoyée en recommandé avec preuve d'envoi.`,
    savoirContent: (
      <>
        <p>
          Les salles de sport fonctionnent souvent avec des durées minimales, des reconductions automatiques et un <strong>délai</strong> précis à respecter. Une demande <strong>par écrit</strong> vous aide à éviter les ambiguïtés.
        </p>
        <p>
          Une <strong>lettre recommandée</strong> est particulièrement utile si vous voulez pouvoir prouver la date de votre demande et limiter le risque d'une facturation prolongée.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ Vérifiez les conditions {brand}, notamment les cas particuliers comme déménagement, santé ou engagement annuel.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation fitness ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos coordonnées, numéro de membre et date de fin souhaitée." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée avec preuve d'envoi." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Numéro de membre", subtitle: `Référence client ${brand}` },
      { title: "Date de fin souhaitée", subtitle: "Selon votre contrat" },
      { title: "Motif éventuel", subtitle: "Optionnel selon les CGV" },
      { title: "Demande de confirmation", subtitle: "Confirmation de fin d'abonnement" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Les salles ${brand} appliquent souvent des périodes d'engagement et des préavis précis. Vos CGV et votre contrat d'adhésion sont la référence.`,
          [
            { left: "Engagement", right: "Durée minimale ou offre promotionnelle éventuelle." },
            { left: "Préavis", right: "Délai avant la prochaine échéance ou fin de période." },
            { left: "Reconduction", right: "Vérifiez si l'abonnement se renouvelle tacitement." },
            { left: "Preuve", right: "Recommandé pour dater votre demande si un litige survient." },
          ],
        )}
        {optionalTipsSection(`Avant d'envoyer à ${brand}`, [
          "Indiquez votre numéro de membre et la succursale si utile.",
          "Précisez la date de fin souhaitée conformément aux CGV.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier votre abonnement ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la en recommandé avec preuve.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-fitness",
    utmCampaign: `resiliation-fitness-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier ${brand} en Suisse, respectez le préavis contractuel et conservez une preuve de votre demande. NextLetter rédige la lettre et l'envoie en recommandé.`,
  })
}

function getMediaBrandProps(brand: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("media", brand)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-presse-${slugifyBrand(brand)}`,
    faqData: [
      ...fullDynamicFaq(
        brand,
        "abonnement presse",
        `Comment résilier un abonnement ${brand} ?`,
        "Le délai et le mode de résiliation dépendent de l'éditeur, du support papier ou numérique et d'une éventuelle reconduction. Vérifiez vos conditions d'abonnement.",
        brand,
        "media",
        brand,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation abonnement presse ${brand}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre abonnement ${brand} en Suisse avec une lettre claire, prête à être envoyée en recommandé si vous souhaitez conserver une preuve.`,
    savoirContent: (
      <>
        <p>
          Les abonnements presse ou média peuvent prévoir des périodes minimales, des renouvellements automatiques et un <strong>délai</strong> à respecter. Une demande <strong>par écrit</strong> aide à sécuriser votre dossier.
        </p>
        <p>
          Si vous voulez éviter toute discussion sur la date de fin ou la poursuite de la facturation, l'envoi d'une <strong>lettre recommandée</strong> reste une solution prudente.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ Vérifiez les modalités {brand}, surtout si votre abonnement comprend à la fois du papier, du numérique ou des offres promotionnelles.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation ${brand}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Ajoutez vos références d'abonnement et la date souhaitée de résiliation." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre recommandée." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Référence abonnement", subtitle: `Numéro client ${brand}` },
      { title: "Support concerné", subtitle: "Papier, numérique ou offre combinée" },
      { title: "Date de fin souhaitée", subtitle: "Selon le contrat" },
      { title: "Demande de confirmation", subtitle: "Confirmation de résiliation" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `Les abonnements ${brand} peuvent combiner papier, numérique ou offres partenaires. Précisez ce que vous résiliez pour éviter une facturation résiduelle.`,
          [
            { left: "Formule", right: "Standard, premium, famille : vérifiez ce qui est inclus." },
            { left: "Préavis", right: "Selon l'éditeur et la période de facturation." },
            { left: "Accès numérique", right: "Indiquez si l'accès en ligne doit aussi cesser." },
            { left: "Preuve", right: "Recommandé pour tracer la date d'envoi." },
          ],
        )}
        {optionalTipsSection(`Bonnes pratiques ${brand}`, [
          "Joignez votre numéro d'abonné ou l'adresse de livraison papier si applicable.",
          "Demandez une confirmation écrite de résiliation si vous anticipez un problème de facturation.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier votre abonnement ${brand} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la avec preuve d'envoi.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-abonnement-suisse",
    utmCampaign: `resiliation-presse-${slugifyBrand(brand)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier un abonnement média ${brand} en Suisse, une lettre recommandée documente votre demande et la date d'envoi. NextLetter génère le courrier et assure l'expédition recommandée.`,
  })
}

function getUtilityProps(utility: string, path: string): LetterModelTemplateProps {
  const po = getPriorityOverride("utility", utility)
  return buildTemplate({
    faqSchemaId: `schema-faq-resiliation-${slugifyBrand(utility)}`,
    faqData: [
      ...fullDynamicFaq(
        utility,
        "contrat",
        `Quel délai pour résilier mon contrat ${utility} ?`,
        "Le délai varie selon le fournisseur, le type de contrat et les conditions applicables à votre dossier. Vérifiez toujours votre documentation contractuelle.",
        `votre fournisseur ${utility}`,
        "utility",
        utility,
      ),
      ...(po?.extraFaqs ?? []),
    ],
    h1Title: `Résiliation ${utility}`,
    h1Gradient: "en Suisse",
    introMain:
      po?.introMain ??
      `Résiliez votre contrat ${utility} en Suisse en quelques minutes. Votre lettre est générée et envoyée par courrier recommandé avec preuve.`,
    savoirContent: (
      <>
        <p>
          En Suisse, la résiliation d'un contrat {utility} est souvent plus simple lorsqu'elle est formulée <strong>par écrit</strong>. Le <strong>délai</strong> dépend du fournisseur et du contrat souscrit.
        </p>
        <p>
          L'envoi par <strong>lettre recommandée</strong> est recommandé si vous souhaitez conserver une preuve d'envoi et de réception dans votre dossier.
        </p>
        {extraSavoirFromPriority(po?.savoirParagraphs)}
        <p className="text-sm italic pt-4 border-t border-border">
          ⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Vérifiez toujours les modalités exactes auprès de votre fournisseur.
        </p>
      </>
    ),
    steps: [
      { title: "Étape 1 – Choisissez le modèle", description: `Sélectionnez le modèle de résiliation ${utility}.` },
      { title: "Étape 2 – Complétez vos informations", description: "Renseignez vos coordonnées, références client et date souhaitée." },
      { title: "Étape 3 – Envoyez par courrier avec preuve", description: "NextLetter imprime et envoie votre lettre par courrier recommandé." },
    ],
    letterContent: [
      { title: "Vos coordonnées", subtitle: "Nom, adresse, contact" },
      { title: "Références contrat", subtitle: `Numéro client ${utility}` },
      { title: "Date de résiliation", subtitle: "Date d'effet souhaitée" },
      { title: "Demande explicite", subtitle: "Résiliation claire et sans ambiguïté" },
      { title: "Demande de confirmation", subtitle: "Confirmation écrite si nécessaire" },
      { title: "Signature", subtitle: "Votre nom et signature" },
    ],
    optionalContent: (
      <>
        {delaysTableSection(
          `La résiliation d'un contrat ${utility} dépend du fournisseur, du type d'installation et parfois d'un délai légal ou contractuel. Vérifiez votre facture et vos conditions.`,
          [
            { left: "Fournisseur", right: "Identifiez l'entité contractuelle et le service client résiliation." },
            { left: "Préavis", right: "Durée courante selon contrat ; confirmez sur vos documents." },
            { left: "Relevés / accès", right: "Certains contrats prévoient lecture ou accès aux locaux." },
            { left: "Preuve", right: "Recommandé pour tracer votre demande." },
          ],
        )}
        {optionalTipsSection(`Avant d'envoyer (${utility})`, [
          "Indiquez votre point de livraison ou numéro de point si la facture en comporte un.",
          "Précisez la date de fin souhaitée et demandez confirmation si nécessaire.",
          ...(po?.additionalTips ?? []),
        ])}
      </>
    ),
    ctaTitle: `Prêt à résilier votre contrat ${utility} ?`,
    ctaDescription: "Générez votre lettre en quelques minutes et envoyez-la par courrier recommandé avec preuve.",
    ctaSecondaryHref: "/modeles/lettre-resiliation-internet-suisse",
    utmCampaign: `resiliation-${slugifyBrand(utility)}`,
    canonicalPath: path,
    geoDirectAnswer:
      po?.geoDirectAnswer ??
      `Pour résilier un contrat ${utility} en Suisse, vérifiez le préavis et formalisez votre demande par écrit traçable si vous voulez une preuve. NextLetter génère la lettre et l'envoi recommandé.`,
  })
}
