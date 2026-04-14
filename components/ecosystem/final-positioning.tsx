"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function FinalPositioning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 mb-8"
          >
            <Zap className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground">The Difference</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-balance">
            Zane ProEd doesn't replace education, career tools, or industry media.
          </h2>

          <p className="text-xl sm:text-2xl font-semibold text-primary mb-6">
            It integrates them into a single operating system.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            By unifying applied learning, career intelligence, sector insight, publishing, and leadership networks
            within one ecosystem, Zane ProEd aligns education with execution, insight with action, and potential with
            measurable outcomes.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="group">
              <Link href="/courses">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
