"use client"
import Image from "next/image"

interface CompanyLogoMarqueeProps {
  logos: Array<{ name: string; logo: string }>
}

export function CompanyLogoMarquee({ logos }: CompanyLogoMarqueeProps) {
  // Triple the logos to ensure the track is long enough for the loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-6 lg:py-8 marquee-speed">
      {/* Moving track */}
      <div
        className="
          flex items-center w-max
          gap-6          /* Reduced gap on mobile to fit more logos */
          sm:gap-10
          lg:gap-16
          animate-marquee
          hover:[animation-play-state:paused]
        "
        style={{
          // This pulls the duration from your Global CSS variable
          animationDuration: "var(--marquee-duration)",
        }}
      >
        {duplicatedLogos.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 transition-transform duration-300 ease-out group"
          >
            <div
              className="
                relative 
                /* Mobile: width reduced to w-24 to see more logos at once */
                h-8 w-24      
                sm:h-12 sm:w-36
                lg:h-14 lg:w-40
                transition-all duration-300
                /* Full opacity as requested (no grayscale/fade) */
                opacity-100
                group-hover:scale-110
                group-hover:brightness-110
                group-hover:drop-shadow-[0_0_16px_rgba(139,92,246,0.15)]
              "
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, 160px"
                priority={index < 10}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
