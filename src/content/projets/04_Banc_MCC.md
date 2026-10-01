---
title: 'Banc d’asservissement d’une MCC'
description: 'Projet académique de 3ème année'
pubDate: 2025-12-20
author: 'Troullier Laël'
image: "/images/projets/MCC.png"
---

Conception, modélisation et réalisation matérielle complète d'une carte de commande analogique dédiée à l'asservissement en cascade d'une machine à courant continu entraînant une charge (boucle interne de courant et boucle externe de vitesse). Après une modélisation théorique et une validation croisée sous MATLAB/Simulink et PSIM, notre équipe a dimensionné les composants discrets (AOP, filtres, correcteurs PI, limiteur de tension à diodes, conditionnement de capteurs), conçu et routé le PCB intégrant les composants CMS/traversants, puis modélisé un boîtier sur mesure. Les bancs d’essais finaux ont validé les performances réelles avec deux types de capteurs (dynamo tachymétrique et codeur incrémental), en respectant parfaitement le cahier des charges.

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/images/projets/MCC_1.jpeg" 
    alt="Description première image" 
    class="w-full aspect-[4/3] rounded-lg border border-neutral-700/80 object-cover" 
  />
  <img 
    src="/images/projets/MCC_2.jpeg" 
    alt="Description seconde image" 
    class="w-full aspect-[4/3] rounded-lg border border-neutral-700/80 object-cover" 
  />
</div>

## Compétences développées :

- **Automatique & Régulation** : Modélisation de systèmes dynamiques, conception de boucles d'asservissement en cascade et réglage de correcteurs PI selon des critères stricts de stabilité, temps de réponse et dépassement
- **Modélisation & Simulation** : Validation croisée systématique entre MATLAB/Simulink et PSIM
- **Électronique analogique**: Dimensionnement de circuits à amplificateurs opérationnels (soustracteurs, intégrateurs PI, suiveurs, écrêteurs à diodes/seuil réglable)   
- **Conception & Fabrication de circuits imprimés** : Routage de la carte de commande, assemblage et soudure   
- **Validation expérimentale** : Utilisation d'oscilloscopes numériques pour la mesure des régimes transitoires sur banc moteur/génératrice couplé et superposition fine entre mesures réelles et modèles simulés
- **Gestion de projet & Travail en équipe** : Planification globale des livrables via diagramme de Gantt, respect des jalons temporels et maîtrise des contraintes de coût
