"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import { Play, Volume2, VolumeX } from "lucide-react"

interface VideoTestimonialProps {
  name: string
  quote: string
  videoUrl: string
  featured?: boolean
}

export function VideoTestimonial({ name, quote, videoUrl, featured }: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
          setIsPlaying(true)
        } else {
          videoRef.current?.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.6 },
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="group relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 shadow-xl">
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        loop
      />

      {/* Mute Toggle: Visible only on Hover (Desktop) or Tap (Mobile) */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border text-foreground
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Bottom Content Overlay: Subtle fade-in on hover for cleaner look */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-20 bg-gradient-to-t from-background/80 via-background/40 to-transparent">
        <div className="space-y-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-foreground/90 text-[13px] sm:text-sm leading-relaxed font-medium line-clamp-3 italic">
            "{quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-primary" />
            <p className="text-foreground text-xs sm:text-sm font-bold tracking-wide uppercase">{name}</p>
          </div>
        </div>
      </div>

      {/* Play Indicator (Only shows when paused manually) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px]">
          <div className="p-4 rounded-full bg-background/10 backdrop-blur-md border border-border">
            <Play className="w-8 h-8 text-foreground fill-current" />
          </div>
        </div>
      )}
    </div>
  )
}
