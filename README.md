# Tooltip

Projet contenant un composant tooltip employé pour apporter des informations complémentaires à des éléments en fonction du contexte.
Cela a pour objectif d'éviter de surcharger l'interface et de rendre l'UX plus agréable aux utilisateurs.

Stack : React via create-react-app + css

## Version en ligne du site
Une version démo est visible en ligne à cette adresse :

**[Tooltip-démo](https://technical-test-tooltip-azk896n2e-ysouane.vercel.app/)**

## Installation du projet
Cloner ou télécharger le répo, ensuite via le terminal entrer la commande suivante à partir de la racine du dossier du projet : 

```
npm install
```

## Lancement du site

Via le terminal entrer la commande suivante a la racine du dossier du projet : 

```
npm start
```

## Fonctionnement du composant Tooltip
1 . Importer le composant :

```js
import Tooltip from "./components/Tooltip";
```

2 - Wrapper l'élément avec Tooltip :
```js
<Tooltip content="Exemple@gmail.com" position="left" isActive>
  <InputForm content="Email" inputType="email" />
</Tooltip>
```
    
## Options
A savoir :
* Les options suivantes ne sont pas obligatoires : `minWidth` `minHeight` `maxWidth` `maxHeight` `wrap`

| Options   | Type    | Values                   | Description                                           | Requis |
|-----------|---------|--------------------------|-------------------------------------------------------|--------|
| isActive  | booléan | true, false              | Permet d'afficher ou non l'infos bulle                | Oui    |
| content   | string  | "Exemple@test.fr"        | Permet d'afficher un texte dans l'infos bulle         | Oui    |
| position  | string  | top, right, bottom, left | Permet de choisir l'emplacement de l'infos bulle      | Oui    |
| wrap      | booléan | true, false              | Permet de wrapper le contenu de l'infos bulle         | Non    |
| minWidth  | string  | "100px"                  | Permet de choisir une largeur minimal à l'infos bulle | Non    |
| minHeight | string  | "100px"                  | Permet de choisir une hauteur minimal à l'infos bulle | Non    |
| maxWidth  | string  | "100px"                  | Permet de choisir une largeur maximal à l'infos bulle | Non    |
| maxHeight | string  | "100px"                  | Permet de choisir une hauteur maximal à l'infos bulle | Non    |
