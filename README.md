# Entre'Prieur - Rendez-vous des Entrepreneurs Chrétiens

## 📌 À propos

Entre'Prieur est un site web premium et inspirant pour un concept de rencontres entrepreneuriales sous forme de brunch. Le site a été développé avec **HTML5, CSS3 vanilla et JavaScript vanilla** (sans frameworks).

**Slogan :** "Quand la foi guide l'action, l'entrepreneuriat gagne en sens et en impact"

---

## 🎯 Caractéristiques

### Design Premium
- Palette de couleurs : Bleu marine (#1e3a8a), Or (#d4af37), Blanc, Gris clair
- Design responsive (mobile-first)
- Animations fluides et transitions douces
- Ombres portées subtiles et profondeur

### Fonctionnalités
- ✅ Menu burger responsive
- ✅ Navigation sticky avec effet au scroll
- ✅ Compteur d'événement en temps réel
- ✅ Validation des formulaires
- ✅ Messages de confirmation
- ✅ Animations au scroll
- ✅ Smooth scroll pour les ancres
- ✅ Formulaires avec validation email

---

## 📁 Structure du Projet

```
entreprieur-site-vanilla/
├── index.html              # Page d'accueil
├── vision.html             # La vision et les valeurs
├── evenements.html         # Calendrier des événements
├── rejoindre.html          # Formulaire de candidature
├── contact.html            # Formulaire de contact
├── css/
│   └── style.css           # Styles CSS complets
├── js/
│   └── script.js           # JavaScript interactif
├── images/                 # Dossier pour les images
├── assets/                 # Dossier pour les ressources
└── README.md               # Ce fichier
```

---

## 🚀 Démarrage Rapide

### Localement (Développement)

1. **Naviguer dans le dossier du projet :**
```bash
cd /home/ubuntu/entreprieur-site-vanilla
```

2. **Lancer un serveur local :**
```bash
# Avec Python 3
python3 -m http.server 8080

# Ou avec Node.js (si disponible)
npx http-server -p 8080
```

3. **Accéder au site :**
- Ouvrir `http://localhost:8080` dans le navigateur

---

## 📸 Ajouter les Images

Les emplacements pour les images sont prêts. Pour ajouter vos images :

1. **Placer les images dans le dossier `/images/`**

2. **Mettre à jour les références dans le HTML :**

   - **Page Vision (vision.html)** - Image de Mima Steeve :
   ```html
   <!-- Remplacer le placeholder dans .founder-image -->
   <img src="images/mima-steeve.jpg" alt="Mima Steeve - Fondatrice" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
   ```

   - **Hero Section (index.html)** - Image d'arrière-plan (optionnel) :
   ```css
   /* Dans css/style.css, section .hero */
   background-image: url('../images/hero-background.jpg');
   background-size: cover;
   background-position: center;
   ```

---

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies en variables CSS dans `css/style.css` :
```css
:root {
  --color-primary: #1e3a8a;      /* Bleu marine */
  --color-accent: #d4af37;       /* Or */
  --color-white: #ffffff;        /* Blanc */
  --color-light-gray: #f8f9fa;   /* Gris clair */
}
```

### Typographie
Police par défaut : `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

Pour changer la police, modifier dans `css/style.css` :
```css
body {
  font-family: 'Votre Police', sans-serif;
}
```

### Contenu
Tous les textes sont directement dans les fichiers HTML. Vous pouvez les modifier directement.

---

## 📋 Pages et Contenu

### 1. Accueil (index.html)
- Hero section avec CTA
- Prochain événement (28 février 2026)
- Les 4 piliers (Vision, Discipline, Foi, Impact)
- Citation inspirante
- Footer avec infos

### 2. Vision (vision.html)
- Présentation du concept
- Pourquoi Entre'Prieur ?
- Présentation de la fondatrice (Mima Steeve)
- Valeurs fondamentales
- Format des brunchs

### 3. Événements (evenements.html)
- Description du format des brunchs
- Édition février 2026 (détaillée)
- Calendrier 2026 (Mars, Mai, Juillet, Septembre)
- Détails des événements

### 4. Rejoindre (rejoindre.html)
- Profil recherché
- Formulaire de candidature complet
- Processus d'intégration
- FAQ

### 5. Contact (contact.html)
- Coordonnées
- Formulaire de contact
- Types de demandes
- Réseaux sociaux (placeholders)

---

## ✅ Validation des Formulaires

Les formulaires incluent une validation côté client :
- ✓ Champs requis
- ✓ Validation email
- ✓ Limite de caractères (motivation : 300 max)
- ✓ Messages d'erreur personnalisés
- ✓ Messages de confirmation

---

## 📱 Responsive Design

Le site s'adapte à tous les appareils :
- **Mobile** : 320px - 767px
- **Tablet** : 768px - 1023px
- **Desktop** : 1024px et plus

Le menu se transforme en burger sur mobile automatiquement.

---

## 🔧 Déploiement

### Option 1 : Hébergement Statique (Recommandé)
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Option 2 : Serveur Web
- Apache
- Nginx
- Node.js (Express)

**Aucune dépendance backend requise** - Le site est 100% statique.

---

## 📝 Notes Importantes

1. **Formulaires** : Les formulaires font actuellement une validation côté client uniquement. Pour un vrai traitement, vous devez :
   - Ajouter un backend (Node.js, PHP, Python, etc.)
   - Ou utiliser un service comme Formspree, Netlify Forms, etc.

2. **Compteur d'événement** : Le compteur affiche le temps jusqu'au 28 février 2026 à 10h00. Vous pouvez le modifier dans `js/script.js`.

3. **Images** : Les emplacements pour les images sont prêts. Utilisez des images de haute qualité pour un meilleur rendu.

4. **SEO** : Les meta tags sont déjà en place. Vous pouvez les personnaliser dans chaque page.

---

## 🎯 Prochaines Étapes Recommandées

1. ✅ Ajouter les images (Mima Steeve, logos, etc.)
2. ✅ Configurer un backend pour traiter les formulaires
3. ✅ Ajouter Google Analytics ou un autre outil de suivi
4. ✅ Configurer un domaine personnalisé
5. ✅ Mettre en place HTTPS
6. ✅ Tester sur tous les appareils

---

## 📞 Support

Pour toute question ou modification, veuillez consulter :
- Les fichiers HTML pour le contenu
- `css/style.css` pour les styles
- `js/script.js` pour l'interactivité

---

## 📄 Licence

Ce site a été créé pour "Entre'Prieur - Rendez-vous des entrepreneurs chrétiens" en 2026.

---

**Développé avec ❤️ pour la communauté entrepreneuriale chrétienne**
