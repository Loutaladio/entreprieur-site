# Guide Complet : De GitHub au Déploiement en Ligne

## 🎯 Votre Repository GitHub

**URL :** https://github.com/Loutaladio/entreprieur-site

---

## 🚀 Option 1 : Netlify (Recommandé - Gratuit & Facile)

### Étape 1 : Créer un compte Netlify
1. Aller sur https://netlify.com
2. Cliquer sur "Sign up"
3. Connectez-vous avec GitHub (recommandé)
4. Autoriser Netlify à accéder à vos repositories

### Étape 2 : Créer un nouveau site
1. Cliquer sur "Add new site"
2. Sélectionner "Import an existing project"
3. Choisir "GitHub"
4. Sélectionner le repository `Loutaladio/entreprieur-site`

### Étape 3 : Configurer le déploiement
- **Build command:** (laisser vide - site statique)
- **Publish directory:** `.` (racine du projet)
- Cliquer sur "Deploy site"

### Étape 4 : Attendre le déploiement
- Netlify va automatiquement déployer votre site
- Vous recevrez une URL temporaire (ex: `https://xxx.netlify.app`)
- Votre site sera en ligne en quelques secondes !

### Étape 5 : Ajouter un domaine personnalisé (optionnel)
1. Dans les paramètres du site, aller à "Domain settings"
2. Cliquer sur "Add custom domain"
3. Entrer votre domaine (ex: `entreprieur.com`)
4. Suivre les instructions pour configurer le DNS
5. SSL/HTTPS est automatique avec Netlify !

### Avantages de Netlify :
✅ Déploiement automatique à chaque push sur GitHub
✅ SSL/HTTPS gratuit
✅ Domaine personnalisé gratuit
✅ Prévisualisation des branches
✅ Formulaires intégrés (bonus)

---

## 🚀 Option 2 : Vercel (Gratuit & Très Rapide)

### Étape 1 : Créer un compte Vercel
1. Aller sur https://vercel.com
2. Cliquer sur "Sign up"
3. Connectez-vous avec GitHub
4. Autoriser Vercel à accéder à vos repositories

### Étape 2 : Importer le projet
1. Cliquer sur "New Project"
2. Sélectionner "Import Git Repository"
3. Chercher `entreprieur-site`
4. Cliquer sur "Import"

### Étape 3 : Configurer
- **Project name:** `entreprieur-site` (ou votre choix)
- **Framework:** Sélectionner "Other" (site statique)
- **Root Directory:** `.` (racine)
- Cliquer sur "Deploy"

### Étape 4 : C'est fait !
- Vercel va déployer votre site en quelques secondes
- Vous recevrez une URL (ex: `https://entreprieur-site.vercel.app`)
- SSL/HTTPS automatique

### Avantages de Vercel :
✅ Très rapide (CDN global)
✅ Déploiement automatique
✅ SSL/HTTPS gratuit
✅ Domaine personnalisé
✅ Analytics inclus

---

## 🚀 Option 3 : GitHub Pages (Gratuit - Intégré à GitHub)

### Étape 1 : Accéder aux paramètres du repository
1. Aller sur https://github.com/Loutaladio/entreprieur-site
2. Cliquer sur "Settings" (onglet)
3. Cliquer sur "Pages" dans le menu de gauche

### Étape 2 : Activer GitHub Pages
1. Sous "Source", sélectionner "Deploy from a branch"
2. Sélectionner la branche : `master`
3. Sélectionner le dossier : `/ (root)`
4. Cliquer sur "Save"

### Étape 3 : Attendre le déploiement
- GitHub va automatiquement déployer votre site
- Après quelques secondes, vous verrez une URL :
  `https://loutaladio.github.io/entreprieur-site`

### Étape 4 : Ajouter un domaine personnalisé (optionnel)
1. Dans les paramètres de Pages
2. Sous "Custom domain", entrer votre domaine
3. Configurer les enregistrements DNS chez votre registrar
4. Cocher "Enforce HTTPS"

### Avantages de GitHub Pages :
✅ Gratuit et intégré à GitHub
✅ Déploiement automatique
✅ SSL/HTTPS gratuit
✅ Pas de compte externe nécessaire
✅ Parfait pour les projets open source

---

## 📊 Comparaison des Options

| Critère | Netlify | Vercel | GitHub Pages |
|---------|---------|--------|--------------|
| **Gratuit** | ✅ | ✅ | ✅ |
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Vitesse** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Fonctionnalités** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Domaine perso** | ✅ | ✅ | ✅ |
| **SSL/HTTPS** | ✅ | ✅ | ✅ |
| **Déploiement auto** | ✅ | ✅ | ✅ |

**Recommandation :** Netlify ou Vercel pour plus de fonctionnalités, GitHub Pages si vous voulez rester simple.

---

## 🔄 Workflow : Modifier le Code et Déployer

Une fois votre site déployé, voici comment mettre à jour le code :

### Localement :
```bash
cd /home/ubuntu/entreprieur-site-vanilla

# Faire vos modifications
# (éditer les fichiers HTML, CSS, JS)

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Mise à jour: description de vos changements"

# Pousser sur GitHub
git push origin master
```

### Sur le serveur de déploiement :
- **Netlify/Vercel :** Déploiement automatique en quelques secondes
- **GitHub Pages :** Déploiement automatique en quelques secondes

Votre site sera mis à jour automatiquement ! 🎉

---

## 📸 Ajouter les Images

Avant de déployer, n'oubliez pas d'ajouter les images :

1. Placer les images dans le dossier `/images/`
2. Mettre à jour les références dans le HTML
3. Faire un commit et push
4. Le site se mettra à jour automatiquement

Voir `IMAGES_INSTRUCTIONS.md` pour plus de détails.

---

## 🔐 Domaine Personnalisé

### Acheter un domaine
- GoDaddy, Namecheap, OVH, Google Domains, etc.

### Configurer le DNS
- Chez Netlify/Vercel : suivre les instructions dans les paramètres
- Chez GitHub Pages : ajouter un enregistrement CNAME

### Exemple avec Netlify :
1. Aller dans "Domain settings"
2. Cliquer sur "Add custom domain"
3. Entrer votre domaine (ex: `entreprieur.com`)
4. Netlify vous donnera les enregistrements DNS à ajouter
5. Les ajouter chez votre registrar
6. Attendre la propagation DNS (5-48h)

---

## 🆘 Dépannage

### Le site ne s'affiche pas correctement
- Vérifier que tous les chemins des fichiers sont corrects
- Vérifier que les images sont dans le dossier `/images/`
- Vérifier la console du navigateur pour les erreurs

### Les formulaires ne fonctionnent pas
- Ajouter un backend ou un service de formulaire
- Netlify Forms : https://www.netlify.com/products/forms/
- Formspree : https://formspree.io/
- Basin : https://basinapp.com/

### Le site est lent
- Compresser les images
- Minifier CSS et JavaScript
- Utiliser un CDN (Netlify/Vercel le font automatiquement)

### SSL/HTTPS ne fonctionne pas
- Attendre quelques minutes après le déploiement
- Vider le cache du navigateur
- Contacter le support du service de déploiement

---

## 📞 Prochaines Étapes

1. ✅ Choisir un service de déploiement (Netlify, Vercel, ou GitHub Pages)
2. ✅ Suivre les étapes de déploiement
3. ✅ Ajouter les images
4. ✅ Tester le site en ligne
5. ✅ Ajouter un domaine personnalisé (optionnel)
6. ✅ Configurer les formulaires (optionnel)
7. ✅ Ajouter Google Analytics (optionnel)

---

## 📚 Ressources Utiles

- **Netlify Docs :** https://docs.netlify.com/
- **Vercel Docs :** https://vercel.com/docs
- **GitHub Pages Docs :** https://docs.github.com/en/pages
- **MDN Web Docs :** https://developer.mozilla.org/

---

## 🎉 Conclusion

Votre site Entre'Prieur est maintenant prêt à être déployé en ligne !

Choisissez votre service de déploiement préféré et suivez les étapes.
Votre site sera en ligne en quelques minutes ! 🚀

Bonne chance ! 💪
