"use client"

import dynamic from "next/dynamic"

const VercelLogoParticles = dynamic(
  () => import("./Home page/vercel-logo-particles").then((m) => m.default),
  { ssr: false }
)

const HackathonSectionWrapper = dynamic(
  () => import("@/components/hackathon-section-wrapper"),
  { ssr: false }
)

const EventsSectionWrapper = dynamic(
  () => import("@/components/events-section-wrapper"),
  { ssr: false }
)

export default function HomeClient() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero: use 100dvh on mobile for correct ratio and to avoid iOS nav bar jump; desktop unchanged */}
      <div className="min-h-[100dvh] min-h-[100svh] md:min-h-screen md:h-screen relative md:sticky top-0 z-10 w-full">
        <VercelLogoParticles />
      </div>
      {/* Content: safe-area insets for notched devices; desktop spacing unchanged */}
      <div className="mt-[8vh] md:mt-[20vh] relative z-20 px-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] max-w-full">
        <HackathonSectionWrapper />
        <div className="mt-2">
          <EventsSectionWrapper />
        </div>
      </div>
    </main>
  )
}

