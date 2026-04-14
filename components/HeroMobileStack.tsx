"use client"
import { motion } from "framer-motion"
import type { HeroAvatar } from "@/lib/heroTestimonials"

export function HeroMobileStack({ avatars }: { avatars: HeroAvatar[] }) {
  const displayAvatars = avatars.slice(0, 5)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center -space-x-4">
        {displayAvatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="relative"
          >
            <div className="h-14 w-14 rounded-full border-4 border-background overflow-hidden shadow-lg">
              <img
                src={avatar.image || "/placeholder.svg"}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        ))}

        {/* FIXED: Enhanced 1000+ Badge visibility */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-blue-600 text-white shadow-xl z-10"
        >
          <span className="text-[12px] font-black tracking-tighter leading-none">
            1000+
          </span>
        </motion.div>
      </div>
      
      {/* Social Proof Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 border border-blue-500/20"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-3 w-3 fill-blue-500 text-blue-500" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Top Rated Careers
        </span>
      </motion.div>
    </div>
  )
}
