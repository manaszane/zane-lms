"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import { type NetworkMember, COMPANY_LOGOS } from "@/lib/zaneNetwork"
import { motion, AnimatePresence } from "framer-motion"

interface NetworkPanelProps {
  members: NetworkMember[]
}

export function NetworkPanel({ members }: NetworkPanelProps) {
  const [selectedMember, setSelectedMember] = useState<NetworkMember | null>(null)
  const [hoveredMember, setHoveredMember] = useState<NetworkMember | null>(null)

  const scrollToJoinCTA = () => {
    document.getElementById("join-zane-network")?.scrollIntoView({ behavior: "smooth" })
  }

  const getCompanyLogo = (companyName: string) => {
    const found = COMPANY_LOGOS.find(
      (c) =>
        c.name.toLowerCase() === companyName.toLowerCase() || companyName.toLowerCase().includes(c.name.toLowerCase()),
    )
    return found?.logo
  }

  return (
    <div className="relative w-full">
      {/* --- DESKTOP HOVER POPUP --- */}
      <div className="hidden lg:block absolute -left-[240px] top-0 w-[220px] z-[60] pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredMember && (
            <motion.div
              key={hoveredMember.name}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.95 }}
              className="pointer-events-auto flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-3xl"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-[1rem] bg-muted mb-3">
                {hoveredMember.image ? (
                  <Image
                    src={hoveredMember.image || "/placeholder.svg"}
                    alt={hoveredMember.name}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xl font-bold text-muted-foreground/20">
                    {hoveredMember.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center px-1 mb-4">
                <h4 className="text-base font-bold text-foreground leading-tight">{hoveredMember.name}</h4>
                <p className="text-[9px] font-bold text-primary uppercase tracking-widest">
                  {hoveredMember.role || "Professional"}
                </p>
              </div>
              <div className="mt-auto border-t border-border pt-4 flex justify-center items-center">
                {getCompanyLogo(hoveredMember.company) ? (
                  <div className="relative h-12 w-28">
                    <Image
                      src={getCompanyLogo(hoveredMember.company)! || "/placeholder.svg"}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-[10px] text-muted-foreground font-bold uppercase italic">
                    {hoveredMember.company}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- MOBILE DETAIL OVERLAY --- */}
      <AnimatePresence>
        {selectedMember && (
          <div className="lg:hidden fixed inset-0 z-[100] flex items-end justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="w-full max-w-sm bg-card border border-border rounded-t-[2rem] p-6 shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-1.5 bg-muted rounded-full" onClick={() => setSelectedMember(null)} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                  {selectedMember.image ? (
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-bold">
                      {selectedMember.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{selectedMember.name}</h4>
                  <p className="text-xs text-primary font-black uppercase tracking-widest">{selectedMember.role}</p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-2xl p-4 flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase text-muted-foreground">Current Company</span>
                {getCompanyLogo(selectedMember.company) ? (
                  <div className="relative h-8 w-20">
                    <Image
                      src={getCompanyLogo(selectedMember.company)! || "/placeholder.svg"}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-xs font-bold">{selectedMember.company}</span>
                )}
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-4 bg-foreground text-background rounded-xl font-bold text-sm"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MAIN LIST CONTAINER --- */}
      <div className="relative h-[450px] sm:h-[600px] overflow-hidden rounded-[2rem] bg-card/50 border border-border shadow-inner">
        <div className="absolute inset-x-0 top-0 z-20 h-12 bg-gradient-to-b from-background/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

        <div className="h-full overflow-y-auto px-3 sm:px-4 py-6 scrollbar-hide text-foreground bg-transparent">
          <div className="space-y-2 sm:space-y-3">
            {members.map((member, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member)}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card/80 p-3 sm:p-4 transition-all hover:shadow-md hover:border-primary/30 cursor-pointer lg:cursor-default"
              >
                {/* Fixed Circular Avatar Holder */}
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-border group-hover:ring-primary/40 transition-all">
                    {member.image ? (
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-xs font-bold text-muted-foreground">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  {/* Status indicator dot */}
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-emerald-500 z-10" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm sm:text-base font-black text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </p>
                    <ExternalLink className="h-3 w-3 text-muted-foreground lg:hidden" />
                  </div>
                  <p className="truncate text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-wider">
                    {member.company}
                  </p>
                </div>
              </motion.div>
            ))}

            <button
              onClick={scrollToJoinCTA}
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border p-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              Join the Network <ChevronDown className="h-3 w-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
