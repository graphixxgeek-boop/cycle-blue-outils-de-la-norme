// seuils.mjs — mesure les règles 1 et 20 de la norme de dépôt sur un dossier, et dit ce qu'il a mesuré
// Usage : node seuils.mjs [dossier]   (ou `npm run seuils -- <dossier>`). Impose toujours seuils.eslint.mjs :
// sinon eslint prend le fichier de réglages le plus proche du code mesuré, sans prévenir. Lancé depuis le
// dossier mesuré, parce qu'eslint ignore les fichiers situés hors de son dossier de travail. Zéro fichier
// mesuré rend PAS MESURÉ, jamais un vert : un silence ne prouve rien.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ICI = dirname(fileURLToPath(import.meta.url));
const EXTENSIONS = [".mjs", ".js"];
const DOSSIERS_IGNORES = ["node_modules", "sortie", ".git"];

export function commandeDesSeuils(dossier = ".") {
  return {
    executable: join(ICI, "node_modules", ".bin", "eslint"),
    args: ["--no-warn-ignored", "--no-config-lookup", "-c", join(ICI, "seuils.eslint.mjs"), "."],
    cwd: resolve(dossier),
  };
}

// Les fichiers que la mesure va lire, pour pouvoir dire combien, et refuser de conclure sur zéro.
export function fichiersMesurables(dossier) {
  const trouves = [];
  const parcourir = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const chemin = join(d, e.name);
      if (e.isDirectory()) {
        if (!DOSSIERS_IGNORES.includes(e.name) && !relative(dossier, chemin).endsWith(join("socle", "local"))) parcourir(chemin);
      } else if (EXTENSIONS.some((x) => e.name.endsWith(x))) trouves.push(relative(dossier, chemin));
    }
  };
  parcourir(resolve(dossier));
  return trouves;
}

export function verdict(nombre, statut) {
  if (nombre === 0) return { code: 2, texte: "PAS MESURÉ — aucun fichier .mjs ou .js dans ce dossier : rien n'a été lu, ce n'est pas un vert." };
  if (statut === 0) return { code: 0, texte: `${nombre} fichier(s) mesuré(s), aucun écart aux règles 1 et 20.` };
  return { code: 1, texte: `${nombre} fichier(s) mesuré(s) : écarts ci-dessus.` };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const c = commandeDesSeuils(process.argv[2] ?? ".");
  if (!existsSync(c.executable)) {
    console.error(`PAS MESURÉ — eslint n'est pas installé : lancez \`npm ci\` dans ${ICI} (outil du fabricant, jamais chez le client).`);
    process.exit(2);
  }
  const nombre = fichiersMesurables(c.cwd).length;
  const r = nombre ? spawnSync(c.executable, c.args, { cwd: c.cwd, stdio: "inherit" }) : { status: 0 };
  const v = verdict(nombre, r.status);
  (v.code ? console.error : console.log)(v.texte);
  process.exit(v.code);
}
