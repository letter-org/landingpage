# Itérations Landing NextLetter

Priorité 1
- Revoir Hero : titre + sous-titre + CTA (plus clair, plus “Suisse”, plus rassurant). ✅
- Refaire la section comparaison (animée) en version originale.
- Harmoniser typographie + spacing + boutons.

Priorité 2
- Ajouter micro-preuves (sécurité, confidentialité, Suisse, recommandé). ✅
- Optimiser FAQ (moins longue, plus orientée objections).
- Améliorer la section “Comment ça marche” (3 étapes simples).

Priorité 3
- Ajouter animations légères (scroll reveal / hover) sans lourdeur.
- Performance (images optimisées, pas de gros assets).

## Formulaire B2B - Checklist de test

### Configuration
Créer un fichier `.env.local` à la racine du projet avec :
```bash
# Resend API Key (obligatoire)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email d'envoi (optionnel, défaut: onboarding@resend.dev)
# Utiliser un domaine vérifié si possible: noreply@nextletter.ch
RESEND_FROM_EMAIL=noreply@nextletter.ch

# Email de réception (optionnel, défaut: info@nextletter.ch)
RESEND_TO_EMAIL=info@nextletter.ch
```

- [ ] Créer `.env.local` avec `RESEND_API_KEY`
- [ ] Vérifier `RESEND_FROM_EMAIL` (optionnel, défaut: onboarding@resend.dev)
- [ ] Vérifier `RESEND_TO_EMAIL` (optionnel, défaut: info@nextletter.ch)

### Tests fonctionnels
- [ ] Section "NextLetter s'adapte à votre organisation" visible avant "Pour qui ?"
- [ ] CTA "Demander une démo" ouvre le formulaire (segment = pme)
- [ ] Carte "Particuliers" redirige vers app.nextletter.ch
- [ ] Carte "PME & indépendants" ouvre le formulaire (segment = pme)
- [ ] Carte "Professions réglementées" ouvre le formulaire (segment = regulated)
- [ ] Carte "Communes & institutions" ouvre le formulaire (segment = public)
- [ ] Les cartes B2B ont un effet hover (glow + translation)
- [ ] Le modal s'ouvre avec animation (fade + slide)
- [ ] Le segment sélectionné s'affiche dans le titre du modal

### Tests du formulaire
- [ ] Validation côté client fonctionne (champs requis)
- [ ] Validation email fonctionne
- [ ] Honeypot fonctionne (champ website caché)
- [ ] Tous les champs sont présents et fonctionnels
- [ ] Les checkboxes de besoins fonctionnent
- [ ] Le textarea limite à 1000 caractères
- [ ] Le bouton submit est désactivé si formulaire invalide
- [ ] Le bouton submit affiche un spinner pendant l'envoi
- [ ] Après envoi réussi : affichage de l'écran de confirmation
- [ ] L'écran de confirmation a le bouton "Fermer"
- [ ] Le toast de succès s'affiche

### Tests API
- [ ] POST /api/lead envoie un email à info@nextletter.ch
- [ ] L'email contient toutes les informations du formulaire
- [ ] L'email est bien formaté (HTML + texte)
- [ ] Le honeypot bloque les bots (silent fail)
- [ ] Les erreurs de validation sont retournées correctement
- [ ] Les erreurs serveur sont gérées proprement

### Tests UX/Design
- [ ] Le design est cohérent avec le style premium
- [ ] Les animations sont fluides
- [ ] Le modal est responsive (mobile/desktop)
- [ ] Le formulaire est lisible et accessible