"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function EcosystemHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background animated grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 mb-8"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">The Zane ProEd Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance mb-6"
          >
            A Global Ecosystem for <span className="text-primary">Professional Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Integrating education, intelligence, and execution into a single operating system for professional education
            and leadership
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
