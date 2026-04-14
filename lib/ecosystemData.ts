export interface CaseStudy {
  id: string
  role: string
  domain: string
  problem: string
  intervention: string
  outcome: string
}

export interface ResearchProject {
  id: string
  title: string
  domain: string
  status: "Active" | "Ongoing"
  impact: string
  image: string
}

export interface PlacementDrive {
  step: number
  title: string
  description: string
}

export interface StudentOfYear {
  name: string
  domain: string
  reason: string
  contribution: string
  mentorQuote?: string
  mentorName?: string
}

export interface Event {
  id: string
  title: string
  type: "Conference" | "Workshop" | "Panel" | "Talk"
  date: string
  description: string
  image: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-001",
    role: "Clinical Research Coordinator",
    domain: "Pharmacovigilance",
    problem: "Limited understanding of adverse event reporting frameworks and regulatory compliance",
    intervention: "Completed Pharmacovigilance Masterclass with focus on ICSR submission and signal detection",
    outcome: "Transitioned to Senior CRA role at global CRO, leading safety monitoring for Phase III trials",
  },
  {
    id: "cs-002",
    role: "Hospital Administrator",
    domain: "Healthcare Operations",
    problem: "Struggled with data-driven decision making and process optimization",
    intervention: "Enrolled in Healthcare Analytics program, worked on real hospital workflow case studies",
    outcome: "Implemented analytics dashboard reducing patient wait times by 35% in six months",
  },
  {
    id: "cs-003",
    role: "Medical Affairs Associate",
    domain: "Medical Writing",
    problem: "Needed structured training in regulatory document preparation",
    intervention: "Completed Medical Writing certification with focus on CTD and clinical study reports",
    outcome: "Promoted to Medical Writer, now authoring regulatory submissions for FDA and EMA",
  },
]

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "rp-001",
    title: "AI-assisted adverse event classification in oncology trials",
    domain: "Pharmacovigilance & AI",
    status: "Active",
    impact: "Reducing signal detection time by 40% through machine learning models",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "rp-002",
    title: "Standardization of clinical trial protocols across emerging markets",
    domain: "Regulatory Affairs",
    status: "Ongoing",
    impact: "Supporting multi-country trial design with unified compliance frameworks",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "rp-003",
    title: "Patient-centric outcome measurement in rare disease studies",
    domain: "Clinical Research",
    status: "Active",
    impact: "Developing validated instruments for patient-reported outcomes",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
]

export const PLACEMENT_PROCESS: PlacementDrive[] = [
  {
    step: 1,
    title: "Screening & Evaluation",
    description: "Profile review based on domain knowledge, project work, and program completion",
  },
  {
    step: 2,
    title: "Task-Based Assessment",
    description: "Real-world case studies and domain-specific problem solving exercises",
  },
  {
    step: 3,
    title: "Industry Interview Exposure",
    description: "Facilitated connections with hiring partners and recruiter networks",
  },
  {
    step: 4,
    title: "Alumni Mentorship",
    description: "One-on-one guidance from alumni already working in target roles",
  },
]

export const STUDENT_OF_YEAR: StudentOfYear = {
  name: "Goud Priyanka",
  domain: "Pharmacovigilance (ICSR & E2B(R3))",
  reason:
    "Outstanding execution of an end-to-end E2B(R3) ICSR workflow, demonstrating strong regulatory accuracy and practical pharmacovigilance competence across global authorities",
  contribution:
    "Successfully completed a full spontaneous AE case using E2B(R3) standards for metformin-induced nausea, validated mandatory fields via Grok, and submitted a compliant ICSR in ΩMEGA aligned with Medsafe, HSA, FDA, MHRA, EMA, and CDSCO requirements",
  mentorQuote:
    "Goud Priyanka showed exceptional clarity in E2B(R3) field mapping, regulatory reasoning, and system-level accuracy expected from a real-world pharmacovigilance professional.",
  mentorName: "Dr. Rajesh Kumar, Senior Director - Pharmacovigilance & Clinical Safety",
}

export const EVENTS: Event[] = [
  {
    id: "ev-001",
    title: "ISOP Conference at Manipal University",
    type: "Conference",
    date: "February 2025",
    description: "ISoP-aligned academic and industry gathering at Manipal University with emphasis on pharmacometrics, quantitative modeling, SOP digitalization, AI-driven analytics using PUMAS AI, and collaboration between research institutions and industry stakeholders in drug development.",
    image: "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ev-002",
    title: "5 Whys Conference at JSS University",
    type: "Conference",
    date: "April 2025",
    description: "Exploration of the 5 Whys methodology applied to clinical research and healthcare systems, highlighting root cause analysis for quality deviations, GCP compliance gaps, pharmacovigilance issues, and structured investigative practices in clinical operations.",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a21769b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ev-003",
    title: "TEDx Speaker Session",
    type: "Talk",
    date: "April 2025",
    description: "Session built around the theme “The Ripple Effect: Ideas. Choices. Stories,” examining how individual decisions and ideas propagate long-term impact across innovation, leadership, careers, and social systems through lived experiences and narratives.",
    image: "https://images.unsplash.com/photo-1475721027187-4024733924f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ev-004",
    title: "Singapore Global Summit",
    type: "Conference",
    date: "October 2025",
    description: "International forum addressing healthcare innovation, clinical research evolution, regulatory science, and cross-border collaboration among academia, industry leaders, and emerging technology ecosystems.",
    image: "https://images.unsplash.com/photo-1529070532779-d106644f6f4c?auto=format&fit=crop&q=80&w=800"
  }
]
