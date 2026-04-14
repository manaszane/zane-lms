"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
{/* Hero Section */}
<section className="relative z-10 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-20 lg:py-32">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative min-h-[520px]">

      {/* Center content — safe zone */}
      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-20 text-center lg:py-32">

        {/* Optional badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground"
        >
          Global Professional Ecosystem
        </motion.span>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span
            className="block text-red-700 dark:text-white"
            style={{ fontFamily: "Foundation Roman, serif" }}
          >
            ZANE ProEd
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          A Global Ecosystem for Professional Education, Intelligence, and Leadership
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-foreground px-10 py-6 text-base font-semibold text-background shadow-2xl hover:bg-foreground/90"
          >
            Explore the Ecosystem
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

      </div>
    </div>
  </div>
</section>

{/* Our Story – Narrative Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* Left – Story Header */}
      <div className="sticky top-32">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
          Our<br />
          <span className="text-red-700">Story.</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          How Zane ProEd evolved into a unified global ecosystem for professional
          education, intelligence, and leadership.
        </p>
      </div>

      {/* Right – Story Content */}
      <div className="space-y-12">

        {/* Chapter 1 */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-border" />
          <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary" />

          <h3 className="text-xl font-semibold mb-3">The Problem We Observed</h3>
          <p className="text-muted-foreground leading-relaxed">
            Zane ProEd emerged from a fundamental observation: modern education and
            workforce systems are fragmented. Learning, applied execution, career
            planning, and industry intelligence operate in isolation, leading to
            prolonged onboarding cycles, misaligned skills, and slow professional
            growth.
          </p>
        </div>

        {/* Chapter 2 */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-border" />
          <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary" />

          <h3 className="text-xl font-semibold mb-3">A Different Foundation</h3>
          <p className="text-muted-foreground leading-relaxed">
            Built as a global professional ecosystem, Zane ProEd integrates education,
            applied skill development, career intelligence, industry insight,
            publishing, and leadership networks into a single operating system for
            professional advancement.
          </p>
        </div>

        {/* Chapter 3 */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-border" />
          <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary" />

          <h3 className="text-xl font-semibold mb-3">Lifecycle Thinking</h3>
          <p className="text-muted-foreground leading-relaxed">
            Rather than focusing on isolated outcomes, the ecosystem supports
            individuals, institutions, and leaders across the entire professional
            lifecycle, from early skill formation to advanced leadership and
            institutional capability building.
          </p>
        </div>

        {/* Chapter 4 */}
        <div className="relative pl-10">
          <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary" />

          <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
          <p className="text-muted-foreground leading-relaxed">
            To date, the Zane ProEd ecosystem has engaged
            <span className="font-semibold text-foreground"> over one million individuals globally</span>,
            including students, professionals, educators, researchers, and industry
            stakeholders, through its platforms, programs, intelligence channels, and
            professional networks.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

     {/* Vision & Mission Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Vision */}
      <div className="glass-card rounded-2xl p-12">
        <Lightbulb className="h-12 w-12 text-primary mb-6" />
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <p className="text-muted-foreground leading-relaxed">
          Zane ProEd is driven by a clear vision to build a globally trusted professional
          ecosystem where education, intelligence, and execution operate as a unified
          and adaptive system aligned with real industry conditions.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We view professional education not as a one-time phase, but as a continuously
          evolving infrastructure that responds to technological change, regulatory
          shifts, and workforce demand.
        </p>
      </div>

      {/* Mission */}
      <div className="glass-card rounded-2xl p-12">
        <Target className="h-12 w-12 text-primary mb-6" />
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our mission is to equip individuals with execution-ready skills, verifiable
          proof of work, and career intelligence grounded in market realities.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We enable access to professional networks and leadership insight through a
          single integrated ecosystem, replacing fragmented and disconnected platforms
          with a cohesive operating system for long-term professional growth.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Problem Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        The Problem<br />
        <span className="text-red-700">Zane ProEd Was Built to Solve.</span>
      </h2>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Across high-skill and regulated industries, organizations lose substantial
        time and resources due to extended onboarding cycles, inconsistent job
        readiness, and misalignment between academic training and real-world execution.
      </p>
    </div>

    {/* Problem Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {[
        {
          title: "Extended Onboarding",
          desc: "Graduates often require months of supervision before becoming productive, increasing operational drag and cost."
        },
        {
          title: "Fragmented Professional Tools",
          desc: "Professionals rely on disconnected systems for upskilling, career planning, and industry awareness."
        },
        {
          title: "Institutional Blind Spots",
          desc: "Institutions struggle to demonstrate measurable employability, relevance, and long-term workforce impact."
        }
      ].map((item, idx) => (
        <div key={idx} className="glass-card rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Detailed Context */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* Context Narrative */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Detailed Context</h3>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Traditional education models prioritize curriculum completion over
            execution capability. Career planning is treated as external to learning.
            Industry intelligence exists in isolated publications, disconnected from
            training and decision-making.
          </p>
          <p>
            Leadership development typically occurs late and informally, once
            individuals are already embedded in organizations rather than being
            cultivated intentionally from early professional stages.
          </p>
        </div>
      </div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          "Slow time-to-competence",
          "Skill mismatch between education and employment",
          "Redundant training costs for organizations",
          "Limited visibility into real performance outcomes"
        ].map((impact, idx) => (
          <div
            key={idx}
            className="glass-card rounded-xl p-6 flex items-center"
          >
            <span className="h-2 w-2 rounded-full bg-primary mr-4" />
            <p className="text-muted-foreground">{impact}</p>
          </div>
        ))}
      </div>

    </div>

    {/* Resolution Statement */}
    <div className="mt-20 max-w-4xl">
      <p className="text-lg text-foreground leading-relaxed font-medium">
        Zane ProEd replaces this fragmented landscape with a single, integrated
        ecosystem where learning, execution, intelligence, and career progression
        continuously reinforce one another.
      </p>
    </div>

  </div>
</section>

{/* #1 Choice Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        #1 Choice.<br />
        <span className="text-red-700">In Every Way.</span>
      </h2>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Zane ProEd stands apart from traditional online learning platforms by refusing
        to fragment the professional journey.
      </p>
    </div>

    {/* What Others Separate */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
      <div className="glass-card rounded-2xl p-10">
        <h3 className="text-2xl font-semibold mb-6">What Traditional Platforms Separate</h3>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-destructive" />
            Learning from execution
          </li>
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-destructive" />
            Upskilling from career planning
          </li>
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-destructive" />
            Training from industry intelligence
          </li>
        </ul>
      </div>

      {/* What Zane ProEd Integrates */}
      <div className="glass-card rounded-2xl p-10">
        <h3 className="text-2xl font-semibold mb-6">What Zane ProEd Integrates</h3>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />
            Learning tightly coupled with execution
          </li>
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />
            Skill development aligned to real career pathways
          </li>
          <li className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-primary" />
            Training informed by live industry intelligence
          </li>
        </ul>
      </div>
    </div>

    {/* Ecosystem Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div className="glass-card rounded-2xl p-8">
        <h4 className="text-xl font-semibold mb-3">Simulation-Based Learning</h4>
        <p className="text-muted-foreground leading-relaxed">
          Hands-on, execution-first training delivered through structured simulations
          that mirror real professional workflows via Zane Omega.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <h4 className="text-xl font-semibold mb-3">AI-Powered Career Intelligence</h4>
        <p className="text-muted-foreground leading-relaxed">
          Data-driven career planning, skill alignment, and opportunity visibility
          powered by Zane NexFlow.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <h4 className="text-xl font-semibold mb-3">Industry Insight & Publishing</h4>
        <p className="text-muted-foreground leading-relaxed">
          Continuous exposure to industry trends, expert discourse, and professional
          forums delivered through SPARC.
        </p>
      </div>
    </div>

    {/* Closing Statement */}
    <div className="max-w-4xl">
      <p className="text-lg font-medium text-foreground leading-relaxed">
        Together, these capabilities form a single integrated ecosystem built for
        real careers, not just certificates.
      </p>
    </div>

  </div>
</section>


{/* Pick Your Category Section */}
<section className="py-28 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl mb-20">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        Pick Your<br />
        <span className="text-red-700">Category.</span>
      </h2>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Zane ProEd is not a single program. It is a professional operating system
        designed to adapt to where you are — and where you are going.
      </p>
    </div>

    {/* Category Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Students & Fresh Graduates */}
      <div className="glass-card rounded-3xl p-10">
        <span className="text-sm font-semibold text-primary tracking-wide">
          ENTRY LAYER
        </span>
        <h3 className="text-2xl font-bold mt-4 mb-6">
          Students & Fresh Graduates
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Built for individuals transitioning from academic learning into real
          industry roles. Focused on clarity, execution exposure, and employability.
        </p>

        <ul className="space-y-3 text-muted-foreground">
          <li>• Simulation-based exposure to real workflows via Zane Omega</li>
          <li>• Proof-of-work portfolios instead of certificates</li>
          <li>• Clear entry-level role pathways powered by Zane NexFlow</li>
          <li>• Understanding what real industry roles actually involve</li>
        </ul>
      </div>

      {/* Career Switchers */}
      <div className="glass-card rounded-3xl p-10">
        <span className="text-sm font-semibold text-primary tracking-wide">
          TRANSITION LAYER
        </span>
        <h3 className="text-2xl font-bold mt-4 mb-6">
          Career Switchers
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Designed for professionals moving into high-growth or regulated domains
          without wasting years on trial-and-error.
        </p>

        <ul className="space-y-3 text-muted-foreground">
          <li>• Role-based simulations replacing theory-only learning</li>
          <li>• Structured transition maps across domains</li>
          <li>• Project-based proof aligned with hiring expectations</li>
          <li>• Reduced uncertainty through career intelligence</li>
        </ul>
      </div>

      {/* Working Professionals */}
      <div className="glass-card rounded-3xl p-10">
        <span className="text-sm font-semibold text-primary tracking-wide">
          GROWTH LAYER
        </span>
        <h3 className="text-2xl font-bold mt-4 mb-6">
          Working Professionals
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          For professionals who want to upskill, advance, or pivot without pausing
          their careers.
        </p>

        <ul className="space-y-3 text-muted-foreground">
          <li>• Advanced, role-aligned execution simulations</li>
          <li>• Real projects mapped to promotion and growth paths</li>
          <li>• Capability demonstration through outcomes</li>
          <li>• Preparation for leadership or domain expansion</li>
        </ul>
      </div>

      {/* Senior Professionals & Leaders */}
      <div className="glass-card rounded-3xl p-10">
        <span className="text-sm font-semibold text-primary tracking-wide">
          LEADERSHIP LAYER
        </span>
        <h3 className="text-2xl font-bold mt-4 mb-6">
          Senior Professionals & Leaders
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Built for experts and leaders who must stay ahead of regulatory change,
          technology shifts, and industry evolution.
        </p>

        <ul className="space-y-3 text-muted-foreground">
          <li>• Advanced execution and decision simulations</li>
          <li>• Sector intelligence and foresight via SPARC</li>
          <li>• Access to professional and leadership networks</li>
          <li>• Publishing, visibility, and ecosystem influence</li>
        </ul>
      </div>

    </div>

    {/* Closing Line */}
    <div className="mt-20 max-w-4xl">
      <p className="text-lg font-medium text-foreground leading-relaxed">
        One ecosystem. Multiple entry points. Continuous progression.
      </p>
    </div>

  </div>
</section>


{/* Ecosystem Intro Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl">

    {/* Title */}
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        The Zane ProEd<br />
        <span className="text-red-700">Ecosystem</span>
      </h2>
    </div>

    {/* Intro Copy */}
    <div className="max-w-4xl mb-14">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Zane ProEd is intentionally designed as an ecosystem, not a collection of
        independent products. Each division serves a distinct function while operating
        on shared data, shared standards, and shared outcomes.
      </p>
    </div>

    {/* Core Systems */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      <div className="glass-card rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-3">Zane Omega</h3>
        <p className="text-muted-foreground leading-relaxed">
          Applied learning and execution through simulation-based professional
          workflows.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-3">Zane NexFlow</h3>
        <p className="text-muted-foreground leading-relaxed">
          Career intelligence, progression mapping, and role-aligned decision support.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-3">SPARC</h3>
        <p className="text-muted-foreground leading-relaxed">
          Industry intelligence, publishing, professional discourse, and leadership
          networks.
        </p>
      </div>
    </div>

    {/* Closing Line */}
    <div className="max-w-4xl">
      <p className="text-lg font-medium text-foreground leading-relaxed">
        Together, these systems form a closed-loop framework for professional
        development and institutional capability building.
      </p>
    </div>

  </div>
</section>

{/* Zane Ecosystem Section */}
<section className="py-28 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl mb-20">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        THE ZANE ECOSYSTEM
      </h2>
      <p className="mt-4 text-xl font-semibold text-red-700">
        A Powerhouse of Innovation
      </p>

      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
        At the heart of Zane ProEd is a connected ecosystem, built with relentless
        innovation to guide every step of the professional journey—from skill-building
        to lifelong career wins. Powered by state-of-the-art AI, ultra-realistic
        simulations, and smart analytics, this game-changing system delivers results
        that crush outdated competitors.
      </p>
    </div>

    {/* Zane Nexflow Card */}
    <div className="relative mb-20">
      <div className="rounded-3xl p-12 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/20 dark:via-zinc-900 dark:to-zinc-900 border border-border">
        <h3 className="text-3xl font-bold mb-2">Zane Nexflow</h3>
        <p className="text-lg font-semibold mb-6">
          The Ultimate AI-Powered Career Guide
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Zane Nexflow is the next-generation tool that makes career planning a breeze.
          This brilliant AI system looks at your background, education, skills, and
          goals to create a clear, personalized roadmap. It suggests the best jobs and
          skill upgrades while automating the job hunt—crafting applications and
          connecting you with employers that fit your vibe. Nexflow rockets you from
          learning to landing your dream job, saving time and stress in today’s tough
          global market.
        </p>
      </div>
    </div>

    {/* Zane Omega Block */}
    <div className="relative mb-24">
      <div className="rounded-3xl p-14 bg-gradient-to-br from-red-700/10 via-background to-background dark:from-red-700/20 dark:via-zinc-900 dark:to-zinc-900 border border-border">
        <h3 className="text-3xl font-bold mb-2">ZANE OMEGA</h3>
        <p className="text-lg font-semibold mb-8">
          The Most Advanced Simulation Engine Ever Built.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Zane Omega is the crown jewel of education—a revolutionary, AI-powered
          platform that turns classrooms into real-world workplaces. Available to
          individuals, schools, and companies across six or more countries, Omega
          blends engaging video lessons, interactive challenges, and super-realistic
          simulations aligned with international standards to mimic the intensity of
          industry life, including tight deadlines, manager feedback, team tasks, and
          big decisions.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="rounded-2xl p-8 bg-background/70 dark:bg-zinc-900/70 border border-border">
            <h4 className="text-xl font-semibold mb-4">
              Key Features of This Epic Tool
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Ultra-Realistic Simulations: Omega emphasizes an 80% hands-on approach,
              replicating authentic job roles in project work, problem-solving, and
              operations. It spans industries such as life sciences, engineering,
              business, and technology, leveraging high-tech rendering and intelligent
              algorithms to ensure precise, globally relevant details.
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-background/70 dark:bg-zinc-900/70 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              AI-Driven Customization: Through smart algorithms, Omega personalizes
              content to enhance user skills by up to 40%. Integrated AI assistants
              provide guidance with clear language and predictive suggestions,
              optimizing the learning experience. Cross-Device Compatibility: Omega
              operates seamlessly on smartphones and laptops, offering 4K video
              lessons, real-time progress tracking, and engaging XP points to maintain
              motivation.
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-background/70 dark:bg-zinc-900/70 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              All features are synchronized for effortless access worldwide.
              Comprehensive Toolset: Omega provides access to industry-standard tools,
              decision guides, protocols, and workflows aligned with international
              benchmarks. Users can pitch ideas, develop prototypes, manage projects,
              and create professional portfolios within a streamlined platform.
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-background/70 dark:bg-zinc-900/70 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Mentorship and Feedback: Omega facilitates real-time interaction with
              expert mentors, allowing users to save drafts, submit tasks, schedule
              reviews, and monitor progress through leaderboards and advanced analytics
              for immediate, actionable insights. Omega 4All (B2I Edition): Designed
              for educational institutions, this version supports unlimited users,
              custom branding, and seamless curriculum integration.
            </p>
          </div>

        </div>

        {/* Closing Proof */}
        <div className="mt-12">
          <p className="text-muted-foreground leading-relaxed">
            It delivers clean data, quarterly reports, and achieves 27% faster skill
            development by week three and 100% placement assistance provided by our
            expert placement cell. Helping you build a real proof of work portfolio
            that recruiters ask.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

{/* SPARC Intro Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl text-center">

    <div className="rounded-3xl p-14 bg-gradient-to-br from-indigo-600/10 via-background to-background dark:from-indigo-600/20 dark:via-zinc-900 dark:to-zinc-900 border border-border">

      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          SPARC by ZANE ProEd
        </h2>

        <p className="mt-3 text-lg font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
          SOCIETY FOR PROGRESSIVE ADVANCEMENT IN RESEARCH & CAREERS
        </p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Industry Intelligence, Publishing, Leadership Networking & a lot more.
        </p>
      </div>

    </div>

  </div>
</section>

{/* What is SPARC Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="max-w-4xl mb-20">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        SPARC.
      </h2>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        SPARC is the intelligence and leadership division of Zane ProEd. It provides
        structured industry insight, publishing infrastructure, professional
        discourse, and leadership connectivity, with a strong focus on biosciences,
        healthcare, and adjacent sectors.
      </p>
    </div>

    {/* Core Pillars Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">

      {/* Intelligence Hub */}
      <div className="glass-card rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-4">
          The SPARC Intelligence Hub
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          SPARC intelligence is generated through a combination of human-led analysis
          by domain specialists and continuous monitoring of research publications,
          regulatory updates, policy changes, market activity, technology adoption,
          and institutional developments.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Intelligence is organized into defined pillars including research
          translation, innovation adoption, market dynamics, regulatory and policy
          interpretation, talent demand, tools and technology landscapes, and startup
          and institutional activity.
        </p>
      </div>

      {/* SPARC View */}
      <div className="glass-card rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-4">
          SPARC View
        </h3>
        <p className="text-sm font-semibold text-muted-foreground mb-4">
          Decision-Oriented Interpretation Layer
        </p>

        <ul className="space-y-4 text-muted-foreground leading-relaxed">
          <li>• Practical relevance for specific roles or institutions</li>
          <li>• Adoption and operational considerations</li>
          <li>• Risk and readiness assessment</li>
          <li>• Short- and medium-term outlook</li>
        </ul>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          This layer is designed to support informed decision-making rather than
          passive awareness.
        </p>
      </div>

      {/* SPARC Forum */}
      <div className="glass-card rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-4">
          The SPARC Forum
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          The SPARC Forum is a private, moderated environment with access granted
          through application review, institutional affiliation, or invitation to
          individuals with established leadership or domain expertise.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Participation is tiered (Genesis, Premium, VIP, VVIP) to preserve signal
          quality and ensure relevance.
        </p>
      </div>

    </div>

    {/* Community + Publishing */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

      <div className="glass-card rounded-2xl p-10">
        <h3 className="text-2xl font-bold mb-4">Community Depth</h3>
        <p className="text-muted-foreground leading-relaxed">
          The forum brings together senior practitioners including executives,
          founders, principal investigators, faculty members, and domain specialists,
          alongside a broader professional base spanning early- and mid-career
          contributors.
        </p>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          Members engage through curated discussions, topic-specific micro-circles,
          peer introductions, mentorship connections, and leadership sessions.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-10">
        <h3 className="text-2xl font-bold mb-4">
          Publishing, Recognition, and SPARC Magazine
        </h3>

        <ul className="space-y-4 text-muted-foreground leading-relaxed">
          <li>• Publishing analytical and practice-informed contributions</li>
          <li>• Showcasing institutional achievements and collaborations</li>
          <li>• Documenting sector developments through SPARC Magazine</li>
          <li>• Recognizing leadership, innovation, and ecosystem contributions</li>
        </ul>
      </div>

    </div>

    {/* Entry Points */}
    <div className="max-w-5xl">
      <h3 className="text-2xl font-bold mb-6">Programs and Entry Points</h3>
      <ul className="space-y-4 text-muted-foreground leading-relaxed">
        <li>• Individuals begin by enrolling in Zane Pro Training programs powered by Omega</li>
        <li>• Professionals and leaders engage through SPARC subscriptions and forum participation</li>
        <li>• Institutions integrate Omega and NexFlow into academic or professional training frameworks</li>
        <li>• Explorers access introductory pathways, trials, and open intelligence content</li>
      </ul>

      <p className="mt-6 text-muted-foreground leading-relaxed">
        Each entry point connects into the same ecosystem and can expand over time.
      </p>
    </div>

  </div>
</section>


{/* Why Zane ProEd Is Unbeatable */}
<section className="py-28 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        Why <span className="text-red-700">ZANE ProEd</span> Is Unbeatable
      </h2>
    </div>

    {/* Core Statement */}
    <div className="max-w-4xl space-y-6 text-lg text-muted-foreground leading-relaxed mb-20">
      <p>
        Zane ProEd does not replace education, career tools, or industry media.
        It integrates them into a single operating system for professional development.
      </p>

      <p>
        By unifying applied learning, simulation-driven execution, career intelligence,
        sector insight, publishing, and leadership networks within one ecosystem,
        Zane ProEd aligns education with execution, insight with action, and potential
        with measurable outcomes.
      </p>

      <p className="text-foreground font-medium">
        This integrated design is what makes Zane ProEd structurally different.
      </p>
    </div>

    {/* Difference Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
      <div className="rounded-xl border border-border p-10">
        <p className="text-muted-foreground leading-relaxed">
          While most platforms operate in isolation, Zane ProEd is built end-to-end.
          Every course, simulation, tool, and framework is developed in-house to ensure
          consistency, depth, and alignment with international standards.
        </p>
      </div>

      <div className="rounded-xl border border-border p-10">
        <p className="text-muted-foreground leading-relaxed">
          The ecosystem combines AI-powered simulations, real-time mentorship,
          career intelligence, and industry engagement into one coherent system
          operating across multiple countries.
        </p>
      </div>
    </div>

    {/* Impact Statement */}
    <div className="max-w-5xl space-y-6 text-muted-foreground leading-relaxed mb-20">
      <p>
        The result is measurable impact at scale: accelerated skill acquisition,
        faster transitions to productivity, reduced reliance on fragmented upskilling
        pathways, and demonstrable proof of work for individuals and institutions alike.
      </p>

      <p>
        Programs function across disciplines including life sciences, healthcare,
        engineering, business, and technology, without compromising rigor or relevance.
      </p>
    </div>

    {/* Closing Authority */}
    <div className="max-w-5xl space-y-6 text-lg text-muted-foreground leading-relaxed">
      <p>
        Zane ProEd is designed to scale globally, remain policy-aware where required,
        and evolve continuously with industry needs. It is built for individuals
        seeking serious professional growth, institutions demanding accountability
        and outcomes, and leaders who value intelligence, execution, and long-term
        capability building.
      </p>

      <p className="text-foreground font-semibold text-xl">
        This is the role Zane ProEd is built to play at global scale.
      </p>
    </div>

  </div>
</section>

     

      <Footer />
    </div>
  )
}
