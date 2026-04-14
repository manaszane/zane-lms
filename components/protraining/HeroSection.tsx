"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCountryStore, COUNTRY_CONFIG } from "@/lib/countryStore"

export default function HeroSection() {
  const { country } = useCountryStore()
  const textContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Mouse tracking
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  const springConfig = { damping: 25, stiffness: 200 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textContainerRef.current) return
    const rect = textContainerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* BACKGROUND IMAGE - Scales down with content for "suction" depth */}
      <motion.div
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
          alt="Training Background"
          className="h-full w-full object-cover grayscale brightness-75 dark:brightness-100"
        />
        {/* Dynamic Vignette using theme background color */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_90%)]" />
      </motion.div>

      {/* CONTENT WITH SUCTION ANIMATION */}
      <motion.div
        initial={{ scale: 2.2, opacity: 0, filter: "blur(20px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        <div
          ref={textContainerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative inline-block select-none cursor-default group"
        >
          {/* Base Layer (Visible Text) */}
          <h1 className="text-[14vw] leading-none md:text-9xl tracking-tighter font-black uppercase italic text-foreground transition-opacity duration-500">
            Pro Training
          </h1>

          {/* Reveal Layer (Primary Color) */}
          <h1
            className="absolute inset-0 text-[14vw] leading-none md:text-9xl tracking-tighter font-black uppercase italic text-primary pointer-events-none"
            style={{
              maskImage: "url(#paint-mask)",
              WebkitMaskImage: "url(#paint-mask)",
            }}
          >
            Pro Training
          </h1>

          <svg className="absolute inset-0 h-full w-full pointer-events-none">
            <defs>
              <filter id="organic-diffusion">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" />
              </filter>

              <mask id="paint-mask">
                <motion.circle
                  cx={smoothX}
                  cy={smoothY}
                  animate={{ r: isHovering ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  fill="white"
                  style={{ filter: "url(#organic-diffusion)" }}
                />
              </mask>
            </defs>
          </svg>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
        >
          Industry-grade simulations designed like{" "}
          <span className="text-foreground font-semibold underline decoration-primary/50">products</span>, not courses.
          {country && (
            <>
              {" "}
              Available in{" "}
              <span className="text-foreground font-semibold underline decoration-primary/50">
                {COUNTRY_CONFIG[country].name}
              </span>
              .
            </>
          )}
        </motion.p>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <button
            onClick={() => document.getElementById("division-01")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-12 overflow-hidden relative group rounded-full border border-border px-10 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
              Discover Programmes
            </span>
            <div className="absolute inset-0 -z-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </motion.div>
      </motion.div>

      {/* Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </section>
  )
}
