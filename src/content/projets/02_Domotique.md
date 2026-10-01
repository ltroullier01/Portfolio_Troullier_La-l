---
title: 'Chambre connectée'
description: 'Domotisation de ma chambre '
pubDate: 2026-08-01
author: 'Laël Troullier'
image: "/images/projets/Logo.png"
---

Conception et déploiement d'une infrastructure IoT complète dédiée au monitoring environnemental (qualité de l'air, CO2, humidité, températures, luminosité) et à la gestion d'automatismes domestiques. Le système repose sur un nœud d'acquisition à base d'ESP32 transmettant les flux de télémétrie via le protocole léger MQTT vers une passerelle locale sous Raspberry Pi. Le middleware événementiel sous Node-RED assure le parsing des trames, le routage logique et la persistance des séries temporelles dans une base de données relationnelle SQLite. L'exploitation et l'analyse des données sont centralisées sur une application Android développée de A à Z pour accéder aux informations de n'importe où.
Cette installation permet de :
- Piloter le volet électrique (manuellement ou automatiquement)
- Gérer l'éclairage d'un bandeau LED
- Accéder au flux vidéo d'une caméra de surveillance de la chambre
- Suivre l'évolution de la température, de la qualité de l'air et de la luminosité dans la chambre

## Structure de l'installation
- **Acquisition des données** : ESP32, capteurs environnementaux (CO2, température, humidité)
- **Protocoles & Communication** : MQTT, requêtes HTTP
- **Traitement & Middleware** : Raspberry Pi, Node-RED
- **Stockage de données** : Base de données SQLite locale

<img 
  src="/images/projets/rpi.jpeg" 
  alt="Projet Auto-coach" 
  class="block mx-auto w-full md:w-[300px] rounded-lg border border-neutral-700/80 object-cover my-6" 
/>

## Application Android
L'application communique en MQTT avec des nœuds microcontrôleurs (ESP32) et une passerelle centrale (Raspberry Pi). Elle intègre l'ouverture automatique d'un tunnel WireGuard au lancement pour garantir un accès distant sécurisé aux équipements.
<div class="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
  <img 
    src="/images/projets/screen_1.jpeg" 
    alt="Capture d'écran 1" 
    class="w-full aspect-[9/16] rounded-xl border border-neutral-700/80 object-cover shadow-sm" 
  />
  <img 
    src="/images/projets/screen_2.jpeg" 
    alt="Capture d'écran 2" 
    class="w-full aspect-[9/16] rounded-xl border border-neutral-700/80 object-cover shadow-sm" 
  />
  <img 
    src="/images/projets/screen_3.jpeg" 
    alt="Capture d'écran 3" 
    class="w-full aspect-[9/16] rounded-xl border border-neutral-700/80 object-cover shadow-sm" 
  />
</div>

## Compétences développées

- **IoT & embarqué** : acquisition sur microcontrôleur (ESP32) et transmission via MQTT
- **Administration Linux** : déploiement sur Raspberry Pi OS, gestion des droits/fichiers et supervision bas niveau
- **Middleware (Node-RED)** : orchestration de flux événementiels, assainissement de données JSON et logique d'alerte anti-rebond.
- **Bases de données (SQLite)** : modélisation pour séries temporelles, requêtes SQL
- **Développement mobile** : conception d'une application Android native en Kotlin, intégration du protocole MQTT, sécurisation des flux via un tunnel VPN WireGuard automatisé