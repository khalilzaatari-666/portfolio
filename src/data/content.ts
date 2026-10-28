// -----------------------------------------------------------------------------
// Contenu du portfolio : tout est centralisé ici pour faciliter la mise à jour.
// Modifie simplement les valeurs ci-dessous ; les composants s'adaptent.
// Le texte existe en deux langues (fr / en) : garde les deux objets en phase.
// -----------------------------------------------------------------------------

export const langs = ["fr", "en", "ar"] as const;
export type Lang = (typeof langs)[number];

// Le français est servi sur « / », les autres langues sur « /<code> ».
export const langPath = (lang: Lang) => (lang === "fr" ? "/" : `/${lang}`);

// Sélecteur de langue : libellé court affiché, nom complet pour l'accessibilité
export const langNames: Record<Lang, { short: string; name: string }> = {
  fr: { short: "FR", name: "Français" },
  en: { short: "EN", name: "English" },
  ar: { short: "ع", name: "العربية" },
};

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
    keywords: [
      "Khalil Zaatari",
      "développeur full stack",
      "React",
      "Next.js",
      "Node.js",
      "data science",
      "machine learning",
      "Agadir",
      "Maroc",
      "portfolio",
    ],
    locale: "fr_FR",
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
    email: "Email",
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
    keywords: [
      "Khalil Zaatari",
      "full stack developer",
      "React",
      "Next.js",
      "Node.js",
      "data science",
      "machine learning",
      "Agadir",
      "Morocco",
      "portfolio",
    ],
    locale: "en_US",
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
    email: "Email",
    phone: "Phone",
  },

  footer: {
    madeIn: "Made in Agadir",
    top: "Top ↑",
  },

  whatsapp: "Chat on WhatsApp",
};

const ar: Content = {
  meta: {
    title: "Khalil Zaatari | مطوّر مواقع وتطبيقات ويب وخبير بيانات",
    description:
      "Khalil Zaatari، مهندس دولة في المعلوميات مقيم في أكادير، المغرب. أصمّم وأطوّر مواقع وتطبيقات ويب كاملة، وأساعد الشركات على الاستفادة من بياناتها ومن الذكاء الاصطناعي.",
    ogDescription:
      "مهندس دولة في المعلوميات. أصمّم وأطوّر مواقع وتطبيقات ويب كاملة، وأحوّل البيانات إلى قرارات. مقيم في أكادير، المغرب.",
    keywords: [
      "Khalil Zaatari",
      "تصميم مواقع",
      "تطوير تطبيقات الويب",
      "مطوّر مواقع",
      "تحليل البيانات",
      "الذكاء الاصطناعي",
      "React",
      "Next.js",
      "أكادير",
      "المغرب",
      "portfolio",
    ],
    locale: "ar_MA",
  },
  role: "مطوّر مواقع وتطبيقات ويب وخبير بيانات",
  location: "أكادير، المغرب",
  tagline:
    "مهندس دولة في المعلوميات، أصمّم وأطوّر مواقع وتطبيقات ويب كاملة: من الواجهة التي يراها زوّارك، إلى النظام الذي يعمل خلفها، وحتى إطلاقها على الإنترنت. وبفضل تخصصي في البيانات والذكاء الاصطناعي، أساعدك أيضًا على فهم بياناتك والاستفادة منها.",

  nav: {
    links: [
      { href: "#about", n: "01", label: "من أنا" },
      { href: "#skills", n: "02", label: "المهارات" },
      { href: "#projects", n: "03", label: "المشاريع" },
      { href: "#experience", n: "04", label: "الخبرات" },
      { href: "#contact", n: "05", label: "تواصل" },
    ],
    home: "Khalil Zaatari — الصفحة الرئيسية",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    theme: {
      toLight: "التبديل إلى الوضع الفاتح",
      toDark: "التبديل إلى الوضع الداكن",
      light: "الوضع الفاتح",
      dark: "الوضع الداكن",
    },
  },

  hero: {
    kicker: "معرض أعمال — 2026",
    available: "متاح لمشاريع جديدة",
    // « أصمّم مواقع وتطبيقات الويب، وأحوّل البيانات إلى قرارات. »
    headline: ["أصمّم ", "مواقع وتطبيقات الويب", "،", " وأحوّل ", "البيانات", " إلى قرارات."],
    portraitAlt: "صورة Khalil Zaatari",
    portrait: "صورة",
    place: "أكادير، المغرب",
    seeProjects: "شاهد أعمالي",
    meta: {
      location: "المدينة",
      time: "الساعة هنا",
      education: "الشهادة",
      educationValue: "مهندس دولة، ENSA",
      contact: "البريد",
    },
  },

  about: {
    eyebrow: "من أنا",
    title: ["مهندس، مطوّر، ", "وخبير بيانات", "."],
    paragraphs: [
      "تخرّجت مهندسَ دولة في المعلوميات من المدرسة الوطنية للعلوم التطبيقية بالجديدة (ENSA). أبني مواقع وتطبيقات ويب كاملة بنفسي: من تصميم الواجهة التي يستعملها عملاؤك، إلى البرمجة التي تعمل في الخلفية، وصولًا إلى إطلاق الموقع على الإنترنت ومتابعته بعد ذلك.",
      "تخصصي الثاني هو البيانات: أجمعها وأنظّمها، ثم أحوّلها إلى لوحات ورسوم واضحة، وإلى أدوات ذكاء اصطناعي تساعد على اتخاذ القرار. أحرص على أن يكون ما أبنيه سريعًا وآمنًا وقادرًا على النمو مع نشاطك، وأعمل باستقلالية أو ضمن فريق، مع تواصل واضح في كل مرحلة.",
    ],
    facts: [
      { label: "أقيم في", value: "أكادير، المغرب" },
      { label: "الشهادة", value: "مهندس دولة، ENSA الجديدة" },
      { label: "اللغات", value: "العربية، الفرنسية، الإنجليزية" },
      { label: "التوفّر", value: "متاح لمشاريع ووظائف جديدة" },
    ],
  },

  skillsSection: {
    eyebrow: "المهارات",
    title: ["كل ما يحتاجه مشروعك، ", "من الفكرة إلى الإطلاق", "."],
    description:
      "الأدوات التي أستعملها يوميًا لبناء مواقع سريعة وآمنة، ولتحليل البيانات والاستفادة منها.",
  },
  skills: [
    {
      title: "واجهات المواقع",
      items: [
        "React (React 19)",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Radix UI / shadcn/ui",
        "HTML5 / CSS3",
        "تصميم يتكيّف مع الهاتف والحاسوب",
      ],
    },
    {
      title: "البرمجة الخلفية",
      items: [
        "Node.js / Express",
        "FastAPI",
        "Django",
        "Prisma (ORM)",
        "REST / GraphQL API",
        "Redis",
        "ربط المواقع بالذكاء الاصطناعي (OpenAI)",
      ],
    },
    {
      title: "البيانات والذكاء الاصطناعي",
      items: [
        "Python / R",
        "Pandas / NumPy",
        "Scikit-learn / Keras",
        "TensorFlow / PyTorch",
        "التعرّف على الصور والوجوه (YOLOv8, Siamese NN)",
        "MLflow",
      ],
    },
    {
      title: "البيانات الضخمة",
      items: ["Apache Spark", "Hadoop", "Kafka", "HBase", "Airflow", "Apache Beam"],
    },
    {
      title: "قواعد البيانات",
      items: ["PostgreSQL", "MySQL", "MongoDB", "HBase"],
    },
    {
      title: "الاستضافة والنشر",
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
      title: "الأمان",
      items: [
        "تسجيل دخول آمن وصلاحيات (JWT, OAuth, RBAC)",
        "الحماية من الهجمات والروبوتات",
        "التحقق من البيانات المُدخلة",
        "الدخول بالبصمة أو الوجه",
      ],
    },
    {
      title: "لوحات ورسوم البيانات",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
  ],

  projectsSection: {
    eyebrow: "المشاريع",
    title: ["منصّتان ", "تعملان اليوم", "."],
    description:
      "صمّمتهما وبنيتهما وأطلقتهما بالكامل، ويستعملهما العملاء حاليًا.",
    open: "فتح",
    screenshot: "صورة من موقع",
    project: "مشروع",
    stack: "التقنيات المستعملة",
    live: "زيارة الموقع",
    code: "الكود المصدري",
  },
  projects: [
    {
      name: "Capitol.ma",
      tagline: "منصة للاستثمار في المغرب",
      description:
        "منصة تتيح الاستثمار في العقار والفن والشركات غير المدرجة في البورصة. بنيتها بالكامل: لوحات تحكم تعرض الاستثمارات بالأرقام والرسوم، تسجيل دخول آمن بالبريد الإلكتروني أو بحساب Google، صلاحيات مختلفة لكل نوع من المستخدمين، وحماية من محاولات الاختراق والروبوتات. كما ربطتها بخدمات مثل WhatsApp والرسائل النصية وحجز المواعيد والذكاء الاصطناعي، وأتولّى نشر تحديثاتها بشكل آلي.",
      tags: ["React 19", "Node.js / Express", "Prisma", "PostgreSQL", "OpenAI", "Fly.io"],
      year: "2025–26",
      image: "/images/capitol.png",
      liveUrl: "https://capitol.ma",
      repoUrl: "https://github.com/khalilzaatari-666/capitol.ma",
    },
    {
      name: "Horkos WM",
      tagline: "منصة لمكتب استشارات في إدارة الثروات",
      description:
        "المنصة الرقمية لمكتب Horkos Wealth Management، وهو مكتب للاستشارات في الاستثمار المالي معتمد لدى الهيئة المغربية لسوق الرساميل (AMMC). تضم موقعًا تعريفيًا للعموم، وفضاءً خاصًا يتابع فيه كل عميل ملفه ووثائقه، ولوحة إدارة للمستشارين. من مميزاتها: دخول آمن برمز يصل عبر البريد أو بحساب Google أو Microsoft، إنشاء وثائق PDF تلقائيًا، حجز المواعيد مباشرة في الأجندة، رسائل بريد آلية، وحماية متقدمة ضد الهجمات.",
      tags: ["Next.js 16", "React 19", "Supabase", "Tailwind v4", "Vercel", "Cloudflare"],
      year: "2026",
      image: "/images/horkos.png",
      liveUrl: "https://horkos-wm.com",
      repoUrl: "https://github.com/khalilzaatari-666/horkos-wm",
    },
  ],

  experienceSection: {
    eyebrow: "الخبرات",
    title: ["الخبرة و", "التكوين", "."],
    site: "موقع",
    education: "التكوين",
    certifications: "الشهادات",
  },
  experience: [
    {
      company: "Horkos WM",
      role: "مطوّر مواقع وتطبيقات ويب",
      period: "يونيو 2026 – أغسطس 2026",
      url: "https://horkos-wm.com",
      bullets: [
        "بناء المنصة الرقمية لمكتب Horkos Wealth Management (استشارات في الاستثمار المالي، معتمد لدى AMMC): موقع تعريفي، فضاء خاص بالعملاء، ولوحة إدارة.",
        "تطوير خصائص تسهّل عمل المكتب يوميًا: دخول آمن، إنشاء وثائق PDF تلقائيًا، حجز المواعيد، ورسائل بريد آلية.",
        "إطلاق المنصة على الإنترنت مع حماية متقدمة ضد الهجمات، واختبارات آلية تتأكد من أن كل شيء يعمل بعد كل تحديث.",
      ],
    },
    {
      company: "Capitol.ma",
      role: "مطوّر مواقع وتطبيقات ويب",
      period: "أكتوبر 2025 – أغسطس 2026",
      url: "https://capitol.ma",
      bullets: [
        "تطوير وصيانة capitol.ma، منصة للاستثمار موجّهة للسوق المغربية.",
        "بناء النظام الذي يعمل خلف المنصة: حسابات المستخدمين، الصلاحيات، حماية البيانات، ومنع الاستعمال المفرط أو المشبوه.",
        "ربط المنصة بخدمات خارجية (WhatsApp، الرسائل النصية، حجز المواعيد، الذكاء الاصطناعي، تخزين الملفات) وأتمتة نشر التحديثات.",
      ],
    },
    {
      company: "PCS Agri",
      role: "مهندس ذكاء اصطناعي ومطوّر ويب",
      period: "مارس 2025 – يونيو 2025",
      bullets: [
        "منصة ويب لتدريب نماذج ذكاء اصطناعي تتعرّف على العناصر في الصور، موجّهة للمجال الفلاحي.",
        "أداة لتنظيم الصور ووضع العلامات عليها يدويًا وتلقائيًا، حتى يتعلّم منها النموذج.",
        "أتمتة الدورة كاملة: تدريب النماذج، تقييمها، اختبارها، ثم تشغيلها على السحابة.",
      ],
    },
    {
      company: "3D Smart Factory",
      role: "مهندس ذكاء اصطناعي",
      period: "يوليو 2024 – أغسطس 2024",
      bullets: [
        "تطوير نظام ذكاء اصطناعي يتعرّف على الوجه، يُستعمل كخطوة تحقق إضافية عند تسجيل الدخول.",
        "دمجه في تطبيق ويب، مع تحسينه ليقلّل الأخطاء في التعرّف ويُسرّع عملية التحقق.",
      ],
    },
    {
      company: "LeanSoft",
      role: "مطوّر تطبيقات الهاتف",
      period: "يوليو 2023 – أغسطس 2023",
      bullets: [
        "تطبيق هاتف (Android و iOS) لتسجيل دخول وخروج الموظفين لحظة بلحظة، مرتبط مباشرة ببرنامج التسيير Odoo.",
      ],
    },
  ],

  education: {
    school: "المدرسة الوطنية للعلوم التطبيقية (ENSA)، الجديدة",
    degree: "دبلوم مهندس دولة في هندسة المعلوميات والتقنيات الناشئة (2ITE)",
    period: "2020 – 2025",
  },

  certifications: [
    "IBM: Data Science Tools",
    "Cisco: Introduction to Data Science",
    "AWS Academy: Cloud Foundations",
    "AWS Academy: Engineering / Operations Technician",
  ],

  contact: {
    eyebrow: "تواصل",
    title: ["لنعمل", "معًا", "."],
    intro: "هل لديك مشروع، أو عرض عمل، أو مجرد سؤال؟ راسلني وسأردّ عليك في أقرب وقت.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
  },

  footer: {
    madeIn: "صُنع في أكادير",
    top: "إلى الأعلى ↑",
  },

  whatsapp: "راسلني على WhatsApp",
};

export const content: Record<Lang, Content> = { fr, en, ar };
