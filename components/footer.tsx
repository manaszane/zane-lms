import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, GraduationCap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-card mt-24 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ZANE ProEd</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Elite professional training programs in clinical research, healthcare analytics, and medical innovation.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground transition-colors hover:text-primary">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-muted-foreground transition-colors hover:text-primary">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-muted-foreground transition-colors hover:text-primary">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/courses?category=foundational"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Foundational
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=advanced"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Advanced Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=elite"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Elite R&D
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground transition-colors hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="text-muted-foreground transition-colors hover:text-primary">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ZANE ProEd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
