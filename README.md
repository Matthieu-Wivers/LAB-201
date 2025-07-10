# 🎧 LAB-201 – Site Officiel de Promotion d'Album

Ce projet est un site web conçu pour promouvoir le **nouvel album** d’un **groupe musical reconnu**. Il permet aux fans de :

- découvrir l’univers du groupe,
- explorer les albums via un carrousel interactif,
- lire les dernières actualités,
- consulter les dates de tournée,
- et entrer en contact via un formulaire email.

---

## 🚀 Technologies utilisées

### 🔧 Frontend
- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **Vite** : Outil de build rapide pour React.
- **Styled-components** : Pour créer des composants stylés réutilisables.
- **React Icons** : Pour ajouter des icônes modernes.
- **Email.js** : Envoi de mails via le formulaire de contact sans serveur.

### 🔥 Backend / Base de données
- **Firebase** :
  - **Cloud Firestore** : Stockage des données dynamiques (tournées, articles…).
  - **Realtime Database** *(optionnel ou complémentaire)*.
  - **Firebase Auth** *(optionnel si besoin d’authentification plus tard)*.

---

## ✨ Fonctionnalités principales

- 🎵 **Présentation de l’album** avec textes et visuels immersifs.
- 📅 **Dates de tournée** dynamiques (ajoutées via Firestore).
- 📸 **Carrousel d’albums** interactif et responsive.
- 📰 **Blog / Actualités** du groupe.
- 📬 **Formulaire de contact** fonctionnel via Email.js.
- 📱 **Design responsive** optimisé pour mobile et desktop.

---
## 🛠️ Installation

1. Clone le dépôt :

```bash
git clone https://github.com/Matthieu-Wivers/LAB-201
cd LAB-201

2-install dependencies
npm create vite@latest
npm install
npm install styled-components
npm install prop-types --save-dev
npm install firebase
npm install emailjs-com
npm install react-icons


3. Lancer le serveur

npm run dev (en local)

```bash

structure du projet


```
src/
│   App.css
│   App.jsx
│   firebase.js
│   index.css
│   main.jsx
│
├───assets/
│   ├── goldLogo.png
│   ├── image.png
│   ├── logos.png
│   └── react.svg
│
├───components/
│   ├── Accueil.jsx
│   ├── AlbumsCarousel.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Groupe.jsx
│   └── ToursDates.jsx
│
├───pages/
│   └── Home.jsx   ← Composant principal qui englobe tous les autres
│
└───styles/
    ├── ContactStyles.jsx
    └── GlobalStyles.jsx

🔁 Le composant Home contient tous les autres.
🎸 Le composant Groupe est inclus dans AlbumsCarousel.

💡 Conseils
Crée un fichier .env pour les clés Firebase et Email.js.

Pense à utiliser Firebase Hosting si tu veux publier ton site facilement.