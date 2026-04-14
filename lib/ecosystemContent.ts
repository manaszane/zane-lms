export interface EcosystemSection {
  id: string
  title: string
  subtitle?: string
  content: string[]
  type: "problem" | "vision" | "architecture" | "division" | "impact"
}

export const ECOSYSTEM_STORY: EcosystemSection[] = [
  {
    id: "overview",
    title: "About Zane ProEd",
    subtitle: "A Global Ecosystem for Professional Education, Intelligence, and Leadership",
    content: [
      "Zane ProEd is a global professional ecosystem designed to integrate education, applied skill development, career intelligence, industry insight, publishing, and leadership networks into a single operating system for professional growth.",
      "Active across multiple countries and disciplines, Zane ProEd addresses a structural failure in modern education and workforce development: learning, execution, career planning, and industry intelligence are treated as separate systems, resulting in prolonged onboarding, misaligned skills, and slow professional progression.",
      "To date, the Zane ProEd ecosystem has engaged over one million individuals globally, including students, professionals, educators, researchers, and industry stakeholders, through its platforms, programs, intelligence channels, and professional networks.",
    ],
    type: "vision",
  },
  {
    id: "problem",
    title: "The Problem Zane ProEd Was Built to Solve",
    content: [
      "Across high-skill and regulated industries, organizations lose substantial time and resources due to extended onboarding cycles, inconsistent job readiness, and misalignment between academic training and real-world execution.",
      "Traditional education models prioritize curriculum completion over execution capability. Career planning is typically external to learning. Industry intelligence exists in isolated publications, disconnected from training and decision-making.",
      "This fragmentation results in slow time-to-competence, skill mismatch between education and employment, redundant training costs for organizations, and limited visibility into real performance outcomes.",
      "Zane ProEd replaces this fragmented landscape with a single, integrated ecosystem where learning, execution, intelligence, and career progression reinforce one another continuously.",
    ],
    type: "problem",
  },
  {
    id: "vision-mission",
    title: "Vision and Mission",
    content: [
      "Vision: To build a globally trusted professional ecosystem where education, intelligence, and execution function as a unified and adaptive system aligned with real industry conditions.",
      "Mission: To equip individuals and institutions with execution-ready skills, verifiable proof of work, career intelligence grounded in market demand, and access to professional networks and leadership insight.",
      "All delivered through an integrated ecosystem rather than disconnected platforms.",
    ],
    type: "vision",
  },
]

export interface Division {
  id: string
  name: string
  tagline: string
  description: string
  whatYouGet: string[]
  howItWorks: string[]
  scale?: string
  icon: string
}

export const ECOSYSTEM_DIVISIONS: Division[] = [
  {
    id: "omega",
    name: "Zane Omega",
    tagline: "Applied Learning and Simulation Infrastructure",
    description:
      "Zane Omega is the applied learning and simulation system within the Zane ProEd ecosystem. It enables participants to build competence through structured execution of role-based workflows that mirror real professional environments.",
    whatYouGet: [
      "Role-specific simulation projects aligned with real job functions",
      "Industry-standard deliverables such as reports, analyses, audits, protocols, dashboards, or operational plans",
      "Tool-based work using relevant platforms and workflows",
      "A structured proof-of-work portfolio suitable for employer or institutional review",
      "Performance evaluations and mentor feedback mapped to role competencies",
      "Zane ProEd certification linked directly to demonstrated execution",
    ],
    howItWorks: [
      "Defined professional roles and responsibilities",
      "Sequential tasks and dependencies reflecting real workflows",
      "Time-bound deliverables and quality checkpoints",
      "Decision-making under realistic operational constraints",
      "Mentors review outputs and provide structured feedback",
    ],
    scale: "Serves thousands of active learners across multiple countries with hundreds of applied simulation projects",
    icon: "Cpu",
  },
  {
    id: "nexflow",
    name: "Zane NexFlow",
    tagline: "Career Intelligence and Progression System",
    description:
      "Zane NexFlow connects skill development directly to career outcomes by embedding career intelligence into the learning and execution process.",
    whatYouGet: [
      "Role-mapped career pathways",
      "Skill gap prioritization based on market demand",
      "Transition guidance across functions and domains",
      "Alignment with relevant opportunities and placement pipelines",
      "Visibility into how training translates into employability",
    ],
    howItWorks: [
      "Analyzes data from employer partnerships and recruiter interactions",
      "Integrates with hiring platform data",
      "Tracks institutional placement records",
      "Conducts longitudinal labor market and role-demand research",
      "Combines individual performance data from Omega with market intelligence",
    ],
    icon: "TrendingUp",
  },
  {
    id: "sparc",
    name: "SPARC by Zane ProEd",
    tagline: "Industry Intelligence, Publishing, and Leadership Network",
    description:
      "SPARC is the intelligence and leadership division of Zane ProEd. It provides structured industry insight, publishing infrastructure, professional discourse, and leadership connectivity.",
    whatYouGet: [
      "Human-led analysis by domain specialists",
      "Continuous monitoring of research publications and regulatory updates",
      "Market activity and technology adoption tracking",
      "SPARC View: Decision-oriented interpretation layer",
      "Access to private, moderated SPARC Forum",
      "Publishing mechanisms for analytical contributions",
      "Recognition of leadership and innovation",
    ],
    howItWorks: [
      "Intelligence organized into defined pillars: research translation, innovation adoption, market dynamics, regulatory interpretation",
      "Structured delivery cadences from real-time alerts to monthly summaries",
      "Forum access through application review or institutional affiliation",
      "Tiered participation (Genesis, Premium, VIP, VVIP)",
      "Curated discussions and leadership sessions",
    ],
    scale:
      "Hundreds of senior practitioners including executives, founders, principal investigators, and domain specialists",
    icon: "Lightbulb",
  },
]

export const ENGAGEMENT_PATHS = [
  {
    audience: "Individuals",
    entry: "Enroll in Zane Pro Training programs powered by Omega",
    outcome: "Build execution-ready skills with verifiable proof of work",
  },
  {
    audience: "Professionals & Leaders",
    entry: "Engage through SPARC subscriptions and forum participation",
    outcome: "Access industry intelligence and leadership networks",
  },
  {
    audience: "Institutions",
    entry: "Integrate Omega and NexFlow into academic or professional training frameworks",
    outcome: "Demonstrate measurable employability and long-term impact",
  },
  {
    audience: "Explorers",
    entry: "Access introductory pathways, trials, and open intelligence content",
    outcome: "Discover ecosystem value before deeper commitment",
  },
]

export const ECOSYSTEM_STATS = [
  {
    value: "1M+",
    label: "Global Participants",
    description: "Students, professionals, educators, and industry stakeholders",
  },
  { value: "3", label: "Core Systems", description: "Omega, NexFlow, and SPARC working in unison" },
  { value: "Multiple", label: "Countries", description: "Active operations across global markets" },
  { value: "100%", label: "Integration", description: "Learning, intelligence, and execution unified" },
]
