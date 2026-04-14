"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ENGAGEMENT_PATHS } from "@/lib/ecosystemContent"
import { Users, Briefcase, Building2, Compass, ArrowRight } from "lucide-react"

const iconMap = {
  Individuals: Users,
  "Professionals & Leaders": Briefcase,
  Institutions: Building2,
  Explorers: Compass,
}

export function EngagementPaths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Stakeholders Engage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple entry points, all connecting into the same unified ecosystem
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_PATHS.map((path, idx) => {
            const Icon = iconMap[path.audience as keyof typeof iconMap] || Users

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-bold mb-3">{path.audience}</h3>

                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground leading-relaxed">{path.entry}</p>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <ArrowRight className="h-4 w-4" />
                    <span className="text-xs">{path.outcome}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
