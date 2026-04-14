"use client"
import { useState } from "react"
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
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ResearchProjectsSection } from "@/components/research-projects-section"
import { StudentOfYearSection } from "@/components/student-of-year-section"
import { EventsConferencesSection } from "@/components/events-conferences-section"
import { VideoTestimonial } from "@/components/video-testimonial"
import { NetworkPanel } from "@/components/network-panel"
import { GoogleReviewsMarquee } from "@/components/google-reviews-marquee"
import { CompanyLogoMarquee } from "@/components/company-logo-marquee"
import { HeroAvatarRail } from "@/components/HeroAvatarRail"
import { AmbientFlowBackground } from "@/components/animated-grid-background"

import { VIDEO_TESTIMONIALS } from "@/lib/testimonials"
import { ZANE_NETWORK, COMPANY_LOGOS } from "@/lib/zaneNetwork"
import { HERO_AVATARS } from "@/lib/heroTestimonials"
import { HeroMobileStack } from "@/components/HeroMobileStack"

// NEW: Capability Data with Unsplash Images
const SPARC_CAPABILITIES = [
  {
    icon: Layers,
    title: "Collaboration Spaces",
    desc: "Persistent discussion rooms and shared problem-solving threads across domains.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Shield,
    title: "Mentor Presence",
    desc: "Ongoing access to reviewers, senior professionals, and domain experts.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Professional Identity",
    desc: "Profiles evolve through contributions, not static certificates.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
  },
  {
    icon: Rocket,
    title: "Long-Term Participation",
    desc: "Continued involvement in projects, research, and network-driven opportunities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
]

export default function TestimonialsMainPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

   {/* Hero Section */}
<section className="relative z-10 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-6 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      
      <AmbientFlowBackground />
      
      {/* Desktop Rails - Stays exactly as is */}
      <div className="hidden lg:block">
        <HeroAvatarRail avatars={HERO_AVATARS} side="left" />
        <HeroAvatarRail avatars={HERO_AVATARS} side="right" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-10 text-center lg:px-6 lg:py-32">
        
        {/* NEW: Mobile Only Clubbed Design */}
        <div className="mb-8 lg:hidden">
           <HeroMobileStack avatars={HERO_AVATARS} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Trusted by leaders <span className="block text-blue-500 lg:inline">across multiple industries</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          See how learners transitioned from training to real-world execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full bg-foreground px-8 py-5 text-base font-semibold text-background shadow-2xl hover:bg-foreground/90 sm:py-6"
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

     {/* Video Testimonials Section */}
<section id="video-section" className="relative z-10 py-6 sm:py-10 md:py-12 lg:py-32">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center">
      <div className="grid w-full max-w-6xl gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex flex-col justify-center text-left lg:pr-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.4 } }
            }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Verified Outcomes
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[80px]">
              Real <span className="text-blue-500 italic">Stories.</span><br />
              <span className="opacity-90">Measurable Impact.</span>
            </h2>
            <div className="relative mb-8 border-l-2 border-blue-500/20 pl-4 sm:pl-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              First-hand accounts from learners who transitioned from theory into
              <span className="text-foreground font-medium"> real industry workflows</span>.
            </div>
          </motion.div>
        </div>

        {/* FEATURED VIDEO */}
        <div className="flex justify-center">
          <div className="w-full max-w-[240px] sm:max-w-[370px] rounded-3xl border bg-background p-3 sm:p-5 shadow-xl">
            <VideoTestimonial
              name={VIDEO_TESTIMONIALS[0].name}
              quote={VIDEO_TESTIMONIALS[0].quote}
              videoUrl={VIDEO_TESTIMONIALS[0].videoUrl}
            />
          </div>
        </div>
      </div>
    </div>

    {/* NEW SUBHEADING SECTION */}
    <div className="mt-16 lg:mt-24">
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            More Success Stories
          </h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">
            Explore how other students carved their path to success.
        </p>
      </div>

      {/* SCROLLING LIST */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x px-2">
        {VIDEO_TESTIMONIALS.slice(1).map((testimonial, index) => (
          <div 
            key={index} 
            className="min-w-[180px] max-w-[220px] sm:min-w-[280px] sm:max-w-[320px] flex-shrink-0 snap-center"
          >
            <VideoTestimonial 
              name={testimonial.name} 
              quote={testimonial.quote} 
              videoUrl={testimonial.videoUrl} 
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    {/* Company Logos */}
<section className="relative z-10 bg-muted/20 border rounded-lg py-4 sm:py-10 lg:py-16">
  {/* Removed px-3 on mobile to let the marquee breathe to the edges */}
  <div className="container mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
    <div className="mb-6 sm:mb-8 text-center">
      <h3 className="mb-3 sm:mb-6 text-sm sm:text-2xl font-semibold uppercase tracking-wider text-muted-foreground px-4">
        Where Zane Alumni Build Their Careers
      </h3>
      
      {/* REMOVED scale-[0.6] - This was making the marquee look tiny on mobile */}
      <div className="origin-center sm:scale-90 lg:scale-100">
        <CompanyLogoMarquee logos={COMPANY_LOGOS} />
      </div>
    </div>
  </div>
</section>

    {/* Zane Network Live Panel */}
<section className="relative z-10 overflow-hidden py-12 sm:py-28 lg:py-36">
  {/* Refined Background Blobs - Hidden or smaller on mobile to improve performance */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-[-100px] top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] sm:blur-[140px] sm:h-[700px] sm:w-[700px]" />
    <div className="absolute right-[-150px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[80px] sm:blur-[140px] sm:h-[600px] sm:w-[600px]" />
  </div>

  <div className="relative container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    {/* gap-10 on mobile, gap-24 on desktop */}
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
      
      {/* Content Column */}
      <div className="text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          {/* Responsive Text Sizes: 4xl on mobile, 7xl on desktop */}
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl text-foreground leading-[1.1]">
            ZANE ProEd <span className="relative inline-block lg:block text-blue-600 dark:text-blue-500">NETWORK</span>
          </h2>
        </motion.div>
        
        {/* Adjusted: Center-aligned border/text on mobile, left-aligned on desktop */}
        <p className="mx-auto lg:mx-0 mb-8 max-w-md border-l-2 lg:border-l-2 border-blue-500/30 dark:border-white/10 pl-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg text-left">
          The network stays active through discussions, live workflows, and evolving industry conversations.
        </p>

        {/* 4. Stats Grid — Balanced for mobile viewports */}
        <div className="grid grid-cols-2 lg:max-w-md gap-3 sm:gap-4">
          {[
            { label: "Premium Members", value: "1000+", sub: "Mentors & Pros", color: "blue" },
            { label: "Active Nodes", value: "24/7", sub: "Live Interaction", color: "violet" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl border dark:border-white/5 dark:bg-white/5 p-4 sm:p-6 backdrop-blur-md shadow-sm bg-transparent"
            >
              <div className={`absolute right-0 top-0 h-8 w-8 translate-x-4 -translate-y-4 rounded-full bg-${stat.color}-500/10 blur-xl`} />
              
              <div className="relative z-10">
                <div className="text-2xl sm:text-4xl font-black text-blue-600 dark:text-blue-500 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider dark:text-slate-100 text-white">
                  {stat.label}
                </div>
                <div className="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status indicator: Centered on mobile */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-muted-foreground/60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Status: Live Integration
        </div>
      </div>

      {/* Right Column: Panel */}
      <div className="relative mt-4 lg:mt-0">
        <div className="relative rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 dark:border-white/10 dark:bg-background/50 p-2 sm:p-3 backdrop-blur-xl shadow-2xl dark:shadow-none text-background bg-transparent">
          <NetworkPanel members={ZANE_NETWORK} />
        </div>
        <p className="mt-4 text-center text-[10px] sm:text-xs text-slate-500 dark:text-muted-foreground">
          Live snapshot of active members
        </p>
      </div>

    </div>
  </div>
</section>
     {/* Ecosystem Proof Wrapper */}
<section className="relative z-10 border-t border-border bg-gradient-to-b from-background via-muted/5 to-background py-12 sm:py-20 lg:py-24">
  {/* Subtle Background Decoration for Mobile Flow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[120px] lg:hidden" />
  </div>

  <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* MOBILE FIX: 
      - Reduced mb-10 to mb-6 for mobile to close the gap with the first section.
      - Increased lg:mb-24 for desktop to give it a premium, spacious feel.
  */}
  <div className="mb-6 sm:mb-16 lg:mb-24 text-center">
    
    {/* TYPOGRAPHY FIX:
        - text-3xl on mobile, 7xl on desktop for high contrast.
        - leading-[1.1] for tight, modern header styling.
    */}
    <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tighter sm:text-5xl lg:text-7xl text-foreground leading-[1.1] sm:leading-tight">
      Academic <span className="text-primary">Execution</span> 
      <br className="hidden sm:block" />
      <span className="text-muted-foreground">&</span> <span className="text-primary">Evidence</span> Framework
    </h2>

    {/* PARAGRAPH OPTIMIZATION:
        - text-sm on mobile (cleaner), text-xl on desktop.
        - max-w-2xl keeps line lengths comfortable for the eye.
    */}
    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
      Moving from <span className="text-foreground font-medium">emotional proof</span> to <span className="text-foreground font-medium">operational evidence</span>. This is what a functioning execution ecosystem looks like.
    </p>

    {/* Subtle Indicator Bar */}
    <div className="mt-6 mx-auto h-1.5 w-12 rounded-full bg-primary/20 sm:mt-8" />
  </div>
</div>

  {/* Adding negative margin-top on mobile to bridge gaps 
      and ensure sections feel like one cohesive "Evidence" unit.
  */}
  <div className="space-y-4 sm:space-y-0">
    <div className="relative">
      <ResearchProjectsSection />
    </div>
    
    <div className="relative pt-8 sm:pt-0">
      {/* Add a subtle divider for mobile to separate the projects from the award */}
      <div className="mx-8 h-px bg-gradient-to-r from-transparent via-border to-transparent lg:hidden" />
      <StudentOfYearSection />
    </div>

    <div className="relative pt-8 sm:pt-0">
       <div className="mx-8 h-px bg-gradient-to-r from-transparent via-border to-transparent lg:hidden" />
      <EventsConferencesSection />
    </div>
  </div>
</section>
    {/* UPDATED: ZANE SPARC — MOBILE BUTTON AT THE ABSOLUTE BOTTOM */}
<section id="join-zane-network" className="pb-20 sm:pb-32 relative z-10">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-background/70 dark:bg-zinc-950/70 border border-border dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-14 backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/10 opacity-60 blur-3xl pointer-events-none" />

      {/* Wrapper uses flex-col on mobile to control the global order */}
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:items-center">
        
        {/* TEXT: order-1 (Top) on mobile, lg:order-2 (Right) on desktop */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start order-1 lg:order-2 lg:pl-10">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Network Continuity Layer
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            ZANE <span className="text-blue-500">SPARC</span>
          </h2>
          
          <p className="mt-6 text-[14px] md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            ZANE SPARC is the professional network layer of the ZANE ecosystem.
            Learners do not exit after courses. They transition into a shared operating space.
          </p>
          
          <p className="mt-4 text-[11px] md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Collaborate through research initiatives, peer reviews, and live industry conversations.
          </p>

          {/* DESKTOP ONLY BUTTON: Hidden on mobile, shown on desktop inside this container */}
          <div className="hidden lg:block mt-10">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://sparc.zaneproed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-2xl border border-blue-500/40 bg-blue-500/10 px-8 py-5 text-sm font-bold text-blue-500 hover:bg-blue-500/20 transition-all backdrop-blur-md shadow-lg"
            >
              <span>Enter ZANE SPARC Network</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </motion.a>
          </div>
        </div>

        {/* CARDS: order-2 (Middle) on mobile, lg:order-1 (Left) on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 order-2 lg:order-1">
          {SPARC_CAPABILITIES.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="group relative h-48 sm:h-64 overflow-hidden rounded-2xl border border-border dark:border-zinc-800 bg-zinc-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-30 sm:opacity-40 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="transform transition-all duration-300">
                  <item.icon className="w-5 h-5 text-blue-400 mb-2 sm:mb-3" />
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] text-zinc-300 leading-snug opacity-90 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE ONLY BUTTON: order-3 (Bottom) on mobile, hidden on desktop */}
        <div className="order-3 mt-4 lg:hidden">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://sparc.zaneproed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-4 rounded-2xl border border-blue-500/40 bg-blue-500/10 px-8 py-4 text-sm font-bold text-blue-500 hover:bg-blue-500/20 transition-all backdrop-blur-md shadow-lg"
          >
            <span>Enter ZANE SPARC Network</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </motion.a>
        </div>

      </div>
    </motion.div>
  </div>
</section>
    </div>
  )
}
