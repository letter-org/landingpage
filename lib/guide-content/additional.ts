import { appUrls } from "@/lib/app-urls"
import type { GuideContentEntry } from "./types"

/** 15 guides complémentaires — intention « comment… » administratif CH */
export const ADDITIONAL_GUIDE_CONTENT: Record<string, GuideContentEntry> = {
  "comment-resilier-abonnement-mobile-suisse": {
    directAnswer: `Pour résilier un abonnement mobile en Suisse, vérifiez d'abord la **durée d'engagement** et le **préavis** dans votre contrat ou sur l'espace client ; envoyez ensuite une **résiliation écrite** avec preuve d'envoi. NextLetter permet de générer et d'expédier cette lettre en recommandé.`,
    faq: [
      { q: "Quel préavis pour un forfait sans engagement ?", a: "Même sans engagement long, un préavis d'un à trois mois est fréquent selon l'opérateur. Les CG et l'offre promotionnelle peuvent prévoir des nuances : lisez la dernière version applicable à votre ligne." },
      { q: "Puis-je résilier en ligne uniquement ?", a: "Beaucoup d'opérateurs proposent un portail, mais une trace postal externe reste utile en cas de litige sur la date. Un recommandé complète souvent le parcours numérique." },
      { q: "Dois-je rendre le matériel ?", a: "Si un modem ou téléphone était loué, la résiliation doit mentionner le retour ou la récupération selon les CG. Précisez votre volonté de respecter le processus décrit contractuellement." },
      { q: "Comment gérer le portabilité du numéro ?", a: "La portabilité est une démarche distincte : informez-vous auprès du nouvel opérateur et respectez les délais pour ne pas perdre le numéro. Votre lettre de résiliation peut rester centrée sur la fin du contrat actuel." },
      { q: "NextLetter est-il lié à Swisscom, Sunrise ou Salt ?", a: "Non. NextLetter est un service indépendant d'aide à la rédaction et à l'envoi ; il ne substitue pas aux portails officiels des opérateurs." },
    ],
    content: `
La résiliation mobile relève d'un **marché concurrentiel** où publicités et offres bundle peuvent masquer des clauses de fidélisation ou des frais résiduels. Avant d'écrire, téléchargez la dernière **fiche produit** et le **contrat** : les engagements pris lors d'un renouvellement tacite changent souvent le délai.

## Identifier ce que vous résiliez

Séparez la ligne mobile du pack Internet-TV si les contrats sont distincts. Notez le **numéro de client**, l'**MSISDN** et les éventuels sous-comptes. Si vous êtes encore en période « promo », vérifiez la date de fin de l'avantage.

## Formuler la demande

Une lettre efficace mentionne l'objet (« résiliation de l'abonn mobile n°… »), la date d'effet souhaitée, vos coordonnées et une demande de confirmation écrite. Si vous contestez une facture en parallèle, traitez ce sujet dans un second courrier pour garder la lisibilité.

## Preuve et calendrier

Planifiez l'envoi plusieurs jours avant la date limite contractuelle : le jour déterminant est souvent celui de la réception par le service compétent, pas celui où vous cliquez sur un formulaire. Le recommandé apporte un **jalon objectif** dans votre planning.

Modèles utiles : [abonnement mobile](/modeles/lettre-resiliation-abonnement-mobile), [téléphone](/modeles/lettre-resiliation-telephone-suisse), pages opérateurs [Sunrise](/modeles/lettre-resiliation-sunrise-suisse), [Swisscom](/modeles/lettre-resiliation-swisscom-suisse), [Salt](/modeles/lettre-resiliation-salt-suisse), [Yallo](/modeles/lettre-resiliation-yallo-suisse).

Pour passer à l'action : [ouvrir NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-resilier-internet-suisse": {
    directAnswer: `Pour résilier Internet en Suisse, consultez la **durée contractuelle**, les éventuelles **offres bundle** et le **délai de préavis** ; une **lettre recommandée** avec date claire évite les reconductions tacites contestées. NextLetter prend en charge la rédaction et l'envoi.`,
    faq: [
      { q: "Internet seul ou équipement loué ?", a: "Précisez si un routeur ou une TV box doit être retournée. Mentionnez dans la lettre comment vous procéderez au retour pour limiter des pénalités matérielles." },
      { q: "Quid de la ligne fixe ?", a: "Certaines offres couplent VoIP ou fixe : indiquez explicitement tous les produits concernés par la résiliation pour éviter une poursuite partielle de facturation." },
      { q: "Puis-je résilier après un déménagement ?", a: "Le déménagement peut ouvrir des droits particuliers selon disponibilité du service au nouvel immeuble : c'est une voie distincte des résiliations « simples » — documentez la situation avant de choisir l'argument principal." },
      { q: "Faut-il un accusé de réception ?", a: "Fortement recommandé lorsque vous voulez prouver la date limite de notification. Conservez le texte exact envoyé." },
      { q: "NextLetter vérifie-t-il mon délai ?", a: "Non : vous restez responsable du fond contractuel. NextLetter fiabilise la forme du courrier et son expédition." },
    ],
    content: `
Box, fibre ou câble : la résiliation Internet implique souvent **plusieurs composants** (accès, matériel, options TV). Une lettre floue laisse l'opérateur facturer un volet « resté actif » par défaut.

## Cartographier le contrat

Repérez la date de signature, la durée minimale, les prix après promo et la date de fin d'engagement. Vérifiez si un changement de tarif a été notifié : certaines notifications ouvrent des droits de sortie spécifiques.

## Rédiger sans ambiguïté

Listez chaque élément résilié, la date d'effet et la manière de restituer le matériel. Si vous attendez un dernier prélèvement, indiquez comment vous contrôlerez la clôture du compte client.

## Suivi

Après envoi, surveillez les prélèvements et les messages automatiques. Gardez une chronologie simple (capture des factures, accusé, relances). En cas de désaccord, la traçabilité de vos écrits fait la différence.

Modèles : [Internet](/modeles/lettre-resiliation-internet-suisse), [Internet + TV](/modeles/lettre-resiliation-internet-tv), et liens opérateurs dans le [hub modèles](/modeles).

Action : [NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-resilier-salle-sport-suisse": {
    directAnswer: `Pour résilier une salle de sport ou un abonnement fitness en Suisse, vérifiez la **période d'engagement** (souvent 6 ou 12 mois) et les **conditions de résiliation anticipée** ; envoyez une **lettre datée** recommandée pour prouver la date. NextLetter facilite cette étape.`,
    faq: [
      { q: "Puis-je arrêter après une blessure ?", a: "Certaines CG prévoient une suspension ou résiliation pour motif médical sur preuve ; d'autres non. Ne suposez pas : citez la clause pertinente ou demandez une dérogation motivée." },
      { q: "Et si j'ai déménagé loin ?", a: "Un changement de canton ou une distance excessive peut parfois être invoqué selon le contrat, mais ce n'est jamais automatique. Documentez votre nouvelle adresse et les distances." },
      { q: "Les frais de résiliation anticipée sont-ils légaux ?", a: "Cela dépend des CG et du droit applicable au contrat de consommation. Pour les montants élevés, une relecture juridique peut être utile." },
      { q: "Dois-je envoyer au siège ou à la salle ?", a: "Utilisez l'adresse contractuelle indiquée pour les résiliations ; si deux adresses existent, priorité à celle mentionnée pour les communications légales." },
      { q: "NextLetter garantit-il l'annulation des prélèvements ?", a: "Non : l'exécution contractuelle dépend du club. La lettre certifie votre volonté et sa date de notification." },
    ],
    content: `
Les clubs appliquent souvent des **prélèvements récurrents** : une résiliation mal adressée peut coûter plusieurs mois supplémentaires. Commencez par identifier **à qui** écrire et **avec quels codes client**.

## Diagnostic rapide

Type d'abonnement (solo, couple, pack coaching). Date de début et de reconduction tacite. Préavis minimal. Frais de dossier ou caution. Si vous avez signé numériquement, retrouvez le PDF archivé dans vos emails.

## Lettre et suite logistique

Demandez confirmation écrite de la date de fin et la cessation des prélèvements. Mentionnez la portabilité de votre droit d'accès (carte RFID, casier). Si vous devez restituer un badge, indiquez comment vous procéderez.

Modèles : [salle de sport](/modeles/lettre-resiliation-salle-sport-suisse), [fitness](/modeles/lettre-resiliation-abonnement-fitness).

Écrire et envoyer : [NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-demissionner-en-suisse": {
    directAnswer: `Pour démissionner en Suisse, respectez le **délai de préavis** prévu par le contrat de travail ou le CO selon l'ancienneté ; la démission doit être **claire et non équivoque**, idéalement par **écrit traçable**. NextLetter aide à rédiger et envoyer la lettre recommandée.`,
    faq: [
      { q: "Quel préavis pour un CDD ?", a: "Le CDD se termine à sa date sauf clauses particulières ; une démission anticipée peut être limitée ou impossible selon le contrat. Lisez votre document." },
      { q: "La démission peut-elle être orale ?", a: "Le risque est le différend sur la date exacte. L'écrit avec preuve limite les frictions avec l'employeur et l'assurance chômage peut parfois exiger des éléments chronologiques clairs." },
      { q: "Dois-je motiver ma démission ?", a: "Non, sauf si vous souhaitez le faire volontairement. Attention : certaines formulations peuvent être interprétées comme une rupture pour faute si mal rédigées — restez factuel." },
      { q: "Quand demander le certificat de travail ?", a: "Vous pouvez le demander dès la fin du contrat ; un modèle de demande formelle existe si l'employeur tarde." },
      { q: "NextLetter conseille-t-il sur le chômage ?", a: "Non. NextLetter fournit un courrier ; pour les implications SECO/RE, adressez-vous aux structures compétentes ou à un conseiller spécialisé." },
    ],
    content: `
La démission est un acte unilatéral : il suffit en principe d'une volonté exprimée **sans ambiguïté**. Pourtant, les disputes portent presque toujours sur **la date de réception** ou la **durée de préavis** applicable.

## Étapes internes avant envoi

Vérifiez les clauses de **non-concurrence**, les **bonus** ou actions en cours, et la bonne adresse (employeur direct ou holding). Si vous dépendez d'une filiale, assurez-vous que l'entité signataire de votre contrat est bien celle à laquelle vous écrivez.

## Contenu recommandé

Objet explicite (« démission avec effet au… »), coordonnées, date de prise d'effet cohérente avec le préavis, signature. Évitez les adjectifs émotionnels : inutiles juridiquement. Vous pouvez remercier sobrement.

## Après l'envoi

Conservez l'accusé. Préparez la passation documentaire. Demandez le [certificat de travail](/modeles/lettre-demande-certificat-travail-suisse) si besoin.

Modèle principal : [démission](/modeles/lettre-demission-suisse). Application : [NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-demander-remboursement-suisse": {
    directAnswer: `Pour demander un remboursement en Suisse, formalisez **les faits**, **le montant** et la **base contractuelle ou légale** (erreur de facturation, non-exécution, garantie) et fixez un **délai de réponse**. Un envoi recommandé avec NextLetter sécurise la date.`,
    faq: [
      { q: "Combien de temps pour une réponse ?", a: "Fixez quinze à trente jours ouvrables selon la complexité ; pour du e-commerce, des délais spécifiques peuvent s'appliquer." },
      { q: "Puis-je exiger des intérêts ?", a: "Selon le cas et le taux légal sur créances, c'est possible, mais la formulation doit rester prudente si vous n'êtes pas conseillé." },
      { q: "Et les achats transfrontaliers ?", a: "Le droit applicable peut être étranger ; concentrez-vous sur le siège contractuel indiqué sur la facture." },
      { q: "Faut-il médiation ?", a: "Plusieurs branches proposent une médiation gratuite ou peu coûteuse : mentionnez votre ouverture à une solution amiable tout en réservant vos droits." },
      { q: "NextLetter joue-t-il le rôle d'avocat ?", a: "Non. C'est un outil de courrier et d'envoi." },
    ],
    content: `
Une demande de remboursement recevable commence par **la clarté comptable**. Joignez ou résumez la facture initiale, le paiement, la preuve du défaut (photo, échange email) et le calcul du montant dû.

## Ton et mécanique

Restez professionnel : « Je vous prie de… », « À défaut de réponse sous … j'engagerai… ». Ne menacez pas artificiellement de poursuites si vous n'avez pas l'intention d'aller au bout : privilégiez la cohérence.

## Suivi

Relances courtes avec référence au premier courrier. Archivez les réponses partielles. Si vous acceptez un avoir plutôt qu'un virement, explicitez l'échéance d'utilisation.

Modèles : [remboursement](/modeles/lettre-demande-remboursement-suisse), [réclamation consommateur](/modeles/lettre-reclamation-consommateur-suisse).

Envoi : [NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-contester-augmentation-loyer-suisse": {
    directAnswer: `Pour contester une augmentation de loyer en Suisse, vous devez en général **motiver par écrit** dans le délai prévu par la loi ou le bail (référence au loyer précédent, au taux de référence ou à la formule) et **conserver la preuve d'envoi**. NextLetter permet de structurer et d'expédier ce courrier.`,
    faq: [
      { q: "Quel délai après notification ?", a: "Le délai dépend du canton et du type de bail. La lettre doit être prête à partir dès réception de la demande : notez la date de réception sur l'enveloppe ou le courriel." },
      { q: "Dois-je payer l'ancien loyer en attendant ?", a: "En l'absence d'accord, les pratiques varient : évitez tout impayé total sans stratégie ; un professionnel peut vous aider à calibrer le risque." },
      { q: "Puis-je citer la référence hypothécaire ?", a: "Oui lorsque la mécanique légale s'y prête et que les chiffres sont vérifiables. Ne citez que des sources que vous pouvez documenter." },
      { q: "Le bailleur refuse : et ensuite ?", a: "Médiation ou procédure : votre premier courrier doit déjà être rigoureux car il sera pièce d'un dossier." },
      { q: "NextLetter connaît-il le droit cantonal ?", a: "Non exhaustivement : vous validez le fond ; NextLetter aide la mise en forme et l'envoi." },
    ],
    content: `
La contestation de loyer est **hyper locale** : comparer deux cas sans tenir compte du canton est trompeur. Ce guide insiste sur la **méthode** : chronologie, pièces, argumentation sobre.

## Structuration

Exposez le loyer actuel, la demande, votre lecture de la légalité ou contractuelle, puis votre conclusion (refus, contre-proposition). Numérotez les pièces : bail, annexes, avis précédents.

## Preuve

Le recommandé fixe souvent le point de départ du délai. Si vous combinez email et courrier, assurez-vous que les versions sont identiques.

Modèle : [contestation augmentation loyer](/modeles/lettre-augmentation-loyer-contestation-suisse).

[Créer le courrier sur NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-resilier-assurance-complementaire-suisse": {
    directAnswer: `Pour résilier une **assurance complémentaire** (LCA) en Suisse, appliquez le **préavis contractuel** (souvent trois mois pour fin d'année, mais lisez votre police) et confirmez par **écrit traçable**. NextLetter propose des modèles et l'envoi recommandé.`,
    faq: [
      { q: "Différence avec la LAMal ?", a: "La complémentaire est un contrat privé distinct : ses échéances et surprises tarifaires ne se confondent pas avec la caisse obligatoire." },
      { q: "Puis-je changer sans trou de couverture ?", a: "Oui si vous enchaînez dates et assureurs proprement ; anticipez la souscription avant la résiliation effective." },
      { q: "Que faire d'une surprime jeune ?", a: "Les mécanismes varient : documentez les notifications reçues avant de résilier ou négocier." },
      { q: "Adresse d'envoi ?", a: "Utilisez l'adresse officielle des résiliations indiquée par l'assureur ; un mauvais service peut retarder le dossier." },
      { q: "NextLetter est-il affilié à un assureur ?", a: "Non." },
    ],
    content: `
La complémentaire réagit souvent à des **ajustements annuels** : gardez les courriers sur les primes, sinistres et avenants. Votre résiliation doit refléter la **police active**, pas une version obsolète.

## Stratégie simple

1) Lire préavis et date d'effet possible. 2) Choisir nouvelle couverture si besoin. 3) Envoyer résiliation avec numéros précis. 4) Surveiller derniers prélèvements.

Modèles : [complémentaire](/modeles/lettre-resiliation-assurance-complementaire), assureurs [AXA](/modeles/lettre-resiliation-assurance-axa-suisse), [Generali](/modeles/lettre-resiliation-assurance-generali-suisse), [CSS](/modeles/lettre-resiliation-assurance-css-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-rediger-reclamation-consommateur-suisse": {
    directAnswer: `Pour rédiger une réclamation consommateur efficace en Suisse, exposez **la genèse du litige**, les **manquements** constatés, les **tentatives amiables** et une **demande chiffrée ou qualitative** ; joignez les preuves et envoyez en recommandé si l'enjeu le justifie. NextLetter aide à produire ce courrier.`,
    faq: [
      { q: "Faut-il citer le Code des obligations ?", a: "Seulement si vous maîtrisez l'argument ; une description factuelle solide suffit souvent en premier temps." },
      { q: "Puis-je publier sur les réseaux ?", a: "La modération reste conseillée : un courrier privé protège souvent mieux vos droits à ce stade." },
      { q: "Les délais de la PCIM ?", a: "Pour certains litiges, des médiations sectorielles existent : mentionnez votre ouverture." },
      { q: "Comment prouver la livraison ?", a: "Numéros de suivi, PV de dépôt, photos à l'arrivage." },
      { q: "NextLetter représente-t-il les consommateurs ?", a: "Non ; il formalise votre message et l'envoi." },
    ],
    content: `
Une réclamation n'est pas une **plainte émotionnelle** : c'est une **négociation documentée**. Commencez par un tableau interne : date d'achat, prix, problème, échanges déjà tenus.

## Savoir-faire

Utilisez des titres courts, des pièces numérotées, une chronologie. Terminez par une demande précise (remplacement, remboursement partiel, geste commercial). Proposez un délai de réponse.

Modèle : [réclamation consommateur](/modeles/lettre-reclamation-consommateur-suisse).

Envoyez via [NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-demander-certificat-travail-suisse": {
    directAnswer: `Pour obtenir un **certificat de travail** en Suisse, adressez une **demande écrite** à l'employeur en rappelant l'obligation légale et les délais usuels ; conservez la preuve d'envoi. NextLetter permet de générer et envoyer cette demande.`,
    faq: [
      { q: "Délai de délivrance ?", a: "L'employeur doit le remettre dans un délai raisonnable ; les contentieux individuels varient selon la situation." },
      { q: "Contenu attendu ?", a: "Qualités professionnelles et relations avec la hiérarchie, de manière sincère ; la loi encadre les mentions négatives." },
      { q: "Puis-je le corriger ?", a: "Des procédures existent si le contenu est manifestement inexact ou injustifié ; documentez les faits." },
      { q: "Version papier ou PDF ?", a: "Validez ce que votre prochain employeur accepte ; mentionnez votre préférence dans la demande." },
      { q: "NextLetter est-il RH ?", a: "Non." },
    ],
    content: `
Le certificat conditionne souvent la **prochaine embauche**. Une demande sobre évite les frictions inutiles tout en posant un jalon si l'employeur tarde.

## Rédaction

Identité, fonction, dates de collaboration, formule de politesse, canal de réponse. Vous pouvez rappeler l'intérêt d'une réponse sous deux à trois semaines.

Modèle : [certificat de travail](/modeles/lettre-demande-certificat-travail-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-demander-delai-paiement-suisse": {
    directAnswer: `Pour demander un **délai de paiement** ou un **arrangement** en Suisse, expliquez **sans improvisation juridique** votre situation, proposez un **échéancier chiffré** et demandez une **confirmation écrite**. NextLetter aide à envoyer la demande en recommandé.`,
    faq: [
      { q: "Créancier privé ou collectivité ?", a: "Adapter le ton : une administration attend souvent des éléments justificatifs (AVS, revenus)." },
      { q: "Faut-il un plan notarié ?", a: "Pas pour une simple demande initiale ; des accords complexes relèvent d'autres formalités." },
      { q: "Que se passe-t-il si je n'obtiens pas de réponse ?", a: "Relancez ; la traçabilité de votre demande prouve la bonne foi." },
      { q: "Puis-je cumuler plusieurs créanciers ?", a: "Oui mais chacun mérite une lettre distincte pour éviter la confusion." },
      { q: "NextLetter négocie-t-il à ma place ?", a: "Non." },
    ],
    content: `
Une demande de délai crédible inclut **transparence modérée** : pas besoin de tout raconter, mais assez pour humaniser la demande sans paraître fuyant.

## Mécanique

Tableau : montant dû, proposition de versements, date de début. Mentionnez les pièces justificatives fournies ou disponibles sur demande.

Modèles : [délai de paiement](/modeles/lettre-demande-delai-paiement-suisse), [arrangement dette](/modeles/lettre-demande-arrangement-dette-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-notifier-demenagement-suisse": {
    directAnswer: `Pour notifier un **déménagement** en Suisse, listez les organismes (**caisse, employeur, fournisseurs d'énergie et télécom, banques**) et envoyez des **courriers datés** lorsque la preuve compte. NextLetter centralise la rédaction et l'expédition tramée.`,
    faq: [
      { q: "Ordre des notifications ?", a: "Commencez par ce qui conditionne des délais légaux (assurance maladie, bail) puis services techniques." },
      { q: "Faut-il une attestation de résidence ?", a: "Certains acteurs la demandent pour mise à jour ; joignez la copie disponible." },
      { q: "Puis-je tout faire en ligne ?", a: "Oui pour une partie, mais les courriers restent utiles lorsqu'un pli officiel est requis." },
      { q: "Délais TV et Internet ?", a: "Anticipez plusieurs semaines pour éviter frais de réactivation ou coupures longues." },
      { q: "NextLetter planifie-t-il mon ménage ?", a: "Non — seulement les courriers." },
    ],
    content: `
Le déménagement génère une **tempête d'adresses**. Créez une checklist : institutions, abonnements, associations. Pour chaque ligne, notez si une simple mise à jour web suffit ou si un courrier est requis.

## Modèle postal

Annoncez la date d'effet, ancienne et nouvelle adresse, références client. Si vous attendez une confirmation écrite, demandez-la.

Modèle : [changement d'adresse](/modeles/lettre-demenagement-postal-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-envoyer-courrier-administration-suisse": {
    directAnswer: `Pour écrire à une **administration** en Suisse, indiquez **numéro de dossier**, **objet**, **faits utiles** et **pièces jointes listées** ; utilisez un canal conforme à l'avis reçu (**portail, adresse postale**) et conservez une preuve si le délai est critique. NextLetter prend en charge l'envoi postal recommandé.`,
    faq: [
      { q: "Courrier vs portail ?", a: "Si le document officiel impose une voie, suivez-la ; un recommandé papier peut compléter mais ne remplace pas toujours l'e-démarche." },
      { q: "Langues officielles ?", a: "Selon le canton : rédigez dans la langue du guichet ou joignez traduction si nécessaire." },
      { q: "Comment citer la loi ?", a: "Préférez les références exactes que vous maîtrisez ; évitez les citations approximatives." },
      { q: "Délais de recours ?", a: "Surlignez-les sur l'acte initial ; un retard peut faire échouer un recours sans examen du fond." },
      { q: "NextLetter est-il un guichet public ?", a: "Non." },
    ],
    content: `
Les administrations traitent des volumes massifs : votre dossier doit être **scannable en trente secondes** par un agent. Mettez l'essentiel en tête, puis le détail.

## Mise en forme

Titres, listes, références, signature. Si vous déposez aussi en ligne, gardez la même version pour cohérence.

Pour les fonds liés aux amendes ou oppositions, reliez avec les guides [contester une amende](/guides/comment-contester-amende-suisse) et les modèles associés.

[NextLetter pour envoyer](${appUrls.base}).
`.trim(),
  },
  "comment-resilier-assurance-auto-suisse": {
    directAnswer: `Pour résilier une **assurance automobile** en Suisse, vérifiez la **date d'échéance annuelle**, les **cas de résiliation anticipée** (vente du véhicule, changement de assureur avec respect des délais) et confirmez par **écrit recommandé**. NextLetter aide à rédiger et envoyer.`,
    faq: [
      { q: "Vente du véhicule ?", a: "La vente peut permettre une résiliation à court terme selon la police ; mentionnez le changement de propriétaire et les preuves." },
      { q: "Changement d'assureur ?", a: "Respectez les préavis pour éviter double couverture ou interruption." },
      { q: "Carte verte et plaques ?", a: "Traitez aussi les aspects cantonaux : la résiliation d'assurance ne remplace pas les démarches d'immatriculation." },
      { q: "Dois-je résilier la RC ménage en même temps ?", a: "Ce sont des contrats distincts : ne les confondez pas dans une seule phrase sans précision." },
      { q: "NextLetter donne-t-il des primes ?", a: "Non." },
    ],
    content: `
Une résiliation auto mal datée peut laisser le véhicule **sans couverture** un jour ou deux : synchronisez avec la nouvelle police.

## Paramètres

Type de véhicule, usage (privé, trajets pro), franchises, conducteurs déclarés. Un avenant mal fermé peut continuer à générer une prime.

Modèles : [assurance auto](/modeles/lettre-resiliation-assurance-auto), [voiture](/modeles/lettre-resiliation-assurance-voiture-suisse), [RC](/modeles/lettre-resiliation-assurance-rc-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-opposition-prelevement-suisse": {
    directAnswer: `Pour vous **opposer à un prélèvement LSV** ou contester un débit en Suisse, informez rapidement votre **banque** selon les règles de délai et notifiez le **créancier** par écrit pour expliquer le litige. NextLetter facilite le courrier recommandé de contestation.`,
    faq: [
      { q: "Délai bancaire ?", a: "Les délais d'opposition varient selon les cas (LSV récurrent vs ponctuel) : contactez votre banque immédiatement et conservez la trace." },
      { q: "Et si le prélèvement est justifié ?", a: "Une opposition abusive peut engager votre responsabilité : vérifiez la facture source avant d'agir." },
      { q: "Dois-je joindre la facture ?", a: "Oui si elle alimente votre argumentaire." },
      { q: "Puis-je stopper définitivement un mandat ?", a: "Après résiliation du mandat auprès de la banque et du créancier, surveillez les cycles suivants." },
      { q: "NextLetter remplace-t-il la hotline bancaire ?", a: "Non." },
    ],
    content: `
L'opposition est **bipolaire** : d'un côté l'**établissement financier**, de l'autre le **créancier** qui pense être payé. Une lettre claire vers le créancier décrit le paiement contesté, le motif, et la demande de suspension en attendant clarification.

## Précautions

Ne promettez pas un remboursement que vous ne validerez pas. Si vous êtes en négociation, indiquez-le pour éviter escalation recouvrement.

Modèle : [opposition prélèvement](/modeles/lettre-opposition-prelevement-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-relancer-fournisseur-suisse": {
    directAnswer: `Pour **relancer un fournisseur** en Suisse, envoyez une **mise en demeure amiable** avec délai court, rappel des faits et des références contractuelles, puis conservez la preuve d'envoi. NextLetter permet d'envoyer cette relance en recommandé.`,
    faq: [
      { q: "Combien de relances avant escalade ?", a: "Une à deux relais espacés raisonnablement suffisent souvent avant médiation ou action." },
      { q: "Ton ferme ou neutre ?", a: "Neutre mais clair : « À défaut sous … nous nous réservons… » si vous êtes prêt à assumer la suite." },
      { q: "Pièces ?", a: "Contrats, bons de commande, accusés de réception partiels." },
      { q: "Prestation IT ou B2B ?", a: "Les clauses SLA peuvent prévoir pénalités : citez-les si vous les maîtrisez." },
      { q: "NextLetter garantit-il le paiement ?", a: "Non." },
    ],
    content: `
La relance est une **étape juridique psychologique** : elle montre que vous documentez. Évitez les menaces creuses ; alignez promesses et moyens.

## Structure

Rappel de l'engagement, défaut constaté, demande de regularisation sous sept à quinze jours, mention des échanges antérieurs.

Modèles liés : [facture contestée](/modeles/lettre-contestation-facture-suisse), [réclamation](/modeles/lettre-reclamation-consommateur-suisse).

[NextLetter](${appUrls.base}).
`.trim(),
  },
}
