"use client"
import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react" // Added ArrowRight
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion" // Added motion

const navLinks = [
  { href: "https://www.zaneproed.com", label: "Home" },
  { href: "https://www.zaneproed.com/services", label: "Services" },
  { href: "https://www.zaneproed.com/registrationpage", label: "Register here" },
  { href: "https://www.zaneproed.com/about", label: "About" },
  { href: "https://www.zaneproed.com/careers", label: "Careers" },
  { href: "https://www.zaneproed.com/partnership", label: "Partner with us" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Container height adjusted for a bigger mobile logo */}
      <div className="flex h-20 sm:h-22 lg:h-24 items-center justify-between px-5 md:px-10 lg:px-14">
        
        {/* Logo Section */}
        <a 
          href="https://www.zaneproed.com/" 
          target="_self" 
          className="flex items-center transition-opacity hover:opacity-90"
        >
          {/* BIGGER MOBILE LOGO: h-16 (64px) on mobile, scaling up to h-24 on desktop */}
          <img 
            src="/images/design-mode/6abdd9_86ea84496bee42fd9e01eac83815d992~mv2(2).png" 
            alt="ZANE Logo" 
            className="h-16 w-auto object-contain transition-all duration-300 md:h-20 lg:h-24 dark:invert-[0.1]" 
          />
          
          <div className="hidden flex-col leading-none ml-3 lg:flex">
            <span className="font-['Times_New_Roman'] text-lg font-normal tracking-tight text-foreground md:text-xl">
              Zane
              <span className="italic font-bold text-primary"> ProEd.</span>
            </span>
            <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Education & Careers
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          
          <a 
            href="#" 
            className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Log In
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full dark:bg-zinc-900 text-foreground xl:hidden bg-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu className="text-black" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 top-[80px] h-screen bg-background p-6 xl:hidden z-50 border-t border-border"
          >
            <ul className="flex flex-col gap-6">
              <li className="flex items-center justify-between pb-4 border-b border-border/50">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </li>
              
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-foreground active:text-primary"
                  >
                    {link.label}
                    <ArrowRight className="text-primary/40" size={20} />
                  </a>
                </motion.li>
              ))}
              
              <li className="pt-6">
                <a href="#" className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  Log In to Portal
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
