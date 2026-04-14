"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TalkToUsFormProps {
  open: boolean
  onClose: () => void
}

export function TalkToUsForm({ open, onClose }: TalkToUsFormProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-background p-8 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="mb-6 text-2xl font-semibold">
          Talk to Us
        </h3>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm"
          />

          <textarea
            placeholder="Tell us what you're looking for"
            rows={4}
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm"
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>

        </form>

      </div>
    </div>
  )
}
