"use client"

import { useEffect, useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/protraining/HeroSection"
import { CountryModal } from "@/components/country-modal"
import { CountrySwitcherButton } from "@/components/country-switcher-button"
import { courses } from "@/lib/courses"
import { useCountryStore } from "@/lib/countryStore"
import { motion } from "framer-motion"
import { CourseShowroomCard } from "@/components/CourseShowroomCard"

export default function CoursesPage() {
  const { country, hasSelectedCountry } = useCountryStore()
  const [showCountryModal, setShowCountryModal] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!hasSelectedCountry) setShowCountryModal(true)
  }, [hasSelectedCountry])

  const coursesByCategory = useMemo(() => {
    const map: Record<string, typeof courses> = {}
    courses.forEach((c) => {
      if (!map[c.category]) map[c.category] = []
      map[c.category].push(c)
    })
    return map
  }, [])

  if (!mounted) return null

  return (
    /* SCROLL SNAP CONTAINER 
       h-screen + overflow-y-auto + snap-y is required for snapping 
    */
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-background no-scrollbar">
      <Navbar />
      <CountryModal open={showCountryModal} onOpenChange={setShowCountryModal} />

      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <CountrySwitcherButton />
      </div>

      {/* Hero Snap Point */}
      <div className="snap-start snap-always w-full">
        <HeroSection />
      </div>

      {/* ================= SHOWROOM SECTIONS ================= */}
      <main>
        {Object.entries(coursesByCategory).map(([category, list], idx) => (
          <motion.section
            key={category}
            id={idx === 0 ? "division-01" : undefined}
            /* min-h-screen + flex-center ensures content is 
               perfectly middle-aligned when it snaps 
            */
            className="relative min-h-screen w-full flex flex-col justify-center snap-start snap-always py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="mx-auto w-full max-w-7xl px-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xs uppercase tracking-widest text-primary mb-3 font-bold">
                  Division {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic">
                  {category}
                </h2>
              </motion.div>
            </div>

            {/* Framed Grid */}
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-10 shadow-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((course) => (
                    <CourseShowroomCard key={course.id} course={course} country={country} />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer Snap Point */}
      <div className="snap-end w-full">
        <Footer />
      </div>
    </div>
  )
}
