"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ECOSYSTEM_STATS } from "@/lib/ecosystemContent"

export function EcosystemStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ECOSYSTEM_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 200 }}
                  className="text-4xl sm:text-5xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
