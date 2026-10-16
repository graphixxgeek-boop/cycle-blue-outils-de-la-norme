# Cycle Blue — versions · les versions

**EN** — Every published version of a Cycle Blue standalone module, with the fingerprint of what you received and the
key that signed it. Nothing on your side ever reads this page by itself: `status` only prints its address, and you
open it if you want to. To check a module you installed, run `node <module>/index.mjs check`: its line « Version
signed by Cycle Blue (key …) » gives a key identifier. That key must be listed below, and not withdrawn; the version
and date must match a line of the table.

**FR** — Chaque version publiée d'un module autonome Cycle Blue, avec l'empreinte de ce que vous avez reçu et la clé
qui l'a signée. Rien chez vous ne lit cette page tout seul : `status` affiche seulement son adresse, et vous l'ouvrez
si vous le voulez. Pour vérifier un module autonome installé, lancez `node <module>/index.mjs check` : sa ligne
« Version signée par Cycle Blue (clé …) » donne un identifiant de clé. Cette clé doit être listée ci-dessous, et pas
retirée ; la version et la date doivent correspondre à une ligne du tableau.

## Signing keys · Clés de signature

A key identifier is the first 16 characters of the SHA-256 of the public key. A key that a version names but that is
not listed here proves nothing. · L'identifiant d'une clé est fait des 16 premiers signes du SHA-256 de la clé
publique. Une clé qu'une version nomme et qui n'est pas listée ici ne prouve rien.

| Key · Clé | Public key (DER spki, base64) · Clé publique | In use since · Depuis | Withdrawn on · Retirée le |
|---|---|---|---|

No key yet: the first one will be published here before the first signed version. · Pas encore de clé : la première
sera publiée ici avant la première version signée.

## Versions

| Standalone module · Module autonome | Version | Date | Package fingerprint · Empreinte du colis | Key · Clé |
|---|---|---|---|---|

No version published yet. · Aucune version publiée pour l'instant.

---

This page lives only in this repository; it is not part of the mirrored tool. Its address never changes. · Cette page
ne vit que dans ce dépôt ; elle ne fait pas partie de l'outil reflété. Son adresse ne change jamais.
