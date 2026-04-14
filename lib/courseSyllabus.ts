export interface SyllabusUnit {
  title: string
  description?: string
  topics: string[]
}

export interface CourseSyllabus {
  courseId: string
  country?: string
  plan?: string
  units: SyllabusUnit[]
}

export const COURSE_SYLLABUS: CourseSyllabus[] = [
  {
    courseId: "foundational-001",
    country: "EU",
    plan: "accelerator",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities",
        topics: [
          "Understanding the CDM role in clinical trials",
          "Career progression from entry-level to senior positions",
          "Industry demand and salary expectations",
          "Regulatory landscape overview",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and designs",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "Regulatory compliance frameworks",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
    ],
  },
  {
    courseId: "foundational-001",
    country: "EU",
    plan: "deep-dive",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities",
        topics: [
          "Understanding the CDM role in clinical trials",
          "Career progression from entry-level to senior positions",
          "Industry demand and salary expectations",
          "Regulatory landscape overview",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and designs",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "Regulatory compliance frameworks",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
      {
        title: "Regulatory Compliance & Standards",
        description: "Meeting global regulatory requirements",
        topics: [
          "FDA 21 CFR Part 11 compliance",
          "CDISC standards (SDTM, ADaM, ODM)",
          "ICH-GCP guidelines",
          "Data privacy regulations (GDPR, HIPAA)",
        ],
      },
      {
        title: "Medical Coding Systems",
        description: "Standardization of clinical terminology",
        topics: [
          "MedDRA coding for adverse events",
          "WHO Drug Dictionary applications",
          "ICD coding fundamentals",
          "Coding quality control",
        ],
      },
      {
        title: "Data Review & Lock Procedures",
        description: "Final stages of data management",
        topics: [
          "Database lock preparation",
          "Final data review processes",
          "Discrepancy resolution",
          "Database archive and handover",
        ],
      },
      {
        title: "Industry Tools & Platforms",
        description: "Hands-on training with professional software",
        topics: [
          "Medidata Rave platform",
          "Oracle Clinical experience",
          "SAS programming basics for CDM",
          "Validation documentation",
        ],
      },
      {
        title: "Professional Project & Certification",
        description: "Apply learning to real-world scenarios",
        topics: [
          "End-to-end trial simulation",
          "Portfolio development",
          "Interview preparation",
          "Industry certification exam prep",
        ],
      },
    ],
  },
  {
    courseId: "foundational-001",
    country: "US",
    plan: "accelerator",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities in the USA",
        topics: [
          "Understanding the CDM role in US clinical trials",
          "Career progression and salary trends in USA",
          "FDA regulations and industry standards",
          "US healthcare system overview",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and FDA requirements",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "HIPAA compliance",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
    ],
  },
  {
    courseId: "foundational-001",
    country: "US",
    plan: "deep-dive",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities in the USA",
        topics: [
          "Understanding the CDM role in US clinical trials",
          "Career progression and salary trends in USA",
          "FDA regulations and industry standards",
          "US healthcare system overview",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and FDA requirements",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "HIPAA compliance",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
      {
        title: "Regulatory Compliance & Standards",
        description: "Meeting FDA and global regulatory requirements",
        topics: [
          "FDA 21 CFR Part 11 compliance",
          "CDISC standards (SDTM, ADaM, ODM)",
          "ICH-GCP guidelines",
          "HIPAA and data privacy",
        ],
      },
      {
        title: "Medical Coding Systems",
        description: "Standardization of clinical terminology",
        topics: [
          "MedDRA coding for adverse events",
          "WHO Drug Dictionary applications",
          "ICD-10 coding fundamentals",
          "Coding quality control",
        ],
      },
      {
        title: "Data Review & Lock Procedures",
        description: "Final stages of data management",
        topics: [
          "Database lock preparation",
          "Final data review processes",
          "Discrepancy resolution",
          "Database archive and handover",
        ],
      },
      {
        title: "Industry Tools & Platforms",
        description: "Hands-on training with professional software",
        topics: [
          "Medidata Rave platform",
          "Oracle Clinical experience",
          "SAS programming for CDM",
          "Validation documentation",
        ],
      },
      {
        title: "Professional Project & Certification",
        description: "Apply learning to real-world scenarios",
        topics: [
          "End-to-end trial simulation",
          "Portfolio development",
          "Interview preparation",
          "Industry certification exam prep",
        ],
      },
    ],
  },
  {
    courseId: "foundational-001",
    country: "IN",
    plan: "accelerator",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities in India",
        topics: [
          "Understanding the CDM role in Indian clinical trials",
          "Career progression and salary trends in India",
          "DCGI regulations and industry standards",
          "Indian clinical research landscape",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and DCGI requirements",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "Indian regulatory compliance",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
    ],
  },
  {
    courseId: "foundational-001",
    country: "IN",
    plan: "deep-dive",
    units: [
      {
        title: "Program Overview & Career Pathways",
        description: "Introduction to clinical data management and professional opportunities in India",
        topics: [
          "Understanding the CDM role in Indian clinical trials",
          "Career progression and salary trends in India",
          "DCGI regulations and industry standards",
          "Indian clinical research landscape",
        ],
      },
      {
        title: "Clinical Trial Fundamentals",
        description: "Core concepts of clinical research methodology",
        topics: [
          "Clinical trial phases and DCGI requirements",
          "Good Clinical Practice (GCP) principles",
          "Informed consent and ethics",
          "Indian regulatory compliance",
        ],
      },
      {
        title: "Database Design & Configuration",
        description: "Technical foundations of clinical data systems",
        topics: [
          "Electronic Data Capture (EDC) systems overview",
          "Case Report Form (CRF) design principles",
          "Edit check specification and implementation",
          "Database validation and testing",
        ],
      },
      {
        title: "Data Collection & Quality Control",
        description: "Operational aspects of clinical data management",
        topics: [
          "Data entry and monitoring workflows",
          "Query management and resolution",
          "Data cleaning strategies",
          "Source data verification",
        ],
      },
      {
        title: "Regulatory Compliance & Standards",
        description: "Meeting DCGI and global regulatory requirements",
        topics: [
          "DCGI Schedule Y compliance",
          "CDISC standards (SDTM, ADaM, ODM)",
          "ICH-GCP guidelines adapted for India",
          "Data privacy regulations",
        ],
      },
      {
        title: "Medical Coding Systems",
        description: "Standardization of clinical terminology",
        topics: [
          "MedDRA coding for adverse events",
          "WHO Drug Dictionary applications",
          "ICD coding fundamentals",
          "Coding quality control",
        ],
      },
      {
        title: "Data Review & Lock Procedures",
        description: "Final stages of data management",
        topics: [
          "Database lock preparation",
          "Final data review processes",
          "Discrepancy resolution",
          "Database archive and handover",
        ],
      },
      {
        title: "Industry Tools & Platforms",
        description: "Hands-on training with professional software",
        topics: [
          "Medidata Rave platform",
          "Oracle Clinical experience",
          "SAS programming for CDM",
          "Validation documentation",
        ],
      },
      {
        title: "Professional Project & Certification",
        description: "Apply learning to real-world scenarios",
        topics: [
          "End-to-end trial simulation",
          "Portfolio development",
          "Interview preparation",
          "Industry certification exam prep",
        ],
      },
    ],
  },
]

export function getCourseSyllabus(courseId: string, country?: string, plan?: string): CourseSyllabus | undefined {
  return COURSE_SYLLABUS.find(
    (cs) => cs.courseId === courseId && (!country || cs.country === country) && (!plan || cs.plan === plan),
  )
}
