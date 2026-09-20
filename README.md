# Portfolio — Khalil Zaatari

Portfolio personnel de **Khalil Zaatari** — Développeur Full Stack & Data Science.
Construit avec **Next.js 15** (App Router), **TypeScript** et **Tailwind CSS v4**.

## ✨ Aperçu

Site vitrine d'une seule page, responsive, en français, avec :

- Section hero avec accroche et liens (email, GitHub, LinkedIn, CV)
- À propos
- Compétences regroupées (Frontend, Backend, Data Science, Big Data…)
- Projets en production (Capitol.ma, Horkos WM)
- Parcours (expérience, formation, certifications)
- Contact (liens directs)
- Animations d'apparition au scroll, thème clair minimaliste

## 🚀 Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# 3. Build de production
npm run build
npm run start
```

Prérequis : **Node.js 18.18+** (recommandé : Node 20 ou 22).

## ✏️ Modifier le contenu

Tout le contenu (profil, compétences, projets, expériences, certifications)
est centralisé dans un seul fichier :

```
src/data/content.ts
```

Modifie les valeurs, sauvegarde, et le site se met à jour. Aucun composant à
toucher pour changer un texte, un projet ou un lien.

### Remplacer les CV

Les fichiers PDF sont dans `public/` :

```
public/cv-fullstack.pdf
public/cv-datascience.pdf
```

Remplace-les par tes versions à jour (garde les mêmes noms), ou change les
chemins `cvFullStack` / `cvDataScience` dans `src/data/content.ts`.

## 🌐 Déploiement + URL propre

### Option recommandée — Vercel (créateurs de Next.js)

1. Pousse ce dossier sur un dépôt GitHub :

   ```bash
   git init
   git add .
   git commit -m "Initial commit — portfolio"
   git branch -M main
   git remote add origin https://github.com/khalilzaatari-666/portfolio.git
   git push -u origin main
   ```

2. Va sur [vercel.com](https://vercel.com) → **Add New… → Project** →
   importe le dépôt. Vercel détecte Next.js automatiquement : clique
   **Deploy**. Rien à configurer.

3. **Nom de domaine propre** : dans le projet Vercel →
   **Settings → Domains → Add**. Tu peux :
   - utiliser le sous-domaine gratuit `khalil-zaatari.vercel.app`, ou
   - brancher ton propre domaine (ex. `khalilzaatari.com`). Vercel te donne
     les enregistrements DNS (A / CNAME) à ajouter chez ton registrar
     (Namecheap, Cloudflare, GoDaddy…). Le HTTPS est automatique.

   > 💡 Si tu utilises Cloudflare comme DNS (tu connais déjà), ajoute un
   > enregistrement `CNAME` `@`/`www` vers la cible fournie par Vercel,
   > en mode « DNS only » (nuage gris).

### Alternatives

- **Cloudflare Pages** : build command `npm run build`, framework preset
  « Next.js ». Domaine personnalisé inclus.
- **Netlify** : détection automatique Next.js, ajoute ton domaine dans
  *Domain settings*.

## 🔧 Personnalisation du design

- Couleurs, polices et espacements : variables CSS en haut de
  `src/app/globals.css` (bloc `@theme`). Change `--color-accent` pour
  changer la couleur principale.
- Métadonnées SEO / Open Graph : `src/app/layout.tsx` (pense à mettre à jour
  `siteUrl` avec ton vrai domaine).

## 🗂️ Structure

```
src/
├─ app/
│  ├─ layout.tsx      # <html>, métadonnées SEO, polices
│  ├─ page.tsx        # assemble les sections
│  ├─ globals.css     # thème + styles de base
│  └─ icon.svg        # favicon (monogramme)
├─ components/        # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
└─ data/
   └─ content.ts      # ← tout le contenu ici
```

---

Fait avec Next.js. Bon déploiement 🚀
