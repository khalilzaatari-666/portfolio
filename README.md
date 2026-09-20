# khalilzaatari.com

Mon portfolio. Une seule page, en français, où je présente ce que je fais :
du développement full stack (React / Next.js / Node) et de la data science.

Stack : Next.js 15 (App Router), TypeScript, Tailwind CSS v4. Pas de CMS,
pas de librairie d'animation, pas de dépendance superflue — tout le contenu
vit dans un fichier TypeScript et le reste est du CSS.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` puis `npm run start` pour tester la version de production.
Node 20 ou 22 recommandé.

## Où modifier quoi

| Je veux…                               | Fichier                                    |
| -------------------------------------- | ------------------------------------------ |
| changer un texte, un projet, une expé  | `src/data/content.ts`                      |
| remplacer un CV                        | `public/cv-fullstack.pdf`, `public/cv-datascience.pdf` |
| changer mon portrait / une capture     | `public/images/` + le chemin dans `content.ts` |
| toucher aux couleurs ou aux polices    | bloc `@theme` en haut de `src/app/globals.css` |
| modifier le SEO / Open Graph           | `src/app/layout.tsx`, `src/app/opengraph-image.tsx` |
| changer le numéro WhatsApp             | `src/components/WhatsappButton.tsx`        |

Les composants dans `src/components/` sont volontairement bêtes : ils lisent
`content.ts` et affichent. Ajouter un projet = ajouter un objet dans le tableau
`projects`, la numérotation des figures suit toute seule.

## Design

Je voulais éviter le look "template SaaS". Le parti pris est celui d'un cahier
d'ingénieur : fond papier, un serif pour les titres (Instrument Serif), un mono
pour les étiquettes (Geist Mono), des filets fins, des sections numérotées et
une seule couleur d'accent. Un léger grain SVG est posé sur toute la page.

Quelques détails que j'aime bien :

- le thème sombre suit le système, avec un bouton pour forcer l'un ou l'autre
  (stocké en `localStorage`, appliqué avant le premier rendu pour éviter le flash) ;
- l'heure locale d'Agadir dans le hero et le footer ;
- les captures des projets sont servies telles quelles (`unoptimized`) pour que
  le texte reste net ;
- l'image Open Graph est générée au build avec la même police que le site ;
- tout respecte `prefers-reduced-motion`.

## Déploiement

Le site est déployé sur Vercel depuis ce dépôt. Chaque push sur `main`
redéploie. Le domaine est branché via Cloudflare (CNAME, mode « DNS only »).

Si tu forkes ce dépôt pour faire ton propre portfolio : change `siteUrl` dans
`src/app/layout.tsx`, remplace `content.ts`, les images et les CV, et c'est
tout.
