// -----------------------------------------------------------------------------
// Contenu du portfolio : tout est centralisé ici pour faciliter la mise à jour.
// Modifie simplement les valeurs ci-dessous ; les composants s'adaptent.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Khalil Zaatari",
  role: "Développeur Full Stack & Data Science",
  location: "Agadir, Maroc",
  email: "khalilzaatari1@gmail.com",
  phone: "+212 617 246 500",
  github: "https://github.com/khalilzaatari-666",
  linkedin: "https://www.linkedin.com/in/khalil-zaatari-9974031bb/",
  cvFullStack: "/cv-fullstack.pdf",
  cvDataScience: "/cv-datascience.pdf",
  // Images optionnelles (mettre les fichiers dans public/ puis renseigner le chemin)
  portrait: "/images/portrait.jpg", // photo dans le hero (vide = emplacement hachuré)
  tagline:
    "Ingénieur d'État en informatique (ENSA El Jadida), je conçois et déploie des applications web de bout en bout, des interfaces React & Next.js aux back-ends Node.js/Express et Python, avec une solide spécialisation en science des données, du traitement à grande échelle jusqu'à la visualisation et le machine learning.",
};

export const about = {
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
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
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
];

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

export const projects: Project[] = [
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
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  url?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
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
];

export const education = {
  school: "École Nationale des Sciences Appliquées (ENSA), El Jadida",
  degree:
    "Diplôme d'Ingénieur d'État, Ingénierie Informatique et Technologies Émergentes (2ITE)",
  period: "2020 à 2025",
};

export const certifications = [
  "IBM : Data Science Tools",
  "Cisco : Introduction to Data Science",
  "AWS Academy : Cloud Foundations",
  "AWS Academy : Engineering / Operations Technician",
];

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
