"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import type { DepartmentEvents } from "@/lib/events-data"
import { getScheduleJumpForEvent } from "@/lib/schedule-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EventCardRules } from "./event-card-rules"
import { ContactList } from "./contact-list"
import { EventHighlighter } from "./event-highlighter"

const LuminusParticles = dynamic(
  () => import("../../Home page/vercel-logo-particles").then((m) => m.default),
  { ssr: false }
)

const EventRegisterDialog = dynamic(
  () => import("./event-register-dialog").then((m) => ({ default: m.EventRegisterDialog })),
  { ssr: false }
)

export default function DepartmentEventsPageClient({ dept }: { dept: DepartmentEvents }) {
  const eventsForDisplay = dept.events
    .map((ev, originalIndex) => ({ ev, originalIndex }))
    .sort((a, b) => {
      const rank = (e: (typeof a)["ev"]) => (e.tag === "Grand Hackathon" || e.type === "Flagship" ? 0 : 1)
      return rank(a.ev) - rank(b.ev)
    })

  return (
    <main className="relative min-h-screen">
      <EventHighlighter />
      <LuminusParticles startDispersed hideCursor={false} particleGap={4} />

      <div className="relative z-[20] pt-24 px-6 pb-24">
        <div className="max-w-3xl mx-auto text-white/90">
          <Link href="/events" className="inline-flex items-center min-h-[44px] text-sm text-white/70 hover:text-white mb-6 touch-action-manipulation">
            ← All events
          </Link>

          <h1 className="text-3xl font-semibold text-white mb-2">{dept.fullName ?? dept.name}</h1>
          <p className="text-white/70 mb-10">
            {dept.events.length} track{dept.events.length !== 1 ? "s" : ""} in this department.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {eventsForDisplay.map(({ ev, originalIndex }) => (
              <Card
                key={ev.name}
                id={`event-${originalIndex}`}
                className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 overflow-hidden"
              >
                <CardHeader className="pb-1 pt-2.5 px-2.5 text-left sm:pb-3 sm:pt-6 sm:px-6">
                  <div className="flex flex-wrap items-center justify-start gap-1">
                    <CardTitle className="text-base text-white tracking-tight sm:text-xl">{ev.name}</CardTitle>
                    <Badge
                      variant={ev.type === "Flagship" ? "default" : "secondary"}
                      className={
                        ev.type === "Flagship"
                          ? "rounded-full bg-amber-500/20 text-amber-300 border-amber-500/40 px-2 py-0.5 text-xs sm:px-2.5"
                          : "rounded-full bg-white/10 text-white/80 border-white/20 px-2 py-0.5 text-xs sm:px-2.5"
                      }
                    >
                      {ev.tag ?? ev.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center justify-start gap-x-2.5 gap-y-0.5 text-left text-xs text-white/60 pt-0.5 sm:gap-x-4 sm:text-sm sm:pt-2">
                    {ev.date && <span>Date: {ev.date}</span>}
                    <span>Team: {ev.teamSize}</span>
                    <span className="inline-flex items-center">
                      Duration:{" "}
                      {(() => {
                        const jump = getScheduleJumpForEvent(dept.id, ev.name)
                        if (!jump) return <span>{ev.duration}</span>
                        return (
                          <Link
                            href={`/schedule?day=${jump.day}&focus=${encodeURIComponent(jump.focusId)}`}
                            className="inline-flex items-center min-h-[44px] underline underline-offset-4 decoration-white/30 hover:decoration-white/70 text-white/70 hover:text-white transition-colors touch-action-manipulation"
                          >
                            {ev.duration}
                          </Link>
                        )
                      })()}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="px-2.5 pb-2.5 space-y-1.5 text-left text-sm sm:px-6 sm:pb-6 sm:space-y-4">
                  {ev.description && <p className="text-[13px] text-white/80 leading-tight sm:text-sm sm:leading-relaxed">{ev.description}</p>}
                  {ev.note && (
                    <p className="text-[12px] font-semibold text-white leading-tight sm:text-xs sm:leading-relaxed">
                      <span className="font-semibold text-white">NOTE:</span> {ev.note}
                    </p>
                  )}

                  {ev.eventFlow && (
                    <div className="space-y-0 text-left">
                      <h4 className="text-[13px] font-medium text-amber-200/95 sm:text-sm">Event flow</h4>
                      <p className="text-[13px] leading-tight text-amber-100/90 sm:text-sm sm:leading-relaxed">{ev.eventFlow}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-1 text-left text-white/80 sm:grid-cols-2 sm:gap-3">
                    {ev.registrationFee != null && (
                      <p className="flex items-baseline text-[13px] sm:text-sm">
                        <span className="text-white/50">Registration fee:</span>{" "}
                        <span className="inline-flex items-baseline">₹{ev.registrationFee}</span>
                      </p>
                    )}
                    {dept.id !== "grand-hackathon" && (
                      <p className="flex items-baseline gap-2 text-[13px] sm:text-sm">
                        <span className="text-white/50">Prize pool:</span>
                        <span
                          className="inline-flex items-baseline font-semibold tracking-tight"
                          style={{
                            color: ev.type === "Flagship" ? "rgba(251,191,36,0.95)" : "rgba(147,197,253,0.95)",
                            textShadow:
                              ev.type === "Flagship"
                                ? "0 0 18px rgba(251,191,36,0.35)"
                                : "0 0 14px rgba(147,197,253,0.25)",
                          }}
                        >
                          ₹{ev.prize.toLocaleString("en-IN")}
                          {ev.type === "Flagship" ? "+" : ""}
                        </span>
                      </p>
                    )}
                  </div>

                  <div>
                    <EventRegisterDialog
                      departmentId={dept.id}
                      departmentName={dept.fullName ?? dept.name}
                      eventKey={`${dept.id}:${originalIndex + 1}`}
                      eventName={ev.name}
                      teamSize={ev.teamSize}
                      registrationFee={ev.registrationFee}
                      registrationOpen={ev.registrationOpen}
                    />
                  </div>

                  {ev.rules && <EventCardRules rules={ev.rules} />}

                  {ev.contacts && ev.contacts.length > 0 && (
                    <div className="text-left">
                      <h4 className="text-white/90 font-medium mb-0.5 text-[13px] sm:mb-2 sm:text-sm">Contact</h4>
                      <ContactList contacts={ev.contacts} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

