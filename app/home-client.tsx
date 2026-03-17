"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useState } from "react"

import sutoCafeLogo from "../SUTO - White PNG.png"

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
  const [showSponsor, setShowSponsor] = useState(true)

  useEffect(() => {
    const threshold = 80
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0
      setShowSponsor(y <= threshold)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero: use 100dvh on mobile for correct ratio and to avoid iOS nav bar jump; desktop unchanged */}
      <div className="min-h-[100dvh] min-h-[100svh] md:min-h-screen md:h-screen relative md:sticky top-0 z-10 w-full">
        <VercelLogoParticles />

        {/* Mobile-only hero tagline (top space) */}
        <div className="pointer-events-none absolute left-1/2 top-[max(4.5rem,calc(4rem+env(safe-area-inset-top)))] z-20 w-[min(92vw,40rem)] -translate-x-1/2 px-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] md:hidden">
          <p className="text-center text-[10px] leading-relaxed tracking-[0.28em] text-white/35">
            LUMINUS 2026 IS RNSIT&apos;S FIRST NATIONAL-LEVEL INTERCOLLEGIATE TECH FEST,
            LAUNCHED IN ITS LANDMARK 25TH YEAR TO BEGIN A LEGACY OF INNOVATION. WITH
            2,000+ STUDENTS NATIONWIDE, IT BLENDS TECHNICAL AND INTERDISCIPLINARY
            CHALLENGES THAT INSPIRE YOU TO COMPETE, GROW, AND SHINE.
          </p>
        </div>

        {/* Title sponsor + logo (hide on scroll like corner logos) */}
        <div
          className={[
            "pointer-events-none absolute left-1/2 top-[calc(50%+6.5rem)] md:top-[calc(50%+9.5rem)] z-20 -translate-x-1/2",
            "transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            showSponsor ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
          ].join(" ")}
        >
          <div className="flex flex-col items-center">
            <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 text-center">
              Title Sponsor
            </div>
            <a
              href="https://maps.app.goo.gl/fXdLVmCjLEjjRJGQ7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mt-3 inline-flex items-center justify-center"
              aria-label="Open SUTO Cafe on Google Maps"
            >
              <Image
                src={sutoCafeLogo}
                alt="SUTO Cafe"
                priority
                className="h-20 w-auto object-contain md:h-20"
              />
            </a>
            <a
              href="https://maps.app.goo.gl/fXdLVmCjLEjjRJGQ7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mt-1.5 text-center text-[11px] md:text-xs text-white/55 underline underline-offset-4 decoration-white/35 hover:text-white/70"
              aria-label="Open SUTO Cafe location on Google Maps"
            >
              Suto Cafe Channasandra near RNSIT
            </a>
          </div>
        </div>
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

