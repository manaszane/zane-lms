"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // The "Folding" Magic: 
  // 1. Move it up (-100%)
  // 2. Rotate it back (-20 degrees)
  // 3. Fade it out
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    // Perspective wrapper creates the 3D depth for the fold
    <div ref={containerRef} className="relative h-[100vh] w-full overflow-hidden bg-black [perspective:1000px]">
      <motion.section 
        style={{ 
          y: translateY, 
          rotateX, 
          opacity, 
          scale,
          transformOrigin: "top center" 
        }}
        className="relative h-full w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg" 
            alt="Professional Workspace" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium border border-white/20"
          >
            Global Professional Ecosystem
          </motion.span>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="block text-white/70 text-xl mb-2 font-medium">Welcome to</span>
            <span className="block text-white" style={{ fontFamily: "Foundation Roman, serif" }}>
              ZANE ProEd.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 sm:text-xl text-balance">
            World's 1st & only EdTech company integrated with real-time workplace experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-red-700 hover:bg-red-800 px-10 py-6 text-base font-semibold">
              <Link href="/courses">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black px-10 py-6 bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
