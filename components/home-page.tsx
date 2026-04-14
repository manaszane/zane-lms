"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FreeTrialSection } from "@/components/free-trial-section"
import { HeroSection } from "@/components/homepage/hero-section"
import { WhatAreYouLookingForSection } from "@/components/homepage/what-are-you-looking-for-section"
import { UpskillingPlatformSection } from "@/components/homepage/upskilling-platform-section"
import { GlobalCareerSection } from "@/components/homepage/global-career-section"
import { CurriculumStandardsSection } from "@/components/homepage/curriculum-standards-section"
import { StandardsMarqueeSection } from "@/components/homepage/standards-marquee-section"
import { DreamAchieveSection } from "@/components/homepage/dream-achieve-section"
import { TopCompaniesSection } from "@/components/homepage/top-companies-section"
import { JoinCommunitySection } from "@/components/homepage/join-community-section"
import { StatsSection } from "@/components/homepage/stats-section"
import { FeaturedCoursesSection } from "@/components/homepage/featured-courses-section"
import { ProgramCategoriesSection } from "@/components/homepage/program-categories-section"
import { CTASection } from "@/components/homepage/cta-section"

export function HomePage() {
  return (
    /* 1. h-screen + overflow-y-auto: Creates the scroll container 
      2. snap-y + snap-mandatory: Enables vertical snapping
      3. scroll-smooth: For elegant transitions
    */
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black">
      <Navbar />

      {/* SECTION 1: HERO */}
      <div className="snap-start relative h-screen w-full">
        <div className="sticky top-0 h-screen overflow-hidden">
          <HeroSection />
        </div>
      </div>
      

      {/* SECTION 2: PORTALS (Automatically fills screen & centers) */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center bg-[#050505]">
        <WhatAreYouLookingForSection />
      </div>
      {/* REMAINING SECTIONS: You can choose to snap these or let them flow normally */}
      <div className="snap-start bg-background">
        <UpskillingPlatformSection />
      </div>

      <div className="snap-start">
        <GlobalCareerSection />
      </div>

      <div className="snap-start">
        <CurriculumStandardsSection />
      </div>

      <StandardsMarqueeSection />
      <DreamAchieveSection />
      <TopCompaniesSection />
      <JoinCommunitySection />
      <FreeTrialSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <ProgramCategoriesSection />
      <CTASection />

      <Footer />
    </div>
  )
}
