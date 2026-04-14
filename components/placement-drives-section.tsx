"use client"

import { motion } from "framer-motion"
import { PLACEMENT_PROCESS } from "@/lib/ecosystemData"

export function PlacementDrivesSection() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex w-fit rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
            Placement Drives & Hiring Exposure
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Structured Hiring Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide structured exposure to hiring opportunities through a transparent, task-based evaluation process.
            No guarantees, only genuine preparation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line on desktop */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border lg:block" />

          <div className="space-y-8">
            {PLACEMENT_PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Step indicator */}
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>

                {/* Content */}
                <div className="glass-card flex-1 rounded-xl p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            All placement activities are based on merit and performance. We do not guarantee job placements.
          </p>
        </div>
      </div>
    </section>
  )
}
