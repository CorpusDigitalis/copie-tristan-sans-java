function loadHTML(id, url, callback) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Erreur de chargement');
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}

function appliquerModifications() {
  const modifications = {
    
    // Accueil
    "titre-accueil": { text: "Bienvenue" },
    "texte-description": {
      text:
        "Je crée des sites web professionnels sur mesure, conçus pour mettre en valeur l’identité, les réalisations et l’expertise de professionnels issus de divers secteurs. Une attention particulière est portée à la clarté, la simplicité d’utilisation et à l’autonomie dans la gestion du site.<br><br>Au-delà de la technique, un suivi personnalisé est offert tout au long du processus de création et après la mise en ligne. Ce partenariat permet d’adapter précisément le site aux besoins évolutifs, assurant ainsi une présence digitale cohérente et efficace.<br><br>Un site web personnel bien conçu est un atout majeur pour renforcer l’image professionnelle, crédibiliser les compétences et ouvrir de nouvelles opportunités. Il sert d’espace d’expression privilégié pour valoriser le travail et les projets."
    },

    // Header
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Footer
    "email": { text: "Email", href: "mailto:tristan.arbona@gmail.com" },
    "linkedin": { text: "LinkedIn", href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "CV", href: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view" },

    // Footer
    "signature": { text: "© Corpus Digitalis" },

    // Publications (nouveaux ID demandés)
    "titre-publications": { text: "Mes publications économiques" },
    "texte-intro": {
      text: "Retrouvez ci-dessous une liste d'exemples de contributions académiques."
    },
   
  "publication-1": {},
  "publication-1-texte": {
    "text": "Nouvel article sur la politique monétaire européenne."
  },
  "publication-1-lien": {
    "text": "Lire l'article complet",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-2": {},
  "publication-2-texte": {
    "text": "Présentation de recherche sur les taux d'intérêt réels."
  },
  "publication-2-lien": {
    "text": "Voir la communication",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-3": {},
  "publication-3-texte": {
    "text": ""
  },
  "publication-3-lien": {
    "text": "",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-4": {},
  "publication-4-texte": {
    "text": "Synthèse d’un séminaire sur les déséquilibres macroéconomiques."
  },
  "publication-4-lien": {
    "text": "Télécharger le document",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-5": {},
  "publication-5-texte": {
    "text": "Étude empirique sur les marchés du travail en Europe."
  },
  "publication-5-lien": {
    "text": "Accéder à l’étude",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-6": {},
  "publication-6-texte": {
    "text": "Note de recherche sur l’évolution des taux directeurs."
  },
  "publication-6-lien": {
    "text": "Lire la note",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-7": {},
  "publication-7-texte": {
    "text": "Mémoire de licence en économie publique."
  },
  "publication-7-lien": {
    "text": "Voir le mémoire",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-8": {},
  "publication-8-texte": {
    "text": "Article de revue étudiante sur la crise énergétique."
  },
  "publication-8-lien": {
    "text": "Consulter l'article",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-9": {},
  "publication-9-texte": {
    "text": "Communication lors du colloque sur les inégalités."
  },
  "publication-9-lien": {
    "text": "Voir la communication",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-10": {},
  "publication-10-texte": {
    "text": "Rapport de recherche sur la croissance inclusive."
  },
  "publication-10-lien": {
    "text": "Télécharger le rapport",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

"publication-11": {},
"publication-11-texte": {
  text: ""
},
"publication-11-lien": {
  text: "",
  href: ""
},

"publication-12": {},
"publication-12-texte": {
  text: ""
},
"publication-12-lien": {
  text: "",
  href: ""
},

"publication-13": {},
"publication-13-texte": {
  text: ""
},
"publication-13-lien": {
  text: "",
  href: ""
},

"publication-14": {},
"publication-14-texte": {
  text: ""
},
"publication-14-lien": {
  text: "",
  href: ""
},

"publication-15": {},
"publication-15-texte": {
  text: ""
},
"publication-15-lien": {
  text: "",
  href: ""
},

"publication-16": {},
"publication-16-texte": {
  text: ""
},
"publication-16-lien": {
  text: "",
  href: ""
},

"publication-17": {},
"publication-17-texte": {
  text: ""
},
"publication-17-lien": {
  text: "",
  href: ""
},

"publication-18": {},
"publication-18-texte": {
  text: ""
},
"publication-18-lien": {
  text: "",
  href: ""
},

"publication-19": {},
"publication-19-texte": {
  text: ""
},
"publication-19-lien": {
  text: "",
  href: ""
},

"publication-20": {},
"publication-20-texte": {
  text: ""
},
"publication-20-lien": {
  text: "",
  href: ""
},

"publication-21": {},
"publication-21-texte": {
  text: ""
},
"publication-21-lien": {
  text: "",
  href: ""
},

"publication-22": {},
"publication-22-texte": {
  text: ""
},
"publication-22-lien": {
  text: "",
  href: ""
},

"publication-23": {},
"publication-23-texte": {
  text: ""
},
"publication-23-lien": {
  text: "",
  href: ""
},

"publication-24": {},
"publication-24-texte": {
  text: ""
},
"publication-24-lien": {
  text: "",
  href: ""
},

"publication-25": {},
"publication-25-texte": {
  text: ""
},
"publication-25-lien": {
  text: "",
  href: ""
},

"publication-26": {},
"publication-26-texte": {
  text: ""
},
"publication-26-lien": {
  text: "",
  href: ""
},

"publication-27": {},
"publication-27-texte": {
  text: ""
},
"publication-27-lien": {
  text: "",
  href: ""
},

"publication-28": {},
"publication-28-texte": {
  text: ""
},
"publication-28-lien": {
  text: "",
  href: ""
},

"publication-29": {},
"publication-29-texte": {
  text: ""
},
"publication-29-lien": {
  text: "",
  href: ""
},

"publication-30": {},
"publication-30-texte": {
  text: ""
},
"publication-30-lien": {
  text: "",
  href: ""
},

"publication-31": {},
"publication-31-texte": {
  text: ""
},
"publication-31-lien": {
  text: "",
  href: ""
},

"publication-32": {},
"publication-32-texte": {
  text: ""
},
"publication-32-lien": {
  text: "",
  href: ""
},

"publication-33": {},
"publication-33-texte": {
  text: ""
},
"publication-33-lien": {
  text: "",
  href: ""
},

"publication-34": {},
"publication-34-texte": {
  text: ""
},
"publication-34-lien": {
  text: "",
  href: ""
},

"publication-35": {},
"publication-35-texte": {
  text: ""
},
"publication-35-lien": {
  text: "",
  href: ""
},

"publication-36": {},
"publication-36-texte": {
  text: ""
},
"publication-36-lien": {
  text: "",
  href: ""
},

"publication-37": {},
"publication-37-texte": {
  text: ""
},
"publication-37-lien": {
  text: "",
  href: ""
},

"publication-38": {},
"publication-38-texte": {
  text: ""
},
"publication-38-lien": {
  text: "",
  href: ""
},

"publication-39": {},
"publication-39-texte": {
  text: ""
},
"publication-39-lien": {
  text: "",
  href: ""
},

"publication-40": {},
"publication-40-texte": {
  text: ""
},
"publication-40-lien": {
  text: "",
  href: ""
},

"publication-41": {},
"publication-41-texte": {
  text: ""
},
"publication-41-lien": {
  text: "",
  href: ""
},

"publication-42": {},
"publication-42-texte": {
  text: ""
},
"publication-42-lien": {
  text: "",
  href: ""
},

"publication-43": {},
"publication-43-texte": {
  text: ""
},
"publication-43-lien": {
  text: "",
  href: ""
},

"publication-44": {},
"publication-44-texte": {
  text: ""
},
"publication-44-lien": {
  text: "",
  href: ""
},

"publication-45": {},
"publication-45-texte": {
  text: ""
},
"publication-45-lien": {
  text: "",
  href: ""
},

"publication-46": {},
"publication-46-texte": {
  text: ""
},
"publication-46-lien": {
  text: "",
  href: ""
},

"publication-47": {},
"publication-47-texte": {
  text: ""
},
"publication-47-lien": {
  text: "",
  href: ""
},

"publication-48": {},
"publication-48-texte": {
  text: ""
},
"publication-48-lien": {
  text: "",
  href: ""
},

"publication-49": {},
"publication-49-texte": {
  text: ""
},
"publication-49-lien": {
  text: "",
  href: ""
},

"publication-50": {},
"publication-50-texte": {
  text: ""
},
"publication-50-lien": {
  text: "",
  href: ""
},


 // Cours
    
// Cours 1

// Titre principal du cours 1
"cours-1-title": { text: "Exemple de nom de cours 1" },

//Slides
"cours-1-slides-title": { text: "Slides" },

"cours-1-slide-1": { text: "Slide 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-2": { text: "Slide 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-3": { text: "Slide 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-4": { text: "Slide 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-5": { text: "Slide 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-6": { text: "Slide 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-7": { text: "Slide 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-8": { text: "Slide 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-9": { text: "Slide 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-10": { text: "Slide 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-11": { text: "Slide 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-12": { text: "Slide 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-13": { text: "Slide 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-14": { text: "Slide 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-15": { text: "Slide 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-16": { text: "Slide 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-17": { text: "Slide 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-18": { text: "Slide 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-19": { text: "Slide 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-20": { text: "Slide 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

//Exercices
"cours-1-exercises-title": { text: "Exercices" },

"cours-1-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

//Documents
"cours-1-documents-title": { text: "Documents" },

"cours-1-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },


// Cours 2

// Titre principal du cours 2
"cours-2-title": { text: "Exemple de nom de cours 2" },

// Slides
"cours-2-slides-title": { text: "Slides" },

"cours-2-slide-1": { text: "Slide 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-2": { text: "Slide 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-3": { text: "Slide 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-4": { text: "Slide 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-5": { text: "Slide 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-6": { text: "Slide 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-7": { text: "Slide 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-8": { text: "Slide 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-9": { text: "Slide 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-10": { text: "Slide 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-11": { text: "Slide 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-12": { text: "Slide 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-13": { text: "Slide 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-14": { text: "Slide 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-15": { text: "Slide 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-16": { text: "Slide 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-17": { text: "Slide 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-18": { text: "Slide 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-19": { text: "Slide 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-slide-20": { text: "Slide 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

// Exercices
"cours-2-exercises-title": { text: "Exercices" },

"cours-2-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

// Documents
"cours-2-documents-title": { text: "Documents" },

"cours-2-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-2-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },


// Cours 3

// Titre principal du cours 3
"cours-3-title": { text: "Exemple de nom de cours 3" },

// Slides
"cours-3-slides-title": { text: "Slides" },

"cours-3-slide-1": { text: "Slide 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-2": { text: "Slide 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-3": { text: "Slide 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-4": { text: "Slide 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-5": { text: "Slide 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-6": { text: "Slide 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-7": { text: "Slide 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-8": { text: "Slide 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-9": { text: "Slide 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-10": { text: "Slide 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-11": { text: "Slide 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-12": { text: "Slide 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-13": { text: "Slide 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-14": { text: "Slide 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-15": { text: "Slide 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-16": { text: "Slide 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-17": { text: "Slide 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-18": { text: "Slide 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-19": { text: "Slide 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-slide-20": { text: "Slide 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

"cours-3-exercises-title": { text: "Exercices" },

"cours-3-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

"cours-3-documents-title": { text: "Documents" },

"cours-3-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-3-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

    
// Cours 4

// Titre principal du cours 4
"cours-4-title": { text: "Exemple de nom de cours 4" },

// Slides
"cours-4-slides-title": { text: "Slides" },

// Cours 4

// Slides
"cours-4-slides-title": { text: "Slides" },

"cours-4-slide-1": { text: "Slide 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-2": { text: "Slide 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-3": { text: "Slide 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-4": { text: "Slide 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-5": { text: "Slide 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-6": { text: "Slide 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-7": { text: "Slide 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-8": { text: "Slide 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-9": { text: "Slide 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-10": { text: "Slide 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-11": { text: "Slide 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-12": { text: "Slide 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-13": { text: "Slide 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-14": { text: "Slide 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-15": { text: "Slide 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-16": { text: "Slide 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-17": { text: "Slide 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-18": { text: "Slide 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-19": { text: "Slide 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-slide-20": { text: "Slide 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

"cours-4-exercises-title": { text: "Exercices" },

"cours-4-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

"cours-4-documents-title": { text: "Documents" },

"cours-4-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-4-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

    
// cours 5

"cours-5-title": { text: "" },

"cours-5-slides-title": { text: "" },

// Slides
"cours-5-slide-1": { text: "", href: "https://drive.google.com/slide1" },
"cours-5-slide-2": { text: "", href: "https://drive.google.com/slide2" },
"cours-5-slide-3": { text: "", href: "https://drive.google.com/slide3" },
"cours-5-slide-4": { text: "", href: "https://drive.google.com/slide4" },
"cours-5-slide-5": { text: "", href: "https://drive.google.com/slide5" },
"cours-5-slide-6": { text: "", href: "https://drive.google.com/slide6" },
"cours-5-slide-7": { text: "", href: "https://drive.google.com/slide7" },
"cours-5-slide-8": { text: "", href: "https://drive.google.com/slide8" },
"cours-5-slide-9": { text: "", href: "https://drive.google.com/slide9" },
"cours-5-slide-10": { text: "", href: "https://drive.google.com/slide10" },
"cours-5-slide-11": { text: "", href: "https://drive.google.com/slide11" },
"cours-5-slide-12": { text: "", href: "https://drive.google.com/slide12" },
"cours-5-slide-13": { text: "", href: "https://drive.google.com/slide13" },
"cours-5-slide-14": { text: "", href: "https://drive.google.com/slide14" },
"cours-5-slide-15": { text: "", href: "https://drive.google.com/slide15" },
"cours-5-slide-16": { text: "", href: "https://drive.google.com/slide16" },
"cours-5-slide-17": { text: "", href: "https://drive.google.com/slide17" },
"cours-5-slide-18": { text: "", href: "https://drive.google.com/slide18" },
"cours-5-slide-19": { text: "", href: "https://drive.google.com/slide19" },
"cours-5-slide-20": { text: "", href: "https://drive.google.com/slide20" },

// Exercises
"cours-5-exercises-title": { text: "" },

"cours-5-exercise-1": { text: "", href: "https://drive.google.com/exercise1" },
"cours-5-exercise-2": { text: "", href: "https://drive.google.com/exercise2" },
"cours-5-exercise-3": { text: "", href: "https://drive.google.com/exercise3" },
"cours-5-exercise-4": { text: "", href: "https://drive.google.com/exercise4" },
"cours-5-exercise-5": { text: "", href: "https://drive.google.com/exercise5" },
"cours-5-exercise-6": { text: "", href: "https://drive.google.com/exercise6" },
"cours-5-exercise-7": { text: "", href: "https://drive.google.com/exercise7" },
"cours-5-exercise-8": { text: "", href: "https://drive.google.com/exercise8" },
"cours-5-exercise-9": { text: "", href: "https://drive.google.com/exercise9" },
"cours-5-exercise-10": { text: "", href: "https://drive.google.com/exercise10" },
"cours-5-exercise-11": { text: "", href: "https://drive.google.com/exercise11" },
"cours-5-exercise-12": { text: "", href: "https://drive.google.com/exercise12" },
"cours-5-exercise-13": { text: "", href: "https://drive.google.com/exercise13" },
"cours-5-exercise-14": { text: "", href: "https://drive.google.com/exercise14" },
"cours-5-exercise-15": { text: "", href: "https://drive.google.com/exercise15" },
"cours-5-exercise-16": { text: "", href: "https://drive.google.com/exercise16" },
"cours-5-exercise-17": { text: "", href: "https://drive.google.com/exercise17" },
"cours-5-exercise-18": { text: "", href: "https://drive.google.com/exercise18" },
"cours-5-exercise-19": { text: "", href: "https://drive.google.com/exercise19" },
"cours-5-exercise-20": { text: "", href: "https://drive.google.com/exercise20" },

// Documents
"cours-5-documents-title": { text: "" },

"cours-5-document-1": { text: "", href: "https://drive.google.com/document1" },
"cours-5-document-2": { text: "", href: "https://drive.google.com/document2" },
"cours-5-document-3": { text: "", href: "https://drive.google.com/document3" },
"cours-5-document-4": { text: "", href: "https://drive.google.com/document4" },
"cours-5-document-5": { text: "", href: "https://drive.google.com/document5" },
"cours-5-document-6": { text: "", href: "https://drive.google.com/document6" },
"cours-5-document-7": { text: "", href: "https://drive.google.com/document7" },
"cours-5-document-8": { text: "", href: "https://drive.google.com/document8" },
"cours-5-document-9": { text: "", href: "https://drive.google.com/document9" },
"cours-5-document-10": { text: "", href: "https://drive.google.com/document10" },
"cours-5-document-11": { text: "", href: "https://drive.google.com/document11" },
"cours-5-document-12": { text: "", href: "https://drive.google.com/document12" },
"cours-5-document-13": { text: "", href: "https://drive.google.com/document13" },
"cours-5-document-14": { text: "", href: "https://drive.google.com/document14" },
"cours-5-document-15": { text: "", href: "https://drive.google.com/document15" },
"cours-5-document-16": { text: "", href: "https://drive.google.com/document16" },
"cours-5-document-17": { text: "", href: "https://drive.google.com/document17" },
"cours-5-document-18": { text: "", href: "https://drive.google.com/document18" },
"cours-5-document-19": { text: "", href: "https://drive.google.com/document19" },
"cours-5-document-20": { text: "", href: "https://drive.google.com/document20" },

// cours 6

"cours-6-title": { text: "" },

"cours-6-slides-title": { text: "" },

// Slides
"cours-6-slide-1": { text: "", href: "https://drive.google.com/slide1" },
"cours-6-slide-2": { text: "", href: "https://drive.google.com/slide2" },
"cours-6-slide-3": { text: "", href: "https://drive.google.com/slide3" },
"cours-6-slide-4": { text: "", href: "https://drive.google.com/slide4" },
"cours-6-slide-5": { text: "", href: "https://drive.google.com/slide5" },
"cours-6-slide-6": { text: "", href: "https://drive.google.com/slide6" },
"cours-6-slide-7": { text: "", href: "https://drive.google.com/slide7" },
"cours-6-slide-8": { text: "", href: "https://drive.google.com/slide8" },
"cours-6-slide-9": { text: "", href: "https://drive.google.com/slide9" },
"cours-6-slide-10": { text: "", href: "https://drive.google.com/slide10" },
"cours-6-slide-11": { text: "", href: "https://drive.google.com/slide11" },
"cours-6-slide-12": { text: "", href: "https://drive.google.com/slide12" },
"cours-6-slide-13": { text: "", href: "https://drive.google.com/slide13" },
"cours-6-slide-14": { text: "", href: "https://drive.google.com/slide14" },
"cours-6-slide-15": { text: "", href: "https://drive.google.com/slide15" },
"cours-6-slide-16": { text: "", href: "https://drive.google.com/slide16" },
"cours-6-slide-17": { text: "", href: "https://drive.google.com/slide17" },
"cours-6-slide-18": { text: "", href: "https://drive.google.com/slide18" },
"cours-6-slide-19": { text: "", href: "https://drive.google.com/slide19" },
"cours-6-slide-20": { text: "", href: "https://drive.google.com/slide20" },

// Exercises
"cours-6-exercises-title": { text: "" },

"cours-6-exercise-1": { text: "", href: "https://drive.google.com/exercise1" },
"cours-6-exercise-2": { text: "", href: "https://drive.google.com/exercise2" },
"cours-6-exercise-3": { text: "", href: "https://drive.google.com/exercise3" },
"cours-6-exercise-4": { text: "", href: "https://drive.google.com/exercise4" },
"cours-6-exercise-5": { text: "", href: "https://drive.google.com/exercise5" },
"cours-6-exercise-6": { text: "", href: "https://drive.google.com/exercise6" },
"cours-6-exercise-7": { text: "", href: "https://drive.google.com/exercise7" },
"cours-6-exercise-8": { text: "", href: "https://drive.google.com/exercise8" },
"cours-6-exercise-9": { text: "", href: "https://drive.google.com/exercise9" },
"cours-6-exercise-10": { text: "", href: "https://drive.google.com/exercise10" },
"cours-6-exercise-11": { text: "", href: "https://drive.google.com/exercise11" },
"cours-6-exercise-12": { text: "", href: "https://drive.google.com/exercise12" },
"cours-6-exercise-13": { text: "", href: "https://drive.google.com/exercise13" },
"cours-6-exercise-14": { text: "", href: "https://drive.google.com/exercise14" },
"cours-6-exercise-15": { text: "", href: "https://drive.google.com/exercise15" },
"cours-6-exercise-16": { text: "", href: "https://drive.google.com/exercise16" },
"cours-6-exercise-17": { text: "", href: "https://drive.google.com/exercise17" },
"cours-6-exercise-18": { text: "", href: "https://drive.google.com/exercise18" },
"cours-6-exercise-19": { text: "", href: "https://drive.google.com/exercise19" },
"cours-6-exercise-20": { text: "", href: "https://drive.google.com/exercise20" },

// Documents
"cours-6-documents-title": { text: "" },

"cours-6-document-1": { text: "", href: "https://drive.google.com/document1" },
"cours-6-document-2": { text: "", href: "https://drive.google.com/document2" },
"cours-6-document-3": { text: "", href: "https://drive.google.com/document3" },
"cours-6-document-4": { text: "", href: "https://drive.google.com/document4" },
"cours-6-document-5": { text: "", href: "https://drive.google.com/document5" },
"cours-6-document-6": { text: "", href: "https://drive.google.com/document6" },
"cours-6-document-7": { text: "", href: "https://drive.google.com/document7" },
"cours-6-document-8": { text: "", href: "https://drive.google.com/document8" },
"cours-6-document-9": { text: "", href: "https://drive.google.com/document9" },
"cours-6-document-10": { text: "", href: "https://drive.google.com/document10" },
"cours-6-document-11": { text: "", href: "https://drive.google.com/document11" },
"cours-6-document-12": { text: "", href: "https://drive.google.com/document12" },
"cours-6-document-13": { text: "", href: "https://drive.google.com/document13" },
"cours-6-document-14": { text: "", href: "https://drive.google.com/document14" },
"cours-6-document-15": { text: "", href: "https://drive.google.com/document15" },
"cours-6-document-16": { text: "", href: "https://drive.google.com/document16" },
"cours-6-document-17": { text: "", href: "https://drive.google.com/document17" },
"cours-6-document-18": { text: "", href: "https://drive.google.com/document18" },
"cours-6-document-19": { text: "", href: "https://drive.google.com/document19" },
"cours-6-document-20": { text: "", href: "https://drive.google.com/document20" },




  };

  for (const id in modifications) {
    const element = document.getElementById(id);
    const config = modifications[id];
    if (!element) continue;

    if (config.text !== undefined) {
      element.innerHTML = config.text;
    }
    if (config.href !== undefined && element.tagName.toLowerCase() === "a") {
      element.href = config.href;
    }
  }

  // SUPPRESSION SPECIFIQUE POUR LES COURS, selon ta fonction fournie

  const coursIds = ['cours-1', 'cours-2', 'cours-3', 'cours-4', 'cours-5', 'cours-6'];

  coursIds.forEach((racineId) => {
    // Suppression des <a> vides + leur <li> parent
    Object.entries(modifications).forEach(([id, contenu]) => {
      if (id.startsWith(racineId)) {
        const ancre = document.getElementById(id);
        if (!ancre) {
          console.log(`ID introuvable : ${id}`);
          return;
        }
        // ici on vérifie si le texte est vide ou non
        const texte = contenu.text ?? null;
        if (texte === "" || texte === null || texte === undefined) {
          const li = ancre.closest('li');
          if (li) {
            li.remove();
            console.log(`Suppression de <li> parent de ${id}`);
          } else {
            ancre.remove();
            console.log(`Suppression de ${id}`);
          }
        }
      }
    });

    ['slides', 'exercises', 'documents'].forEach((type) => {    // exercises au pluriel
  const ul = document.querySelector(`#${racineId}-${type}-list`);
  if (ul && ul.querySelector('li') === null) {
    const details = document.getElementById(`${racineId}-${type}`);
    if (details) details.remove();
  }
});

const detailsCours = document.getElementById(racineId);
if (detailsCours) {
  const allSubDetails = detailsCours.querySelectorAll('details');
  const allAreEmpty = [...allSubDetails].every(sub =>
                      sub.querySelectorAll('li').length === 0);

  if (allSubDetails.length === 0 || allAreEmpty) {
    detailsCours.remove();
    console.log(`Suppression du cours entier ${racineId} (vide ou sous-parties vides)`);
  }
}   // ← ACCOLADE FERMANT LE if(detailsCours)
});  // ← ACCOLADE FERMANT le forEach + parenthèse


  // --- Suppression des boîtes de publication vides (texte + lien vides) ---
  document.querySelectorAll('.publication-item').forEach(pub => {
    const texte = pub.querySelector('span')?.textContent?.trim() || "";
    const lien  = pub.querySelector('a')?.textContent?.trim() || "";

    if (!texte && !lien) {
      pub.remove();
    }
  });
}

// Chargement header + footer avec callback
loadHTML('header-placeholder', 'header.html', appliquerModifications);
loadHTML('footer-placeholder', 'footer.html', appliquerModifications);

// Pour les éléments déjà présents dans index.html

document.addEventListener('DOMContentLoaded', appliquerModifications);
