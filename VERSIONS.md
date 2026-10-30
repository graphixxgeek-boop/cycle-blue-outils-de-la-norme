# Cycle Blue — versions · les versions

## What's new · Ce qui a changé, version par version

**EN** — One line per standalone module of Cycle Blue: its current version, and what it does for you, in plain words.
The full detail of a version is in the `CHANGELOG.md` file inside the module's folder, in your project (for example
`cycle-blue/modules-federation/cycletasks/CHANGELOG.md` for CYCLETASKS), under the heading of that version. The
modules' `status` command prints this page's address; it never opens the page on its own.

**FR** — Une ligne par module autonome de Cycle Blue : sa version actuelle, et ce qu'il fait pour vous, en mots simples.
Le détail d'une version est dans le fichier `CHANGELOG.md` du dossier du module autonome, dans votre projet (par exemple
`cycle-blue/modules-federation/cycletasks/CHANGELOG.md` pour CYCLETASKS), sous le titre de cette version. La commande
`status` des modules autonomes affiche l'adresse de cette page ; elle ne l'ouvre jamais d'elle-même.

**EN** — Updates included for 12 months after purchase. After that, the version you have keeps working as it is.
A withdrawn version keeps its line, with the date and the reason in its last column (for example « 2026-11-02: deletes the settings »). · **FR** — Mises à jour incluses 12 mois après
l'achat. Après, la version que vous avez continue de marcher telle quelle. Une version retirée garde sa ligne, avec la
date et la raison dans sa dernière colonne (par exemple « 2026-11-02 : efface les réglages »).

| Standalone module · Module autonome | Version | Date | What it does · Ce qu'il fait | Withdrawn on, and why · Retirée le, et pourquoi |
|---|---|---|---|---|
| CYCLETASKS : Le Carnet | 1.0.0 | 2026-10-13 | It keeps the project's task list: it writes each task in the right format, refuses what is badly written, tells you where you stand and files away what is finished. · Il tient la liste des tâches du projet : il écrit chaque tâche au bon format, refuse ce qui est mal écrit, dit où vous en êtes et range à part ce qui est fini. | — |
| CYCLEARCHIVES : Ce que le projet sait déjà | 1.0.0 | 2026-10-15 | You no longer ask again what is already settled: it searches a topic in the project's notes (documents, decisions, code comments, git messages) and says where it was already handled, with the quoted line. · Vous ne redemandez plus ce qui est déjà tranché : il cherche un sujet dans les notes du projet (documents, décisions, commentaires du code, messages de git) et dit où il a déjà été traité, avec la ligne citée. | — |
| CYCLEKING : La Vision | 1.1.0 | 2026-10-16 | It shows what the project has already written, runs a 10-question session that writes VISION.md (where the project is going), then checks that the project keeps to it. · Il montre ce que le projet a déjà écrit, mène une séance en 10 questions qui écrit VISION.md (où va le projet), puis vérifie que le projet s'y tient. | — |
| CYCLEPROPHETS : Les Prophètes du Temps | 1.3.0 | 2026-10-15 | Six checks, one command each: the tests, the written rules, the instructions file for an AI, the overall report, the cost of an AI action, the project's size. · Six vérifications, une commande chacune : les tests, les règles écrites, le fichier de consignes pour une IA, le rapport d'ensemble, le coût d'une action d'IA, la taille du projet. | — |
| CYCLESTRATEGY : Les Stratégies | 1.1.0 | 2026-10-15 | It links each strategy to the part of your vision it comes from, and down to the tasks it announces; if CYCLETASKS is installed, it checks those tasks with it. · Il relie chaque stratégie à la partie de votre vision dont elle vient, et jusqu'aux tâches qu'elle annonce ; si CYCLETASKS est installé, il vérifie ces tâches auprès de lui. | — |
| CYCLECARLA : L'Expérience Client | 1.0.0 | 2026-10-17 | It checks the tone of your texts, and measures how hard it is for a newcomer to get your tool working. · Il vérifie le ton de vos textes, et mesure ce qu'il en coûte à un nouveau venu de faire marcher votre outil. | — |
| CYCLEADAM : Le Nom des Choses | 1.0.0 | 2026-10-23 | It prepares a rename by sorting each place where the old name appears, checks what is left afterwards, and remembers who named what. · Il prépare un renommage en triant chaque endroit où l'ancien nom apparaît, vérifie ce qui en reste après, et se souvient de qui a nommé quoi. | — |
| CYCLEHARMONY : L'Harmonie et la Cohérence | 1.1.3 | 2026-10-30 | It compares each fact your project states with the place where that fact is really written. · Il confronte chaque fait que votre projet déclare à l'endroit où ce fait est vraiment écrit. | — |
| CYCLEANGELS : La Qualité du Code | 1.0.111 | 2026-10-30 | It measures the quality of a project's code and the strength of its tests, then gives a report with an action plan. · Il mesure la qualité du code d'un projet et la solidité de ses tests, puis rend un rapport avec un plan d'action. | — |

## To check a version (for coders) · Pour vérifier une version (codeurs)

**EN** — A signed version carries a signature made with Cycle Blue's key. Only Cycle Blue holds the private part of
that key; its public part, below, lets anyone check that a version really comes from Cycle Blue and was not changed
since. To check a module you installed, run its `check` command, for example
`node cycle-blue/modules-federation/cycletasks/index.mjs check`. If the version is signed, a line « Version signed by
Cycle Blue (key …) » gives the short name of the key. That key must be listed below, and not withdrawn.

**FR** — Une version signée porte une signature faite avec la clé de Cycle Blue. Seul Cycle Blue détient la partie
privée de cette clé ; sa partie publique, ci-dessous, permet à chacun de vérifier qu'une version vient bien de Cycle
Blue et n'a pas été modifiée depuis. Pour vérifier un module autonome installé, lancez sa commande `check`, par exemple
`node cycle-blue/modules-federation/cycletasks/index.mjs check`. Si la version est signée, une ligne « Version signée
par Cycle Blue (clé …) » donne le nom court de la clé. Cette clé doit être listée ci-dessous, et pas retirée.

**EN** — None of the versions above is signed: the signature will come with their next versions, which will be added
to the table below. Until then, `check` says the signature will arrive with a next version. · **FR** — Aucune des
versions ci-dessus n'est signée : la signature viendra avec leurs prochaines versions, qui s'ajouteront au tableau
ci-dessous. D'ici là, `check` dit que la signature de Cycle Blue arrivera avec une prochaine version.

### Signing keys · Clés de signature

The short name of a key is computed from its public part (the first 16 characters of its SHA-256 fingerprint), so
anyone can recompute it. · Le nom court d'une clé est calculé à partir de sa partie publique (les 16 premiers signes de
son empreinte SHA-256) : chacun peut le recalculer.

| Key · Clé | Public key · Clé publique | In use since · Depuis | Withdrawn on · Retirée le |
|---|---|---|---|
| 9e3a6f56aab6cdf4 | `MCowBQYDK2VwAyEAGXUrBEZ7G0PWTJwrVKxdgfQHt+qdepGbcp+9z7XpJ2g=` | 2026-10-24 | — |

### Signed versions · Versions signées

The package is the module's folder as it is delivered; its fingerprint changes if a single file in it changes. · Le
colis est le dossier du module autonome tel qu'il est livré ; son empreinte change si un seul de ses fichiers change.

| Standalone module · Module autonome | Version | Package fingerprint · Empreinte du colis | Key · Clé |
|---|---|---|---|

None yet. · Aucune pour l'instant.
