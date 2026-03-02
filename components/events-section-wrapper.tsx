"use client"

import { useState, useEffect } from "react"
import EventsSection from "./events-section"

export default function EventsSectionWrapper() {
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

  // Events section is always visible - scrolls naturally with page
  return <EventsSection scrollProgress={scrollProgress} />
}
