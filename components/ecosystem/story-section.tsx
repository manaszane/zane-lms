"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { EcosystemSection } from "@/lib/ecosystemContent"
import { AlertCircle, Target, Compass } from "lucide-react"

interface StorySectionProps {
  section: EcosystemSection
  index: number
}

const iconMap = {
  problem: AlertCircle,
  vision: Target,
  architecture: Compass,
}

export function StorySection({ section, index }: StorySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const Icon = iconMap[section.type] || Target

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="mx-auto max-w-5xl"
      >
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex-shrink-0"
            >
              <div className="rounded-2xl bg-primary/10 p-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-3"
              >
                {section.title}
              </motion.h2>

              {section.subtitle && (
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg text-primary font-semibold mb-6"
                >
                  {section.subtitle}
                </motion.p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {section.content.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
