"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TalkToUsForm } from "@/components/talk-to-us-form"

export function FreeTrialSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Take a free trial today!
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Talk to us!
          </p>

          <div className="mt-10">
            <Button size="lg" onClick={() => setOpen(true)}>
              Talk to us
            </Button>
          </div>

        </div>
      </section>

      <TalkToUsForm open={open} onClose={() => setOpen(false)} />
    </>
  )
}
