/* ==========================================================================
   PORTFOLIO MAHMOUD ABASS SAWADOGO — SCRIPT PRINCIPAL (script.js)
   Sommaire :
   1. DONNÉES BILINGUES (UI & Dictionnaires)
   2. DONNÉES DU PARCOURS (Formations, Expériences)
   3. DONNÉES TECHNIQUES (Compétences, Projets, Outils, Certifications)
   4. DISTINCTIONS, ASSOCIATIF, LANGUES & INTÉRÊTS
   5. ÉTAT GLOBAL & GESTION DES ERREURS MÉDIA (Fallbacks)
   6. MOTEUR DE RENDU (Génération dynamique du DOM)
   7. GESTIONNAIRE DE FENÊTRE MODALE (Détails & Redirections)
   8. SÉLECTEURS DE LANGUE & THÈMES (Dark / Light)
   9. NAVIGATION, DÉFILEMENT & ANIMATIONS (Navbar, Spy, Typing)
   10. VALIDATION & ENVOI DU FORMULAIRE DE CONTACT
   11. INITIALISATION & CHARGEMENT (Boot & Loader)
   ========================================================================== */

/* ==========================================================================
   1. DONNÉES BILINGUES (UI & Dictionnaires FR / EN)
   Source de vérité unique pour les textes d'interface
   ========================================================================== */
const UI = {
  fr: {
    nav: { profil: "Profil", formations: "Formations", experiences: "Expériences", competences: "Compétences", projets: "Projets", outils: "Outils", certifications: "Certifications", contact: "Contact" },
    hero: {
      eyebrow: "Ouvert aux opportunités — CDI / CDD, Réseaux & Télécoms",
      cv: "Télécharger le CV",
      contact: "Me contacter",
      role: "Ingénieur en <strong>Réseaux, Télécommunications & Transmission</strong>",
      sub: "Faisceaux hertziens, fibre optique, radiofréquences et routage IP — avec une polyvalence technique en systèmes embarqués et automatisme industriel."
    },
    profil: { eyebrow: "01 — Profil", title: "Profil", stat1: "Faisceaux & fibre", stat2: "Adressage & routage", stat3: "Mesures & RF" },
    formations: { eyebrow: "02 — Parcours", title: "Formations" },
    experiences: { eyebrow: "03 — Terrain", title: "Expériences professionnelles" },
    competences: { eyebrow: "04 — Expertise", title: "Compétences", desc: "Un cœur de compétences en réseaux et télécommunications, complété par une polyvalence technique développée sur d'autres domaines de l'ingénierie." },
    projets: { eyebrow: "05 — Réalisations", title: "Projets académiques & personnels" },
    outils: { eyebrow: "06 — Boîte à outils", title: "Outils techniques" },
    certifications: { eyebrow: "07 — Preuves", title: "Licences & certifications" },
    recompenses: { eyebrow: "08 — Distinctions", title: "Récompenses & distinctions" },
    associatif: { eyebrow: "09 — Engagement", title: "Expériences associatives" },
    langues: { eyebrow: "10 — Complément", title: "Langues & centres d'intérêt", langTitle: "Langues", hobbyTitle: "Centres d'intérêt" },
    contact: { eyebrow: "11 — Contact", title: "Contact", send: "Envoyer" },
    groups: { telecom: "Réseaux & Télécommunications", polyvalence: "Polyvalence Technique" },
    filters: { all: "Tous" },
    filterLabels: { telecom: "Télécoms", iot: "IoT & Embarqué", automatisme: "Automatisme", ia: "IA & Vision", energie: "Énergie", electronique: "Électronique", informatique: "Informatique industrielle" },
    tap: "Cliquer pour les détails",
    modal: {
      context: "Contexte",
      objectives: "Objectifs",
      technologies: "Technologies utilisées",
      results: "Résultats",
      whatICanDo: "Ce que je sais faire",
      relatedTools: "Outils associés",
      verify: "Vérifier le certificat",
      whatLearned: "Ce que j'y ai appris",
      skillsUsed: "Compétences mobilisées",
      detail: "Détails"
    },
    formPlaceholders: { name: "Votre nom", email: "Votre email", message: "Votre message..." },
    formMsg: { fillAll: "Veuillez remplir tous les champs requis.", badEmail: "Veuillez entrer un email valide." }
  },
  en: {
    nav: { profil: "Profile", formations: "Education", experiences: "Experience", competences: "Skills", projets: "Projects", outils: "Tools", certifications: "Certifications", contact: "Contact" },
    hero: {
      eyebrow: "Open to opportunities — full-time / fixed-term, Networks & Telecom",
      cv: "Download CV",
      contact: "Get in touch",
      role: "Engineer in <strong>Networks, Telecommunications & Transmission</strong>",
      sub: "Microwave links, optical fiber, radio frequency and IP routing — with cross-domain expertise in embedded systems and industrial automation."
    },
    profil: { eyebrow: "01 — Profile", title: "Profile", stat1: "Microwave & fiber", stat2: "Addressing & routing", stat3: "RF measurements" },
    formations: { eyebrow: "02 — Path", title: "Education" },
    experiences: { eyebrow: "03 — Field work", title: "Professional experience" },
    competences: { eyebrow: "04 — Expertise", title: "Skills", desc: "A core of network and telecommunications expertise, complemented by cross-domain technical versatility built across other engineering fields." },
    projets: { eyebrow: "05 — Work", title: "Academic & personal projects" },
    outils: { eyebrow: "06 — Toolbox", title: "Technical tools" },
    certifications: { eyebrow: "07 — Proof", title: "Licenses & certifications" },
    recompenses: { eyebrow: "08 — Recognition", title: "Awards & distinctions" },
    associatif: { eyebrow: "09 — Involvement", title: "Extracurricular experience" },
    langues: { eyebrow: "10 — Beyond work", title: "Languages & interests", langTitle: "Languages", hobbyTitle: "Interests" },
    contact: { eyebrow: "11 — Contact", title: "Contact", send: "Send" },
    groups: { telecom: "Networks & Telecommunications", polyvalence: "Technical Versatility" },
    filters: { all: "All" },
    filterLabels: { telecom: "Telecom", iot: "IoT & Embedded", automatisme: "Automation", ia: "AI & Vision", energie: "Energy", electronique: "Electronics", informatique: "Industrial computing" },
    tap: "Click for details",
    modal: {
      context: "Context",
      objectives: "Objectives",
      technologies: "Technologies used",
      results: "Results",
      whatICanDo: "What I can do with it",
      relatedTools: "Related tools",
      verify: "Verify certificate",
      whatLearned: "What I learned",
      skillsUsed: "Skills involved",
      detail: "Details"
    },
    formPlaceholders: { name: "Your name", email: "Your email", message: "Your message..." },
    formMsg: { fillAll: "Please fill in all required fields.", badEmail: "Please enter a valid email." }
  }
};

/* ==========================================================================
   2. DONNÉES DU PARCOURS (Formations & Expériences)
   ========================================================================== */
const FORMATIONS = [
  {
    icon: "fa-graduation-cap",
    fr: { date: "2024 – Présent", place: "Faculté des Sciences et Techniques de Fès", title: "Cycle Ingénieur — Systèmes Intelligents, Communicants et Mobiles (SICoM)" },
    en: { date: "2024 – Present", place: "Faculty of Sciences and Technology, Fez", title: "Engineering degree — Intelligent, Communicating & Mobile Systems" }
  },
  {
    icon: "fa-book",
    fr: { date: "2021 – 2024", place: "FST Tanger", title: "Licence en Génie Électrique et Systèmes Industriels" },
    en: { date: "2021 – 2024", place: "FST Tangier", title: "Bachelor's in Electrical Engineering and Industrial Systems" }
  },
  {
    icon: "fa-book-open",
    fr: { date: "2018 – 2021", place: "Lycée Technique National A. S. Lamizana", title: "Série F2 — Électronique" },
    en: { date: "2018 – 2021", place: "A. S. Lamizana National Technical High School", title: "F2 track — Electronics" }
  }
];

const EXPERIENCES = [
  {
    id: "acls",
    img: "assets/acls_logo.jpg",
    icon: "fa-network-wired",
    domains: ["telecom"],
    featured: true,
    fr: {
      date: "Mars 2026 – Juin 2026",
      org: "PFE — Ingénieur Réseaux Campus, ACLS (Casablanca, Huawei HALP)",
      bullets: [
        "Conception d'une architecture réseau campus 3 niveaux (Core–Aggregation–Access) sur technologies Huawei",
        "Validation modulaire de 8 laboratoires eNSP : routage OSPF/IS-IS/BGP, haute disponibilité MSTP/VRRP/LACP, firewall USG6000, WLAN centralisé Fit AP/AC",
        "Intégration complète : double cœur, cluster firewall actif/passif, redondance de passerelle et connectivité WAN via BGP",
        "39/39 tests de validation et 14/14 tests d'intégration réussis (100%) — soutenance le 26 juin 2026"
      ],
      technologies: ["Huawei eNSP", "OSPF / IS-IS / BGP", "MSTP / VRRP / LACP", "Firewall USG6000", "WLAN Fit AP + AC / CAPWAP", "VRP"],
      results: [
        "Architecture campus sans point de défaillance unique",
        "Basculements de redondance en moins de 3 s (LACP, VRRP, MSTP)",
        "Roaming WLAN inter-contrôleur sans perte de paquet (0% packet loss)"
      ],
      detail: "Projet de fin d'études réalisé chez ACLS (Atlantic Consulting & Learning Services), partenaire de formation agréé Huawei (HALP) basé à Casablanca. L'objectif était de concevoir, valider puis intégrer une infrastructure réseau campus complète — connectivité, haute disponibilité, sécurité et mobilité — en suivant une démarche progressive de validation modulaire avant intégration.\n\nDans un premier temps, huit laboratoires ont été réalisés sous Huawei eNSP pour valider individuellement chaque brique technologique : routage interne (OSPF multi-aires, IS-IS) et inter-domaines (BGP avec Route Reflector et politiques MED), prévention des boucles et équilibrage de charge par VLAN (STP/RSTP/MSTP), redondance de passerelle (VRRP), agrégation de liens (Eth-Trunk/LACP), politiques de sécurité inter-zones sur firewall Huawei USG6000, et architecture WLAN centralisée (contrôleur AC, points d'accès Fit AP, protocole CAPWAP, roaming intra et inter-WAC).\n\nCes briques ont ensuite été intégrées au sein d'une architecture campus hiérarchique complète, avec double cœur, cluster de firewalls en haute disponibilité (synchronisation HRP) et connectivité WAN via BGP. Plusieurs scénarios de panne ont été simulés (coupure de lien, de switch, de firewall, de routeur de bordure) pour valider la résilience de l'ensemble, avec un taux de réussite de 100% sur les 39 tests de validation modulaire et les 14 tests d'intégration."
    },
    en: {
      date: "Mar 2026 – Jun 2026",
      org: "Final-year internship — Campus Network Engineer, ACLS (Casablanca, Huawei HALP)",
      bullets: [
        "Design of a 3-tier campus network architecture (Core–Aggregation–Access) on Huawei technology",
        "Modular validation of 8 eNSP labs: OSPF/IS-IS/BGP routing, MSTP/VRRP/LACP high availability, USG6000 firewall, centralized Fit AP/AC WLAN",
        "Full integration: dual core, active/passive firewall cluster, gateway redundancy and WAN connectivity via BGP",
        "39/39 validation tests and 14/14 integration tests passed (100%) — defended on June 26, 2026"
      ],
      technologies: ["Huawei eNSP", "OSPF / IS-IS / BGP", "MSTP / VRRP / LACP", "USG6000 Firewall", "WLAN Fit AP + AC / CAPWAP", "VRP"],
      results: [
        "Campus architecture with no single point of failure",
        "Redundancy failover under 3s (LACP, VRRP, MSTP)",
        "Seamless inter-controller WLAN roaming (0% packet loss)"
      ],
      detail: "Final-year project completed at ACLS (Atlantic Consulting & Learning Services), a Huawei Authorized Learning Partner (HALP) based in Casablanca. The goal was to design, validate and integrate a complete campus network infrastructure — connectivity, high availability, security and mobility — following a progressive modular-validation-then-integration approach.\n\nEight labs were first built under Huawei eNSP to validate each technology brick individually: internal routing (multi-area OSPF, IS-IS) and inter-domain routing (BGP with a Route Reflector and MED policies), loop prevention and per-VLAN load balancing (STP/RSTP/MSTP), gateway redundancy (VRRP), link aggregation (Eth-Trunk/LACP), inter-zone security policies on a Huawei USG6000 firewall, and a centralized WLAN architecture (AC controller, Fit access points, CAPWAP protocol, intra- and inter-WAC roaming).\n\nThese bricks were then integrated into a complete hierarchical campus architecture, with a dual core, a high-availability firewall cluster (HRP synchronization) and WAN connectivity via BGP. Several failure scenarios were simulated (link, switch, firewall and border-router outages) to validate overall resilience, reaching a 100% pass rate across the 39 modular validation tests and 14 integration tests."
    }
  },
  {
    id: "telecel",
    img: "assets/Telecel.jpeg",
    icon: "fa-tower-broadcast",
    domains: ["telecom"],
    fr: {
      date: "Août 2025 – Sept 2025",
      org: "Stage PFA — Telecel Faso",
      bullets: [
        "Compréhension des réseaux de télécommunication chez un opérateur",
        "Étude des systèmes de transmission et sécurité FH/FO",
        "Configuration et test des modems radio et CTR Aviat Networks",
        "Mesures et analyse de performance des liaisons"
      ],
      detail: "Immersion opérateur au sein de Telecel Faso, sur la partie transmission du réseau : compréhension de bout en bout d'une liaison FH/FO, manipulation d'équipements Aviat Networks et prise en main des procédures de mesure et de contrôle qualité utilisées en exploitation."
    },
    en: {
      date: "Aug 2025 – Sept 2025",
      org: "Internship — Telecel Faso",
      bullets: [
        "Understanding of a telecom operator's network",
        "Study of FH/FO transmission systems and security",
        "Configuration and testing of radio modems and Aviat Networks CTR units",
        "Link performance measurement and analysis"
      ],
      detail: "Operator-side immersion at Telecel Faso on the transmission side of the network: end-to-end understanding of a microwave/fiber link, hands-on work with Aviat Networks equipment, and exposure to the measurement and quality-control procedures used in live operations."
    }
  },
  {
    id: "renault",
    img: "assets/Renault.jpeg",
    icon: "fa-car",
    domains: ["automatisme", "electronique", "informatique"],
    fr: {
      date: "Avril – Juin 2024",
      org: "Stage PFE — Renault Tanger",
      bullets: [
        "Protection des circuits contre microcoupures, dimensionnement et installation",
        "Conception de circuits de commutation entre alimentation principale et secours",
        "Installation de dispositifs de sécurité sur ligne de production",
        "Programmation automates pour gestion du basculement"
      ],
      detail: "Projet de fin d'études sur la continuité d'alimentation d'une ligne de production automobile : dimensionnement des protections, conception d'un circuit de commutation automatique et programmation de la logique de basculement sur automate."
    },
    en: {
      date: "Apr – Jun 2024",
      org: "Final-year internship — Renault Tangier",
      bullets: [
        "Circuit protection against micro-outages, sizing and installation",
        "Design of switching circuits between main and backup power",
        "Installation of safety devices on a production line",
        "PLC programming for switchover management"
      ],
      detail: "Final-year project on power continuity for an automotive production line: sizing protective circuits, designing an automatic switching circuit, and programming the switchover logic on a PLC."
    }
  },
  {
    id: "sonabel",
    img: "assets/Sonabel.png",
    icon: "fa-bolt",
    domains: ["electronique", "automatisme"],
    fr: {
      date: "Juillet – Août 2023",
      org: "Stage d'initiation — SONABEL DCET",
      bullets: [
        "Intervention sur les systèmes de protections et contrôle-commande",
        "Mesures et exploitation des compteurs électriques industriels",
        "Suivi et maintenance des transformateurs de puissance",
        "Supervision de systèmes SCADA"
      ],
      detail: "Premier contact avec l'exploitation d'un réseau électrique : protections, contrôle-commande, instrumentation de mesure et supervision SCADA au sein de la Société Nationale d'Électricité du Burkina Faso."
    },
    en: {
      date: "Jul – Aug 2023",
      org: "Introductory internship — SONABEL DCET",
      bullets: [
        "Work on protection and control-command systems",
        "Measurement and operation of industrial electricity meters",
        "Monitoring and maintenance of power transformers",
        "SCADA system supervision"
      ],
      detail: "First hands-on exposure to power grid operations: protection relays, control-command, measurement instrumentation and SCADA supervision at Burkina Faso's national electricity utility."
    }
  }
];

/* ==========================================================================
   3. COMPÉTENCES TECHNIQUES (SKILLS)
   ========================================================================== */
const SKILLS = [
  // --- Groupe 1 : Réseaux & Télécommunications ---
  {
    id: "sk-fh", group: "telecom", icon: "fa-tower-broadcast",
    fr: { title: "Faisceaux hertziens (FH)", short: "Configuration, mesure et exploitation de liaisons radio point-à-point.", detail: "Capable de configurer et tester des liaisons hertziennes point-à-point (ODU/IDU), de régler l'alignement d'antenne, de lire un bilan de liaison et d'interpréter les indicateurs de qualité (RSL, BER, disponibilité) pour diagnostiquer une dégradation." },
    en: { title: "Microwave links (FH)", short: "Configuration, measurement and operation of point-to-point radio links.", detail: "Able to configure and test point-to-point microwave links (ODU/IDU), align antennas, read a link budget and interpret quality indicators (RSL, BER, availability) to diagnose degradation." }
  },
  {
    id: "sk-fo", group: "telecom", icon: "fa-diagram-project",
    fr: { title: "Fibre optique & réseaux PON/GPON", short: "Dimensionnement, budget optique et modélisation sous OptiSystem.", detail: "Modélisation de réseaux optiques passifs (PON/GPON) : calcul de budget optique, prise en compte de l'atténuation, de la dispersion et du couplage, dimensionnement selon les normes ITU-T à l'aide d'OptiSystem et MATLAB." },
    en: { title: "Optical fiber & PON/GPON networks", short: "Sizing, optical budget and modeling in OptiSystem.", detail: "Modeling of passive optical networks (PON/GPON): optical budget calculation, accounting for attenuation, dispersion and coupling, sizing against ITU-T standards using OptiSystem and MATLAB." }
  },
  {
    id: "sk-ip", group: "telecom", icon: "fa-route",
    fr: { title: "Adressage & routage IP", short: "Conception et simulation de réseaux IP sous Cisco Packet Tracer.", detail: "Conception de plans d'adressage, configuration de routage et de VLAN, et simulation de topologies réseau sous Cisco Packet Tracer, avec une bonne compréhension des principes de commutation et de segmentation." },
    en: { title: "IP addressing & routing", short: "Design and simulation of IP networks in Cisco Packet Tracer.", detail: "Design of addressing plans, routing and VLAN configuration, and network topology simulation in Cisco Packet Tracer, with solid understanding of switching and segmentation principles." }
  },
  {
    id: "sk-rf", group: "telecom", icon: "fa-satellite-dish",
    fr: { title: "Radiofréquences & planification cellulaire", short: "Ingénierie radio et couverture avec Atoll.", detail: "Utilisation d'Atoll pour la planification de couverture radio, l'analyse de zones de service et l'étude de paramètres RF ; bonne maîtrise des applications radiofréquences en environnement de transmission." },
    en: { title: "Radio frequency & cellular planning", short: "Radio engineering and coverage planning with Atoll.", detail: "Use of Atoll for radio coverage planning, service area analysis and RF parameter study; solid grasp of radio frequency applications in a transmission environment." }
  },
  {
    id: "sk-mes", group: "telecom", icon: "fa-wave-square",
    fr: { title: "Mesures & instrumentation RF", short: "Analyse de performance et diagnostic de liaisons de transport.", detail: "Utilisation d'analyseurs et d'outils de mesure pour caractériser une liaison de transport, relever les niveaux de signal et de bruit, et établir un diagnostic de performance exploitable en exploitation." },
    en: { title: "RF measurement & instrumentation", short: "Performance analysis and diagnostics on transport links.", detail: "Use of analyzers and measurement tools to characterize a transport link, record signal and noise levels, and produce a performance diagnosis usable in live operations." }
  },
  {
    id: "sk-advroute", group: "telecom", icon: "fa-code-branch",
    fr: { title: "Routage dynamique avancé", short: "OSPF multi-aires, IS-IS et BGP inter-domaines.", detail: "Conception et validation de réseaux hiérarchiques OSPF multi-aires, étude comparative avec IS-IS, et mise en œuvre de BGP (eBGP/iBGP, Route Reflector, politiques MED/local-preference) pour l'interconnexion avec des réseaux externes, sous Huawei eNSP." },
    en: { title: "Advanced dynamic routing", short: "Multi-area OSPF, IS-IS and inter-domain BGP.", detail: "Design and validation of hierarchical multi-area OSPF networks, comparative study with IS-IS, and implementation of BGP (eBGP/iBGP, Route Reflector, MED/local-preference policies) for interconnection with external networks, under Huawei eNSP." }
  },
  {
    id: "sk-ha", group: "telecom", icon: "fa-shield-halved",
    fr: { title: "Haute disponibilité & commutation", short: "MSTP, VRRP et agrégation de liens LACP.", detail: "Déploiement de MSTP pour l'élimination des boucles et l'équilibrage de charge par VLAN, VRRP pour la redondance de passerelle, et Eth-Trunk/LACP pour l'agrégation et la résilience des liaisons, avec des temps de basculement inférieurs à 3 secondes." },
    en: { title: "High availability & switching", short: "MSTP, VRRP and LACP link aggregation.", detail: "Deployment of MSTP for loop elimination and per-VLAN load balancing, VRRP for gateway redundancy, and Eth-Trunk/LACP for link aggregation and resilience, achieving failover times under 3 seconds." }
  },
  {
    id: "sk-firewall", group: "telecom", icon: "fa-fire",
    fr: { title: "Sécurité périmétrique", short: "Firewall Huawei USG, zones de confiance et clustering.", detail: "Configuration de politiques de sécurité inter-zones (Trust/DMZ/Untrust) sur firewall Huawei USG6000, NAT et déploiement d'un cluster actif/passif avec synchronisation automatique des règles (HRP)." },
    en: { title: "Perimeter security", short: "Huawei USG firewall, trust zones and clustering.", detail: "Configuration of inter-zone security policies (Trust/DMZ/Untrust) on a Huawei USG6000 firewall, NAT, and deployment of an active/passive cluster with automatic rule synchronization (HRP)." }
  },
  {
    id: "sk-wlan", group: "telecom", icon: "fa-wifi",
    fr: { title: "Architecture WLAN centralisée", short: "Contrôleur AC, points d'accès Fit AP, CAPWAP et roaming.", detail: "Déploiement d'une architecture WLAN centralisée Huawei (contrôleur AC, points d'accès Fit AP, protocole CAPWAP) avec gestion du roaming intra- et inter-WAC pour garantir la mobilité des utilisateurs sans coupure de session." },
    en: { title: "Centralized WLAN architecture", short: "AC controller, Fit access points, CAPWAP and roaming.", detail: "Deployment of a centralized Huawei WLAN architecture (AC controller, Fit access points, CAPWAP protocol) with intra- and inter-WAC roaming management to guarantee seamless user mobility." }
  },
  {
    id: "sk-qos", group: "telecom", icon: "fa-signal",
    fr: { title: "Supervision & qualité de service", short: "Suivi de disponibilité et de QoS sur liaisons de transmission.", detail: "Sensibilisé aux enjeux de disponibilité et de qualité de service sur des liaisons de transmission critiques, et à la manière de les traduire en indicateurs suivis en exploitation." },
    en: { title: "Monitoring & quality of service", short: "Availability and QoS tracking on transmission links.", detail: "Familiar with availability and quality-of-service concerns on critical transmission links, and with translating them into indicators tracked in operations." }
  },

  // --- Groupe 2 : Polyvalence Technique ---
  {
    id: "sk-emb", group: "polyvalence", icon: "fa-microchip",
    fr: { title: "Systèmes embarqués", short: "STM32, ESP32, Arduino — de la conception au prototypage.", detail: "Développement sur microcontrôleurs STM32, ESP32 et Arduino : gestion de périphériques, communication série, acquisition de capteurs et intégration dans des systèmes IoT complets." },
    en: { title: "Embedded systems", short: "STM32, ESP32, Arduino — from design to prototyping.", detail: "Development on STM32, ESP32 and Arduino microcontrollers: peripheral management, serial communication, sensor acquisition and integration into complete IoT systems." }
  },
  {
    id: "sk-fpga", group: "polyvalence", icon: "fa-microchip",
    fr: { title: "FPGA & conception numérique", short: "Description VHDL et simulation ModelSim.", detail: "Conception de circuits numériques en VHDL, synthèse sous Quartus et vérification fonctionnelle sous ModelSim pour des applications de logique programmable." },
    en: { title: "FPGA & digital design", short: "VHDL description and ModelSim simulation.", detail: "Digital circuit design in VHDL, synthesis in Quartus and functional verification in ModelSim for programmable logic applications." }
  },
  {
    id: "sk-auto", group: "polyvalence", icon: "fa-gear",
    fr: { title: "Automatisation industrielle", short: "Programmation d'automates et supervision SCADA.", detail: "Programmation d'automates programmables, conception de logiques de commande et supervision de procédés via des systèmes SCADA en environnement industriel." },
    en: { title: "Industrial automation", short: "PLC programming and SCADA supervision.", detail: "PLC programming, control logic design and process supervision through SCADA systems in an industrial environment." }
  },
  {
    id: "sk-vision", group: "polyvalence", icon: "fa-eye",
    fr: { title: "Vision industrielle", short: "Traitement d'image avec OpenCV et Python.", detail: "Développement d'applications de contrôle qualité par vision : détection, classification et tri automatisé à l'aide d'OpenCV et Python sur Raspberry Pi." },
    en: { title: "Machine vision", short: "Image processing with OpenCV and Python.", detail: "Development of quality-control vision applications: detection, classification and automated sorting using OpenCV and Python on Raspberry Pi." }
  },
  {
    id: "sk-web", group: "polyvalence", icon: "fa-laptop-code",
    fr: { title: "Développement web & mobile", short: "Spring Boot, React et bases de données relationnelles.", detail: "Conception d'applications web en architecture microservices avec Spring Boot et React, et modélisation de bases de données PostgreSQL." },
    en: { title: "Web & mobile development", short: "Spring Boot, React and relational databases.", detail: "Design of microservice web applications with Spring Boot and React, and PostgreSQL database modeling." }
  },
  {
    id: "sk-power", group: "polyvalence", icon: "fa-bolt",
    fr: { title: "Électronique de puissance & contrôle-commande", short: "Protection, commutation et régulation industrielle.", detail: "Dimensionnement de protections électriques, conception de circuits de commutation et régulation de systèmes (PID) pour des applications industrielles et médicales." },
    en: { title: "Power electronics & control-command", short: "Protection, switching and industrial regulation.", detail: "Sizing of electrical protection, design of switching circuits and system regulation (PID) for industrial and medical applications." }
  },
  {
    id: "sk-ai", group: "polyvalence", icon: "fa-robot",
    fr: { title: "IA & IoT appliqués à l'industrie", short: "Capteurs connectés, alertes intelligentes et analytics.", detail: "Conception de systèmes IoT intégrant capteurs, connectivité et couches d'analyse pour générer des alertes intelligentes et un suivi de données en temps réel." },
    en: { title: "AI & IoT for industry", short: "Connected sensors, smart alerts and analytics.", detail: "Design of IoT systems combining sensors, connectivity and analysis layers to generate smart alerts and real-time data tracking." }
  },
  {
    id: "sk-prog", group: "polyvalence", icon: "fa-code",
    fr: { title: "Programmation C/C++, Python, Java", short: "Langages transverses pour l'embarqué, la data et le web.", detail: "Pratique régulière de C/C++ pour l'embarqué, Python pour le traitement de données et la vision, et Java pour des applications logicielles structurées." },
    en: { title: "C/C++, Python, Java programming", short: "Cross-cutting languages for embedded, data and web.", detail: "Regular practice of C/C++ for embedded work, Python for data processing and vision, and Java for structured software applications." }
  }
];

/* ==========================================================================
   4. RÉALISATIONS & PROJETS (PROJECTS)
   ========================================================================== */
const PROJECTS = [
  /* ------------------------------------------------------------------------
     [NOUVEAU] PROJET : VPN IPsec Multisite Hub-and-Spoke (Cisco IOS)
     Étude de cas dédiée : project-ipsec.html
     ------------------------------------------------------------------------ */
  {
    id: "ipsec",
    domains: ["telecom"],
    featured: true,
    media: { type: "img", src: "images_projets_IPsec/fig_topologie_gns3.jpeg" },
    caseStudyUrl: "project-ipsec.html",
    fr: {
      title: "VPN IPsec Multisite Hub-and-Spoke (Cisco IOS)",
      date: "2025",
      desc: "Conception, déploiement et qualification métrologique sous Wireshark d'une topologie WAN chiffrée avec transit inter-agences (Hairpinning).",
      context: "Projet technique personnel visant à interconnecter un Siège et deux agences distantes via un opérateur public FAI simulé sans routage privé préalable (RFC 1918).",
      objectives: [
        "Découplage strict Underlay (liens point-à-point /30) et Overlay (LANs d'entreprise)",
        "Configuration IKEv1 Phase 1 (AES-256 / SHA-1 / DH2 / PSK) et IPsec ESP Mode Tunnel",
        "Routage de transit inter-agences (Hairpinning) orchestré sur le concentrateur central R1-HUB",
        "Audit spectral Wireshark (protocole 50) et corrélation matérielle hexadécimale des registres SPI"
      ],
      technologies: ["Cisco IOS c7200", "GNS3", "Wireshark", "IPsec ESP (Proto 50)", "IKEv1 / ISAKMP", "VPCS"],
      results: [
        "100% de succès aux tests applicatifs ICMP avec TTL=61 (traversée effective du Hub central)",
        "0 erreur de commutation cryptographique (#send errors 0, #recv errors 0)",
        "Invisibilité absolue des plans d'adressage privés d'entreprise sur le cœur de réseau opérateur"
      ]
    },
    en: {
      title: "Hub-and-Spoke Multisite IPsec VPN (Cisco IOS)",
      date: "2025",
      desc: "Design, deployment, and Wireshark packet capture audit of a secure WAN topology with inter-branch transit routing (Hairpinning).",
      context: "Personal engineering project interconnecting a HQ and two remote branches across a simulated hostile ISP public WAN without private RFC 1918 routes.",
      objectives: [
        "Strict separation between Underlay (/30 point-to-point) and private Overlay",
        "Configuration of IKEv1 Phase 1 (AES-256 / SHA-1 / DH2 / PSK) and IPsec ESP Tunnel Mode",
        "Inter-spoke transit routing (Hairpinning) orchestrated on the central R1-HUB router",
        "Wireshark packet capture audit (protocol 50) and SPI hexadecimal registry matching"
      ],
      technologies: ["Cisco IOS c7200", "GNS3", "Wireshark", "IPsec ESP (Proto 50)", "IKEv1 / ISAKMP", "VPCS"],
      results: [
        "100% ICMP delivery rate with TTL=61 (confirming 3-hop traversal through Hub)",
        "0 cryptographic forwarding errors (#send errors 0, #recv errors 0)",
        "Complete concealment of private RFC 1918 subnets on public transit links"
      ]
    }
  },

  /* ------------------------------------------------------------------------
     PROJETS EXISTANTS
     ------------------------------------------------------------------------ */
  {
    id: "ctr",
    domains: ["telecom"],
    featured: true,
    media: { type: "img", src: "assets/imConfigCTR8312erODU.jpg" },
    fr: {
      title: "Configuration CTR 8312 Aviat Network",
      date: "2025",
      desc: "Configuration de cet équipement pour assurer une bonne qualité de service en transmission FH et FO.",
      context: "Configuration d'un équipement de transmission Aviat Networks pour assurer la qualité de service d'une liaison FH/FO.",
      objectives: ["Configuration optimale du CTR", "Assurance de la qualité de service", "Tests de performance de la liaison"],
      technologies: ["CTR 8312 Aviat", "ODU/IDU", "Analyseurs RF"],
      results: ["QoS optimisée", "Disponibilité 99,9 %", "Latence réduite"]
    },
    en: {
      title: "CTR 8312 Aviat Network Configuration",
      date: "2025",
      desc: "Configuring this equipment to ensure quality of service on FH and FO transmission.",
      context: "Configuration of Aviat Networks transmission equipment to ensure quality of service on a microwave/fiber link.",
      objectives: ["Optimal CTR configuration", "Quality-of-service assurance", "Link performance testing"],
      technologies: ["CTR 8312 Aviat", "ODU/IDU", "RF analyzers"],
      results: ["Optimized QoS", "99.9% availability", "Reduced latency"]
    }
  },
  {
    id: "pon",
    domains: ["telecom"],
    featured: true,
    media: { type: "img", src: "assets/TP/TP_FO0.png" },
    fr: {
      title: "Réseau optique PON",
      date: "2023",
      desc: "Étude et modélisation d'un réseau optique PON avec calcul de budget optique, dispersion et couplage.",
      context: "Étude et modélisation d'un réseau GPON dans un cadre académique.",
      objectives: ["Dimensionnement d'un réseau GPON", "Calcul de budget optique", "Simulation des performances"],
      technologies: ["OptiSystem", "MATLAB", "Normes ITU-T", "Fibres G.652"],
      results: ["Marge de budget : 28 dB", "Distance : 20 km", "Débit : 2,5 Gbps"]
    },
    en: {
      title: "Optical PON network",
      date: "2023",
      desc: "Study and modeling of a PON optical network with optical budget, dispersion and coupling calculations.",
      context: "Academic study and modeling of a GPON network.",
      objectives: ["Sizing a GPON network", "Optical budget calculation", "Performance simulation"],
      technologies: ["OptiSystem", "MATLAB", "ITU-T standards", "G.652 fiber"],
      results: ["Budget margin: 28 dB", "Distance: 20 km", "Throughput: 2.5 Gbps"]
    }
  },
  {
    id: "solar",
    domains: ["iot", "energie"],
    media: { type: "video", src: "assets/projets/vid_Projet_3S.mp4" },
    fr: {
      title: "Smart Solar System",
      date: "2024",
      desc: "Système intelligent d'optimisation d'installation solaire avec suivi et contrôle de performance en temps réel.",
      context: "Projet personnel de développement d'un système solaire avec suivi automatique et supervision IoT.",
      objectives: ["Maximiser le rendement énergétique par tracking solaire", "Suivre la production en temps réel", "Créer une interface web de supervision", "Implémenter un stockage intelligent"],
      technologies: ["ESP32", "Arduino", "MQTT", "Node-RED", "HTML/CSS/JS"],
      results: ["Rendement amélioré de 35 %", "Suivi en temps réel via application web", "Autonomie complète du système"]
    },
    en: {
      title: "Smart Solar System",
      date: "2024",
      desc: "Smart optimization system for a solar installation with real-time monitoring and performance control.",
      context: "Personal project developing a solar tracking system with IoT supervision.",
      objectives: ["Maximize energy yield through solar tracking", "Track production in real time", "Build a web supervision interface", "Implement smart storage"],
      technologies: ["ESP32", "Arduino", "MQTT", "Node-RED", "HTML/CSS/JS"],
      results: ["35% higher yield", "Real-time tracking via web app", "Fully autonomous system"]
    }
  },
  {
    id: "airsense",
    domains: ["iot", "ia", "energie"],
    media: { type: "img", src: "assets/projets/imProjetAirSenseTech.jpg" },
    fr: {
      title: "AirSense Tech System",
      date: "2024 — Hackathon FST Fès",
      desc: "Système de contrôle en temps réel de la qualité de l'air dans une voiture, avec capteurs et interface connectée.",
      context: "Système embarqué de contrôle de qualité de l'air en habitacle automobile.",
      objectives: ["Mesure multi-paramètres (CO2, particules, température)", "Alertes intelligentes", "Historique et analytics"],
      technologies: ["ESP32", "Capteurs MQ-135 / DHT22", "Python", "Application mobile"],
      results: ["Prix Hackathon", "Précision des mesures > 95 %", "Réponse temps réel < 1 s"]
    },
    en: {
      title: "AirSense Tech System",
      date: "2024 — FST Fez Hackathon",
      desc: "Real-time air quality control system for a car cabin, with sensors and a connected interface.",
      context: "Embedded system for in-car air quality control.",
      objectives: ["Multi-parameter measurement (CO2, particles, temperature)", "Smart alerts", "History and analytics"],
      technologies: ["ESP32", "MQ-135 / DHT22 sensors", "Python", "Mobile app"],
      results: ["Hackathon award", "Measurement accuracy > 95%", "Real-time response < 1s"]
    }
  },
  {
    id: "tri",
    domains: ["iot", "automatisme"],
    media: { type: "video", src: "assets/projets/vid_chaine_de_tri.mp4" },
    fr: {
      title: "Chaîne de tri automatisée",
      date: "2023 — FST Tanger",
      desc: "Projet d'automatisme industriel : tri de pièces selon leur qualité via convoyeur, Raspberry Pi et caméra.",
      context: "Projet d'automatisme industriel : tri de pièces par vision.",
      objectives: ["Classification automatique par vision", "Tri par couleur et forme", "Contrôle qualité automatisé"],
      technologies: ["Raspberry Pi", "OpenCV", "Python", "Automate Siemens", "Convoyeur"],
      results: ["Précision de tri : 97 %", "Cadence : 30 pièces/min", "Réduction des erreurs humaines"]
    },
    en: {
      title: "Automated sorting line",
      date: "2023 — FST Tangier",
      desc: "Industrial automation project: sorting parts by quality via conveyor, Raspberry Pi and camera.",
      context: "Industrial automation project: vision-based part sorting.",
      objectives: ["Automatic vision-based classification", "Sorting by color and shape", "Automated quality control"],
      technologies: ["Raspberry Pi", "OpenCV", "Python", "Siemens PLC", "Conveyor"],
      results: ["97% sorting accuracy", "30 parts/min throughput", "Reduced human error"]
    }
  },
  {
    id: "agv",
    domains: ["iot", "automatisme"],
    media: { type: "video", src: "assets/projets/vid_RobotOrganisateur.mp4" },
    fr: {
      title: "AGV industriel (STM32)",
      date: "2024",
      desc: "Prototype d'AGV autonome à base de STM32, capable de suivre des rails et transporter des charges.",
      context: "Prototype d'AGV autonome pour le transport de charges.",
      objectives: ["Navigation autonome", "Suivi de trajectoire", "Détection d'obstacles"],
      technologies: ["STM32F4", "Capteurs ultrason", "Encodeurs", "FreeRTOS", "C/C++"],
      results: ["Précision ± 2 cm", "Vitesse 0,8 m/s", "Charge max 5 kg"]
    },
    en: {
      title: "Industrial AGV (STM32)",
      date: "2024",
      desc: "Autonomous AGV prototype based on STM32, able to follow rails and carry loads.",
      context: "Autonomous AGV prototype for load transport.",
      objectives: ["Autonomous navigation", "Trajectory tracking", "Obstacle detection"],
      technologies: ["STM32F4", "Ultrasonic sensors", "Encoders", "FreeRTOS", "C/C++"],
      results: ["± 2 cm accuracy", "0.8 m/s speed", "5 kg max load"]
    }
  }
];

/* ==========================================================================
   5. OUTILS & LOGICIELS (TOOLS)
   ========================================================================== */
const TOOLS = [
  // --- Outils Télécoms ---
  { group: "telecom", img: "assets/logos/logo_ensp_huawei.jpg", icon: "fa-diagram-project", fr: { name: "Huawei eNSP", detail: "Simulation d'architectures réseau Huawei : routeurs AR, switches S-series, firewall USG, contrôleur AC et points d'accès." }, en: { name: "Huawei eNSP", detail: "Simulation of Huawei network architectures: AR routers, S-series switches, USG firewall, AC controller and access points." } },
  { group: "telecom", img: "assets/logos/logo_firewall.jpg", icon: "fa-fire", fr: { name: "Firewall Huawei USG6000", detail: "Politiques de sécurité inter-zones, NAT et clustering actif/passif." }, en: { name: "Huawei USG6000 Firewall", detail: "Inter-zone security policies, NAT and active/passive clustering." } },
  { group: "telecom", img: "assets/logos/logo_ControleurWlan.png", icon: "fa-wifi", fr: { name: "Contrôleur WLAN Huawei (AC)", detail: "Gestion centralisée de points d'accès Fit AP via le protocole CAPWAP." }, en: { name: "Huawei WLAN Controller (AC)", detail: "Centralized management of Fit access points via the CAPWAP protocol." } },
  { group: "telecom", img: "assets/logos/im_atoll.png", icon: "fa-satellite-dish", fr: { name: "Atoll", detail: "Planification radio et ingénierie de couverture cellulaire." }, en: { name: "Atoll", detail: "Radio planning and cellular coverage engineering." } },
  { group: "telecom", img: "assets/logos/im_optisystem.jpeg", icon: "fa-diagram-project", fr: { name: "OptiSystem", detail: "Simulation de systèmes et réseaux optiques (PON, budget optique)." }, en: { name: "OptiSystem", detail: "Simulation of optical systems and networks (PON, optical budget)." } },
  { group: "telecom", img: "assets/logos/cisco_packet_tracer.jpeg", icon: "fa-route", fr: { name: "Cisco Packet Tracer", detail: "Conception et simulation de topologies réseau IP." }, en: { name: "Cisco Packet Tracer", detail: "Design and simulation of IP network topologies." } },
  { group: "telecom", img: "images_projets_IPsec/fig_wireshark_esp_capture.jpeg", icon: "fa-network-wired", fr: { name: "Wireshark", detail: "Analyse spectrale, inspection de trames ESP (IP 50) et corrélation de registres cryptographiques SPI." }, en: { name: "Wireshark", detail: "Packet inspection, ESP (IP 50) traffic decoding, and cryptographic SPI register correlation." } },

  // --- Outils Polyvalence & Embarqué ---
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

/* ==========================================================================
   6. CERTIFICATIONS, DISTINCTIONS & VIE ASSOCIATIVE
   ========================================================================== */
const CERTS = [
  {
    group: "telecom",
    img: "assets/certifications/IPAddressingRoutingAndNetworkManagement.png",
    fr: { title: "IP Addressing, Routing & Network Management", detail: "Fondamentaux de l'adressage IP, du routage et de la gestion de réseaux d'entreprise." },
    en: { title: "IP Addressing, Routing & Network Management", detail: "Fundamentals of IP addressing, routing and enterprise network management." }
  },
  {
    group: "telecom",
    img: "assets/certifications/Radio_Frequency_Applications.png",
    fr: { title: "Radio Frequency Applications", detail: "Principes et applications des systèmes radiofréquences." },
    en: { title: "Radio Frequency Applications", detail: "Principles and applications of radio frequency systems." }
  },
  {
    group: "polyvalence",
    img: "assets/certifications/canEtCanFD.png",
    fr: { title: "CAN & CAN FD Protocol", detail: "Fonctionnement des bus de communication CAN et CAN FD en environnement embarqué." },
    en: { title: "CAN & CAN FD Protocol", detail: "Operation of CAN and CAN FD communication buses in embedded environments." }
  },
  {
    group: "polyvalence",
    img: "assets/certifications/MPLAB_Harmony_v3_Fundamentals.png",
    fr: { title: "MPLAB Harmony v3 Fundamentals", detail: "Développement embarqué avec le framework MPLAB Harmony v3." },
    en: { title: "MPLAB Harmony v3 Fundamentals", detail: "Embedded development with the MPLAB Harmony v3 framework." }
  },
  {
    group: "polyvalence",
    img: "assets/certifications/MPU_System_and_PCB_Design_Pitfalls_and_Solutions.png",
    fr: { title: "MPU System & PCB Design", detail: "Pièges courants et bonnes pratiques de conception de systèmes à microprocesseur et de PCB." },
    en: { title: "MPU System & PCB Design", detail: "Common pitfalls and best practices for microprocessor system and PCB design." }
  },
  {
    group: "polyvalence",
    img: "assets/certifications/pcb.png",
    fr: { title: "High-Speed PCB Design", detail: "Conception de circuits imprimés pour signaux à haute vitesse." },
    en: { title: "High-Speed PCB Design", detail: "Printed circuit board design for high-speed signals." }
  },
  {
    group: "polyvalence",
    img: "assets/certifications/fpga1.png",
    fr: { title: "Microchip PolarFire® FPGA", detail: "Prise en main des FPGA PolarFire de Microchip." },
    en: { title: "Microchip PolarFire® FPGA", detail: "Getting started with Microchip PolarFire FPGAs." }
  }
];

const AWARDS = [
  { icon: "fa-trophy", fr: "2ᵉ Prix de l'innovation — JEJA AEBM Mohammedia 2022", en: "2nd Innovation Prize — JEJA AEBM Mohammedia 2022" },
  { icon: "fa-award", fr: "Mention Excellente — Innovation Day, FST Tanger 2022", en: "Excellence Mention — Innovation Day, FST Tangier 2022" },
  { icon: "fa-graduation-cap", fr: "Lauréat du programme Excellence Link Up Africa — Enabel", en: "Laureate, Link Up Africa Excellence Program — Enabel" },
  { icon: "fa-flask", fr: "Participation — Hackathon de l'automobile, FST Fès 2024", en: "Participant — Automotive Hackathon, FST Fez 2024" }
];

const ASSOC = [
  {
    icon: "fa-users",
    fr: { title: "2023/2024 — Secrétaire Général Adjoint du BE de l'AEBM Tanger", detail: "Coordination des activités du bureau exécutif de l'Association des Étudiants Burkinabè au Maroc (section Tanger)." },
    en: { title: "2023/2024 — Deputy Secretary General, AEBM Tangier", detail: "Coordination of executive board activities for the Association of Burkinabe Students in Morocco (Tangier chapter)." }
  },
  {
    icon: "fa-robot",
    fr: { title: "2023/2024 — Membre du Club Robotique & Avionique, FST Tanger", detail: "Participation à des projets de robotique et d'avionique au sein du club étudiant." },
    en: { title: "2023/2024 — Member, Robotics & Avionics Club, FST Tangier", detail: "Involvement in robotics and avionics projects within the student club." }
  },
  {
    icon: "fa-people-group",
    fr: { title: "2024/2025 — Chargé aux affaires culturelles et sportives, Union des Étudiants Internationaux (FST Fès)", detail: "Organisation d'événements culturels et sportifs pour la communauté étudiante internationale." },
    en: { title: "2024/2025 — Cultural & Sports Officer, International Students Union (FST Fez)", detail: "Organization of cultural and sports events for the international student community." }
  },
  {
    icon: "fa-industry",
    fr: { title: "2024/2025 — Membre du Club Génie Industriel et Club Sportif", detail: "Participation active aux activités techniques et sportives du club." },
    en: { title: "2024/2025 — Member, Industrial Engineering Club & Sports Club", detail: "Active participation in the club's technical and sports activities." }
  },
  {
    icon: "fa-futbol",
    fr: { title: "2024/2025 — Chargé aux affaires sportives, CESAM Fès", detail: "Organisation d'activités sportives pour la communauté estudiantine du CESAM." },
    en: { title: "2024/2025 — Sports Officer, CESAM Fez", detail: "Organization of sports activities for the CESAM student community." }
  }
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

/* ==========================================================================
   7. ÉTAT GLOBAL & GESTION DES ERREURS MÉDIA (Fallbacks)
   ========================================================================== */
let LANG = "fr";
const NAME = "SAWADOGO Mahmoud Abass";

/* Remplacement élégant des médias en cas d'erreur de chargement (404, offline) */
document.addEventListener("error", (e) => {
  const el = e.target;
  if (!el || !el.dataset || !el.dataset.fallbackIcon) return;
  if (el.tagName !== "IMG" && el.tagName !== "VIDEO") return;
  const div = document.createElement("div");
  const fbType = el.dataset.fallbackType || "badge";
  div.className = `icon-fallback icon-fallback-${fbType}`;
  div.innerHTML = fbType === "avatar" ? "MA" : `<i class="fas ${el.dataset.fallbackIcon}"></i>`;
  el.replaceWith(div);
}, true);

/* ==========================================================================
   8. MOTEUR DE RENDU (Helpers & DOM Builders)
   ========================================================================== */
function t(path) {
  return path.split(".").reduce((o, k) => o && o[k], UI[LANG]);
}

const DOMAIN_ICONS = {
  telecom: "fa-tower-broadcast",
  iot: "fa-microchip",
  automatisme: "fa-gear",
  ia: "fa-eye",
  energie: "fa-solar-panel"
};

function renderMedia(src, alt, icon, type, cls) {
  if (!src) return `<div class="icon-fallback icon-fallback-${type}"><i class="fas ${icon}"></i></div>`;
  return `<img${cls ? ` class="${cls}"` : ""} src="${src}" alt="${alt}" loading="lazy" data-fallback-icon="${icon}" data-fallback-type="${type}">`;
}

function renderMediaVideo(src, icon, type, cls) {
  return `<video${cls ? ` class="${cls}"` : ""} autoplay muted loop playsinline data-fallback-icon="${icon}" data-fallback-type="${type}"><source src="${src}" type="video/mp4"></video>`;
}

/* Application des traductions statiques sur l'ensemble de la page */
function applyStaticI18n() {
  document.documentElement.lang = LANG;
  document.getElementById("doc-title").textContent = LANG === "fr"
    ? "SAWADOGO Mahmoud Abass — Ingénieur Réseaux & Télécommunications"
    : "SAWADOGO Mahmoud Abass — Networks & Telecommunications Engineer";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t(el.getAttribute("data-i18n"));
    if (val !== undefined) el.innerHTML = val;
  });

  document.getElementById("hero-role").innerHTML = t("hero.role");
  document.getElementById("hero-sub").textContent = t("hero.sub");
  document.getElementById("profil-text").textContent = LANG === "fr"
    ? "Ingénieur en Systèmes Intelligents et Communicants, je possède une solide formation en télécommunications, RF, réseaux optiques et systèmes de transmission. Au cours de mon PFE chez ACLS (partenaire Huawei), j'ai conçu et validé une infrastructure réseau campus complète — routage OSPF/IS-IS/BGP, haute disponibilité, sécurité et WLAN centralisé. J'ai également réalisé un stage en FH & Fibre Optique, où j'ai acquis une expérience pratique en configuration, mesures et analyse de performance de liaisons de transport. À l'aise avec les outils de modélisation, simulation et instrumentation, je suis aujourd'hui ouvert à des opportunités en CDI comme en CDD pour participer à la conception, l'optimisation et le déploiement de solutions de télécommunications avancées."
    : "Engineer in Intelligent and Communicating Systems, with a solid background in telecommunications, RF, optical networks and transmission systems. During my final-year project at ACLS (a Huawei partner), I designed and validated a complete campus network infrastructure — OSPF/IS-IS/BGP routing, high availability, security and centralized WLAN. I also completed an internship in microwave and fiber-optic transmission, gaining hands-on experience configuring, measuring and analyzing the performance of transport links. Comfortable with modeling, simulation and instrumentation tools, I'm now open to both permanent and fixed-term opportunities to contribute to the design, optimization and deployment of advanced telecommunications solutions.";

  document.getElementById("input-name").placeholder = t("formPlaceholders.name");
  document.getElementById("input-email").placeholder = t("formPlaceholders.email");
  document.getElementById("input-message").placeholder = t("formPlaceholders.message");
  document.getElementById("footer-text").textContent = `© ${new Date().getFullYear()} SAWADOGO Mahmoud Abass — ${LANG === "fr" ? "Fès, Maroc" : "Fez, Morocco"}`;
}

/* Rendu de la timeline des formations */
function renderFormations() {
  const el = document.getElementById("formations-list");
  el.innerHTML = FORMATIONS.map(f => `
    <div class="tl-item">
      <div class="tl-dot"><i class="fas ${f.icon}"></i></div>
      <span class="tl-date mono">${f[LANG].date}</span>
      <h3>${f[LANG].place}</h3>
      <p>${f[LANG].title}</p>
    </div>`).join("");
}

/* Filtres et grille des expériences professionnelles */
let expFilter = "all";
function renderExpFilters() {
  const domains = ["telecom", "automatisme", "electronique", "informatique"];
  const el = document.getElementById("exp-filters");
  el.innerHTML = [`<button class="filter-btn ${expFilter === 'all' ? 'active' : ''}" data-f="all">${t("filters.all")}</button>`]
    .concat(domains.map(d => `<button class="filter-btn ${expFilter === d ? 'active' : ''}" data-f="${d}">${t("filterLabels." + d)}</button>`)).join("");
  el.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => { expFilter = btn.dataset.f; renderExperiences(); });
  });
}

function renderExperiences() {
  renderExpFilters();
  const grid = document.getElementById("exp-grid");
  grid.innerHTML = EXPERIENCES.map(e => {
    const hidden = expFilter !== "all" && !e.domains.includes(expFilter) ? "hidden" : "";
    return `
    <div class="exp-card ${e.featured ? 'featured' : ''} ${hidden}" data-open="exp:${e.id}">
      <div class="exp-top">
        ${renderMedia(e.img, e[LANG].org, e.icon || "fa-briefcase", "badge")}
        <div>
          <span class="tl-date mono">${e[LANG].date}</span>
          <h3>${e[LANG].org}</h3>
        </div>
      </div>
      <div class="exp-body">
        <ul>${e[LANG].bullets.slice(0, 3).map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="exp-more"><i class="fas fa-arrow-right"></i> ${t("tap")}</div>
      </div>
    </div>`;
  }).join("");
  bindOpenTriggers();
}

/* Rendu des blocs de compétences (Télécoms & Polyvalence) */
function renderSkills() {
  const el = document.getElementById("skills-container");
  const groups = ["telecom", "polyvalence"];
  el.innerHTML = groups.map(g => {
    const items = SKILLS.filter(s => s.group === g);
    return `
    <div class="skills-block">
      <div class="skills-block-head">
        <h3>${t("groups." + g)}</h3>
        <span class="badge ${g}"><i class="fas ${g === 'telecom' ? 'fa-tower-broadcast' : 'fa-layer-group'}"></i> ${items.length} ${LANG === 'fr' ? 'compétences' : 'skills'}</span>
      </div>
      <div class="skills-grid">
        ${items.map(s => `
          <div class="skill-card ${g}" data-open="skill:${s.id}">
            <div class="icon"><i class="fas ${s.icon}"></i></div>
            <h4>${s[LANG].title}</h4>
            <p>${s[LANG].short}</p>
            <div class="tap">${t("tap")}</div>
          </div>`).join("")}
      </div>
    </div>`;
  }).join("");
  bindOpenTriggers();
}

/* Filtres et grille des projets avec badges */
let projFilter = "all";
function renderProjFilters() {
  const domains = ["telecom", "iot", "automatisme", "ia", "energie"];
  const el = document.getElementById("proj-filters");
  el.innerHTML = [`<button class="filter-btn ${projFilter === 'all' ? 'active' : ''}" data-f="all">${t("filters.all")}</button>`]
    .concat(domains.map(d => `<button class="filter-btn ${projFilter === d ? 'active' : ''}" data-f="${d}">${t("filterLabels." + d)}</button>`)).join("");
  el.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => { projFilter = btn.dataset.f; renderProjects(); });
  });
}

function renderProjects() {
  renderProjFilters();
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = PROJECTS.map(p => {
    const hidden = projFilter !== "all" && !p.domains.includes(projFilter) ? "hidden" : "";
    const pIcon = DOMAIN_ICONS[p.domains[0]] || "fa-diagram-project";
    const media = p.media.type === "video"
      ? renderMediaVideo(p.media.src, pIcon, "media")
      : renderMedia(p.media.src, p[LANG].title, pIcon, "media");
    return `
    <div class="project ${hidden}" data-open="project:${p.id}">
      <div class="project-media">
        ${p.featured ? `<span class="project-tag badge telecom"><i class="fas fa-tower-broadcast"></i> ${t("groups.telecom")}</span>` : ""}
        ${media}
      </div>
      <div class="project-info">
        <h3>${p[LANG].title}</h3>
        <p>${p[LANG].desc}</p>
        <span class="project-link"><i class="fas fa-arrow-right"></i> ${LANG === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
      </div>
    </div>`;
  }).join("");
  bindOpenTriggers();
  observeVideos();
}

/* Rendu des outils */
function renderTools() {
  const el = document.getElementById("tools-container");
  const groups = ["telecom", "polyvalence"];
  el.innerHTML = groups.map(g => `
    <div class="tools-category">
      <div class="tools-category-head">
        <h3>${t("groups." + g)}</h3>
        <span class="badge ${g}"><i class="fas ${g === 'telecom' ? 'fa-tower-broadcast' : 'fa-layer-group'}"></i></span>
      </div>
      <div class="tools-grid">
        ${TOOLS.filter(x => x.group === g).map((x, i) => `
          <div class="tool-card" data-open="tool:${g}-${i}">
            ${renderMedia(x.img, x[LANG].name, x.icon || "fa-toolbox", "badge-sm")}
            <p>${x[LANG].name}</p>
          </div>`).join("")}
      </div>
    </div>`).join("");
  bindOpenTriggers();
}

/* Rendu des certifications */
function renderCerts() {
  const el = document.getElementById("certs-container");
  const groups = ["telecom", "polyvalence"];
  el.innerHTML = groups.map(g => `
    <div class="cert-category">
      <div class="cert-category-head">
        <h3>${t("groups." + g)}</h3>
        <span class="badge ${g}"><i class="fas ${g === 'telecom' ? 'fa-tower-broadcast' : 'fa-layer-group'}"></i></span>
      </div>
      <div class="cert-grid">
        ${CERTS.filter(x => x.group === g).map((x, i) => `
          <div class="cert-card" data-open="cert:${g}-${i}">
            <div class="cert-image-container">${renderMedia(x.img, x[LANG].title, "fa-certificate", "cert")}</div>
            <div class="cert-info"><h4>${x[LANG].title}</h4></div>
          </div>`).join("")}
      </div>
    </div>`).join("");
  bindOpenTriggers();
}

/* Rendu des distinctions, engagement associatif & centres d'intérêt */
function renderAwards() {
  document.getElementById("awards-grid").innerHTML = AWARDS.map(a => `
    <div class="chip-card"><i class="fas ${a.icon} icon"></i><span>${a[LANG]}</span></div>`).join("");
}

function renderAssoc() {
  document.getElementById("assoc-grid").innerHTML = ASSOC.map((a, i) => `
    <div class="chip-card" data-open="assoc:${i}"><i class="fas ${a.icon} icon"></i><span>${a[LANG].title}</span></div>`).join("");
  bindOpenTriggers();
}

function renderLangHobby() {
  document.getElementById("lang-list").innerHTML = LANGS.map(l => `<li>${l[LANG]}</li>`).join("");
  document.getElementById("hobby-list").innerHTML = HOBBIES.map(h => `<li>${h[LANG]}</li>`).join("");
}

/* Orchestration globale du rendu */
function renderAll() {
  applyStaticI18n();
  renderFormations();
  renderExperiences();
  renderSkills();
  renderProjects();
  renderTools();
  renderCerts();
  renderAwards();
  renderAssoc();
  renderLangHobby();
}

/* ==========================================================================
   9. GESTIONNAIRE DE FENÊTRE MODALE (Détails & Redirections)
   ========================================================================== */
let lastFocusedTrigger = null;

function bindOpenTriggers() {
  document.querySelectorAll("[data-open]").forEach(el => {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
    if (!el.hasAttribute("role")) el.setAttribute("role", "button");
    el.addEventListener("click", () => {
      lastFocusedTrigger = el;
      const [type, id] = el.getAttribute("data-open").split(":");
      openDetail(type, id);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        lastFocusedTrigger = el;
        const [type, id] = el.getAttribute("data-open").split(":");
        openDetail(type, id);
      }
    });
  });
}

function openDetail(type, id) {
  const body = document.getElementById("modal-body");
  let html = "";

  // Modale Compétences
  if (type === "skill") {
    const s = SKILLS.find(x => x.id === id);
    html = `
      <span class="badge ${s.group} modal-eyebrow">${t("groups." + s.group)}</span>
      <h2 class="modal-title">${s[LANG].title}</h2>
      <div class="modal-section"><p>${s[LANG].detail}</p></div>
      <div class="modal-section">
        <h5><i class="fas fa-bullseye"></i> ${t("modal.whatICanDo")}</h5>
        <p>${s[LANG].short}</p>
      </div>`;
  }
  // Modale Outils
  else if (type === "tool") {
    const [g, i] = id.split("-");
    const x = TOOLS.filter(t2 => t2.group === g)[i];
    html = `
      <span class="badge ${g} modal-eyebrow">${t("groups." + g)}</span>
      ${renderMedia(x.img, x[LANG].name, x.icon || "fa-toolbox", "badge-lg", "modal-image")}
      <h2 class="modal-title">${x[LANG].name}</h2>
      <div class="modal-section"><p>${x[LANG].detail}</p></div>`;
  }
  // Modale Certifications
  else if (type === "cert") {
    const [g, i] = id.split("-");
    const x = CERTS.filter(c => c.group === g)[i];
    html = `
      <span class="badge ${g} modal-eyebrow">${t("groups." + g)}</span>
      ${renderMedia(x.img, x[LANG].title, "fa-certificate", "badge-lg", "modal-image")}
      <h2 class="modal-title">${x[LANG].title}</h2>
      <div class="modal-section">
        <h5><i class="fas fa-lightbulb"></i> ${t("modal.whatLearned")}</h5>
        <p>${x[LANG].detail}</p>
      </div>
      <a class="modal-verify" href="#" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> ${t("modal.verify")}</a>`;
  }
  // Modale Expériences
  else if (type === "exp") {
    const e = EXPERIENCES.find(x => x.id === id);
    html = `
      <span class="badge ${e.domains.includes('telecom') ? 'telecom' : 'polyvalence'} modal-eyebrow">${e[LANG].org}</span>
      <h2 class="modal-title">${e[LANG].org}</h2>
      <span class="modal-date">${e[LANG].date}</span>
      <div class="modal-section">
        <h5><i class="fas fa-clipboard-list"></i> ${t("modal.context")}</h5>
        ${e[LANG].detail.split("\n\n").map(p => `<p>${p}</p>`).join("")}
      </div>
      <div class="modal-section">
        <h5><i class="fas fa-list-check"></i> ${t("modal.skillsUsed")}</h5>
        <ul>${e[LANG].bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>
      ${e.technologies ? `
      <div class="modal-section">
        <h5><i class="fas fa-screwdriver-wrench"></i> ${t("modal.technologies")}</h5>
        <div class="modal-tags">${e.technologies.map(tc => `<span class="tag">${tc}</span>`).join("")}</div>
      </div>` : ""}
      ${e[LANG].results ? `
      <div class="modal-section">
        <h5><i class="fas fa-circle-check"></i> ${t("modal.results")}</h5>
        <ul>${e[LANG].results.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>` : ""}`;
  }
  // Modale Projets (avec prise en charge du lien direct vers l'étude de cas dédiée)
  else if (type === "project") {
    const p = PROJECTS.find(x => x.id === id);
    const pIcon = DOMAIN_ICONS[p.domains[0]] || "fa-diagram-project";
    const media = p.media.type === "video"
      ? renderMediaVideo(p.media.src, pIcon, "media-lg", "modal-media")
      : renderMedia(p.media.src, p[LANG].title, pIcon, "media-lg", "modal-media");
    html = `
      ${media}
      <h2 class="modal-title">${p[LANG].title}</h2>
      <span class="modal-date">${p[LANG].date}</span>
      <div class="modal-section">
        <h5><i class="fas fa-clipboard-list"></i> ${t("modal.context")}</h5>
        <p>${p[LANG].context}</p>
      </div>
      <div class="modal-section">
        <h5><i class="fas fa-bullseye"></i> ${t("modal.objectives")}</h5>
        <ul>${p[LANG].objectives.map(o => `<li>${o}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h5><i class="fas fa-screwdriver-wrench"></i> ${t("modal.technologies")}</h5>
        <div class="modal-tags">${p[LANG].technologies.map(tc => `<span class="tag">${tc}</span>`).join("")}</div>
      </div>
      <div class="modal-section">
        <h5><i class="fas fa-circle-check"></i> ${t("modal.results")}</h5>
        <ul>${p[LANG].results.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>

     ${p.caseStudyUrl ? `
      <div class="modal-section" style="margin-top:1.6rem; padding-top:1.2rem; border-top:1px solid var(--border);">
        <a href="${p.caseStudyUrl}" class="btn btn-primary" style="width:100%; justify-content:center; text-decoration:none;">
          <i class="fas fa-arrow-up-right-from-square"></i> ${LANG === 'fr' ? 'Consulter l\'étude de cas & captures complètes' : 'View full case study & captures'}
        </a>
      </div>` : ""};
  }
  // Modale Associations
  else if (type === "assoc") {
    const a = ASSOC[id];
    html = `
      <h2 class="modal-title">${a[LANG].title}</h2>
      <div class="modal-section"><p>${a[LANG].detail}</p></div>`;
  }

  body.innerHTML = html;
  const modal = document.getElementById("detail-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  observeVideos();
  document.getElementById("modal-close-btn").focus();
  document.addEventListener("keydown", trapModalFocus);
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  document.removeEventListener("keydown", trapModalFocus);
  modal.querySelectorAll("video").forEach(v => v.pause());
  if (lastFocusedTrigger && document.contains(lastFocusedTrigger)) lastFocusedTrigger.focus();
}

function trapModalFocus(e) {
  if (e.key === "Escape") { closeDetailModal(); return; }
  if (e.key !== "Tab") return;
  const modal = document.getElementById("detail-modal");
  const focusables = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

document.getElementById("detail-modal").addEventListener("click", (e) => {
  if (e.target.id === "detail-modal") closeDetailModal();
});

/* ==========================================================================
   10. SÉLECTEURS DE LANGUE & THÈMES
   ========================================================================== */
document.getElementById("lang-toggle").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;
  LANG = btn.dataset.lang;
  document.querySelectorAll("#lang-toggle button").forEach(b => b.classList.toggle("active", b === btn));
  renderAll();
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  themeToggle.innerHTML = next === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

/* ==========================================================================
   11. NAVIGATION, DÉFILEMENT & EFFETS VISUELS
   ========================================================================== */
const navbar = document.getElementById("navbar");
const scrollProgress = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");
const sectionsForSpy = document.querySelectorAll("section[id]");

let scrollTicking = false;
function onScrollFrame() {
  const y = window.pageYOffset;

  // Effet d'ombrage de la navbar
  navbar.classList.toggle("scrolled", y > 50);

  // Bouton retour en haut
  backToTop.classList.toggle("visible", y > 600);

  // Barre de progression de lecture supérieure
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  scrollProgress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";

  // ScrollSpy sur les liens de navigation
  sectionsForSpy.forEach(sec => {
    const top = sec.offsetTop - 120, h = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-link[data-target="${id}"]`);
    if (!link) return;
    link.classList.toggle("active", y > top && y <= top + h);
  });

  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (!scrollTicking) { requestAnimationFrame(onScrollFrame); scrollTicking = true; }
}, { passive: true });
onScrollFrame();

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Menu mobile
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
navToggle.addEventListener("click", () => {
  const willOpen = !navMenu.classList.contains("active");
  navMenu.classList.toggle("active", willOpen);
  navToggle.classList.toggle("open", willOpen);
  navToggle.setAttribute("aria-expanded", String(willOpen));
});

navMenu.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navToggle.classList.remove("open");
}));

// Animations d'apparition progressive au défilement (IntersectionObserver)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("visible");
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: .1, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".fade-up").forEach(el => revealObserver.observe(el));

// Gestion de l'économie de ressources CPU/Batterie pour les vidéos
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    const v = en.target;
    if (en.isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: .25 });

function observeVideos() {
  document.querySelectorAll(".projects-grid video, .modal-media video, video.modal-media").forEach(v => videoObserver.observe(v));
}

// Effet machine à écrire sur le nom principal
function typeWriter() {
  const el = document.getElementById("typing-text");
  let i = 0;
  (function step() {
    if (i < NAME.length) {
      el.innerHTML = NAME.slice(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(step, 70);
    } else {
      el.innerHTML = NAME + '<span class="cursor">|</span>';
      document.getElementById("hero-role").classList.add("visible-subtitle");
      setTimeout(() => document.getElementById("hero-sub").classList.add("visible-subtitle"), 250);
      setTimeout(() => document.getElementById("hero-buttons").classList.add("visible-buttons"), 480);
    }
  })();
}

/* ==========================================================================
   12. FORMULAIRE DE CONTACT (Validation & Feedback)
   ========================================================================== */
function showFormMessage(msg, type) {
  const el = document.getElementById("form-message");
  el.textContent = msg;
  el.className = "form-message " + type;
  setTimeout(() => el.className = "form-message", 5000);
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    showFormMessage(t("formMsg.fillAll"), "error");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    e.preventDefault();
    showFormMessage(t("formMsg.badEmail"), "error");
    return false;
  }
});

/* ==========================================================================
   13. INITIALISATION & CHARGEMENT (Boot & Loader)
   ========================================================================== */
const LOADER_MIN_MS = 500;
const loadStart = Date.now();

function boot() {
  renderAll();
  typeWriter();
  observeVideos();
  const elapsed = Date.now() - loadStart;
  const wait = Math.max(0, LOADER_MIN_MS - elapsed);
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), wait);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// Sécurité pour forcer la fermeture du loader même en cas d'élément lent
setTimeout(() => document.getElementById("loader").classList.add("hidden"), 4000);
