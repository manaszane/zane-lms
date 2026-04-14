export interface CoursePlanPrice {
  plan: "accelerator" | "deepDive"
  region: {
    IN: { INR: number }
    US: { USD: number }
    EU: { EUR: number }
    GB: { GBP: number }
    AU: { AUD: number }
  }
}

export interface CourseSection {
  id: string
  order: number
  title: string
  content: string | string[]
  type: "text" | "grid" | "badges" | "list"
}

export interface Course {
  id: string
  name: string
  category: "Foundational Programs" | "Advanced Intelligence Programs" | "Elite R&D Programs"

  tagline: string
  duration: string
  price: string

  hero: {
    imageUrl: string
    overlayOpacity: number
  }

  theme: {
    primary: string
    gradient: string
    backgroundStyle: "glass" | "dark" | "light"
  }

  sections: CourseSection[]
  plans: CoursePlanPrice[]
}

export const courses: Course[] = [
  // Foundational Programs
  {
    id: "foundational-001",
    name: "Pro Training in Pharmacovigilance & Drug Safety Operations with real-world case processing and AI-powered SD and RI systems",
    category: "Foundational Programs",
    tagline:
      "Master safety signal detection, SUSAR reporting, and AI-augmented adverse event analysis. Train in WHO-compliant frameworks with real-time PV workflows.",
    duration: "12-24 weeks",
    price: "₹39,000 – ₹75,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 39000 },
          US: { USD: 450 },
          EU: { EUR: 420 },
          GB: { GBP: 360 },
          AU: { AUD: 680 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 75000 },
          US: { USD: 860 },
          EU: { EUR: 800 },
          GB: { GBP: 690 },
          AU: { AUD: 1300 },
        },
      },
    ],
    hero: {
      imageUrl:
        "https://lifepointresearch.com/wp-content/uploads/2022/11/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health-1024x683.jpg",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#A855F7",
      gradient: "from-purple-900/90 via-purple-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "pv-001",
        title: "Course Overview",
        order: 1,
        type: "text",
        content:
          "This Pro Training operates as a sustained professional execution environment. Participants train as junior safety professionals within a fully-simulated regulatory organization, processing real-world adverse event reports and managing signal detection workflows.\n\nThis is not a course in theory; it is a 3–6 month immersion in the systems, processes, and decision-making protocols that define modern drug safety operations. Completion signifies demonstrated capability to operate within regulated pharmaceutical environments.\n\nThe program is derived from ZANE ProEd's Pro Training architecture: execution-first, role-based, system-immersive, and performance-tracked from day one.",
      },
      {
        id: "pv-002",
        title: "Program Format & Tracks",
        order: 2,
        type: "grid",
        content: [
          "3-Month Intensive: 40+ hours per week, accelerated case load progression.",
          "6-Month Standard: 40+ hours per week, deeper system mastery and case portfolio exposure.",
          "Online Execution: Secure browser-based interface, no installation required.",
          "Live Feedback: peer-based case reviews and instructor evaluation.",
          "Asynchronous Documentation: Independent analysis and report writing.",
          "Operational Windows: Designated windows for simulated workplace execution.",
        ],
      },
      {
        id: "pv-003",
        title: "Execution Capabilities Developed",
        order: 3,
        type: "list",
        content: [
          "Case Processing & Triage: Rapidly assess and route AE reports without error.",
          "Signal Detection & Analysis: Distinguish genuine safety risks from dataset noise.",
          "Risk Identification: Conduct safety evaluations that withstand regulatory scrutiny.",
          "System Operation: Work within controlled, auditable, compliance-heavy environments.",
          "Judgment Under Pressure: Prioritize cases when timelines compress and stakes remain constant.",
          "Cross-Functional Coordination: Collaborate with medical, regulatory, and QA stakeholders.",
        ],
      },
      {
    id: "pv-004",
    title: "AI-Augmented Execution",
    order: 4,
    type: "grid",
    content: [
      "Signal Detection Copilot: Pattern recognition and flagging of statistical anomalies.",
      "Case Assessment Validator: Automated completeness and compliance checks.",
      "Narrative Engine: AI-generated initial case summaries for human certification.",
      "Risk Intelligence System: Portfolio-wide risk dashboards and early-warning indicators.",
      "Regulatory Query Assistant: Template support for health authority correspondence.",
    ],
  },
      {
        id: "pv-005",
        title: "Who This Program Is For",
        order: 5,
        type: "badges",
        content: [
          "Medicine",
          "Pharmacy",
          "Dentistry",
          "Nursing",
          "Life Sciences",
          "Biotechnology",
          "Clinical Research",
          "Public Health",
          "Data Science",
          "Final-Year Students",
          "Recent Graduates",
          "Career Transitioners",
        ],
      },
      {
        id: "pv-006",
        title: "Role & Career Alignment",
        order: 6,
        type: "list",
        content: [
          "Drug Safety Associate / PV Analyst",
          "Medical Safety Evaluator",
          "Regulatory Safety Specialist",
          "Signal Detection Analyst",
          "Quality & Compliance Officer",
          "Clinical Safety Investigator",
          "Vigilance Systems Specialist",
        ],
      },
        {
    id: "pv-007",
    title: "Performance Evaluation",
    order: 7,
    type: "grid",
    content: [
      "Accuracy: Correctness of coding and causality determinations.",
      "Consistency: Alignment with organizational standards over time.",
      "Compliance: Adherence to audit trails and regulatory deadlines.",
      "Speed: Case processing efficiency benchmarked against industry standards.",
      "Judgment: Quality of reasoning during high-pressure periods.",
      "Feedback Cycles: Weekly performance dashboards and monthly calibration.",
    ],
  },
    ],
  },
  {
    id: "foundational-002",
    name: "Pro Training in Clinical Data Management with AI-Augmented Trial Data Operations",
    category: "Foundational Programs",
    tagline: "Flagship Pro Training with full-scale workplace simulation and AI-augmented trial data execution.",
    duration: "12-24 weeks",
    price: "₹42,000 – ₹80,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 42000 },
          US: { USD: 485 },
          EU: { EUR: 450 },
          GB: { GBP: 390 },
          AU: { AUD: 730 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 80000 },
          US: { USD: 920 },
          EU: { EUR: 855 },
          GB: { GBP: 740 },
          AU: { AUD: 1390 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#3B82F6",
      gradient: "from-blue-900/90 via-blue-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cdm-001",
        title: "Course Overview",
        order: 1,
        type: "text",
        content:
          "This Pro Training operates as a sustained professional execution environment. Participants train as junior data managers within fully-simulated multi-site trial organizations, managing EDC systems, query resolution, and database lock procedures under authentic trial pressure.\n\nThis is not a theory course; it is a 3–6 month immersion in the systems and decision-making protocols that define modern trial data management. Completion signifies demonstrated capability to maintain data integrity under audit conditions and execute decisions with regulatory defensibility.",
      },
      {
        id: "cdm-002",
        title: "Program Format & Tracks",
        order: 2,
        type: "grid",
        content: [
          "3-Month Intensive: 40+ hours/week with accelerated data volume and query complexity.",
          "6-Month Standard: 40+ hours/week for deeper mastery of the full trial lifecycle.",
          "Online Execution: Browser-based simulated trial environment (No software install required).",
          "Live Feedback: Real-time data quality review sessions and instructor evaluations.",
          "Asynchronous Work: Independent data entry, analysis, and reporting outside execution windows.",
          "System Immersive: Direct operation of EDC platforms and validation engines.",
        ],
      },
      {
        id: "cdm-003",
        title: "Execution Capabilities Developed",
        order: 3,
        type: "grid",
        content: [
          "EDC & Entry: Navigate complex CRFs while maintaining strict audit trails.",
          "Data Validation: Identify inconsistencies and generate compliant site queries.",
          "Database Integrity: Manage access controls and audit-ready documentation.",
          "Anomalies Detection: Recognize statistical trends and investigation-worthy outliers.",
          "Multi-Site Coordination: Standardize data flow across 8–20 simulated investigator sites.",
          "Regulatory Submission: Prepare CDISC-standard data packages and quality reports.",
        ],
      },
      {
        id: "cdm-004",
        title: "Who This Program Is For",
        order: 4,
        type: "badges",
        content: [
          "Medicine & Pharmacy",
          "Nursing & Allied Health",
          "Life Sciences & Biotech",
          "Clinical Research",
          "Public Health",
          "Health Informatics",
          "Data Science & Statistics",
          "Computer Science",
          "Final-Year Students",
          "Career Transitioners",
        ],
      },
      {
        id: "cdm-005",
        title: "Role & Career Alignment",
        order: 5,
        type: "list",
        content: [
          "Clinical Data Coordinator / Assistant",
          "Clinical Data Manager",
          "Database Programmer / Administrator",
          "Data Quality Specialist",
          "Site Data Manager",
          "Regulatory Data Specialist",
          "Data Operations Manager",
        ],
      },
    ],
  },
  {
    id: "foundational-003",
    name: "Pro Training in Medical Coding with AI-augmented, US RCM-aligned workflows",
    category: "Foundational Programs",
    tagline:
      "Draft CSRs, investigator brochures, CTD modules, and patient narratives. Train with AI-assisted templates and regulatory writing frameworks.",
    duration: "12-24 weeks",
    price: "₹40,000 – ₹76,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 40000 },
          US: { USD: 460 },
          EU: { EUR: 430 },
          GB: { GBP: 370 },
          AU: { AUD: 700 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 76000 },
          US: { USD: 875 },
          EU: { EUR: 815 },
          GB: { GBP: 705 },
          AU: { AUD: 1320 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#10B981",
      gradient: "from-emerald-900/90 via-emerald-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "mw-001",
        title: "Course Overview",
        content:
          "Develop expertise in creating essential regulatory and clinical documents, including Clinical Study Reports (CSRs), Investigator Brochures (IBs), Common Technical Document (CTD) modules, and patient narratives. This program incorporates AI-assisted templates and advanced regulatory writing best practices to ensure clarity, accuracy, and compliance.",
        order: 1,
        type: "text",
      },
      {
        id: "mw-002",
        title: "Program Format & Duration",
        content:
          "The certificate program spans 12-24 weeks, featuring a flexible learning experience with self-paced online content and live, interactive sessions. A weekly commitment of 10-15 hours is recommended. Session recordings are available.",
        order: 2,
        type: "text",
      },
      {
        id: "mw-003",
        title: "Key Competencies Developed",
        content:
          "You will master the principles of scientific and regulatory writing, develop skills in drafting various clinical documents, learn effective data presentation techniques, understand ICH guidelines for documentation, and utilize AI tools for enhanced writing efficiency and quality.",
        order: 3,
        type: "text",
      },
      {
        id: "mw-004",
        title: "Target Audience",
        content:
          "This program is suitable for individuals with a background in life sciences, healthcare professionals, current medical writers seeking formal certification, and regulatory affairs professionals looking to enhance their documentation skills.",
        order: 4,
        type: "text",
      },
      {
        id: "mw-005",
        title: "Career Alignment",
        content:
          "Graduates are well-positioned for roles such as Medical Writer, Regulatory Writer, Clinical Documentation Specialist, and Scientific Editor in pharmaceutical, biotechnology, and medical communication companies.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "foundational-004",
    name: "Pro Training in Regulatory Affairs with AI-augmented submission systems and global compliance frameworks",
    category: "Foundational Programs",
    tagline:
      "Navigate INDs, NDAs, MAAs, and post-approval changes. Master ICH, FDA, EMA, and CDSCO regulations with AI-driven submission tracking.",
    duration: "12-24 weeks",
    price: "₹44,000 – ₹84,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 44000 },
          US: { USD: 505 },
          EU: { EUR: 470 },
          GB: { GBP: 410 },
          AU: { AUD: 765 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 84000 },
          US: { USD: 965 },
          EU: { EUR: 900 },
          GB: { GBP: 780 },
          AU: { AUD: 1460 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#F59E0B",
      gradient: "from-amber-900/90 via-amber-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "ra-001",
        title: "Course Overview",
        content:
          "Gain a comprehensive understanding of global regulatory affairs and compliance. This program covers the intricacies of Investigational New Drug (IND) applications, New Drug Applications (NDA), Marketing Authorisation Applications (MAA), and post-approval changes. You will master regulations from key agencies like the FDA, EMA, and CDSCO, and learn to utilize AI-driven tools for efficient submission tracking and compliance monitoring.",
        order: 1,
        type: "text",
      },
      {
        id: "ra-002",
        title: "Program Format & Duration",
        content:
          "Delivered over 12-24 weeks, this certificate program combines self-paced online learning with live interactive sessions. A weekly commitment of 10-15 hours is advised. Recorded sessions are available for flexible study.",
        order: 2,
        type: "text",
      },
      {
        id: "ra-003",
        title: "Key Competencies Developed",
        content:
          "Core competencies include navigating regulatory pathways for drug development, preparing and submitting regulatory dossiers, understanding global regulatory intelligence, ensuring compliance with Good Regulatory Practices (GRP), and leveraging AI for regulatory process optimization.",
        order: 3,
        type: "text",
      },
      {
        id: "ra-004",
        title: "Target Audience",
        content:
          "This certificate is ideal for pharmaceutical professionals aspiring to roles in regulatory affairs, scientists transitioning from R&D, quality assurance professionals expanding their scope, and consultants specializing in regulatory compliance.",
        order: 4,
        type: "text",
      },
      {
        id: "ra-005",
        title: "Career Alignment",
        content:
          "Graduates can pursue careers as Regulatory Affairs Specialist, Regulatory Compliance Manager, Submission Manager, and Regulatory Affairs Consultant.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "foundational-005",
    name: "Pro Training in Clinical Research Practices with AI-augmented trial operations",
    category: "Foundational Programs",
    tagline:
      "Coordinate multi-site trials, monitor patient recruitment, and ensure GCP compliance. Use AI tools for site selection and study startup.",
    duration: "12-24 weeks",
    price: "₹41,000 – ₹78,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 41000 },
          US: { USD: 470 },
          EU: { EUR: 440 },
          GB: { GBP: 380 },
          AU: { AUD: 715 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 78000 },
          US: { USD: 895 },
          EU: { EUR: 835 },
          GB: { GBP: 725 },
          AU: { AUD: 1355 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#EC4899",
      gradient: "from-pink-900/90 via-pink-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cro-001",
        title: "Course Overview",
        content:
          "This program focuses on the practical aspects of clinical research operations and site management. You will learn to effectively coordinate multi-site trials, optimize patient recruitment strategies, and ensure rigorous adherence to Good Clinical Practice (GCP) guidelines. The curriculum also incorporates AI tools to enhance site selection and streamline study startup processes.",
        order: 1,
        type: "text",
      },
      {
        id: "cro-002",
        title: "Program Format & Duration",
        content:
          "The specialist certificate is offered over 12-24 weeks, combining flexible online learning with live interactive sessions. A weekly time commitment of 10-15 hours is recommended. Session recordings are available.",
        order: 2,
        type: "text",
      },
      {
        id: "cro-003",
        title: "Key Competencies Developed",
        content:
          "Key skills include clinical trial protocol management, site initiation and monitoring, patient recruitment and retention, regulatory compliance (GCP, ICH), risk-based monitoring, use of CTMS, and AI applications in clinical operations for predictive analytics and resource allocation.",
        order: 3,
        type: "text",
      },
      {
        id: "cro-004",
        title: "Target Audience",
        content:
          "This certificate is ideal for clinical research coordinators, clinical trial managers, study nurses, and healthcare professionals aiming to excel in clinical operations and site management.",
        order: 4,
        type: "text",
      },
      {
        id: "cro-005",
        title: "Career Alignment",
        content:
          "Graduates can pursue roles such as Clinical Research Associate (CRA), Clinical Trial Manager, Site Manager, and Clinical Operations Specialist.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "foundational-006",
    name: "Pro Training in QA/QC for Pharma and Healthcare with enterprise-level validation systems and AI-augmented audit intelligence",
    category: "Foundational Programs",
    tagline:
      "Conduct audits, manage CAPAs, and enforce SOPs across trial sites. Build proficiency in GCP, GMP, and AI-powered audit analytics.",
    duration: "12-24 weeks",
    price: "₹43,000 – ₹82,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 43000 },
          US: { USD: 495 },
          EU: { EUR: 460 },
          GB: { GBP: 400 },
          AU: { AUD: 750 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 82000 },
          US: { USD: 940 },
          EU: { EUR: 880 },
          GB: { GBP: 760 },
          AU: { AUD: 1425 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#8B5CF6",
      gradient: "from-violet-900/90 via-violet-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "qa-001",
        title: "Course Overview",
        content:
          "This advanced diploma provides in-depth knowledge of quality assurance (QA) and compliance in clinical trials. You will learn to conduct effective audits, manage Corrective and Preventive Actions (CAPA), and implement Standard Operating Procedures (SOPs) across various trial settings. The program emphasizes proficiency in GCP and GMP, alongside the application of AI-powered audit analytics for improved efficiency and risk assessment.",
        order: 1,
        type: "text",
      },
      {
        id: "qa-002",
        title: "Program Format & Duration",
        content:
          "Spanning 12-24 weeks, this diploma utilizes a blended learning approach with self-paced online modules and live interactive sessions. Expect a weekly commitment of 10-15 hours. All live sessions are recorded for your convenience.",
        order: 2,
        type: "text",
      },
      {
        id: "qa-003",
        title: "Key Competencies Developed",
        content:
          "Core competencies include designing and implementing QA systems, conducting internal and external audits, managing deviations and CAPAs, ensuring regulatory compliance, performing risk assessments, and utilizing data analytics for quality improvement in clinical trials.",
        order: 3,
        type: "text",
      },
      {
        id: "qa-004",
        title: "Target Audience",
        content:
          "This diploma is ideal for QA professionals, clinical research associates, regulatory affairs specialists, and anyone involved in ensuring the quality and integrity of clinical research data and processes.",
        order: 4,
        type: "text",
      },
      {
        id: "qa-005",
        title: "Career Alignment",
        content:
          "Graduates are prepared for roles such as QA Auditor, Compliance Specialist, Quality Manager, and Senior Clinical Research Associate in pharmaceutical companies, CROs, and regulatory bodies.",
        order: 5,
        type: "list",
      },
    ],
  },

  // Advanced Intelligence Programs
  {
    id: "advanced-001",
    name: "Pro Training in Public Health Intelligence, Epidemiology and Global Health Strategy",
    category: "Advanced Intelligence Programs",
    tagline:
      "Deploy machine learning models for trial optimization, predictive analytics, and adaptive randomization. Master Python, R, and AI platforms for clinical research.",
    duration: "20-32 weeks",
    price: "₹85,000 – ₹1,65,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 85000 },
          US: { USD: 975 },
          EU: { EUR: 910 },
          GB: { GBP: 790 },
          AU: { AUD: 1475 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 165000 },
          US: { USD: 1895 },
          EU: { EUR: 1765 },
          GB: { GBP: 1530 },
          AU: { AUD: 2870 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#7C3AED",
      gradient: "from-purple-900/90 via-indigo-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "ai-ct-001",
        title: "Program Overview",
        content:
          "This executive program delves into the application of Artificial Intelligence (AI) and machine learning (ML) in optimizing clinical trial design and execution. You will learn to deploy ML models for predictive analytics, adaptive randomization strategies, and trial simulation, gaining proficiency in Python, R, and various AI platforms essential for modern clinical research.",
        order: 1,
        type: "text",
      },
      {
        id: "ai-ct-002",
        title: "Program Format & Duration",
        content:
          "The program spans 20-32 weeks, structured with intensive online modules and live expert-led sessions, requiring approximately 15-20 hours of weekly commitment. Recorded sessions are provided.",
        order: 2,
        type: "text",
      },
      {
        id: "ai-ct-003",
        title: "Key Skills & Technologies",
        content:
          "Develop skills in AI/ML for clinical trial design, predictive modeling for patient stratification and outcome prediction, adaptive trial methodologies, statistical programming (Python, R), cloud computing platforms for AI, and data visualization for trial insights.",
        order: 3,
        type: "text",
      },
      {
        id: "ai-ct-004",
        title: "Target Audience",
        content:
          "Designed for clinical operations leaders, biostatisticians, data scientists in pharma/CROs, R&D managers, and regulatory affairs professionals seeking to leverage AI in clinical trials.",
        order: 4,
        type: "text",
      },
      {
        id: "ai-ct-005",
        title: "Career Advancement",
        content:
          "Enhance your career prospects in roles such as AI Clinical Trial Strategist, Clinical Data Scientist, Biostatistician specializing in AI, and Head of Clinical Innovation.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "advanced-002",
    name: "Pro Training in AI Driven Healthcare Analytics, Decision Intelligence and Predictive Care Systems",
    category: "Advanced Intelligence Programs",
    tagline:
      "Build automated signal detection systems, disproportionality analyses, and ML-powered safety surveillance platforms. Integrate VigiBase and FDA FAERS data.",
    duration: "20-32 weeks",
    price: "₹88,000 – ₹1,70,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 88000 },
          US: { USD: 1010 },
          EU: { EUR: 940 },
          GB: { GBP: 820 },
          AU: { AUD: 1530 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 170000 },
          US: { USD: 1950 },
          EU: { EUR: 1820 },
          GB: { GBP: 1580 },
          AU: { AUD: 2955 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#EF4444",
      gradient: "from-red-900/90 via-red-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cpv-001",
        title: "Program Overview",
        content:
          "This Master's Certificate program focuses on advanced computational techniques for pharmacovigilance and drug safety analytics. You will learn to develop automated signal detection systems, perform disproportionality analyses, and build ML-powered safety surveillance platforms. Practical integration with databases like VigiBase and FDA FAERS is a key component.",
        order: 1,
        type: "text",
      },
      {
        id: "cpv-002",
        title: "Program Format & Duration",
        content:
          "The program spans 20-32 weeks, involving intensive online learning and expert-led sessions, with an estimated weekly commitment of 15-20 hours. Session recordings are available.",
        order: 2,
        type: "text",
      },
      {
        id: "cpv-003",
        title: "Key Skills & Technologies",
        content:
          "Acquire skills in natural language processing (NLP) for adverse event data extraction, statistical modeling for signal detection, machine learning algorithms for safety surveillance, data mining techniques, integration of regulatory databases, and data visualization for safety insights.",
        order: 3,
        type: "text",
      },
      {
        id: "cpv-004",
        title: "Target Audience",
        content:
          "Ideal for pharmacovigilance professionals, data scientists in the pharmaceutical industry, drug safety scientists, biostatisticians, and regulatory affairs experts looking to specialize in computational drug safety.",
        order: 4,
        type: "text",
      },
      {
        id: "cpv-005",
        title: "Career Advancement",
        content:
          "This program prepares you for advanced roles such as Computational Pharmacovigilance Scientist, Drug Safety Data Analyst, AI/ML Specialist in Pharmacovigilance, and Head of Safety Analytics.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "advanced-003",
    name: "Pro Training in Medical Affairs, MSL Excellence and Scientific Communication",
    category: "Advanced Intelligence Programs",
    tagline:
      "Engage KOLs, present clinical data, and manage publication strategies. Train on real scientific platforms with chatbot-assisted content.",
    duration: "12-24 weeks",
    price: "₹45,000 – ₹86,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 45000 },
          US: { USD: 520 },
          EU: { EUR: 480 },
          GB: { GBP: 420 },
          AU: { AUD: 780 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 86000 },
          US: { USD: 990 },
          EU: { EUR: 920 },
          GB: { GBP: 800 },
          AU: { AUD: 1495 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#06B6D4",
      gradient: "from-cyan-900/90 via-cyan-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "ma-001",
        title: "Course Overview",
        content:
          "This program provides essential skills for medical affairs professionals, focusing on Key Opinion Leader (KOL) engagement, effective presentation of clinical data, and strategic publication management. You'll train on industry-standard scientific platforms and learn to leverage chatbot-assisted content for enhanced communication and knowledge dissemination.",
        order: 1,
        type: "text",
      },
      {
        id: "ma-002",
        title: "Program Format & Duration",
        content:
          "The certificate is delivered over 12-24 weeks, employing a flexible learning model that includes self-paced online modules and live interactive sessions. A weekly commitment of 10-15 hours is suggested. All live sessions are recorded.",
        order: 2,
        type: "text",
      },
      {
        id: "ma-003",
        title: "Key Competencies Developed",
        content:
          "Develop expertise in medical strategy development, KOL identification and engagement, scientific communication planning, publication strategy and execution, presentation of complex data, and leveraging digital tools for medical affairs activities.",
        order: 3,
        type: "text",
      },
      {
        id: "ma-004",
        title: "Target Audience",
        content:
          "This certificate is ideal for physicians, pharmacists, and scientists interested in medical affairs roles, medical science liaisons (MSLs), and professionals in pharmaceutical marketing or communications.",
        order: 4,
        type: "text",
      },
      {
        id: "ma-005",
        title: "Career Alignment",
        content:
          "Graduates can pursue roles such as Medical Science Liaison (MSL), Medical Advisor, Publication Manager, and Medical Affairs Specialist.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "advanced-004",
    name: "Pro Training in MedTech Innovation, Intelligent Diagnostics and AI Powered Device Strategy",
    category: "Advanced Intelligence Programs",
    tagline:
      "Interpret NGS data, design biomarker-driven trials, and integrate genomic insights into clinical workflows. Hands-on with bioinformatics tools and variant calling.",
    duration: "20-32 weeks",
    price: "₹92,000 – ₹1,78,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 92000 },
          US: { USD: 1055 },
          EU: { EUR: 985 },
          GB: { GBP: 855 },
          AU: { AUD: 1600 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 178000 },
          US: { USD: 2045 },
          EU: { EUR: 1905 },
          GB: { GBP: 1655 },
          AU: { AUD: 3095 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#F97316",
      gradient: "from-orange-900/90 via-orange-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "pm-001",
        title: "Program Overview",
        content:
          "This certificate program focuses on the intersection of precision medicine, genomics, and data integration. You will learn to interpret Next-Generation Sequencing (NGS) data, design biomarker-driven clinical trials, and integrate genomic insights into clinical workflows. Hands-on experience with bioinformatics tools and variant calling techniques is a core part of this program.",
        order: 1,
        type: "text",
      },
      {
        id: "pm-002",
        title: "Program Format & Duration",
        content:
          "The program spans 20-32 weeks, featuring intensive online learning and live expert sessions, requiring approximately 15-20 hours of weekly commitment. Recorded sessions are available.",
        order: 2,
        type: "text",
      },
      {
        id: "pm-003",
        title: "Key Skills & Technologies",
        content:
          "Develop expertise in genomic data analysis (NGS, WGS), bioinformatics pipelines, variant annotation and interpretation, biomarker discovery and validation, principles of pharmacogenomics, design of biomarker-guided trials, and data visualization for genomic insights.",
        order: 3,
        type: "text",
      },
      {
        id: "pm-004",
        title: "Target Audience",
        content:
          "Ideal for genomic scientists, bioinformaticians, clinical researchers, pharmacologists, and data scientists interested in precision medicine and oncology.",
        order: 4,
        type: "text",
      },
      {
        id: "pm-005",
        title: "Career Advancement",
        content:
          "This certificate enhances career prospects in roles such as Precision Medicine Scientist, Genomic Data Analyst, Clinical Bioinformatician, Biomarker Development Specialist, and Clinical Trial Scientist.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "advanced-005",
    name: "Pro Training in Digital Health Product Management, AI Enabled UX and Virtual Care Systems",
    category: "Advanced Intelligence Programs",
    tagline:
      "Design DCTs, integrate wearable sensor data, and develop remote patient monitoring systems. Learn FDA/EMA digital health frameworks and data privacy standards.",
    duration: "20-32 weeks",
    price: "₹86,000 – ₹1,67,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 86000 },
          US: { USD: 990 },
          EU: { EUR: 920 },
          GB: { GBP: 800 },
          AU: { AUD: 1495 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 167000 },
          US: { USD: 1920 },
          EU: { EUR: 1785 },
          GB: { GBP: 1550 },
          AU: { AUD: 2905 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#8B5CF6",
      gradient: "from-violet-900/90 via-violet-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "dh-001",
        title: "Program Overview",
        content:
          "This specialist program explores the forefront of digital health, including the design of Decentralized Clinical Trials (DCTs), integration of data from wearable sensors, and development of remote patient monitoring systems. You will gain a thorough understanding of FDA and EMA digital health frameworks and critical data privacy standards.",
        order: 1,
        type: "text",
      },
      {
        id: "dh-002",
        title: "Program Format & Duration",
        content:
          "The program spans 20-32 weeks, employing a flexible online learning model with live expert sessions. An approximate weekly commitment of 15-20 hours is required. Recorded sessions are available.",
        order: 2,
        type: "text",
      },
      {
        id: "dh-003",
        title: "Key Skills & Technologies",
        content:
          "Develop skills in designing and implementing DCT protocols, selecting and integrating wearable devices and sensors, building remote monitoring platforms, understanding digital health regulations (e.g., FDA 21 CFR Part 11), data security and privacy (HIPAA, GDPR), and telemedicine implementation.",
        order: 3,
        type: "text",
      },
      {
        id: "dh-004",
        title: "Target Audience",
        content:
          "Ideal for clinical operations professionals, IT specialists in healthcare, product managers in digital health, healthcare consultants, and researchers interested in innovative trial methodologies.",
        order: 4,
        type: "text",
      },
      {
        id: "dh-005",
        title: "Career Advancement",
        content:
          "This program prepares for roles such as Digital Health Specialist, DCT Manager, Remote Monitoring Coordinator, Digital Clinical Trial Designer, and Health Informatics Specialist.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "advanced-006",
    name: "Pro Training in Insurance, Health Policy and Healthcare Product Innovation",
    category: "Advanced Intelligence Programs",
    tagline:
      "Monitor regulatory landscapes, predict policy changes, and strategize submissions across FDA, EMA, PMDA, and NMPA. Use AI-powered regulatory tracking tools.",
    duration: "20-32 weeks",
    price: "₹87,000 – ₹1,69,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 87000 },
          US: { USD: 1000 },
          EU: { EUR: 930 },
          GB: { GBP: 810 },
          AU: { AUD: 1510 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 169000 },
          US: { USD: 1940 },
          EU: { EUR: 1810 },
          GB: { GBP: 1570 },
          AU: { AUD: 2940 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#10B981",
      gradient: "from-emerald-900/90 via-emerald-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "ri-001",
        title: "Program Overview",
        content:
          "This certificate program is designed to equip professionals with the skills to navigate the complex landscape of regulatory intelligence and global policy. You will learn to monitor evolving regulatory requirements across major agencies (FDA, EMA, PMDA, NMPA), predict policy changes, and develop strategic approaches for submissions. The program incorporates AI-powered regulatory tracking tools for enhanced efficiency.",
        order: 1,
        type: "text",
      },
      {
        id: "ri-002",
        title: "Program Format & Duration",
        content:
          "The program spans 20-32 weeks, combining intensive online learning with live expert sessions, requiring approximately 15-20 hours of weekly commitment. Recorded sessions are available.",
        order: 2,
        type: "text",
      },
      {
        id: "ri-003",
        title: "Key Skills & Technologies",
        content:
          "Develop expertise in regulatory landscape analysis, policy forecasting, comparative regulatory assessment, strategic submission planning, regulatory intelligence platforms, and AI tools for regulatory monitoring and compliance.",
        order: 3,
        type: "text",
      },
      {
        id: "ri-004",
        title: "Target Audience",
        content:
          "Ideal for regulatory affairs professionals, policy analysts, market access specialists, and legal counsel in the pharmaceutical and biotechnology industries.",
        order: 4,
        type: "text",
      },
      {
        id: "ri-005",
        title: "Career Advancement",
        content:
          "This program enhances career opportunities in roles such as Regulatory Intelligence Manager, Global Policy Analyst, Senior Regulatory Affairs Specialist, and Market Access Strategist.",
        order: 5,
        type: "list",
      },
    ],
  },

  // Elite R&D Programs
  {
    id: "elite-001",
    name: "AI Powered Drug Discovery, Computational Biology and Multi Omics Intelligence",
    category: "Elite R&D Programs",
    tagline:
      "Lead early-stage drug discovery pipelines—from hit identification to lead optimization. Master computational chemistry, in silico screening, and structure-activity relationships.",
    duration: "32-48 weeks",
    price: "₹1,50,000 – ₹2,90,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 150000 },
          US: { USD: 1725 },
          EU: { EUR: 1605 },
          GB: { GBP: 1395 },
          AU: { AUD: 2610 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 290000 },
          US: { USD: 3330 },
          EU: { EUR: 3100 },
          GB: { GBP: 2695 },
          AU: { AUD: 5045 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#A855F7",
      gradient: "from-purple-900/90 via-purple-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "dd-001",
        title: "Fellowship Overview",
        content:
          "This elite R&D fellowship focuses on pioneering drug discovery processes, from initial molecular target identification to lead optimization. You will master cutting-edge techniques in computational chemistry, in silico screening, structural biology, and structure-activity relationship (SAR) analysis, leveraging AI-driven approaches.",
        order: 1,
        type: "text",
      },
      {
        id: "dd-002",
        title: "Fellowship Structure & Duration",
        content:
          "The fellowship spans 32-48 weeks, comprising intensive research-oriented modules and hands-on project work. Expect a significant commitment with opportunities for publication and presentation.",
        order: 2,
        type: "text",
      },
      {
        id: "dd-003",
        title: "Research Areas & Skills",
        content:
          "Key areas include target validation using omics data, virtual screening and docking, AI-driven de novo drug design, ADMET prediction, molecular modeling, and cheminformatics. Fellows will develop strong computational and analytical skills.",
        order: 3,
        type: "text",
      },
      {
        id: "dd-004",
        title: "Ideal Candidates",
        content:
          "This fellowship is suited for PhDs and postdoctoral researchers in computational biology, medicinal chemistry, cheminformatics, biochemistry, and related fields with a strong interest in drug discovery.",
        order: 4,
        type: "text",
      },
      {
        id: "dd-005",
        title: "Career Impact",
        content:
          "Prepares fellows for leading roles in R&D at pharmaceutical and biotechnology companies, academic research positions, and specialized drug discovery startups.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "elite-002",
    name: "Neuroscience, Neurotech Systems and Brain AI",
    category: "Elite R&D Programs",
    tagline:
      "Build population PK models, conduct dose-response analyses, and simulate drug exposures. Proficiency in NONMEM, Phoenix WinNonlin, and R-based modeling.",
    duration: "32-48 weeks",
    price: "₹1,55,000 – ₹3,00,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 155000 },
          US: { USD: 1780 },
          EU: { EUR: 1660 },
          GB: { GBP: 1440 },
          AU: { AUD: 2695 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 300000 },
          US: { USD: 3445 },
          EU: { EUR: 3210 },
          GB: { GBP: 2790 },
          AU: { AUD: 5220 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#06B6D4",
      gradient: "from-cyan-900/90 via-cyan-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cpkpd-001",
        title: "Fellowship Overview",
        content:
          "This advanced fellowship provides deep expertise in clinical pharmacology, focusing on pharmacokinetic (PK) and pharmacodynamic (PD) modeling. Fellows will learn to build population PK models, conduct comprehensive dose-response analyses, and simulate drug exposures to optimize therapeutic strategies. Proficiency in industry-standard software like NONMEM, Phoenix WinNonlin, and R-based modeling is a key outcome.",
        order: 1,
        type: "text",
      },
      {
        id: "cpkpd-002",
        title: "Fellowship Structure & Duration",
        content:
          "Spanning 32-48 weeks, this fellowship combines advanced coursework with hands-on research in PK/PD modeling, drug development strategy, and regulatory submissions. Significant emphasis is placed on research projects and potential publications.",
        order: 2,
        type: "text",
      },
      {
        id: "cpkpd-003",
        title: "Key Skills & Methodologies",
        content:
          "Develop advanced skills in population PK analysis, mechanistic modeling, PK/PD integration, simulation and modeling for trial design, drug-drug interaction studies, special population modeling, and statistical programming for PK/PD analysis.",
        order: 3,
        type: "text",
      },
      {
        id: "cpkpd-004",
        title: "Ideal Candidates",
        content:
          "This fellowship is ideal for individuals with a PhD or PharmD in pharmacology, pharmaceutical sciences, or related quantitative disciplines, seeking specialized expertise in clinical pharmacology modeling.",
        order: 4,
        type: "text",
      },
      {
        id: "cpkpd-005",
        title: "Career Impact",
        content:
          "Prepares fellows for critical roles in pharmaceutical R&D, including Clinical Pharmacologist, PK/PD Modeler, Quantitative Clinical Pharmacologist, and Lead Scientist in drug development.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "elite-003",
    name: "Immunotechnology, Biologics Engineering and Vaccine Intelligence",
    category: "Elite R&D Programs",
    tagline:
      "Bridge bench-to-bedside research by validating biomarkers, designing companion diagnostics, and implementing biomarker-driven trials. Hands-on with multi-omics data.",
    duration: "32-48 weeks",
    price: "₹1,58,000 – ₹3,05,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 158000 },
          US: { USD: 1815 },
          EU: { EUR: 1690 },
          GB: { GBP: 1470 },
          AU: { AUD: 2750 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 305000 },
          US: { USD: 3505 },
          EU: { EUR: 3265 },
          GB: { GBP: 2835 },
          AU: { AUD: 5305 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#10B981",
      gradient: "from-emerald-900/90 via-emerald-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "tm-001",
        title: "Certificate Overview",
        content:
          "This R&D certificate program bridges the gap between preclinical research and clinical application through advanced translational medicine and biomarker strategy. You will gain expertise in validating biomarkers, designing companion diagnostics, and implementing biomarker-driven clinical trials, with hands-on experience in analyzing multi-omics data.",
        order: 1,
        type: "text",
      },
      {
        id: "tm-002",
        title: "Program Structure & Duration",
        content:
          "The program spans 32-48 weeks, integrating advanced coursework with practical research projects. Emphasis is placed on developing robust biomarker strategies and understanding their clinical and regulatory implications.",
        order: 2,
        type: "text",
      },
      {
        id: "tm-003",
        title: "Key Skills & Methodologies",
        content:
          "Develop expertise in biomarker discovery and validation, companion diagnostic development, translational research methodologies, integration of multi-omics data (genomics, proteomics, metabolomics), clinical assay development, and regulatory pathways for biomarkers.",
        order: 3,
        type: "text",
      },
      {
        id: "tm-004",
        title: "Ideal Candidates",
        content:
          "Suited for PhDs and postdocs in molecular biology, genetics, bioinformatics, clinical research, and drug development who aim to specialize in translational science and biomarker development.",
        order: 4,
        type: "text",
      },
      {
        id: "tm-005",
        title: "Career Impact",
        content:
          "Prepares candidates for roles such as Translational Scientist, Biomarker Development Lead, Clinical Development Scientist, and R&D Project Manager in the pharmaceutical and biotech industries.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "elite-004",
    name: "Digital Health, Precision Medicine and Therapeutic AI Engineering",
    category: "Elite R&D Programs",
    tagline:
      "Design CAR-T protocols, CRISPR-based therapeutics, and viral vector manufacturing workflows. Train on GMP requirements, potency assays, and regulatory CMC strategies.",
    duration: "32-48 weeks",
    price: "₹1,62,000 – ₹3,12,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 162000 },
          US: { USD: 1860 },
          EU: { EUR: 1735 },
          GB: { GBP: 1505 },
          AU: { AUD: 2820 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 312000 },
          US: { USD: 3585 },
          EU: { EUR: 3340 },
          GB: { GBP: 2900 },
          AU: { AUD: 5430 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#F59E0B",
      gradient: "from-amber-900/90 via-amber-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cgt-001",
        title: "Program Overview",
        content:
          "This advanced R&D program provides comprehensive training in the development of cell and gene therapies. You will learn to design CAR-T protocols, develop CRISPR-based therapeutics, and master viral vector manufacturing workflows. The curriculum covers Good Manufacturing Practice (GMP) requirements, potency assay development, and regulatory Chemistry, Manufacturing, and Controls (CMC) strategies.",
        order: 1,
        type: "text",
      },
      {
        id: "cgt-002",
        title: "Program Structure & Duration",
        content:
          "The program spans 32-48 weeks, offering an intensive research-focused curriculum with hands-on laboratory experience and project work. Emphasis is placed on cutting-edge technologies and regulatory compliance.",
        order: 2,
        type: "text",
      },
      {
        id: "cgt-003",
        title: "Key Skills & Technologies",
        content:
          "Develop expertise in CAR-T cell therapy design and engineering, CRISPR/Cas9 gene editing techniques, viral vector production (AAV, lentivirus), GMP manufacturing for cell and gene therapies, analytical method development, potency assay characterization, and regulatory CMC for advanced therapies.",
        order: 3,
        type: "text",
      },
      {
        id: "cgt-004",
        title: "Ideal Candidates",
        content:
          "Suited for PhDs and postdoctoral researchers in molecular biology, immunology, bioengineering, genetics, and pharmaceutical sciences with a keen interest in developing next-generation therapeutics.",
        order: 4,
        type: "text",
      },
      {
        id: "cgt-005",
        title: "Career Impact",
        content:
          "Prepares graduates for leadership roles in cell and gene therapy R&D, process development, manufacturing, and regulatory affairs at leading biotechnology companies and research institutions.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "elite-005",
    name: "Pro Training in Healthcare Consulting, Analytics and Digital Transformation",
    category: "Elite R&D Programs",
    tagline:
      "Develop monoclonal antibodies, fusion proteins, and biosimilar candidates. Master upstream/downstream processing, comparability studies, and immunogenicity assessment.",
    duration: "32-48 weeks",
    price: "₹1,60,000 – ₹3,08,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 160000 },
          US: { USD: 1840 },
          EU: { EUR: 1715 },
          GB: { GBP: 1490 },
          AU: { AUD: 2785 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 308000 },
          US: { USD: 3540 },
          EU: { EUR: 3295 },
          GB: { GBP: 2865 },
          AU: { AUD: 5360 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#EC4899",
      gradient: "from-pink-900/90 via-pink-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "bb-001",
        title: "Certificate Overview",
        content:
          "This R&D certificate program focuses on the development of biologics and biosimilars. You will master the design and development of monoclonal antibodies, fusion proteins, and biosimilar candidates. Expertise will be gained in upstream and downstream processing, analytical comparability studies, and immunogenicity assessment, crucial for bringing these complex medicines to market.",
        order: 1,
        type: "text",
      },
      {
        id: "bb-002",
        title: "Program Structure & Duration",
        content:
          "The program runs for 32-48 weeks, combining in-depth theoretical knowledge with practical laboratory and data analysis experience. Emphasis is placed on process development, analytical characterization, and regulatory strategy.",
        order: 2,
        type: "text",
      },
      {
        id: "bb-003",
        title: "Key Skills & Technologies",
        content:
          "Develop expertise in protein expression and purification, upstream and downstream process development for biologics, analytical characterization techniques (e.g., HPLC, mass spectrometry), comparability study design and execution, immunogenicity testing, and biosimilar regulatory pathways.",
        order: 3,
        type: "text",
      },
      {
        id: "bb-004",
        title: "Ideal Candidates",
        content:
          "Suited for scientists and researchers in biotechnology and pharmaceutical R&D, process engineers, analytical scientists, and quality control specialists involved in biologic drug development.",
        order: 4,
        type: "text",
      },
      {
        id: "bb-005",
        title: "Career Impact",
        content:
          "Prepares graduates for advanced roles in biologics R&D, process development, analytical sciences, quality assurance, and regulatory affairs within the biopharmaceutical industry.",
        order: 5,
        type: "list",
      },
    ],
  },
  {
    id: "elite-006",
    name: "Executive R&D Program in Pharmaceutical Manufacturing & CMC Excellence",
    category: "Elite R&D Programs",
    tagline:
      "Oversee drug substance/drug product development, scale-up processes, and technology transfer. Expertise in process validation, stability studies, and PAT implementation.",
    duration: "32-48 weeks",
    price: "₹1,56,000 – ₹3,02,000",
    plans: [
      {
        plan: "accelerator",
        region: {
          IN: { INR: 156000 },
          US: { USD: 1790 },
          EU: { EUR: 1670 },
          GB: { GBP: 1450 },
          AU: { AUD: 2710 },
        },
      },
      {
        plan: "deepDive",
        region: {
          IN: { INR: 302000 },
          US: { USD: 3470 },
          EU: { EUR: 3230 },
          GB: { GBP: 2810 },
          AU: { AUD: 5255 },
        },
      },
    ],
    hero: {
      imageUrl: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=1920&q=80",
      overlayOpacity: 0.7,
    },
    theme: {
      primary: "#8B5CF6",
      gradient: "from-violet-900/90 via-violet-800/80 to-background/95",
      backgroundStyle: "glass",
    },
    sections: [
      {
        id: "cmc-001",
        title: "Program Overview",
        content:
          "This executive R&D program focuses on achieving excellence in pharmaceutical manufacturing and Chemistry, Manufacturing, and Controls (CMC). You will gain expertise in overseeing drug substance and drug product development, process scale-up, and technology transfer. Key areas include process validation, stability studies, and the implementation of Process Analytical Technology (PAT).",
        order: 1,
        type: "text",
      },
      {
        id: "cmc-002",
        title: "Program Structure & Duration",
        content:
          "The program runs for 32-48 weeks, combining advanced theoretical modules with practical case studies and project work focused on industrial pharmaceutical manufacturing challenges.",
        order: 2,
        type: "text",
      },
      {
        id: "cmc-003",
        title: "Key Skills & Technologies",
        content:
          "Develop expertise in formulation development, process chemistry, scale-up and technology transfer, GMP manufacturing principles, process validation, analytical method development and validation, stability testing, PAT implementation, and regulatory CMC submissions.",
        order: 3,
        type: "text",
      },
      {
        id: "cmc-004",
        title: "Ideal Candidates",
        content:
          "This program is ideal for chemical engineers, process chemists, formulation scientists, manufacturing managers, and quality assurance professionals in the pharmaceutical industry.",
        order: 4,
        type: "text",
      },
      {
        id: "cmc-005",
        title: "Career Impact",
        content:
          "Prepares individuals for leadership positions in pharmaceutical manufacturing, process development, CMC regulatory affairs, and quality operations.",
        order: 5,
        type: "list",
      },
    ],
  },
]

export const categories = ["Foundational Programs", "Advanced Intelligence Programs", "Elite R&D Programs"] as const

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter((course) => course.category === category)
}

export function searchCourses(query: string): Course[] {
  const lowerQuery = query.toLowerCase()
  return courses.filter(
    (course) =>
      course.name.toLowerCase().includes(lowerQuery) ||
      course.tagline.toLowerCase().includes(lowerQuery) ||
      course.sections.some((s) => s.title.toLowerCase().includes(lowerQuery)),
  )
}
