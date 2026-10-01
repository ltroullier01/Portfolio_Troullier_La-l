---
title: 'Maison autonome en énergie'
description: 'Chef de projet pour la réalisation de l’installation électrique d’une maison autonome en énergie'
pubDate: 2026-06-01
author: 'Troullier Laël'
image: "/images/projets/Photo_de_groupe.jpeg"
---

En tant que chef de projet d’une équipe de 10 élèves-ingénieurs structurée en 3 pôles (Alimentation, Distribution, Monitoring), j'ai coordonné le développement complet d'un micro-réseau électrique basse tension (bus 48 Vdc) alimenté par éolienne pour une habitation autonome en énergie. Sur le plan technique, j'ai notamment pris en charge la carte relais centrale, véritable nœud du système : conception et routage du PCB distribuant la puissance vers toutes les charges (réfrigérateur, éclairage 24 V, cuisson 450 W, prises USB-B/USB-C), intégration des relais de commutation 16 A pour la stratégie de délestage autonome, connecteurs bord de carte pour cartes capteurs modulaires, et nœud de communication bus CAN piloté par microcontrôleur PIC.

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/images/projets/maquette.jpeg" 
    alt="Description première image" 
    class="w-full aspect-[3/4] rounded-lg border border-neutral-700/80 object-cover" 
  />
  <img 
    src="/images/projets/PCB.jpeg" 
    alt="Description seconde image" 
    class="w-full aspect-[3/4] rounded-lg border border-neutral-700/80 object-cover" 
  />
</div>

## Compétences développées :

- **Management de projet** : Pilotage d'une équipe pluridisciplinaire de 10 personnes, gestion du planning global, animation des revues de conception inter-groupes, définition des matrices d'interfaces et coordination de l'intégration globale sur banc de test.   
- **Conception de circuits imprimés** : Dimensionnement et routage sous Proteus d'une carte centrale intégrant de forts courants.   
- **Électronique embarquée** : Implémentation d'un nœud CAN avec microcontrôleur PIC18F et transceiver MCP2561 pour la commande temps réel des relais et la remontée de mesures vers le superviseur central.
