# Checklist de test - Landing Page NextLetter

## Installation et démarrage

```bash
pnpm install
pnpm dev
```

## Tests à effectuer

### 1. Background montagnes
- [ ] Les montagnes bleues transparentes sont visibles en arrière-plan
- [ ] Le background est subtil et ne gêne pas la lisibilité
- [ ] Pas de warnings console liés au background

### 2. Header
- [ ] Pas de badge "Swiss Made" à côté du logo
- [ ] Navigation fonctionne correctement
- [ ] Pas de warnings d'hydratation

### 3. Sections
- [ ] Aucune section vide ou avec grand espace blanc
- [ ] Toutes les sections ont du contenu cohérent
- [ ] Section "Pour qui ?" affiche les 4 cartes (Particuliers, PME, Professions réglementées, Communes)

### 4. Formulaire entreprises
- [ ] Clic sur "PME & indépendants" ouvre le formulaire
- [ ] Clic sur "Professions réglementées" ouvre le formulaire
- [ ] Clic sur "Communes & institutions" ouvre le formulaire
- [ ] Formulaire contient tous les champs :
  - [ ] Type de société (dropdown : SA, Sàrl, RI, Association, Fondation, Collectivité publique, Autre)
  - [ ] Raison sociale
  - [ ] Nom et prénom
  - [ ] Adresse (champ unique)
  - [ ] Téléphone
  - [ ] Email
  - [ ] Nombre de lettres / mois (dropdown : 1–10, 11–50, 51–200, 200+)
  - [ ] Besoins spécifiques (checkboxes : CRM personnalisé, Multi-comptes, Statistiques, SSO, Intégration API, Autre)
  - [ ] Champ texte libre "Votre demande"
  - [ ] Bouton "Envoyer"
- [ ] Après envoi : message de confirmation s'affiche
- [ ] Email envoyé à info@nextletter.ch (vérifier avec RESEND_API_KEY configuré)

### 5. Footer
- [ ] Email : info@nextletter.ch
- [ ] Téléphone : +41 79 908 61 52
- [ ] Adresse : Chemin de la Crésentine 57, 1023 Crissier
- [ ] Liens fonctionnels :
  - [ ] Confidentialité → /politique-confidentialite
  - [ ] Conditions d'utilisation → /cgu
  - [ ] Cookies → /cookies
  - [ ] Informations légales → /mentions-legales
  - [ ] Contact → mailto:info@nextletter.ch

### 6. Pages légales
- [ ] /politique-confidentialite : page accessible, contenu clair
- [ ] /cgu : page accessible, contenu clair
- [ ] /cookies : page accessible, contenu clair
- [ ] /mentions-legales : page accessible, contenu clair
- [ ] Toutes les pages utilisent info@nextletter.ch comme email de contact
- [ ] Pas de mentions ISO 27001 ou certifications non confirmées
- [ ] Hébergement mentionné comme "Infrastructure sécurisée en Europe, avec options Europe/Suisse"

### 7. Cookie Banner
- [ ] Le bandeau cookies apparaît au chargement de la page
- [ ] Boutons "Accepter" / "Refuser" / "Paramètres" fonctionnent
- [ ] Dialog "Paramètres" permet de gérer les cookies analytiques
- [ ] Le consentement est sauvegardé dans localStorage
- [ ] Le bandeau ne réapparaît pas après acceptation/refus
- [ ] Analytics désactivé par défaut (tant que pas accepté)

### 8. Warnings d'hydratation
- [ ] Pas de warnings "hydration mismatch" dans la console
- [ ] Tester en navigation privée
- [ ] Tester avec cache désactivé
- [ ] Pas de Math.random() dans le rendu SSR
- [ ] Tous les accès à window sont dans useEffect

### 9. Section Sécurité
- [ ] Section conservée avec ses effets visuels
- [ ] Texte mentionne "Infrastructure sécurisée en Europe, avec options Europe/Suisse"
- [ ] Pas de mention ISO 27001

### 10. Variables d'environnement
Créer un fichier `.env.local` avec :
```
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@nextletter.ch
FROM_EMAIL=noreply@nextletter.ch
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tests de navigation
- [ ] Tous les liens internes fonctionnent
- [ ] Tous les liens externes s'ouvrent dans un nouvel onglet
- [ ] Pas d'erreurs 404
- [ ] Scroll smooth fonctionne

## Tests responsive
- [ ] Mobile : layout correct
- [ ] Tablet : layout correct
- [ ] Desktop : layout correct
- [ ] Formulaire utilisable sur mobile
