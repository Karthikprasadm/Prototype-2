"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Contact {
  name: string
  phone: string
}

interface ContactListProps {
  contacts: Contact[]
}

export function ContactList({ contacts }: ContactListProps) {
  const [justCopied, setJustCopied] = useState<string | null>(null)

  const handleCopy = async (phone: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phone)
        setJustCopied(phone)
        setTimeout(() => setJustCopied(null), 1500)
        return
      }
    } catch {
      // fall through to prompt fallback
    }
    window.prompt("Copy this number:", phone)
  }

  return (
    <ul className="space-y-0 text-left text-white/70">
      {contacts.map((c, index) => (
        <li
          key={`${c.name}-${c.phone}-${index}`}
          className="flex min-h-0 flex-wrap items-center justify-start gap-1 py-0.5 text-[13px] sm:text-sm"
        >
          <a
            href={`tel:${c.phone}`}
            className="min-w-0 hover:text-white underline-offset-2 hover:underline touch-action-manipulation"
          >
            {c.name} — {c.phone}
          </a>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 min-h-7 min-w-7 shrink-0 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 touch-action-manipulation"
            onClick={() => handleCopy(c.phone)}
            aria-label={`Copy phone number for ${c.name}`}
          >
            <Copy className="h-2 w-2" />
          </Button>
          {justCopied === c.phone && (
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
              Gotcha!
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

