"use client"

import { useState, useEffect } from "react"
import HackathonSection from "./hackathon-section"

export default function HackathonSectionWrapper() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      setScrollProgress(progress)
      // Show section once user scrolls past 30%
      setIsVisible(progress >= 0.30)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity based on scroll position for smooth fade-in
  // Starts fading in at 30%, fully visible at 50%
  const opacity = isVisible ? Math.min(1, (scrollProgress - 0.30) / 0.2) : 0

  if (opacity === 0 && scrollProgress < 0.30) return null

  return (
    <div 
      className="fixed inset-0 z-20"
      style={{
        opacity,
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: opacity > 0.1 ? 'auto' : 'none'
      }}
    >
      <HackathonSection />
    </div>
  )
}
