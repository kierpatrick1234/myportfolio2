/**
 * ─────────────────────────────────────────────────────────────
 *  Edit this file to update your portfolio.
 *  Everything on the page is generated from the data below.
 *  Items marked TODO are placeholders — replace them with your own.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Kier Patrick Empang",
  shortName: "Kier",
  role: "Full-Stack Developer",
  location: "Philippines", // TODO
  email: "you@example.com", // TODO
  /** Put your photo at /public/me.jpg and set this to "/me.jpg". Leave "" for a placeholder. */
  photo: "",
  /** GitHub username — enables the live contribution graph. Leave "" to hide it. */
  github: "", // TODO
  socials: [
    { label: "github", href: "https://github.com/" }, // TODO
    { label: "linkedin", href: "https://www.linkedin.com/" }, // TODO
    { label: "facebook", href: "https://facebook.com/" }, // TODO
  ],
};

/**
 * Hero bio. Plain strings are text; objects render as inline chips.
 * Available icons: code, monitor, phone, database, spark, rocket, pencil, star
 */
export const bio: (string | { chip: string; icon: string })[][] = [
  [
    "I'm a ",
    { chip: "full-stack", icon: "code" },
    " developer. I build modern ",
    { chip: "web apps", icon: "monitor" },
    " & ",
    { chip: "APIs", icon: "database" },
    ", and lately I'm exploring ",
    { chip: "AI tools", icon: "spark" },
    ".",
  ],
  [
    "Right now I'm building ",
    { chip: "my capstone", icon: "rocket" },
    " and I love turning ",
    { chip: "rough ideas", icon: "pencil" },
    " into things people actually use.",
  ],
];

/** Small credential badges under the hero. */
export const badges = [
  { title: "BS IT", sub: "Your University", icon: "cap" }, // TODO
  { title: "Dean's Lister", sub: "AY 2025–26", icon: "star" }, // TODO
  { title: "Open to work", sub: "Internship · 2027", icon: "spark" },
] as const;

/** Three numbers that prove impact. Keep them honest. */
export const stats = [
  { value: "20", suffix: "+", label: "projects built" },
  { value: "5", suffix: " yrs", label: "writing code" }, // TODO
  { value: "1.2K", suffix: "", label: "users served" }, // TODO
];

export type Project = {
  title: string;
  tagline: string;
  tags: string[];
  /** First tag is rendered as the highlighted "rank" pill. */
  stack: string[];
  href?: string;
  repo?: string;
  /** Single letter / emoji used for the app icon. */
  icon: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: "Campus Event Hub",
    tagline: "Event sign-ups and QR check-in for student orgs. Check-in went from 5 min to 20 sec.",
    tags: ["#1 capstone pick", "1,200+ students"],
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    href: "#",
    repo: "#",
    icon: "E",
    color: "#2563eb",
  },
  {
    title: "Budget Buddy",
    tagline: "An offline-first expense tracker that works without signal.",
    tags: ["Classmates' favorite", "PWA"],
    stack: ["React", "TypeScript", "IndexedDB"],
    href: "#",
    repo: "#",
    icon: "₱",
    color: "#16a34a",
  },
  {
    title: "Stockroom API",
    tagline: "Inventory REST API with role-based auth for a small retail shop.",
    tags: ["In production", "REST"],
    stack: ["Node.js", "Express", "MySQL"],
    href: "#",
    repo: "#",
    icon: "S",
    color: "#ea580c",
  },
];

export const experience = [
  { year: "2026", role: "Freelance Web Developer", org: "Self-employed" }, // TODO
  { year: "2025", role: "Student Developer", org: "IT Department" },
  { year: "2025", role: "Team Lead, Capstone", org: "Your University" },
  { year: "2023", role: "Started BS Information Technology", org: "Your University" },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Tailwind",
  "Git",
  "Figma",
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", mark: "fCC", href: "#" }, // TODO
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp", mark: "JS", href: "#" }, // TODO
  { title: "Git & GitHub Essentials", issuer: "GitHub", mark: "GH", href: "#" }, // TODO
];

/** Real quotes only — from teachers, clients, teammates. Remove the section by leaving this empty. */
export const recommendations = [
  {
    quote: "Kier takes a vague idea and comes back with something that actually works. Reliable and quick to learn.", // TODO
    name: "Teacher Name",
    title: "Instructor · IT110",
  },
  {
    quote: "Delivered our site ahead of schedule and explained everything clearly. Would hire again.", // TODO
    name: "Client Name",
    title: "Owner · Local Business",
  },
  {
    quote: "The teammate who made our capstone ship. Great at code reviews and keeping us organized.", // TODO
    name: "Classmate Name",
    title: "Capstone Teammate",
  },
];
