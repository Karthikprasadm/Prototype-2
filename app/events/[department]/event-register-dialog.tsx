"use client"

import { Fragment, useMemo, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EventRegisterDialogProps {
  departmentName: string
  eventName: string
  teamSize: string
  registrationFee?: number
}

function parseTeamSize(teamSize: string): { min: number; max: number } {
  const cleaned = teamSize.toLowerCase().trim()

  // Patterns like "2-4", "3 - 5"
  const rangeMatch = cleaned.match(/(\d+)\s*[-–]\s*(\d+)/)
  if (rangeMatch) {
    const min = parseInt(rangeMatch[1], 10)
    const max = parseInt(rangeMatch[2], 10)
    if (!Number.isNaN(min) && !Number.isNaN(max) && max >= min) {
      return { min, max }
    }
  }

  // Patterns like "upto 4", "up to 4", "max 5"
  const upToMatch = cleaned.match(/(upto|up to|max)\s+(\d+)/)
  if (upToMatch) {
    const max = parseInt(upToMatch[2], 10)
    if (!Number.isNaN(max)) {
      return { min: 1, max }
    }
  }

  // Single number like "2" or "4"
  const singleMatch = cleaned.match(/(\d+)/)
  if (singleMatch) {
    const n = parseInt(singleMatch[1], 10)
    if (!Number.isNaN(n) && n > 0) {
      return { min: n, max: n }
    }
  }

  // Fallback: assume 2 members
  return { min: 2, max: 2 }
}

export function EventRegisterDialog({
  departmentName,
  eventName,
  teamSize,
  registrationFee,
}: EventRegisterDialogProps) {
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { min, max } = useMemo(() => parseTeamSize(teamSize), [teamSize])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) {
          setErrorMessage(null)
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="mt-1 rounded-full bg-amber-400 text-black shadow-[0_10px_30px_rgba(251,191,36,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-[#020202]/95 text-white border-0 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-0 overflow-hidden">
        <div className="rounded-t-3xl border-b border-white/[0.05] bg-gradient-to-r from-[#111111] via-[#080808] to-[#0f0f0f] px-6 py-5">
          <DialogHeader className="space-y-1.5">
            <DialogTitle className="text-xl sm:text-2xl font-semibold tracking-tight">
            Register for {eventName}
            </DialogTitle>
            <DialogDescription className="text-sm text-white/65 text-left">
              {departmentName} · Team size: {teamSize}
              {registrationFee != null && (
                <> · Registration fee: ₹{registrationFee}</>
              )}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="max-h-[72vh] overflow-y-auto no-scrollbar bg-[#050505]/95 rounded-b-3xl">
          <form
            onSubmit={(e) => {
              const form = e.currentTarget as HTMLFormElement
              if (!form.checkValidity()) {
                e.preventDefault()
                setErrorMessage("Please fill all mandatory fields marked with *.")
                form.reportValidity()
                return
              }
              e.preventDefault()
              setErrorMessage(null)
              // TODO: hook this up to real submission or payment later
            }}
            className="space-y-5 text-sm px-6 pb-5 pt-4"
          >
            <div className="space-y-3 rounded-2xl border-0 bg-gradient-to-b from-[#151515] to-[#0c0c0c] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium">
                Participants
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: max }).map((_, idx) => {
              const memberIndex = idx + 1
              const isLead = memberIndex === 1
              const required = memberIndex <= min
              const nameId = `name${memberIndex}`
              const usnId = `usn${memberIndex}`

              const nameLabel = isLead
                ? "Participant 1 (team lead)"
                : `Participant ${memberIndex}${required ? "" : " (optional)"}`
              const usnLabel = "USN"

                return (
                  <Fragment key={`member-${memberIndex}`}>
                    <div className="space-y-1.5">
                      <Label htmlFor={nameId} className="text-sm text-white/90">
                        {nameLabel}
                        {required && <span className="ml-0.5 text-red-400">*</span>}
                      </Label>
                      <Input
                        id={nameId}
                        name={nameId}
                        required={required}
                        className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor={usnId} className="text-sm text-white/90">
                        {usnLabel}
                        {required && <span className="ml-0.5 text-red-400">*</span>}
                      </Label>
                      <Input
                        id={usnId}
                        name={usnId}
                        required={required}
                        className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                  </Fragment>
                )
              })}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border-0 bg-gradient-to-b from-[#151515] to-[#0c0c0c] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium">
                College & contact
              </p>
              <div className="space-y-1.5">
                <Label htmlFor="college" className="text-sm text-white/90">
                  College / University
                  <span className="ml-0.5 text-red-400">*</span>
                </Label>
                <Input
                  id="college"
                  name="college"
                  required
                  className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm text-white/90">
                    Email
                    <span className="ml-0.5 text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="altEmail" className="text-sm text-white/90">Alternate email (optional)</Label>
                  <Input
                    id="altEmail"
                    name="altEmail"
                    type="email"
                    autoComplete="email"
                    className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm text-white/90">
                    Phone number
                    <span className="ml-0.5 text-red-400">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="altPhone" className="text-sm text-white/90">Alternate phone (optional)</Label>
                  <Input
                    id="altPhone"
                    name="altPhone"
                    type="tel"
                    autoComplete="tel"
                    className="h-11 rounded-xl border-0 bg-[#30343a] text-white placeholder:text-[#aeb4bc] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>

            {errorMessage && (
              <p className="text-xs text-red-400 mt-1">{errorMessage}</p>
            )}

            <DialogFooter className="pt-1 border-t border-white/[0.05] mt-1 -mx-6 px-6 pb-4 pt-3 bg-gradient-to-r from-[#0b0b0b] via-[#060606] to-[#0b0b0b] rounded-b-3xl">
              <div className="flex w-full justify-end">
                <Button
                  type="submit"
                  className="h-10 rounded-full bg-amber-400 px-5 text-black font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.3)] transition-all hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Pay now
                </Button>
              </div>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

