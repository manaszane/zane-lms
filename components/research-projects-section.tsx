"use client"

import { motion } from "framer-motion"
import { RESEARCH_PROJECTS } from "@/lib/ecosystemData"
import { Beaker, Users } from "lucide-react"
import Image from "next/image"

export function ResearchProjectsSection() {
  const stats = [
    { label: "Contributors", value: "150+", icon: Users },
    { label: "Papers", value: "500+", icon: Beaker },
  ]

  return (
    // MOBILE FIX: Reduced top padding (pt-2) to dock closer to the main heading
    <section className="relative z-10 overflow-hidden pt-2 pb-10 sm:py-12 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Area: Reduced bottom margin on mobile */}
        <div className="mb-6 lg:mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
              <Beaker className="h-3 w-3" /> 01. Live Projects
            </span>
            <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Research <span className="text-muted-foreground">&</span> Execution
            </h2>
          </div>

          {/* Stats Bar: Made more compact for mobile to save vertical space */}
          <div className="flex gap-2 rounded-xl border border-border bg-background/50 p-1.5 backdrop-blur-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 px-2 py-1">
                <stat.icon className="h-3.5 w-3.5 text-primary" />
                <div className="flex flex-col leading-none">
                  <span className="font-mono text-xs font-bold">{stat.value}</span>
                  <span className="text-[8px] uppercase tracking-wider text-muted-foreground sm:hidden">
                    {stat.label.split(" ")[1] || stat.label}
                  </span>
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Grid: 
            - h-[240px] on mobile is the "goldilocks" height to see the title and background clearly.
        */}
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[240px] sm:h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-background"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Status Tag: Slightly smaller on mobile */}
              <div className="absolute right-3 top-3 z-20">
                <span className="rounded-full bg-background/90 px-2 py-0.5 font-mono text-[8px] font-bold uppercase backdrop-blur-md border border-border">
                  {project.status}
                </span>
              </div>

              {/* Bottom Info: Reduced padding on mobile */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 transition-transform duration-500 group-hover:-translate-y-12 sm:group-hover:-translate-y-20">
                <p className="mb-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-primary">
                  {project.domain}
                </p>
                <h3 className="text-lg sm:text-xl font-bold leading-tight text-foreground">{project.title}</h3>
              </div>

              {/* Hover Overlay: More subtle transition */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground line-clamp-3 sm:text-xs">
                  {project.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
