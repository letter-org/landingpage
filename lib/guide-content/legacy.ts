import { appUrls } from "@/lib/app-urls"
import type { GuideContentEntry } from "./types"

/** 5 guides fondateurs — enrichis GEO + corps allongé */
export const LEGACY_GUIDE_CONTENT: Record<string, GuideContentEntry> = {
  "comment-envoyer-lettre-recommandee-suisse": {
    directAnswer: `Pour envoyer une lettre recommandée en Suisse avec une preuve sérieuse d'expédition et de réception, vous devez passer par un canal qui documente la chaîne (La Poste ou service agréé). Avec NextLetter, vous rédigez votre texte, l'impression et l'envoi recommandé sont pris en charge, et vous conservez une trace dans votre espace client.`,
    faq: [
      {
        q: "Comment envoyer une lettre recommandée en Suisse ?",
        a: "Vous pouvez vous rendre à La Poste avec un pli prêt à envoyer ou utiliser un envoi en ligne. Les services comme NextLetter combinent modèles adaptés au contexte suisse, impression et envoi avec suivi, ce qui évite déplacements et erreurs de mise en forme.",
      },
      {
        q: "Quel est le coût d'une lettre recommandée en Suisse ?",
        a: "Le tarif La Poste dépend du format, du poids et du niveau de service. Les offres tout-en-un en ligne facturent généralement pack complet (rédaction assistée, impression, port). Comparez le prix total et la présence d'une preuve conservée avant de choisir.",
      },
      {
        q: "Ai-je une preuve d'envoi avec une lettre recommandée ?",
        a: "Oui : le recommandé est précisément conçu pour établir qu'un envoi a été confié au réseau postal et, selon le produit, qu'il a été remis au destinataire. Conservez les accusés et captures d'écran de suivi dans un dossier unique.",
      },
      {
        q: "Puis-je envoyer une lettre recommandée entièrement en ligne ?",
        a: "Oui. NextLetter permet de produire le texte, de valider les coordonnées du destinataire et de déclencher l'expédition physique depuis la Suisse, avec conservation des preuves utiles en cas de litige sur une date ou un contenu.",
      },
      {
        q: "Quand utiliser un recommandé plutôt qu'un simple courrier ?",
        a: "Pour les résiliations, contestations, délais légaux ou administratifs, le recommandé ou équivalent traçable est recommandé. Il réduit le risque que l'autre partie prétende ne pas avoir reçu votre courrier dans les temps.",
      },
    ],
    content: `
Envoyer une lettre recommandée en Suisse reste une référence pour les démarches sensibles : résiliation de contrat, réclamation, réponse à une administration ou à une entreprise. Ce guide résume les choix pratiques, le rôle de la preuve, et comment NextLetter aide à exécuter l'envoi sans friction.

## Pourquoi le recommandé compte encore en 2026

En droit des obligations et en pratique bancaire ou d'assurance, **la date et le contenu** d'une prise de position peuvent faire la différence. Un envoi traçable protège deux choses : que vous avez **agi dans les délais**, et que le destinataire **a été informé** de manière vérifiable. Même lorsque l'email existe, nombreux acteurs exigent ou privilégient le papier pour certaines résiliations.

## Les options concrètes en Suisse

**Bureau La Poste.** Vous apportez le pli imprimé, complété et signé. Le guichet enregistre l'envoi et délivre un récépissé. Avantage : interaction directe. Limite : déplacement, files d'attente, contraintes horaires.

**Envoi en ligne via La Poste ou équivalent.** Vous chargez un PDF, saisissez les adresses et payez en ligne. Le document est imprimé et injecté dans le flux postal. Limite : vous devez déjà disposer d'une mise en page finale conforme à vos obligations de forme.

**NextLetter : modèle + envoi.** NextLetter cible les cas « lettre administrative » : vous partez d'une trame adaptée au sujet (résiliation, litige léger, demande formelle), complétez les champs, puis déclenchez l'envoi physique recommandé. L'intérêt est double : **gain de temps** et **cohérence des mentions** (coordonnées, références de contrat, dates d'effet).

## Bonnes pratiques de fond

Indiquez toujours une **référence lisible** (numéro de police, de client ou de dossier). Mentionnez la **date d'effet** souhaitée lorsque la résiliation est datée. Séparez clairement les faits des demandes : « Je constate… », « Par la présente je résilie… », « Je vous prie de… ». Joignez, si nécessaire, la mention « PJ : … » pour lister les pièces.

## Erreurs fréquentes à éviter

Expédier sans conserver de copie conforme du texte exact. Oublier de vérifier l'adresse juridique du service consommateur ou du siège de l'assureur. Mélanger plusieurs sujets dans une même lettre au point de brouiller la demande principale. Enfin, négliger les **délais de réponse** indiqués sur les documents reçus (notamment amendes ou factures contestées).

## Comment NextLetter s'inscrit dans le parcours

NextLetter est une plateforme d'**assistance à la rédaction et à l'envoi** : elle ne remplace ni un avocat ni un conseiller juridique, mais fiabilise la partie « courrier professionnel correctement expédié ». Pour aller plus loin, consultez le [générateur de lettre suisse](/generateur-lettre-suisse) et les [modèles par thème](/modeles).

Pour générer et envoyer votre lettre recommandée en ligne : [ouvrir NextLetter](${appUrls.base}).
`.trim(),
  },
  "comment-resilier-assurance-suisse": {
    directAnswer: `Pour résilier une assurance en Suisse, vous devez en général respecter des **délais de préavis** et une **forme écrite** ; pour la LAMal, la résiliation ordinaire se fait à fin d'année avec un préavis de trois mois. NextLetter vous aide à rédiger et envoyer la lettre recommandée qui documente votre demande.`,
    faq: [
      {
        q: "Quel délai pour résilier une assurance maladie en Suisse ?",
        a: "Sauf cas spéciaux, la base obligatoire se résilie pour le 31 décembre avec un préavis de trois mois, donc un envoi au plus tard le 30 septembre pour l'année courante. Vérifiez les communications officielles de votre caisse : les règles spéciales (changement de tarif, assurance collective) peuvent ouvrir d'autres fenêtres.",
      },
      {
        q: "Dois-je envoyer ma résiliation par courrier recommandé ?",
        a: "L'écrit est requis ; le recommandé ou canal équivalent avec preuve est fortement conseillé. Si la caisse conteste la date de réception, votre accusé ou traçabilité devient l'élément central du dossier.",
      },
      {
        q: "Puis-je résilier mon assurance à tout moment ?",
        a: "La maladie obligatoire suit le cycle annuel sauf événements ouvrant droit à résiliation extraordinaire (déménagement à l'étranger, primes, etc., selon textes). L'auto, la ménage et la complémentaire dépendent des clauses : lisez votre police et les CG.",
      },
      {
        q: "Que doit contenir une lettre de résiliation ?",
        a: "Identité complète, numéro d'assuré ou police, date d'effet demandée, formulation non ambiguë de résiliation, signature. Pour la complémentaire ou l'auto, citez le contrat concerné et toute référence utile au guichet sinistres ou service client.",
      },
      {
        q: "Comment NextLetter m'aide-t-il sans donner un conseil juridique ?",
        a: "NextLetter propose une structure de courrier, la personnalisation de champs et l'envoi physique. Pour savoir si vous êtes dans un cas spécial ou si une clause particulière s'applique, complétez par une lecture attentive de vos documents ou l'avis d'un professionnel.",
      },
    ],
    content: `
Résilier une assurance en Suisse suit des logiques différentes selon que vous parlez de la **LAMal**, d'une **complémentaire**, de l'**automobile**, de la **responsabilité ménage** ou d'une **assurance entreprise**. Ce guide donne une base opérationnelle : quoi vérifier avant d'écrire, comment formuler, pourquoi l'envoi recommandé reste la référence.

## Assurance maladie obligatoire (LAMal)

Le schéma le plus courant : résiliation au **31 décembre**, préavis **trois mois** → courrier reçu au plus tard le **30 septembre** (attention aux jours ouvrables et aux heures de distribution). Si vous êtes dans une hypothèse de résiliation extraordinaire, rassemblez l'**événement déclencheur** et les pièces qui le prouvent avant d'expédier.

## Assurances non obligatoires

Automobile et ménage : lisez la durée du contrat, la tacite reconduction, les motifs de résiliation anticipée et les pénalités éventuelles. Complémentaire : vérifiez si une période d'engagement existe et comment la préavis est calculée. Une fois la date fixée, une lettre claire vaut mieux qu'un échange oral non documenté.

## Checklist avant envoi

1. Photographier ou archiver PDF la **dernière police** et les **CG** applicables.  
2. Noter le **numéro de contrat** exact tel qu'il figure sur les factures.  
3. Choisir une **date d'effet** réaliste compte tenu du préavis.  
4. Conserver une **copie du courrier** et la preuve d'envoi.

## Après l'envoi

Contrôlez que la prime cesse d'être prélevée au bon moment. Pour la maladie, anticipez la souscription chez le nouvel assureur pour éviter une double couverture ou un trou. En cas de litige sur la réception, appuyez-vous sur le suivi postal et sur votre copie exacte du texte. NextLetter garde ces éléments accessibles dans le flux numérique lié à l'envoi.

NextLetter propose des modèles pour la [résiliation assurance maladie](/modeles/lettre-resiliation-assurance-maladie-suisse), des assureurs par marque (ex. [CSS](/modeles/lettre-resiliation-assurance-css-suisse), [Helsana](/modeles/lettre-resiliation-assurance-helsana-suisse)) et les autres familles dans l'[annuaire des modèles](/modeles).
`.trim(),
  },
  "comment-resilier-bail-suisse": {
    directAnswer: `Pour résilier un bail en Suisse, respectez le **préavis** (souvent trois mois) et les **échéances locales** (fréquemment fin de trimestre). La résiliation doit être **écrite** ; un envoi recommandé ou traçable via NextLetter documente la date de dépôt et limite les discussions sur la réception.`,
    faq: [
      {
        q: "Quel est le délai de préavis pour résilier un bail ?",
        a: "Pour un bail à durée indéterminée, trois mois sont fréquents, mais le contrat peut prévoir autre chose. La résiliation doit souvent tomber à des dates fixes (fin de mars, juin, septembre, décembre selon le canton et le bail). Lisez votre contrat avant toute action.",
      },
      {
        q: "Dois-je envoyer par courrier recommandé ?",
        a: "Oui si vous voulez une preuve de date : en cas de désaccord sur le moment où le bailleur a pris connaissance de votre décision, le traçage postal sert de référence. Conservez une copie complète de la lettre envoyée.",
      },
      {
        q: "Locataire ou bailleur : quelle différence ?",
        a: "Le locataire résilie généralement pour quitter les lieux ; le bailleur ne peut résilier que dans les cas et formes prévus par la loi (usage propre, vente dans certaines hypothèses, etc.). Les obligations concernant motifs et délais diffèrent.",
      },
      {
        q: "Que doit contenir la lettre ?",
        a: "Adresse du logement, parties, date de libération des lieux ou date d'effet de la résiliation, références au bail, signature. Si vous souhaitez une visite d'état des lieux, indiquez-le clairement.",
      },
      {
        q: "NextLetter remplace-t-il un juriste ?",
        a: "Non. NextLetter aide à formaliser et expédier votre courrier. Les contentieux de loyer ou les litiges sur l'état des lieux peuvent nécessiter un accompagnement spécialisé.",
      },
    ],
    content: `
La résiliation locative en Suisse mêle **Code des obligations** (CO), usages cantonaux et clauses du contrat. Une lettre mal datée peut coûter un mois de loyer supplémentaire ; d'où l'intérêt d'un envoi documenté et d'un texte précis.

## Préavis et échéances

Le classicisme suisse pour les baux ordinaires : préavis de **trois mois** pour le locataire, avec dates d'échéance en fin de **trimestre civil**. Exemple : pour quitter au 30 juin, une notification au plus tard le 31 mars si le délai court exactement trois mois à ces dates—but : **vérifiez votre bail** car certains contrats ou cantons dérogent.

## Du côté locataire

Annoncez clairement la résiliation, la **date de fin** et l'adresse complète du logement. Si vous demandez un état des lieux de sortie, fixez des disponibilités réalistes. Prévoyez la restitution des clés et la transmission des relevés nécessaires (compteurs) selon vos accords. Gardez les preuves d'envoi et de réception des échanges.

## Du côté bailleur

Les motifs de résiliation sont encadrés : ne passez pas une résiliation « arbitraire » sans fondement légal. Les délais de notification peuvent être plus longs que pour le locataire. Documentez vos courriers comme en juridiction : références au bail, motivation succincte et demande de confirmation de réception.

## Réclamations liées (loyer, garantie)

Si vous contestez une augmentation pendant la même période, vous pouvez devoir adresser plusieurs courriers distincts ou structurer votre argument en sections. Séparer les sujets évite que la partie adverse ne réponde partiellement. NextLetter propose aussi des modèles pour la [contestation de hausse de loyer](/modeles/lettre-augmentation-loyer-contestation-suisse).

## Rôle de NextLetter

NextLetter ne tranche pas votre situation juridique : il vous aide à **produire** un courrier propre et à l'**acheminer** avec preuve. C'est particulièrement utile lorsque vous êtes en mobilité ou à l'étranger mais devez notifier un acte en Suisse.

Modèles utiles : [bail locataire](/modeles/lettre-resiliation-bail-locataire-suisse), [bailleur](/modeles/lettre-resiliation-bail-bailleur-suisse), [vue générale bail](/modeles/resiliation-bail-suisse).
`.trim(),
  },
  "comment-contester-facture-suisse": {
    directAnswer: `Pour contester une facture en Suisse, rédigez une **réponse motivée** qui identifie précisément les postes contestés, les montants et les faits, et envoyez-la **par courrier traçable** pour figer la chronologie. NextLetter permet de structurer cette lettre et de l'envoyer en recommandé.`,
    faq: [
      {
        q: "Dans quel délai contester une facture ?",
        a: "Il n'existe pas un délai unique pour toutes les factures commerciales, mais l'attitude prudente est d'écrire dès la réception dès lors que l'erreur est manifeste. Pour certains secteurs (télécom, services publics), des délais spécifiques s'appliquent : lisez les mentions sur la facture.",
      },
      {
        q: "Dois-je payer pendant la contestation ?",
        a: "Séparez ce qui n'est pas discuté de ce qui l'est. Indiquez que vous payez les montants non contestés et suspendez la partie litigieuse sous réserve de régularisation. Chaque cas varie selon les CG ; la clarté limite les pénalités de retard injustifiées.",
      },
      {
        q: "Que doit contenir la lettre ?",
        a: "Identité, numéro de facture, description factuelle de l'erreur (double facturation, prix non convenu, service absent), demande explicite (annulation, avoir, nouvelle facture), copie ou liste des pièces jointes.",
      },
      {
        q: "Et si le fournisseur ne répond pas ?",
        a: "Relancez une fois avec un délai court. Ensuite, selon le montant et le secteur, explorez médiations sectorielles ou voies civiles. Documentez toute absence de réponse : elle pèse dans une procédure ultérieure.",
      },
      {
        q: "NextLetter couvre-t-il les litiges complexes ?",
        a: "NextLetter facilite la mise en forme et l'envoi. Les dossiers à enjeu juridique élevé méritent souvent un accompagnement professionnel au-delà du courrier initial.",
      },
    ],
    content: `
Contester une facture commence presque toujours par **une trace écrite** structurée. Les entreprises traitent des milliers de dossiers : votre gain de temps sera proportionnel à la **lisibilité** de votre argument (titres courts, références en tête de ligne, pièces nommées).

## Types d'erreurs fréquentes

Montants non alignés sur un devis signé. Double facturation d'un même mois. Forfait majoré sans information préalable. Taxes ou frais non annoncés. Prestations qualifiées « résiliables » alors qu'elles n'ont pas été commandées. Pour chaque point, citez la **preuve** (email, capture d'écran, contrat PDF).

## Structure efficace

Premier paragraphe : objet et références. Deuxième : faits chronologiques sobres. Troisième : application des conditions générales ou du droit des obligations (sans jargon inutile). Dernier : demande claire et délai de réponse raisonnable. Évitez l'insulte : elle n'améliore pas votre position.

## Preuve et canal

Un envoi recommandé ou un service certifiant l'horodatage prouve votre réactivité. Conservez l'intégralité du texte envoyé : les versions « orales » par téléphone ne remplacent pas une trace harmonisée.

NextLetter met à disposition un [modèle de contestation de facture](/modeles/lettre-contestation-facture-suisse) et des liens vers la [demande de remboursement](/modeles/lettre-demande-remboursement-suisse) lorsque la situation s'y prête.
`.trim(),
  },
  "comment-contester-amende-suisse": {
    directAnswer: `Pour contester une amende en Suisse, identifiez le **délai légal ou réglementaire** indiqué sur l'avis, puis envoyez une **exposition claire des faits et moyens** avant cette échéance. Un envoi recommandé via NextLetter permet de prouver que vous avez respecté le délai.`,
    faq: [
      {
        q: "Quel délai pour contester une amende ?",
        a: "Cela dépend du type d'amende (circulation, parking, transports publics, ordonnance pénale simplifiée). Souvent trente jours pour les routines routières, mais votre document prime : surlignez la date butoir dès réception.",
      },
      {
        q: "Faut-il joindre des preuves ?",
        a: "Oui lorsque vous disposez de photographies, témoignages ou attestations. Ne promettez pas de preuves que vous n'avez pas : la crédibilité du dossier compte.",
      },
      {
        q: "Le courrier recommandé est-il obligatoire ?",
        a: "Pas toujours légalement, mais c'est le moyen le plus simple de documenter l'envoi. Certaines procédures acceptent le portail en ligne : vérifiez la voie indiquée sur l'avis.",
      },
      {
        q: "Puis-je contester un radar ?",
        a: "Oui dans le cadre prévu par le document qui vous a été notifié. Arguez sur les éléments factuels vérifiables (signalisation, identification du conducteur si pertinent, mesure). Restez factuel.",
      },
      {
        q: "NextLetter donne-t-il des chances de gagner ?",
        a: "Aucun outil ne garantit l'issue. NextLetter clarifie la forme et l'envoi ; le fond dépend du droit applicable et des faits.",
      },
    ],
    content: `
Les amendes administratives et ordonnances pénalités simplifiées obéissent à des **délais courts**. Une contestation mal calibrée peut être rejetée pour tardiveté avant même examen du fond : commencez donc par le calendrier.

## Lire l'avis comme un professionnel repère un contrat

Repérez : nature de l'infraction, montant, références de dossier, instance compétente, **délai de dépôt** ou de réponse, mode de signification. Si plusieurs voies existent (opposition, explication écrite), choisissez celle qui correspond exactement au texte officiel.

## Rédiger le mémoire ou la lettre courte

Pour une première réaction, la clarté prime : **qui vous êtes**, **quel acte vous contestez**, **pourquoi** (faits + éléments de preuve), **ce que vous demandez** (annulation, réduction, nouvelle audience). Joignez une liste numérotée de pièces.

## Après l'envoi

Notez la confirmation de dépôt. Si une audience ou une réponse écrite est promise, relancez calmement après le délai annoncé. Les dossiers complexes (pertes de permis cumulées, infractions graves) nécessitent souvent plus qu'une simple lettre.

NextLetter propose un [modèle de contestation d'amende](/modeles/lettre-contestation-amende-suisse) et des guides connexes sur l'[envoi recommandé](/guides/comment-envoyer-lettre-recommandee-suisse).
`.trim(),
  },
}
