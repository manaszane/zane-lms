"use client"

import { motion } from "framer-motion"
import type { HeroAvatar } from "@/lib/heroTestimonials"

interface HeroAvatarRailProps {
  avatars: HeroAvatar[]
  side: "left" | "right"
}

// Size mapping - deterministic and predictable
const SIZE_MAP = {
  sm: "h-24 w-24",
  md: "h-32 w-32",
  lg: "h-40 w-40",
} as const

export function HeroAvatarRail({ avatars, side }: HeroAvatarRailProps) {
  // Filter avatars for this rail
  const railAvatars = avatars.filter((avatar) => avatar.side === side)

  return (
    <div className={`absolute top-0 hidden h-full w-[200px] lg:block ${side === "left" ? "left-8" : "right-8"}`}>
      {railAvatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
          className="absolute"
          style={{
            top: `${avatar.offsetY}px`,
            [side]: 0,
          }}
        >
          <img
            src={avatar.image || "/placeholder.svg"}
            alt=""
            role="presentation"
            className={`${SIZE_MAP[avatar.size]} rounded-3xl object-cover shadow-2xl ring-2 ring-background mx-5 my-0 px-0 py-0 leading-7`}
          />
        </motion.div>
      ))}
    </div>
  )
}
