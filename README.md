# Pokématos

Pokématos est un prototype de bot Discord, ayant pour but de faciliter les parties de jeu de rôle dans l'univers Pokémon. Il incorpore plusieurs commandes pratiques permettant de gérer vos Pokémon. 
Il est donc possible d'ajouter des Pokémon à votre équipe ou votre PC. Les Pokémon ajoutés possèdent un niveau et des PVs, qui peuvent être modifiés avec des commandes. Les PVs sont automatiquement calculés à partir de la statistique de base du Pokémon (récupérée depuis [Poképedia](https://www.pokepedia.fr/)). Pour être ajouté, le nom du Pokémon doit donc être correctement orthographié en français.
D'autres fonctionnalités facilitant l'utilisation sont également disponibles.  

Il est nécessaire d'ajouter un fichier `config.js`, à la racine du projet, qui doit contenir le jeton de l'application Discord et le préfixe pour les commandes.  

Ce bot étant un prototype, je n'ai pas l'intention de l'héberger ou de continuer à le développer. 

## Commandes

- ```&help``` pour avoir des détails sur l'utilisation des commandes.

- ```&add```, ```&remove``` pour ajouter au supprimer des Pokémon.

- ```&send```, ```&retrieve``` pour transférer des Pokémon entre l'équipe et le PC.

- ```&hit```, ```&heal``` pour gérer les PVs de vos Pokémon. 

- et bien d'autres à découvrir !
