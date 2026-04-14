export interface NetworkMember {
  name: string
  company: string
  linkedin: string
  image: string
  role?: string
  companyLogo?: string
}

const ROLE_MAP: Record<string, string> = {
  "Dr. Jayanth": "Scientific Writer and Reviewer",
  "Nikita Saraswat": "Associate Scientific Writer",
  Khalfan: "Patient Care Advisor (Roche)",
  "Dishita Panchal": "Clinical Psychology Intern",
  "Dr Samim Ahmed Zakaria": "Community Pharmacist",
  "Kunjan Pal": "ICU Coordinator",
  "Bhawya Gahlawat": "Hospital Pharmacist",
  "Ashwine Raj I": "Clinical Research Coordinator",
  "Madhav R": "Clinical Development",
  "Ramish Naim": "Data Science Intern",
  "Santhoshkumar S": "Senior Statistical Data Scientist",
  "Piyush Kumar": "Data Science Intern",
  "Rashika Singh": "Clinical Dietitian Intern",
  "Gaurav Singh": "Sun Pharma Intern",
  "Sara Beatriz": "Clinical Development Intern",
  "Dr. Harikrishnan": "Drug Safety Associate",
  "Dhruv Gupta": "Summer Intern",
  "Kanisma Mayilvaganan": "Project Management Executive",
}

function getRole(name: string): string {
  return ROLE_MAP[name] || "Industry Professional"
}

export const ZANE_NETWORK: NetworkMember[] = [
  {
    name: "Dr. Harikrishnan",
    company: "IQVIA",
    role: getRole("Dr. Harikrishnan"),
    linkedin: "https://www.linkedin.com/in/dr-harikrishnan-r-29ab92313",
    image: "https://static.wixstatic.com/media/6abdd9_fc4dfeaaa9c743d292921f1f9872cbc6~mv2.jpeg",
    companyLogo: "https://logo.clearbit.com/iqvia.com",
  },
  {
    name: "Nikita Saraswat",
    company: "Indegene",
    role: getRole("Nikita Saraswat"),
    linkedin: "https://www.linkedin.com/in/nikita-saraswat",
    image: "https://static.wixstatic.com/media/6abdd9_efd7bfa82b124e2bac9fcdabd7c72c6d~mv2.png",
    companyLogo: "https://logo.clearbit.com/indegene.com",
  },
  {
    name: "Sara Beatriz",
    company: "GSK",
    role: getRole("Sara Beatriz"),
    linkedin: "https://www.linkedin.com/in/sara-beatriz",
    image: "https://static.wixstatic.com/media/6abdd9_c4f2df4c348d495dbe22cf0457d514a4~mv2.png",
    companyLogo: "https://logo.clearbit.com/gsk.com",
  },
  {
    name: "Kunjan Pal",
    company: "Apollo Hospital",
    role: getRole("Kunjan Pal"),
    linkedin: "https://www.linkedin.com/in/kunjan-pal-292a66244",
    image: "https://static.wixstatic.com/media/6abdd9_51bfaeb92e884125a3bf65f5cbf31efe~mv2.png",
    companyLogo: "https://logo.clearbit.com/apollohospitals.com",
  },
  {
    name: "Khalfan",
    company: "Indegene",
    role: getRole("Khalfan"),
    linkedin: "https://www.linkedin.com/in/khalfan-pharmd-841807218",
    image: "https://static.wixstatic.com/media/6abdd9_9d04da37161741d08c1eb8b06dcf7d8f~mv2.png",
    companyLogo: "https://logo.clearbit.com/indegene.com",
  },
  {
    name: "Gaurav Singh",
    company: "Sun Pharma",
    role: getRole("Gaurav Singh"),
    linkedin: "https://www.linkedin.com/in/gauravsingh6oct",
    image: "https://static.wixstatic.com/media/6abdd9_a66296ffa1ed43d9858084158814efca~mv2.png",
    companyLogo: "https://logo.clearbit.com/sunpharma.com",
  },
  {
    name: "Bhawya Gahlawat",
    company: "Fortis",
    role: getRole("Bhawya Gahlawat"),
    linkedin: "https://www.linkedin.com/in/bhawya-gahlawat",
    image: "https://static.wixstatic.com/media/6abdd9_3c1fbb3eef074c798ab841e9d332e4b6~mv2.png",
    companyLogo: "https://logo.clearbit.com/fortishealthcare.com",
  },
  {
    name: "Ramish Naim",
    company: "Pfizer",
    role: getRole("Ramish Naim"),
    linkedin: "https://www.linkedin.com/in/ramishnaim",
    image: "https://static.wixstatic.com/media/6abdd9_cebde08412454abb9cc14b225fbabe7c~mv2.png",
    companyLogo: "https://logo.clearbit.com/pfizer.com",
  },
 
  {
    name: "Madhav R",
    company: "Eli Lilly",
    role: getRole("Madhav R"),
    linkedin: "https://www.linkedin.com/in/madhav-r-86146a211",
    image: "https://static.wixstatic.com/media/6abdd9_04d75bf242824e1ab57485ea60b21ca1~mv2.png",
    companyLogo: "https://logo.clearbit.com/lilly.com",
  },
  {
    name: "Piyush Kumar",
    company: "Pfizer",
    role: getRole("Piyush Kumar"),
    linkedin: "https://www.linkedin.com/in/piyush-kumar-4a82ab213",
    image: "https://static.wixstatic.com/media/6abdd9_93d003faaaae43f5b3ba494ad4f5f661~mv2.png",
    companyLogo: "https://logo.clearbit.com/pfizer.com",
  },
  {
    name: "Santhoshkumar S",
    company: "Pfizer",
    role: getRole("Santhoshkumar S"),
    linkedin: "https://www.linkedin.com/in/santhoshkumar-s-23440410a",
    image: "https://static.wixstatic.com/media/6abdd9_b54ec996b88349c5aca0ca4492fa1a84~mv2.png",
    companyLogo: "https://logo.clearbit.com/pfizer.com",
  },
  {
    name: "Dishita Panchal",
    company: "Fortis",
    role: getRole("Dishita Panchal"),
    linkedin: "https://www.linkedin.com/in/dishita-panchal-a622851a2",
    image: "https://static.wixstatic.com/media/6abdd9_5694166518bb4691a8d8f91c2b565e42~mv2.png",
    companyLogo: "https://logo.clearbit.com/fortishealthcare.com",
  },
  {
    name: "Dhruv Gupta",
    company: "Cipla",
    role: getRole("Dhruv Gupta"),
    linkedin: "https://www.linkedin.com/in/dhruv-gupta-246222147",
    image: "https://static.wixstatic.com/media/6abdd9_60733bd0be514e6eafb742ec3f9bceda~mv2.png",
    companyLogo: "https://logo.clearbit.com/cipla.com",
  },
]

export const COMPANY_LOGOS = [
  { name: "Pfizer", logo: "https://static.wixstatic.com/media/6abdd9_d33d824c9175470c85dba9f3cb369b69~mv2.png" },
  { name: "Eli Lilly", logo: "https://static.wixstatic.com/media/6abdd9_d7099fc09f3d44eab68ba47b8a4fa784~mv2.png" },
  { name: "GSK", logo: "https://static.wixstatic.com/media/6abdd9_b087399ab93e41b38374843fc88d24cf~mv2.png" },
  { name: "IQVIA", logo: "https://static.wixstatic.com/media/6abdd9_f5df899c8e214ab79c624af47ed79bdc~mv2.png" },
  { name: "Biocon", logo: "https://static.wixstatic.com/media/6abdd9_5b861790631b4465a7fd25332d853f7d~mv2.png" },
  { name: "Cipla", logo: "https://static.wixstatic.com/media/6abdd9_29966de6acf742c8be9b3cb023001cce~mv2.png" },
  { name: "Sun Pharma", logo: "https://static.wixstatic.com/media/6abdd9_57d38b8501fe4d27a8b44e89e07aeb79~mv2.png" },
  { name: "Fortis", logo: "https://static.wixstatic.com/media/6abdd9_dfc89beb2aec4e1d9de06a15bfec74a7~mv2.png" },
  { name: "Apollo", logo: "https://static.wixstatic.com/media/6abdd9_ea65bfd8b17f49458cc5bbc933f21833~mv2.png" },
  { name: "Indegene", logo: "https://static.wixstatic.com/media/6abdd9_e81d2ca7ed8c42acb23464936ba2b70a~mv2.png" },
]
