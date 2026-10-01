---
title: 'Stage Technicien - ADTP'
description: 'Travail au pôle technique pour adapter les postes de travail des employés en situation de handicap (STM32, LoRaWAN, YOLOV5)'
thumbnail: "/images/logo_adtp.png" 
category: 'Web App'
tech: ['Astro', 'Pagefind', 'MDX']
year: 2026
role: 'Design & Frontend'
client: 'Atlas'
url: 'https://example.com'
order: 1
---

## Sujet du stage

Lors de ce stage technicien, j'ai été assistant d'un ingénieur en systèmes embarqués au sein du pôle technique de l'entreprise ADTP. Entreprise adaptée et ESAT en Haute-Savoie, l’ADTP allie sous-traitance industrielle et insertion professionnelle. Au sein du pôle technique, dédié au développement de systèmes électroniques et machines sur mesure pour adapter les postes de travail, mes missions ont porté sur :
- Verrines connectées : le déploiement d'un système permettant aux opérateurs sur les lignes de production d’indiquer de manière simple et discrète un besoin de réapprovisionnement de pièces ou un problème technique.
- Poste intelligent : dédié au conditionnement de quincaillerie pour la marque Schneider Electric, ce poste utilise la vision par ordinateur associée à un réseau de neurones de type YOLO pour vérifier la présence et la conformité des pièces dans un sachet.

## Réalisations

**Verrines connectées**
<div class="my-6 flex flex-col items-center gap-6 md:flex-row md:items-start">
  <div class="flex-1">
    <p>
      - Architecture IoT : boîtiers STM32WL basse consommation communicant en LoRaWAN et pilotant des verrines LED NeoPixel<br /><br />
      - Résolution CEM : diagnostic de perturbations induites par les machines et développement d'un filtrage logiciel<br /><br />
      - Passerelle autonome : centralisation des requêtes sur Raspberry Pi 4 (Raspberry Pi OS Lite, Node-RED, MQTT)<br /><br />
      - Conception : modélisation CAO sous TopSolid, impression 3D, câblage complet<br /><br />
    </p>
  </div>
  <img 
    src="/images/adtp/verrine.jpg" 
    alt="Module verrine connectée" 
    class="w-full md:w-[320px] shrink-0 rounded-lg border border-neutral-700/80 object-cover" 
  />
</div>

**Poste intelligent**
<div class="my-6 flex flex-col items-center gap-6 md:flex-row md:items-start">
  <img 
    src="/images/adtp/poste_intelligent.png" 
    alt="Poste intelligent de conditionnement" 
    class="w-full md:w-[400px] shrink-0 rounded-lg border border-neutral-700/80 object-cover" 
  />
  <div class="flex-1">
    <p>
      - Vision par ordinateur & YOLOv5 : fiabilisation de la détection et classification en temps réel de pièces de quincaillerie pour supprimer l'étape de pesée<br /><br />
      - Gestion du jeu de données (CVAT) : scripts Python de prétraitement et correction d'annotations massives des <em>bounding boxes</em><br /><br />
      - Optimisation des hyperparamètres : calibration du taux d'apprentissage pour corriger les faux positifs causés par la distorsion optique<br /><br />
      - Validation industrielle : validation sur banc d'essai et déploiement opérationnel des fichiers de poids<br /><br />
    </p>
  </div>
</div>

## Compétences développées

- **Systèmes embarqués & IoT** : programmation STM32WL, protocoles LoRaWAN et MQTT, traitement CEM en environnement atelier.
- **Vision par ordinateur** : annotation sous CVAT, scripts de prétraitement Python, calibration d'hyperparamètres et modèles YOLOv5.
- **Prototypage & Fabrication** : CAO sous TopSolid, impression 3D, câblage et intégration matérielle.
- **Linux embarqué** : configuration Raspberry Pi OS Lite et automatisation de flux sous Node-RED.
