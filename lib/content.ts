export const projects = [
  {
    id: "oxidized-stage",
    title: {
      fr: "Stage — Sauvegarde de configurations routeur avec Oxidized",
      en: "Internship — Router config backup with Oxidized"
    },
    context: { fr: "Stage", en: "Internship" },
    role: { fr: "Technicien Réseaux (stagiaire)", en: "Network tech (intern)" },
    techs: ["Oxidized", "Git", "SSH", "Cron"],
    summary: {
      fr: "Mise en place d'une collecte automatique des configurations de routeurs via Oxidized, versionnées dans Git.",
      en: "Implemented automated router configuration backups via Oxidized, versioned in Git."
    },
    outcomes: [
      { fr: "Couverture de 48 équipements en 2 semaines", en: "Covered 48 devices in 2 weeks" },
      { fr: "RTO de restauration < 10 min (tests)", en: "Restore RTO < 10 min (tests)" }
    ],
    skills: ["Administrer un SI sécurisé", "Administrer les réseaux et l’Internet", "Surveiller un SI sécurisé"],
    evidence: [
      { fr: "Extraits de config anonymisés", en: "Anonymized config excerpts" },
      { fr: "Procédure d'exploitation", en: "Runbook" }
    ]
  },
  {
    id: "alternance-placeholder",
    title: { fr: "Alternance — (à préciser)", en: "Apprenticeship — (TBD)" },
    context: { fr: "Alternance", en: "Apprenticeship" },
    role: { fr: "Assistant Ingénieur R&T", en: "R&T Assistant Engineer" },
    techs: ["TBD"],
    summary: {
      fr: "Projet en cours. Cette fiche sert de gabarit pour documenter compétences et preuves.",
      en: "Ongoing project. This card is a template to document skills and evidence."
    },
    outcomes: [],
    skills: ["Connecter les entreprises et les usagers", "Créer des outils et applications"],
    evidence: []
  }
];

export const competencies = [
  "Administrer un système d’information sécurisé",
  "Surveiller un système d’information sécurisé",
  "Administrer les réseaux et l’Internet",
  "Connecter les entreprises et les usagers",
  "Créer des outils et applications informatiques pour les R&T",
];
