import { MY_PROJECTS } from "@/constants/projects-constants";
import { SKILL_CHIPS, SKILL_GROUPS } from "@/constants/skills-constants";
import { FOCUS_AREAS } from "@/constants/focus-constants";
import { type SiteContent } from "@/types/i18n-types";
import { type Project } from "@/types/portfolio-types";

/**
 * French site. Facts must stay identical to the English constants: only
 * the wording changes. Media paths, tags and accents are reused from the
 * English objects, so a new clip only needs adding in one place.
 */

const [MIRMI, REMAIN, RL, PFR] = MY_PROJECTS;

/** Technical terms that get a French name in tags and skill lists. */
const TERMS: Record<string, string> = {
  "Control barrier functions": "Fonctions barrières de contrôle",
  "Hand-eye calibration": "Calibration main-œil",
  "Reinforcement learning (PPO, DQN)": "Apprentissage par renforcement (PPO, DQN)",
  "Deep learning": "Apprentissage profond",
  Kinematics: "Cinématique",
  Assembly: "Assembleur",
  "Robot learning": "Apprentissage robotique",
  Robotics: "Robotique",
  Hardware: "Matériel",
  Programming: "Programmation",
  Tools: "Outils",
  "CAN bus": "Bus CAN",
};

const term = (text: string) => TERMS[text] ?? text;

const projects: Project[] = [
  {
    ...MIRMI,
    title: "Perception active pour la manipulation à deux bras",
    category: "Stage de recherche · MIRMI, TU Munich",
    period: "Mai - sept. 2026",
    description:
      "Deux bras robotiques travaillent en équipe : l'un déplace une caméra au poignet pour trouver une cible cachée derrière des feuilles, l'autre l'atteint, et un filtre de sécurité vérifie chaque commande avant qu'elle n'arrive aux moteurs.",
    subDescription: [
      "Développement d'un filtre de sécurité à 12 ddl pour deux bras (fonctions barrières de contrôle) sur deux AgileX Piper, exécuté à 100 Hz entre chaque politique de commande (policy) et les moteurs.",
      "Essais sur les robots réels : une trajectoire RL rejouée s'est terminée à moins de 0,002 rad, et un jumeau simulé a reproduit le matériel à 0,033 rad près.",
      "Création d'une tâche Isaac Lab où un bras équipé d'une caméra au poignet (eye-in-hand) cherche une cible cachée par des feuilles et l'autre bras l'atteint ; une politique unique pour les deux bras, trop fragile, a été remplacée par deux politiques PPO distinctes de recherche et d'atteinte.",
      "Entraînement d'un module de vision supervisé (tête de détection de points clés + distance mesurée) : erreur 3D médiane de 1,67 mm en simulation, 13,6 fois plus faible qu'avec une régression directe.",
      "Intégration de la chaîne complète recherche-atteinte en simulation : toutes les cibles atteintes sans occlusion, et 50 % de cibles atteintes en plus sous occlusion grâce à la mémoire des vues précédentes.",
      "Mise en service d'une caméra stéréo ZED X sur Jetson Orin avec ROS 2 (profondeur à moins de 1 cm d'une référence mesurée au mètre ruban).",
    ],
    tags: MIRMI.tags.map(term),
    media: MIRMI.media && {
      ...MIRMI.media,
      alt: "Robot à deux bras simulé : une caméra au poignet cherche une balle rouge parmi des feuilles, puis le second bras l'atteint.",
      caption:
        "Simulation (Isaac Sim) : le bras caméra cherche la cible rouge, puis l'autre bras l'atteint. À gauche : vue extérieure. À droite : caméra au poignet.",
    },
    gallery: [
      {
        ...MIRMI.gallery![0],
        alt: "Deux bras robotiques AgileX Piper sur une table, dans la cage du laboratoire MIRMI.",
        caption: "Robots réels : le banc à deux bras Piper du MIRMI.",
      },
      {
        ...MIRMI.gallery![1],
        alt: "Recherche simulée où la cible est cachée derrière des feuilles : le bras caméra la trouve, puis l'autre bras l'atteint.",
        caption:
          "Simulation (Isaac Sim) : la cible est cachée derrière des feuilles ; le bras caméra la trouve et l'autre bras l'atteint.",
      },
    ],
    subprojects: [
      {
        ...MIRMI.subprojects![0],
        title: "Filtre de sécurité pour deux bras (OSCBF)",
        description:
          "Une couche de sécurité entre chaque politique de commande et les moteurs : elle ne modifie une commande que du strict nécessaire pour respecter les limites articulaires et éviter les collisions.",
        bullets: [
          "Filtre à fonctions barrières de contrôle à 12 ddl pour deux bras AgileX Piper, exécuté à 100 Hz.",
          "Contraintes de limites articulaires, de table, d'auto-collision et de collision entre les bras.",
          "Testé sur les robots réels, entre la politique apprise et les moteurs.",
        ],
        media: MIRMI.subprojects![0].media && {
          ...MIRMI.subprojects![0].media,
          alt: "Deux bras Piper simulés côte à côte qui avancent vers une boîte rouge ; avec le filtre activé, le bras s'arrête avant la boîte.",
          caption:
            "Simulation (Genesis) : filtre de sécurité désactivé (à gauche) et activé (à droite), face à une boîte.",
        },
        credit:
          "Construit sur les bibliothèques open source OSCBF et CBFpy de Daniel Morton et Marco Pavone (Stanford ASL, licence MIT). Ma part : les modèles du Piper et des deux bras, les contraintes et le déploiement.",
      },
    ],
    credits: [
      "Filtre de sécurité construit sur OSCBF / CBFpy (D. Morton, M. Pavone, Stanford ASL).",
    ],
  },
  {
    ...REMAIN,
    title: "Inspection de chaussures guidée par vision avec un UR3e",
    category: "Projet de groupe · REMAIN (Interreg Sudoe)",
    team: "Équipe de 8 étudiants",
    description:
      "Un UR3e équipé d'une caméra RealSense au poignet localise une chaussure, place la caméra à plusieurs points de vue autour d'elle sans collision et la photographie pour détecter les défauts : d'abord sous Gazebo, puis sur le robot réel.",
    subDescription: [
      "Développement d'une simulation d'inspection sur UR3e avec ROS 2, Gazebo, URDF/XACRO et MoveIt 2.",
      "Planification de trajectoires sans collision pour plusieurs points de vue de caméra.",
      "Participation au déploiement sim-to-real sur un UR3e réel.",
      "Intégration de la localisation par caméra de profondeur RealSense et de la calibration main-œil.",
      "Chaîne ROS 2 avec un U-Net pour la segmentation des défauts et un CNN pour la classification trous/rayures.",
    ],
    tags: REMAIN.tags.map(term),
    media: REMAIN.media && {
      ...REMAIN.media,
      alt: "UR3e réel avec une caméra RealSense au poignet, qui se déplace entre des points de vue autour d'une chaussure noire posée sur un plateau tournant, au laboratoire.",
      caption:
        "Robot réel : l'UR3e déplace sa caméra au poignet entre les points de vue d'inspection autour de la chaussure.",
    },
    gallery: [
      {
        ...REMAIN.gallery![0],
        alt: "UR3e simulé qui place sa caméra au poignet au-dessus d'une chaussure posée sur une table ; à côté, l'image de la caméra montre la chaussure vue de dessus.",
        caption:
          "Simulation (Gazebo) : l'UR3e amène sa caméra à un point de vue d'inspection au-dessus de la chaussure. À gauche : la scène. À droite : l'image de la caméra.",
      },
      {
        ...REMAIN.gallery![1],
        alt: "Vue de côté d'une chaussure noire abîmée, avec les zones de défaut détectées le long de la semelle surlignées en bleu.",
        caption:
          "Segmentation des défauts (U-Net, en bleu) sur une photo de chaussure abîmée prise au smartphone : validation hors ligne du nœud de détection.",
      },
    ],
    subprojects: [
      {
        ...REMAIN.subprojects![0],
        title: "De la simulation à l'UR3e réel",
        description:
          "Second semestre : la chaîne simulée a été transférée sur un UR3e réel, avec une Intel RealSense D435 montée au poignet (ROS 2 Humble, MoveIt 2).",
        bullets: [
          "Calibration main-œil (caméra au poignet) avec un marqueur ArUco et la méthode de Tsai-Lenz (easy_handeye2). Un premier résultat, physiquement impossible, a été rejeté : il venait de mauvais paramètres du marqueur.",
          "Localisation de la chaussure à partir de l'image de profondeur : estimation du plan de la table, masque de l'objet, filtrage des contours, puis projection en position 3D et en lacet.",
          "Cinq points de vue sur un dôme elliptique autour de la chaussure, avec la caméra tournée vers elle à chaque fois ; table, chaussure et boîtier de la caméra déclarés comme objets de collision ; planification RRT* à 15 % de la vitesse maximale.",
          "Résultat : 4 points de vue sur 5 photographiés sur le robot réel (3 sur 5 en simulation, à cause de la portée de 500 mm du bras).",
          "Nœud de détection des défauts : un U-Net segmente les dommages et un CNN classe chaque zone en trou ou en rayure. Fiable sur des photos prises au smartphone ; sur les images du robot, les résultats baissent à cause des changements de point de vue et d'éclairage, d'où l'étape suivante : l'entraîner sur des images de la caméra du robot.",
        ],
        media: REMAIN.subprojects![0].media && {
          ...REMAIN.subprojects![0].media,
          alt: "Quatre photos d'une chaussure noire usée prises par la caméra du robot : vues de dessus, de face, de gauche et de l'arrière.",
          caption:
            "Robot réel : images prises par la caméra au poignet depuis quatre points de vue (dessus, face, gauche, arrière).",
        },
        credit:
          "Résultat d'équipe (8 étudiants, Clermont Auvergne INP SIGMA), rapport d'avril 2026.",
      },
    ],
  },
  {
    ...RL,
    title: "Apprentissage par renforcement pour l'évitement d'obstacles",
    category: "Projet de cours · SIGMA Clermont",
    team: "Avec Mohamed Ali Jomaa Ghouil",
    description:
      "Apprendre à un TurtleBot3 à éviter les obstacles à partir de ses mesures LiDAR, en comparant trois familles d'algorithmes d'apprentissage par renforcement sous ROS 2 et Gazebo.",
    subDescription: [
      "Implémentation et comparaison de DQN, Policy Gradient et Actor-Critic sur un TurtleBot3 sous ROS 2 / Gazebo.",
      "Le robot observe 24 mesures LiDAR et choisit parmi cinq commandes de mouvement.",
      "Meilleurs résultats avec le Double DQN et un mécanisme de sécurité prioritaire (safety override).",
    ],
    media: RL.media && {
      ...RL.media,
      alt: "Vue de dessus d'un TurtleBot3 simulé qui roule entre des cylindres blancs dans une arène hexagonale, avec son balayage LiDAR dessiné en éventail bleu.",
      caption:
        "Simulation (Gazebo) : le TurtleBot3 roule entre les obstacles ; l'éventail bleu est son balayage LiDAR.",
    },
  },
  {
    ...PFR,
    title: "Détection de frontières et commande de sécurité pour un robot mobile",
    category: "Projet PFR · simulation ROS 2",
    period: "Décembre 2025",
    team: "Avec Mohamed Ali Jomaa Ghouil",
    description:
      "Un robot mobile patrouille dans une zone délimitée et doit s'arrêter avant les trous et les rebords donnant sur le vide ; il s'appuie sur le LiDAR et l'odométrie pour la supervision de sécurité, et sur le SLAM pour la cartographie.",
    subDescription: [
      "Supervision de sécurité sous ROS 2 à partir du LiDAR et de l'odométrie : le robot s'immobilise quand il détecte un trou, repart après un temps d'attente et s'arrête définitivement après des détections répétées.",
      "Grille d'occupation SLAM et raffinement des frontières par fichiers CSV.",
      "Stratégie de patrouille circulaire, adaptée après l'analyse des premiers résultats.",
      "Analyse des limites de Nav2 pour cette tâche.",
    ],
    media: PFR.media && {
      ...PFR.media,
      alt: "Robot mobile simulé qui patrouille dans une zone fermée par des murs ; à côté, le journal du détecteur signale les trous un par un, puis un arrêt définitif.",
      caption:
        "Simulation (Gazebo) : le robot patrouille ; chaque trou détecté l'arrête, la patrouille reprend après un temps d'attente et, après plusieurs détections de trous, il s'arrête définitivement (journal à droite).",
    },
    gallery: [
      {
        ...PFR.gallery![0],
        alt: "Vue RViz d'une carte en grille d'occupation qui s'agrandit pendant que le robot mobile est conduit dans la zone.",
        caption:
          "Simulation (RViz) : la grille d'occupation SLAM se construit pendant que le robot est conduit dans la zone.",
      },
      {
        ...PFR.gallery![1],
        alt: "Deux graphiques : une frontière bruitée relevée par cartographie manuelle, et le polygone nettoyé après post-traitement.",
        caption:
          "Simulation : frontière relevée par cartographie manuelle (à gauche) et après post-traitement (à droite).",
      },
    ],
  },
];

const FOCUS_TEXT = [
  {
    title: "Apprentissage robotique",
    description:
      "Entraîner des comportements de robots par apprentissage par renforcement en simulation, et comprendre pourquoi une politique de commande échoue avant de lui faire confiance.",
    bullets: [
      "Politiques PPO de recherche et d'atteinte sous Isaac Lab",
      "Une politique unique et fragile pour deux bras remplacée par des modules séparés",
      "DQN, Policy Gradient et Actor-Critic comparés sur un TurtleBot3",
    ],
    appliedIn: ["MIRMI, TU Munich", "Projet RL TurtleBot3"],
  },
  {
    title: "Perception",
    description:
      "Transformer les images d'une caméra en positions qu'un robot peut exploiter, des modules de vision appris aux capteurs de profondeur calibrés.",
    bullets: [
      "Module appris points clés + distance : erreur 3D médiane de 1,67 mm (simulation)",
      "Localisation par la profondeur et calibration main-œil sur un UR3e",
      "Caméra stéréo ZED X sur Jetson Orin avec ROS 2",
    ],
    appliedIn: ["MIRMI, TU Munich", "Inspection de chaussures REMAIN"],
  },
  {
    title: "Commande sécurisée",
    description:
      "Garder les robots dans des limites sûres pendant qu'une politique de commande ou un opérateur les pilote, avec un filtre qui ne modifie les commandes que si nécessaire.",
    bullets: [
      "Filtre de sécurité à fonctions barrières de contrôle pour deux bras Piper, à 100 Hz",
      "Contraintes de limites articulaires, d'auto-collision et de collision entre bras, sur robots réels",
      "Supervision de sécurité par LiDAR pour un robot mobile (simulation)",
    ],
    appliedIn: ["MIRMI, TU Munich", "Projet de détection de frontières"],
  },
  {
    title: "Planification et intégration",
    description:
      "Relier perception, planification et matériel en un seul système ROS 2 qui fonctionne, d'abord en simulation, puis sur le robot.",
    bullets: [
      "Planification MoveIt 2 sans collision pour plusieurs points de vue de caméra",
      "Cartographie SLAM et analyse des limites de Nav2",
      "Déploiement sim-to-real sur un UR3e réel",
    ],
    appliedIn: ["Inspection de chaussures REMAIN", "Projet de détection de frontières"],
  },
];

const RAW: SiteContent = {
  locale: "fr",
  hero: {
    role: "Élève ingénieur en robotique et mécatronique",
    location: "Clermont-Ferrand, France",
    tagline:
      "J'explore les systèmes robotiques intelligents par la perception, la planification et la commande.",
    availability: "Disponible pour un PFE · dès mars 2027",
    flipWords: ["Perception", "Planification", "Commande"],
  },
  stats: [
    { value: "2", label: "Écoles d'ingénieurs (double diplôme)" },
    { value: "4 mois", label: "Stage de recherche à la TU Munich" },
    { value: "12 ddl", label: "Filtre de sécurité pour deux bras, testé sur robots réels" },
    { value: "5/51", label: "Rang à l'ENISO" },
  ],
  journey: [
    { city: "Sousse", country: "Tunisie", label: "ENISO · Mécatronique" },
    {
      city: "Clermont-Ferrand",
      country: "France",
      label: "SIGMA Clermont · Robotique",
    },
    { city: "Munich", country: "Allemagne", label: "MIRMI, TUM · Recherche" },
  ],
  projects,
  otherProjects: [
    {
      title: "Navigation autonome d'un MiR100",
      context: "Projet académique",
      description:
        "Navigation autonome d'un robot mobile MiR100 sous Webots, avec LiDAR et vision par ordinateur.",
      tags: ["Webots", "Python", "LiDAR", "Vision par ordinateur"],
    },
    {
      title: "Impression 3D robotisée avec un UR10",
      context: "Projet académique",
      status: "Ongoing",
      description:
        "Intégration d'une tête d'impression 3D sur un bras robotique industriel UR10.",
      tags: ["UR10", "Robotique industrielle", "Impression 3D"],
    },
    {
      title: "Mini-projets de vision par ordinateur",
      context: "Mini-projets de cours",
      description:
        "Un effet de croquis en direct sur le flux d'une webcam, et le comptage de cercles et d'ellipses dans des images.",
      tags: ["OpenCV", "Python", "Jupyter"],
    },
  ],
  focusAreas: FOCUS_AREAS.map((area, index) => ({
    ...area,
    ...FOCUS_TEXT[index],
  })),
  experiences: [
    {
      title:
        "Stagiaire de recherche · Apprentissage robotique à deux bras et perception active",
      job: "MIRMI, Université technique de Munich · Munich, Allemagne",
      date: "Mai - sept. 2026",
      contents: [
        "Développement d'un filtre de sécurité pour deux bras (fonctions barrières de contrôle) sur deux AgileX Piper, testé sur les robots réels à 100 Hz.",
        "Création d'une tâche Isaac Lab où un bras caméra cherche une cible cachée et l'autre bras l'atteint, avec des politiques PPO séparées pour la recherche et l'atteinte.",
        "Entraînement d'un module de vision qui localise la cible avec une erreur 3D médiane de 1,67 mm en simulation.",
        "Intégration de la chaîne complète en simulation : 50 % de cibles atteintes en plus sous occlusion grâce à la mémoire des vues précédentes.",
      ],
    },
    {
      title: "Stagiaire · Modélisation et commande d'un bras robotique industriel",
      job: "SZ METAL · Monastir, Tunisie",
      date: "Juillet 2025",
      contents: [
        "Modélisation et simulation d'un bras robotique (URDF, cinématique).",
        "Développement d'un cadre de commande MATLAB indépendant du robot.",
      ],
    },
    {
      title: "Stagiaire en production",
      job: "Watts Electronics · Monastir, Tunisie",
      date: "Juillet 2024",
      contents: [
        "Processus de production électronique, contraintes qualité et pratiques d'atelier.",
      ],
    },
  ],
  education: [
    {
      title: "Diplôme d'ingénieur en génie mécanique",
      job: "SIGMA Clermont, Clermont Auvergne INP · Clermont-Ferrand, France",
      date: "2025 - 2027 (prévu)",
      contents: [
        "Spécialisation : Mécanismes et robots innovants (enseignée en anglais), double diplôme avec l'ENISO.",
        "Cours principaux : ROS 2, cinématique des robots, vision par ordinateur, apprentissage automatique, apprentissage par renforcement.",
      ],
    },
    {
      title: "Diplôme d'ingénieur en génie mécatronique",
      job: "École nationale d'ingénieurs de Sousse (ENISO) · Sousse, Tunisie",
      date: "2023 - 2027 (prévu)",
      contents: [
        "Rang : 5/51.",
        "Cours principaux : automatique, conception mécanique, étalonnage des capteurs, microcontrôleurs, langage assembleur.",
      ],
    },
  ],
  skillGroups: SKILL_GROUPS.map((group) => ({
    title: term(group.title),
    items: group.items.map(term),
  })),
  skillChips: SKILL_CHIPS.map(term),
  languages: [
    { name: "Anglais", level: "Courant (TOEIC 835)" },
    { name: "Français", level: "Courant" },
    { name: "Allemand", level: "A2 (cours de niveau B1 en cours)" },
    { name: "Arabe", level: "Langue maternelle" },
  ],
  cv: {
    url: "/cv/Taher_Guerbej_CV_FR.pdf",
    fileName: "Taher_Guerbej_CV_FR.pdf",
  },
  ui: {
    nav: [
      { label: "À propos", href: "#about" },
      { label: "Domaines", href: "#focus" },
      { label: "Projets", href: "#work" },
      { label: "Expérience", href: "#experience" },
      { label: "Compétences", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    toggleMenu: "Ouvrir ou fermer le menu",
    switchLanguage: "Read in English",
    downloadCv: "Télécharger le CV",
    viewProjects: "Voir les projets",
    seeProjects: "Voir les projets",
    scroll: "Défiler",
    scrollDown: "Défiler vers le bas",
    loading: "Chargement",
    loaderTagline: "Robotique & mécatronique · Perception · Planification · Commande",
    about: {
      eyebrow: "À propos",
      title: {
        lead: "Concevoir des robots qui",
        accent: "voient, décident et se déplacent en toute sécurité.",
      },
      whoIAm: "Qui suis-je",
      portraitAlt: "Portrait de Taher Guerbej",
      bio: [
        "Je suis élève ingénieur en dernière année, en **robotique et mécatronique**, dans le cadre d'un cursus de double diplôme entre l'ENISO (Tunisie) et SIGMA Clermont (France).",
        "J'ai passé quatre mois au **MIRMI, TU Munich**, sur la perception active avec deux bras robotiques : un filtre de sécurité testé sur les robots réels, de l'apprentissage par renforcement en simulation et un module de vision appris.",
        "Je recherche un **stage de fin d'études (PFE) de 6 mois** à partir du 15 mars 2027, en apprentissage robotique, manipulation ou perception.",
      ],
      toolkit: "Boîte à outils",
    },
    focus: {
      eyebrow: "Domaines de travail",
      title: {
        lead: "Là où je mets mon énergie,",
        accent: "de la simulation au matériel.",
      },
      hint: ["Défiler", "Empiler"],
      card: "Domaine",
      appliedIn: "Appliqué dans",
      covers: "Ce que ça couvre",
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: {
        lead: "Travaux de recherche et d'ingénierie,",
        accent: "en simulation et sur robots réels.",
      },
      hint: ["Défiler", "Épinglé"],
      readCaseStudy: "Lire l'étude de cas",
      caseStudy: "Étude de cas",
      more: "Autres projets académiques",
      badgeSimulation: "Simulation",
      badgeRealRobot: "Robot réel",
      badgeVideo: "Vidéo",
      badgeResult: "Résultat",
      mediaSoon: "Médias à venir",
      whatIDid: "Ce que j'ai fait",
      subProject: "Sous-projet",
      moreMedia: "Autres médias",
      credits: "Crédits :",
      close: "Fermer",
    },
    experience: {
      eyebrow: "Expérience",
      title: {
        lead: "De l'atelier de production",
        accent: "à un laboratoire de recherche en robotique.",
      },
    },
    education: {
      eyebrow: "Formation",
      title: { lead: "Un double diplôme", accent: "entre deux pays." },
    },
    skills: {
      eyebrow: "Compétences et outils",
      title: { lead: "Les outils derrière", accent: "les projets." },
      languages: "Langues",
    },
    contact: {
      eyebrow: "Contact",
      title: { lead: "Vous cherchez un stagiaire PFE", accent: "en robotique ?" },
      intro:
        "Je suis disponible pour un stage de fin d'études de 6 mois à partir du 15 mars 2027. Le plus rapide pour me joindre, c'est l'e-mail.",
      email: "E-mail",
      basedIn: "Basé à",
      cvEyebrow: "Stage PFE 2027",
      cvTitle: "Tout sur une page.",
      cvText:
        "Mon CV en français (PDF), avec le détail de chaque projet et de chaque stage.",
      facts: [
        { label: "Début", value: "15 mars 2027" },
        { label: "Durée", value: "6 mois" },
        {
          label: "Intérêts",
          value: "Apprentissage robotique, manipulation ou perception",
        },
        { label: "Langues", value: "Français, anglais (courant) · allemand A2" },
      ],
      sendEmail: "Envoyer un e-mail",
    },
    footer: {
      reachMe: "Écrivez-moi à",
      builtOn: "Réalisé à partir du",
      template: "modèle de portfolio 3D de Hasnain Irfan",
    },
  },
};

/**
 * French typography: a no-break space before : ; ? ! and %, and between a
 * number and its unit or month, so they never split across two lines.
 */
const NBSP = "\u00a0";

const NBSP_BEFORE = / ([:;?!%])/g;

/** "15 mars", "6 mois", "1,67 mm": keep the number with its word. */
const NBSP_AFTER_NUMBER =
  /(\d) (janvier|février|mars|avril|mai|juin|juillet|août|septembre|sept\.|octobre|novembre|décembre|mois|étudiants|ddl|mm|cm|Hz|rad|fois)/g;

const frenchSpacing = <T,>(value: T): T => {
  if (typeof value === "string") {
    return value
      .replace(NBSP_BEFORE, `${NBSP}$1`)
      .replace(NBSP_AFTER_NUMBER, `$1${NBSP}$2`) as T;
  }
  if (Array.isArray(value)) {
    return value.map(frenchSpacing) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, frenchSpacing(item)])
    ) as T;
  }
  return value;
};

export const FR: SiteContent = frenchSpacing(RAW);
