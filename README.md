# Pokématos

Pokématos est un prototype de bot Discord, ayant pour but de faciliter les parties de jeu de rôle dans l'univers Pokémon. Il incorpore plusieurs commandes pratiques permettant de gérer vos Pokémon.  
Il est donc possible d'ajouter des Pokémon à votre équipe ou votre PC. Les Pokémon ajoutés possèdent un niveau et des PVs, qui peuvent être modifiés avec des commandes. Les PVs sont automatiquement calculés à partir de la statistique de base du Pokémon (récupérée depuis [Poképedia](https://www.pokepedia.fr/)). Pour être ajouté, le nom du Pokémon doit donc être correctement orthographié en français.
D'autres fonctionnalités facilitant l'utilisation sont également disponibles.  

Ce bot étant un prototype, je n'ai pas l'intention de l'héberger ou de continuer à le développer. 


## Commandes

- ```&help``` pour avoir des détails sur l'utilisation des commandes.

- ```&add```, ```&remove``` pour ajouter au supprimer des Pokémon.

- ```&send```, ```&retrieve``` pour transférer des Pokémon entre l'équipe et le PC.

- ```&hit```, ```&heal``` pour gérer les PVs de vos Pokémon. 

- et bien d'autres à découvrir !


## Guide d'installation

### Prérequis

Pour le bon fonctionnement de ce projet, il est indispensable d'avoir réalisé les étapes suivantes :

1. Installer Node.js v18 ou supérieur.
2. Créer une application sur le [portail développeur Discord](https://discord.com/developers/).
3. Ajouter un fichier `config.js` à la racine du projet. Celui-ci doit contenir le jeton de l'application Discord et le préfixe utilisé par le bot.  
  
Corps du fichier `config.js` :
```js
exports.TOKEN = "...";
exports.PREFIX = "&";
```

### Installation

Après avoir mis en place les prérequis, il est nécessaire de suivre chacune de ces étapes :

1. Cloner le projet,  
```git clone https://github.com/mmeyrat/Pokematos.git```
2. Ajouter le fichier `config.js` à la racine du projet.
3. Installer les dépendances,  
```npm install```
4. Exécuter le projet,  
```npm run start```

----

Maxime Meyrat