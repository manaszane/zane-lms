"use client"

import { motion } from "framer-motion"
import { STUDENT_OF_YEAR } from "@/lib/ecosystemData"
import { Award, Quote, Sparkles, Target, Zap } from "lucide-react"

export function StudentOfYearSection() {
  const student = STUDENT_OF_YEAR

  return (
    // MOBILE FIX: Reduced py-12 to py-6 to maintain the tight flow with the previous section
    <section className="relative overflow-hidden  sm:py-12 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 order-1" // Heading remains first
          >
            <span className="mb-2 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3 w-3" /> 02. Excellence Award
            </span>
            <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Student of <span className="text-primary">the Year.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Recognizing the pinnacle of academic execution. {student.name} has demonstrated tangible community impact
              through our operational framework.
            </p>

            {/* Mobile: Simple stack | Desktop: 2-column grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/50 p-4 sm:p-6 backdrop-blur-sm">
                <Target className="mb-2 h-5 w-5 text-primary" />
                <h4 className="text-sm font-bold">The Mission</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{student.reason}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-4 sm:p-6 backdrop-blur-sm">
                <Zap className="mb-2 h-5 w-5 text-primary" />
                <h4 className="text-sm font-bold">The Impact</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{student.contribution}</p>
              </div>
            </div>
          </motion.div>

          {/* Student Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // MOBILE FIX: Reduced max-width from 320 to 260 for mobile to prevent it from feeling too heavy
            className="relative lg:col-span-4 mx-auto w-full max-w-[260px] sm:max-w-[320px] order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] shadow-2xl">
              <img
                src="/images/design-mode/6abdd9_2556c5d00cee46ffb3776ed0dbcfa170~mv2(1).png"
                alt={student.name}
                className="h-full w-full object-cover transition-all duration-500 select-none pointer-events-none"
                draggable="false"
              />

              {/* Overlay: Scaled down slightly for mobile screens */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border bg-background/60 p-3 sm:p-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <div className="select-none">
                    <p className="font-mono text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-primary">
                      Ecosystem MVP
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight mt-0.5">
                      {student.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">{student.domain}</p>
                  </div>
                  <Award className="h-5 w-5 shrink-0 text-primary" />
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 bg-primary/10 blur-3xl opacity-50" />
          </motion.div>
        </div>

        {/* Quote Section: Optimized padding and spacing */}
        {student.mentorQuote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 sm:mt-12 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8"
          >
            <Quote className="absolute right-4 top-4 h-6 w-6 text-primary/10 sm:h-8 sm:w-8" />
            <div className="max-w-3xl">
              <p className="text-[14px] sm:text-lg font-medium italic text-foreground leading-relaxed">
                "{student.mentorQuote}"
              </p>
              <p className="mt-3 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                — {student.mentorName}, Lead Mentor
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
