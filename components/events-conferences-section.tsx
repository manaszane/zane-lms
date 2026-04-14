"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { EVENTS } from "@/lib/ecosystemData"
import { Calendar, Presentation, Users, MessageSquare } from "lucide-react"
import Image from "next/image"

const EVENT_ICONS = {
  Conference: Calendar,
  Workshop: Presentation,
  Panel: Users,
  Talk: MessageSquare,
}

const BG_IMAGES = [
  "https://static.wixstatic.com/media/6abdd9_d94e747e3adc42dc97413b68bebc89f9~mv2.png",
  "https://static.wixstatic.com/media/6abdd9_e329ab6c25c24f58b3982bf4db95764e~mv2.jpg",
  "https://static.wixstatic.com/media/6abdd9_6d65bbac6fdd46649d3996745389f27a~mv2.jpg",
  "https://static.wixstatic.com/media/6abdd9_c09a75a1f8a148b68affeda3bc4d0d08~mv2.png",
  "https://static.wixstatic.com/media/6abdd9_99eb6b7787c24cadabb51b12b46c6ec8~mv2.jpeg",
  "https://static.wixstatic.com/media/6abdd9_b9f0921ee19d4ac5a688aaaf49a33e59~mv2.png",
  "https://static.wixstatic.com/media/6abdd9_16faebf60eef401ea852bbdafd1d84d5~mv2.png",
  "https://static.wixstatic.com/media/6abdd9_98e027ab6dc341a29a52cc4f5d06a5f6~mv2.png",
  "https://static.wixstatic.com/media/6abdd9_c9c1c51f86cb406d98ae8ffbb420ac2f~mv2.jpg",
  "https://static.wixstatic.com/media/6abdd9_0ac981ee318942e492232ae668da4755~mv2.jpg",
  "https://static.wixstatic.com/media/6abdd9_0ae011e14f694774972655fe80955d2f~mv2.jpg",
  "https://static.wixstatic.com/media/6abdd9_7d4a4f313dac4c15a4812adc86b737e4~mv2.jpeg",
]

export function EventsConferencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    // MOBILE FIX: Reduced py-12 to py-6 to dock tightly with the Student section
    <section className="relative z-10 py-6 sm:py-12 lg:py-20 overflow-hidden bg-background">
      
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image 
              src={BG_IMAGES[currentIndex]} 
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={60}
            />
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] dark:bg-background/60 dark:backdrop-blur-sm transition-colors duration-500" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 lg:mb-12 relative z-20">
          <span className="mb-2 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
             03. Knowledge Exchange
          </span>
          <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl lg:text-5xl leading-tight">
            External <span className="text-muted-foreground">Visibility</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our ecosystem contributes to broader professional conversations through international 
            benchmarks and industry-leading workshops.
          </p>
        </header>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 relative z-20">
          {EVENTS.map((event, index) => {
            const Icon = EVENT_ICONS[event.type as keyof typeof EVENT_ICONS] || Calendar
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  ease: [0.25, 0.1, 0.25, 1.0] 
                }}
                // MOBILE FIX: Reduced p-6 to p-4, reduced rounded-xl to rounded-2xl for modern feel
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 dark:bg-background/80 p-4 sm:p-6 backdrop-blur-md transition-all hover:border-primary/50"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon Box: Slightly smaller on mobile */}
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[8px] sm:text-[10px] font-bold text-primary/60 dark:text-muted-foreground uppercase tracking-widest">
                      {event.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5 leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
