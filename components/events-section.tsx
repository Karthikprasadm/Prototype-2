"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Cpu, Shield, Database, Code, Wrench, Lightbulb, Gamepad2, Zap, Lock, Brain, Binary, Terminal, Gauge, Cog, Sparkles } from "lucide-react"

interface EventsSectionProps {
  scrollProgress: number
}

export default function EventsSection({ scrollProgress }: EventsSectionProps) {
  // scrollProgress: 0.75 = section starts, 0.95 = section ends (adjust to match your scroll setup)
  const SECTION_START = 0.75
  const SECTION_END = 0.98

  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - SECTION_START) / (SECTION_END - SECTION_START)))

  // Smooth opacity calculation - more gradual fade in
  const fadeOpacity = Math.min(1, sectionProgress * 2.5)
  
  if (fadeOpacity === 0) return null

  const eventCategories = [
    {
      id: "gaming",
      title: "Gaming & Combat",
      icon: Gamepad2,
      color: "#ef4444",
      events: [
        { name: "Robowars", flagship: true },
        { name: "RC Car Racing", flagship: false },
        { name: "Valorant", flagship: false },
        { name: "BGMI", flagship: false },
      ]
    },
    {
      id: "ai",
      title: "AI & ML",
      icon: Brain,
      color: "#8b5cf6",
      events: [
        { name: "The Turing Test", flagship: false },
        { name: "Reverse Prompt Engineering", flagship: false },
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Lock,
      color: "#22c55e",
      events: [
        { name: "Zero Day Arena", flagship: true },
        { name: "Escape & Exploit", flagship: false },
      ]
    },
    {
      id: "datascience",
      title: "Data Science",
      icon: Database,
      color: "#3b82f6",
      events: [
        { name: "Data Royale", flagship: true },
        { name: "Data Decoded", flagship: false },
        { name: "SDG Data Jam", flagship: false },
        { name: "Kill Switch", flagship: false },
      ]
    },
    {
      id: "coding",
      title: "Coding & Logic",
      icon: Terminal,
      color: "#f97316",
      events: [
        { name: "Code Condrum", flagship: false },
        { name: "Version Control Wars", flagship: false },
        { name: "Tech Escape Quest", flagship: false },
        { name: "Bug Buster", flagship: false },
      ]
    },
    {
      id: "core",
      title: "Core Engineering",
      icon: Cog,
      color: "#eab308",
      events: [
        { name: "DESIGN. DECIDE. DOMINATE.", flagship: true },
        { name: "Electraforge", flagship: true },
        { name: "IoT Nexus", flagship: true },
        { name: "Innovatrium", flagship: true },
        { name: "Circuitrix", flagship: false },
        { name: "Bridge IT", flagship: false },
        { name: "Embedded Escape Room", flagship: false },
      ]
    },
    {
      id: "quiz",
      title: "Quiz & Ideas",
      icon: Sparkles,
      color: "#ec4899",
      events: [
        { name: "Ideathon Arena", flagship: false },
        { name: "Biznova", flagship: true },
      ]
    },
  ]

  const N = eventCategories.length
  // Each card gets a window of sectionProgress to reveal
  // Card i reveals when sectionProgress passes i/(N+1)
  // Fully visible at (i+1)/(N+1)
  const CARD_WINDOW = 1 / (N + 1)

  return (
    <div
      className="fixed inset-0 z-20 overflow-y-auto"
      style={{ 
        opacity: fadeOpacity, 
        background: '#0a0a0a',
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="min-h-full flex flex-col items-center py-20 px-4">

        {/* Timeline spine — grows as you scroll */}
        <div
          className="absolute left-1/2 top-32 w-0.5"
          style={{
            background: 'linear-gradient(to bottom, #9333ea, #22d3ee, #9333ea)',
            height: `calc(${sectionProgress * 100}% - 8rem)`,
            transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 0.5,
          }}
        />

        {/* Title */}
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-16 text-center relative z-10"
          style={{
            transform: `translateY(${(1 - Math.min(1, sectionProgress * 8)) * 30}px)`,
            opacity: Math.min(1, sectionProgress * 8),
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          EVENT <span style={{ color: '#9333ea' }}>CATEGORIES</span>
        </h2>

        {/* Timeline Events */}
        <div className="relative w-full max-w-4xl">
          {eventCategories.map((category, catIndex) => {
            const Icon = category.icon
            const isLeft = catIndex % 2 === 0

            // This card starts revealing at threshold, fully in at threshold + CARD_WINDOW
            const threshold = (catIndex + 0.5) / (N + 1)
            const cardProgress = Math.max(0, Math.min(1, (sectionProgress - threshold) / CARD_WINDOW))

            if (cardProgress === 0) return null

            const slideOffset = (1 - cardProgress) * 60

            return (
              <div
                key={category.id}
                className={`flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                style={{
                  transform: `translateX(${isLeft ? -slideOffset : slideOffset}px)`,
                  opacity: cardProgress,
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out',
                }}
              >
                {/* Content — left side */}
                {isLeft && (
                  <div className="flex-1 pr-8 text-right">
                    <div
                      className="inline-block p-6 rounded-2xl"
                      style={{ background: '#111111', border: `1px solid ${category.color}40` }}
                    >
                      <div className="flex items-center gap-3 mb-4 justify-end">
                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${category.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: category.color }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        {category.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-center justify-end gap-2">
                            <span className="text-white/80 text-sm">{event.name}</span>
                            {event.flagship && (
                              <span style={{ color: category.color }} className="text-[10px] font-bold">★</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: category.color,
                      boxShadow: `0 0 ${10 * cardProgress}px ${category.color}`,
                      transform: `scale(${cardProgress})`,
                    }}
                  />
                </div>

                {/* Content — right side */}
                {!isLeft && (
                  <div className="flex-1 pl-8 text-left">
                    <div
                      className="inline-block p-6 rounded-2xl"
                      style={{ background: '#111111', border: `1px solid ${category.color}40` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${category.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: category.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      </div>
                      <div className="space-y-1">
                        {category.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-center gap-2">
                            {event.flagship && (
                              <span style={{ color: category.color }} className="text-[10px] font-bold">★</span>
                            )}
                            <span className="text-white/80 text-sm">{event.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-8 text-center relative z-10"
          style={{
            opacity: Math.max(0, (sectionProgress - 0.85) / 0.15),
          }}
        >
          <p className="text-white/40 text-sm">Total Events: 28+</p>
        </div>
      </div>
    </div>
  )
}