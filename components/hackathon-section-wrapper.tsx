"use client"

import { useState, useEffect } from "react"
import HackathonSection from "./hackathon-section"

export default function HackathonSectionWrapper() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hackathon section is always visible - scrolls naturally with page
  return (
    <div className="min-h-screen w-full" style={{ background: 'transparent' }}>
      <HackathonSection />
    </div>
  )
}
