"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { Division } from "@/lib/ecosystemContent"
import { Cpu, TrendingUp, Lightbulb, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DivisionCardProps {
  division: Division
  index: number
}

const iconMap = {
  Cpu,
  TrendingUp,
  Lightbulb,
}

export function DivisionCard({ division, index }: DivisionCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const Icon = iconMap[division.icon as keyof typeof iconMap] || Cpu
  const isEven = index % 2 === 0

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.8 }}
          className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
        >
          {/* Content */}
          <div className={isEven ? "" : "lg:col-start-2"}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-5 py-2 mb-6"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary">{division.name}</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{division.tagline}</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{division.description}</p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  What You Walk Away With
                </h3>
                <ul className="space-y-3">
                  {division.whatYouGet.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {division.scale && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm text-primary font-semibold border-l-2 border-primary pl-4"
                >
                  {division.scale}
                </motion.p>
              )}
            </div>

            <Button size="lg" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Visual */}
          <div className={isEven ? "lg:col-start-2" : "lg:col-start-1"}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-card rounded-3xl p-8 sm:p-12"
            >
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-6">How It Works</h4>
                {division.howItWorks.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
