# Site Web Magasin KR-V

Site web moderne et responsive pour Magasin KR-V - Spécialiste en fournitures de carrosserie et peinture automobile à Meaux.

## 🚀 Technologies utilisées

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Symfony 6
- **Build**: Webpack 5
- **Styling**: Tailwind CSS avec classes personnalisées
- **Icons**: Font Awesome 6

## 📁 Structure du projet

```
src/
├── components/
│   ├── Navigation.js         # Barre de navigation
│   ├── HeroSection.js        # Section d'accueil
│   ├── ServicesSection.js    # Section services
│   ├── ProductsSection.js    # Section produits
│   ├── BrandsSection.js      # Section marques
│   ├── GallerySection.js     # Section galerie
│   ├── ContactSection.js     # Section contact
│   └── Footer.js             # Pied de page
├── styles/
│   └── custom.css            # Styles Tailwind personnalisés
├── App.js                    # Composant principal React
└── index.js                  # Point d'entrée React

templates/
└── base.html.twig            # Template Symfony de base

config/
├── webpack.config.js         # Configuration Webpack
├── tailwind.config.js        # Configuration Tailwind
└── package.json              # Dépendances Node.js
```

## 🛠️ Installation

### 1. Prérequis

- Node.js 16+ et npm
- PHP 8.1+
- Composer
- Symfony CLI (optionnel)

### 2. Installation des dépendances

```bash
# Dépendances JavaScript
npm install

# Dépendances PHP (si Symfony n'est pas encore installé)
composer install
```

### 3. Configuration

Créez un fichier `.env.local` pour vos variables d'environnement :

```env
APP_ENV=dev
DATABASE_URL="mysql://username:password@127.0.0.1:3306/krv_db"
MAILER_DSN=smtp://localhost
```

### 4. Build du frontend

```bash
# Mode développement avec watch
npm run dev

# Build de production
npm run build

# Watch des fichiers en développement
npm run watch
```

## 🎨 Styles et Composants

### Classes CSS personnalisées

Le fichier `styles/custom.css` contient des classes utilitaires personnalisées :

- `.brand-blue` - Couleur principale de la marque
- `.gradient-bg` - Arrière-plan dégradé
- `.hero-pattern` - Motif de fond pour la section hero
- `.card-hover` - Effet de survol pour les cartes
- `.btn-primary` / `.btn-secondary` - Styles de boutons
- `.form-input` - Style des champs de formulaire

### Composants React

Chaque section du site est un composant React séparé :

1. **Navigation** - Barre de navigation sticky avec menu mobile
2. **HeroSection** - Section d'accueil avec appels à l'action
3. **ServicesSection** - Grille des services offerts
4. **ProductsSection** - Catalogue des produits par catégorie
5. **BrandsSection** - Marques partenaires
6. **GallerySection** - Galerie d'images (placeholder)
7. **ContactSection** - Formulaire de contact et informations
8. **Footer** - Pied de page avec liens et informations

## 🔧 Développement

### Lancement en mode développement

```bash
# Terminal 1 - Symfony
symfony serve

# Terminal 2 - Webpack dev server
npm run dev
```

### Structure des données

Le formulaire de contact envoie les données suivantes :
```javascript
{
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
}
```

### Intégration avec Symfony

Pour connecter le formulaire de contact à votre backend Symfony :

1. Créez un contrôleur pour gérer les soumissions
2. Modifiez la fonction `handleSubmit` dans `ContactSection.js`
3. Ajoutez une route API dans `config/routes.yaml`

Exemple de contrôleur :

```php
#[Route('/api/contact', methods: ['POST'])]
public function submitContact(Request $request): JsonResponse
{
    $data = json_decode($request->getContent(), true);
    
    // Traitement du formulaire
    // Envoi d'email, sauvegarde en base, etc.
    
    return new JsonResponse(['success' => true]);
}
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Tailwind :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px  
- **Desktop** : > 1024px

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

### Optimisations incluses

- Code splitting automatique
- Compression des assets
- Optimisation des images
- Minification CSS/JS
- Source maps pour le debugging

## 📞 Contact

**Magasin KR-V**
- 📍 12 Rue des Buttes Blanches, 77100 Meaux
- 📞 09 82 71 77 77 / 06 09 30 98 81
- ✉️ magasinkrv77@gmail.com
- 🕒 Lundi - Vendredi : 09:00 - 18:00

## 🔮 Fonctionnalités futures

- [ ] Système de gestion de contenu (CMS)
- [ ] Catalogue produits avec base de données
- [ ] Système de commande en ligne
- [ ] Espace client
- [ ] Blog/actualités
- [ ] Galerie photos réelle
- [ ] Géolocalisation et carte interactive
- [ ] Chat en direct
- [ ] Multi-langue (français/anglais)

## 📄 Licence

© 2025 Magasin KR-V. Tous droits réservés.