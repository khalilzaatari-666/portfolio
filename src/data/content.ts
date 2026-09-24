// -----------------------------------------------------------------------------
// Contenu du portfolio : tout est centralisé ici pour faciliter la mise à jour.
// Modifie simplement les valeurs ci-dessous ; les composants s'adaptent.
// Le texte existe en deux langues (fr / en) : garde les deux objets en phase.
// -----------------------------------------------------------------------------

export const langs = ["fr", "en"] as const;
export type Lang = (typeof langs)[number];

// Données identiques dans les deux langues
export const profile = {
  name: "Khalil Zaatari",
  email: "khalilzaatari1@gmail.com",
  phone: "+212 617 246 500",
  github: "https://github.com/khalilzaatari-666",
  linkedin: "https://www.linkedin.com/in/khalil-zaatari-9974031bb/",
  cvFullStack: "/cv-fullstack.pdf",
  cvDataScience: "/cv-datascience.pdf",
  // Images optionnelles (mettre les fichiers dans public/ puis renseigner le chemin)
  portrait: "/images/portrait.jpg", // photo dans le hero (vide = emplacement hachuré)
};

// Stack affichée dans le bandeau défilant sous le hero
export const marquee = [
  "React 19",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Python",
  "PyTorch",
  "Scikit-learn",
  "Apache Spark",
  "Kafka",
  "Airflow",
  "Docker",
  "Vercel",
];

export type SkillGroup = { title: string; items: string[] };

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string; // capture d'écran, ex. "/images/capitol.jpg" (ratio 16:10 conseillé)
  year?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  url?: string;
  bullets: string[];
};

// Titre de section : [avant, partie en italique, après]
type Title = [string, string, string];

const fr = {
  meta: {
    title: "Khalil Zaatari | Développeur Full Stack & Data Science",
    description:
      "Portfolio de Khalil Zaatari, ingénieur d'État en informatique (ENSA El Jadida). Développeur full stack React / Next.js / Node.js et spécialiste en science des données, basé à Agadir, Maroc.",
    ogDescription:
      "Ingénieur d'État en informatique. Développeur full stack et spécialiste en science des données. Basé à Agadir, Maroc.",
  },
  role: "Développeur Full Stack & Data Science",
  location: "Agadir, Maroc",
  tagline:
    "Ingénieur d'État en informatique (ENSA El Jadida), je conçois et déploie des applications web de bout en bout, des interfaces React & Next.js aux back-ends Node.js/Express et Python, avec une solide spécialisation en science des données, du traitement à grande échelle jusqu'à la visualisation et le machine learning.",

  nav: {
    links: [
      { href: "#about", n: "01", label: "À propos" },
      { href: "#skills", n: "02", label: "Compétences" },
      { href: "#projects", n: "03", label: "Projets" },
      { href: "#experience", n: "04", label: "Parcours" },
      { href: "#contact", n: "05", label: "Contact" },
    ],
    home: "Khalil Zaatari — accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLang: "Switch to English",
    theme: {
      toLight: "Passer au thème clair",
      toDark: "Passer au thème sombre",
      light: "Thème clair",
      dark: "Thème sombre",
    },
  },

  hero: {
    kicker: "Portfolio — 2026",
    available: "Disponible",
    // [avant, italique, après] <br> [avant, italique, après]
    headline: ["Développeur ", "full stack", "", " & ingénieur ", "data science", "."],
    portraitAlt: "Portrait de Khalil Zaatari",
    portrait: "Portrait",
    place: "Agadir, MA",
    seeProjects: "Voir les projets",
    meta: {
      location: "Localisation",
      time: "Heure locale",
      education: "Formation",
      educationValue: "Ingénieur d'État, ENSA",
      contact: "Contact",
    },
  },

  about: {
    eyebrow: "À propos",
    title: ["Ingénieur, développeur, ", "data scientist", "."] as Title,
    paragraphs: [
      "Ingénieur d'État en informatique diplômé de l'ENSA El Jadida, je développe des applications web complètes, de la conception de l'interface au déploiement en production. Je travaille au quotidien avec React, Next.js et TypeScript côté front, Node.js/Express, FastAPI et Django côté back, sur des bases de données SQL et des ORMs.",
      "Spécialisé en science des données, je conçois des solutions de bout en bout : de la modélisation et du traitement de données à grande échelle (ETL, Big Data) jusqu'à la visualisation et la mise en production de modèles de machine learning. J'accorde une attention particulière à la performance, à la sécurité et à la scalabilité, et je suis à l'aise en autonomie comme en collaboration avec designers et chefs de projet.",
    ],
    facts: [
      { label: "Basé à", value: "Agadir, Maroc" },
      { label: "Formation", value: "Ingénieur d'État, ENSA El Jadida" },
      { label: "Langues", value: "Arabe, Français, Anglais" },
      { label: "Disponibilité", value: "Ouvert aux opportunités" },
    ],
  },

  skillsSection: {
    eyebrow: "Compétences",
    title: ["Une stack full-stack, ", "ancrée dans la data", "."] as Title,
    description:
      "Du front-end au déploiement, en passant par l'ingénierie et la science des données.",
  },
  skills: [
    {
      title: "Frontend",
      items: [
        "React (React 19)",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Radix UI / shadcn/ui",
        "HTML5 / CSS3",
        "UI responsive",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js / Express",
        "FastAPI",
        "Django",
        "Prisma (ORM)",
        "API REST / GraphQL",
        "Redis",
        "Intégration IA/LLM (OpenAI)",
      ],
    },
    {
      title: "Data Science & Machine Learning",
      items: [
        "Python / R",
        "Pandas / NumPy",
        "Scikit-learn / Keras",
        "TensorFlow / PyTorch",
        "Computer Vision (YOLOv8, Siamese NN)",
        "MLflow",
      ],
    },
    {
      title: "Big Data & ETL",
      items: ["Apache Spark", "Hadoop", "Kafka", "HBase", "Airflow", "Apache Beam"],
    },
    {
      title: "Bases de données",
      items: ["PostgreSQL", "MySQL", "MongoDB", "HBase"],
    },
    {
      title: "DevOps & Cloud",
      items: [
        "Git",
        "Docker / Kubernetes",
        "GitHub Actions (CI/CD)",
        "Fly.io / Vercel",
        "AWS (S3, Lambda)",
        "Nginx / Linux",
      ],
    },
    {
      title: "Sécurité",
      items: [
        "Auth (JWT, OAuth, RBAC)",
        "Rate limiting & anti-bot",
        "Sanitisation des entrées",
        "Auth biométrique",
      ],
    },
    {
      title: "Visualisation",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
  ] as SkillGroup[],

  projectsSection: {
    eyebrow: "Projets",
    title: ["Deux plateformes, ", "en production", "."] as Title,
    description: "Conçues et déployées de bout en bout, aujourd'hui en ligne.",
    open: "Ouvrir",
    screenshot: "Capture d'écran de",
    project: "Projet",
    stack: "Stack",
    live: "Voir le site",
    code: "Code source",
  },
  projects: [
    {
      name: "Capitol.ma",
      tagline: "Plateforme d'investissement pour le marché marocain",
      description:
        "Plateforme d'investissement (immobilier, art, private equity) en TypeScript full-stack : front-end React 19 (Tailwind, Radix UI) avec tableaux de bord interactifs (ApexCharts, Chart.js), back-end Node.js/Express avec Prisma & PostgreSQL. Authentification complète (vérification email, Google OAuth), contrôle d'accès par rôles, rate limiting via Redis et intégrations tierces (AWS S3, Twilio, WhatsApp, OpenAI, Calendly, Cloudflare Turnstile). Déploiement sur Fly.io (Docker, Nginx, CI GitHub Actions).",
      tags: ["React 19", "Node.js / Express", "Prisma", "PostgreSQL", "OpenAI", "Fly.io"],
      year: "2025–26",
      image: "/images/capitol.png",
      liveUrl: "https://capitol.ma",
      repoUrl: "https://github.com/khalilzaatari-666/capitol.ma",
    },
    {
      name: "Horkos WM",
      tagline: "Plateforme d'un cabinet de gestion de patrimoine (AMMC)",
      description:
        "Plateforme du cabinet Horkos Wealth Management (conseil en investissements financiers, régulé par l'AMMC) : site public, espace client et back-office conseiller/admin. Next.js 16 (App Router) & React 19 / TypeScript, Supabase (PostgreSQL + RLS, Auth, Storage), Tailwind v4 et shadcn/ui. Authentification multi-fournisseurs (code email, Google/Microsoft), génération de documents PDF, prise de rendez-vous (Google Calendar) et emails transactionnels (Resend). Déploiement Vercel (cron) avec Cloudflare (WAF, anti-DDoS) et tests automatisés (Vitest, Playwright).",
      tags: ["Next.js 16", "React 19", "Supabase", "Tailwind v4", "Vercel", "Cloudflare"],
      year: "2026",
      image: "/images/horkos.png",
      liveUrl: "https://horkos-wm.com",
      repoUrl: "https://github.com/khalilzaatari-666/horkos-wm",
    },
  ] as Project[],

  experienceSection: {
    eyebrow: "Parcours",
    title: ["Expérience & ", "formation", "."] as Title,
    site: "Site de",
    education: "Formation",
    certifications: "Certifications",
  },
  experience: [
    {
      company: "Horkos WM",
      role: "Développeur Full Stack",
      period: "Juin 2026 à Août 2026",
      url: "https://horkos-wm.com",
      bullets: [
        "Développement de la plateforme du cabinet Horkos Wealth Management (conseil en investissements financiers, régulé par l'AMMC) : site public, espace client et back-office.",
        "Application full-stack Next.js 16 (App Router) & React 19 / TypeScript, avec Supabase (PostgreSQL + RLS, Auth, Storage), Tailwind v4 et shadcn/ui.",
        "Authentification multi-fournisseurs, génération de documents PDF, prise de rendez-vous (Google Calendar), emails (Resend) et déploiement Vercel avec Cloudflare (WAF, anti-DDoS).",
      ],
    },
    {
      company: "Capitol.ma",
      role: "Développeur Full Stack",
      period: "Oct 2025 à Août 2026",
      url: "https://capitol.ma",
      bullets: [
        "Développement et maintenance de capitol.ma, plateforme d'investissement pour le marché marocain, en TypeScript full-stack.",
        "Back-end Node.js/Express avec Prisma & PostgreSQL : authentification complète, contrôle d'accès par rôles, rate limiting via Redis et validation/sanitisation des entrées.",
        "Intégration de services tiers (AWS S3, Twilio, WhatsApp, OpenAI, Calendly) et déploiement sur Fly.io (Docker, Nginx, CI GitHub Actions), tests via Vitest.",
      ],
    },
    {
      company: "PCS Agri",
      role: "Ingénieur ML / Full Stack",
      period: "Mars 2025 à Juin 2025",
      bullets: [
        "Plateforme web d'automatisation de modèles ML (YOLOv8) pour l'agriculture (FastAPI, React.js, Express.js).",
        "Système de gestion de datasets et d'annotation automatique et manuelle, avec des composants UI réutilisables et des API REST.",
        "Implémentation de pipelines MLOps : entraînement, évaluation, test et déploiement des modèles dans le cloud.",
      ],
    },
    {
      company: "3D Smart Factory",
      role: "Machine Learning Engineer",
      period: "Juillet 2024 à Août 2024",
      bullets: [
        "Développement d'un modèle Siamese Neural Network pour la reconnaissance faciale et la double authentification.",
        "Intégration dans une application web Django & React.js, optimisée pour réduire les faux positifs et accélérer la vérification.",
      ],
    },
    {
      company: "LeanSoft",
      role: "Développeur Mobile",
      period: "Juillet 2023 à Août 2023",
      bullets: [
        "Application mobile Flutter multiplateforme de gestion des présences (Punch In/Out) en temps réel, intégrée à l'API REST Odoo.",
      ],
    },
  ] as ExperienceItem[],

  education: {
    school: "École Nationale des Sciences Appliquées (ENSA), El Jadida",
    degree:
      "Diplôme d'Ingénieur d'État, Ingénierie Informatique et Technologies Émergentes (2ITE)",
    period: "2020 à 2025",
  },

  certifications: [
    "IBM : Data Science Tools",
    "Cisco : Introduction to Data Science",
    "AWS Academy : Cloud Foundations",
    "AWS Academy : Engineering / Operations Technician",
  ],

  contact: {
    eyebrow: "Contact",
    title: ["Travaillons", "ensemble", "."],
    intro:
      "Un projet, un poste ou une simple question ? Écrivez-moi, je réponds rapidement.",
    phone: "Téléphone",
  },

  footer: {
    madeIn: "Fait à Agadir",
    top: "Haut ↑",
  },

  whatsapp: "Discuter sur WhatsApp",
};

export type Content = typeof fr;

const en: Content = {
  meta: {
    title: "Khalil Zaatari | Full Stack Developer & Data Science",
    description:
      "Portfolio of Khalil Zaatari, state-certified computer engineer (ENSA El Jadida). Full stack developer (React / Next.js / Node.js) and data science specialist, based in Agadir, Morocco.",
    ogDescription:
      "State-certified computer engineer. Full stack developer and data science specialist. Based in Agadir, Morocco.",
  },
  role: "Full Stack Developer & Data Science",
  location: "Agadir, Morocco",
  tagline:
    "A state-certified computer engineer (ENSA El Jadida), I design and ship web applications end to end, from React & Next.js interfaces to Node.js/Express and Python back-ends, with a strong specialization in data science, from large-scale processing to visualization and machine learning.",

  nav: {
    links: [
      { href: "#about", n: "01", label: "About" },
      { href: "#skills", n: "02", label: "Skills" },
      { href: "#projects", n: "03", label: "Projects" },
      { href: "#experience", n: "04", label: "Experience" },
      { href: "#contact", n: "05", label: "Contact" },
    ],
    home: "Khalil Zaatari — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Passer en français",
    theme: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      light: "Light theme",
      dark: "Dark theme",
    },
  },

  hero: {
    kicker: "Portfolio — 2026",
    available: "Available",
    headline: ["", "Full stack", " developer", " & ", "data science", " engineer."],
    portraitAlt: "Portrait of Khalil Zaatari",
    portrait: "Portrait",
    place: "Agadir, MA",
    seeProjects: "See projects",
    meta: {
      location: "Location",
      time: "Local time",
      education: "Education",
      educationValue: "Engineering degree, ENSA",
      contact: "Contact",
    },
  },

  about: {
    eyebrow: "About",
    title: ["Engineer, developer, ", "data scientist", "."],
    paragraphs: [
      "A state-certified computer engineer from ENSA El Jadida, I build complete web applications, from interface design to production deployment. I work daily with React, Next.js and TypeScript on the front end, Node.js/Express, FastAPI and Django on the back end, with SQL databases and ORMs.",
      "Specialized in data science, I design end-to-end solutions: from modeling and large-scale data processing (ETL, Big Data) to visualization and putting machine learning models into production. I pay close attention to performance, security and scalability, and I'm comfortable working on my own as well as alongside designers and project managers.",
    ],
    facts: [
      { label: "Based in", value: "Agadir, Morocco" },
      { label: "Education", value: "Engineering degree, ENSA El Jadida" },
      { label: "Languages", value: "Arabic, French, English" },
      { label: "Availability", value: "Open to opportunities" },
    ],
  },

  skillsSection: {
    eyebrow: "Skills",
    title: ["A full-stack toolkit, ", "rooted in data", "."],
    description:
      "From front end to deployment, through data engineering and data science.",
  },
  skills: [
    {
      title: "Frontend",
      items: [
        "React (React 19)",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Radix UI / shadcn/ui",
        "HTML5 / CSS3",
        "Responsive UI",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js / Express",
        "FastAPI",
        "Django",
        "Prisma (ORM)",
        "REST / GraphQL APIs",
        "Redis",
        "AI/LLM integration (OpenAI)",
      ],
    },
    {
      title: "Data Science & Machine Learning",
      items: [
        "Python / R",
        "Pandas / NumPy",
        "Scikit-learn / Keras",
        "TensorFlow / PyTorch",
        "Computer Vision (YOLOv8, Siamese NN)",
        "MLflow",
      ],
    },
    {
      title: "Big Data & ETL",
      items: ["Apache Spark", "Hadoop", "Kafka", "HBase", "Airflow", "Apache Beam"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "HBase"],
    },
    {
      title: "DevOps & Cloud",
      items: [
        "Git",
        "Docker / Kubernetes",
        "GitHub Actions (CI/CD)",
        "Fly.io / Vercel",
        "AWS (S3, Lambda)",
        "Nginx / Linux",
      ],
    },
    {
      title: "Security",
      items: [
        "Auth (JWT, OAuth, RBAC)",
        "Rate limiting & anti-bot",
        "Input sanitization",
        "Biometric auth",
      ],
    },
    {
      title: "Visualization",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
  ],

  projectsSection: {
    eyebrow: "Projects",
    title: ["Two platforms, ", "in production", "."],
    description: "Designed and shipped end to end, live today.",
    open: "Open",
    screenshot: "Screenshot of",
    project: "Project",
    stack: "Stack",
    live: "Visit site",
    code: "Source code",
  },
  projects: [
    {
      name: "Capitol.ma",
      tagline: "Investment platform for the Moroccan market",
      description:
        "Investment platform (real estate, art, private equity) in full-stack TypeScript: React 19 front end (Tailwind, Radix UI) with interactive dashboards (ApexCharts, Chart.js), Node.js/Express back end with Prisma & PostgreSQL. Full authentication (email verification, Google OAuth), role-based access control, Redis rate limiting and third-party integrations (AWS S3, Twilio, WhatsApp, OpenAI, Calendly, Cloudflare Turnstile). Deployed on Fly.io (Docker, Nginx, GitHub Actions CI).",
      tags: ["React 19", "Node.js / Express", "Prisma", "PostgreSQL", "OpenAI", "Fly.io"],
      year: "2025–26",
      image: "/images/capitol.png",
      liveUrl: "https://capitol.ma",
      repoUrl: "https://github.com/khalilzaatari-666/capitol.ma",
    },
    {
      name: "Horkos WM",
      tagline: "Platform for a wealth management firm (AMMC)",
      description:
        "Platform for Horkos Wealth Management (financial investment advisory, regulated by the AMMC): public website, client portal and advisor/admin back office. Next.js 16 (App Router) & React 19 / TypeScript, Supabase (PostgreSQL + RLS, Auth, Storage), Tailwind v4 and shadcn/ui. Multi-provider authentication (email code, Google/Microsoft), PDF document generation, appointment booking (Google Calendar) and transactional emails (Resend). Deployed on Vercel (cron) behind Cloudflare (WAF, anti-DDoS) with automated tests (Vitest, Playwright).",
      tags: ["Next.js 16", "React 19", "Supabase", "Tailwind v4", "Vercel", "Cloudflare"],
      year: "2026",
      image: "/images/horkos.png",
      liveUrl: "https://horkos-wm.com",
      repoUrl: "https://github.com/khalilzaatari-666/horkos-wm",
    },
  ],

  experienceSection: {
    eyebrow: "Experience",
    title: ["Experience & ", "education", "."],
    site: "Website of",
    education: "Education",
    certifications: "Certifications",
  },
  experience: [
    {
      company: "Horkos WM",
      role: "Full Stack Developer",
      period: "Jun 2026 – Aug 2026",
      url: "https://horkos-wm.com",
      bullets: [
        "Built the platform for Horkos Wealth Management (financial investment advisory, regulated by the AMMC): public website, client portal and back office.",
        "Full-stack Next.js 16 (App Router) & React 19 / TypeScript application, with Supabase (PostgreSQL + RLS, Auth, Storage), Tailwind v4 and shadcn/ui.",
        "Multi-provider authentication, PDF document generation, appointment booking (Google Calendar), emails (Resend) and Vercel deployment behind Cloudflare (WAF, anti-DDoS).",
      ],
    },
    {
      company: "Capitol.ma",
      role: "Full Stack Developer",
      period: "Oct 2025 – Aug 2026",
      url: "https://capitol.ma",
      bullets: [
        "Developed and maintained capitol.ma, an investment platform for the Moroccan market, in full-stack TypeScript.",
        "Node.js/Express back end with Prisma & PostgreSQL: full authentication, role-based access control, Redis rate limiting and input validation/sanitization.",
        "Integrated third-party services (AWS S3, Twilio, WhatsApp, OpenAI, Calendly) and deployed on Fly.io (Docker, Nginx, GitHub Actions CI), tested with Vitest.",
      ],
    },
    {
      company: "PCS Agri",
      role: "ML / Full Stack Engineer",
      period: "Mar 2025 – Jun 2025",
      bullets: [
        "Web platform automating ML models (YOLOv8) for agriculture (FastAPI, React.js, Express.js).",
        "Dataset management and automatic/manual annotation system, with reusable UI components and REST APIs.",
        "Implemented MLOps pipelines: training, evaluation, testing and cloud deployment of models.",
      ],
    },
    {
      company: "3D Smart Factory",
      role: "Machine Learning Engineer",
      period: "Jul 2024 – Aug 2024",
      bullets: [
        "Built a Siamese Neural Network model for facial recognition and two-factor authentication.",
        "Integrated it into a Django & React.js web app, tuned to reduce false positives and speed up verification.",
      ],
    },
    {
      company: "LeanSoft",
      role: "Mobile Developer",
      period: "Jul 2023 – Aug 2023",
      bullets: [
        "Cross-platform Flutter mobile app for real-time attendance tracking (Punch In/Out), integrated with the Odoo REST API.",
      ],
    },
  ],

  education: {
    school: "National School of Applied Sciences (ENSA), El Jadida",
    degree:
      "State Engineering Degree, Computer Engineering and Emerging Technologies (2ITE)",
    period: "2020 – 2025",
  },

  certifications: [
    "IBM: Data Science Tools",
    "Cisco: Introduction to Data Science",
    "AWS Academy: Cloud Foundations",
    "AWS Academy: Engineering / Operations Technician",
  ],

  contact: {
    eyebrow: "Contact",
    title: ["Let's work", "together", "."],
    intro: "A project, a role or just a question? Write to me, I reply quickly.",
    phone: "Phone",
  },

  footer: {
    madeIn: "Made in Agadir",
    top: "Top ↑",
  },

  whatsapp: "Chat on WhatsApp",
};

export const content: Record<Lang, Content> = { fr, en };
