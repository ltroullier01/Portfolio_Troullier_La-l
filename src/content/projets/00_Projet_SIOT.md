---
title: 'Robot d''exploration'
description: 'Développement d''un robot holonome pour de la cartographie autonome'
pubDate: 2027-01-22
author: 'Troullier Laël'
image: "/images/projets/robot.jpeg" 
---
Projet de 5ème année se déroulant de septembre 2026 à janvier 2027.

## Objectif du projet :
Le projet porte sur le développement et l'autonomie d'un robot d'exploration holonome à roues Mecanum, articulé autour du middleware ROS 2 sur plateforme Raspberry Pi. L'axe central de travail réside dans la localisation précise du robot par fusion de capteurs, reposant sur un filtre de Kalman étendu. Face aux glissements mécaniques inhérents à la cinématique omnidirectionnelle, l'enjeu consiste à combiner les données angulaires et d'accélération d'une centrale inertielle IMU avec les mesures de distance d'un LiDAR 2D, afin de produire une odométrie robuste capable d'alimenter un algorithme de cartographie et de navigation autonome.
Une fois la cartographie établie, un modèle d'intelligence artificielle analysera la carte générée afin d'identifier et classifier automatiquement les obstacles présents dans la pièce.

<img 
  src="/images/projets/robot.jpeg" 
  alt="Projet Auto-coach" 
  class="block mx-auto w-full md:w-[300px] rounded-lg border border-neutral-700/80 object-cover my-6" 
/>

## Domaines d'apprentissage visés :
- **Architecture logicielle robotique (ROS 2)** : conception de nœuds en Python/C++, gestion des flux de données via des topics
- **Fusion de capteurs** : mise en œuvre d'algorithmes de fusion multi-sources 
- **Navigation autonome** : traitement de nuages de points LiDAR, implémentation de boucles d'évitement d'obstacles temps réel et déploiement de solutions de SLAM 2D
- **Reconnaissance d'environnement** : exploitation de la carte issue du SLAM par un modèle d'IA pour la détection et la classification des obstacles.
