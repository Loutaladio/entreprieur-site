# Guide de Déploiement - Entre'Prieur

## 🚀 Options de Déploiement

Ce site est 100% statique et peut être déployé sur n'importe quel hébergement web.

---

## Option 1 : Netlify (Recommandé - Gratuit)

### Étapes :

1. **Créer un compte** sur [netlify.com](https://netlify.com)

2. **Connecter votre repository Git** (GitHub, GitLab, Bitbucket)
   - Ou utiliser le drag & drop

3. **Configurer le déploiement :**
   - Build command: (laisser vide - site statique)
   - Publish directory: `.` (racine du projet)

4. **Déployer :**
   - Cliquer sur "Deploy"
   - Netlify génère une URL temporaire

5. **Ajouter un domaine personnalisé :**
   - Aller dans Settings > Domain management
   - Ajouter votre domaine

---

## Option 2 : Vercel (Gratuit)

### Étapes :

1. **Créer un compte** sur [vercel.com](https://vercel.com)

2. **Importer le projet :**
   - Cliquer sur "New Project"
   - Sélectionner le repository

3. **Configurer :**
   - Framework: Other (static)
   - Root Directory: `.`

4. **Déployer :**
   - Vercel déploie automatiquement

---

## Option 3 : GitHub Pages (Gratuit)

### Étapes :

1. **Créer un repository** sur GitHub

2. **Pousser le code :**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/entreprieur-site.git
git push -u origin main
```

3. **Activer GitHub Pages :**
   - Aller dans Settings > Pages
   - Source: main branch
   - Cliquer sur Save

4. **Accéder au site :**
   - URL: `https://votre-username.github.io/entreprieur-site`

---

## Option 4 : Hébergement Traditionnel (Apache/Nginx)

### Avec Apache :

1. **Copier les fichiers :**
```bash
cp -r /home/ubuntu/entreprieur-site-vanilla/* /var/www/html/entreprieur/
```

2. **Configurer les permissions :**
```bash
chmod -R 755 /var/www/html/entreprieur/
```

3. **Créer un VirtualHost** (optionnel) :
```apache
<VirtualHost *:80>
    ServerName entreprieur.com
    DocumentRoot /var/www/html/entreprieur
</VirtualHost>
```

4. **Redémarrer Apache :**
```bash
sudo systemctl restart apache2
```

### Avec Nginx :

1. **Copier les fichiers :**
```bash
cp -r /home/ubuntu/entreprieur-site-vanilla/* /var/www/entreprieur/
```

2. **Créer une configuration :**
```nginx
server {
    listen 80;
    server_name entreprieur.com;
    root /var/www/entreprieur;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. **Redémarrer Nginx :**
```bash
sudo systemctl restart nginx
```

---

## Option 5 : AWS S3 + CloudFront

### Étapes :

1. **Créer un bucket S3 :**
   - Nom: `entreprieur-site`
   - Région: Proche de vos utilisateurs

2. **Configurer l'hébergement statique :**
   - Properties > Static website hosting
   - Enable
   - Index document: `index.html`

3. **Uploader les fichiers :**
```bash
aws s3 sync /home/ubuntu/entreprieur-site-vanilla s3://entreprieur-site/
```

4. **Configurer CloudFront :**
   - Créer une distribution
   - Origin: S3 bucket
   - Default root object: `index.html`

5. **Ajouter un domaine personnalisé :**
   - Route 53 ou votre registrar DNS

---

## 🔒 HTTPS & Sécurité

### Certificat SSL Gratuit (Let's Encrypt)

**Avec Certbot :**
```bash
sudo certbot certonly --webroot -w /var/www/html/entreprieur -d entreprieur.com
```

**Avec Netlify/Vercel :**
- SSL automatique et gratuit ✅

---

## 📊 Configuration DNS

### Exemple avec un domaine personnalisé :

**Enregistrements DNS à ajouter :**

```
Type    Name              Value
A       @                 IP_DE_VOTRE_SERVEUR
CNAME   www               votre-site.netlify.app
```

---

## ✅ Checklist de Déploiement

- [ ] Toutes les images ajoutées
- [ ] Liens internes vérifiés
- [ ] Formulaires testés
- [ ] Site responsive testé
- [ ] Performance vérifiée (PageSpeed Insights)
- [ ] SEO vérifié
- [ ] Domaine configuré
- [ ] SSL/HTTPS activé
- [ ] Analytics configuré (optionnel)
- [ ] Backups en place

---

## 🔍 Tests Avant Déploiement

### Performance :
```bash
# Utiliser Lighthouse
# https://developers.google.com/web/tools/lighthouse
```

### Responsive :
- Tester sur Chrome DevTools
- Tester sur vrais appareils

### Formulaires :
- Tester tous les formulaires
- Vérifier les validations
- Tester les messages d'erreur

### Liens :
- Vérifier tous les liens internes
- Vérifier tous les liens externes

---

## 📈 Après le Déploiement

1. **Ajouter Google Analytics :**
   - Créer un compte Google Analytics
   - Ajouter le code de suivi dans chaque page

2. **Configurer les emails :**
   - Mettre en place un service de formulaire (Formspree, etc.)
   - Ou ajouter un backend pour traiter les formulaires

3. **Monitorer :**
   - Uptime monitoring (Pingdom, UptimeRobot)
   - Error tracking (Sentry, Rollbar)

4. **Maintenance :**
   - Mettre à jour le contenu régulièrement
   - Ajouter les photos des événements
   - Mettre à jour le calendrier

---

## 🆘 Dépannage

### Le site n'affiche pas les styles :
- Vérifier que le chemin vers `css/style.css` est correct
- Vérifier les permissions des fichiers

### Les images ne s'affichent pas :
- Vérifier que les images sont dans `/images/`
- Vérifier les chemins dans le HTML

### Les formulaires ne fonctionnent pas :
- Ajouter un backend ou un service de formulaire
- Vérifier la console du navigateur pour les erreurs

### Le site est lent :
- Compresser les images
- Minifier CSS et JavaScript
- Utiliser un CDN

---

## 📞 Support

Pour toute question, consultez :
- README.md
- IMAGES_INSTRUCTIONS.md
- Les commentaires dans le code

Bonne chance avec votre déploiement ! 🚀
