"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  Info,
  Layers,
  Network,
  Star,
  Menu,
  X
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/courses", label: "Courses", icon: Layers },
  { href: "/ecosystem", label: "Ecosystem", icon: Network },
  { href: "/testimonials", label: "Testimonials", icon: Star },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-6 rounded-2xl border border-border/40 bg-background/85 px-6 py-3 backdrop-blur-xl shadow-xl">

          {/* Brand Logo — native img (intentional) */}
          <Link href="/" className="flex items-center pr-4">
            <img
              src="/images/design-mode/6abdd9_c24965622e4241b084f304d399fd52cb~mv2.png"
              alt="ZANE ProEd"
              className="h-12 w-auto select-none"
              draggable={false}
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1 rounded-xl bg-muted/40 p-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const active = pathname === href

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-200",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </div>

          {/* Controls */}
          <div className="pl-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex h-14 items-center justify-between border-b border-border/40 bg-background/90 px-4 backdrop-blur-xl">
          <Link href="/" className="flex items-center">
            <img
              src="/images/design-mode/6abdd9_c24965622e4241b084f304d399fd52cb~mv2.png"
              alt="ZANE ProEd"
              className="h-12 w-auto select-none"
              draggable={false}
            />
          </Link>

          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-b border-border/40 bg-background px-4 py-3">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
