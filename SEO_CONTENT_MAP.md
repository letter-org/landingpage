# Carte contenu SEO — NextLetter (`/modeles`)

Document de pilotage : intentions de recherche, pages piliers, canonicals, anti-cannibalisation et suivi conversion.

## Suivi conversion (implémenté)

- **UTM** : les CTA vers l’app sur les pages pilier utilisent `buildTrackedAppHref` avec  
  `utm_source=landing`, `utm_medium=cta`, `utm_campaign=<campaign>`, `utm_content=<placement>`, `utm_term=<slug page>`.
- **Événement Vercel Analytics** : `modele_app_cta_click` avec propriétés  
  `page_slug`, `placement` (`hero` | `intermediate` | `final` | `maillage_app`), `campaign`.
- **Pages concernées** : les 5 URLs courtes pilier listées ci‑dessous (prop `conversionTracking` sur `LetterModelTemplate`).

---

## Pages piliers prioritaires (URLs courtes)

| Mot-clé principal (cible) | URL pilier | Ancienne(s) URL(s) liée(s) | Canonical recommandé | CTA principal | Indexable |
|---------------------------|------------|----------------------------|----------------------|---------------|-----------|
| opposition poursuite suisse | `/modeles/opposition-poursuite-suisse` | `/modeles/lettre-opposition-poursuite-suisse` | **Pilier** : self-canonical | « Générer mon opposition en 2 minutes » | Oui |
| commandement de payer suisse | `/modeles/commandement-de-payer-suisse` | — | Self-canonical | « Créer une opposition » | Oui |
| mise en demeure suisse | `/modeles/mise-en-demeure-suisse` | — (proche : contestation facture, relance) | Self-canonical | « Créer ma mise en demeure » | Oui |
| relance facture impayée suisse | `/modeles/relance-facture-impayee-suisse` | — (proche : mise en demeure) | Self-canonical | « Générer ma relance » | Oui |
| résiliation bail suisse | `/modeles/resiliation-bail-suisse` | `/modeles/lettre-resiliation-bail-suisse` | **Pilier** : self-canonical | « Générer ma résiliation de bail » | Oui |

### Consolidation canonical (doublons historiques)

| URL conservée (accessible) | Canonical HTTP | Rôle |
|----------------------------|----------------|------|
| `/modeles/lettre-opposition-poursuite-suisse` | → `/modeles/opposition-poursuite-suisse` | Variante « lettre » historique ; JSON-LD Article/HowTo pointent vers le pilier (`structuredDataPath`) |
| `/modeles/lettre-resiliation-bail-suisse` | → `/modeles/resiliation-bail-suisse` | Idem pour résiliation bail généraliste |

**Note :** les pages historiques ne sont pas supprimées ; elles restent utiles pour les liens entrants et la transition produit. La consolidation repose sur **canonical + maillage vers le pilier + liste `/modeles` dédoublonnée**.

---

## Audit cannibalisation — familles `/modeles`

### Risque élevé (traité)

| Sujet | URLs en tension | Page pilier | Mesure |
|-------|-----------------|-------------|--------|
| Opposition poursuite | `opposition-poursuite-suisse` vs `lettre-opposition-poursuite-suisse` | URL courte | Canonical legacy → pilier ; entrée unique dans `ALL_LETTER_MODELS` ; redirects courts `/lettre-opposition-poursuite` → pilier |
| Résiliation bail général | `resiliation-bail-suisse` vs `lettre-resiliation-bail-suisse` | URL courte | Idem ; redirect `/lettre-resiliation-bail-suisse` (racine site) → pilier |

### Risque moyen (intentions différentes — pas de canonical croisé)

| URLs | Pourquoi garder les deux |
|------|---------------------------|
| `lettre-resiliation-bail-locataire-suisse` vs pilier bail | Intention « locataire » précise vs vue générale |
| `lettre-resiliation-bail-bailleur-suisse` vs pilier | Idem bailleur |
| `mise-en-demeure-suisse` vs `relance-facture-impayee-suisse` | Relance ≠ mise en demeure (niveau de formalisme) |
| `commandement-de-payer-suisse` vs `opposition-poursuite-suisse` | Informationnel vs rédaction opposition |

### Risque faible / clusters nombreux

- **Résiliation par marque** (`lettre-resiliation-assurance-*`, télécom, etc.) : intention « marque » ; pas de fusion avec les piliers génériques.
- **Motivation / travail** : familles distinctes.

---

## Metadata & cohérence

- **Titres** : chaque route `/modeles/*` conserve un `<title>` distinct ; les piliers courts portent le wording SEO principal, les legacy gardent leur titre avec canonical vers le pilier.
- **H1** : une seule balise `h1` par page (template existant).
- **Sitemap** : alimenté par `ALL_LETTER_MODELS` ; les URLs legacy avec fichiers `page.tsx` restent dans le build Next sans être obligées dans la liste — les deux opposition/bail legacy existent toujours comme routes statiques.

---

## Maillage interne (mis à jour)

- Hub **`/modeles`** : bloc « Situations les plus recherchées » vers les 5 piliers.
- **Footer** : liens `Modèles de lettres`, `Opposition poursuite`.
- **Homepage** (`SeoHomepageContent`) : liens vers piliers opposition, résiliation bail, mise en demeure, relance.
- **Maillage SEO** (landings qui utilisent `MaillageSeo`) : opposition, commandement, mise en demeure, relance, résiliation bail pilier.
- **Guides / configs** : `P.oppoPour`, `P.bail`, landings poursuite, `quand-resilier-config` pointent vers les URLs piliers.

---

## Fichiers techniques clés

| Fichier | Rôle |
|---------|------|
| `lib/app-urls.ts` | `buildTrackedAppHref`, `addUtmParams` |
| `components/tracked-app-cta.tsx` | CTA app + `track('modele_app_cta_click', …)` |
| `components/letter-model-template.tsx` | `structuredDataPath`, `conversionTracking`, `maillageAppLinkLabel` |
| `components/maillage-contextuel.tsx` | Lien app tracé si `conversionTracking` |
| `lib/letter-models.ts` | Catalogue hub / sitemap (entrées dédoublonnées pour opposition & bail général) |
| `next.config.mjs` | Redirects courts marketing → piliers |

---

_Dernière mise à jour : consolidation opposition / résiliation bail général et tracking conversion sur les 5 piliers._
