/**
 * Snippets SEO prioritaires par marque / cluster (Suisse).
 * Enrichit les pages dynamiques les plus recherchées sans dupliquer des centaines de fichiers.
 */

import type { LetterModelCategory } from "./letter-models"
import { slugifyBrand } from "./seo-config"

export type PriorityCluster =
  | "assurance"
  | "telecom"
  | "banque"
  | "leasing"
  | "streaming"
  | "fitness"
  | "media"
  | "utility"

export type PriorityBrandOverride = {
  /** Remplace le paragraphe d'intro principal si défini */
  introMain?: string
  /** Paragraphes ajoutés dans « Ce qu'il faut savoir » (avant le disclaimer) */
  savoirParagraphs?: string[]
  /** Puces ajoutées aux check-lists « avant envoi » */
  additionalTips?: string[]
  /** FAQ supplémentaires (après le bloc FAQ dynamique standard) */
  extraFaqs?: { question: string; answer: string }[]
  /** Réponse directe GEO (remplace le défaut si défini) */
  geoDirectAnswer?: string
  metaTitle?: string
  metaDescription?: string
}

const OVERRIDES: Record<string, PriorityBrandOverride> = {
  "assurance:css": {
    introMain:
      "Résiliez votre assurance maladie auprès de CSS en Suisse avec une lettre structurée et un envoi recommandé pour sécuriser votre dossier et vos délais.",
    savoirParagraphs: [
      "CSS propose des modèles de police maladie de base et complémentaire : vérifiez lequel vous résiliez et sous quel numéro d'assuré.",
      "Si vous changez de caisse-maladie, vérifiez sur vos documents quelles mentions ou coordonnées votre nouvelle assurance attend de votre part.",
    ],
    additionalTips: [
      "Indiquez clairement si la résiliation concerne la LAMal, une complémentaire ou les deux.",
      "Conservez une copie de votre carte d'assuré et le dernier avis de primes pour vos références.",
    ],
    extraFaqs: [
      {
        question: "Où envoyer ma résiliation CSS ?",
        answer:
          "Utilisez l'adresse du service résiliation indiquée sur votre police, votre espace assuré ou la correspondance officielle de CSS. Une erreur d'adresse retarde souvent le traitement.",
      },
    ],
    geoDirectAnswer:
      "Pour résilier CSS en Suisse, le bon réflexe est de respecter le délai contractuel et d'envoyer une demande par écrit traçable. NextLetter génère votre lettre et l'expédie en recommandé avec preuve d'envoi.",
    metaTitle: "Lettre résiliation CSS assurance maladie Suisse – recommandé",
    metaDescription:
      "Modèle de résiliation CSS : lettre claire, PDF, envoi recommandé avec preuve. Vérifiez police LAMal ou complémentaire et délais sur vos documents.",
  },
  "assurance:helsana": {
    savoirParagraphs: [
      "Helsana distingue souvent assurance de base et complémentaires : votre courrier doit refléter précisément le produit concerné.",
    ],
    additionalTips: [
      "Vérifiez sur votre espace client Helsana le libellé exact de votre contrat et le service destinataire.",
    ],
    extraFaqs: [
      {
        question: "Puis-je résilier Helsana et garder une autre complémentaire ?",
        answer:
          "Cela dépend de la façon dont vos contrats sont structurés. Vérifiez vos polices et, en cas de doute, le service client Helsana ou un conseiller compétent.",
      },
    ],
    metaDescription:
      "Résiliation Helsana en Suisse : lettre type, envoi recommandé, preuve d'envoi. Contrôlez préavis et produit (base / complémentaire) sur vos documents.",
  },
  "assurance:swica": {
    savoirParagraphs: [
      "SWICA est une référence sur le marché suisse : les demandes de résiliation sont volumineuses en période d'échéance — anticipez l'envoi.",
    ],
    additionalTips: ["Joignez ou citez votre numéro de police SWICA tel qu'il figure sur vos documents."],
    metaTitle: "Résiliation SWICA Suisse – lettre recommandée & preuve",
  },
  "assurance:assura": {
    savoirParagraphs: [
      "Assura couvre de nombreux assurés en Suisse : une demande floue sur le produit ou la date peut entraîner des allers-retours par courrier.",
    ],
    additionalTips: ["Précisez le type de contrat (base, complémentaire, autre) et la date d'effet souhaitée."],
  },
  "assurance:concordia": {
    additionalTips: ["Vérifiez si votre contrat Concordia est lié à une offre groupe ou individuelle : l'adresse de résiliation peut différer."],
  },
  "assurance:axa": {
    savoirParagraphs: [
      "AXA propose plusieurs branches en Suisse : assurez-vous que votre résiliation vise bien la branche maladie et le bon numéro de contrat.",
    ],
    metaTitle: "Résiliation AXA assurance maladie Suisse – modèle lettre",
  },
  "assurance:generali": {
    additionalTips: ["Repérez sur votre police Generali le service « résiliation » ou « service client » et l'adresse postale officielle."],
  },
  "telecom:swisscom": {
    introMain:
      "Résiliez Swisscom (mobile, Internet, TV) en Suisse avec une lettre recommandée lorsque vous voulez une preuve claire de votre demande et de sa date.",
    savoirParagraphs: [
      "Les offres Swisscom combinent souvent plusieurs services : indiquez dans votre lettre quels abonnements doivent cesser pour éviter une facturation résiduelle.",
    ],
    additionalTips: [
      "Vérifiez la location de la box Internet TV et les éventuels frais de retour matériel.",
      "Si vous êtes encore engagé, citez votre offre et la date de fin d'engagement telle qu'elle apparaît sur votre contrat.",
    ],
    extraFaqs: [
      {
        question: "Puis-je résilier Swisscom depuis l'étranger ?",
        answer:
          "Souvent oui via l'espace client, mais un courrier recommandé peut être utile si vous devez prouver une date de demande ou si votre situation est litigieuse. Vérifiez l'adresse postale du service résiliation.",
      },
    ],
    geoDirectAnswer:
      "Pour résilier Swisscom en Suisse, formalisez votre demande par écrit traçable si vous voulez une preuve solide. NextLetter rédige la lettre et gère l'envoi recommandé avec suivi.",
    metaTitle: "Résiliation Swisscom Suisse – lettre recommandée | NextLetter",
    metaDescription:
      "Résiliez Swisscom : modèle de lettre, PDF, envoi recommandé avec preuve. Précisez mobile, fibre, TV et retour matériel selon votre contrat.",
  },
  "telecom:sunrise": {
    savoirParagraphs: [
      "Sunrise propose des offres mobiles et box : une résiliation partielle sans précision peut laisser actifs des modules payants.",
    ],
    additionalTips: ["Contrôlez les options (roaming, TV, équipements) qui doivent être stoppées en même temps que le contrat principal."],
  },
  "telecom:salt": {
    additionalTips: ["Vérifiez sur votre espace Salt les éventuels engagements ou facilités de paiement liés à du matériel."],
  },
  "telecom:yallo": {
    savoirParagraphs: [
      "Yallo est une marque low-cost souvent liée à des offres prépayées ou sans engagement, mais les CGV peuvent prévoir des cas particuliers — relisez votre contrat.",
    ],
  },
  "telecom:wingo": {
    additionalTips: ["Wingo fait partie de l'écosystème Swisscom : utilisez l'adresse de résiliation indiquée pour votre produit Wingo."],
  },
  "banque:ubs": {
    introMain:
      "Demandez la clôture de votre compte ou produit UBS en Suisse par courrier recommandé pour garder une trace de votre demande et des dates.",
    savoirParagraphs: [
      "UBS regroupe souvent comptes, cartes, crédits et services numériques : la clôture peut nécessiter plusieurs étapes selon votre relation bancaire.",
    ],
    additionalTips: [
      "Listez les prélèvements et salaires encore crédités sur le compte à modifier avant clôture.",
      "Si vous avez un compte joint, vérifiez les signatures requises sur la demande.",
    ],
    extraFaqs: [
      {
        question: "Combien de temps prend la clôture d'un compte UBS ?",
        answer:
          "Le délai dépend des produits actifs, des soldes et des validations internes. Une demande écrite avec preuve d'envoi aide à suivre votre dossier auprès de la banque.",
      },
    ],
    metaTitle: "Clôture compte UBS Suisse – lettre type & envoi recommandé",
    metaDescription:
      "Lettre de clôture UBS : demande écrite, PDF, envoi recommandé. Vérifiez cartes, crédits et soldes avant envoi — NextLetter facilite la formalisation.",
  },
  "banque:postfinance": {
    savoirParagraphs: [
      "PostFinance propose comptes, cartes et parfois produits liés à d'autres entités : identifiez tout ce qui doit être clos.",
    ],
    additionalTips: ["Vérifiez si des services e-finance ou des cartes prépayées doivent être résiliés séparément."],
  },
  "banque:raiffeisen": {
    additionalTips: [
      "Avec Raiffeisen, votre agence régionale ou coopérative peut être le point de contact : l'adresse de résiliation figure souvent sur vos relevés ou contrats.",
    ],
  },
  "banque:neon": {
    savoirParagraphs: [
      "Les néobanques comme Neon gèrent la clôture souvent en grande partie dans l'application, mais un courrier recommandé reste utile pour tracer une demande sensible.",
    ],
  },
  "banque:revolut": {
    savoirParagraphs: [
      "Revolut peut facturer via une entité européenne selon votre offre : vérifiez l'adresse contractuelle et le service à contacter pour une résiliation écrite.",
    ],
  },
  "leasing:amag-leasing": {
    savoirParagraphs: [
      "AMAG Leasing concerne souvent des véhicules et des conditions de kilométrage : votre contrat précise les étapes de fin ou de rachat.",
    ],
    additionalTips: ["Joignez ou citez le numéro de contrat de leasing et l'immatriculation dans votre lettre."],
  },
  "leasing:mobility": {
    introMain:
      "Résiliez ou adaptez votre abonnement Mobility en Suisse avec une lettre claire si vous devez formaliser une fin de contrat par écrit recommandé.",
    savoirParagraphs: [
      "Mobility combine usage et abonnements : vérifiez si votre demande porte sur la résiliation d'un abonnement, d'une carte ou d'un service précis.",
    ],
    metaDescription:
      "Lettre de résiliation Mobility : modèle, PDF, envoi recommandé. Précisez type d'abonnement et références client selon vos documents.",
  },
  "leasing:cembra-leasing": {
    additionalTips: ["Cembra finance de nombreux contrats en Suisse : le numéro de dossier sur votre échéancier est la clé d'une lettre sans ambiguïté."],
  },
  "streaming:netflix": {
    savoirParagraphs: [
      "Netflix permet souvent la résiliation en ligne, mais un courrier recommandé peut servir de preuve si la facturation continue ou en cas de litige sur une période d'abonnement.",
    ],
    additionalTips: ["Indiquez l'e-mail du compte Netflix et la date de fin souhaitée pour limiter les malentendus."],
    metaTitle: "Résiliation Netflix Suisse – lettre recommandée & preuve",
  },
  "streaming:spotify": {
    additionalTips: ["Si Spotify est facturé via un tiers (opérateur, bundle), la résiliation peut devoir passer par ce canal — vérifiez votre facture."],
  },
  "streaming:disney-plus": {
    savoirParagraphs: [
      "Disney Plus est souvent souscrit avec un e-mail unique : associez clairement ce compte à votre demande de résiliation.",
    ],
  },
  "fitness:activ-fitness": {
    savoirParagraphs: [
      "Activ Fitness exploite de nombreux clubs : précisez la succursale ou le contrat sous lequel vous êtes inscrit si vos documents le mentionnent.",
    ],
    additionalTips: ["Vérifiez les périodes d'engagement promotionnelles souvent présentes sur les offres de gym."],
  },
  "fitness:puregym": {
    additionalTips: ["PureGym applique des CGV par site : le préavis peut varier selon l'emplacement et l'offre souscrite."],
  },
  "fitness:migros-fitnesspark": {
    savoirParagraphs: [
      "Migros Fitnesspark relie souvent abonnement et carte Cumulus ou offres groupe : contrôlez quel produit vous résiliez.",
    ],
  },
  "media:le-temps": {
    savoirParagraphs: [
      "Le Temps propose des offres papier, numériques ou combinées : indiquez le support concerné pour éviter une facturation partielle.",
    ],
    metaTitle: "Résiliation abonnement Le Temps – lettre recommandée Suisse",
  },
  "media:nzz": {
    additionalTips: ["La NZZ et ses suppléments peuvent être facturés séparément : listez les titres ou codes abonnés sur votre demande."],
  },
  "media:blick": {
    savoirParagraphs: [
      "Blick et offres Blick+ peuvent être gérées via des filiales différentes : vérifiez sur votre facture quel éditeur facture réellement.",
    ],
  },
  "utility:electricite": {
    savoirParagraphs: [
      "La résiliation d'un contrat d'électricité peut être liée à un déménagement ou à un changement de fournisseur : vérifiez qui adresse la résiliation (vous ou le nouvel acteur).",
    ],
    additionalTips: ["Notez le point de livraison (PDL) ou numéro de client figurant sur votre facture si vous l'avez."],
  },
  "utility:gaz": {
    additionalTips: ["Un changement de fournisseur gaz peut imposer des délais de préavis différents selon le contrat — relisez vos CGV."],
  },
}

export function categoryToPriorityCluster(category: LetterModelCategory): PriorityCluster | null {
  const map: Partial<Record<LetterModelCategory, PriorityCluster>> = {
    "assurance-marque": "assurance",
    "telecom-marque": "telecom",
    "banque-marque": "banque",
    "leasing-marque": "leasing",
    "streaming-marque": "streaming",
    "fitness-marque": "fitness",
    "media-marque": "media",
    utilities: "utility",
  }
  return map[category] ?? null
}

export function getPriorityOverride(cluster: PriorityCluster, brand: string): PriorityBrandOverride | undefined {
  return OVERRIDES[`${cluster}:${slugifyBrand(brand)}`]
}

export function getPriorityOverrideForModel(category: LetterModelCategory, brand: string): PriorityBrandOverride | undefined {
  const c = categoryToPriorityCluster(category)
  if (!c) return undefined
  return getPriorityOverride(c, brand)
}
