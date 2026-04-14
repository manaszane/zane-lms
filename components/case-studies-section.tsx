"use client"

import { motion } from "framer-motion"
import { CASE_STUDIES } from "@/lib/ecosystemData"

export function CaseStudiesSection() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Editorial explanation */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
              Case Studies
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              From Training to <span className="text-primary">Real Impact</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              These case studies show how learners applied structured training to solve real operational challenges,
              transition into stronger roles, and deliver measurable outcomes in their organizations.
            </p>
          </div>

          {/* RIGHT — Stacked case cards */}
          <div className="space-y-6">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 transition-all hover:shadow-xl"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-foreground">{study.role}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {study.domain}
                  </span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Problem:</strong> {study.problem}
                  </div>
                  <div>
                    <strong className="text-foreground">Intervention:</strong> {study.intervention}
                  </div>
                  <div>
                    <strong className="text-foreground">Outcome:</strong> {study.outcome}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
