import type { RegionCode, SupportedCurrency } from "./regionalPricing"

export type CoursePlan = "accelerator" | "deepDive"

export interface PricingBenefit {
  title: string
  items: string[]
}

export interface RegionalPricing {
  currency: SupportedCurrency
  amount: number
  benefits: PricingBenefit[]
}

export interface InstitutionalPricing {
  minSeats: number
  maxSeats: number
  perSeatAmount: number
  currency: SupportedCurrency
  benefits: PricingBenefit[]
}

export interface CoursePricing {
  courseId: string
  plans: {
    accelerator?: Partial<Record<RegionCode, RegionalPricing>>
    deepDive?: Partial<Record<RegionCode, RegionalPricing>>
  }
  institutional?: {
    regions: Partial<Record<RegionCode, InstitutionalPricing>>
  }
}

/* -------------------------------------------------
   CANONICAL BENEFIT BLOCKS (REUSED)
-------------------------------------------------- */

const ACCELERATOR_BASE: PricingBenefit[] = [
  {
    title: "Program Duration & Scope",
    items: [
      "12 weeks (3 months)",
      "~60 instructional hours",
      "Rapid foundational skill acquisition",
      "Beginner-friendly entry into clinical & pharma roles",
    ],
  },
  {
    title: "Mentorship Support",
    items: [
      "Bi-weekly group mentorship via Omega",
      "Guidance on trial protocols and safety reports",
      "Structured support for early-career learners",
    ],
  },
  {
    title: "Simulations & Practical Experience",
    items: [
      "Individual Omega-powered simulations",
      "Trial data entry workflows",
      "Quality verification exercises",
    ],
  },
  {
    title: "Portfolio Development",
    items: [
      "1 professional-grade project",
      "Supports initial job applications",
    ],
  },
  {
    title: "Resources & Features",
    items: [
      "Omega digital repository",
      "Trial templates & documentation",
      "Bi-weekly community forums",
      "Zane Nexflow resume optimization",
      "Mock interviews",
    ],
  },
  {
    title: "Outcomes & ROI",
    items: [
      "Beginner-friendly structure",
      "~1.5× return on investment",
      "Fast entry into industry roles",
    ],
  },
]

const DEEPDIVE_BASE: PricingBenefit[] = [
  {
    title: "Program Duration & Scope",
    items: [
      "24 weeks (6 months)",
      "~120 instructional hours",
      "Advanced mastery across multiple domains",
      "~40% higher assessment scores vs Accelerator",
    ],
  },
  {
    title: "Mentorship Support",
    items: [
      "Dedicated 1:1 mentorship via Omega",
      "Personalized feedback on critical workflows",
      "~50% faster skill development",
    ],
  },
  {
    title: "Simulations & Practical Experience",
    items: [
      "Collaborative real-world simulations",
      "Group trial projects",
      "Live QA audits",
      "Chatbot-assisted workflows",
      "2× practical exposure vs Accelerator",
    ],
  },
  {
    title: "Portfolio Development",
    items: [
      "3 professional-grade projects",
      "~45% higher placement rate",
    ],
  },
  {
    title: "Advanced Resources & Features",
    items: [
      "Practice datasets",
      "Bi-monthly progress dashboards",
      "Monthly industry webinars",
      "Verified micro-credentials",
      "3-month extended placement support",
      "AI-powered job matching",
    ],
  },
  {
    title: "Outcomes & ROI",
    items: [
      "~3.5× return on investment",
      "Senior-ready role preparation",
      "Long-term career acceleration",
    ],
  },
]

/* -------------------------------------------------
   COUNTRY-SPECIFIC EXTENSIONS
-------------------------------------------------- */

const REGION_ALIGNMENT = {
  IN: {
    title: "Regional Industry Alignment (India)",
    items: [
      "CDSCO & DCGI regulatory frameworks",
      "Indian CRO & pharma case studies",
      "Mentorship from Indian industry professionals",
      "Placement alignment with Indian pharma market",
    ],
  },
  US: {
    title: "Regional Industry Alignment (United States)",
    items: [
      "FDA-regulated clinical trial workflows",
      "US healthcare & CRO operations",
      "Mentorship from US-based professionals",
      "Preparation for global & US roles",
    ],
  },
  EU: {
    title: "Regional Industry Alignment (Europe)",
    items: [
      "EMA regulatory framework integration",
      "Multi-country EU trial exposure",
      "GDPR-compliant data handling",
      "EU pharmaceutical career alignment",
    ],
  },
  GB: {
    title: "Regional Industry Alignment (United Kingdom)",
    items: [
      "MHRA regulatory pathways",
      "UK clinical trial landscape",
      "Post-Brexit regulatory updates",
      "UK pharma & CRO hiring alignment",
    ],
  },
  AU: {
    title: "Regional Industry Alignment (Australia)",
    items: [
      "TGA regulatory framework",
      "Australian biotech & clinical trials",
      "APAC market exposure",
      "Career preparation for ANZ region",
    ],
  },
} satisfies Record<RegionCode, PricingBenefit>

/* -------------------------------------------------
   COURSE PRICING (FOUNDATIONAL-001)
-------------------------------------------------- */

export const COURSE_PRICING: CoursePricing[] = [
  {
    courseId: "foundational-001",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 39000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 450, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 420, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 360, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 680, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 75000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 860, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 800, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 690, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1300, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
  {
    courseId: "foundational-002",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 42000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 485, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 450, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 390, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 730, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 80000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 920, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 855, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 740, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1390, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
  {
    courseId: "foundational-003",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 40000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 460, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 430, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 370, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 700, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 76000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 875, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 815, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 705, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1320, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
  {
    courseId: "foundational-004",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 44000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 505, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 470, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 410, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 765, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 84000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 965, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 900, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 780, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1460, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
  {
    courseId: "foundational-005",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 41000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 470, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 440, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 380, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 715, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 78000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 895, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 835, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 725, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1355, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
  {
    courseId: "foundational-006",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 43000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 495, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 460, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 400, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 750, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 82000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 940, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 880, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 760, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1425, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },


  // Advanced Intelligence Programs (longer duration, higher pricing)
  {
    courseId: "advanced-001",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 85000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 975, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 910, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 790, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1475, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 165000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 1895, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 1765, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 1530, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 2870, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
    {
    courseId: "advanced-007",
    plans: {
      accelerator: {
        IN: { currency: "INR", amount: 45000, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 520, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 480, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 420, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 780, benefits: [...ACCELERATOR_BASE, REGION_ALIGNMENT.AU] },
      },
      deepDive: {
        IN: { currency: "INR", amount: 86000, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.IN] },
        US: { currency: "USD", amount: 990, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.US] },
        EU: { currency: "EUR", amount: 920, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.EU] },
        GB: { currency: "GBP", amount: 800, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.GB] },
        AU: { currency: "AUD", amount: 1495, benefits: [...DEEPDIVE_BASE, REGION_ALIGNMENT.AU] },
      },
    },
  },
]

/* -------------------------------------------------
   HELPERS (UNCHANGED)
-------------------------------------------------- */

export function getCoursePricing(courseId: string): CoursePricing | undefined {
  return COURSE_PRICING.find((cp) => cp.courseId === courseId)
}

export function getPlanPricing(
  courseId: string,
  plan: CoursePlan,
  region: RegionCode,
): RegionalPricing | undefined {
  const pricing = getCoursePricing(courseId)
  if (!pricing) return undefined
  return pricing.plans[plan]?.[region]
}
