"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface Review {
  name: string
  text: string
  rating: number
}

const GOOGLE_REVIEWS: Review[] = [
  { name: "Gowtham Suresh", text: "One of the best institutions bridging the gap between education and industry.", rating: 5 },
  { name: "Jeevana Sivagnanam", text: "The Clinical Research course isn’t about long PPTs. It’s like a driving simulator for CRC work — truly hands-on.", rating: 5 },
  { name: "Jason Raja", text: "Clear, well-structured, and practical sessions. Great support from the team. Highly recommended for QC/QA roles.", rating: 5 },
  { name: "Merrin Jose", text: "The QAQC course and AI audit simulations are completely unique. I feel confident pursuing quality roles now.", rating: 5 },
  { name: "Praveen", text: "The Pharmacovigilance course and AI tools for case checking are unmatched. Zane Omega is truly hands-on.", rating: 5 },
  { name: "Jersha Jersha", text: "Within three weeks, the Clinical Research course prepared me for trial roles. The AI data tools are one-of-a-kind.", rating: 5 },
  { name: "Kishore S", text: "Extremely useful and practical. I gained real-world knowledge while studying.", rating: 5 },
]

export function GoogleReviewsMarquee() {
  const reviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS]

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-8 bg-background">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="relative flex overflow-x-hidden">
        <div 
          className="flex animate-marquee whitespace-nowrap gap-4 sm:gap-6 py-4 hover:[animation-play-state:paused]"
          style={{ 
            "--marquee-duration": "40s",
            "--marquee-duration-mobile": "25s" 
          } as React.CSSProperties}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative w-[240px] sm:w-[350px] flex-shrink-0 group"
            >
              {/* Card - Responsive padding and text */}
              <div className="glass-card h-full flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:border-primary/50">
                
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Image
                    src="/images/design-mode/google-logo.png"
                    alt="Google"
                    width={14}
                    height={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity dark:invert sm:w-[16px]"
                  />
                </div>

                <div className="relative flex-1">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 sm:w-8 sm:h-8 text-primary/10 rotate-180" />
                  <p className="text-[11px] sm:text-sm leading-relaxed text-foreground/80 whitespace-normal line-clamp-4 relative z-10 italic">
                    {review.text}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 border-t border-border pt-3 sm:pt-4">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-[10px] sm:text-xs font-bold border border-border">
                    {review.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] sm:text-sm font-bold text-foreground truncate">{review.name}</p>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Alumni</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-20" />
    </div>
  )
}
