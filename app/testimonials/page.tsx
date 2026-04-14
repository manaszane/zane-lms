"use client"
import {
  ArrowBigDownIcon,
  ArrowRight,
  ArrowLeft,
  Layers,
  Shield,
  Sparkles,
  Rocket,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VideoTestimonial } from "@/components/video-testimonial"
import { NetworkPanel } from "@/components/network-panel"
import { GoogleReviewsMarquee } from "@/components/google-reviews-marquee"
import { CompanyLogoMarquee } from "@/components/company-logo-marquee"
import { HeroAvatarRail } from "@/components/HeroAvatarRail"
import { AmbientFlowBackground } from "@/components/animated-grid-background"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ResearchProjectsSection } from "@/components/research-projects-section"
import { PlacementDrivesSection } from "@/components/placement-drives-section"
import { StudentOfYearSection } from "@/components/student-of-year-section"
import { EventsConferencesSection } from "@/components/events-conferences-section"
import { VIDEO_TESTIMONIALS } from "@/lib/testimonials"
import { ZANE_NETWORK, COMPANY_LOGOS } from "@/lib/zaneNetwork"
import { HERO_AVATARS } from "@/lib/heroTestimonials"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <AmbientFlowBackground />
      <Navbar />
      

      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-12 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[600px]">
            {/* Left avatar rail */}
            <HeroAvatarRail avatars={HERO_AVATARS} side="left" />

            {/* Right avatar rail */}
            <HeroAvatarRail avatars={HERO_AVATARS} side="right" />

            {/* Center content - guaranteed safe zone */}
            <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-20 text-center lg:py-32">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-2 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Trusted by leaders <span className="block text-blue-500 text-[0.9em]">across multiple industries</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                See how learners transitioned from training to real-world execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-foreground px-8 py-6 text-base font-semibold text-background shadow-2xl hover:bg-foreground/90"
                  onClick={() => document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See their journeys
                  <ArrowBigDownIcon className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section — Editorial Layout */}
      <section id="video-section" className="relative z-10 py-6 sm:py-10 md:py-12 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
{/* LEFT — Editorial Intro (Optimized & High-Impact) */}
<div className="relative flex flex-col justify-center text-left lg:pr-8">
  {/* 1. Minimalist Status Badge */}
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="mb-4 flex items-center gap-2"
  >
    <div className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
      Verified Outcomes
    </span>
  </motion.div>

  {/* 2. Scaled Typography - Prevents layout break */}
  <motion.h2 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
  >
    Real <span className="text-blue-500 italic">Stories.</span>
    <br />
    <span className="opacity-90">Measurable Impact.</span>
  </motion.h2>

  {/* 3. Accentuated Paragraph */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="relative mb-8 border-l-2 border-blue-500/20 pl-4 sm:pl-6"
  >
    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
      First-hand accounts from learners who transitioned from theory into 
      <span className="text-foreground font-medium"> real industry workflows</span> and high-confidence careers.
    </p>
  </motion.div>

  {/* 4. The Stats Strip (Minimalist Steroids) */}
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="mb-10 flex gap-6 border-t border-border pt-6"
  >
    <div>
      <div className="text-xl font-bold text-foreground">50+</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Transitions</div>
    </div>
    <div className="h-10 w-[1px] bg-border" />
    <div>
      <div className="text-xl font-bold text-foreground">4.9/5</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">User Rating</div>
    </div>
  </motion.div>

  {/* 5. Sleek CTA */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <Button
      variant="outline"
      className="group relative h-12 rounded-full border-blue-500/30 px-6 font-bold transition-all hover:bg-blue-500 hover:text-white"
      onClick={() => document.getElementById("join-zane-network")?.scrollIntoView({ behavior: "smooth" })}
    >
      <span className="flex items-center gap-2">
        Join the Community
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Button>
  </motion.div>

  {/* Subtle Ambient Glow (Contained) */}
  <div className="absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
</div>
              {/* RIGHT — Featured Testimonial */}
              <div className="flex justify-center">
                <div className="w-full max-w-[420px] rounded-3xl border bg-background p-5 shadow-xl">
                  <VideoTestimonial
                    name={VIDEO_TESTIMONIALS[0].name}
                    quote={VIDEO_TESTIMONIALS[0].quote}
                    videoUrl={VIDEO_TESTIMONIALS[0].videoUrl}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM — Scroll Rail */}
          <div className="mt-10 lg:mt-16">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {VIDEO_TESTIMONIALS.slice(1).map((testimonial, index) => (
                <div key={index} className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <VideoTestimonial name={testimonial.name} quote={testimonial.quote} videoUrl={testimonial.videoUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      <section className="relative z-10 bg-muted/20 border rounded-lg py-4 sm:py-10 lg:py-16">
        <div className="container mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h3 className="mb-3 sm:mb-6 text-sm sm:text-2xl font-semibold uppercase tracking-wider text-muted-foreground">
              Where Zane Alumni Build Their Careers
            </h3>

            {/* Mobile-first scale control */}
            <div className="origin-center scale-[0.6] sm:scale-90 lg:scale-100">
              <CompanyLogoMarquee logos={COMPANY_LOGOS} className="marquee-container mobile-fast" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ZANE NETWORK — HERO NETWORK SECTION ================= */}
<section className="relative z-10 overflow-hidden py-20 sm:py-28 lg:py-36">
  {/* Ambient depth */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-200px] top-1/3 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[140px]" />
    <div className="absolute right-[-250px] bottom-[-200px] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[140px]" />
  </div>

  <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

    {/* ================= LEFT — NETWORK IDENTITY (Cyber-Industrial Design) ================= */}
<div className="relative">
  {/* 1. Sub-Header with Floating Dot */}
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="mb-6 flex items-center gap-3"
  >
    <div className="h-[1px] w-8 bg-blue-500/50" />
    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/80">
      ALUMNI
    </span>
  </motion.div>

  {/* 2. Kinetic Title Design */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
      THE ZANE 
      <span className="relative block text-blue-500">
        NETWORK
        <motion.span 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-transparent"
        />
      </span>
    </h2>
  </motion.div>

  {/* 3. Description with "System" aesthetic */}
  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="mb-12 max-w-md border-l border-white/10 pl-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
  >
    A persistent execution environment where 
    <span className="text-foreground font-semibold"> alumni and industry mentors</span> converge to solve 
    high-complexity workflows in real-time.
  </motion.p>

  {/* 4. Stats Grid — Elevated Glassmorphism */}
  <div className="grid max-w-md grid-cols-2 gap-4">
    {[
      { label: "Premium Members", value: "50+", sub: "Mentors & Pros", color: "blue" },
      { label: "Active Nodes", value: "1k+", sub: "Learners & Alumni", color: "violet" }
    ].map((stat, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-md"
      >
        {/* Subtle Corner Accent */}
        <div className={`absolute right-0 top-0 h-8 w-8 translate-x-4 -translate-y-4 rounded-full bg-${stat.color}-500/20 blur-xl`} />
        
        <div className="relative z-10">
          <div className={`text-4xl font-black text-${stat.color}-500 tracking-tight`}>
            {stat.value}
          </div>
          <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-foreground">
            {stat.label}
          </div>
          <div className="text-[10px] text-muted-foreground">
            {stat.sub}
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* 5. Minimalist "Active" Indicator */}
  <div className="mt-10 flex items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
    <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
    System Status: Live Integration
  </div>
</div>

      {/* ================= RIGHT — LIVE NETWORK PANEL ================= */}
      <div className="relative">
        {/* Framing shell to make panel feel “hero” */}
        <div className="relative rounded-[2.5rem] border border-border bg-background/50 p-3 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 pointer-events-none" />

          <div className="relative">
            <NetworkPanel members={ZANE_NETWORK} />
          </div>
        </div>

        {/* Sub-caption */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Live snapshot of active members inside the ZANE Network
        </p>
      </div>

    </div>
  </div>
</section>
      

      {/* Google Reviews Section */}
<section className="relative z-10 py-16 lg:py-32">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500">
        <img 
          src="/images/design-mode/google-logo(2).png" 
          alt="Google Logo" 
          className="h-5 w-5" 
        />
        What learners publicly say on Google
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Professionals</h2>
    </div>
    <GoogleReviewsMarquee className="marquee-container" />
  </div>
</section>
      
       {/* Wrapper section for ecosystem proof */}
      <section className="relative z-10 border-t border-border bg-gradient-to-b from-background via-muted/10 to-background py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Academic Execution & Evidence Framework
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Moving from emotional proof to operational evidence. This is what a functioning execution ecosystem looks
              like.
            </p>
          </div>
        </div>

        {/* Section 2: Ongoing Research & Live Projects */}
        <ResearchProjectsSection />

        {/* Section 4: Student of the Year */}
        <StudentOfYearSection />

        {/* Section 5: Events & Conferences */}
        <EventsConferencesSection />
      </section>

    {/* ZANE SPARC — NETWORK GATEWAY */}
<section id="join-zane-network" className="pb-32">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-background/70 dark:bg-zinc-950/70 border border-border dark:border-zinc-800 rounded-3xl p-10 md:p-14 backdrop-blur-xl overflow-hidden"
    >
      {/* THE FIX: Changed from violet-500/20 to blue-600/20 and blue-500/10 to cyan-500/10 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/10 opacity-60 blur-3xl pointer-events-none" />

      <div className="relative grid gap-14 md:grid-cols-2 items-center">
  
        {/* LEFT — System narrative */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Network Continuity Layer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            ZANE <span className="text-blue-500">SPARC</span> {/* Changed text-violet-500 to text-blue-500 */}
          </h2>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            ZANE SPARC is the professional network layer of the ZANE ecosystem.
            Learners do not exit after courses. They transition into a shared
            operating space where alumni, mentors, and professionals continue to
            collaborate.
          </p>

          <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            The network stays active through discussions, research initiatives,
            peer reviews, live workflows, and evolving industry conversations.
          </p>
        </div>

        {/* RIGHT — Capability grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: Layers,
              title: "Collaboration Spaces",
              desc: "Persistent discussion rooms and shared problem-solving threads across domains.",
            },
            {
              icon: Shield,
              title: "Mentor Presence",
              desc: "Ongoing access to reviewers, senior professionals, and domain experts.",
            },
            {
              icon: Sparkles,
              title: "Professional Identity",
              desc: "Profiles evolve through contributions, not static certificates.",
            },
            {
              icon: Rocket,
              title: "Long-Term Participation",
              desc: "Continued involvement in projects, research, and network-driven opportunities.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="group bg-muted/40 dark:bg-zinc-900/60 border border-border dark:border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
            >
              {/* Changed text-violet-500 to text-blue-500 */}
              <item.icon className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* CTA — Changed violet styles to blue styles */}
          <motion.a
            whileHover={{ y: -2 }}
            href="https://sparc.zaneproed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 mt-2 inline-flex items-center justify-between rounded-2xl border border-blue-500/40 bg-blue-500/10 px-6 py-5 text-sm font-semibold text-blue-500 hover:bg-blue-500/15 transition"
          >
            <span>Enter ZANE SPARC Network</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  </div>
</section>
      <Footer />
    </div>
  )
}
