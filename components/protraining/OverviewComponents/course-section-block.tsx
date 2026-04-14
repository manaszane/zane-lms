"use client"

import { CheckCircle2, Target, Trophy, Briefcase, Info, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseSectionBlockProps {
  title: string
  content: string | string[]
  type: "text" | "grid" | "badges" | "list"
  className?: string
}

export function CourseSectionBlock({ title, content, type, className }: CourseSectionBlockProps) {
  const contentString =
    typeof content === "string" ? content : Array.isArray(content) ? content.join(". ") : String(content || "")

  // Parse content based on type
  const listItems = contentString
    .split(/[;.]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 5)

  const gridItems = Array.isArray(content)
    ? content
    : contentString
        .split(/[,;]|\band\b/)
        .map((item) => item.replace(/[).]/g, "").trim())
        .filter((item) => item.length > 2)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 md:p-8 shadow-sm transition-all hover:bg-card/60",
        className,
      )}
    >
      <div className="flex items-start gap-5">
        {/* Dynamic Icon Section */}
        <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {type === "badges" && <Target className="h-5 w-5" />}
          {type === "grid" && <Trophy className="h-5 w-5" />}
          {type === "text" && <Info className="h-5 w-5" />}
          {type === "list" && <Briefcase className="h-5 w-5" />}
        </div>

        <div className="flex-grow">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">{title}</h2>

          {/* LAYOUT: Badges */}
          {type === "badges" && (
            <div className="flex flex-wrap gap-2">
              {gridItems.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* LAYOUT: Grid */}
          {type === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {gridItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* LAYOUT: List */}
          {type === "list" && (
            <div className="space-y-2">
              {listItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group/item">
                  <ChevronRight className="h-3 w-3 text-primary transition-transform group-hover/item:translate-x-1" />
                  <span className="text-sm font-medium text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* LAYOUT: Text */}
          {type === "text" && (
            <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
              {contentString.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
