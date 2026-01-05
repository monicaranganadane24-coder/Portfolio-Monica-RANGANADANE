const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const projets = {
  film: {
    titre: "Application web – Recherche de films",
    image: "films.png",
    desc: `
Développement d’une application web permettant de rechercher des films via une API externe (OMDb).
J’ai conçu l’interface, géré les appels API, affiché les résultats en temps réel et créé une page détaillée
pour chaque film (résumé, casting, notes, date de sortie).

Ce que j’ai fait :
• Intégration d’une API REST (fetch, JSON)
• Interface responsive en HTML/CSS
• Gestion des erreurs et UX fluide
• Architecture JS propre et modulaire

Ce que j’ai appris :
• Manipuler des API externes
• Structurer un projet web complet
• Améliorer l’expérience utilisateur
• Déboguer et optimiser du JavaScript
`,
    github: "https://github.com/monicaranganadane24-coder/Blush-Cinema"
  },

  monitoring: {
    titre: "Monitoring système Linux",
    image: "outilMonitoring.jpg",
    desc: `
Création d’un outil Python Tkinter permettant de surveiller l’état d’un système Linux en temps réel :
CPU, RAM, stockage, réseau, processus actifs, avec génération automatique d’un rapport HTML.

Ce que j’ai fait :
• Interface graphique Tkinter
• Récupération d’informations système (psutil)
• Génération de rapports HTML
• Tests sur plusieurs distributions Linux

Ce que j’ai appris :
• Développer une application Python complète
• Lire et analyser des données système
• Automatiser des tâches d’administration Linux
• Concevoir une interface utilisateur efficace
`,
    github: "https://github.com/monicaranganadane24-coder/Outil-de-monitoring-syst-me"
  },

  yearbook: {
    titre: "Yearbook Automatique",
    image: "yearbook.png",
    desc: `
Développement d’un générateur automatique de Yearbook PDF à partir d’un fichier CSV contenant les élèves.
Le programme place automatiquement les photos, noms, classes et met en page le document final.

Ce que j’ai fait :
• Lecture et traitement de fichiers CSV
• Automatisation de la mise en page
• Génération de PDF avec Python
• Gestion d’erreurs et validation des données

Ce que j’ai appris :
• Automatiser des tâches répétitives
• Manipuler des fichiers et formats variés
• Créer un outil utile pour une équipe ou une école
• Structurer un projet Python propre
`,
    github: "https://github.com/monicaranganadane24-coder/Yearbook-"
  },

  site: {
    titre: "Site HTML/CSS",
    image: "association.png",
    desc: `
Création d’un site vitrine complet en HTML/CSS, avec plusieurs pages, une navigation fluide,
un design moderne et une structure claire.

Ce que j’ai fait :
• Maquettage et conception du design
• Navigation responsive
• Mise en page propre et accessible
• Optimisation mobile

Ce que j’ai appris :
• Structurer un site web professionnel
• Utiliser flexbox, grid et responsive design
• Améliorer l’ergonomie et la lisibilité
• Respecter les bonnes pratiques HTML/CSS
`,
    github: "https://github.com/monicaranganadane24-coder/Site-Web"
  },

  config: {
    titre: "Configuration Windows/Linux",
    image: "config.png",
    desc: `
Projet personnel : Travaux pratiques d’installation, configuration et sécurisation de systèmes Windows et Linux.
Mise en place d’utilisateurs, permissions, services, réseau, mises à jour et dépannage.

Ce que j’ai fait :
• Installation complète Windows/Linux
• Configuration réseau, firewall, services
• Gestion des utilisateurs et permissions
• Résolution d’incidents courants

Ce que j’ai appris :
• Comprendre les environnements systèmes
• Diagnostiquer et résoudre des problèmes
• Appliquer les bonnes pratiques de sécurité
• Travailler comme technicien support IT
`
  }
}

const container = document.getElementById("project-container")
if (container && id && projets[id]) {
  const p = projets[id]
  container.innerHTML = `
    <div class="project-layout">

      <div class="project-left">
        <h1>${p.titre}</h1>
        <p>${p.desc}</p>
        <a href="projets.html" class="btn secondary">← Retour aux projets</a>
      </div>

      <div class="project-right">
        <img src="${p.image}" alt="${p.titre}">
        ${p.github ? `<a class="btn primary" href="${p.github}" target="_blank">Voir sur GitHub</a>` : ""}
      </div>

    </div>
  `
}
