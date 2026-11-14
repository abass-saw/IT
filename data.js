/* ==========================================================================
   data.js — Toutes les données du portfolio (bilingue FR / EN)
   Modifie ici les contenus ; la logique d'affichage est dans script.js
   ========================================================================== */

/* ---------- 0. CONFIGURATION (à adapter) ---------- */
const CONFIG = {
  WHATSAPP: "212619942459",                         // numéro international sans "+"
  EMAIL: "absdg70@gmail.com",                       // ex : "prenom@mail.com" (masqué si vide)
  LINKEDIN_URL: "",                                  // ex : "https://www.linkedin.com/in/..." (masqué si vide)
  CV_URL: "assets/CV_SAWADOGO_Mahmoud_Abass.pdf",    // chemin du CV
  FORM_ACTION: "www.linkedin.com/in/mahmoud-abass-sawadogo-2474722a0",       // ex : "https://formspree.io/f/XXXX" (sinon envoi via WhatsApp)
  /* Mot de passe des rapports : SHA-256 de "ChangeMe2026".
     Pour changer : génère le hash de ton mot de passe (voir README) et remplace-le ici. */
  REPORT_PASSWORD_SHA256: "9a121fc874029e54c9a5cdc28436af9787e1b2351bc8236a3f88b105b0c08f45"
};

/* ---------- 1. TEXTES D'INTERFACE ---------- */
const UI = {
  fr: {
    nav: { profil: "Profil", formations: "Formations", experiences: "Expériences", competences: "Compétences", projets: "Projets", outils: "Outils", certifications: "Certifications", contact: "Contact" },
    hero: {
      status: "Ouvert aux opportunités",
      role: "Ingénieur d'État junior en <strong>Systèmes Intelligents, Communicants et Mobiles</strong>",
      sub: "Spécialisé en réseaux, télécommunications et transmission : faisceaux hertziens, fibre optique, radiofréquences et routage IP, avec une polyvalence en systèmes embarqués et automatisme industriel.",
      goal: "Je recherche des opportunités professionnelles :",
      goals: ["CDI", "CDD", "Missions techniques", "Freelance"],
      cv: "Télécharger le CV", contact: "Me contacter",
      stat1: "Technologies maîtrisées", stat2: "Expériences professionnelles", stat3: "Projets réalisés"
    },
    profil: { title: "Profil" },
    formations: { title: "Formations", desc: "Un parcours technique construit au Burkina Faso puis au Maroc.", more: "Plus de détails" },
    experiences: { title: "Expériences professionnelles", desc: "Stages et missions de terrain en télécoms, énergie et industrie.", more: "Voir le détail" },
    competences: { title: "Compétences", desc: "Un cœur de compétences en réseaux et télécommunications, complété par une polyvalence technique sur d'autres domaines de l'ingénierie." },
    projets: { title: "Projets", desc: "Les réalisations les plus représentatives. Les autres projets sont regroupés dans la liste complète.", more: "Découvrir", all: "Voir tous les projets", allTitle: "Tous les projets", back: "Retour à la liste" },
    outils: { title: "Outils techniques" },
    certifications: { title: "Licences & certifications", zoom: "Agrandir" },
    recompenses: { title: "Récompenses & distinctions" },
    associatif: { title: "Engagement associatif" },
    langues: { title: "Langues & centres d'intérêt", langTitle: "Langues", hobbyTitle: "Centres d'intérêt" },
    contact: { title: "Contact", desc: "Un poste, une mission, une question technique ? Écris-moi, je réponds rapidement.", send: "Envoyer le message", location: "Fès, Maroc", whatsapp: "WhatsApp", email: "E-mail", linkedin: "LinkedIn" },
    groups: { telecom: "Réseaux & Télécommunications", polyvalence: "Polyvalence technique" },
    groupDesc: { telecom: "Transmission, routage, sécurité et radio : le cœur de mon expertise.", polyvalence: "Embarqué, automatisme, numérique et logiciel : des compétences complémentaires." },
    groupTools: { telecom: "Simulation, planification et analyse pour les réseaux et la transmission.", polyvalence: "Microcontrôleurs, conception numérique, simulation et développement." },
    cats: { telecom: "Réseaux & Télécoms", iot: "IoT & Embarqué", auto: "Automatisme", ia: "IA & Big Data", fpga: "FPGA & VHDL", fsm: "Machines à états finis (FSM)", instru: "Instrumentation & LabVIEW", adas: "ADAS — Régulateur adaptatif (ACC)", web: "Développement web", adhoc: "Réseaux Ad-hoc & IHM" },
    tap: "Voir les détails",
    modal: { context: "Contexte", objectives: "Objectifs", technologies: "Technologies utilisées", results: "Résultats", whatICanDo: "Ce que je sais faire", whatLearned: "Ce que j'y ai appris", skillsUsed: "Missions réalisées", content: "Contenu de la formation", excellence: "Points d'excellence", report: "Consulter le rapport complet", caseStudy: "Consulter l'étude de cas & captures complètes", verify: "Vérifier le certificat", close: "Fermer" },
    pwd: { title: "Rapport protégé", text: "Ce document est confidentiel. Saisis le mot de passe administrateur pour y accéder.", label: "Mot de passe", submit: "Accéder au rapport", cancel: "Annuler", wrong: "Mot de passe incorrect.", wrongLeft: "Mot de passe incorrect. Tentatives restantes : ", locked: "Trop de tentatives. Réessaie dans 30 secondes.", noCrypto: "Vérification impossible : ouvre le site en HTTPS." },
    form: { name: "Votre nom", email: "Votre e-mail", message: "Votre message", fillAll: "Remplis tous les champs obligatoires.", badEmail: "Saisis une adresse e-mail valide.", sent: "Message envoyé. Merci !", failed: "L'envoi a échoué. Réessaie ou contacte-moi sur WhatsApp." },
    pj: { back: "Retour au portfolio", prev: "Projet précédent", next: "Projet suivant", notfound: "Projet introuvable", notfoundText: "Ce projet n'existe pas ou a été déplacé." },
    theme: "Basculer entre le mode sombre et le mode clair",
    skills: "compétences"
  },
  en: {
    nav: { profil: "Profile", formations: "Education", experiences: "Experience", competences: "Skills", projets: "Projects", outils: "Tools", certifications: "Certifications", contact: "Contact" },
    hero: {
      status: "Open to opportunities",
      role: "Junior state engineer in <strong>Intelligent, Communicating and Mobile Systems</strong>",
      sub: "Specialized in networks, telecommunications and transmission: microwave links, optical fiber, radio frequency and IP routing, with versatility in embedded systems and industrial automation.",
      goal: "I am looking for professional opportunities:",
      goals: ["Permanent role", "Fixed-term role", "Technical assignments", "Freelance"],
      cv: "Download CV", contact: "Get in touch",
      stat1: "Technologies mastered", stat2: "Professional experiences", stat3: "Projects completed"
    },
    profil: { title: "Profile" },
    formations: { title: "Education", desc: "A technical path built in Burkina Faso, then in Morocco.", more: "More details" },
    experiences: { title: "Professional experience", desc: "Internships and field work in telecom, energy and industry.", more: "See details" },
    competences: { title: "Skills", desc: "A core of network and telecommunications expertise, complemented by technical versatility across other engineering fields." },
    projets: { title: "Projects", desc: "The most representative work. All other projects are grouped in the full list.", more: "Discover", all: "View all projects", allTitle: "All projects", back: "Back to the list" },
    outils: { title: "Technical tools" },
    certifications: { title: "Licenses & certifications", zoom: "Enlarge" },
    recompenses: { title: "Awards & distinctions" },
    associatif: { title: "Extracurricular involvement" },
    langues: { title: "Languages & interests", langTitle: "Languages", hobbyTitle: "Interests" },
    contact: { title: "Contact", desc: "A role, an assignment, a technical question? Write to me, I reply quickly.", send: "Send message", location: "Fez, Morocco", whatsapp: "WhatsApp", email: "Email", linkedin: "LinkedIn" },
    groups: { telecom: "Networks & Telecommunications", polyvalence: "Technical versatility" },
    groupDesc: { telecom: "Transmission, routing, security and radio: the core of my expertise.", polyvalence: "Embedded, automation, digital design and software: complementary skills." },
    groupTools: { telecom: "Simulation, planning and analysis for networks and transmission.", polyvalence: "Microcontrollers, digital design, simulation and development." },
    cats: { telecom: "Networks & Telecom", iot: "IoT & Embedded", auto: "Automation", ia: "AI & Big Data", fpga: "FPGA & VHDL", fsm: "Finite State Machines (FSM)", instru: "Instrumentation & LabVIEW", adas: "ADAS — Adaptive Cruise Control (ACC)", web: "Web development", adhoc: "Ad-hoc networks & HMI" },
    tap: "View details",
    modal: { context: "Context", objectives: "Objectives", technologies: "Technologies used", results: "Results", whatICanDo: "What I can do with it", whatLearned: "What I learned", skillsUsed: "Tasks carried out", content: "Program content", excellence: "Points of excellence", report: "Open the full report", caseStudy: "View full case study & captures", verify: "Verify certificate", close: "Close" },
    pwd: { title: "Protected report", text: "This document is confidential. Enter the administrator password to access it.", label: "Password", submit: "Open report", cancel: "Cancel", wrong: "Incorrect password.", wrongLeft: "Incorrect password. Attempts left: ", locked: "Too many attempts. Try again in 30 seconds.", noCrypto: "Verification unavailable: open the site over HTTPS." },
    form: { name: "Your name", email: "Your email", message: "Your message", fillAll: "Please fill in all required fields.", badEmail: "Please enter a valid email address.", sent: "Message sent. Thank you!", failed: "Sending failed. Try again or reach me on WhatsApp." },
    pj: { back: "Back to portfolio", prev: "Previous project", next: "Next project", notfound: "Project not found", notfoundText: "This project does not exist or has moved." },
    theme: "Switch between dark and light mode",
    skills: "skills"
  }
};

/* ---------- 2. FORMATIONS ---------- */
const FORMATIONS = [
  {
    id: "fstf", icon: "fa-graduation-cap", img: "assets/fstf.jpeg", mono: "FSTF",
    fr: {
      date: "2024 – 2026", place: "Faculté des Sciences et Techniques de Fès (USMBA)",
      title: "Diplôme d'ingénieur d'État — Systèmes Intelligents, Communicants et Mobiles (SICoM)",
      intro: "Formation d'ingénieur en réseaux, qualité de service (QoS), télécommunications, transmission optique, IoT et sécurité des réseaux.",
      details: ["Réseaux et protocoles : adressage, routage, commutation", "Qualité de service (QoS) et supervision des réseaux", "Télécommunications : radiofréquences, faisceaux hertziens, transmission", "Transmission optique : fibre optique, réseaux PON/GPON", "IoT, systèmes embarqués et conception numérique (FPGA)", "Sécurité des réseaux", "Projet de fin d'études en entreprise chez ACLS (Casablanca, partenaire Huawei HALP), mars – juin 2026"],
      excellence: ["La FST de Fès fait partie de l'USMBA (Université Sidi Mohamed Ben Abdellah), classée numéro 1 au Maroc depuis plusieurs années, notamment selon le classement international Times Higher Education (THE)", "Formation d'ingénieur d'État avec forte dimension pratique et projets en entreprise"]
    },
    en: {
      date: "2024 – 2026", place: "Faculty of Sciences and Technology of Fez (USMBA)",
      title: "State engineering degree — Intelligent, Communicating and Mobile Systems (SICoM)",
      intro: "Engineering program in networks, quality of service (QoS), telecommunications, optical transmission, IoT and network security.",
      details: ["Networks and protocols: addressing, routing, switching", "Quality of service (QoS) and network monitoring", "Telecommunications: radio frequency, microwave links, transmission", "Optical transmission: optical fiber, PON/GPON networks", "IoT, embedded systems and digital design (FPGA)", "Network security", "Final-year project in industry at ACLS (Casablanca, Huawei HALP partner), March – June 2026"],
      excellence: ["FST Fez is part of USMBA (Sidi Mohamed Ben Abdellah University), ranked number 1 in Morocco for several years, notably in the international Times Higher Education (THE) ranking", "State engineering program with a strong hands-on focus and industry projects"]
    }
  },
  {
    id: "fstt", icon: "fa-book", img: "assets/logos/fstt.png", mono: "FSTT",
    fr: {
      date: "2021 – 2024", place: "FST Tanger (Université Abdelmalek Essaâdi)",
      title: "Licence en Génie Électrique et Systèmes Industriels",
      intro: "Formation de base en électricité, électronique et systèmes industriels, avec de nombreux projets pratiques.",
      details: ["Électronique analogique et numérique, électronique de puissance", "Automatisme et programmation d'automates, supervision SCADA", "Systèmes embarqués et microcontrôleurs", "Stage PFE chez Renault Tanger (avril – juin 2024)"],
      excellence: ["La FST de Tanger est une faculté de l'emblématique Université Abdelmalek Essaâdi (UAE) de Tanger-Tétouan", "Vie associative et clubs techniques actifs (robotique, avionique), concours d'innovation"]
    },
    en: {
      date: "2021 – 2024", place: "FST Tangier (Abdelmalek Essaâdi University)",
      title: "Bachelor's in Electrical Engineering and Industrial Systems",
      intro: "Foundation program in electricity, electronics and industrial systems, with many hands-on projects.",
      details: ["Analog and digital electronics, power electronics", "Automation and PLC programming, SCADA supervision", "Embedded systems and microcontrollers", "Final-year internship at Renault Tangier (April – June 2024)"],
      excellence: ["FST Tangier is a faculty of the emblematic Abdelmalek Essaâdi University (UAE) of Tangier-Tetouan", "Active student life and technical clubs (robotics, avionics), innovation contests"]
    }
  },
  {
    id: "ltn", icon: "fa-book-open", img: "assets/logos/ltnasl.jpeg", mono: "LTN",
    fr: {
      date: "2018 – 2021", place: "Lycée Technique National Aboubacar Sangoulé Lamizana (LTN ASL)",
      title: "Série F2 — Électronique",
      intro: "Le lycée technique d'excellence du Burkina Faso, où j'ai construit mes bases en électronique.",
      details: ["Électronique analogique et numérique", "Électrotechnique et mesures électriques", "Travaux pratiques et réalisation de montages", "Dessin technique et physique appliquée"],
      excellence: ["Lycée technique d'excellence, numéro 1 au Burkina Faso", "Sélection exigeante et culture de la rigueur technique"]
    },
    en: {
      date: "2018 – 2021", place: "Aboubacar Sangoulé Lamizana National Technical High School (LTN ASL)",
      title: "F2 track — Electronics",
      intro: "Burkina Faso's technical school of excellence, where I built my foundations in electronics.",
      details: ["Analog and digital electronics", "Electrical engineering and electrical measurements", "Practical work and circuit building", "Technical drawing and applied physics"],
      excellence: ["Technical high school of excellence, number 1 in Burkina Faso", "Demanding selection and a culture of technical rigor"]
    }
  }
];

/* ---------- 3. EXPÉRIENCES ---------- */
const EXPERIENCES = [
  {
    id: "acls", img: "assets/acls_logo.jpg", icon: "fa-network-wired", telecom: true,
    technologies: ["Huawei eNSP", "OSPF / IS-IS / BGP", "MSTP / VRRP / LACP", "Firewall USG6000", "WLAN Fit AP + AC / CAPWAP", "VRP"],
    fr: {
      date: "Mars 2026 – Juin 2026", role: "PFE — Ingénieur Réseaux Campus", company: "ACLS, Casablanca (partenaire Huawei HALP)",
      bullets: [
        "Conception d'une architecture réseau campus 3 niveaux (Core–Aggregation–Access) sur technologies Huawei",
        "Validation modulaire de 8 laboratoires eNSP : routage OSPF/IS-IS/BGP, haute disponibilité MSTP/VRRP/LACP, firewall USG6000, WLAN centralisé Fit AP/AC",
        "Intégration complète : double cœur, cluster firewall actif/passif, redondance de passerelle et connectivité WAN via BGP",
        "39/39 tests de validation et 14/14 tests d'intégration réussis (100 %), soutenance le 26 juin 2026"
      ],
      results: ["Architecture campus sans point de défaillance unique", "Basculements de redondance en moins de 3 s (LACP, VRRP, MSTP)", "Roaming WLAN inter-contrôleur sans perte de paquet (0 % de perte)"],
      detail: "Projet de fin d'études réalisé chez ACLS (Atlantic Consulting & Learning Services), partenaire de formation agréé Huawei (HALP) basé à Casablanca. L'objectif était de concevoir, valider puis intégrer une infrastructure réseau campus complète (connectivité, haute disponibilité, sécurité et mobilité) en suivant une démarche progressive de validation modulaire avant intégration.\n\nHuit laboratoires ont d'abord été réalisés sous Huawei eNSP pour valider chaque brique : routage interne (OSPF multi-aires, IS-IS) et inter-domaines (BGP avec Route Reflector et politiques MED), prévention des boucles et équilibrage de charge par VLAN (STP/RSTP/MSTP), redondance de passerelle (VRRP), agrégation de liens (Eth-Trunk/LACP), politiques de sécurité inter-zones sur firewall Huawei USG6000, et architecture WLAN centralisée (contrôleur AC, Fit AP, CAPWAP, roaming intra et inter-WAC).\n\nCes briques ont ensuite été intégrées dans une architecture campus hiérarchique complète, avec double cœur, cluster de firewalls en haute disponibilité (synchronisation HRP) et connectivité WAN via BGP. Plusieurs scénarios de panne ont été simulés (lien, switch, firewall, routeur de bordure) pour valider la résilience, avec 100 % de réussite sur les 39 tests modulaires et les 14 tests d'intégration."
    },
    en: {
      date: "Mar 2026 – Jun 2026", role: "Final-year project — Campus Network Engineer", company: "ACLS, Casablanca (Huawei HALP partner)",
      bullets: [
        "Design of a 3-tier campus network architecture (Core–Aggregation–Access) on Huawei technology",
        "Modular validation of 8 eNSP labs: OSPF/IS-IS/BGP routing, MSTP/VRRP/LACP high availability, USG6000 firewall, centralized Fit AP/AC WLAN",
        "Full integration: dual core, active/passive firewall cluster, gateway redundancy and WAN connectivity via BGP",
        "39/39 validation tests and 14/14 integration tests passed (100%), defended on June 26, 2026"
      ],
      results: ["Campus architecture with no single point of failure", "Redundancy failover under 3 s (LACP, VRRP, MSTP)", "Seamless inter-controller WLAN roaming (0% packet loss)"],
      detail: "Final-year project completed at ACLS (Atlantic Consulting & Learning Services), a Huawei Authorized Learning Partner (HALP) based in Casablanca. The goal was to design, validate and integrate a complete campus network infrastructure (connectivity, high availability, security and mobility) following a progressive modular-validation-then-integration approach.\n\nEight labs were first built under Huawei eNSP to validate each building block: internal routing (multi-area OSPF, IS-IS) and inter-domain routing (BGP with a Route Reflector and MED policies), loop prevention and per-VLAN load balancing (STP/RSTP/MSTP), gateway redundancy (VRRP), link aggregation (Eth-Trunk/LACP), inter-zone security policies on a Huawei USG6000 firewall, and a centralized WLAN architecture (AC controller, Fit APs, CAPWAP, intra- and inter-WAC roaming).\n\nThese blocks were then integrated into a complete hierarchical campus architecture, with a dual core, a high-availability firewall cluster (HRP synchronization) and WAN connectivity via BGP. Several failure scenarios were simulated (link, switch, firewall and border-router outages) to validate resilience, reaching a 100% pass rate across the 39 modular tests and 14 integration tests."
    }
  },
  {
    id: "telecel", img: "assets/Telecel.jpeg", icon: "fa-tower-broadcast", telecom: true,
    fr: {
      date: "Août 2025 – Sept 2025", role: "Stage PFA", company: "Telecel Faso", technologies: ["Aviat CTR", "Modems radio", "FH / FO", "Mesures de liaison"],
      bullets: ["Compréhension des réseaux de télécommunication chez un opérateur", "Étude des systèmes de transmission et de la sécurité FH/FO", "Configuration et test des modems radio et CTR Aviat Networks", "Mesures et analyse de performance des liaisons"],
      detail: "Immersion opérateur chez Telecel Faso, sur la partie transmission du réseau : compréhension de bout en bout d'une liaison FH/FO, manipulation d'équipements Aviat Networks et prise en main des procédures de mesure et de contrôle qualité utilisées en exploitation."
    },
    en: {
      date: "Aug 2025 – Sept 2025", role: "Internship", company: "Telecel Faso", technologies: ["Aviat CTR", "Radio modems", "FH / FO", "Link measurements"],
      bullets: ["Understanding of a telecom operator's network", "Study of FH/FO transmission systems and security", "Configuration and testing of radio modems and Aviat Networks CTR units", "Link performance measurement and analysis"],
      detail: "Operator-side immersion at Telecel Faso on the transmission side of the network: end-to-end understanding of a microwave/fiber link, hands-on work with Aviat Networks equipment, and exposure to the measurement and quality-control procedures used in live operations."
    }
  },
  {
    id: "renault", img: "assets/Renault.jpeg", icon: "fa-car", telecom: false,
    fr: {
      date: "Avril – Juin 2024", role: "Stage PFE", company: "Renault Tanger", technologies: ["Automates programmables", "Protections électriques", "Commutation principale / secours"],
      bullets: ["Protection des circuits contre les microcoupures, dimensionnement et installation", "Conception de circuits de commutation entre alimentation principale et secours", "Installation de dispositifs de sécurité sur ligne de production", "Programmation d'automates pour la gestion du basculement"],
      detail: "Projet de fin d'études sur la continuité d'alimentation d'une ligne de production automobile : dimensionnement des protections, conception d'un circuit de commutation automatique et programmation de la logique de basculement sur automate."
    },
    en: {
      date: "Apr – Jun 2024", role: "Final-year internship", company: "Renault Tangier", technologies: ["PLCs", "Electrical protection", "Main / backup power switching"],
      bullets: ["Circuit protection against micro-outages, sizing and installation", "Design of switching circuits between main and backup power", "Installation of safety devices on a production line", "PLC programming for switchover management"],
      detail: "Final-year project on power continuity for an automotive production line: sizing protective circuits, designing an automatic switching circuit, and programming the switchover logic on a PLC."
    }
  },
  {
    id: "sonabel", img: "assets/Sonabel.png", icon: "fa-bolt", telecom: false,
    fr: {
      date: "Juillet – Août 2023", role: "Stage d'initiation", company: "SONABEL DCET", technologies: ["Protections", "Contrôle-commande", "Compteurs industriels", "SCADA"],
      bullets: ["Intervention sur les systèmes de protections et de contrôle-commande", "Mesures et exploitation des compteurs électriques industriels", "Suivi et maintenance des transformateurs de puissance", "Supervision de systèmes SCADA"],
      detail: "Premier contact avec l'exploitation d'un réseau électrique : protections, contrôle-commande, instrumentation de mesure et supervision SCADA au sein de la Société Nationale d'Électricité du Burkina Faso."
    },
    en: {
      date: "Jul – Aug 2023", role: "Introductory internship", company: "SONABEL DCET", technologies: ["Protection", "Control-command", "Industrial meters", "SCADA"],
      bullets: ["Work on protection and control-command systems", "Measurement and operation of industrial electricity meters", "Monitoring and maintenance of power transformers", "SCADA system supervision"],
      detail: "First hands-on exposure to power grid operations: protection relays, control-command, measurement instrumentation and SCADA supervision at Burkina Faso's national electricity utility."
    }
  }
];

/* ---------- 4. COMPÉTENCES ---------- */
const SKILLS = [
  { id: "sk-fh", group: "telecom",
    fr: { title: "Faisceaux hertziens (FH)", short: "Configuration, mesure et exploitation de liaisons radio point-à-point.", detail: "Capable de configurer et tester des liaisons hertziennes point-à-point (ODU/IDU), de régler l'alignement d'antenne, de lire un bilan de liaison et d'interpréter les indicateurs de qualité (RSL, BER, disponibilité) pour diagnostiquer une dégradation." },
    en: { title: "Microwave links (FH)", short: "Configuration, measurement and operation of point-to-point radio links.", detail: "Able to configure and test point-to-point microwave links (ODU/IDU), align antennas, read a link budget and interpret quality indicators (RSL, BER, availability) to diagnose degradation." } },
  { id: "sk-fo", group: "telecom",
    fr: { title: "Fibre optique & réseaux PON/GPON", short: "Dimensionnement, budget optique et modélisation sous OptiSystem.", detail: "Modélisation de réseaux optiques passifs (PON/GPON) : calcul de budget optique, prise en compte de l'atténuation, de la dispersion et du couplage, dimensionnement selon les normes ITU-T à l'aide d'OptiSystem et MATLAB." },
    en: { title: "Optical fiber & PON/GPON networks", short: "Sizing, optical budget and modeling in OptiSystem.", detail: "Modeling of passive optical networks (PON/GPON): optical budget calculation, accounting for attenuation, dispersion and coupling, sizing against ITU-T standards using OptiSystem and MATLAB." } },
  { id: "sk-ip", group: "telecom",
    fr: { title: "Adressage & routage IP", short: "Conception et simulation de réseaux IP sous Cisco Packet Tracer.", detail: "Conception de plans d'adressage, configuration de routage et de VLAN, et simulation de topologies réseau sous Cisco Packet Tracer, avec une bonne compréhension des principes de commutation et de segmentation." },
    en: { title: "IP addressing & routing", short: "Design and simulation of IP networks in Cisco Packet Tracer.", detail: "Design of addressing plans, routing and VLAN configuration, and network topology simulation in Cisco Packet Tracer, with solid understanding of switching and segmentation principles." } },
  { id: "sk-rf", group: "telecom",
    fr: { title: "Radiofréquences & planification cellulaire", short: "Ingénierie radio et couverture avec Atoll.", detail: "Utilisation d'Atoll pour la planification de couverture radio, l'analyse de zones de service et l'étude de paramètres RF ; bonne maîtrise des applications radiofréquences en environnement de transmission." },
    en: { title: "Radio frequency & cellular planning", short: "Radio engineering and coverage planning with Atoll.", detail: "Use of Atoll for radio coverage planning, service area analysis and RF parameter study; solid grasp of radio frequency applications in a transmission environment." } },
  { id: "sk-mes", group: "telecom",
    fr: { title: "Mesures & instrumentation RF", short: "Analyse de performance et diagnostic de liaisons de transport.", detail: "Utilisation d'analyseurs et d'outils de mesure pour caractériser une liaison de transport, relever les niveaux de signal et de bruit, et établir un diagnostic de performance exploitable en exploitation." },
    en: { title: "RF measurement & instrumentation", short: "Performance analysis and diagnostics on transport links.", detail: "Use of analyzers and measurement tools to characterize a transport link, record signal and noise levels, and produce a performance diagnosis usable in live operations." } },
  { id: "sk-advroute", group: "telecom",
    fr: { title: "Routage dynamique avancé", short: "OSPF multi-aires, IS-IS et BGP inter-domaines.", detail: "Conception et validation de réseaux hiérarchiques OSPF multi-aires, étude comparative avec IS-IS, et mise en œuvre de BGP (eBGP/iBGP, Route Reflector, politiques MED/local-preference) pour l'interconnexion avec des réseaux externes, sous Huawei eNSP." },
    en: { title: "Advanced dynamic routing", short: "Multi-area OSPF, IS-IS and inter-domain BGP.", detail: "Design and validation of hierarchical multi-area OSPF networks, comparative study with IS-IS, and implementation of BGP (eBGP/iBGP, Route Reflector, MED/local-preference policies) for interconnection with external networks, under Huawei eNSP." } },
  { id: "sk-ha", group: "telecom",
    fr: { title: "Haute disponibilité & commutation", short: "MSTP, VRRP et agrégation de liens LACP.", detail: "Déploiement de MSTP pour l'élimination des boucles et l'équilibrage de charge par VLAN, VRRP pour la redondance de passerelle, et Eth-Trunk/LACP pour l'agrégation et la résilience des liaisons, avec des temps de basculement inférieurs à 3 secondes." },
    en: { title: "High availability & switching", short: "MSTP, VRRP and LACP link aggregation.", detail: "Deployment of MSTP for loop elimination and per-VLAN load balancing, VRRP for gateway redundancy, and Eth-Trunk/LACP for link aggregation and resilience, achieving failover times under 3 seconds." } },
  { id: "sk-firewall", group: "telecom",
    fr: { title: "Sécurité périmétrique", short: "Firewall Huawei USG, zones de confiance et clustering.", detail: "Configuration de politiques de sécurité inter-zones (Trust/DMZ/Untrust) sur firewall Huawei USG6000, NAT et déploiement d'un cluster actif/passif avec synchronisation automatique des règles (HRP)." },
    en: { title: "Perimeter security", short: "Huawei USG firewall, trust zones and clustering.", detail: "Configuration of inter-zone security policies (Trust/DMZ/Untrust) on a Huawei USG6000 firewall, NAT, and deployment of an active/passive cluster with automatic rule synchronization (HRP)." } },
  { id: "sk-wlan", group: "telecom",
    fr: { title: "Architecture WLAN centralisée", short: "Contrôleur AC, points d'accès Fit AP, CAPWAP et roaming.", detail: "Déploiement d'une architecture WLAN centralisée Huawei (contrôleur AC, points d'accès Fit AP, protocole CAPWAP) avec gestion du roaming intra- et inter-WAC pour garantir la mobilité des utilisateurs sans coupure de session." },
    en: { title: "Centralized WLAN architecture", short: "AC controller, Fit access points, CAPWAP and roaming.", detail: "Deployment of a centralized Huawei WLAN architecture (AC controller, Fit access points, CAPWAP protocol) with intra- and inter-WAC roaming management to guarantee seamless user mobility." } },
  { id: "sk-qos", group: "telecom",
    fr: { title: "Supervision & qualité de service", short: "Suivi de disponibilité et de QoS sur liaisons de transmission.", detail: "Sensibilisé aux enjeux de disponibilité et de qualité de service sur des liaisons de transmission critiques, et à la manière de les traduire en indicateurs suivis en exploitation." },
    en: { title: "Monitoring & quality of service", short: "Availability and QoS tracking on transmission links.", detail: "Familiar with availability and quality-of-service concerns on critical transmission links, and with translating them into indicators tracked in operations." } },

  { id: "sk-emb", group: "polyvalence",
    fr: { title: "Systèmes embarqués", short: "STM32, ESP32, Arduino, de la conception au prototypage.", detail: "Développement sur microcontrôleurs STM32, ESP32 et Arduino : gestion de périphériques, communication série, acquisition de capteurs et intégration dans des systèmes IoT complets." },
    en: { title: "Embedded systems", short: "STM32, ESP32, Arduino, from design to prototyping.", detail: "Development on STM32, ESP32 and Arduino microcontrollers: peripheral management, serial communication, sensor acquisition and integration into complete IoT systems." } },
  { id: "sk-fpga", group: "polyvalence",
    fr: { title: "FPGA & conception numérique", short: "Description VHDL et simulation ModelSim.", detail: "Conception de circuits numériques en VHDL, synthèse sous Quartus et vérification fonctionnelle sous ModelSim pour des applications de logique programmable." },
    en: { title: "FPGA & digital design", short: "VHDL description and ModelSim simulation.", detail: "Digital circuit design in VHDL, synthesis in Quartus and functional verification in ModelSim for programmable logic applications." } },
  { id: "sk-auto", group: "polyvalence",
    fr: { title: "Automatisation industrielle", short: "Programmation d'automates et supervision SCADA.", detail: "Programmation d'automates programmables, conception de logiques de commande et supervision de procédés via des systèmes SCADA en environnement industriel." },
    en: { title: "Industrial automation", short: "PLC programming and SCADA supervision.", detail: "PLC programming, control logic design and process supervision through SCADA systems in an industrial environment." } },
  { id: "sk-vision", group: "polyvalence",
    fr: { title: "Vision industrielle", short: "Traitement d'image avec OpenCV et Python.", detail: "Développement d'applications de contrôle qualité par vision : détection, classification et tri automatisé à l'aide d'OpenCV et Python sur Raspberry Pi." },
    en: { title: "Machine vision", short: "Image processing with OpenCV and Python.", detail: "Development of quality-control vision applications: detection, classification and automated sorting using OpenCV and Python on Raspberry Pi." } },
  { id: "sk-web", group: "polyvalence",
    fr: { title: "Développement web & mobile", short: "Spring Boot, React et bases de données relationnelles.", detail: "Conception d'applications web en architecture microservices avec Spring Boot et React, et modélisation de bases de données PostgreSQL." },
    en: { title: "Web & mobile development", short: "Spring Boot, React and relational databases.", detail: "Design of microservice web applications with Spring Boot and React, and PostgreSQL database modeling." } },
  { id: "sk-power", group: "polyvalence",
    fr: { title: "Électronique de puissance & contrôle-commande", short: "Protection, commutation et régulation industrielle.", detail: "Dimensionnement de protections électriques, conception de circuits de commutation et régulation de systèmes (PID) pour des applications industrielles et médicales." },
    en: { title: "Power electronics & control-command", short: "Protection, switching and industrial regulation.", detail: "Sizing of electrical protection, design of switching circuits and system regulation (PID) for industrial and medical applications." } },
  { id: "sk-ai", group: "polyvalence",
    fr: { title: "IA & IoT appliqués à l'industrie", short: "Capteurs connectés, alertes intelligentes et analytics.", detail: "Conception de systèmes IoT intégrant capteurs, connectivité et couches d'analyse pour générer des alertes intelligentes et un suivi de données en temps réel." },
    en: { title: "AI & IoT for industry", short: "Connected sensors, smart alerts and analytics.", detail: "Design of IoT systems combining sensors, connectivity and analysis layers to generate smart alerts and real-time data tracking." } },
  { id: "sk-prog", group: "polyvalence",
    fr: { title: "Programmation C/C++, Python, Java", short: "Langages transverses pour l'embarqué, la data et le web.", detail: "Pratique régulière de C/C++ pour l'embarqué, Python pour le traitement de données et la vision, et Java pour des applications logicielles structurées." },
    en: { title: "C/C++, Python, Java programming", short: "Cross-cutting languages for embedded, data and web.", detail: "Regular practice of C/C++ for embedded work, Python for data processing and vision, and Java for structured software applications." } }
];

/* ---------- 5. PROJETS ----------
   featured: true  -> affiché dans la grille principale
   featured: false -> uniquement dans la liste complète ("Voir tous les projets")
   report: "chemin.pdf" -> ajoute le bouton de rapport protégé par mot de passe
   media / context / objectives / technologies / results : optionnels                 */
const PROJECTS = [
  { id: "ipsec", cat: "telecom", featured: true, report: "reports/rapport_ipsec.pdf", caseStudyUrl: "project_ipsec.html",
    media: { type: "img", src: "images_projets_IPsec/fig_topologie_gns3.jpeg", fallback: "assets/images_projets_IPSec/fig_topologie_gns3.jpeg" },
    fr: { title: "VPN IPsec multisite Hub-and-Spoke (Cisco IOS)", date: "2025", desc: "Conception, déploiement et qualification sous Wireshark d'une topologie WAN chiffrée avec transit inter-agences (hairpinning).",
      context: "Projet technique personnel visant à interconnecter un siège et deux agences distantes via un opérateur public (FAI) simulé, sans routage privé préalable (RFC 1918).",
      objectives: ["Découplage strict entre l'underlay (liens point-à-point /30) et l'overlay (LAN d'entreprise)", "Configuration IKEv1 phase 1 (AES-256 / SHA-1 / DH2 / PSK) et IPsec ESP en mode tunnel", "Routage de transit inter-agences (hairpinning) orchestré sur le concentrateur central R1-HUB", "Audit Wireshark (protocole 50) et corrélation hexadécimale des SPI"],
      technologies: ["Cisco IOS c7200", "GNS3", "Wireshark", "IPsec ESP (Proto 50)", "IKEv1 / ISAKMP", "VPCS"],
      results: ["100 % de succès aux tests ICMP avec TTL=61 (traversée effective du hub central)", "0 erreur de commutation cryptographique (#send errors 0, #recv errors 0)", "Plans d'adressage privés totalement invisibles sur le cœur de réseau opérateur"] },
    en: { title: "Hub-and-Spoke multisite IPsec VPN (Cisco IOS)", date: "2025", desc: "Design, deployment and Wireshark audit of a secure WAN topology with inter-branch transit routing (hairpinning).",
      context: "Personal engineering project interconnecting a HQ and two remote branches across a simulated public ISP network without private RFC 1918 routes.",
      objectives: ["Strict separation between underlay (/30 point-to-point) and private overlay", "IKEv1 phase 1 (AES-256 / SHA-1 / DH2 / PSK) and IPsec ESP tunnel mode configuration", "Inter-spoke transit routing (hairpinning) orchestrated on the central R1-HUB router", "Wireshark audit (protocol 50) and SPI hexadecimal matching"],
      technologies: ["Cisco IOS c7200", "GNS3", "Wireshark", "IPsec ESP (Proto 50)", "IKEv1 / ISAKMP", "VPCS"],
      results: ["100% ICMP delivery with TTL=61 (confirming traversal of the central hub)", "0 cryptographic forwarding errors (#send errors 0, #recv errors 0)", "Private subnets fully concealed on the ISP transit links"] } },
  { id: "pon", cat: "telecom", featured: true, report: "reports/rapport_pon.pdf",
    media: { type: "img", src: "assets/TP/TP_FO0.png" },
    fr: { title: "Réseau optique PON", date: "2023", desc: "Étude et modélisation d'un réseau optique PON avec calcul de budget optique, dispersion et couplage.", context: "Étude et modélisation d'un réseau GPON dans un cadre académique.", objectives: ["Dimensionnement d'un réseau GPON", "Calcul de budget optique", "Simulation des performances"], technologies: ["OptiSystem", "MATLAB", "Normes ITU-T", "Fibres G.652"], results: ["Marge de budget : 28 dB", "Distance : 20 km", "Débit : 2,5 Gbit/s"] },
    en: { title: "Optical PON network", date: "2023", desc: "Study and modeling of a PON optical network with optical budget, dispersion and coupling calculations.", context: "Academic study and modeling of a GPON network.", objectives: ["Sizing a GPON network", "Optical budget calculation", "Performance simulation"], technologies: ["OptiSystem", "MATLAB", "ITU-T standards", "G.652 fiber"], results: ["Budget margin: 28 dB", "Distance: 20 km", "Throughput: 2.5 Gbit/s"] } },
  { id: "ctr", cat: "telecom", featured: true,
    media: { type: "img", src: "assets/imConfigCTR8312erODU.jpg" },
    fr: { title: "Configuration CTR 8312 Aviat Networks", date: "2025", desc: "Configuration d'un équipement de transmission pour assurer la qualité de service sur liaison FH et FO.", context: "Configuration d'un équipement de transmission Aviat Networks pour assurer la qualité de service d'une liaison FH/FO.", objectives: ["Configuration optimale du CTR", "Assurance de la qualité de service", "Tests de performance de la liaison"], technologies: ["CTR 8312 Aviat", "ODU/IDU", "Analyseurs RF"], results: ["QoS optimisée", "Disponibilité 99,9 %", "Latence réduite"] },
    en: { title: "CTR 8312 Aviat Networks configuration", date: "2025", desc: "Configuring a transmission unit to ensure quality of service on FH and FO links.", context: "Configuration of Aviat Networks transmission equipment to ensure quality of service on a microwave/fiber link.", objectives: ["Optimal CTR configuration", "Quality-of-service assurance", "Link performance testing"], technologies: ["CTR 8312 Aviat", "ODU/IDU", "RF analyzers"], results: ["Optimized QoS", "99.9% availability", "Reduced latency"] } },
  { id: "airsense", cat: "iot", featured: true,
    media: { type: "img", src: "assets/projets/imProjetAirSenseTech.jpg" },
    fr: { title: "AirSense Tech System", date: "2024 — Hackathon FST Fès", desc: "Contrôle en temps réel de la qualité de l'air dans une voiture, avec capteurs et interface connectée.", context: "Système embarqué de contrôle de la qualité de l'air en habitacle automobile.", objectives: ["Mesure multi-paramètres (CO2, particules, température)", "Alertes intelligentes", "Historique et analytics"], technologies: ["ESP32", "Capteurs MQ-135 / DHT22", "Python", "Application mobile"], results: ["Prix Hackathon", "Précision des mesures > 95 %", "Réponse en temps réel < 1 s"] },
    en: { title: "AirSense Tech System", date: "2024 — FST Fez Hackathon", desc: "Real-time air quality control for a car cabin, with sensors and a connected interface.", context: "Embedded system for in-car air quality control.", objectives: ["Multi-parameter measurement (CO2, particles, temperature)", "Smart alerts", "History and analytics"], technologies: ["ESP32", "MQ-135 / DHT22 sensors", "Python", "Mobile app"], results: ["Hackathon award", "Measurement accuracy > 95%", "Real-time response < 1 s"] } },

  /* ----- Autres projets (liste complète) ----- */
  { id: "solar", cat: "iot", featured: true,
    media: { type: "video", src: "assets/projets/vid_Projet_3S.mp4" },
    fr: { title: "Smart Solar System", date: "2024", desc: "Optimisation d'une installation solaire avec suivi et contrôle de performance en temps réel.", context: "Projet personnel de système solaire avec suivi automatique et supervision IoT.", objectives: ["Maximiser le rendement par tracking solaire", "Suivre la production en temps réel", "Créer une interface web de supervision", "Implémenter un stockage intelligent"], technologies: ["ESP32", "Arduino", "MQTT", "Node-RED", "HTML/CSS/JS"], results: ["Rendement amélioré de 35 %", "Suivi en temps réel via application web", "Autonomie complète du système"] },
    en: { title: "Smart Solar System", date: "2024", desc: "Optimization of a solar installation with real-time monitoring and performance control.", context: "Personal project: solar tracking system with IoT supervision.", objectives: ["Maximize yield through solar tracking", "Track production in real time", "Build a web supervision interface", "Implement smart storage"], technologies: ["ESP32", "Arduino", "MQTT", "Node-RED", "HTML/CSS/JS"], results: ["35% higher yield", "Real-time tracking via web app", "Fully autonomous system"] } },
  { id: "tri", cat: "auto", featured: true,
    media: { type: "video", src: "assets/projets/vid_chaine_de_tri.mp4" },
    fr: { title: "Chaîne de tri automatisée", date: "2023 — FST Tanger", desc: "Tri de pièces selon leur qualité via convoyeur, Raspberry Pi et caméra.", context: "Projet d'automatisme industriel : tri de pièces par vision.", objectives: ["Classification automatique par vision", "Tri par couleur et forme", "Contrôle qualité automatisé"], technologies: ["Raspberry Pi", "OpenCV", "Python", "Automate Siemens", "Convoyeur"], results: ["Précision de tri : 97 %", "Cadence : 30 pièces/min", "Réduction des erreurs humaines"] },
    en: { title: "Automated sorting line", date: "2023 — FST Tangier", desc: "Sorting parts by quality via conveyor, Raspberry Pi and camera.", context: "Industrial automation project: vision-based part sorting.", objectives: ["Automatic vision-based classification", "Sorting by color and shape", "Automated quality control"], technologies: ["Raspberry Pi", "OpenCV", "Python", "Siemens PLC", "Conveyor"], results: ["97% sorting accuracy", "30 parts/min throughput", "Reduced human error"] } },
  { id: "agv", cat: "iot", featured: true,
    media: { type: "video", src: "assets/projets/vid_RobotOrganisateur.mp4" },
    fr: { title: "AGV industriel (STM32)", date: "2024", desc: "Prototype d'AGV autonome à base de STM32, capable de suivre des rails et de transporter des charges.", context: "Prototype d'AGV autonome pour le transport de charges.", objectives: ["Navigation autonome", "Suivi de trajectoire", "Détection d'obstacles"], technologies: ["STM32F4", "Capteurs ultrason", "Encodeurs", "FreeRTOS", "C/C++"], results: ["Précision ± 2 cm", "Vitesse 0,8 m/s", "Charge max 5 kg"] },
    en: { title: "Industrial AGV (STM32)", date: "2024", desc: "Autonomous STM32-based AGV prototype able to follow rails and carry loads.", context: "Autonomous AGV prototype for load transport.", objectives: ["Autonomous navigation", "Trajectory tracking", "Obstacle detection"], technologies: ["STM32F4", "Ultrasonic sensors", "Encoders", "FreeRTOS", "C/C++"], results: ["± 2 cm accuracy", "0.8 m/s speed", "5 kg max load"] } },
  { id: "fpga", cat: "fpga", featured: false, report: "reports/rapport_fpga.pdf",
    fr: { title: "Projets FPGA et VHDL", date: "Académique", desc: "Conception de circuits numériques en VHDL, synthèse sous Quartus et vérification sous ModelSim.", technologies: ["VHDL", "Quartus", "ModelSim"] },
    en: { title: "FPGA and VHDL projects", date: "Academic", desc: "Digital circuit design in VHDL, synthesis in Quartus and verification in ModelSim.", technologies: ["VHDL", "Quartus", "ModelSim"] } },
  { id: "fsm", cat: "fsm", featured: false,
    fr: { title: "Machines à états finis (FSM)", date: "Académique", desc: "Modélisation et implémentation de machines à états finis (Moore/Mealy) en VHDL et en C embarqué.", technologies: ["VHDL", "C", "Diagrammes d'états"] },
    en: { title: "Finite state machines (FSM)", date: "Academic", desc: "Modeling and implementation of finite state machines (Moore/Mealy) in VHDL and embedded C.", technologies: ["VHDL", "C", "State diagrams"] } },
  { id: "instru", cat: "instru", featured: false,
    fr: { title: "Instrumentation, capteurs & LabVIEW", date: "Académique", desc: "Chaînes d'acquisition de capteurs, conditionnement du signal et supervision sous LabVIEW.", technologies: ["LabVIEW", "Capteurs", "Acquisition de données"] },
    en: { title: "Instrumentation, sensors & LabVIEW", date: "Academic", desc: "Sensor acquisition chains, signal conditioning and supervision in LabVIEW.", technologies: ["LabVIEW", "Sensors", "Data acquisition"] } },
  { id: "adas", cat: "adas", featured: false, report: "reports/rapport_adas_acc.pdf",
    fr: { title: "ADAS — Régulateur de vitesse adaptatif (ACC)", date: "Académique", desc: "Étude et simulation d'un régulateur de vitesse adaptatif : mesure de distance, loi de commande et gestion de la vitesse.", technologies: ["Matlab / Simulink", "Capteurs de distance", "Régulation"] },
    en: { title: "ADAS — Adaptive Cruise Control (ACC)", date: "Academic", desc: "Study and simulation of an adaptive cruise control: distance measurement, control law and speed management.", technologies: ["Matlab / Simulink", "Distance sensors", "Control"] } },
  { id: "bigdata", cat: "ia", featured: false, report: "reports/rapport_ia_bigdata.pdf",
    fr: { title: "IA & Big Data", date: "Académique", desc: "Traitement et analyse de données volumineuses et modèles d'apprentissage automatique.", technologies: ["Python", "Machine learning", "Analyse de données"] },
    en: { title: "AI & Big Data", date: "Academic", desc: "Processing and analysis of large datasets and machine-learning models.", technologies: ["Python", "Machine learning", "Data analysis"] } },
  { id: "web", cat: "web", featured: false,
    fr: { title: "Sites vitrines au Burkina Faso", date: "Projets personnels", desc: "Conception de sites web vitrines pour des structures au Burkina Faso.", technologies: ["HTML", "CSS", "JavaScript"] },
    en: { title: "Showcase websites in Burkina Faso", date: "Personal projects", desc: "Design of showcase websites for organizations in Burkina Faso.", technologies: ["HTML", "CSS", "JavaScript"] } },
  { id: "adhoc", cat: "adhoc", featured: false,
    fr: { title: "Réseaux Ad-hoc & IHM", date: "Académique", desc: "Étude de réseaux ad-hoc et conception d'une interface homme-machine de supervision.", technologies: ["Réseaux ad-hoc", "IHM", "Simulation"] },
    en: { title: "Ad-hoc networks & HMI", date: "Academic", desc: "Study of ad-hoc networks and design of a human-machine supervision interface.", technologies: ["Ad-hoc networks", "HMI", "Simulation"] } },
  { id: "ladder", cat: "auto", featured: false, report: "reports/rapport_automatisme_ladder.pdf",
    fr: { title: "Automatisme : ascenseur & convoyeur (Ladder)", date: "Académique", desc: "Programmation en langage Ladder d'un ascenseur et d'un convoyeur sur automate programmable.", technologies: ["Ladder", "Automate programmable", "Grafcet"] },
    en: { title: "Automation: elevator & conveyor (Ladder)", date: "Academic", desc: "Ladder-language programming of an elevator and a conveyor on a PLC.", technologies: ["Ladder", "PLC", "Grafcet"] } }
];

/* ---------- 6. OUTILS ---------- */
const TOOLS = [
  { group: "telecom", img: "assets/logos/logo_ensp_huawei.jpg", icon: "fa-diagram-project", fr: { name: "Huawei eNSP", detail: "Simulation d'architectures réseau Huawei : routeurs AR, switches S-series, firewall USG, contrôleur AC et points d'accès." }, en: { name: "Huawei eNSP", detail: "Simulation of Huawei network architectures: AR routers, S-series switches, USG firewall, AC controller and access points." } },
  { group: "telecom", img: "assets/logos/logo_firewall.jpg", icon: "fa-fire", fr: { name: "Firewall Huawei USG6000", detail: "Politiques de sécurité inter-zones, NAT et clustering actif/passif." }, en: { name: "Huawei USG6000 Firewall", detail: "Inter-zone security policies, NAT and active/passive clustering." } },
  { group: "telecom", img: "assets/logos/logo_ControleurWlan.png", icon: "fa-wifi", fr: { name: "Contrôleur WLAN Huawei (AC)", detail: "Gestion centralisée de points d'accès Fit AP via le protocole CAPWAP." }, en: { name: "Huawei WLAN Controller (AC)", detail: "Centralized management of Fit access points via the CAPWAP protocol." } },
  { group: "telecom", img: "assets/logos/im_atoll.png", icon: "fa-satellite-dish", fr: { name: "Atoll", detail: "Planification radio et ingénierie de couverture cellulaire." }, en: { name: "Atoll", detail: "Radio planning and cellular coverage engineering." } },
  { group: "telecom", img: "assets/logos/im_optisystem.jpeg", icon: "fa-diagram-project", fr: { name: "OptiSystem", detail: "Simulation de systèmes et réseaux optiques (PON, budget optique)." }, en: { name: "OptiSystem", detail: "Simulation of optical systems and networks (PON, optical budget)." } },
  { group: "telecom", img: "assets/logos/cisco_packet_tracer.jpeg", icon: "fa-route", fr: { name: "Cisco Packet Tracer", detail: "Conception et simulation de topologies réseau IP." }, en: { name: "Cisco Packet Tracer", detail: "Design and simulation of IP network topologies." } },
  { group: "telecom", img: "images_projets_IPsec/fig_wireshark_esp_capture.jpeg", icon: "fa-network-wired", fr: { name: "Wireshark", detail: "Inspection de trames, décodage ESP (IP 50) et corrélation des SPI cryptographiques." }, en: { name: "Wireshark", detail: "Packet inspection, ESP (IP 50) traffic decoding and cryptographic SPI correlation." } },

  { group: "polyvalence", img: "assets/logos/im_stm32.png", icon: "fa-microchip", fr: { name: "STM32", detail: "Développement sur microcontrôleurs STM32." }, en: { name: "STM32", detail: "Development on STM32 microcontrollers." } },
  { group: "polyvalence", img: "assets/logos/arduino.jpeg", icon: "fa-microchip", fr: { name: "Arduino", detail: "Prototypage rapide de systèmes embarqués." }, en: { name: "Arduino", detail: "Rapid prototyping of embedded systems." } },
  { group: "polyvalence", img: "assets/logos/esp32.jpg", icon: "fa-microchip", fr: { name: "ESP32", detail: "Microcontrôleur connecté pour applications IoT." }, en: { name: "ESP32", detail: "Connected microcontroller for IoT applications." } },
  { group: "polyvalence", img: "assets/logos/fpga.png", icon: "fa-microchip", fr: { name: "FPGA", detail: "Circuits logiques programmables." }, en: { name: "FPGA", detail: "Programmable logic circuits." } },
  { group: "polyvalence", img: "assets/logos/im_quartus.jpeg", icon: "fa-microchip", fr: { name: "Quartus", detail: "Synthèse et implémentation de designs FPGA." }, en: { name: "Quartus", detail: "Synthesis and implementation of FPGA designs." } },
  { group: "polyvalence", img: "assets/logos/vhdl.jpeg", icon: "fa-code", fr: { name: "VHDL", detail: "Description matérielle pour la conception numérique." }, en: { name: "VHDL", detail: "Hardware description for digital design." } },
  { group: "polyvalence", img: "assets/logos/keil_uvision5.jpeg", icon: "fa-laptop-code", fr: { name: "Keil uVision", detail: "Environnement de développement pour microcontrôleurs ARM." }, en: { name: "Keil uVision", detail: "IDE for ARM microcontroller development." } },
  { group: "polyvalence", img: "assets/logos/proteus.png", icon: "fa-bolt", fr: { name: "Proteus", detail: "Simulation de circuits électroniques." }, en: { name: "Proteus", detail: "Electronic circuit simulation." } },
  { group: "polyvalence", img: "assets/logos/im_matlab_simulink.jpg", icon: "fa-chart-line", fr: { name: "Matlab / Simulink", detail: "Modélisation et simulation de systèmes." }, en: { name: "Matlab / Simulink", detail: "System modeling and simulation." } },
  { group: "polyvalence", img: "assets/logos/modelsim.jpg", icon: "fa-microchip", fr: { name: "ModelSim", detail: "Simulation fonctionnelle de circuits numériques." }, en: { name: "ModelSim", detail: "Functional simulation of digital circuits." } },
  { group: "polyvalence", img: "assets/logos/im_python_java_c_cpp.jpg", icon: "fa-code", fr: { name: "C / C++ / Java / Python", detail: "Langages de programmation transverses." }, en: { name: "C / C++ / Java / Python", detail: "Cross-cutting programming languages." } },
  { group: "polyvalence", img: "assets/logos/im_html_css_js_php_sql.jpg", icon: "fa-laptop-code", fr: { name: "HTML / CSS / JS / PHP / SQL", detail: "Développement web front et back." }, en: { name: "HTML / CSS / JS / PHP / SQL", detail: "Front-end and back-end web development." } }
];

/* ---------- 7. CERTIFICATIONS ---------- */
const CERTS = [
  { group: "telecom", img: "assets/certifications/IPAddressingRoutingAndNetworkManagement.png", url: "",
    fr: { title: "IP Addressing, Routing & Network Management", detail: "Fondamentaux de l'adressage IP, du routage et de la gestion de réseaux d'entreprise." },
    en: { title: "IP Addressing, Routing & Network Management", detail: "Fundamentals of IP addressing, routing and enterprise network management." } },
  { group: "telecom", img: "assets/certifications/Radio_Frequency_Applications.png", url: "",
    fr: { title: "Radio Frequency Applications", detail: "Principes et applications des systèmes radiofréquences." },
    en: { title: "Radio Frequency Applications", detail: "Principles and applications of radio frequency systems." } },
  { group: "polyvalence", img: "assets/certifications/canEtCanFD.png", url: "",
    fr: { title: "CAN & CAN FD Protocol", detail: "Fonctionnement des bus de communication CAN et CAN FD en environnement embarqué." },
    en: { title: "CAN & CAN FD Protocol", detail: "Operation of CAN and CAN FD communication buses in embedded environments." } },
  { group: "polyvalence", img: "assets/certifications/MPLAB_Harmony_v3_Fundamentals.png", url: "",
    fr: { title: "MPLAB Harmony v3 Fundamentals", detail: "Développement embarqué avec le framework MPLAB Harmony v3." },
    en: { title: "MPLAB Harmony v3 Fundamentals", detail: "Embedded development with the MPLAB Harmony v3 framework." } },
  { group: "polyvalence", img: "assets/certifications/MPU_System_and_PCB_Design_Pitfalls_and_Solutions.png", url: "",
    fr: { title: "MPU System & PCB Design", detail: "Pièges courants et bonnes pratiques de conception de systèmes à microprocesseur et de PCB." },
    en: { title: "MPU System & PCB Design", detail: "Common pitfalls and best practices for microprocessor system and PCB design." } },
  { group: "polyvalence", img: "assets/certifications/pcb.png", url: "",
    fr: { title: "High-Speed PCB Design", detail: "Conception de circuits imprimés pour signaux à haute vitesse." },
    en: { title: "High-Speed PCB Design", detail: "Printed circuit board design for high-speed signals." } },
  { group: "polyvalence", img: "assets/certifications/fpga1.png", url: "",
    fr: { title: "Microchip PolarFire® FPGA", detail: "Prise en main des FPGA PolarFire de Microchip." },
    en: { title: "Microchip PolarFire® FPGA", detail: "Getting started with Microchip PolarFire FPGAs." } }
];

/* ---------- 8. DISTINCTIONS, ASSOCIATIF, LANGUES, INTÉRÊTS ---------- */
const AWARDS = [
  { icon: "fa-trophy",
    fr: { title: "2ᵉ Prix de l'innovation — JEJA AEBM Mohammedia 2022", detail: "Distinction obtenue pour un projet innovant présenté devant un jury, qui récompense l'esprit d'initiative et la capacité à transformer une idée en prototype." },
    en: { title: "2nd Innovation Prize — JEJA AEBM Mohammedia 2022", detail: "Award earned for an innovative project presented to a jury, recognizing initiative and the ability to turn an idea into a prototype." } },
  { icon: "fa-award",
    fr: { title: "Mention Excellente — Innovation Day, FST Tanger 2022", detail: "Mention du jury pour la qualité technique et la présentation d'un projet lors de la journée de l'innovation de la FST de Tanger." },
    en: { title: "Excellence Mention — Innovation Day, FST Tangier 2022", detail: "Jury mention for the technical quality and presentation of a project at the FST Tangier innovation day." } },
  { icon: "fa-graduation-cap",
    fr: { title: "Lauréat du programme Excellence Link Up Africa — Enabel", detail: "Sélectionné parmi les lauréats d'un programme d'excellence soutenu par Enabel, qui accompagne des étudiants africains à fort potentiel." },
    en: { title: "Laureate, Link Up Africa Excellence Program — Enabel", detail: "Selected among the laureates of an excellence program supported by Enabel, which supports high-potential African students." } },
  { icon: "fa-flask",
    fr: { title: "Hackathon de l'automobile — FST Fès 2024", detail: "Conception en équipe, en temps limité, du système AirSense Tech de contrôle de la qualité de l'air en habitacle, récompensé par un prix." },
    en: { title: "Automotive Hackathon — FST Fez 2024", detail: "Team design, under time pressure, of the AirSense Tech in-cabin air quality system, which won an award." } }
];

const ASSOC = [
  { icon: "fa-users",
    fr: { title: "Secrétaire Général Adjoint du BE de l'AEBM Tanger", date: "2023/2024", detail: "Coordination des activités du bureau exécutif de l'Association des Étudiants Burkinabè au Maroc (section Tanger) : organisation des réunions, suivi des actions et liaison entre les membres et les partenaires." },
    en: { title: "Deputy Secretary General, AEBM Tangier", date: "2023/2024", detail: "Coordination of the executive board of the Association of Burkinabe Students in Morocco (Tangier chapter): meeting organization, action follow-up and liaison between members and partners." } },
  { icon: "fa-robot",
    fr: { title: "Membre du Club Robotique & Avionique, FST Tanger", date: "2023/2024", detail: "Participation à des projets de robotique et d'avionique au sein du club étudiant : conception, prototypage et travail en équipe sur des réalisations techniques." },
    en: { title: "Member, Robotics & Avionics Club, FST Tangier", date: "2023/2024", detail: "Involvement in robotics and avionics projects within the student club: design, prototyping and teamwork on technical builds." } },
  { icon: "fa-people-group",
    fr: { title: "Chargé aux affaires culturelles et sportives, Union des Étudiants Internationaux (FST Fès)", date: "2024/2025", detail: "Organisation d'événements culturels et sportifs pour la communauté étudiante internationale : mobilisation des étudiants, logistique et animation." },
    en: { title: "Cultural & Sports Officer, International Students Union (FST Fez)", date: "2024/2025", detail: "Organization of cultural and sports events for the international student community: student mobilization, logistics and animation." } },
  { icon: "fa-industry",
    fr: { title: "Membre du Club Génie Industriel et du Club Sportif", date: "2024/2025", detail: "Participation active aux activités techniques et sportives des deux clubs." },
    en: { title: "Member, Industrial Engineering Club & Sports Club", date: "2024/2025", detail: "Active participation in the technical and sports activities of both clubs." } },
  { icon: "fa-futbol",
    fr: { title: "Chargé aux affaires sportives, CESAM Fès", date: "2024/2025", detail: "Organisation d'activités sportives pour la communauté estudiantine du CESAM : tournois, planification et coordination des équipes." },
    en: { title: "Sports Officer, CESAM Fez", date: "2024/2025", detail: "Organization of sports activities for the CESAM student community: tournaments, planning and team coordination." } }
];

const LANGS = [
  { fr: "Français — Courant", en: "French — Fluent" },
  { fr: "Anglais — Professionnel", en: "English — Professional" },
  { fr: "Espagnol — Notions", en: "Spanish — Basic" },
  { fr: "Mooré / Dioula — Courant", en: "Mooré / Dioula — Fluent" }
];

const HOBBIES = [
  { fr: "Football & Athlétisme", en: "Football & Athletics" },
  { fr: "Robotique & IA", en: "Robotics & AI" },
  { fr: "Voyages & Découverte", en: "Travel & Discovery" },
  { fr: "Culture africaine & événements étudiants", en: "African culture & student events" }
];

/* ---------- 9. LIEN VERS LA PAGE D'UN PROJET ----------
   Chaque projet a sa page : project.html?id=<id>. Si le projet a sa propre page HTML
   (caseStudyUrl, ex. project_ipsec.html), c'est celle-ci qui est utilisée. */
function projectUrl(p) {
  return p.caseStudyUrl || "project.html?id=" + encodeURIComponent(p.id);
}
