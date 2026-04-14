"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const AmbientFlowBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      {/* Grid using the CSS variable defined in globals.css */}
      <div 
        className="absolute inset-0 h-full w-full bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px), 
                            linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)`
        }}
      />

      {/* Floating Beams */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: ['-100%', '200%'], opacity: [0, 0.4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-0 h-[1px] w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
        <motion.div
          animate={{ x: ['200%', '-100%'], opacity: [0, 0.4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[50%] left-0 h-[1px] w-80 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        />
      </div>

      {/* Bottom Glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent" 
        style={{ '--tw-gradient-from': 'var(--color-bg-surface)' } as React.CSSProperties}
      />
    </div>
  )
}
