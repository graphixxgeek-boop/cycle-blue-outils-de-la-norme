# Outils de la norme — public mirror · reflet public

**EN** — Measures rules 1 and 20 of Cycle Blue's repository norm (size and complexity thresholds, eslint recommended set) on any folder. This repository is a read-only mirror: the source lives in Cycle Blue, `normes/outils-de-la-norme/`. It exists so that the CI of the modules autonomes can fetch the tool without a token. Never shipped to a client.

```sh
npm ci
node seuils.mjs <folder>
```

**FR** — Mesure les règles 1 et 20 de la norme de dépôt de Cycle Blue (seuils de taille et de complexité, jeu recommandé d'eslint) sur n'importe quel dossier. Ce dépôt est un reflet en lecture seule : la source vit dans Cycle Blue, `normes/outils-de-la-norme/`. Il existe pour que la CI des modules autonomes puisse prendre l'outil sans jeton. Jamais livré au client.
