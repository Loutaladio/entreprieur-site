# Instructions pour Ajouter les Images

## 📸 Emplacements des Images

Le site Entre'Prieur contient plusieurs emplacements prêts pour les images. Voici comment les ajouter :

---

## 1️⃣ Image de Mima Steeve (PRIORITAIRE)

**Localisation :** Page Vision (`vision.html`)

**Dimensions recommandées :** 400px x 400px (carré)

**Format :** JPG, PNG ou WebP

**Étapes :**

1. Placer l'image dans `/images/` avec le nom `mima-steeve.jpg`

2. Dans `vision.html`, trouver la section `.founder-image` :
```html
<div class="founder-image">
  <!-- Placeholder pour l'image de Mima Steeve -->
  <div style="text-align: center; color: white;">
    <p style="font-size: 0.8rem; margin-bottom: 0.5rem;">Image de</p>
    <p style="font-weight: bold;">Mima Steeve</p>
  </div>
</div>
```

3. Remplacer par :
```html
<div class="founder-image">
  <img src="images/mima-steeve.jpg" alt="Mima Steeve - Fondatrice" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
</div>
```

---

## 2️⃣ Image Hero (OPTIONNEL)

**Localisation :** Page d'accueil (`index.html`)

**Dimensions recommandées :** 1920px x 1080px (16:9)

**Format :** JPG, PNG ou WebP

**Étapes :**

1. Placer l'image dans `/images/` avec le nom `hero-background.jpg`

2. Dans `css/style.css`, trouver la section `.hero` et ajouter :
```css
.hero {
  background-image: url('../images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

3. Ou modifier directement le style inline dans `index.html` :
```html
<section class="hero" style="background-image: url('images/hero-background.jpg'); background-size: cover; background-position: center;">
```

---

## 3️⃣ Logo Mon Équilibre (OPTIONNEL)

**Localisation :** Footer (toutes les pages)

**Dimensions recommandées :** 150px x 150px

**Format :** PNG avec transparence

**Étapes :**

1. Placer le logo dans `/images/` avec le nom `logo-mon-equilibre.png`

2. Dans le footer de chaque page, trouver :
```html
<div class="footer-logo">
  <span>Projet porté par</span>
  <small>Mon Équilibre</small>
</div>
```

3. Remplacer par :
```html
<div class="footer-logo">
  <img src="images/logo-mon-equilibre.png" alt="Mon Équilibre" style="height: 40px; margin-right: 0.5rem;">
</div>
```

---

## 4️⃣ Logo DG Club (OPTIONNEL)

**Localisation :** Footer (toutes les pages)

**Dimensions recommandées :** 150px x 150px

**Format :** PNG avec transparence

**Étapes :**

1. Placer le logo dans `/images/` avec le nom `logo-dg-club.png`

2. Dans le footer, trouver :
```html
<div class="footer-section">
  <h4>Développé par</h4>
  <p>DG Club 2026</p>
```

3. Remplacer par :
```html
<div class="footer-section">
  <h4>Développé par</h4>
  <img src="images/logo-dg-club.png" alt="DG Club 2026" style="height: 50px; margin-bottom: 1rem;">
  <p>DG Club 2026</p>
```

---

## 5️⃣ Images Supplémentaires (OPTIONNEL)

Vous pouvez ajouter d'autres images pour enrichir le contenu :

- **Galerie d'événements** : Créer une section galerie avec des photos des brunchs passés
- **Témoignages** : Ajouter des photos des entrepreneurs membres
- **Icônes personnalisées** : Remplacer les emojis par des icônes SVG ou PNG

---

## 📋 Checklist

- [ ] Image de Mima Steeve ajoutée
- [ ] Image hero ajoutée (optionnel)
- [ ] Logo Mon Équilibre ajouté (optionnel)
- [ ] Logo DG Club ajouté (optionnel)
- [ ] Tous les chemins d'images vérifiés
- [ ] Site testé sur desktop et mobile

---

## 🎨 Recommandations

1. **Optimisation** : Compresser les images pour un meilleur chargement
   - Utiliser TinyPNG, ImageOptim, ou similar
   - Viser < 500KB par image

2. **Format** : Préférer WebP pour une meilleure compression
   - Fallback en JPG/PNG pour les navigateurs anciens

3. **Qualité** : Utiliser des images de haute qualité
   - Minimum 1920px de large pour les images hero
   - Minimum 400px pour les avatars

4. **Alt Text** : Toujours ajouter un texte alternatif descriptif

---

## 📞 Besoin d'Aide ?

Si vous avez des questions sur l'ajout des images, consultez :
- Le README.md pour plus d'informations
- Les fichiers HTML pour voir les emplacements exacts
- Les commentaires dans le code CSS et JavaScript

Bon courage ! 🚀
