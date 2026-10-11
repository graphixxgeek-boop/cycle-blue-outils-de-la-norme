// seuils.eslint.mjs — les règles 1 et 20 de la norme de dépôt, lues par eslint
// Règle 20 : le jeu recommandé d'eslint, sur tout le code (.mjs et .js). Règle 1 : les seuils de taille et
// de complexité ; les filets et les tests en sont exemptés (la règle 3 les découpe déjà en parts), comme la
// copie du socle qu'un module autonome embarque (elle est mesurée dans le dépôt du socle). Un .js peut
// tourner dans un navigateur ou sous Node : il reçoit les noms des deux. Ce fichier ne s'appelle pas
// eslint.config.mjs, pour qu'un dépôt qui l'héberge ne le prenne pas pour le sien.
import js from "@eslint/js";
import globals from "globals";
import sonarjs from "eslint-plugin-sonarjs";

export const FICHIERS_MESURES = ["**/*.mjs", "**/*.js"];
export const IGNORES = ["**/node_modules/**", "**/socle/local/**", "**/sortie/**"];
const EXEMPTES_DES_SEUILS = ["**/check-socle.mjs", "**/check-module.mjs", "**/tests/**", "**/*.test.mjs", "**/*.test.js"];

export default [
  { ignores: IGNORES },
  {
    ...js.configs.recommended,
    files: ["**/*.mjs"],
    languageOptions: { ecmaVersion: 2024, sourceType: "module", globals: globals.node },
  },
  {
    ...js.configs.recommended,
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2024, sourceType: "module", globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: FICHIERS_MESURES,
    ignores: EXEMPTES_DES_SEUILS,
    plugins: { sonarjs },
    rules: {
      "max-lines": ["error", { max: 300, skipBlankLines: true, skipComments: true }],
      "max-lines-per-function": ["error", { max: 50, skipBlankLines: true, skipComments: true }],
      complexity: ["error", 20],
      "max-depth": ["error", 4],
      "sonarjs/cognitive-complexity": ["error", 15],
    },
  },
];
