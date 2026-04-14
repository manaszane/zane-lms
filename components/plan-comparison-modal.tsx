"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAVBAR_HEIGHT = 72

export function PlanComparisonModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="gap-2 bg-transparent"
      >
        <Scale className="h-4 w-4" />
        Compare 3 vs 6
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                top: `calc(${NAVBAR_HEIGHT}px + env(safe-area-inset-top))`,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl px-3 sm:px-4"
            >
              <div className="glass-card rounded-2xl shadow-xl max-h-[calc(100dvh-96px)] overflow-y-auto">

                {/* Header */}
                <div className="sticky top-0 bg-background/90 backdrop-blur border-b border-border/50">
                  <div className="relative px-4 sm:px-6 pt-6 pb-5">
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
                      Comparison of Accelerator Program (3 Months)
                      <br className="hidden sm:block" />
                      and Deep Dive Program (6 Months)
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Zane ProEd · Omega Platform
                    </p>

                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-4 right-4 rounded-full p-2 hover:bg-muted"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 sm:px-6 py-8 space-y-10">
                  <Intro />

                  <Section title="Program Duration and Instructional Scope">
                    <Block
                      title="Accelerator Program"
                      content="Lasts 12 weeks (3 months) with approximately 60 instructional hours. It focuses on rapid skill acquisition for foundational entry into the specified fields, serving as an efficient alternative to more extensive programs."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Extends over 24 weeks (6 months) with approximately 120 instructional hours, doubling the scope of the Accelerator Program. This allows for thorough mastery and expert-level proficiency, including advanced skills such as trial design, quality standards enforcement, drug safety monitoring, healthcare professional engagement, regulatory submission preparation, and trial data management. Participants typically achieve 40% higher assessment scores compared to the Accelerator Program."
                    />
                  </Section>

                  <Section title="Mentorship Support">
                    <Block
                      title="Accelerator Program"
                      content="Includes bi-weekly group mentorship sessions via Omega, offering guidance on basic tasks like trial protocols and safety reports. This approach is suitable for beginners but provides less personalized support."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Features dedicated one-on-one mentorship through Omega, with tailored feedback on critical tasks. This personalized guidance accelerates skill development by 50% relative to the group mentorship in the Accelerator Program."
                    />
                  </Section>

                  <Section title="Simulations and Practical Experience">
                    <Block
                      title="Accelerator Program"
                      content="Involves Omega-powered simulations, such as individual exercises in trial data entry and quality verification, providing practical exposure appropriate for starters."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Offers collaborative, real-world simulations, including group projects on trial data management, real-time colleague support, chatbot assistance, and quality audits. This delivers twice the practical experience of the Accelerator Program, enhancing career readiness."
                    />
                  </Section>

                  <Section title="Portfolio Development">
                    <Block
                      title="Accelerator Program"
                      content="Supports the creation of one professional-grade project to aid initial job applications. However, this results in a decent placement rate compared to more comprehensive portfolios."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Enables the development of three professional-grade projects, leading to a 45% higher placement rate than the single-project focus of the Accelerator Program."
                    />
                  </Section>

                  <Section title="Resources and Additional Features">
                    <Block
                      title="Accelerator Program"
                      content="Grants access to Omega's digital repository with foundational resources like trial templates, bi-weekly community forums, and standard placement assistance. This includes Zane Nexflow-powered resume optimization and mock interviews."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Provides access to advanced Omega features, such as practice datasets, bi-monthly progress dashboards, monthly industry webinars, and verified micro-credentials. These elements boost expertise by 20–50% over the Accelerator Program. Additionally, it includes extended 3-month post-program placement assistance with tailored interview preparation and job-matching algorithms for superior outcomes in high-level roles."
                    />
                  </Section>

                  <Section title="Investment and Outcomes">
                    <Block
                      title="Accelerator Program"
                      content="Represents an affordable, efficient entry point for beginners, offering a 1.5× return on investment through quick skill gains and job-ready support. It is ideal for those seeking accessible entry into clinical and pharmaceutical sciences."
                    />
                    <Block
                      title="Deep Dive Program"
                      content="Delivers a 3.5× return on investment, emphasizing long-term career advancement and higher placement success. This program is suited for individuals aiming for expert proficiency and competitive positions, with overall outcomes that are more impactful than the Accelerator Program."
                    />
                  </Section>

                  <Section title="Conclusion">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In summary, the Accelerator Program is tailored for rapid, beginner-friendly
                      entry with essential tools, while the Deep Dive Program emphasizes depth,
                      personalization, and advanced preparation for sustained professional growth.
                      Selection between the two should align with one's experience level, time
                      availability, and career objectives.
                    </p>
                  </Section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ---------- Components ---------- */

function Intro() {
  return (
    <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
      <p>
        The Accelerator Program and Deep Dive Program are both offered through the Omega platform
        and are designed to prepare participants for careers in clinical research, quality
        assurance/quality control (QA/QC), pharmacovigilance, medical affairs, regulatory affairs,
        and clinical data management.
      </p>
      <p>
        The Accelerator Program provides a streamlined, entry-level pathway for beginners, while
        the Deep Dive Program offers an in-depth, advanced curriculum for those seeking
        comprehensive mastery and higher career outcomes.
      </p>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Block({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <div className="glass-card rounded-lg p-4">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {content}
      </p>
    </div>
  )
}
